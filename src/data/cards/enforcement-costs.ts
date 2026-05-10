// Source: event-map #enforcement--cat-mouse-adapt
// Rationale: teaches the Hydra problem — disrupting smuggling networks creates
//   smaller, more resilient ones. Every raid teaches adversaries more about our
//   methods than it teaches us about theirs. Cat-and-mouse is permanent.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated)

// Source: event-map #monitoring--smuggle-ring
// Rationale: teaches the fundamental asymmetry: catch this batch (short-term gain)
//   or map the full network (long-term advantage). Enforcement reveals methods
//   either way.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated)

// Source: event-map #enforcement--network-bandwidth-trap
// Rationale: teaches that AI monitoring tools produce false positives that cost real
//   resources. The asymmetry: investigation is expensive, evasion is cheap.
//   Distinguishing legitimate high-compute commercial activity from unauthorized
//   training is structurally hard.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated, 3-choice)

// Source: event-map #enforcement--compliant-company-raid
// Rationale: teaches that false positives from enforcement erode trust in the system.
//   Raiding a compliant company makes other companies wonder if cooperation is worth it.
// Dynamic: enforcement actions have political costs even when correct
// Category: incident (int-gated)

// Source: event-map #national-intelligence--defector-offer
// Rationale: teaches the cost of uncertainty in intelligence work. HUMINT is
//   fragile — contacts disappear if you demand proof before committing.
//   Intelligence quality is always uncertain.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated)

// Source: event-map #enforcement--billionaire-island-raid
// Rationale: teaches that enforcement actions reveal methods — next adversary hides better.
//   Also: the wealthy can bypass enforcement designed for institutions.
// Dynamic: enforcement capability is consumed by enforcement actions
// Category: incident (turn-gated)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const enforcementCostsCards: Card[] = [
  {
    id: "cat-mouse-adapt",
    tags: ["chip-supply-chain", "enforcement-operations"],
    idea: "smuggling networks adapt after raid, splitting into smaller resilient cells",
    speaker: "Enforcement Chief",
    text: "After last quarter's raid on the chip smuggling ring — 2,000 chips seized, six arrests — we expected deterrence. Instead, networks adapted within weeks. Chips now arrive with serial numbers ground off, firmware reflashed with fake IDs. Routes shifted from commercial freight to private aviation and diplomatic pouches. One network breaks chips into individual units, ships through consumer electronics channels disguised as gaming GPUs, reassembles at destination. We disrupted one network and created three smaller, more resilient ones.",
    left: {
      label: "Fund chip-level PUF identification R&D",
      effects: { int: 5, pol: -5, saf: -3 },
    },
    right: {
      label: "Pivot to financial network intelligence",
      effects: { int: -3, pol: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "smuggle-ring",
    tags: ["chip-supply-chain", "enforcement-operations"],
    idea: "chip smuggling network found, seize now or map full organization",
    speaker: "Customs Liaison",
    text: "Interpol identified a chip smuggling network — 2,000 H100-equivalents unaccounted for across five countries, moved through shell companies. Enough for a serious training run if concentrated. We can seize the chips now by raiding the warehouses, but that alerts the network and they scatter. Or we let some chips move while we map the full organization — buyers, routes, financiers. Every day we wait, chips get closer to wherever they're going.",
    left: {
      label: "Seize now — raid the warehouses",
      effects: { int: -5, pol: 3 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    right: {
      label: "Map the network — let chips move",
      effects: { int: -3, pol: -3 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 4) return 0;
      return 1.5;
    },
  },
  {
    id: "network-bandwidth-trap",
    tags: ["compute-monitoring", "enforcement-operations"],
    idea: "monitoring AI flags suspicious traffic that might be a film studio",
    speaker: "Enforcement Chief",
    text: "Our network monitoring AI flagged coordinated high-bandwidth traffic across four Southeast Asian countries — 94% confidence it's a distributed training run. I've mobilized raid teams in Thailand, Vietnam, Malaysia, and Indonesia. $2M operation, two weeks of enforcement capacity. Then network analysis raised a concern: the traffic pattern also matches a new distributed rendering farm for a Vietnamese film studio. Our AI's training data didn't include cross-border creative industry patterns.",
    left: {
      label: "Proceed with raids",
      effects: { pol: -8, int: -3 },
    },
    right: {
      label: "Delay — investigate the film studio explanation",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    down: {
      label: "Run second-opinion analysis with updated baselines",
      effects: { int: -3, pol: -3 },
      enabled: (state: GameState) => !(state.resources.saf < 50),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "compliant-company-raid",
    tags: ["enforcement-operations", "treaty-compliance"],
    idea: "anomaly detection flags cooperative partner, inspecting erodes trust",
    speaker: "Enforcement Chief",
    text: "Anomaly detection flagged Anthropic's declared facility — thermal patterns suggest undisclosed compute. They're one of our most cooperative partners. If we inspect and find nothing, we've just told every compliant company that cooperation doesn't protect you from raids.",
    left: {
      label: "Inspect anyway",
      effects: { int: 3, pol: -8 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    right: {
      label: "Trust the partnership",
      effects: { pol: 3, int: -5 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.resources.int < 30) return 0;
      return 1.5;
    },
  },
  {
    id: "defector-offer",
    tags: ["intelligence-agencies", "rogue-actors"],
    idea: "anonymous defector offers intel on secret state ASI program for asylum and cash",
    speaker: "Intelligence Analyst",
    text: "Anonymous contact inside a foreign intelligence service claims their government is secretly funding ASI research through a front company. Demands asylum and $5 million. Our assessment: plausible but unverified. If genuine, this is the biggest lead in years — a state-sponsored program we didn't know existed. If it's a setup, we've been played and the money is gone. The contact says we have 48 hours before they go to a different buyer.",
    left: {
      label: "Pay and grant asylum",
      effects: { pol: -5, int: 8 },
    },
    right: {
      label: "Demand verification first",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "billionaire-island",
    tags: ["rogue-actors", "enforcement-operations"],
    idea: "tech CEO built compute facility on private island claiming sovereignty",
    speaker: "Enforcement Chief",
    text: "Former tech CEO bought a private island and built an underground facility. Satellite thermal signatures suggest prohibited-scale compute. He's in a treaty nation but claiming the island is sovereign territory. Legal ambiguity aside — if we raid, we show exactly how we detect these operations.",
    left: {
      label: "Raid the facility",
      effects: { int: -8, pol: -3 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 2 },
    },
    right: {
      label: "Diplomatic pressure",
      effects: { pol: -5, int: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
];
