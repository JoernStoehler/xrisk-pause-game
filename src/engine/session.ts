import type { ActiveCard, CardDefinition } from "./card";
import { resolveActiveCard } from "./card";
import { drawNextCard } from "./draw";
import type { ChoiceDirection, History } from "./history";
import { applyCardChoice } from "./reduce";
import {
  checkDeathCause,
  initialState,
  type DeathCause,
  type DeathInfo,
  type State,
} from "./state";

export type GamePhase = "title" | "tutorial" | "playing" | "dead" | "victory";

export interface GameState {
  phase: GamePhase;
  world: State;
  activeCard: ActiveCard | null;
  rngState: number;
  death: DeathInfo | null;
  history: History;
}

export interface SessionContent {
  cards: readonly CardDefinition[];
  deathMessage: (cause: DeathCause, decisionCount: number) => string;
}

export function newGame(seed = Date.now()): GameState {
  return {
    phase: "playing",
    world: initialState(),
    activeCard: null,
    rngState: seed,
    death: null,
    history: [{ type: "gameStarted", seed }],
  };
}

function failNoEligibleCard(state: GameState): GameState {
  return {
    ...state,
    phase: "dead",
    death: {
      resource: "intelligence",
      extreme: "depleted",
      message:
        "No eligible card remained in the model. The agency stopped learning what could happen next.",
    },
  };
}

function appendDrawnCard(
  history: History,
  draw: NonNullable<ReturnType<typeof drawNextCard>>,
  elapsedMonths: number,
): History {
  return [
    ...history,
    {
      type: "cardDrawn",
      elapsedMonths,
      deltaMonths: draw.elapsedMonths,
      cardId: draw.card.id,
      rngStateBefore: draw.rngStateBefore,
      rngStateAfter: draw.rngStateAfter,
      totalRate: draw.totalRate,
    },
  ];
}

function drawForSession(state: GameState, content: SessionContent): GameState {
  const draw = drawNextCard(content.cards, state.world, state.history, state.rngState);
  if (!draw) return failNoEligibleCard(state);
  const world = {
    ...state.world,
    elapsedMonths: state.world.elapsedMonths + draw.elapsedMonths,
  };
  const history = appendDrawnCard(state.history, draw, world.elapsedMonths);

  return {
    ...state,
    world,
    activeCard: resolveActiveCard(draw.card, world, history),
    rngState: draw.rngStateAfter,
    history,
  };
}

export function startSession(content: SessionContent, seed?: number): GameState {
  return drawForSession(newGame(seed), content);
}

export function chooseInSession(
  state: GameState,
  choice: ChoiceDirection,
  content: SessionContent,
): GameState {
  if (state.phase !== "playing" || !state.activeCard) return state;
  if (state.activeCard[choice].disabled) return state;

  const card = content.cards.find((candidate) => candidate.id === state.activeCard!.templateId);
  if (!card) return drawForSession({ ...state, activeCard: null }, content);

  const choiceEvent = {
    type: "choiceCommitted" as const,
    elapsedMonths: state.world.elapsedMonths,
    decisionIndex: state.world.decisionCount,
    cardId: card.id,
    choice,
  };
  const reducedWorld = applyCardChoice(card, state.world, state.history, choice);
  const history = [...state.history, choiceEvent];
  const world = { ...reducedWorld, decisionCount: reducedWorld.decisionCount + 1 };

  const deathCause = checkDeathCause(world);
  if (deathCause) {
    return {
      ...state,
      world,
      activeCard: null,
      phase: "dead",
      death: {
        ...deathCause,
        message: content.deathMessage(deathCause, world.decisionCount),
      },
      history,
    };
  }

  return drawForSession(
    {
      ...state,
      world,
      activeCard: null,
      history,
    },
    content,
  );
}

export function restartSession(content: SessionContent, seed?: number): GameState {
  return startSession(content, seed);
}

function drawReplacementCard(
  state: GameState,
  cards: readonly CardDefinition[],
): GameState {
  const draw = drawNextCard(cards, state.world, state.history, state.rngState);
  if (!draw) return { ...state, activeCard: null };
  const world = {
    ...state.world,
    elapsedMonths: state.world.elapsedMonths + draw.elapsedMonths,
  };
  const history = appendDrawnCard(state.history, draw, world.elapsedMonths);

  return {
    ...state,
    world,
    activeCard: resolveActiveCard(draw.card, world, history),
    rngState: draw.rngStateAfter,
    history,
  };
}

export function rehydrateActiveCard(
  state: GameState,
  cards: readonly CardDefinition[],
): GameState {
  if (state.phase !== "playing") return state;
  if (!state.activeCard) {
    return drawReplacementCard(state, cards);
  }

  const card = cards.find((candidate) => candidate.id === state.activeCard!.templateId);
  if (!card) return drawReplacementCard({ ...state, activeCard: null }, cards);
  return {
    ...state,
    activeCard: resolveActiveCard(card, state.world, state.history),
  };
}
