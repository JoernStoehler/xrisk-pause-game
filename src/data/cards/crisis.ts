// STUB — placeholder cards so the game runs while real cards are being written.

import type { Card, GameState } from "../../engine/types";

export const crisisCards: Card[] = [
  {
    id: "pol-crisis-low",
    tags: ["political-support", "media-narrative"],
    idea: "crisis: political support cratering, need dramatic gesture",
    speaker: "Deputy Director",
    text: "Public approval is cratering. Protests outside ISIA headquarters. We need a dramatic gesture to restore confidence.",
    left: { label: "Major transparency push", effects: { pol: 15, int: -10 } },
    right: { label: "Ignore the protests", effects: { pol: 5, int: 5 } },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.resources.pol >= 20) return 0;
      return 5;
    },
  },
  {
    id: "int-crisis-low",
    tags: ["intelligence-agencies"],
    idea: "crisis: intelligence network gone dark, emergency recruitment",
    speaker: "Deputy Director",
    text: "Our intelligence network has gone dark. We're missing critical signals. Emergency recruitment of informants?",
    left: { label: "Emergency recruitment", effects: { int: 15, pol: -8 } },
    right: { label: "Use existing channels", effects: { int: 5, pol: 3 } },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.resources.int >= 20) return 0;
      return 5;
    },
  },
  {
    id: "int-crisis-high",
    tags: ["civil-liberties", "international-diplomacy"],
    idea: "crisis: intelligence too powerful, nations demand dismantling programs",
    speaker: "Deputy Director",
    text: "Your intelligence network has grown too powerful. Three nations are demanding you dismantle monitoring programs or they walk.",
    left: { label: "Scale back surveillance", effects: { int: -15, pol: 8 } },
    right: { label: "Defend the programs", effects: { int: 5, pol: -10 } },
    color: "#f97316",
    poolWeight: (state: GameState) => {
      if (state.resources.int <= 80) return 0;
      return 5;
    },
  },
  {
    id: "pol-crisis-high",
    tags: ["political-support", "institutional-integrity"],
    idea: "crisis: political power too high, accused of empire-building",
    speaker: "Deputy Director",
    text: "Multiple delegations accuse you of empire-building. They want oversight reforms.",
    left: { label: "Accept oversight", effects: { pol: -15, int: 5 } },
    right: { label: "Resist reforms", effects: { pol: 5, int: -8 } },
    color: "#f97316",
    poolWeight: (state: GameState) => {
      if (state.resources.pol <= 80) return 0;
      return 5;
    },
  },
];
