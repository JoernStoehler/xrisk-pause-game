// STUB — placeholder cards so the game runs while real cards are being written.

import type { Card, GameState } from "../../engine/types";

export const chainsCards: Card[] = [
  {
    id: "whistleblower-fallout",
    tags: ["whistleblowers", "enforcement-operations"],
    idea: "follow-up: lab sues ISIA after whistleblower-triggered investigation",
    speaker: "Deputy Director",
    text: "The lab you investigated after the whistleblower tip is suing ISIA for overreach. This could set a dangerous precedent.",
    left: { label: "Fight in court", effects: { pol: -8, int: 5 } },
    right: { label: "Settle quietly", effects: { pol: -5, int: -3 } },
    poolWeight: (state: GameState) => {
      if (state.history.some((h) => h.cardId === "whistleblower-fallout")) return 0;
      // Search newest-first so an old expired tip does not hide a newer one.
      const trigger = [...state.history].reverse().find(
        (h) => h.cardId === "whistleblower" && h.choice === "left",
      );
      if (!trigger || state.turn - trigger.turn > 10) return 0;
      return 3;
    },
  },
  {
    id: "coverup-leak",
    tags: ["whistleblowers", "media-narrative"],
    idea: "follow-up: press learns you declined to protect whistleblower",
    speaker: "Deputy Director",
    text: "Someone leaked that you declined to protect a whistleblower. The press is running with 'ISIA ignores insider tips.'",
    left: { label: "Deny everything", effects: { pol: -8, int: 3 } },
    right: { label: "Full transparency", effects: { pol: -3, int: -5 } },
    poolWeight: (state: GameState) => {
      if (state.history.some((h) => h.cardId === "coverup-leak")) return 0;
      // Search newest-first so an old expired tip does not hide a newer one.
      const trigger = [...state.history].reverse().find(
        (h) => h.cardId === "whistleblower" && h.choice === "right",
      );
      if (!trigger || state.turn - trigger.turn > 10) return 0;
      return 3;
    },
  },
];
