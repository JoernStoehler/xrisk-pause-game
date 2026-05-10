import { useCallback, useState } from "react";
import { ALL_CARDS } from "../data/cards";
import { getDeathMessage } from "../data/deaths";
import { TUTORIAL_CARDS } from "../data/tutorial";
import {
  chooseInSession,
  restartSession,
  startSession,
  type SessionContent,
} from "../engine/session";
import { newGame } from "../engine/state";
import type { ChoiceDirection, GameState } from "../engine/types";
import { loadState, saveState } from "./storage";
import { isTutorialCompleted, markTutorialCompleted } from "./tutorialStorage";

const SESSION_CONTENT: SessionContent = {
  cards: ALL_CARDS,
  deathMessage: getDeathMessage,
};

export function useGame() {
  const [state, setState] = useState<GameState>(() => {
    const saved = loadState(ALL_CARDS);
    if (saved && saved.phase !== "title") return saved;
    return { ...newGame(), phase: "title" };
  });
  const [tutorialIndex, setTutorialIndex] = useState(0);

  const startGame = useCallback(() => {
    if (!isTutorialCompleted()) {
      setState({ ...newGame(), phase: "tutorial" });
      setTutorialIndex(0);
      return;
    }

    const nextState = startSession(SESSION_CONTENT);
    setState(nextState);
    saveState(nextState);
  }, []);

  const advanceTutorial = useCallback(() => {
    const nextIndex = tutorialIndex + 1;
    if (nextIndex < TUTORIAL_CARDS.length) {
      setTutorialIndex(nextIndex);
      return;
    }

    markTutorialCompleted();
    const nextState = startSession(SESSION_CONTENT);
    setState(nextState);
    saveState(nextState);
  }, [tutorialIndex]);

  const skipTutorial = useCallback(() => {
    markTutorialCompleted();
    const nextState = startSession(SESSION_CONTENT);
    setState(nextState);
    saveState(nextState);
  }, []);

  const choose = useCallback(
    (choice: ChoiceDirection) => {
      const nextState = chooseInSession(state, choice, SESSION_CONTENT);
      setState(nextState);
      saveState(nextState);
    },
    [state],
  );

  const restart = useCallback(() => {
    const nextState = restartSession(SESSION_CONTENT);
    setState(nextState);
    saveState(nextState);
  }, []);

  return {
    state,
    startGame,
    choose,
    restart,
    tutorialIndex,
    advanceTutorial,
    skipTutorial,
  };
}
