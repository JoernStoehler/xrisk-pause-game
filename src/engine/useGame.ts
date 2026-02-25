import { useCallback, useState } from "react";
import type { GameState } from "./types";
import { newGame, applyChoice, checkDeath } from "./state";
import { drawNextCard } from "./cards";
import { CARD_TEMPLATES } from "../data/cards";

const STORAGE_KEY = "global-pause-state";

function saveState(state: GameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable — ignore
  }
}

function loadState(): GameState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as GameState;
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
