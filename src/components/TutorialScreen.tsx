import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ActiveCard } from "../engine/card";
import type { TiltDirection } from "../hooks/useSwipe";
import { TUTORIAL_CARDS } from "../content/tutorial";
import { ResourceIcons } from "./ResourceIcons";
import { SwipeCard, type SwipeCardHandle } from "./SwipeCard";

interface TutorialScreenProps {
  tutorialIndex: number;
  onAdvance: () => void;
  onSkip: () => void;
}

export function TutorialScreen({ tutorialIndex, onAdvance, onSkip }: TutorialScreenProps) {
  const [tiltDirection, setTiltDirection] = useState<TiltDirection>("center");
  const cardRef = useRef<SwipeCardHandle>(null);
  const tutorial = TUTORIAL_CARDS[tutorialIndex];

  // Build a fake ActiveCard so SwipeCard can render it unchanged
  const fakeCard: ActiveCard = useMemo(() => ({
    templateId: tutorial.id,
    speaker: tutorial.speaker,
    text: tutorial.text,
    left: {
      label: tutorial.leftLabel,
      previews: [],
      disabled: false,
    },
    right: {
      label: tutorial.rightLabel,
      previews: [],
      disabled: false,
    },
    down: {
      label: "",
      previews: [],
      disabled: true,
    },
  }), [tutorial]);

  const handleChoice = useCallback(() => {
    setTiltDirection("center");
    onAdvance();
  }, [onAdvance]);

  // Keyboard controls (same pattern as GameScreen) + Escape to skip
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        e.preventDefault();
        cardRef.current?.commit("left");
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        e.preventDefault();
        cardRef.current?.commit("right");
      } else if (e.key === "Escape") {
        e.preventDefault();
        onSkip();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onSkip]);

  const resources = { political: 50, intelligence: 50, safety: 50, algorithmic: 50 };

  return (
    <div className="flex flex-col h-full" data-testid="tutorial-screen" role="main">
      {/* Dark top bar — resource icons with optional highlight */}
      <ResourceIcons
        resources={resources}
        tiltDirection={tiltDirection}
        leftPreviews={[]}
        rightPreviews={[]}
        downPreviews={[]}
        highlight={tutorial.highlightResources}
      />

      {/* Tan middle zone — tutorial card */}
      <div className="flex-1 flex flex-col bg-tan py-2">
        <SwipeCard
          ref={cardRef}
          key={tutorial.id}
          card={fakeCard}
          onChoice={handleChoice}
          onTiltChange={setTiltDirection}
        />
      </div>

      {/* Dark bottom bar — skip button instead of year */}
      <div className="bg-bar-dark px-5 py-5 flex justify-center">
        <button
          className="text-text-muted text-xs font-bold uppercase tracking-wider min-h-[44px] cursor-pointer"
          onClick={onSkip}
          data-testid="skip-tutorial-button"
          aria-label="Skip tutorial and start playing"
        >
          Skip Tutorial
        </button>
      </div>
    </div>
  );
}
