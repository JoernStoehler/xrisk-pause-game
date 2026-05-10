import { drawNextCard } from "./cards";
import { applyChoice, checkDeathCause, newGame } from "./state";
import type {
  Card,
  ChoiceDirection,
  DeathCause,
  GameState,
} from "./types";

export interface SessionContent {
  cards: readonly Card[];
  deathMessage: (cause: DeathCause, turn: number) => string;
}

export function startSession(content: SessionContent, seed?: number): GameState {
  return drawNextCard(newGame(seed), content.cards);
}

export function chooseInSession(
  state: GameState,
  choice: ChoiceDirection,
  content: SessionContent,
): GameState {
  const applied = applyChoice(state, choice);
  const deathCause = checkDeathCause(applied);
  if (deathCause) {
    return {
      ...applied,
      phase: "dead",
      death: {
        ...deathCause,
        message: content.deathMessage(deathCause, applied.turn),
      },
    };
  }
  return drawNextCard(applied, content.cards);
}

export function restartSession(content: SessionContent, seed?: number): GameState {
  return startSession(content, seed);
}

export function rehydrateActiveCard(
  state: GameState,
  cards: readonly Card[],
): GameState {
  if (!state.activeCard) return state;

  const card = cards.find((candidate) => candidate.id === state.activeCard!.templateId);
  if (!card) return { ...state, activeCard: null };

  const redrawn = drawNextCard(
    { ...state, activeCard: null },
    [{ ...card, poolWeight: () => 1 }],
  );
  return { ...state, activeCard: redrawn.activeCard };
}
