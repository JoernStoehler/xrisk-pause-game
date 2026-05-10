// Source: event-map #era--safety-looks-solved
// Rationale: teaches that sub-ASI alignment ≠ ASI alignment. When safety "looks solved,"
//   the political landscape shifts dangerously. Nations want to relax the treaty precisely
//   when the hardest part remains.
// Dynamic: game gets HARDER when safety appears achievable
// Category: crisis (era transition, saf-gated)

// Source: event-map #era--race-begins
// Rationale: teaches that political confidence ≠ technical confidence. After safety
//   "looks solved," nations start ASI programs. The pause gets HARDER, not easier.
// Dynamic: race dynamic after safety looks solved; political confidence diverges from reality
// Category: crisis (follows safety-looks-solved)

import type { Card, GameState } from "../../engine/types";

export const safetyEraChainCards: Card[] = [
  {
    id: "safety-looks-solved",
    tags: ["alignment-research", "political-support"],
    idea: "sub-ASI alignment breakthrough mistaken for full solution, pressure to relax treaty",
    speaker: "Chief Scientist",
    text: "Formal verification breakthrough for sub-ASI systems. Every major outlet: 'Alignment is solved.' My assessment: we solved the easy part. Sub-ASI alignment and ASI alignment are categorically different problems. But three nations are already lobbying to relax the treaty based on the headlines.",
    left: {
      label: "Embrace the narrative",
      effects: { pol: 12, saf: -5 },
      hiddenEffects: { narrative_damage: 2 },
    },
    right: {
      label: "Correct the record",
      effects: { pol: -10, saf: 5 },
    },
    color: "#f97316",
    poolWeight: (state: GameState) => {
      if (state.resources.saf < 60) return 0;
      // Only fire once
      if (state.history.some((h) => h.cardId === "safety-looks-solved")) return 0;
      return 5;
    },
  },
  {
    id: "race-begins",
    tags: ["treaty-compliance", "rogue-actors"],
    idea: "follow-up: nations start 'defensive ASI programs' claiming alignment is solved",
    speaker: "Diplomatic Attaché",
    text: "Two major nations have begun 'defensive ASI programs' — claiming alignment is solved so the treaty is outdated. Programs technically violate the treaty. They're daring us to enforce. If we don't, the pause is over. If we do, it's the biggest international crisis since the treaty signing.",
    left: {
      label: "Enforce the treaty",
      effects: { pol: -15, int: -8 },
    },
    right: {
      label: "Negotiate new terms",
      effects: { pol: -5, alg: 10 },
      hiddenEffects: { treaty_erosion: 2 },
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      const trigger = state.history.find(
        (h) => h.cardId === "safety-looks-solved",
      );
      if (!trigger) return 0;
      const delay = state.turn - trigger.turn;
      if (delay < 2 || delay > 5) return 0;
      return 8;
    },
  },
];
