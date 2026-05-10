// Source: event-map #national-intelligence--data-center-attack
// Rationale: teaches that national intelligence agencies have their own agendas
//   and may not share priorities with ISIA. Monitoring gaps can be created by
//   external attacks. The DG depends on cooperation from actors who may not care.
// Dynamic: enforcement capability consumed; institutions rot from within
// Category: incident (turn-gated, 3-choice)

// Source: event-map #national-intelligence--algorithmic-progress-leak
// Rationale: teaches that algorithmic progress is irreversible — knowledge once
//   created can't be uncreated. Intelligence agencies can be threat actors.
// Dynamic: the lethal threshold keeps shrinking; enforcement can't control all sources
// Category: history-triggered (consequence of data-center-attack)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const dataCenterChainCards: Card[] = [
  {
    id: "data-center-attack",
    tags: ["intelligence-agencies", "compute-monitoring"],
    idea: "NSA delayed reporting a foreign attack on monitored data center",
    speaker: "Intelligence Analyst",
    text: "The NSA director just forwarded a report — six months late. A US data center was attacked by a foreign actor. Our compute monitoring tools were disabled for roughly one week. It's possible a training run occurred during the gap. The NSA sat on this for months because they don't take ASI seriously enough to report promptly. It reached us only because the president's office intervened. We have no idea what happened during that week.",
    left: {
      label: "Demand full forensics from NSA",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Accept report, patch the monitoring gap",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    down: {
      label: "Cross-reference satellite data from that window",
      effects: { int: -3, pol: -3 },
      enabled: (state: GameState) => !(state.resources.int < 40),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "algorithmic-progress-leak",
    tags: ["intelligence-agencies", "algorithmic-progress"],
    idea: "follow-up: foreign actor completed training run during monitoring gap",
    speaker: "Intelligence Analyst",
    text: "Follow-up on the data center attack. Analysis suggests the foreign actor did complete a training run during the monitoring gap. Results unknown — but checkpoint files and training data now exist somewhere in a foreign intelligence service. Not ASI-level, but the algorithmic knowledge can't be un-created. The threshold just got a little lower and we can't tell anyone why without revealing how we found out.",
    left: {
      label: "Confront the nation — demand disclosure",
      effects: { pol: -8, int: -5 },
    },
    right: {
      label: "Monitor quietly — track if knowledge propagates",
      effects: { pol: -3, int: -3, alg: 5 },
    },
    poolWeight: (state: GameState) => {
      // Search newest-first so an old expired attack does not hide a newer one.
      const trigger = [...state.history].reverse().find(
        (h) => h.cardId === "data-center-attack",
      );
      if (!trigger) return 0;
      const delay = state.turn - trigger.turn;
      if (delay < 2 || delay > 4) return 0;
      return 8;
    },
  },
];
