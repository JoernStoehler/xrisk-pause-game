// Source: event-map #enforcement--120day-audit
// Rationale: teaches that chip consolidation is the first enforcement step.
//   Deadlines create crises — nations that miss them reveal either incompetence
//   or concealment. Either way, enforcement is hard.
// Dynamic: shrink the attack surface via consolidation; execution is imperfect
// Category: incident (turn-gated)

// Source: event-map #monitoring--chip-diversion, literature/iabied-treaty.md (Article VII)
// Rationale: teaches that chip supply chain is the central enforcement pillar.
//   Physical enforcement — chips are the bottleneck. Shrink the attack surface.
// Dynamic: shrink attack surface (consolidate chips) not expand monitoring surface
// Category: incident

// Source: event-map #monitoring--asml-joint-venture
// Rationale: teaches that supply chain chokepoints are the foundation of enforcement.
//   If advanced chip production escapes treaty monitoring, the entire architecture fails.
// Dynamic: shrink attack surface — but chokepoints can be circumvented
// Category: crisis (turn-gated)

// Source: event-map #monitoring--custom-asic-foundry
// Rationale: teaches that supply chain chokepoints can crack. Non-treaty nations
//   can build their own chip fabs using older lithography — outside ASML controls.
// Dynamic: structural advantage erodes as adversaries route around chokepoints
// Category: report (turn-gated)

// Source: event-map #monitoring--old-chips-new-tricks
// Rationale: teaches that the lethal threshold keeps shrinking. Older-generation chips
//   that were below monitoring threshold when the treaty was signed are now dangerous
//   due to algorithmic progress.
// Dynamic: time is always against you; attack surface expands despite best efforts
// Category: report (alg-gated)

// Source: event-map #monitoring--consumer-hw-threshold, #era--threshold-cliff
// Rationale: teaches that the lethal threshold keeps shrinking. Each year, building
//   ASI requires less compute. Eventually consumer hardware is sufficient — at that
//   point, enforcement designed for datacenters can't monitor living rooms.
// Dynamic: time is always against you; alg progress is partly uncontrollable
// Category: late-game (alg-gated)

import type { Card, GameState } from "../../engine/types";

export const enforcementSupplyChainCards: Card[] = [
  {
    id: "chip-audit-deadline",
    tags: ["chip-supply-chain", "treaty-compliance"],
    idea: "chip consolidation deadline approaching, 14% of facilities behind schedule",
    speaker: "Enforcement Chief",
    text: "120-day chip consolidation deadline approaching. 14% of declared facilities haven't completed inventory. Three countries requesting extensions — they say logistics, we suspect concealment in at least one case. Grant extensions and you set a precedent. Enforce strictly and you punish genuine logistical problems.",
    left: {
      label: "Strict enforcement — no extensions",
      effects: { pol: -8, int: 5 },
    },
    right: {
      label: "Grant 30-day extensions",
      effects: { pol: 3, int: -5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 4) return 0;
      return 1.5;
    },
  },
  {
    id: "chip-diversion",
    tags: ["chip-supply-chain", "enforcement-operations"],
    idea: "250 chips unaccounted for between TSMC packaging and declared facilities",
    speaker: "Customs Liaison",
    text: "Manifest discrepancy at the TSMC packaging facility in Kumamoto. 2,400 H100 equivalents entered testing but only 2,150 reached declared facilities. Two hundred fifty chips unaccounted for — enough for a small prohibited training run if aggregated.",
    left: {
      label: "Lockdown and audit",
      effects: { int: 5, pol: -5 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    right: {
      label: "Track the gap quietly",
      effects: { int: 3, pol: -2 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 2) return 0;
      return 1.5;
    },
  },
  {
    id: "asml-joint-venture",
    tags: ["chip-production", "international-diplomacy"],
    idea: "ASML joint venture would move chip production outside treaty monitoring",
    speaker: "Intelligence Analyst",
    text: "ASML is exploring a joint venture with a consortium that includes a non-treaty nation. If completed, advanced chip production capacity escapes treaty monitoring entirely. ASML's shareholders want the deal — $40B in projected revenue. The Dutch government is leaning toward approving it.",
    left: {
      label: "Pressure Netherlands to block",
      effects: { pol: -10, int: 5 },
    },
    right: {
      label: "Negotiate monitoring conditions",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
  {
    id: "custom-asic-foundry",
    tags: ["chip-production", "rogue-actors"],
    idea: "non-treaty nation builds domestic ASIC foundry outside ASML chokepoint",
    speaker: "Intelligence Analyst",
    text: "Non-treaty nation has a domestic ASIC foundry using older lithography — no EUV, outside ASML controls. Chips are 10x less efficient than H100s but they're making thousands. Enough in aggregate for a prohibited training run. Our entire enforcement architecture assumes ASML/TSMC as chokepoints.",
    left: {
      label: "Sanctions on lithography equipment",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Update threat models",
      effects: { int: -5, alg: 5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 2;
    },
  },
  {
    id: "old-chips-new-tricks",
    tags: ["algorithmic-progress", "compute-monitoring"],
    idea: "algorithmic progress makes older unmonitored GPUs dangerous",
    speaker: "Chief Scientist",
    text: "Algorithmic progress at 4x 2022 efficiency means older chips — A100s, V100s, even consumer RTX 4090s — are now above the effective training threshold. Millions of unmonitored older GPUs worldwide just became potential weapons. The monitoring architecture was designed for frontier hardware only.",
    left: {
      label: "Expand monitoring to old chips",
      effects: { pol: -10, int: -5 },
    },
    right: {
      label: "Focus on frontier — accept the gap",
      effects: { alg: 5, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.resources.alg < 50) return 0;
      return 2;
    },
  },
  {
    id: "consumer-hw-threshold",
    tags: ["algorithmic-progress", "distributed-compute"],
    idea: "consumer gaming hardware approaching frontier training capability",
    speaker: "Chief Scientist",
    text: "Algorithmic progress has reached 3.5x the 2022 baseline. At current rates, consumer gaming hardware will be sufficient for frontier training within 18 months. Our entire enforcement architecture — declared facilities, chip tracking, power monitoring — was designed for datacenter-scale compute. None of it works at consumer scale.",
    left: {
      label: "Consumer device restrictions",
      effects: { pol: -12, int: 5 },
    },
    right: {
      label: "Focus on software controls",
      effects: { int: -5, alg: 5 },
    },
    poolWeight: (state: GameState) => {
      if (state.resources.alg < 70) return 0;
      return 3;
    },
    color: "#ef4444",
  },
];
