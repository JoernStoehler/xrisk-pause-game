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
import type { GameState } from "./engine/types";
import { newGame, applyChoice, checkDeath } from "./engine/state";
import { drawNextCard } from "./engine/cards";
import { CARD_TEMPLATES } from "./data/cards";
import { random } from "./engine/rng";

const STATE_FILE = "/tmp/pause-cli-state.json";

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
    `Turn ${state.turn} | trust:${r.trust} funding:${r.funding} intel:${r.intel} leverage:${r.leverage}`,
  );
  console.log(`  🛡  Trust    ${barStr(r.trust)}`);
  console.log(`  💰 Funding  ${barStr(r.funding)}`);
  console.log(`  👁  Intel    ${barStr(r.intel)}`);
  console.log(`  ⚖  Leverage ${barStr(r.leverage)}`);
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
  console.log("─".repeat(45));

  // Pool info
  const eligible = CARD_TEMPLATES.filter((t) => t.weight(state) > 0).length;
  console.log(`Pool: ${eligible}/${CARD_TEMPLATES.length} eligible`);
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
  const s = newGame();
  return drawNextCard(s, CARD_TEMPLATES);
}

function step(state: GameState, choice: "left" | "right"): GameState {
  const s = applyChoice(state, choice);
  const death = checkDeath(s);
  if (death) {
    return { ...s, phase: "dead", death };
  }
  return drawNextCard(s, CARD_TEMPLATES);
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
  console.log("Card pool weights:");
  for (const t of CARD_TEMPLATES) {
    const w = t.weight(s);
    if (w > 0) {
      console.log(`  ${t.id}: ${w}`);
    }
  }
  const eligible = CARD_TEMPLATES.filter((t) => t.weight(s) > 0).length;
  console.log(`\n${eligible}/${CARD_TEMPLATES.length} eligible`);
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
