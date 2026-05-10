// Source: event-map #monitoring--black-market-signal
// Rationale: teaches that market signals are intelligence. Black market chip prices
//   tripling means demand from unauthorized actors is outpacing interdiction.
//   Winning battles but losing the war.
// Dynamic: cat-and-mouse never ends; enforcement can't control everything
// Category: report (turn-gated)

// Source: event-map #intelligence--contradictory-reports
// Rationale: teaches that imperfect, contradictory intelligence is the norm.
//   The DG must make decisions with incomplete information. Information quality
//   is a strategic dimension, not a problem to solve.
// Dynamic: enforcement operates under fundamental uncertainty
// Category: routine (turn-gated)

// Source: event-map #intelligence--north-korea-pattern
// Rationale: teaches that determined actors find ways despite global cooperation.
//   Same pattern as nuclear proliferation. Attacker only needs to succeed once.
// Dynamic: enforcement can only control some sources; determined actors persist
// Category: report (turn-gated)

// Source: event-map #international--sanctions-evasion-network
// Rationale: teaches that sanctions evasion is a mature, transferable skill.
//   Nations that evaded nuclear sanctions apply the same techniques to AI chips.
//   The enforcement problem is harder than you thought.
// Dynamic: cat-and-mouse played by professionals; enforcement is never complete
// Category: report (turn-gated)

// Source: event-map #corporate--secret-capability-market
// Rationale: teaches that financial capitalism creates markets wherever profit exists.
//   "Capability arbitrage" emerges naturally from the gap between permitted compute
//   and desired capability. Supply and demand, not conspiracy.
// Dynamic: enforcement can only control one of four sources of progress
// Category: crisis (turn-gated, 3-choice)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const intelligenceNetworksCards: Card[] = [
  {
    id: "black-market-signal",
    tags: ["chip-supply-chain", "enforcement-operations"],
    idea: "black market chip prices tripled, demand outpacing interdiction",
    speaker: "Customs Liaison",
    text: "Black market H100-equivalent prices tripled this quarter. Demand from unauthorized actors is outpacing our interdiction capacity. We're seizing more chips than ever and it's not enough. The enforcement chief's assessment: 'We're winning battles but losing the war on supply chain control.'",
    left: {
      label: "Increase interdiction resources",
      effects: { int: 3, pol: -5 },
    },
    right: {
      label: "Focus on the big buyers",
      effects: { int: -3, pol: -2 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "contradictory-reports",
    tags: ["intelligence-agencies", "compute-monitoring"],
    idea: "three intelligence sources contradict each other about new facility",
    speaker: "Intelligence Analyst",
    text: "Morning briefing, three items partially contradict: satellite data suggests a new facility in Southeast Asia. Signals intelligence says the region is clean. Human source claims facility exists but is a semiconductor fab, not training. Can't reconcile without revealing which sources we trust most.",
    left: {
      label: "Investigate in person",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    right: {
      label: "File and wait for convergence",
      effects: { int: -3 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 3) return 0;
      return 1.5;
    },
  },
  {
    id: "north-korea-pattern",
    tags: ["rogue-actors", "chip-supply-chain"],
    idea: "non-treaty nation acquiring chips via same networks as nuclear program",
    speaker: "Intelligence Analyst",
    text: "Briefing: a non-treaty nation acquired 4,000 H100-equivalents through intermediary networks over three years. Not enough for ASI yet, but the trend is clear. Same procurement pattern as their nuclear program — same shell companies, same front organizations. They've done this before.",
    left: {
      label: "Targeted interdiction",
      effects: { int: -5, pol: -5 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    right: {
      label: "Diplomatic containment",
      effects: { pol: -3, int: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 1.5;
    },
  },
  {
    id: "sanctions-evasion",
    tags: ["rogue-actors", "chip-supply-chain"],
    idea: "professional sanctions evasion network moves 6,000 chips via shell companies",
    speaker: "Enforcement Chief",
    text: "Interpol briefing: a non-treaty nation built a 4-year sanctions evasion network. 23 shell companies, 11 jurisdictions, containerized datacenters disguised as telecom equipment, two bribed customs officials. They moved 6,000 H100-equivalents. Same lawyers who handled Iranian nuclear sanctions evasion.",
    left: {
      label: "Overhaul customs protocols",
      effects: { int: 5, pol: -8 },
    },
    right: {
      label: "Target the network nodes",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 1.5;
    },
  },
  {
    id: "secret-capability-market",
    tags: ["rogue-actors", "treaty-compliance"],
    idea: "grey market brokers combine sub-threshold models for above-threshold capability",
    speaker: "Intelligence Analyst",
    text: "We've discovered a grey market for AI capabilities that technically doesn't violate the treaty. Company A trains at 95% threshold. Company B does the same. A broker in Dubai buys both weight sets and uses published distillation to combine them — effective capability at 250% of threshold. No single actor violated the treaty. There are at least twelve such brokers operating openly. Hedge funds are investing in 'capability arbitrage' as an asset class. The entire apparatus of financial capitalism is emerging around the gap between the treaty's letter and its spirit.",
    left: {
      label: "Propose treaty ban on weight transfers",
      effects: { pol: -8, int: -3 },
    },
    right: {
      label: "Target brokers via financial regulators",
      effects: { pol: -3, int: -5, alg: 5 },
    },
    down: {
      label: "Infiltrate broker network via front companies",
      effects: { int: -5, pol: -3 },
      enabled: (state: GameState) => !(state.resources.int < 50),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 9) return 0;
      return 2;
    },
  },
];
