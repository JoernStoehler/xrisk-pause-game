// Source: event-map #corporate--compliant-defection
// Rationale: teaches that voluntary corporate compliance is unstable equilibrium.
//   Companies comply only when compliance is economically rational. Prisoner's dilemma
//   at industrial scale — one defection triggers cascade.
// Dynamic: economic cost is real and legitimate; compliance collapses when unrewarded
// Category: crisis (turn-gated, 3-choice)

// Source: event-map #corporate--nvidia-threshold-lobby
// Rationale: teaches that corporate lobbying is structurally permanent. Companies
//   have legitimate economic arguments — the pause costs real money.
// Dynamic: economic cost is real and legitimate; opponents aren't wrong
// Category: political (turn-gated)

// Source: event-map #corporate--pharma-ai-breakthrough
// Rationale: teaches that the compute threshold blocks beneficial uses too.
//   Real people die from diseases AI could cure. Opponents aren't wrong about costs.
// Dynamic: research suppression vs. innovation; economic cost is real
// Category: political (turn-gated)

import type { Card, GameState } from "../../engine/types";

export const corporateResponseCards: Card[] = [
  {
    id: "compliant-defection",
    tags: ["economic-pressure", "treaty-compliance"],
    idea: "poster-child compliant company relocates to non-treaty nation over costs",
    speaker: "Finance Director",
    text: "Helios Systems — the poster child of compliance — is relocating to Vietnam. Their CEO's letter: '$6B spent on compliance. Competitors in non-treaty nations spent zero. Our board answers to shareholders, not to you.' If Helios defects, other compliant companies follow within months.",
    left: {
      label: "Offer economic incentives",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Let them go",
      effects: { int: -8, pol: -3 },
    },
    down: {
      label: "Propose compliance tariff",
      effects: { pol: -12, int: 8 },
      enabled: (state: GameState) => !(state.resources.pol < 40),
    },
    color: "#f97316",
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 2;
    },
  },
  {
    id: "nvidia-threshold-lobby",
    tags: ["corporate-lobbying", "compute-monitoring"],
    idea: "NVIDIA lobbies parliaments to raise compute threshold 10x",
    speaker: "Political Advisor",
    text: "NVIDIA's CEO is testifying before three parliaments this week. Their proposal: raise the compute threshold by 10x, 'freeing innovation while maintaining safety.' Twelve treaty nations are co-sponsoring the amendment. The economic argument is strong — treaty nations are losing market share.",
    left: {
      label: "Oppose the amendment",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Negotiate a compromise",
      effects: { pol: 3, alg: 5, int: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 4) return 0;
      return 1.5;
    },
  },
  {
    id: "pharma-breakthrough",
    tags: ["economic-pressure", "dual-use-research"],
    idea: "pharma needs above-threshold compute for cancer drug, 40,000 lives at stake",
    speaker: "Chief Scientist",
    text: "Novartis researchers need 2x the compute threshold for a cancer drug discovery model. Their projections: 40,000 lives saved per year if approved. The compute cap is the only barrier. 'You're killing people to prevent a hypothetical threat.' They're bringing families of terminal patients to the press conference.",
    left: {
      label: "Grant medical exemption",
      effects: { pol: 5, alg: 5, int: -5 },
    },
    right: {
      label: "Maintain threshold — no exceptions",
      effects: { pol: -10, saf: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
];
