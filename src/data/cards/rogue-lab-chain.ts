// Source: event-map #intelligence--rogue-lab-whistleblower
// Rationale: teaches the first-try problem. Raids reveal methods; slow verification
//   risks the run completing. Every enforcement action is a gamble.
// Dynamic: speed vs. certainty, enforcement capability consumed by enforcement actions
// Category: crisis (chain starter)

// Source: event-map #consequence--near-miss
// Rationale: teaches the fundamental paradox — classify and it becomes another
//   "nothing happened." Declassify and you prove the threat but burn sources.
// Dynamic: you can't demonstrate prevented catastrophes
// Category: consequence (follows rogue-lab-whistleblower left choice)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const rogueLabChainCards: Card[] = [
  {
    id: "rogue-lab-whistleblower",
    tags: ["whistleblowers", "rogue-actors"],
    idea: "whistleblower reports secret training at Nexus Computing, raid or verify",
    speaker: "Enforcement Chief",
    text: "Whistleblower inside Nexus Computing claims they're running unauthorized training at night using undeclared chips hidden in a legitimate datacenter. She's credible — senior engineer, no grudge, terrified of retaliation. But if we raid and she's wrong, we've burned inspection methods and credibility on a false alarm.",
    left: {
      label: "Immediate raid",
      effects: { int: -8, pol: -3 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 10 },
    },
    right: {
      label: "Gather more intelligence first",
      effects: { int: 3, alg: 3 },
    },
    poolWeight: () => 2,
  },
  {
    id: "near-miss",
    tags: ["rogue-actors", "enforcement-operations"],
    idea: "follow-up: raid found near-ASI run, classify or declassify the close call",
    speaker: "Chief Scientist",
    text: "The raid found it. 800 undeclared chips, partially completed run at 2×10²³ FLOP. My estimate: 15% chance it would have produced ASI. Nobody outside the agency knows how close this was. Classify it and it's another 'nothing happened.' Declassify and you prove the threat — but burn every source that led here.",
    left: {
      label: "Classify — protect sources",
      effects: { int: 5, pol: -5 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: 1 },
    },
    right: {
      label: "Declassify sanitized version",
      effects: { pol: 8, int: -10 },
    },
    poolWeight: (state: GameState) => {
      if (state.history.some((h) => h.cardId === "near-miss")) return 0;
      // Search newest-first so an old expired raid does not hide a newer one.
      const trigger = [...state.history].reverse().find(
        (h) => h.cardId === "rogue-lab-whistleblower" && h.choice === "left",
      );
      if (!trigger) return 0;
      const delay = state.turn - trigger.turn;
      if (delay < 1 || delay > 3) return 0;
      return 10;
    },
  },
];
