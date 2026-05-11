/**
 * Speaker portraits — AI-generated images via fal.ai FLUX model.
 * Flat-shaded geometric style inspired by Reigns (Mieko Murakami).
 */

import { PORTRAIT_IMAGES } from "./speakerPortraitRegistry";

interface SpeakerPortraitProps {
  speaker: string;
}

export function SpeakerPortrait({ speaker }: SpeakerPortraitProps) {
  const src = PORTRAIT_IMAGES[speaker];

  if (!src) {
    return (
      <div
        className="w-full aspect-square bg-black/30"
        data-testid="speaker-portrait-fallback"
      />
    );
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="block w-full aspect-square object-cover"
      draggable={false}
    />
  );
}
