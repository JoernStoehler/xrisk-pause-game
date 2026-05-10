/**
 * CLI playtest tool — plays the game headlessly, no React.
 *
 * Usage:
 *   npx tsx src/cli.ts              # New game, show first card
 *   npx tsx src/cli.ts show         # Print current card + resources
 *   npx tsx src/cli.ts left         # Swipe left, show result + next card
 *   npx tsx src/cli.ts right        # Swipe right, show result + next card
 *   npx tsx src/cli.ts state        # Full state dump (pool, history)
 *   npx tsx src/cli.ts reset        # New game
 *   npx tsx src/cli.ts auto <N>     # Random-play N turns, print summary
 */

import { readFileSync, writeFileSync } from "node:fs";
import { ALL_CARDS } from "./data/cards";
import { getDeathMessage } from "./data/deaths";
import { random } from "./engine/rng";
import { chooseInSession, startSession, type SessionContent } from "./engine/session";

const STATE_FILE = "/tmp/pause-cli-state.json";
const SESSION_CONTENT: SessionContent = {
  cards: ALL_CARDS,
  deathMessage: getDeathMessage,
};

function load(): GameState | null {
  try {
    return JSON.parse(readFileSync(STATE_FILE, "utf-8")) as GameState;
  } catch {
    return null;
  }
}

function save(state: GameState): void {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function barStr(value: number): string {
  const filled = Math.round(value / 5);
  const bar = "█".repeat(filled) + "░".repeat(20 - filled);
  const warning = value <= 10 || value >= 90 ? " ⚠" : "";
  return `${bar} ${value}${warning}`;
}

function printResources(state: GameState): void {
  const r = state.resources;
  console.log(
    `Turn ${state.turn} | pol:${r.pol} int:${r.int} saf:${r.saf} alg:${r.alg}`,
  );
  console.log(`  🛡  Political ${barStr(r.pol)}`);
  console.log(`  👁  Intel     ${barStr(r.int)}`);
  console.log(`  ✓  Safety    ${barStr(r.saf)}`);
  console.log(`  📈 Algorithm ${barStr(r.alg)}`);
}

function printCard(state: GameState): void {
  if (!state.activeCard) {
    console.log("No active card.");
    return;
  }
  const c = state.activeCard;
  console.log("─".repeat(45));
  console.log(`${c.speaker}:`);
  console.log(`"${c.text}"`);
  console.log();
  console.log(
    `← ${c.left.label.padEnd(20)} → ${c.right.label}`,
  );
  if (!c.down.disabled) {
    console.log(`↓ ${c.down.label}`);
  }
  console.log("─".repeat(45));

  // Pool info
  const eligible = ALL_CARDS.filter((c) => c.poolWeight(state) > 0).length;
  console.log(`Pool: ${eligible}/${ALL_CARDS.length} eligible`);
}

function printDeath(state: GameState): void {
  if (!state.death) return;
  console.log();
  console.log("╔═══════════════════════════════════════════╗");
  console.log("║              YOU HAVE FAILED              ║");
  console.log("╚═══════════════════════════════════════════╝");
  console.log();
  console.log(`${state.death.resource} ${state.death.extreme}`);
  console.log(state.death.message);
  console.log();
  console.log(`Survived ${state.turn} turns.`);
}

function initGame(): GameState {
  return startSession(SESSION_CONTENT);
}

function step(state: GameState, choice: "left" | "right"): GameState {
  return chooseInSession(state, choice, SESSION_CONTENT);
}

// --- Main ---
const cmd = process.argv[2] || "new";

if (cmd === "reset" || cmd === "new") {
  const s = initGame();
  save(s);
  printResources(s);
  printCard(s);
} else if (cmd === "show") {
  const s = load();
  if (!s) {
    console.log("No game in progress. Run without arguments to start.");
    process.exit(1);
  }
  printResources(s);
  if (s.phase === "dead") {
    printDeath(s);
  } else {
    printCard(s);
  }
} else if (cmd === "left" || cmd === "right") {
  let s = load();
  if (!s || s.phase === "dead" || !s.activeCard) {
    console.log("No active game. Run 'reset' to start a new game.");
    process.exit(1);
  }
  s = step(s, cmd);
  save(s);
  printResources(s);
  if (s.phase === "dead") {
    printDeath(s);
  } else {
    printCard(s);
  }
} else if (cmd === "state") {
  const s = load();
  if (!s) {
    console.log("No game in progress.");
    process.exit(1);
  }
  printResources(s);
  console.log();
  console.log("History:");
  for (const h of s.history) {
    console.log(`  Turn ${h.turn}: ${h.cardId} → ${h.choice}`);
  }
  console.log();
  console.log("Hidden state:");
  for (const [key, val] of Object.entries(s.hidden)) {
    console.log(`  ${key}: ${val}`);
  }
  console.log();
  console.log("Card pool:");
  let eligible = 0;
  for (const card of ALL_CARDS) {
    const w = card.poolWeight(s);
    if (w > 0) {
      console.log(`  ${card.id}: ${w}`);
      eligible++;
    }
  }
  console.log(`\n${eligible}/${ALL_CARDS.length} eligible`);
} else if (cmd === "auto") {
  const turns = parseInt(process.argv[3] || "20", 10);
  let s = initGame();
  console.log(`Auto-playing ${turns} turns...\n`);
  // Separate RNG for auto-play coin flips — doesn't interfere with game state
  const coinRng = { rngState: s.rngState ^ 0x12345678 };
  for (let i = 0; i < turns; i++) {
    if (s.phase === "dead" || !s.activeCard) break;
    const choice = random(coinRng) < 0.5 ? "left" as const : "right" as const;
    const card = s.activeCard;
    const choiceOption = choice === "left" ? card.left : card.right;
    console.log(
      `Turn ${s.turn}: ${card.speaker} → ${choice} "${choiceOption.label}"`,
    );
    s = step(s, choice);
  }
  save(s);
  console.log();
  printResources(s);
  if (s.phase === "dead") {
    printDeath(s);
  } else {
    printCard(s);
  }
} else {
  console.log(
    "Usage: npx tsx src/cli.ts [show|left|right|state|reset|auto <N>]",
  );
  process.exit(1);
}
