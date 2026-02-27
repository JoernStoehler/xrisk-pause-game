import type { DeathInfo, HistoryEntry, ResourceKey } from "../engine/types";

const FAILURE_PHRASES: Record<ResourceKey, Record<string, string>> = {
  trust: {
    depleted: "Public revolt ended my tenure",
    overloaded: "Overpromising shattered my credibility",
  },
  funding: {
    depleted: "The agency ran out of money",
    overloaded: "A waste scandal brought it all down",
  },
  intel: {
    depleted: "I was flying blind when the threat arrived",
    overloaded: "Surveillance overreach triggered a coalition revolt",
  },
  leverage: {
    depleted: "Without political backing, the treaty collapsed",
    overloaded: "Unchecked power turned the world against me",
  },
};

/** High-story-value cards worth mentioning in share text */
const NOTABLE_CARDS: Record<string, string> = {
  "underground-network": "I uncovered a hidden network of labs",
  "whistleblower": "A whistleblower came to me for protection",
  "capability-jump": "A lab made a dangerous capability leap",
  "chip-smuggling": "We intercepted smuggled AI chips at the border",
  "treaty-threat": "A major nation threatened to leave the treaty",
};

function formatTimeInOffice(turn: number): string {
  const years = Math.floor(turn / 12);
  if (years < 1) return "in my first year";
  if (years === 1) return "after a year in office";
  return `after ${years} years in office`;
}

export function generateShareText(
  death: DeathInfo,
  turn: number,
  history: HistoryEntry[],
): string {
  const failure =
    FAILURE_PHRASES[death.resource]?.[death.extreme] ?? "It all fell apart";
  const time = formatTimeInOffice(turn);

  // Find first notable event from the run
  let notableLine = "";
  for (const entry of history) {
    if (NOTABLE_CARDS[entry.cardId]) {
      notableLine = NOTABLE_CARDS[entry.cardId] + ". ";
      break;
    }
  }

  return `I tried to enforce a global AI pause. ${notableLine}${failure} — ${time}.\n\nThe Pause — global-pause.pages.dev`;
}
