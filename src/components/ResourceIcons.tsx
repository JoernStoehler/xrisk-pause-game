import type { ChoicePreview } from "../engine/card";
import { RESOURCE_KEYS, type ResourceKey, type Resources } from "../engine/state";
import type { TiltDirection } from "../hooks/useSwipe";

function PolIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="currentColor">
      {/* Shield shape — political power */}
      <path d="M18 4 L30 10 L30 20 Q30 30 18 34 Q6 30 6 20 L6 10 Z" />
    </svg>
  );
}

function IntIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="currentColor">
      {/* Eye — intelligence */}
      <path d="M4 18 Q18 6 32 18 Q18 30 4 18 Z" />
      <circle cx="18" cy="18" r="5" fill="#2A1F0F" />
      <circle cx="18" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

function SafIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="currentColor">
      {/* Checkmark in circle — safety progress */}
      <circle cx="18" cy="18" r="14" fillOpacity="0.3" />
      <path d="M10 18 L16 24 L26 12" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  );
}

function AlgIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="currentColor">
      {/* Rising bars — algorithmic progress */}
      <rect x="6" y="24" width="5" height="8" />
      <rect x="13" y="18" width="5" height="14" />
      <rect x="20" y="12" width="5" height="20" />
      <rect x="27" y="6" width="5" height="26" />
    </svg>
  );
}

const ICON_COMPONENTS: Record<ResourceKey, () => React.JSX.Element> = {
  political: PolIcon,
  intelligence: IntIcon,
  safety: SafIcon,
  algorithmic: AlgIcon,
};

interface ResourceIconsProps {
  resources: Resources;
  tiltDirection: TiltDirection;
  leftPreviews: ChoicePreview[];
  rightPreviews: ChoicePreview[];
  downPreviews: ChoicePreview[];
  /** Tutorial highlight: gentle brightness pulse on all icons */
  highlight?: boolean;
}

export function ResourceIcons({
  resources,
  tiltDirection,
  leftPreviews,
  rightPreviews,
  downPreviews,
  highlight,
}: ResourceIconsProps) {
  const activePreviews =
    tiltDirection === "left"
      ? leftPreviews
      : tiltDirection === "right"
        ? rightPreviews
        : tiltDirection === "down"
          ? downPreviews
        : [];

  const previewMap = new Map<ResourceKey, ChoicePreview>();
  for (const p of activePreviews) {
    previewMap.set(p.resource, p);
  }

  return (
    <div className={`flex justify-around items-center px-6 py-5 bg-bar-dark${highlight ? " animate-resource-highlight" : ""}`} data-testid="resource-bar" role="group" aria-label="Resource levels">
      {RESOURCE_KEYS.map((key) => {
        const Icon = ICON_COMPONENTS[key];
        const preview = previewMap.get(key);
        const value = resources[key];

        return (
          <div key={key} className="flex flex-col items-center gap-0.5" data-testid={`resource-${key}`} role="img" aria-label={`${key}: ${value} out of 100`}>
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
            {/* Icon with fill level — muted background, bright fill from bottom */}
            <div className="relative">
              {/* Empty state — muted icon */}
              <div className="text-text-light opacity-25">
                <Icon />
              </div>
              {/* Filled state — bright, clipped to show bottom N% */}
              <div
                className="absolute inset-0 text-text-light"
                style={{ clipPath: `inset(${100 - value}% 0 0 0)` }}
              >
                <Icon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
