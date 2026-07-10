import type { HistoryEntry } from "../engine/history";
import type { DeathInfo, ResourceKey } from "../engine/state";

const FAILURE_PHRASES: Record<ResourceKey, Record<string, string>> = {
  political: {
    depleted: "Political support collapsed — the pause ended",
    overloaded: "Unchecked institutional power turned the world against me",
  },
  intelligence: {
    depleted: "I was flying blind when the threat arrived",
    overloaded: "Total surveillance drove threats underground",
  },
  safety: {
    depleted: "The lethal threshold shrank past what we could monitor",
    overloaded: "Safety research produced the very thing we feared",
  },
  algorithmic: {
    depleted: "Algorithmic stagnation — a gift I didn't know I had",
    overloaded: "Consumer hardware became sufficient — enforcement was designed for datacenters",
  },
};

/** High-story-value cards worth mentioning in share text */
const NOTABLE_CARDS: Record<string, string> = {
  "thermal-anomaly": "Satellite imagery forced an inspection call",
  "source-network-burned": "An enforcement lead put sources at risk",
  "strait-crisis": "A military crisis threatened treaty inspections",
  "dual-use-safety-paper": "A safety result also improved capabilities",
  "public-fatigue": "Public fatigue became a policy constraint",
};

function formatTimeInOffice(elapsedMonths: number): string {
  if (elapsedMonths < 1) return "in my first month";
  if (elapsedMonths < 12) {
    const months = Math.max(1, Math.round(elapsedMonths));
    return `after ${months} ${months === 1 ? "month" : "months"} in office`;
  }

  const years = Math.floor(elapsedMonths / 12);
  if (years === 1) return "after a year in office";
  return `after ${years} years in office`;
}

export function generateShareText(
  death: DeathInfo,
  elapsedMonths: number,
  history: HistoryEntry[],
): string {
  const failure =
    FAILURE_PHRASES[death.resource]?.[death.extreme] ?? "It all fell apart";
  const time = formatTimeInOffice(elapsedMonths);

  // Find first notable event from the run
  let notableLine = "";
  for (const entry of history) {
    if (entry.type === "gameStarted") continue;
    if (NOTABLE_CARDS[entry.cardId]) {
      notableLine = NOTABLE_CARDS[entry.cardId] + ". ";
      break;
    }
  }

  return `I tried to enforce a global AI pause. ${notableLine}${failure} — ${time}.\n\nThe Pause — global-pause.pages.dev`;
}
