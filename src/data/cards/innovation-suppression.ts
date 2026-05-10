// Source: event-map #political--medical-ai-request
// Rationale: teaches the bright-line erosion problem. Once you make one exception
//   for humanitarian reasons, every future request cites the precedent.
//   The humanitarian case is both real and politically weaponizable.
// Dynamic: research suppression vs. innovation; economic cost is real
// Category: political (turn-gated)

// Source: event-map #economic--pharma-ai-breakthrough
// Rationale: teaches that the hardest version of the economic argument isn't "we want
//   more money" — it's "we can save your mother." The humanitarian case for crossing
//   bright lines is emotionally irresistible and factually legitimate.
// Dynamic: research suppression vs. innovation; economic cost is real
// Category: crisis (turn-gated, 3-choice)

// Source: event-map #political--brain-drain
// Rationale: teaches that restricting research causes talent flight. The smartest
//   people go where they can work. Non-treaty nations benefit from our restrictions.
// Dynamic: economic cost of pause is real; talent follows opportunity
// Category: political (turn-gated)

// Source: event-map #civil--academic-freedom-revolt
// Rationale: teaches that research restrictions face principled opposition from
//   academia. The arguments aren't wrong — restricting knowledge is dangerous.
//   But so is unrestricted research.
// Dynamic: research suppression vs. innovation; principled opposition
// Category: political (turn-gated)

// Source: event-map #safety--university-consortium-demand
// Rationale: teaches that centralizing safety research creates bureaucratic bottlenecks,
//   but decentralizing it enables uncontrolled algorithmic progress through
//   "purely theoretical" papers that turn out to be dual-use.
// Dynamic: research suppression vs. innovation; the cure and the disease
// Category: crisis (turn-gated, 3-choice)

import type { Card, GameState } from "../../engine/types";

export const innovationSuppressionCards: Card[] = [
  {
    id: "medical-ai-request",
    tags: ["economic-pressure", "treaty-compliance"],
    idea: "WHO requests above-threshold training for drug-discovery AI, 2M lives/year",
    speaker: "Diplomatic Attaché",
    text: "The WHO petitions for a training run to create a drug-discovery AI. Above current threshold but well below the ASI danger zone. Chief Scientist rates the risk as low but nonzero. Projected impact: 2 million lives saved per year. The humanitarian case is overwhelming. But every exception erodes the bright line. Last month three companies cited the WHO's request in their own threshold-exception applications. If we approve, the line moves. If we deny, we own 2 million preventable deaths annually.",
    left: {
      label: "Approve the exception",
      effects: { pol: 5, alg: 5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    right: {
      label: "Deny — maintain the bright line",
      effects: { pol: -10, int: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 2;
    },
  },
  {
    id: "pharma-ai-breakthrough",
    tags: ["economic-pressure", "dual-use-research"],
    idea: "pharma consortium needs 3x threshold for Alzheimer's/Parkinson's drugs, 8M lives/year",
    speaker: "Chief Scientist",
    text: "A pharmaceutical consortium trained an AI at 90% of the permitted threshold and identified drugs that reverse early-stage Alzheimer's. Phase II trials confirm efficacy. Now they need 3x the threshold to extend the approach to Parkinson's and ALS — projected 8 million lives saved per year. A dying senator gave a speech: 'The ISIA is choosing to let me die to prevent a threat that has never materialized.' Patient advocacy groups are organizing rallies in 40 cities. The science is real. The lives are real. The risk is 'very probably safe but I cannot guarantee it.'",
    left: {
      label: "Approve the exception",
      effects: { pol: 8, alg: 8, saf: -3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    right: {
      label: "Deny — bright line exists for this",
      effects: { pol: -12, int: -3 },
    },
    down: {
      label: "Run training under ISIA supervision",
      effects: { pol: 3, alg: 5, int: -5 },
      enabled: (state: GameState) => !(state.resources.saf < 50),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
  {
    id: "brain-drain",
    tags: ["alignment-research", "economic-pressure"],
    idea: "top alignment researchers leaving treaty nations for unrestricted work abroad",
    speaker: "Chief Scientist",
    text: "Fourteen top alignment researchers left treaty nations this quarter — eight to Singapore, six to the UAE. Both are non-party states. Our talent pool is shrinking while theirs grows. The researchers say they can't do meaningful work under our restrictions.",
    left: {
      label: "Offer research exemptions",
      effects: { saf: 5, pol: -8, alg: 3 },
    },
    right: {
      label: "Let them go",
      effects: { saf: -5, pol: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "academic-freedom-revolt",
    tags: ["dual-use-research", "civil-liberties"],
    idea: "1,200 researchers sign manifesto against criminalization of knowledge",
    speaker: "Chief Scientist",
    text: "1,200 researchers across 40 countries signed 'The Right to Think: Against the Criminalization of Knowledge.' They argue our research restrictions violate academic freedom. They're not entirely wrong — some restrictions slow legitimate safety work too. But loosening them means dual-use research flows freely.",
    left: {
      label: "Create academic exemption track",
      effects: { saf: 5, alg: 5, pol: 3 },
    },
    right: {
      label: "Maintain restrictions",
      effects: { pol: -8, saf: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "university-consortium-demand",
    tags: ["dual-use-research", "alignment-research"],
    idea: "top universities demand decentralized safety research without pre-publication review",
    speaker: "Chief Scientist",
    text: "Fourteen universities — MIT, Oxford, Tsinghua, ETH Zurich — published an open letter with 2,200 signatories demanding we return alignment research to academia. They cite three cases where our classification system blocked papers they call 'purely theoretical.' They want a federated model: universities run their own programs under our guidelines but without pre-publication review. I've seen the classified intelligence on how 'purely theoretical' papers were used to accelerate capability research. The academics haven't.",
    left: {
      label: "Two-tier system — free theory, review experiments",
      effects: { pol: 5, saf: 3, alg: 5 },
    },
    right: {
      label: "Refuse — maintain centralized control",
      effects: { pol: -8, saf: -3 },
    },
    down: {
      label: "Share declassified case studies",
      effects: { pol: 3, int: -5, alg: 3 },
      enabled: (state: GameState) => !(state.resources.int < 40),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 2;
    },
  },
];
