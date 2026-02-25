import { useEffect } from "react";
import type { ActiveCard } from "../engine/types";
import { useSwipe, type TiltDirection } from "../hooks/useSwipe";
import { SpeakerPortrait } from "./SpeakerPortrait";

interface SwipeCardProps {
  card: ActiveCard;
  onChoice: (choice: "left" | "right") => void;
  onTiltChange: (direction: TiltDirection) => void;
}

export function SwipeCard({ card, onChoice, onTiltChange }: SwipeCardProps) {
  const {
    cardRef,
    tiltDirection,
    swipeProgress,
    isExiting,
    style,
    handlers,
  } = useSwipe({
    onSwipe: onChoice,
  });

  // Sync tilt direction to parent for resource icon previews
  useEffect(() => {
    onTiltChange(tiltDirection);
  }, [tiltDirection, onTiltChange]);

  return (
    <div className="flex flex-col items-center flex-1 relative justify-start pt-4 px-2 overflow-hidden">
      <div className="w-full flex flex-col">
        {/* Fixed text area — does NOT tilt */}
        <div className="bg-tan px-5 py-3 h-[112px] flex items-center justify-center rounded-t-lg">
          <p className="text-text-dark text-sm leading-relaxed text-center">
            {card.text}
          </p>
        </div>

        {/* Portrait area — constrained width, centered */}
        <div className="max-w-[280px] w-full mx-auto relative" style={{ perspective: "800px" }}>
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
        <div className="bg-tan px-4 py-2.5 text-center">
          <span className="text-text-dark text-base font-bold">
            {card.speaker}
          </span>
        </div>

        {/* Choice labels — below speaker name, darken proportional to swipe.
           Uses color-mix to interpolate muted→dark. Don't use opacity — the
           label starts at opacity 1, so any multiplier dims it first. */}
        <div className="bg-tan px-4 py-2 flex justify-between rounded-b-lg">
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
      </div>
    </div>
  );
}

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
