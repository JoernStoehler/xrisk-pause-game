// Source: event-map #national-intelligence--jurisdiction-clash
// Rationale: teaches that jurisdiction friction is permanent. Even treaty allies
//   resist enforcement on their own soil. The gap between legal authority (treaty)
//   and political authority (willingness to enforce) is structural.
// Dynamic: enforcement vs. backlash; political support IS the pause
// Category: incident (turn-gated)

// Source: event-map #monitoring--heat-signature-foreign
// Rationale: teaches the tension between legitimate process (Council vote) and
//   operational speed (intelligence goes stale). Cat-and-mouse extends to the
//   diplomatic layer.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated, 3-choice)

// Source: event-map #enforcement--cops-refuse-gpu-search
// Rationale: teaches that domestic enforcement agents don't want to search houses
//   for GPUs. Political costs of residential enforcement are extreme.
// Dynamic: enforcement at consumer scale is politically impossible
// Category: crisis (turn-gated, alg-gated)

// Source: event-map #international--challenge-inspection-veto
// Rationale: teaches that the challenge inspection mechanism is political, not
//   automatic. Major powers can block inspections through Council votes. Same
//   dynamic plagued the IAEA.
// Dynamic: enforcement vs. backlash; political support IS the pause
// Category: crisis (turn-gated, 3-choice)

// Source: event-map #enforcement--politically-inconvenient-true-positive
// Rationale: teaches that enforcement asymmetry applies even to allies. A powerful
//   nation can simply refuse. The agency exists at their discretion.
// Dynamic: political support IS the pause; can't enforce against your backers
// Category: crisis (turn-gated)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const enforcementFrictionCards: Card[] = [
  {
    id: "jurisdiction-clash",
    tags: ["enforcement-operations", "treaty-compliance"],
    idea: "treaty nation blocks inspection by invoking national security",
    speaker: "Enforcement Chief",
    text: "We've confirmed an unauthorized compute cluster in a treaty nation. Their national intelligence service claims it's a classified domestic program and invokes national security to block our inspection. Our legal team says the treaty technically overrides domestic classification, but enforcement would require a political fight with a major ally. The longer we wait, the more time they have to relocate or sanitize the facility.",
    left: {
      label: "Invoke treaty override — force inspection",
      effects: { pol: -10, int: 5 },
    },
    right: {
      label: "Joint inspection with national observers",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "heat-signature-foreign",
    tags: ["intelligence-agencies", "enforcement-operations"],
    idea: "detect facility via satellite but Council approval too slow",
    speaker: "Intelligence Analyst",
    text: "Satellite detected anomalous thermal output from an undeclared facility in a remote region — consistent with a mid-scale compute cluster. No declared CCC within 200 kilometers. The facility appeared in the last 90 days. We need a challenge inspection, but that requires Executive Council approval, and the nation hosting this facility has allies on the Council. Going through channels takes weeks. The facility could be dismantled in days.",
    left: {
      label: "Formal challenge inspection via Council",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Covert intelligence team first",
      effects: { pol: -3, int: -5 },
    },
    down: {
      label: "Joint op with domestic enforcement",
      effects: { pol: -3, int: 3 },
      enabled: (state: GameState) => !((state.hidden[HIDDEN.treatyErosion] ?? 0) > 2),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 4) return 0;
      return 1.5;
    },
  },
  {
    id: "cops-refuse-search",
    tags: ["civil-liberties", "enforcement-operations"],
    idea: "local police refuse to raid homes for GPUs, call ISIA 'GPU Gestapo'",
    speaker: "Enforcement Chief",
    text: "We identified 14 addresses in the American Midwest with anomalous power draw suggesting unauthorized compute in residential basements. Local police refuse to execute search warrants. 'We're not raiding families over computer chips.' County sheriffs going on TV calling us 'the GPU Gestapo.'",
    left: {
      label: "Federal agents instead",
      effects: { pol: -12, int: 5 },
      hiddenEffects: { [HIDDEN.civilLibertiesPressure]: 2 },
    },
    right: {
      label: "Drop residential enforcement",
      effects: { pol: -3, int: -8 },
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      if (state.resources.alg < 45) return 0;
      return 2;
    },
  },
  {
    id: "challenge-inspection-veto",
    tags: ["international-diplomacy", "enforcement-operations"],
    idea: "Council vote blocks challenge inspection due to trade deal politics",
    speaker: "Intelligence Analyst",
    text: "We identified suspicious activity at a facility in a major treaty nation — thermal signatures, unusual network traffic, personnel movements consistent with a covert training operation. I invoked a challenge inspection under Article IX. The Council vote: 7-7 with one abstention. Inspection fails. Three nations that voted no have bilateral trade deals pending with the target. The intelligence goes stale within weeks — if they're running a training operation, they'll relocate once they know we suspect them.",
    left: {
      label: "Leak intelligence to force public pressure",
      effects: { pol: -10, int: -8 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    right: {
      label: "Work back-channels for second vote in 30 days",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    down: {
      label: "Deploy covert technical monitoring",
      effects: { int: -5, pol: -3 },
      enabled: (state: GameState) => !(state.resources.int < 50),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 2;
    },
  },
  {
    id: "inconvenient-true-positive",
    tags: ["military-ai", "treaty-compliance"],
    idea: "US military caught training above threshold, dares ISIA to enforce",
    speaker: "Intelligence Analyst",
    text: "Our monitoring detected an unauthorized training run inside the US military's largest AI research facility. 4x the permitted threshold. The Pentagon says it's 'national security research exempt under Article IX.' That exemption doesn't exist. They're daring us to enforce against our biggest funder.",
    left: {
      label: "Issue formal violation notice",
      effects: { pol: -15, int: 5 },
    },
    right: {
      label: "Negotiate quietly",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 2 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2.5;
    },
    color: "#ef4444",
  },
];
