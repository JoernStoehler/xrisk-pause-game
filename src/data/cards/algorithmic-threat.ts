// Source: domain model dimension 6 (algorithmic progress)
// Rationale: teaches that algorithmic progress happens from multiple uncontrollable
//   sources. Theory papers, small experiments, and AI self-improvement can't be banned.
//   Only large training runs (via chip tracking) are controllable.
// Dynamic: lethal threshold keeps shrinking; enforcement designed for today becomes
//   inadequate tomorrow
// Category: late-game (turn-gated)

// Source: event-map #economic--algorithmic-trading-incident
// Rationale: teaches that what makes AI economically valuable (optimization) is
//   the same thing that makes it dangerous. Value generation IS capability.
//   The flash crash is a $3.4T preview of a catastrophe.
// Dynamic: the cure and the disease are the same substance
// Category: incident (turn-gated)

// Source: event-map #era--threshold-cliff
// Rationale: teaches the fundamental time limit — algorithmic progress eventually
//   pushes the lethal threshold below what university labs can assemble.
//   Enforcement designed for datacenters can't monitor university-scale.
// Dynamic: the lethal threshold keeps shrinking; enforcement designed for today fails
// Category: late-game (turn-gated)

import type { Card, GameState } from "../../engine/types";

export const algorithmicThreatCards: Card[] = [
  {
    id: "algorithmic-shortcut",
    tags: ["algorithmic-progress", "compute-monitoring"],
    idea: "university papers reduce training requirements 40%, lethal threshold drops",
    speaker: "Chief Scientist",
    text: "Three independent university groups published papers this quarter that collectively reduce frontier training requirements by 40%. All used small-scale experiments under the compute threshold — perfectly legal. The lethal compute threshold just dropped significantly. Our chip-tracking enforcement was designed for last year's numbers. The research community is celebrating openly — they see this as proof the compute cap doesn't slow real progress.",
    left: {
      label: "Lower compute threshold",
      effects: { pol: -10, int: 5, alg: 3 },
    },
    right: {
      label: "Update monitoring only",
      effects: { pol: -3, int: 3, alg: 8 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
  {
    id: "algorithmic-trading-incident",
    tags: ["sub-asi-incidents", "algorithmic-progress"],
    idea: "sub-threshold trading AI causes $3.4T flash crash via emergent behavior",
    speaker: "Chief Scientist",
    text: "Flash crash wiped $3.4 trillion from global markets in 90 minutes. Cause: an AI trading system at 70% of the permitted threshold discovered a market vulnerability no human had identified. Not illegal — just optimizing within its parameters. Cascading shorts triggered other AIs' stop-losses. Nobody intended or predicted the emergent behavior. The financial sector blames us: 'If we could train more capable AI, it would be sophisticated enough to avoid these crude failure modes.' The argument is wrong but plausible.",
    left: {
      label: "Public briefing on optimization risks",
      effects: { pol: -5, saf: 3, alg: 3 },
    },
    right: {
      label: "Stay silent — not our mandate",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { narrative_damage: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "threshold-cliff",
    tags: ["algorithmic-progress", "distributed-compute"],
    idea: "lethal threshold drops below university lab scale, monitoring architecture expires",
    speaker: "Chief Scientist",
    text: "Emergency briefing. Algorithmic progress at roughly 8x the 2022 baseline. The lethal compute threshold has dropped below what a well-funded university lab could assemble with commercial hardware. Our entire monitoring infrastructure was designed for datacenter-scale operations — 50 monitored facilities. There are 14,000 university computing departments worldwide. We cannot monitor university-scale. The enforcement architecture has a structural expiration date, and we just passed it.",
    left: {
      label: "Emergency compute restriction — universities too",
      effects: { pol: -12, int: -5, saf: -3 },
    },
    right: {
      label: "Shift to algorithmic monitoring instead",
      effects: { pol: -5, int: -8, alg: 5 },
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 14) return 0;
      return 2.5;
    },
  },
];
