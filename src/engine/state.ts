import type {
  DeathInfo,
  Effect,
  GameState,
  Resources,
  ResourceKey,
} from "./types";
import { DEATH_MESSAGES } from "../data/deaths";

const RESOURCE_KEYS: ResourceKey[] = [
  "trust",
  "funding",
  "intel",
  "leverage",
];

export function newGame(seed?: number): GameState {
  return {
    phase: "playing",
    resources: { trust: 50, funding: 50, intel: 50, leverage: 50 },
    turn: 0,
    activeCard: null,
    rngState: seed ?? Date.now(),
    death: null,
    history: [],
  };
}

export function applyEffects(
  resources: Resources,
  effects: Effect[],
): Resources {
  const next = { ...resources };
  for (const e of effects) {
    next[e.resource] = Math.max(0, Math.min(100, next[e.resource] + e.delta));
  }
  return next;
}

export function applyChoice(
  state: GameState,
  choice: "left" | "right",
): GameState {
  if (!state.activeCard) return state;

  const option = choice === "left" ? state.activeCard.left : state.activeCard.right;
  const resources = applyEffects(state.resources, option.effects);

  const historyEntry = {
    turn: state.turn,
    cardId: state.activeCard.templateId,
    choice,
  };

  return {
    ...state,
    resources,
    turn: state.turn + 1,
    activeCard: null,
    history: [...state.history, historyEntry],
  };
}

export function checkDeath(state: GameState): DeathInfo | null {
  for (const key of RESOURCE_KEYS) {
    const value = state.resources[key];
    if (value <= 0) {
      const msgs = DEATH_MESSAGES[key].depleted;
      return {
        resource: key,
        extreme: "depleted",
        message: msgs[state.turn % msgs.length],
      };
    }
    if (value >= 100) {
      const msgs = DEATH_MESSAGES[key].overloaded;
      return {
        resource: key,
        extreme: "overloaded",
        message: msgs[state.turn % msgs.length],
      };
    }
  }
  return null;
}
