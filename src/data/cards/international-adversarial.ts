// Source: event-map #institutional--china-hawk
// Rationale: teaches that individuals can sabotage international cooperation from
//   sincere belief. Internal disagreement about methods paralyzes the agency.
// Dynamic: institutions rot from within; sincere disagreement about the mission
// Category: incident (turn-gated)

// Source: event-map #international--taiwan-crisis
// Rationale: teaches that chip supply chain depends on geopolitics. Taiwan
//   fabricates most advanced chips. A crisis there threatens the entire
//   enforcement architecture — no chips to track if the fab goes dark.
// Dynamic: enforcement depends on physical infrastructure that can be disrupted
// Category: crisis (late-game)

// Source: event-map #international--war-and-pause
// Rationale: teaches that the treaty assumed a mostly peaceful world. Conventional
//   military conflicts create enforcement gaps that have nothing to do with AI.
//   The pause doesn't exist in a vacuum.
// Dynamic: 30 years of political noise; enforcement capability consumed
// Category: crisis (late-game, 3-choice)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const internationalAdversarialCards: Card[] = [
  {
    id: "china-hawk",
    tags: ["international-diplomacy", "institutional-integrity"],
    idea: "deputy director privately undermining China negotiations from conviction",
    speaker: "Deputy Director",
    text: "Our deputy director — former military intelligence — has been privately undermining China negotiations. He believes cooperation with China is naive. The Chinese diplomat threatens to withdraw from talks unless he's removed. The deputy is competent, experienced, and may be right about China.",
    left: {
      label: "Remove the deputy",
      effects: { pol: 3, int: -8 },
    },
    right: {
      label: "Keep him — manage China differently",
      effects: { pol: -8, int: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "taiwan-crisis",
    tags: ["chip-supply-chain", "international-diplomacy"],
    idea: "Taiwan Strait escalation threatens TSMC, 73% of advanced chip production",
    speaker: "NATO Liaison",
    text: "Military escalation in the Taiwan Strait. TSMC has activated contingency plans — if fighting starts, they'll disable the fabs. That's 73% of advanced AI chip production. Our entire supply-chain monitoring program depends on chips we can track from fabrication. No fabs, no new chips to track.",
    left: {
      label: "Stockpile chips now",
      effects: { pol: -5, int: 5 },
    },
    right: {
      label: "Diversify supply chain",
      effects: { pol: -3, int: -3, alg: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 12) return 0;
      return 2;
    },
  },
  {
    id: "war-and-pause",
    tags: ["international-diplomacy", "enforcement-operations"],
    idea: "conventional war between treaty nations, both suspend inspections",
    speaker: "Diplomatic Attaché",
    text: "Conventional war between two treaty nations over a territorial dispute unrelated to AI. Both demand we suspend inspections — 'We can't have international inspectors in active military zones.' Both accuse the other of using the war as cover for unauthorized training. Our satellite data shows unusual compute activity in both countries but can't distinguish military AI from forbidden training runs. The treaty says nothing about what happens during a war between members.",
    left: {
      label: "Demand both honor inspection obligations",
      effects: { pol: -12, int: 5 },
    },
    right: {
      label: "Suspend inspections, rely on satellites",
      effects: { pol: -3, int: -8 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1, [HIDDEN.treatyErosion]: 1 },
    },
    down: {
      label: "Broker ceasefire for inspection access",
      effects: { pol: -5, int: -3 },
      enabled: (state: GameState) => !(state.resources.pol > 60),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 2;
    },
  },
];
