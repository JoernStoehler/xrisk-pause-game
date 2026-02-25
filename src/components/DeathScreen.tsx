import type { DeathInfo, ResourceKey } from "../engine/types";

/** Small SVG icons matching ResourceIcons style */
function DeathResourceIcon({ resource }: { resource: ResourceKey }) {
  const icons: Record<ResourceKey, React.JSX.Element> = {
    trust: (
      <svg width="48" height="48" viewBox="0 0 36 36" fill="#D4C8A0">
        <path d="M18 4 L30 10 L30 20 Q30 30 18 34 Q6 30 6 20 L6 10 Z" />
      </svg>
    ),
    funding: (
      <svg width="48" height="48" viewBox="0 0 36 36" fill="#D4C8A0">
        <rect x="16" y="4" width="4" height="28" />
        <rect x="10" y="10" width="16" height="4" />
        <rect x="10" y="10" width="4" height="8" />
        <rect x="10" y="16" width="16" height="4" />
        <rect x="22" y="16" width="4" height="8" />
        <rect x="10" y="22" width="16" height="4" />
      </svg>
    ),
    intel: (
      <svg width="48" height="48" viewBox="0 0 36 36" fill="#D4C8A0">
        <path d="M4 18 Q18 6 32 18 Q18 30 4 18 Z" />
        <circle cx="18" cy="18" r="5" fill="#2A1F0F" />
        <circle cx="18" cy="18" r="2" fill="#D4C8A0" />
      </svg>
    ),
    leverage: (
      <svg width="48" height="48" viewBox="0 0 36 36" fill="#D4C8A0">
        <rect x="16" y="6" width="4" height="24" />
        <rect x="6" y="8" width="24" height="3" />
        <polygon points="6,11 2,22 10,22" />
        <polygon points="30,11 26,22 34,22" />
        <rect x="12" y="28" width="12" height="4" />
      </svg>
    ),
  };
  return icons[resource];
}

interface DeathScreenProps {
  death: DeathInfo;
  turnsSurvived: number;
  onRestart: () => void;
}

export function DeathScreen({
  death,
  turnsSurvived,
  onRestart,
}: DeathScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh px-6 text-center bg-bar-dark">
      <div className="mb-4">
        <DeathResourceIcon resource={death.resource} />
      </div>

      {/* Red skull indicator like Reigns death screen */}
      <div className="text-urgency-red text-xs font-bold mb-6">
        &#x2620;
      </div>

      <h1 className="text-2xl font-bold text-urgency-red mb-2 uppercase tracking-wider">
        {death.extreme === "depleted" ? "Collapsed" : "Overloaded"}
      </h1>

      <div className="text-text-muted text-xs font-bold mb-6 uppercase tracking-wider">
        {death.resource} — {death.extreme}
      </div>

      <p className="text-text-light text-sm max-w-sm mb-8 leading-relaxed">
        {death.message}
      </p>

      <div className="text-text-muted text-xs font-bold mb-8">
        Survived {turnsSurvived} {turnsSurvived === 1 ? "decision" : "decisions"}
      </div>

      <button
        className="px-8 py-4 bg-tan text-text-dark rounded-lg font-bold uppercase tracking-wider text-sm active:bg-tan-light transition-colors min-h-[44px]"
        onClick={onRestart}
      >
        Try Again
      </button>
    </div>
  );
}
