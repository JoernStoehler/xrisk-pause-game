// Source: event-map #safety--government-overpromise
// Rationale: teaches that politicians create expectation traps. Once the public
//   believes alignment is nearly solved, the pause becomes politically unsustainable.
//   When year five arrives and it's not solved, credibility collapses.
// Dynamic: political support IS the pause; you can't demonstrate prevented catastrophes
// Category: political (turn-gated)

// Source: event-map #safety--funding-deal-pentagon
// Rationale: teaches that the agency itself needs funding, and funding comes with
//   strings. Military funding accelerates safety but also capability, and creates
//   political dependency on defense establishment.
// Dynamic: every resource comes with hidden costs and dependencies
// Category: incident (turn-gated)

// Source: event-map #isia--budget-turf-war
// Rationale: teaches the core tradeoff — enforcement and safety draw from the same
//   pool. Every dollar for monitoring is a dollar not spent on alignment.
// Dynamic: political power is spendable; enforcement vs. research is zero-sum
// Category: routine (turn-gated)

// Source: event-map #safety--media-waste-story
// Rationale: teaches the classification trap — dual-use constraints mean successes
//   must be hidden while failures are public. "Null results ARE results" doesn't
//   play well in congressional hearings.
// Dynamic: you can't demonstrate prevented catastrophes
// Category: crisis (turn-gated, 3-choice)

import type { Card, GameState } from "../../engine/types";

export const governmentPoliticalCards: Card[] = [
  {
    id: "government-overpromise",
    tags: ["political-support", "alignment-research"],
    idea: "politician publicly overpromises alignment timeline, creating sunset pressure",
    speaker: "Political Advisor",
    text: "The German Chancellor announced to the Bundestag: 'Thanks to ISIA, we are within five years of solving alignment.' Your Chief Scientist is furious — her actual assessment is that core ASI problems are no closer to solution. The Chancellor's office telephone-gamed a sub-problem timeline into 'five years to solve everything.' Six nations are now lobbying for a sunset date on the pause. Two AI companies announced 'post-pause readiness programs.' The public has a countdown clock in their heads.",
    left: {
      label: "Public correction — contradict the Chancellor",
      effects: { pol: -10, saf: 3 },
    },
    right: {
      label: "Quiet diplomacy — walk it back gradually",
      effects: { pol: -3, saf: -5 },
      hiddenEffects: { narrative_damage: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
  {
    id: "pentagon-funding",
    tags: ["military-ai", "alignment-research"],
    idea: "Pentagon offers massive funding for safety research with military strings",
    speaker: "Finance Director",
    text: "The US Department of Defense is offering $2.8 billion for ISIA's alignment research program — triple our current budget. The catch: they want access to intermediate results, priority hiring of their nominees, and a seat on the research steering committee. It's the most money anyone has ever offered for safety research.",
    left: {
      label: "Accept the deal",
      effects: { saf: 8, pol: -5, alg: 3 },
      hiddenEffects: { military_dependency: 1 },
    },
    right: {
      label: "Decline — too many strings",
      effects: { pol: 3, saf: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "budget-turf-war",
    tags: ["alignment-research", "enforcement-operations"],
    idea: "annual budget split: enforcement vs safety research, zero-sum",
    speaker: "Deputy Director",
    text: "Annual budget allocation. Enforcement Chief: 'Evasion techniques are outpacing us — 60% for monitoring.' Chief Scientist: 'We're three years from a safety breakthrough — 60% for research.' Both are right. Both need the money. You can't fund both at the level they need.",
    left: {
      label: "Prioritize enforcement",
      effects: { int: 8, saf: -5 },
    },
    right: {
      label: "Prioritize research",
      effects: { saf: 8, int: -5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 3) return 0;
      return 2;
    },
  },
  {
    id: "media-waste-story",
    tags: ["media-narrative", "political-support"],
    idea: "journalist exposes spending while successes are classified",
    speaker: "Investigative Journalist",
    text: "My outlet is running 'Inside the Black Hole: How ISIA Spends Your Billions.' A $180M experiment that produced null results. A $2.1M retreat in Switzerland for 40 researchers. Your top scientist's $4.2M salary. The story is well-researched and mostly accurate. What it doesn't mention are your actual successes — because those are classified for dual-use reasons. Three congressional committees are requesting hearings.",
    left: {
      label: "Declassify selected successes",
      effects: { pol: 5, alg: 5, int: -5 },
    },
    right: {
      label: "Absorb the hit — refuse to declassify",
      effects: { pol: -10, saf: -3 },
      hiddenEffects: { narrative_damage: 1 },
    },
    down: {
      label: "Closed congressional briefing",
      effects: { pol: -3, int: -3 },
      enabled: (state: GameState) => !(state.resources.pol > 60),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 2;
    },
  },
];
