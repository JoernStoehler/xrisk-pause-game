// STUB — placeholder cards so the game runs while real cards are being written.

import type { Card, GameState } from "../../engine/types";

export const politicalCards: Card[] = [
  {
    id: "treaty-threat",
    tags: ["international-diplomacy", "treaty-compliance"],
    idea: "major signatory threatens withdrawal over enforcement posture",
    speaker: "Deputy Director",
    text: "A major signatory is threatening to withdraw from the treaty. They say enforcement is too aggressive. Or maybe not aggressive enough.",
    left: { label: "Offer concessions", effects: { pol: -10, int: 8 } },
    right: { label: "Stand firm", effects: { pol: 8, int: -5 } },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "senate-hearing",
    tags: ["political-support"],
    idea: "US Senate hearing on ISIA effectiveness, American funding at stake",
    speaker: "Deputy Director",
    text: "The US Senate wants you to testify about ISIA effectiveness. They're skeptical. Your performance here affects American funding.",
    left: { label: "Show strength", effects: { pol: 10, int: -5 } },
    right: { label: "Ask for patience", effects: { pol: 5, int: -3 } },
    poolWeight: (state: GameState) => {
      if (state.turn < 3) return 0;
      return 1;
    },
  },
];
