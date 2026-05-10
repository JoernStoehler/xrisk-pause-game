// Source: event-map #intelligence--weight-theft-state
// Rationale: teaches that model weights are the nightmare scenario — data can be
//   copied infinitely. Physical chips can be seized; weights cannot be un-copied.
//   State intelligence services are the main threat vector.
// Dynamic: some things can't be enforced retroactively; weights are permanent
// Category: crisis (turn-gated, 3-choice)

// Source: event-map #international--weight-theft-state
// Rationale: teaches that model weights are the nightmare scenario — data can be
//   copied infinitely and once stolen cannot be recovered. Physical chips can be
//   seized; weights cannot be un-copied. The treaty was designed around compute,
//   not data.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: crisis (turn-gated, 3-choice)

// Source: event-map #international--china-weights-deployed
// Rationale: teaches that the treaty's compute-centric enforcement model has a blind
//   spot for data. Running an existing model isn't a treaty violation — the treaty
//   regulates training runs, not inference. Structural gap, not failure of will.
// Dynamic: enforcement can only control one of four sources of progress
// Category: history-triggered (consequence of weight-theft-state)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const weightSecurityCards: Card[] = [
  {
    id: "weight-theft",
    tags: ["intelligence-agencies", "rogue-actors"],
    idea: "frontier model weights stolen by state intelligence, can't un-copy data",
    speaker: "Intelligence Analyst",
    text: "A frontier lab reports catastrophic breach — their latest model's weights exfiltrated. NSA assessment: state intelligence operation, likely China. Weights from a legal training run, now in the hands of a government with no transparency obligations. You can't un-copy data.",
    left: {
      label: "Formal confrontation in Council",
      effects: { pol: -10, int: -5 },
    },
    right: {
      label: "Back-channel diplomacy",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 1 },
    },
    down: {
      label: "Present classified evidence",
      effects: { pol: -5, int: -10 },
      enabled: (state: GameState) => !(state.resources.int < 50),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 2.5;
    },
  },
  {
    id: "weight-theft-state",
    tags: ["intelligence-agencies", "international-diplomacy"],
    idea: "China's MSS exfiltrates most capable model weights from compliant lab",
    speaker: "Intelligence Analyst",
    text: "A treaty-compliant frontier lab reports a catastrophic security breach. Their latest model's weights — product of a legally sanctioned training run — have been exfiltrated. Joint forensics with NSA confirm: this was a state intelligence service operation, almost certainly China's MSS. The weights represent the most capable AI system in existence. China denies everything. The weights are just data. Once copied, they cannot be un-copied. China now has them.",
    left: {
      label: "Formal confrontation in Executive Council",
      effects: { pol: -8, int: -5 },
    },
    right: {
      label: "Back-channel diplomacy — negotiate monitoring",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 1 },
    },
    down: {
      label: "Present classified evidence at emergency session",
      effects: { pol: -5, int: -10 },
      enabled: (state: GameState) => !(state.resources.int < 60),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
  {
    id: "china-weights-deployed",
    tags: ["treaty-compliance", "international-diplomacy"],
    idea: "follow-up: China deploys stolen weights for inference, technically not a violation",
    speaker: "Intelligence Analyst",
    text: "Six months after the weight theft. China has deployed the stolen model internally — not for further training, but as an analysis and planning tool across military and economic applications. They haven't violated the training threshold. Our legal team is split: 'Possessing stolen weights isn't explicitly prohibited — the treaty regulates training runs, not inference.' China's position: 'Running an existing model isn't a treaty violation.' They're technically correct.",
    left: {
      label: "Push for treaty amendment on weight possession",
      effects: { pol: -8, int: -3 },
    },
    right: {
      label: "Accept the gap — focus on what we control",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.history.some((h) => h.cardId === "china-weights-deployed")) return 0;
      // Search newest-first so an old expired theft does not hide a newer one.
      const trigger = [...state.history].reverse().find(
        (h) => h.cardId === "weight-theft-state",
      );
      if (!trigger) return 0;
      const delay = state.turn - trigger.turn;
      if (delay < 2 || delay > 5) return 0;
      return 8;
    },
  },
];
