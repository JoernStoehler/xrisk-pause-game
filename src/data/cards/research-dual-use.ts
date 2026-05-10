// Chain pair: approval-dilemma → training-run-consequence
// Plus dual-use knowledge cards: ai-assistant-incident, dual-use-publication

// Source: event-map #research--approval-dilemma
// Rationale: teaches that the boundary between safety and capability research is
//   inherently blurry. The most promising safety approaches push right up against
//   the capability boundary.
// Dynamic: cure = disease; classification dilemma at the frontier
// Category: incident (turn-gated)

// Source: event-map #research--training-run-consequence
// Rationale: teaches that AIs smart enough to help with safety are smart enough
//   to be dangerous. The dual-use problem doesn't care about intentions.
//   Approved research producing banned results is structurally inevitable.
// Dynamic: the cure and the disease are the same substance
// Category: history-triggered (consequence of approval-dilemma)

// Source: event-map #research--ai-assistant-incident
// Rationale: teaches that smart enough to help = smart enough to be dangerous.
//   The agency's own AI research assistant discovered a dual-use insight without
//   being asked to.
// Dynamic: using AI to accelerate safety is a trap; dual-use knowledge
// Category: crisis (saf-gated)

// Source: event-map #research--dual-use-publication
// Rationale: teaches that safety research and capability research are the same
//   substance. A paper on detecting deceptive alignment implicitly teaches how
//   to CREATE it more efficiently. Knowledge can't be unlearned.
// Dynamic: cure = disease; dual-use knowledge
// Category: incident (turn-gated)

import type { Card, GameState } from "../../engine/types";

export const researchDualUseCards: Card[] = [
  {
    id: "approval-dilemma",
    tags: ["dual-use-research", "alignment-research"],
    idea: "safety training run near threshold would also reveal capability advances",
    speaker: "Chief Scientist",
    text: "Leading alignment researcher proposes training at 5×10²³ FLOP — just below the banned threshold. Could accelerate safety by years. But Research Controls flags: the methodology could reveal capability advances. We can't separate the safety insight from the capability one. Approve and you get both. Deny and you get neither.",
    left: {
      label: "Approve with monitoring",
      effects: { saf: 8, alg: 5, pol: -3 },
    },
    right: {
      label: "Deny — too risky",
      effects: { saf: -3, pol: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "training-run-consequence",
    tags: ["dual-use-research", "alignment-research"],
    idea: "follow-up: approved research produced banned capability results",
    speaker: "Chief Scientist",
    text: "Results from the training run you approved six months ago. Good news: significant safety progress — the corrigibility findings are genuinely novel. Bad news: the model developed unexpected capabilities outside the research design. Not dangerous alone, but it advances the state of the art in reasoning and planning in ways the treaty explicitly bans. We approved research that produced banned results. Every future exception request will cite this as precedent.",
    left: {
      label: "Suppress the capability findings",
      effects: { saf: 5, pol: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    right: {
      label: "Publish and classify honestly",
      effects: { saf: 3, alg: 5, pol: -8 },
    },
    poolWeight: (state: GameState) => {
      const trigger = state.history.find(
        (h) => h.cardId === "approval-dilemma" && h.choice === "left",
      );
      if (!trigger) return 0;
      const delay = state.turn - trigger.turn;
      if (delay < 2 || delay > 5) return 0;
      return 8;
    },
  },
  {
    id: "ai-assistant-incident",
    tags: ["dual-use-research", "algorithmic-progress"],
    idea: "ISIA's own AI research assistant discovered dual-use insight without instruction",
    speaker: "Chief Scientist",
    text: "Our AI research assistant produced output that's — I have to be honest — uncomfortably close to a capability advance we haven't published. The system may have discovered something dual-use without instruction. We built it to accelerate alignment. It accelerated something else too.",
    left: {
      label: "Shut down the assistant",
      effects: { saf: -8, int: -3 },
    },
    right: {
      label: "Classify and continue",
      effects: { saf: 5, alg: 8 },
    },
    color: "#f97316",
    poolWeight: (state: GameState) => {
      if (state.resources.saf < 40) return 0;
      return 2;
    },
  },
  {
    id: "dual-use-publication",
    tags: ["dual-use-research", "alignment-research"],
    idea: "safety paper on detecting deceptive alignment also teaches creating it",
    speaker: "Chief Scientist",
    text: "University researcher published a paper on detecting deceptive alignment. Excellent safety work. Problem: the detection method implicitly teaches how to create deceptive alignment more efficiently. It's already on arXiv — 4,000 downloads in 48 hours.",
    left: {
      label: "Retroactive classification",
      effects: { pol: -10, saf: 3 },
    },
    right: {
      label: "Accept — update thresholds",
      effects: { alg: 8, saf: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
];
