// Source: event-map #treaty--withdrawal-threat
// Rationale: teaches coalition fragility — any nation can leave. The pause exists
//   at politicians' discretion. Concessions erode the treaty; hardline loses members.
// Dynamic: political support IS the pause
// Category: crisis (turn-gated)

// Source: event-map #treaty--review-conference
// Rationale: teaches that coalition maintenance requires constant compromise.
//   No consensus means the treaty weakens by default. Seven nations want less,
//   three want more.
// Dynamic: political support IS the pause; coalition fragility
// Category: political (turn-gated)

// Source: event-map #international--insincere-member
// Rationale: teaches that some nations join treaties insincerely — for the benefits,
//   not the commitments. Known pattern from nuclear nonproliferation. Enforcing
//   against a member is politically costlier than against a non-member.
// Dynamic: enforcement vs. backlash; institutions rot from within
// Category: crisis (turn-gated, 3-choice)

// Source: event-map #international--small-nation-leverage
// Rationale: teaches that treaty infrastructure creates leverage for hosts.
//   Small nations have legitimate grievances about burden-sharing.
//   "Create an enforcement gap" threats are more credible than "build ASI" threats.
// Dynamic: nations exploit the pause for concessions
// Category: political (turn-gated)

// Source: event-map #international--hostage-gambit
// Rationale: teaches that non-aligned nations use the threat of AI development as
//   leverage. Political threats vs. capability threats require different responses.
// Dynamic: nations exploit the pause for concessions
// Category: crisis (turn-gated)

// Source: event-map #international--us-china-mutual-suspicion
// Rationale: teaches that the US-China dynamic is the central geopolitical tension.
//   Both nations are indispensable to the treaty. Both distrust each other.
//   Both may be cheating. ISIA sits between them as useful scapegoat.
// Dynamic: major power dynamics; the agency is a pawn in great-power competition
// Category: crisis (turn-gated, 3-choice)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const internationalCoalitionCards: Card[] = [
  {
    id: "withdrawal-threat",
    tags: ["international-diplomacy", "treaty-compliance"],
    idea: "India files treaty withdrawal notice citing asymmetric enforcement",
    speaker: "Diplomatic Attaché",
    text: "India has filed a 12-month withdrawal notice from the treaty. Their stated reason: 'asymmetric enforcement.' Three other nations are watching — if India leaves cleanly, they'll follow. India's compute infrastructure is growing fast. In 12 months they'll be outside our jurisdiction entirely.",
    left: {
      label: "Offer special terms",
      effects: { pol: -5, int: -5 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 1 },
    },
    right: {
      label: "Invoke non-party sanctions",
      effects: { pol: -8, int: 5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
  {
    id: "review-conference",
    tags: ["international-diplomacy", "treaty-compliance"],
    idea: "five-year treaty review conference, seven nations want weakening",
    speaker: "Diplomatic Attaché",
    text: "Five-year treaty review conference. Seven nations propose weakening enforcement provisions. Three want strengthening. The rest want no changes. Consensus required for any amendment. No consensus means the current text stands — but the seven dissatisfied nations may reduce cooperation informally.",
    left: {
      label: "Push for strengthening",
      effects: { pol: -10, int: 5 },
    },
    right: {
      label: "Accept minor weakening",
      effects: { pol: 5, int: -8 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 2;
    },
  },
  {
    id: "insincere-member",
    tags: ["rogue-actors", "treaty-compliance"],
    idea: "treaty member running secret program since day one, joined insincerely",
    speaker: "Intelligence Analyst",
    text: "A mid-sized treaty nation — joined with great fanfare six years ago — has been running a shadow program the entire time. Signed the treaty for technology-sharing provisions and prestige, never intended to comply. Our evidence: chips diverted from declared facilities, parallel procurement through non-treaty intermediaries, military-classified research team beyond ISIA access. Evidence is strong but not airtight. They fund us significantly and host two regional offices. If we confront them, they may withdraw and encourage other wavering members.",
    left: {
      label: "Private ultimatum — dismantle or face exposure",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Go public — present evidence to Council",
      effects: { pol: -10, int: -5 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 1 },
    },
    down: {
      label: "Amnesty deal — they admit overreach, accept inspections",
      effects: { pol: -3, int: 3 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 1 },
      enabled: (state: GameState) => !(state.resources.pol > 60),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 9) return 0;
      return 2;
    },
  },
  {
    id: "small-nation-leverage",
    tags: ["international-diplomacy", "enforcement-operations"],
    idea: "small nation hosting critical infrastructure demands unrelated concessions",
    speaker: "Diplomatic Attaché",
    text: "A small but strategically located treaty nation — hosts a critical undersea cable junction and a regional monitoring station covering 40% of South Asian compute traffic — is demanding concessions unrelated to AI. Debt relief, a Council seat, trade preferences. Their leverage: 'We could withdraw. We've had very interesting conversations with a non-treaty nation about hosting their data centers.' They're not threatening to build ASI. They're threatening to create an enforcement gap for others to exploit.",
    left: {
      label: "Call the bluff",
      effects: { pol: -5, int: -8 },
    },
    right: {
      label: "Negotiate — the station is critical",
      effects: { pol: -5, int: 3 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 1.5;
    },
  },
  {
    id: "hostage-gambit",
    tags: ["international-diplomacy", "rogue-actors"],
    idea: "non-aligned nation threatens AI development unless given semiconductor tech",
    speaker: "Diplomatic Attaché",
    text: "Major non-aligned nation announces large-scale AI training unless treaty nations share semiconductor technology. Framing it as 'technological sovereignty.' Intel suggests they're years from actual capability — this is a negotiating tactic, not an imminent threat. But calling the bluff risks being wrong.",
    left: {
      label: "Call the bluff — sanctions",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Negotiate technology sharing",
      effects: { pol: -3, alg: 5, int: -5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 2;
    },
  },
  {
    id: "us-china-suspicion",
    tags: ["international-diplomacy", "intelligence-agencies"],
    idea: "US and China each demand inspection of the other, using ISIA as weapon",
    speaker: "Diplomatic Attaché",
    text: "US ambassador wants a challenge inspection of a Chinese facility in Xinjiang — won't share intelligence sources. Two days later, China requests inspection of a US facility in Nevada — same terms. Both accusing the other. If either accusation is true, the treaty is in crisis. If neither is, both powers are using you as a weapon.",
    left: {
      label: "Inspect both simultaneously",
      effects: { pol: -12, int: 5 },
    },
    right: {
      label: "Pursue neither — demand own intel",
      effects: { pol: -5, int: -5 },
    },
    down: {
      label: "Deploy independent surveillance",
      effects: { int: 8, pol: -8 },
      enabled: (state: GameState) => !(state.resources.int < 55),
    },
    color: "#f97316",
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2.5;
    },
  },
];
