import type { CardDefinition } from "../../engine/card";
import type { ChoiceDirection, History } from "../../engine/history";
import {
  applyResourceEffects,
  cloneState,
  type State,
} from "../../engine/state";

export const demoGeopoliticsCards: CardDefinition[] = [
  {
    id: "strait-crisis",
    speaker: "NATO Liaison",
    tags: ["demo", "geopolitics", "treaty"],
    idea: "Dummy geopolitics card: one choice flips a treaty/war boolean read by later rates.",
    text: "A naval confrontation near Taiwan is now dominating treaty talks. Both blocs ask whether ISIA inspections can continue during military alert.",
    choices: {
      left: {
        label: "Broker inspection carveout",
        effects: { political: -4, intelligence: -2 },
      },
      right: {
        label: "Back the hard line",
        effects: { political: 3, intelligence: -5 },
      },
    },
    rate: (state: State) => state.treaty.usChinaWar ? 0 : 0.9,
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      const nextState = cloneState(state);
      if (choice === "left") {
        applyResourceEffects(nextState, { political: -4, intelligence: -2 });
        nextState.treaty.legitimacy += 5;
        return nextState;
      }

      applyResourceEffects(nextState, { political: 3, intelligence: -5 });
      nextState.treaty.usChinaWar = true;
      nextState.treaty.erosion += 2;
      return nextState;
    },
  },
  {
    id: "war-inspection-crisis",
    speaker: "UN Secretary-General",
    tags: ["demo", "geopolitics", "enforcement"],
    idea: "Dummy cross-topic rate: reads treaty war state and enforcement visibility.",
    text: "With the war active, inspection teams are being denied access to facilities that were routine last month. Every enforcement action now has military signaling risk.",
    choices: {
      left: {
        label: "Pause inspections",
        effects: { intelligence: -8, political: 2 },
      },
      right: {
        label: "Demand access",
        effects: { intelligence: 4, political: -8 },
      },
    },
    rate: (state: State) => {
      if (!state.treaty.usChinaWar) return 0;
      return 1 + state.enforcement.visibility;
    },
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      const nextState = cloneState(state);
      if (choice === "left") {
        applyResourceEffects(nextState, { intelligence: -8, political: 2 });
        nextState.enforcement.missedThreats += 2;
        nextState.treaty.erosion += 1;
        return nextState;
      }

      applyResourceEffects(nextState, { intelligence: 4, political: -8 });
      nextState.enforcement.visibility += 1;
      nextState.treaty.erosion += 2;
      nextState.publicOpinion.legitimacy -= 3;
      return nextState;
    },
  },
];
