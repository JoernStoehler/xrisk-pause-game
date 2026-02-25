import type { ActiveCard, CardTemplate, GameState } from "./types";
import { weightedPick } from "./rng";

const ANTI_REPEAT_WINDOW = 3;

export function drawNextCard(
  state: GameState,
  templates: CardTemplate[],
): GameState {
  // Compute weights, filtering out zero-weight and recently-drawn cards
  const recentIds = new Set(
    state.history.slice(-ANTI_REPEAT_WINDOW).map((h) => h.cardId),
  );

  const eligible: CardTemplate[] = [];
  const weights: number[] = [];

  for (const t of templates) {
    if (recentIds.has(t.id)) continue;
    const w = t.weight(state);
    if (w > 0) {
      eligible.push(t);
      weights.push(w);
    }
  }

  if (eligible.length === 0) {
    // Fallback: if nothing is eligible (shouldn't happen with enough content),
    // pick from all templates ignoring anti-repeat
    for (const t of templates) {
      const w = t.weight(state);
      if (w > 0) {
        eligible.push(t);
        weights.push(w);
      }
    }
  }

  if (eligible.length === 0) {
    // Truly no cards available — force death
    return {
      ...state,
      phase: "dead",
      death: {
        resource: "intel",
        extreme: "depleted",
        message: "The world fell silent. No reports, no events, no warnings. And then it was too late.",
      },
    };
  }

  // weightedPick mutates state.rngState in-place, so we need a mutable copy
  const rng = { rngState: state.rngState };
  const picked = weightedPick(rng, eligible, weights);

  const activeCard: ActiveCard = {
    templateId: picked.id,
    speaker: picked.speaker,
    text: picked.text,
    left: picked.left,
    right: picked.right,
    color: picked.color,
  };

  return {
    ...state,
    rngState: rng.rngState,
    activeCard,
  };
}
