import { useCallback, useEffect, useRef, useState } from "react";
import type { DeathInfo, GameState, HistoryEntry, ResourceKey } from "../engine/types";
import { audio } from "../hooks/useAudio";
import { ShareButton } from "./ShareButton";
import { generatePlaytestExport } from "./playtestExport";
import { generateShareText } from "./shareText";

type DeadGameState = GameState & { phase: "dead"; death: DeathInfo };

/** Small SVG icons matching ResourceIcons style */
function DeathResourceIcon({ resource }: { resource: ResourceKey }) {
  const icons: Record<ResourceKey, React.JSX.Element> = {
    pol: (
      <svg width="48" height="48" viewBox="0 0 36 36" fill="#D4C8A0">
        <path d="M18 4 L30 10 L30 20 Q30 30 18 34 Q6 30 6 20 L6 10 Z" />
      </svg>
    ),
    int: (
      <svg width="48" height="48" viewBox="0 0 36 36" fill="#D4C8A0">
        <path d="M4 18 Q18 6 32 18 Q18 30 4 18 Z" />
        <circle cx="18" cy="18" r="5" fill="#2A1F0F" />
        <circle cx="18" cy="18" r="2" fill="#D4C8A0" />
      </svg>
    ),
    saf: (
      <svg width="48" height="48" viewBox="0 0 36 36" fill="#D4C8A0">
        <circle cx="18" cy="18" r="14" fillOpacity="0.3" />
        <path d="M10 18 L16 24 L26 12" stroke="#D4C8A0" strokeWidth="3" fill="none" />
      </svg>
    ),
    alg: (
      <svg width="48" height="48" viewBox="0 0 36 36" fill="#D4C8A0">
        <rect x="6" y="24" width="5" height="8" />
        <rect x="13" y="18" width="5" height="14" />
        <rect x="20" y="12" width="5" height="20" />
        <rect x="27" y="6" width="5" height="26" />
      </svg>
    ),
  };
  return icons[resource];
}

interface DeathScreenProps {
  death: DeathInfo;
  turnsSurvived: number;
  history: HistoryEntry[];
  playtestExportState?: DeadGameState;
  onRestart: () => void;
}

export function DeathScreen({
  death,
  turnsSurvived,
  history,
  playtestExportState,
  onRestart,
}: DeathScreenProps) {
  const handleRestart = useCallback(() => {
    audio.play("uiClick");
    audio.startAmbient();
    onRestart();
  }, [onRestart]);

  useEffect(() => {
    audio.play("death");
    audio.stopAmbient();
  }, []);

  // Enter key restarts the game
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleRestart();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleRestart]);

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center bg-bar-dark overflow-y-auto" data-testid="death-screen" role="main" aria-label="Game over">
      <div className="mb-4">
        <DeathResourceIcon resource={death.resource} />
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

      <div className="text-text-muted text-xs font-bold mb-6">
        Survived {turnsSurvived} {turnsSurvived === 1 ? "decision" : "decisions"}
      </div>

      {/* Share text preview — player reads their "story" before deciding to share */}
      <div className="max-w-sm mb-6 px-4 py-3 border-l-2 border-text-muted/30 text-text-muted text-xs leading-relaxed text-left italic whitespace-pre-line">
        {generateShareText(death, turnsSurvived, history)}
      </div>

      <div className={playtestExportState ? "flex w-full max-w-sm flex-col gap-3" : "flex gap-4"}>
        <ShareButton death={death} turn={turnsSurvived} history={history} />
        {playtestExportState && <CopyRunLogButton state={playtestExportState} />}
        <button
          className="px-8 py-4 bg-tan text-text-dark rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-tan-light active:bg-tan-light transition-colors min-h-[44px] cursor-pointer"
          onClick={handleRestart}
          data-testid="restart-button"
          aria-label="Try again — start a new game"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

function CopyRunLogButton({ state }: { state: DeadGameState }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const resetTimer = useRef<number | null>(null);

  const scheduleStatusReset = () => {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => {
      setStatus("idle");
      resetTimer.current = null;
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatePlaytestExport(state));
      setStatus("copied");
      scheduleStatusReset();
    } catch {
      setStatus("failed");
      scheduleStatusReset();
    }
  };

  const label =
    status === "copied"
      ? "Run Log Copied"
      : status === "failed"
        ? "Copy Failed"
        : "Copy Run Log";

  return (
    <button
      className="px-8 py-4 bg-transparent border-2 border-tan text-tan rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-tan/10 active:bg-tan/20 transition-colors min-h-[44px] cursor-pointer"
      onClick={handleCopy}
      data-testid="copy-run-log-button"
      aria-label={label}
    >
      {label}
    </button>
  );
}
