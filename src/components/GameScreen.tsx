import { useCallback, useState } from "react";
import type { GameState } from "../engine/types";
import type { TiltDirection } from "../hooks/useSwipe";
import { ResourceIcons } from "./ResourceIcons";
import { SwipeCard } from "./SwipeCard";

interface GameScreenProps {
  state: GameState;
  onChoice: (choice: "left" | "right") => void;
}

export function GameScreen({ state, onChoice }: GameScreenProps) {
  const [tiltDirection, setTiltDirection] = useState<TiltDirection>("center");

  // Reset tilt immediately on commit so preview indicators don't briefly
  // flash the new card's previews before the new SwipeCard mounts
  const handleChoice = useCallback(
    (choice: "left" | "right") => {
      setTiltDirection("center");
      onChoice(choice);
    },
    [onChoice],
  );

  if (!state.activeCard) return null;

  return (
    <div className="flex flex-col min-h-dvh">
      {/* Dark top bar — resource icons */}
      <ResourceIcons
        resources={state.resources}
        tiltDirection={tiltDirection}
        leftPreviews={state.activeCard.left.previews}
        rightPreviews={state.activeCard.right.previews}
      />

      {/* Tan middle zone — card area */}
      <div className="flex-1 flex flex-col bg-tan py-2">
        <SwipeCard
          key={state.activeCard.templateId + "-" + state.turn}
          card={state.activeCard}
          onChoice={handleChoice}
          onTiltChange={setTiltDirection}
        />
      </div>

      {/* Dark bottom bar — year display */}
      <div className="bg-bar-dark px-5 py-5 flex justify-center">
        <span className="text-text-light text-2xl font-bold">
          {2026 + Math.floor(state.turn / 12)}
        </span>
      </div>
    </div>
  );
}
