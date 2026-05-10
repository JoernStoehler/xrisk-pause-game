// Source: event-map #international--airstrike-debate, #international--post-strike-fallout
// Rationale: teaches that the escalation ladder is real. Military force as last resort
//   creates destabilizing dynamics. "The treaty says we can" ≠ "we can do this."
//   Military force has second-order political costs exceeding the first-order enforcement
//   benefit. A deterrent you actually use becomes less credible, not more.
// Dynamic: enforcement escalation; military force creates its own problems;
//   enforcement vs. backlash; political support IS the pause
// Category: crisis chain (late-game, int-gated → history-triggered consequence)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const militaryEscalationCards: Card[] = [
  // --- airstrike-debate ---
  {
    id: "airstrike-debate",
    tags: ["military-ai", "enforcement-operations"],
    idea: "military strike on confirmed compute cluster in non-treaty state",
    speaker: "NATO Liaison",
    text: "Diplomacy failed against a confirmed large-scale compute cluster in a non-treaty state. The Security Council referred it for protective action. The US Joint Chiefs have a strike plan — precision airstrikes on the facility's power infrastructure. China abstains. If it escalates into conventional conflict, does the pause survive?",
    left: {
      label: "Authorize the strike",
      effects: { pol: -15, int: 5 },
    },
    right: {
      label: "Sanctions and covert sabotage",
      effects: { pol: -5, int: -5, alg: 5 },
    },
    down: {
      label: "Cyber operation",
      effects: { int: -8, pol: -3 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 2 },
      enabled: (state: GameState) => state.resources.int >= 50,
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 15) return 0;
      if (state.resources.int < 30) return 0;
      return 3;
    },
  },

  // --- post-strike-fallout ---
  {
    id: "post-strike-fallout",
    tags: ["military-ai", "international-diplomacy"],
    idea: "follow-up: airstrike succeeded but treaty nations reviewing commitments",
    speaker: "Diplomatic Attaché",
    text: "The airstrike succeeded — the compute cluster is destroyed. But two treaty nations with ties to the target are 'reviewing their commitments.' Strike footage is on every screen worldwide. The non-aligned movement called an emergency session. Russia introduced a UN resolution condemning us. Our diplomat reports privately: 'If this is what the treaty means, three to five members never should have signed.'",
    left: {
      label: "Double down — this is what Article XII is for",
      effects: { pol: -12, int: -5 },
    },
    right: {
      label: "Express regret, propose review of procedures",
      effects: { pol: -5, int: -3 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: -1 },
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      const trigger = state.history.find(
        (h) => h.cardId === "airstrike-debate" && h.choice === "left",
      );
      if (!trigger) return 0;
      const delay = state.turn - trigger.turn;
      if (delay < 1 || delay > 3) return 0;
      return 10;
    },
  },
];
