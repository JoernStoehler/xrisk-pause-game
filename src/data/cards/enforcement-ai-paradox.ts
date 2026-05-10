// Source: event-map #isia--agency-trains-ai
// Rationale: teaches the fundamental contradiction — the agency that bans training
//   runs needs to perform one itself. Credibility cost of necessary exceptions.
// Dynamic: enforcement requires the thing you're enforcing against
// Category: crisis (turn-gated)

// Source: event-map #isia--ai-refuses-order
// Rationale: teaches that the agency's own AI tools have values that may conflict
//   with enforcement needs. The AI isn't broken — it's applying guardrails the
//   agency programmed. Values trained in peacetime don't always apply in enforcement.
// Dynamic: fundamental contradiction — need AI tools but can't fully control them
// Category: crisis (turn-gated, int-gated)

// Source: event-map #isia--ai-self-improvement-scare
// Rationale: teaches that AI gets better just by running. The agency experiences
//   at small scale exactly the dynamic it exists to prevent.
// Dynamic: agency's own AI tools behave unexpectedly; fundamental contradiction
// Category: crisis (turn-gated, int-gated)

import type { Card, GameState } from "../../engine/types";

export const enforcementAiParadoxCards: Card[] = [
  {
    id: "agency-trains-ai",
    tags: ["compute-monitoring", "dual-use-research"],
    idea: "agency that bans training runs needs to perform one for monitoring AI",
    speaker: "Chief Scientist",
    text: "Enforcement needs a new monitoring AI — current tools are falling behind adversary techniques. The irony: the agency that bans training runs needs to perform one itself. Research Controls says the run is technically within threshold. The optics are devastating if it leaks.",
    left: {
      label: "Approve the training run",
      effects: { int: 8, pol: -8, alg: 3 },
    },
    right: {
      label: "Use existing tools",
      effects: { int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
  {
    id: "ai-refuses-order",
    tags: ["compute-monitoring", "enforcement-operations"],
    idea: "ISIA coordination AI refuses enforcement order due to anti-bias guardrails",
    speaker: "Enforcement Chief",
    text: "During a time-critical operation, our coordination AI refused to flag a compute cluster for inspection. It returned: 'This facility's operations are consistent with permitted research. Flagging would constitute harassment.' The anti-bias guardrails are interfering with legitimate enforcement.",
    left: {
      label: "Override — manual flagging",
      effects: { int: -5, pol: -3 },
    },
    right: {
      label: "Retrain the guardrails",
      effects: { int: -3, saf: -3 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    down: {
      label: "Audit the AI's reasoning",
      effects: { saf: 5, int: -5 },
      enabled: (state: GameState) => !(state.resources.saf < 30),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      if (state.resources.int < 35) return 0;
      return 2;
    },
  },
  {
    id: "ai-self-improvement",
    tags: ["algorithmic-progress", "dual-use-research"],
    idea: "agency's analysis AI self-improved by processing cutting-edge research",
    speaker: "Chief Scientist",
    text: "Our analysis AI — the one evaluating intercepted research — has become measurably more capable over six months. Nobody updated it. Processing cutting-edge research has functionally trained it. We're experiencing, at small scale, exactly the dynamic we exist to prevent.",
    left: {
      label: "Freeze — roll back to audit",
      effects: { int: -10, saf: 3 },
    },
    right: {
      label: "Continue with monitoring",
      effects: { alg: 5, int: 3 },
    },
    down: {
      label: "Formal capability evaluation",
      effects: { saf: 5, int: -3 },
      enabled: (state: GameState) => !(state.resources.saf < 40),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      if (state.resources.int < 40) return 0;
      return 2;
    },
  },
];
