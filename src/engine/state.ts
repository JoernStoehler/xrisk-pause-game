import type {
  ChoiceDirection,
  DeathCause,
  GameState,
} from "./types";
import { RESOURCE_KEYS } from "./types";

export function newGame(seed?: number): GameState {
  return {
    phase: "playing",
    resources: { pol: 50, int: 50, saf: 50, alg: 50 },
    hidden: {},
    turn: 0,
    activeCard: null,
    rngState: seed ?? Date.now(),
    death: null,
    history: [],
  };
}

export function applyChoice(
  state: GameState,
  choice: ChoiceDirection,
): GameState {
  if (!state.activeCard) return state;

  const option = state.activeCard[choice];
  if (option.disabled) return state;

  const applied = option.apply(state);

  const historyEntry = {
    turn: state.turn,
    cardId: state.activeCard.templateId,
    choice,
  };

  return {
    ...applied,
    turn: state.turn + 1,
    activeCard: null,
    history: [...state.history, historyEntry],
  };
}

export function checkDeathCause(state: GameState): DeathCause | null {
  for (const key of RESOURCE_KEYS) {
    const value = state.resources[key];
    if (value <= 0) {
      return {
        resource: key,
        extreme: "depleted",
      };
    }
    if (value >= 100) {
      return {
        resource: key,
        extreme: "overloaded",
      };
    }
  }
  return null;
}
