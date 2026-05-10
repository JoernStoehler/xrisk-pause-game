// Source: event-map #political--election-year
// Rationale: teaches that elections can reverse everything. Staying neutral risks
//   losing supporters; intervening risks destroying legitimacy if discovered.
// Dynamic: 30 years of political noise; elections can end the pause overnight
// Category: political (turn-gated, recurring)

// Source: domain model dimension 4 (public sentiment), event-map #political--election-year
// Rationale: teaches that political support IS the pause. Elections can reverse
//   everything overnight. 30-year timescale = complete generational turnover.
// Dynamic: the pause is a political arrangement that exists at politicians' discretion
// Category: political (turn-gated)

// Source: event-map #political--success-trap
// Rationale: teaches the invisible success problem — eight years without incident
//   becomes the strongest argument for defunding. You can't show what you prevented.
// Dynamic: the better you do, the stronger the case for ending you
// Category: political (turn-gated, pol-gated)

// Source: event-map #political--success-narrative, domain model
// Rationale: teaches the fundamental paradox — you can't demonstrate prevented
//   catastrophes. The better you do, the stronger the case for defunding you.
//   Success is indistinguishable from "the threat was never real."
// Dynamic: success looks like "the threat was never real"
// Category: political (turn-gated, appears when things are going well)

import type { Card, GameState } from "../../engine/types";

export const politicalSupportCards: Card[] = [
  {
    id: "election-year",
    tags: ["political-support", "treaty-compliance"],
    idea: "elections in treaty nations with 'AI freedom' candidates running",
    speaker: "Political Advisor",
    text: "Three major treaty nations hold elections this cycle. 'AI freedom' candidates are running in two of them — promising to revoke treaty commitments for AI-driven economic growth. Polling shows them competitive. We could stay neutral or quietly run risk-information campaigns.",
    left: {
      label: "Stay neutral",
      effects: { pol: -6 },
    },
    right: {
      label: "Quiet information campaign",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { politicization: 1 },
    },
    // Appears every ~8 turns after turn 6
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      if ((state.turn - 6) % 8 > 1) return 0;
      return 2;
    },
  },
  {
    id: "election-reversal",
    tags: ["political-support", "treaty-compliance"],
    idea: "US election with leading 'AI freedom' candidate threatening treaty withdrawal",
    speaker: "Political Advisor",
    text: "Elections in the US this cycle. The leading candidate ran on 'AI freedom' — promising to withdraw from the treaty and 'unleash American innovation.' Polling has them at 48%. Our current posture is being used as campaign ammunition either way.",
    left: {
      label: "Campaign for the pause",
      effects: { pol: -5, int: -3 },
      hiddenEffects: { politicization: 1 },
    },
    right: {
      label: "Stay above politics",
      effects: { pol: -8 },
    },
    // Appears at ~yearly intervals (every 12 turns)
    poolWeight: (state: GameState) => {
      if (state.turn < 10 || state.turn % 12 > 2) return 0;
      return 2;
    },
  },
  {
    id: "success-trap",
    tags: ["political-support", "media-narrative"],
    idea: "eight years without incident used to justify 40% budget cut",
    speaker: "Political Advisor",
    text: "Senate coalition proposes 40% budget cut. 'Eight years, zero serious incidents. The threat was clearly exaggerated.' You know about three near-misses they don't — all classified. Declassifying would justify the budget but burn sources that caught the threats.",
    left: {
      label: "Accept the cuts",
      effects: { pol: 5, int: -10 },
    },
    right: {
      label: "Fight — declassify sanitized data",
      effects: { pol: 3, int: -5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      if (state.resources.pol < 35) return 0; // only when things aren't already bad
      return 2;
    },
  },
  {
    id: "success-narrative",
    tags: ["media-narrative", "political-support"],
    idea: "bestselling book argues ASI threat was manufactured to justify ISIA budget",
    speaker: "Investigative Journalist",
    text: "My new book argues the ASI threat was manufactured to justify ISIA's budget. Ten years, no rogue AI, no near-misses the public can see. 'The agency that prevents invisible threats conveniently can never prove they exist.' It's climbing the bestseller lists.",
    left: {
      label: "Declassify threat data",
      effects: { pol: 3, int: -10 },
    },
    right: {
      label: "Let the book run its course",
      effects: { pol: -8 },
      hiddenEffects: { narrative_damage: 1 },
    },
    // Only appears when things are going relatively well
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      if (state.resources.pol < 40 || state.resources.int < 40) return 0;
      return 2;
    },
  },
];
