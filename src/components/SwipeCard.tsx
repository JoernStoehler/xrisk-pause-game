import { forwardRef, useEffect, useImperativeHandle } from "react";
import type { ActiveCard, ChoiceDirection } from "../engine/types";
import { useSwipe, type TiltDirection } from "../hooks/useSwipe";
import { audio } from "../hooks/useAudio";
import { SpeakerPortrait } from "./SpeakerPortrait";

export interface SwipeCardHandle {
  commit: (direction: ChoiceDirection) => void;
}

interface SwipeCardProps {
  card: ActiveCard;
  onChoice: (choice: ChoiceDirection) => void;
  onTiltChange: (direction: TiltDirection) => void;
}

export const SwipeCard = forwardRef<SwipeCardHandle, SwipeCardProps>(
  function SwipeCard({ card, onChoice, onTiltChange }, ref) {
  const {
    cardRef,
    tiltDirection,
    swipeProgress,
    isExiting,
    commitProgrammatic,
    style,
    handlers,
  } = useSwipe({
    onSwipe: onChoice,
  });

  useImperativeHandle(ref, () => ({
    commit: (direction) => {
      if (card[direction].disabled) return;
      commitProgrammatic(direction);
    },
  }), [card, commitProgrammatic]);

  // Play card flip sound on mount (new card appearing)
  useEffect(() => {
    audio.play("cardFlip");
  }, []);

  // Sync tilt direction to parent for resource icon previews
  useEffect(() => {
    onTiltChange(tiltDirection);
  }, [tiltDirection, onTiltChange]);

  return (
    <div className="flex flex-col items-center flex-1 min-h-0 relative justify-start pt-1 px-2 overflow-hidden" data-testid="swipe-card" role="region" aria-label={`${card.speaker} presents a decision`}>
      <div className="w-full h-full min-h-0 flex flex-col">
        {/* Text area does NOT tilt; it scrolls when long copy would bury choices. */}
        <div
          className="bg-tan px-5 py-2 min-h-[96px] flex items-start justify-center rounded-t-lg overflow-y-auto shrink-0"
          style={{ maxHeight: "24dvh" }}
        >
          <p className="text-text-dark text-[13px] leading-snug text-center">
            {card.text}
          </p>
        </div>

        {/* Portrait area — constrained width, centered */}
        <div
          className="w-full mx-auto relative shrink-0"
          style={{ maxWidth: "clamp(152px, 24dvh, 280px)", perspective: "800px" }}
        >
          {/* Card back — behind portrait, visible when portrait tilts */}
          <div className="absolute inset-0 rounded-lg bg-[#1A3D2E] flex flex-col items-center justify-center gap-12">
            <FleurDeLis />
            <FleurDeLis />
            <FleurDeLis />
          </div>

          {/* Swipeable portrait — ONLY this tilts */}
          <div
            ref={cardRef}
            className={`relative overflow-hidden rounded-lg ${
              !isExiting ? "animate-card-enter" : ""
            }`}
            style={style}
            {...handlers}
          >
            <SpeakerPortrait speaker={card.speaker} />
          </div>
        </div>

        {/* Fixed speaker name — does NOT tilt */}
        <div className="bg-tan px-4 py-2 text-center shrink-0">
          <span className="text-text-dark text-base font-bold">
            {card.speaker}
          </span>
        </div>

        {/* Choice labels — below speaker name, darken proportional to swipe.
           Uses color-mix to interpolate muted→dark. Don't use opacity — the
           label starts at opacity 1, so any multiplier dims it first. */}
        <div className="bg-tan px-4 py-1.5 flex justify-between rounded-b-lg shrink-0">
          <span
            className="swipe-label text-text-muted text-sm font-bold select-none leading-tight text-left"
            style={tiltDirection === "left" ? { color: `color-mix(in srgb, var(--color-text-muted), var(--color-text-dark) ${swipeProgress * 100}%)` } : undefined}
            data-testid="label-left"
          >
            {card.left.label}
          </span>
          <span
            className="swipe-label text-text-muted text-sm font-bold select-none leading-tight text-right"
            style={tiltDirection === "right" ? { color: `color-mix(in srgb, var(--color-text-muted), var(--color-text-dark) ${swipeProgress * 100}%)` } : undefined}
            data-testid="label-right"
          >
            {card.right.label}
          </span>
        </div>
        {!card.down.disabled && (
          <button
            type="button"
            className="bg-tan px-4 py-2 text-center text-text-muted text-sm font-bold leading-tight rounded-b-lg cursor-pointer min-h-[44px] shrink-0"
            style={tiltDirection === "down" ? { color: `color-mix(in srgb, var(--color-text-muted), var(--color-text-dark) ${swipeProgress * 100}%)` } : undefined}
            data-testid="label-down"
            onClick={() => commitProgrammatic("down")}
          >
            ↓ {card.down.label}
          </button>
        )}
      </div>
    </div>
  );
});

/** Decorative fleur-de-lis for card back (SVG, Reigns-style) */
function FleurDeLis() {
  return (
    <svg width="36" height="36" viewBox="0 0 32 32" fill="#B8A668" opacity="0.4">
      <path d="M16 2 C16 2 12 8 12 12 C12 14 14 16 16 16 C18 16 20 14 20 12 C20 8 16 2 16 2Z" />
      <path d="M16 30 C16 30 12 24 12 20 C12 18 14 16 16 16 C18 16 20 18 20 20 C20 24 16 30 16 30Z" />
      <path d="M2 16 C2 16 8 12 12 12 C14 12 16 14 16 16 C16 18 14 20 12 20 C8 20 2 16 2 16Z" />
      <path d="M30 16 C30 16 24 12 20 12 C18 12 16 14 16 16 C16 18 18 20 20 20 C24 20 30 16 30 16Z" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  );
}
