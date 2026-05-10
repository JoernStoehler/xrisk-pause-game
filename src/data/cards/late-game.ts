// STUB — placeholder cards so the game runs while real cards are being written.

import type { Card, GameState } from "../../engine/types";

export const lateGameCards: Card[] = [
  {
    id: "capability-jump",
    tags: ["algorithmic-progress", "dual-use-research"],
    idea: "published paper halves compute requirements, shrinking lethal threshold",
    speaker: "Deputy Director",
    text: "A research lab just published a paper that effectively halves compute requirements for frontier models. The algorithmic threshold just shrank.",
    left: { label: "Classify the paper", effects: { pol: -8, alg: 5 } },
    right: { label: "Let it circulate", effects: { alg: 10, saf: 3 } },
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 1;
    },
  },
  {
    id: "underground-network",
    tags: ["distributed-compute", "enforcement-operations"],
    idea: "decentralized lab network trains collectively above threshold",
    speaker: "Deputy Director",
    text: "We've discovered a decentralized network of small labs, each individually below compute thresholds but collectively training something massive.",
    left: { label: "Coordinate raids", effects: { int: 10, pol: -8 }, hiddenEffects: { enforcement_visibility: 2 } },
    right: { label: "Propose treaty amendment", effects: { pol: 5, int: -3 } },
    poolWeight: (state: GameState) => {
      if (state.turn < 15) return 0;
      return 2.5;
    },
  },
  {
    id: "safety-breakthrough",
    tags: ["alignment-research", "dual-use-research"],
    idea: "safety breakthrough requires running banned models to validate",
    speaker: "Deputy Director",
    text: "Safety researchers report a potential breakthrough — but validating it requires running the very models we banned.",
    left: { label: "Authorize controlled test", effects: { saf: 10, alg: 8, pol: -5 } },
    right: { label: "Too dangerous", effects: { pol: 5, saf: -3 } },
    poolWeight: (state: GameState) => {
      if (state.resources.saf < 70) return 0;
      return 2;
    },
  },
];
