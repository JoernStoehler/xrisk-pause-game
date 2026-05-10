// Source: event-map #enforcement--decommission-graveyard
// Rationale: teaches that chip lifecycle monitoring must cover the unglamorous
//   retirement phase. People tasked with destroying valuable things often don't.
//   The disposal phase is vulnerable because it's underfunded.
// Dynamic: cat-and-mouse is permanent; enforcement capability consumed
// Category: incident (turn-gated, 3-choice)

// Source: event-map #monitoring--surveillance-expand
// Rationale: teaches that expanding the monitoring surface is bad strategy —
//   shrinking the attack surface (consolidate chips) is better than trying to
//   track every GPU everywhere.
// Dynamic: monitoring vs. sovereignty; shrink attack surface, don't expand monitoring
// Category: incident (turn-gated)

// Source: event-map #ai--ai-surveillance-blind-spot
// Rationale: teaches that agency AI develops blind spots. Adversaries adapt to tools.
//   Taking AI offline for retraining creates monitoring gaps.
// Dynamic: cat-and-mouse is permanent; agency tools are fallible
// Category: crisis (turn-gated, 3-choice)

// Source: event-map #corporate--cloud-provider-loophole
// Rationale: teaches that corporations find structural workarounds, not just direct
//   opposition. Treaty language specifies per-facility limits; distributed training
//   across zones exploits the gap.
// Dynamic: monitoring designed for one architecture fails against another
// Category: crisis (turn-gated, 3-choice)

// Source: event-map #enforcement--inference-chip-loophole
// Rationale: teaches that the distinction between training and inference chips is
//   collapsing. Algorithmic progress allows training-equivalent workloads disguised
//   as inference. Monitoring designed for training clusters misses the new threat.
// Dynamic: enforcement can only control one of four sources of progress
// Category: incident (turn-gated, 3-choice)

import type { Card, GameState } from "../../engine/types";

export const enforcementMonitoringCards: Card[] = [
  {
    id: "decommission-graveyard",
    tags: ["chip-supply-chain", "enforcement-operations"],
    idea: "chip disposal audit finds 9,200 chips unaccounted for from bankrupt contractor",
    speaker: "Customs Liaison",
    text: "Annual chip lifecycle audit found a discrepancy: 23,000 chips declared 'decommissioned and destroyed' over 18 months. 40% of destruction certificates came from three disposal firms — and one went bankrupt six months ago. Its warehouse in Romania contains no destroyed chips. Either 9,200 chips were destroyed before storage with no evidence, diverted to the black market, or sitting somewhere unmonitored. Every chip scheduled for destruction is a temptation.",
    left: {
      label: "Emergency audit of all disposal contractors",
      effects: { int: 5, pol: -8 },
    },
    right: {
      label: "Tighten future protocols — ISIA-witnessed destruction",
      effects: { int: -3, pol: -3 },
      hiddenEffects: { missed_threats: 1 },
    },
    down: {
      label: "Check black market prices for supply spike",
      effects: { int: 3, pol: -3 },
      enabled: (state: GameState) => !(state.resources.int < 40),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "surveillance-expand",
    tags: ["compute-monitoring", "civil-liberties"],
    idea: "proposal to put tracking firmware on all consumer GPUs worldwide",
    speaker: "Enforcement Chief",
    text: "I'm proposing tracking firmware on ALL GPUs sold worldwide — consumer cards included. Right now we monitor roughly 50,000 chips in declared facilities. This would cover 2 million devices. Massively expands coverage. But the political advisor warns: this is mass surveillance of ordinary citizens' personal computers. Civil liberties groups will call us a surveillance state. Several nations will refuse implementation. We could close the consumer-hardware blind spot or we could keep political support. Not both.",
    left: {
      label: "Approve — cover all GPUs",
      effects: { int: 8, pol: -12 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    right: {
      label: "Reject — maintain political support",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "surveillance-blind-spot",
    tags: ["compute-monitoring", "rogue-actors"],
    idea: "monitoring AI misclassified rogue lab as commercial cloud for 18 months",
    speaker: "Chief Scientist",
    text: "Post-incident analysis: our monitoring AI classified a rogue lab's compute as 'commercial cloud' for 18 months. The lab deliberately mimicked cloud traffic. A human tip caught them, not our AI. Emergency retrain takes 6 weeks offline — 12% of facilities unmonitored.",
    left: {
      label: "Emergency retrain — 6 weeks dark",
      effects: { int: -10, saf: 3 },
    },
    right: {
      label: "Layer human inspectors",
      effects: { int: -3, pol: -5 },
    },
    down: {
      label: "Commission new AI from scratch",
      effects: { pol: -8, saf: 5, int: -5 },
      enabled: (state: GameState) => !(state.resources.pol < 50),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 2;
    },
  },
  {
    id: "cloud-provider-loophole",
    tags: ["distributed-compute", "treaty-compliance"],
    idea: "AWS distributes training across 14 zones to stay under per-facility threshold",
    speaker: "Legal Counsel",
    text: "AWS distributed a training run across 14 availability zones in 9 countries. No single facility exceeds threshold. Aggregate: well above it. Treaty language says 'per-facility.' Their lawyers are right — technically. But the run is prohibited in spirit. Fix this and cloud providers sue. Ignore it and everyone does it.",
    left: {
      label: "Emergency executive order",
      effects: { pol: -10, int: 5 },
    },
    right: {
      label: "Fast-track treaty amendment",
      effects: { pol: -3, alg: 8 },
    },
    down: {
      label: "Negotiate voluntary moratorium",
      effects: { pol: -5, int: 3 },
      enabled: (state: GameState) => !(state.resources.pol < 35),
    },
    color: "#f97316",
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 2;
    },
  },
  {
    id: "inference-chip-loophole",
    tags: ["chip-production", "compute-monitoring"],
    idea: "inference chips can now run training workloads, monitoring architecture blind to them",
    speaker: "Chief Scientist",
    text: "Samsung's latest inference-optimized chips have different thermal profiles and power signatures than training hardware — our monitoring was designed to detect training clusters. But algorithmic advances now allow training workloads decomposed into inference-shaped operations. 800 of these chips running distributed training disguised as batch inference would pass all our checks. Samsung argues these serve a legitimate $40B inference market. My team says the distinction between 'training chip' and 'inference chip' is becoming meaningless.",
    left: {
      label: "Expand monitoring to inference chips",
      effects: { pol: -8, int: -5 },
    },
    right: {
      label: "Maintain training-focused monitoring",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { missed_threats: 1 },
    },
    down: {
      label: "Mandate firmware reporting on Samsung chips",
      effects: { int: 5, pol: -5 },
      enabled: (state: GameState) => !(state.resources.int < 40),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 2;
    },
  },
];
