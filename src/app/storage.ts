import { rehydrateActiveCard } from "../engine/session";
import type { CardDefinition } from "../engine/card";
import type { GameState } from "../engine/session";

const STORAGE_KEY = "global-pause-state";
// Bump this when the save format changes. Saves with a different version are discarded.
const STORAGE_VERSION = 6;

export function saveState(state: GameState): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ v: STORAGE_VERSION, state }),
    );
  } catch {
    // localStorage full or unavailable; ignore.
  }
}

export function loadState(cards: readonly CardDefinition[]): GameState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as { v?: number; state?: GameState };
    if (parsed.v !== STORAGE_VERSION || !parsed.state) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return rehydrateActiveCard(parsed.state, cards);
  } catch {
    return null;
  }
}
