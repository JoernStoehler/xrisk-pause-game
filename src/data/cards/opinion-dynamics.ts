// Source: event-map #civil--low-salience-campaign
// Rationale: teaches that 38% of the population doesn't think about AI at all.
//   Activating them is a gamble — the agency can't control what conclusions
//   newly-attentive people reach. The indifferent cluster is the biggest reservoir
//   of both potential support and potential opposition.
// Dynamic: 30 years of political noise; opinion clusters shift
// Category: report (turn-gated)

// Source: event-map #political--generational-shift
// Rationale: teaches that 30-year timescale means complete generational turnover.
//   The median voter was 12 when the pause began. ASI risk is "something old people
//   worry about." You can't maintain political support across generations.
// Dynamic: 30 years of political noise; generational turnover erodes support
// Category: report (late-game)

// Source: event-map #civil--upload-milestone-panic
// Rationale: teaches that opinion clusters react differently to the same event.
//   Upload research activates the indifferent cluster, fractures the fear cluster,
//   and gives skeptics ammunition. One scientific milestone creates an opinion earthquake.
// Dynamic: 30 years of political noise; opinion clusters shift
// Category: incident (turn-gated)

// Source: event-map #civil--megachurch-sermon
// Rationale: teaches that political support can come from unexpected sources with
//   incompatible goals. Religious allies want permanent ban, not safe AI.
// Dynamic: political support is fragile and comes with strings attached
// Category: political (turn-gated)

// Source: event-map #consequence--celebrity-endorsement-backfire
// Rationale: teaches that public opinion channels are unpredictable. Support from
//   unexpected sources comes with incompatible goals and can backfire.
// Dynamic: political support comes with strings; opinion shifts are chaotic
// Category: incident (turn-gated)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const opinionDynamicsCards: Card[] = [
  {
    id: "low-salience-campaign",
    tags: ["media-narrative", "political-support"],
    idea: "38% of population indifferent to AI, awareness campaign risks creating skeptics",
    speaker: "Communications Director",
    text: "38% of treaty-nation populations are in the indifferent cluster — AI is not a topic they think about. They vote on other issues. Politicians know their AI-indifferent constituents won't punish them for cutting our budget. I have two proposals: a $200M personal-relevance campaign framing ASI risk through things people already care about — their children, their savings. Or we do nothing. The indifferent cluster has no reason to oppose us. But activating them might produce more skeptics than supporters.",
    left: {
      label: "Launch the awareness campaign",
      effects: { pol: -5, saf: -3 },
    },
    right: {
      label: "Let sleeping dogs lie",
      effects: { pol: -3 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "generational-shift",
    tags: ["media-narrative", "political-support"],
    idea: "new generation has no memory of AI crisis, 'Free AI' is their slogan",
    speaker: "Political Advisor",
    text: "New polling data. The median voter in key treaty nations was 12 when the pause began. No memory of the crisis that created ISIA. ASI risk is 'something old people worry about.' Youth movements are overwhelmingly anti-pause. 'Free AI' is the slogan of a generation that never knew why it was restricted.",
    left: {
      label: "Youth outreach campaign",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { [HIDDEN.politicization]: 1 },
    },
    right: {
      label: "Focus on institutional allies",
      effects: { pol: -5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 15) return 0;
      return 2;
    },
  },
  {
    id: "upload-milestone-panic",
    tags: ["dual-use-research", "media-narrative"],
    idea: "mouse brain upload milestone activates public fear about uploading, not ASI",
    speaker: "Chief Scientist",
    text: "A Zurich team successfully uploaded a functional mouse brain simulation — 1:1 fidelity, ran 48 hours, cover of Nature. Three reactions hit simultaneously. Safety researchers: cautiously optimistic, whole-brain emulation could let researchers work millions of times faster. Religious organizations: horrified, 'they're copying souls,' threatening to withdraw political support. General public: terrified about their own brains being copied. People who never cared about AI suddenly care — but about uploading, not ASI.",
    left: {
      label: "Bring uploading under ISIA oversight",
      effects: { pol: -8, saf: 5 },
    },
    right: {
      label: "Keep focus on ASI mandate only",
      effects: { pol: -3, saf: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 2;
    },
  },
  {
    id: "megachurch-sermon",
    tags: ["political-support", "media-narrative"],
    idea: "megachurch pastor rallies millions for permanent ban, not safe AI",
    speaker: "Communications Director",
    text: "A megachurch pastor's sermon goes viral — 'Building a mind greater than God's is the sin of Babel.' Ninety million views. Evangelical organizations across three continents adopt anti-ASI positions. Millions of new pause supporters — but they want a permanent ban, not a bridge to safe AI. They'd block our safety research.",
    left: {
      label: "Embrace the coalition",
      effects: { pol: 12, saf: -5 },
    },
    right: {
      label: "Maintain scientific framing",
      effects: { pol: -5, saf: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "celebrity-endorsement",
    tags: ["media-narrative", "political-support"],
    idea: "celebrity endorses pause with conspiracy theories attached",
    speaker: "Communications Director",
    text: "A globally popular musician — 300M followers — made the pause their personal cause. 'Pause World Tour,' $50M donation, apocalypse music video. Millions of new supporters. Problem: they're spreading conspiracy theories alongside real risk. Opponents now call us 'the celebrity agency.' Embrace and gain support with toxic baggage, or distance and lose the momentum.",
    left: {
      label: "Embrace the endorsement",
      effects: { pol: 8, saf: -3 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: 1 },
    },
    right: {
      label: "Distance — correct misconceptions",
      effects: { pol: -5, saf: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 4) return 0;
      return 1.5;
    },
  },
];
