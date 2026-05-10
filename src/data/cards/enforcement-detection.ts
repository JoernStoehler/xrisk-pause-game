// Source: event-map #monitoring--thermal-anomaly, literature/iabied-treaty.md (Article VI)
// Rationale: teaches core enforcement loop — detecting violations, consuming intelligence
//   to investigate, and the political cost of raids. Degraded variant teaches "low int = harder."
// Dynamic: enforcement capability is consumed by enforcement actions
// Category: incident (degraded variant pair)

// Source: event-map #enforcement--power-grid-anomaly
// Rationale: teaches that enforcement uses multiple detection layers (power draw,
//   bandwidth, thermal). Cat-and-mouse: adversaries disguise training as mining.
// Dynamic: detection methods are burned by use; speed vs. certainty
// Category: incident (3-choice, int-gated)

// Source: event-map #enforcement--datacenter-inside-datacenter
// Rationale: teaches that adversaries hide inside legitimate infrastructure.
//   Evasion techniques exploit the gap between what monitoring checks and what
//   actually happens.
// Dynamic: attack surface includes things you're protecting; cat-and-mouse
// Category: crisis (turn-gated, 3-choice)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const enforcementDetectionCards: Card[] = [
  // --- thermal-anomaly (normal variant) ---
  {
    id: "thermal-anomaly",
    tags: ["compute-monitoring", "enforcement-operations"],
    idea: "detect illegal data center via heat signature",
    speaker: "Intelligence Analyst",
    text: "Satellite imagery shows a thermal anomaly near Shenzhen — consistent with an undeclared compute cluster. Power draw analysis suggests prohibited-scale training. We have a 72-hour window before they can reconfigure.",
    left: {
      label: "Deploy inspectors",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    right: {
      label: "Flag for monitoring",
      effects: { int: -2 },
    },
    poolWeight: (state: GameState) => state.resources.int >= 45 ? 1.5 : 0,
  },
  // --- thermal-anomaly (degraded variant) ---
  {
    id: "thermal-anomaly-degraded",
    tags: ["compute-monitoring", "intelligence-agencies"],
    idea: "detect illegal data center via rumors when intel is low",
    speaker: "Junior Analyst",
    text: "There are... rumors from a secondary source about unusual power consumption somewhere in the Pearl River Delta. It could be an undeclared training run, or it could be a new factory. We can't tell from what we have.",
    left: {
      label: "Expensive investigation",
      effects: { int: -8, pol: -5 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    right: {
      label: "Ignore the rumors",
      effects: { int: -5, pol: -2 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    poolWeight: (state: GameState) => state.resources.int < 45 ? 1.5 : 0,
  },
  // --- power-grid-anomaly (3-choice, int-gated) ---
  {
    id: "power-grid-anomaly",
    tags: ["compute-monitoring", "distributed-compute"],
    idea: "detect illegal training via power grid anomaly disguised as crypto mining",
    speaker: "Intelligence Analyst",
    text: "A decommissioned smelter in Norway has drawn 12 MW continuously for six weeks. Listed as cryptocurrency mining — legal and common. But its 400 Gbps internet upgrade is overkill for crypto, consistent with distributed training. Your analyst says 70% chance it's a training run.",
    left: {
      label: "Challenge inspection",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 2 },
    },
    right: {
      label: "Continue passive monitoring",
      effects: { int: 3, alg: 3 },
    },
    down: {
      label: "Cross-reference chip records",
      effects: { int: 5, pol: -2 },
      enabled: (state: GameState) => state.resources.int >= 50,
    },
    poolWeight: (state: GameState) => state.turn < 4 ? 0 : 1.5,
  },
  // --- datacenter-hidden (3-choice, turn-gated) ---
  {
    id: "datacenter-hidden",
    tags: ["distributed-compute", "rogue-actors"],
    idea: "detect training hidden inside monitored datacenter via encrypted side channel",
    speaker: "Intelligence Analyst",
    text: "Whistleblower at a cloud provider: a customer renting 'inference capacity' at an ISIA-monitored datacenter is actually running distributed training. Hidden inside thousands of independent inference jobs sharing gradients through an encrypted side channel. The training is happening inside our own monitored facility.",
    left: {
      label: "Raid the customer's VMs",
      effects: { int: 3, pol: -8 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    right: {
      label: "Work with provider quietly",
      effects: { int: 5, pol: -3 },
    },
    down: {
      label: "Crack the gradient protocol",
      effects: { int: 8, saf: 3 },
      enabled: (state: GameState) => state.resources.int >= 50,
    },
    poolWeight: (state: GameState) => state.turn < 6 ? 0 : 2,
  },
];
