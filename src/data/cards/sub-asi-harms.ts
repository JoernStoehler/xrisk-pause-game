// Source: event-map #civil--autonomous-vehicle-massacre
// Rationale: teaches that non-ASI AI incidents shift opinion unpredictably.
//   Sub-threshold AI that the pause permits can still cause real harm.
//   The public doesn't distinguish ASI risk from AI harm.
// Dynamic: non-ASI harms shift opinion; sub-threshold AI creates new problems
// Category: incident (turn-gated)

// Source: event-map #civil--deepfake-isia-director
// Rationale: teaches that sub-threshold AI (which the pause allows) can undermine the
//   political support the pause depends on. The cure creates new problems.
// Dynamic: non-ASI harms shift opinion; epistemics corrode
// Category: incident (turn-gated)

// Source: event-map #civil--deepfake-election-interference
// Rationale: teaches that sub-threshold AI undermines democratic processes. The
//   very technology the pause permits is eroding the political system the pause
//   depends on.
// Dynamic: non-ASI harms shift opinion; sub-threshold AI creates real damage
// Category: crisis (turn-gated)

// Source: event-map #civil--ai-winter-narrative
// Rationale: teaches that sincere, credentialed experts can be simply wrong about
//   the technical question. Success is indistinguishable from "threat was never real."
//   Rebutting requires concepts most people can't evaluate.
// Dynamic: you can't demonstrate prevented catastrophes
// Category: political (turn-gated)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const subAsiHarmsCards: Card[] = [
  {
    id: "autonomous-vehicle-massacre",
    tags: ["sub-asi-incidents", "media-narrative"],
    idea: "sub-threshold AI causes mass casualty, public blames ISIA regardless",
    speaker: "Communications Director",
    text: "Self-driving fleet malfunction in São Paulo — 23 dead in a coordinated failure. The AI was sub-threshold, fully legal under the treaty. Public reaction splits: half want stricter AI controls (good for the pause), half blame the pause for 'not preventing this.' Both sides are angry at ISIA.",
    left: {
      label: "Expand mandate to sub-threshold",
      effects: { pol: -8, int: -5 },
    },
    right: {
      label: "Clarify — not our jurisdiction",
      effects: { pol: -5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 4) return 0;
      return 1.5;
    },
  },
  {
    id: "deepfake-director",
    tags: ["sub-asi-incidents", "media-narrative"],
    idea: "deepfake video of ISIA director undermines credibility",
    speaker: "Press Secretary",
    text: "A deepfake video of you surfaces — convincing footage saying 'I know ASI isn't real but we need the funding.' Tens of millions of views before takedown. Our AI tools confirm it's synthetic, but the skeptics see confirmation.",
    left: {
      label: "Public rebuttal",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Ignore — responding amplifies",
      effects: { pol: -8, int: -3 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: 1 },
    },
    down: {
      label: "Trace the source",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: -1 },
      enabled: (state: GameState) => !(state.resources.int < 60),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 4) return 0;
      return 1.5;
    },
  },
  {
    id: "deepfake-election",
    tags: ["sub-asi-incidents", "political-support"],
    idea: "AI deepfakes flood election in treaty nation, legal sub-threshold AI",
    speaker: "Communications Director",
    text: "Three weeks before a critical election in a major treaty nation, AI-generated deepfakes flood social media: fake recordings of the pro-pause candidate, fabricated scandals, synthetic news articles. All sub-threshold AI, perfectly legal. The technology the pause permits is attacking the democracy the pause requires.",
    left: {
      label: "Emergency deepfake task force",
      effects: { pol: -5, int: -5 },
    },
    right: {
      label: "Not our jurisdiction",
      effects: { pol: -8 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 2;
    },
  },
  {
    id: "ai-winter-narrative",
    tags: ["media-narrative", "political-support"],
    idea: "bestselling book argues ASI threat was always a hoax",
    speaker: "Communications Director",
    text: "A best-selling book by a former Stanford CS professor — 'The Great Overreaction' — argues ASI was always physically impossible and the pause is an expensive hoax. Well-written, persuasive to non-technical readers, factually wrong in ways requiring deep expertise to rebut. Six talk shows this month. A documentary in pre-production. 'ASI threat was exaggerated' is up 11 points in key demographics. Our Chief Scientist can rebut the arguments, but only in ways the audience won't understand.",
    left: {
      label: "Public scientific rebuttal campaign",
      effects: { pol: -5, saf: -3 },
    },
    right: {
      label: "Ignore — engaging legitimizes the argument",
      effects: { pol: -8 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 1.5;
    },
  },
];
