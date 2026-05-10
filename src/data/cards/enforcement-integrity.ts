// Source: event-map #monitoring--disposal-officer-bribery
// Rationale: teaches that chip lifecycle monitoring requires human integrity at
//   every link. The disposal phase is vulnerable because it's unsexy and underfunded.
// Dynamic: enforcement depends on humans who can be corrupted
// Category: incident (turn-gated)

// Source: event-map #institutional--mole-corp
// Rationale: teaches that regulatory capture is a structural risk. People move
//   between industry and enforcement, bringing loyalties with them.
// Dynamic: institutions rot from within; regulatory capture
// Category: incident (turn-gated)

// Source: event-map #isia--ai-training-data-poisoned
// Rationale: teaches that the revolving door between agency and industry is
//   the greatest operational vulnerability. People who built the tools understand
//   them better than anyone — and might one day work for the other side.
// Dynamic: institutions rot from within; enforcement capability consumed
// Category: crisis (turn-gated)

// Source: event-map #institutional--true-believer
// Rationale: teaches that mission urgency vs. rule of law is a real tension.
//   People who believe deeply in the mission will break rules to protect it.
//   Civil liberties advocates are correct that this is illegal.
// Dynamic: institutional integrity vs. mission urgency
// Category: incident (turn-gated)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const enforcementIntegrityCards: Card[] = [
  {
    id: "disposal-bribery",
    tags: ["chip-supply-chain", "institutional-integrity"],
    idea: "chip disposal officer bribed, diverting chips from destruction",
    speaker: "Deputy Director",
    text: "Internal security flagged a chip disposal officer living beyond his means. His GPS tracker was disabled for 2-4 hours on eleven destruction runs this year — estimated 1,400 chips that could have been diverted instead of destroyed. He has 14 years of clean service. He processed chips alone because the two-person verification protocol was suspended six months ago to save money. That budget cut was your decision.",
    left: {
      label: "Arrest and prosecute publicly",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Quiet removal — restore protocols",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "mole-discovery",
    tags: ["institutional-integrity", "corporate-lobbying"],
    idea: "senior official passing enforcement schedules to former employer",
    speaker: "Deputy Director",
    text: "Internal security found a senior official passing enforcement schedules to a corporation they previously worked for. The company timed chip transfers around our inspection windows. Quiet removal avoids scandal but doesn't deter. Public prosecution deters but damages credibility.",
    left: {
      label: "Remove quietly",
      effects: { int: -5, pol: 3 },
    },
    right: {
      label: "Prosecute publicly",
      effects: { int: -3, pol: -8 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 1.5;
    },
  },
  {
    id: "ai-training-data-poisoned",
    tags: ["institutional-integrity", "compute-monitoring"],
    idea: "former employee poisoned monitoring AI training data before leaving for industry",
    speaker: "Enforcement Chief",
    text: "Our monitoring AI suddenly started missing detections it previously caught. Internal security investigation: a former employee — left six months ago for an AI company — introduced subtle biases into the training data before departing. The poisoning creates blind spots matching the new employer's compute patterns. The AI has been compromised for months. Every 'clean' result during that period is now suspect. She had the skills to do this precisely because we hired the best ML engineers — who are also the most valuable to the companies we monitor.",
    left: {
      label: "Full system rebuild — audit everything",
      effects: { int: -10, pol: -5 },
    },
    right: {
      label: "Targeted patch — fix known blind spots",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 2;
    },
  },
  {
    id: "true-believer",
    tags: ["civil-liberties", "institutional-integrity"],
    idea: "zealous officer conducted illegal surveillance out of mission conviction",
    speaker: "Legal Counsel",
    text: "Senior enforcement officer — deeply committed to the pause — conducted unauthorized surveillance of university researchers. No violation found. The surveillance was illegal under domestic law. Civil liberties organizations are demanding arrest. She says she had credible intelligence that didn't meet the formal threshold.",
    left: {
      label: "Arrest and prosecute",
      effects: { pol: 3, int: -8 },
    },
    right: {
      label: "Internal discipline only",
      effects: { pol: -8, int: 3 },
      hiddenEffects: { [HIDDEN.civilLibertiesPressure]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
];
