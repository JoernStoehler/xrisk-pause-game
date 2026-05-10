// Source: event-map #safety--three-year-stall
// Rationale: teaches that nobody knows how hard alignment is. Could take decades
//   or millennia. Can't parallelize (stepping-on-toes). Can't hire experts
//   (the expertise doesn't exist yet).
// Dynamic: safety progress is uncertain and may stall indefinitely
// Category: report (turn-gated, saf check)

// Source: domain model dimension 5 (safety knowledge), event-map #research--dual-use
// Rationale: teaches that the cure and the disease are the same substance. Safety
//   research advances capabilities. The most promising shortcut (use AI to do alignment)
//   is also the most dangerous path.
// Dynamic: safety research = capability research; dual-use knowledge
// Category: routine

// Source: event-map #research--biotech-proposal
// Rationale: teaches that solving alignment might require a fundamentally different
//   kind of researcher. Human cognitive enhancement is a long-shot survival pathway
//   with explosive ethical implications.
// Dynamic: the cure and the disease are the same substance
// Category: report (late-game)

// Source: event-map #safety--airgap-large-experiment
// Rationale: teaches that ISIA's own safety experiments require preconditions (airgap,
//   threshold intelligence) that cost time and money. Skipping preconditions risks
//   the experiment itself becoming an existential threat.
// Dynamic: the cure and the disease are the same substance
// Category: incident (turn-gated, 3-choice)

import type { Card, GameState } from "../../engine/types";

export const researchSafetyProgressCards: Card[] = [
  {
    id: "safety-stall",
    tags: ["alignment-research"],
    idea: "three years with no meaningful alignment progress, fundamental problems remain open",
    speaker: "Chief Scientist",
    text: "Third consecutive annual review with no meaningful progress on formal verification of alignment. The fundamental problems remain open. Our best researchers say 'we don't even know what we don't know.' Meanwhile, the algorithmic threshold keeps shrinking. We're in a race we might not be able to win.",
    left: {
      label: "Double research funding",
      effects: { pol: -5, saf: 5 },
    },
    right: {
      label: "Diversify approaches",
      effects: { saf: 3, int: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 12) return 0;
      if (state.resources.saf > 60) return 0;
      return 2;
    },
  },
  {
    id: "safety-dual-use",
    tags: ["alignment-research", "dual-use-research"],
    idea: "alignment paper also shows how to train more capable systems with less compute",
    speaker: "Chief Scientist",
    text: "Our alignment team's latest paper on reward modeling has an unintended implication — it also shows how to train more capable systems with less compute. The paper advances safety by 6 months but hands capability researchers a significant shortcut. Do we publish?",
    left: {
      label: "Publish — safety first",
      effects: { saf: 8, alg: 6 },
    },
    right: {
      label: "Classify and restrict",
      effects: { saf: 3, pol: -5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 3) return 0;
      return 2;
    },
  },
  {
    id: "biotech-proposal",
    tags: ["alignment-research", "dual-use-research"],
    idea: "genetic cognitive enhancement to produce researchers who can solve alignment",
    speaker: "Chief Scientist",
    text: "A biotech consortium proposes a 15-year program to genetically enhance human cognitive capabilities. Their pitch: enhanced researchers might solve alignment problems current humans fundamentally can't. The science is speculative but not impossible — recent gene-editing advances make it plausible. Timeline uncertain, success not guaranteed, ethics explosive. Religious organizations will revolt. But if alignment is genuinely too hard for unenhanced human intelligence, this might be the only path that doesn't require building the thing we're trying to prevent.",
    left: {
      label: "Fund it — long shot but possibly necessary",
      effects: { pol: -10, saf: 5 },
    },
    right: {
      label: "Reject — ethics backlash too severe",
      effects: { pol: -3, saf: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 2;
    },
  },
  {
    id: "airgap-large-experiment",
    tags: ["alignment-research", "compute-monitoring"],
    idea: "largest safety experiment needs airgap facility upgrade or risk leaking insights",
    speaker: "Chief Scientist",
    text: "I want to run our largest safety experiment yet — training a model at 2×10²³ FLOP to test a corrigibility hypothesis. But our airgap facility was built for experiments ten times smaller. Upgrading costs $400M and eight months. Without the upgrade, if the airgap fails, algorithmic insights leak into the broader ML community. And we're still not confident where the lethal compute threshold actually sits — our estimate has wide error bars.",
    left: {
      label: "Delay for proper airgap",
      effects: { saf: -5, pol: -3 },
    },
    right: {
      label: "Run in existing facility",
      effects: { saf: 8, alg: 5, int: -3 },
    },
    down: {
      label: "Staged protocol — start small",
      effects: { saf: 5, pol: -3, int: -5 },
      enabled: (state: GameState) => !(state.resources.int < 40),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
];
