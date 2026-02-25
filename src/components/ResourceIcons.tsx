import type { ChoicePreview, ResourceKey } from "../engine/types";
import type { TiltDirection } from "../hooks/useSwipe";

const RESOURCE_KEYS: ResourceKey[] = ["trust", "funding", "intel", "leverage"];

/** Simple SVG icons — styled after Reigns' cross/figure/sword/dollar */
function TrustIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="currentColor">
      {/* Shield shape */}
      <path d="M18 4 L30 10 L30 20 Q30 30 18 34 Q6 30 6 20 L6 10 Z" />
    </svg>
  );
}

function FundingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="currentColor">
      {/* Dollar sign — blocky/geometric like Reigns */}
      <rect x="16" y="4" width="4" height="28" />
      <rect x="10" y="10" width="16" height="4" />
      <rect x="10" y="10" width="4" height="8" />
      <rect x="10" y="16" width="16" height="4" />
      <rect x="22" y="16" width="4" height="8" />
      <rect x="10" y="22" width="16" height="4" />
    </svg>
  );
}

function IntelIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="currentColor">
      {/* Eye — angular/geometric */}
      <path d="M4 18 Q18 6 32 18 Q18 30 4 18 Z" />
      <circle cx="18" cy="18" r="5" fill="#2A1F0F" />
      <circle cx="18" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

function LeverageIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="currentColor">
      {/* Scales of justice — angular */}
      <rect x="16" y="6" width="4" height="24" />
      <rect x="6" y="8" width="24" height="3" />
      <polygon points="6,11 2,22 10,22" />
      <polygon points="30,11 26,22 34,22" />
      <rect x="12" y="28" width="12" height="4" />
    </svg>
  );
}

const ICON_COMPONENTS: Record<ResourceKey, () => React.JSX.Element> = {
  trust: TrustIcon,
  funding: FundingIcon,
  intel: IntelIcon,
  leverage: LeverageIcon,
};

interface ResourceIconsProps {
  tiltDirection: TiltDirection;
  leftPreviews: ChoicePreview[];
  rightPreviews: ChoicePreview[];
}

export function ResourceIcons({
  tiltDirection,
  leftPreviews,
  rightPreviews,
}: ResourceIconsProps) {
  const activePreviews =
    tiltDirection === "left"
      ? leftPreviews
      : tiltDirection === "right"
        ? rightPreviews
        : [];

  const previewMap = new Map<ResourceKey, ChoicePreview>();
  for (const p of activePreviews) {
    previewMap.set(p.resource, p);
  }

  return (
    <div className="flex justify-around items-center px-6 py-5 bg-bar-dark">
      {RESOURCE_KEYS.map((key) => {
        const Icon = ICON_COMPONENTS[key];
        const preview = previewMap.get(key);

        return (
          <div key={key} className="flex flex-col items-center gap-0.5">
            {/* Impact indicator — small colored triangle above icon */}
            <div className="h-3 flex items-end">
              {preview && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  className="animate-bar-pulse"
                >
                  <polygon
                    points={
                      preview.direction === "down"
                        ? "0,0 10,0 5,8"
                        : "5,0 10,8 0,8"
                    }
                    fill={
                      preview.direction === "down" ? "#E84E6A" : "#4EE870"
                    }
                  />
                </svg>
              )}
              {preview?.size === "large" && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  className="animate-bar-pulse -ml-0.5"
                >
                  <polygon
                    points={
                      preview.direction === "down"
                        ? "0,0 10,0 5,8"
                        : "5,0 10,8 0,8"
                    }
                    fill={
                      preview.direction === "down" ? "#E84E6A" : "#4EE870"
                    }
                  />
                </svg>
              )}
            </div>
            <div className="text-text-light">
              <Icon />
            </div>
          </div>
        );
      })}
    </div>
  );
}
