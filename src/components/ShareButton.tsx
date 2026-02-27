import { useState } from "react";
import type { DeathInfo, HistoryEntry } from "../engine/types";
import { generateShareText } from "./shareText";

interface ShareButtonProps {
  death: DeathInfo;
  turn: number;
  history: HistoryEntry[];
}

export function ShareButton({ death, turn, history }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = generateShareText(death, turn, history);

    if (navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // User cancelled or API failed — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently fail
    }
  };

  return (
    <button
      className="px-8 py-4 bg-transparent border-2 border-text-light text-text-light rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-text-light/10 active:bg-text-light/20 transition-colors min-h-[44px] cursor-pointer"
      onClick={handleShare}
    >
      {copied ? "Copied!" : "Share"}
    </button>
  );
}
