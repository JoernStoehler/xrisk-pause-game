// Source: event-map #era--pivotal-moment
// Rationale: WIN CONDITION. After decades, formal proof of corrigibility for ASI.
//   The pause was buying time for this. Final decision is terrifying even with proof.
// Dynamic: the pause was always temporary — this is what it was for
// Category: special (win condition trigger, saf-gated + turn-gated)

import type { Card, GameState } from "../../engine/types";

export const winConditionCards: Card[] = [
  {
    id: "pivotal-moment",
    tags: ["alignment-research", "international-diplomacy"],
    idea: "win condition: formal proof of corrigibility, approve deployment of safe ASI",
    speaker: "Chief Scientist",
    text: "After decades, researchers present a formal proof of corrigibility for ASI-capable architectures. We can build a corrigible, low-impact ASI to monitor all compute globally. The acute risk period can end. But deployment requires the largest training run ever — orders of magnitude above the threshold. If the proof is wrong, this is the last mistake anyone makes.",
    left: {
      label: "Approve deployment",
      effects: { saf: 15, alg: 15 },
    },
    right: {
      label: "Demand more verification",
      effects: { pol: -10, saf: 5 },
    },
    down: {
      label: "International conference",
      effects: { pol: 5, saf: 3 },
      enabled: (state: GameState) => !((state.hidden.treaty_erosion ?? 0) > 3),
    },
    color: "#22c55e",
    // Only fire once
    poolWeight: (state: GameState) => {
      if (state.resources.saf < 75) return 0;
      if (state.turn < 20) return 0;
      if (state.history.some((h) => h.cardId === "pivotal-moment")) return 0;
      return 10;
    },
  },
];
