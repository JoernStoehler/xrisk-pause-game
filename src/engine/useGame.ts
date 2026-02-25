import { useCallback, useState } from "react";
import type { GameState } from "./types";
import { newGame, applyChoice, checkDeath } from "./state";
import { drawNextCard } from "./cards";
import { CARD_TEMPLATES } from "../data/cards";

const STORAGE_KEY = "global-pause-state";
// Bump this when the save format changes (e.g. new fields, restructured data).
// Any localStorage data with a different version is discarded.
const STORAGE_VERSION = 2;

function saveState(state: GameState): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ v: STORAGE_VERSION, state }),
    );
  } catch {
    // localStorage full or unavailable — ignore
  }
}

function loadState(): GameState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { v?: number; state?: GameState };
    // Discard saves from older (or missing) format versions
    if (parsed.v !== STORAGE_VERSION || !parsed.state) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    const state = parsed.state;
    // Rehydrate activeCard: JSON strips functions (apply),
    // so restore left/right from the matching card template.
    if (state.activeCard) {
      const template = CARD_TEMPLATES.find(
        (t) => t.id === state.activeCard!.templateId,
      );
      if (template) {
        state.activeCard.left = template.left;
        state.activeCard.right = template.right;
      } else {
        state.activeCard = null;
      }
    }
    return state;
  } catch {
    return null;
  }
}

export function useGame() {
  const [state, setState] = useState<GameState>(() => {
    const saved = loadState();
    if (saved && saved.phase !== "title") return saved;
    return { ...newGame(), phase: "title" };
  });

  const startGame = useCallback(() => {
    const s = newGame();
    const withCard = drawNextCard(s, CARD_TEMPLATES);
    setState(withCard);
    saveState(withCard);
  }, []);

  const choose = useCallback(
    (choice: "left" | "right") => {
      let s = applyChoice(state, choice);
      const death = checkDeath(s);
      if (death) {
        s = { ...s, phase: "dead", death };
      } else {
        s = drawNextCard(s, CARD_TEMPLATES);
      }
      setState(s);
      saveState(s);
    },
    [state],
  );

  const restart = useCallback(() => {
    const s = newGame();
    const withCard = drawNextCard(s, CARD_TEMPLATES);
    setState(withCard);
    saveState(withCard);
  }, []);

  return { state, startGame, choose, restart };
}
