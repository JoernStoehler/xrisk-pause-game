// STUB — placeholder cards so the game runs while real cards are being written.

import type { Card, GameState } from "../../engine/types";

export const incidentsCards: Card[] = [
  {
    id: "rogue-lab-normal",
    tags: ["rogue-actors", "compute-monitoring"],
    idea: "detect illegal data center via heat signature near Shenzhen",
    speaker: "Deputy Director",
    text: "Thermal anomaly near Shenzhen industrial zone. Signature consistent with an undeclared compute cluster running prohibited training.",
    left: {
      label: "Send inspectors",
      effects: { pol: -3, int: 8 },
    },
    right: {
      label: "Flag for next quarter",
      effects: { pol: -5, int: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.resources.int < 40) return 0;
      return 1.5;
    },
  },
  {
    id: "rogue-lab-degraded",
    tags: ["rogue-actors", "intelligence-agencies"],
    idea: "detect illegal compute via rumors when intel is low",
    speaker: "Deputy Director",
    text: "There are... rumors of unauthorized compute usage somewhere in East Asia. We can't pin it down with our current intelligence.",
    left: {
      label: "Expensive investigation",
      effects: { pol: -5, int: 5 },
    },
    right: {
      label: "Ignore the rumors",
      effects: { pol: -3, int: -6 },
    },
    poolWeight: (state: GameState) => {
      if (state.resources.int >= 40) return 0;
      return 1.5;
    },
  },
  {
    id: "chip-smuggling",
    tags: ["chip-supply-chain", "enforcement-operations"],
    idea: "detect illegal chip sale via border agents, hidden in networking equipment",
    speaker: "Deputy Director",
    text: "Border agents intercepted a container with 48 H100 GPUs hidden inside networking equipment. Trail leads to a shell company.",
    left: { label: "Full investigation", effects: { pol: 4, int: 6 } },
    right: { label: "Seize and move on", effects: { int: -4, pol: 3 } },
    poolWeight: () => 1.5,
  },
  {
    id: "whistleblower",
    tags: ["whistleblowers", "rogue-actors"],
    idea: "lab researcher claims prohibited capability evaluations, wants protection",
    speaker: "Deputy Director",
    text: "A researcher at a major lab claims they've been running prohibited capability evaluations in secret. They want protection.",
    left: { label: "Protect and investigate", effects: { int: 8, pol: -5 } },
    right: { label: "Too risky, decline", effects: { pol: -8, int: -5 } },
    poolWeight: () => 1,
  },
];
