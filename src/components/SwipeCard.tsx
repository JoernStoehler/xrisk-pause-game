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
        <div className="bg-tan px-5 py-3 min-h-[64px] flex items-center justify-center rounded-t-lg">
          <p className="text-text-dark text-[13px] leading-relaxed text-center">
            {card.text}
          </p>
        </div>

        {/* Row: left label | swipeable portrait + card back | right label */}
        <div className="flex items-stretch gap-2">
          {/* Left choice label — always visible, vertically centered */}
          <span
            className="swipe-label text-text-muted text-[11px] font-bold w-14 flex items-center justify-center text-center shrink-0 select-none leading-tight"
            data-testid="label-left"
          >
            {card.left.label}
          </span>

          {/* Portrait area wrapper — card back sits behind, portrait tilts */}
          <div className="relative flex-1 min-w-0">
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

          {/* Right choice label — always visible, vertically centered */}
          <span
            className="swipe-label text-text-muted text-[11px] font-bold w-14 flex items-center justify-center text-center shrink-0 select-none leading-tight"
            data-testid="label-right"
          >
            {card.right.label}
          </span>
        </div>

        {/* Fixed speaker name — does NOT tilt */}
        <div className="bg-tan px-4 py-2.5 text-center rounded-b-lg">
          <span className="text-text-dark text-sm font-bold">
            {card.speaker}
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
