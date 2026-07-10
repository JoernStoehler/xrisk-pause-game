import type { CardDefinition } from "../../engine/card";
import type { ChoiceDirection, History } from "../../engine/history";
import { hasCommittedChoice, latestChoice } from "../../engine/history";
import {
  applyResourceEffects,
  cloneState,
  type Effects,
  type State,
} from "../../engine/state";

function applyChoiceEffects(state: State, effects: Effects): State {
  const nextState = cloneState(state);
  applyResourceEffects(nextState, effects);
  return nextState;
}

export const demoEnforcementCards: CardDefinition[] = [
  {
    id: "thermal-anomaly",
    speaker: "Intelligence Analyst",
    tags: ["demo", "enforcement", "state-rate"],
    idea: "Dummy enforcement card: rate reads intelligence; choices write enforcement and political state.",
    text: "Satellite imagery shows an unexplained thermal bloom near a declared compute site. It might be illegal training, or it might be industrial noise.",
    choices: {
      left: {
        label: "Authorize inspection",
        effects: { intelligence: -8, political: -3 },
      },
      right: {
        label: "Keep monitoring",
        effects: { intelligence: 2, algorithmic: 2 },
      },
      down: {
        label: "Ask host state first",
        effects: { political: 2, intelligence: -4 },
      },
    },
    rate: (state: State) => state.resources.intelligence >= 45 ? 2 : 0.5,
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      if (choice === "left") {
        const nextState = applyChoiceEffects(state, { intelligence: -8, political: -3 });
        nextState.enforcement.visibility += 1;
        nextState.publicOpinion.legitimacy -= 2;
        return nextState;
      }
      if (choice === "right") {
        const nextState = applyChoiceEffects(state, { intelligence: 2, algorithmic: 2 });
        nextState.enforcement.missedThreats += 1;
        return nextState;
      }

      const nextState = applyChoiceEffects(state, { political: 2, intelligence: -4 });
      nextState.treaty.legitimacy += 2;
      return nextState;
    },
  },
  {
    id: "source-network-burned",
    speaker: "Enforcement Chief",
    tags: ["demo", "enforcement", "history-rate"],
    idea: "Dummy follow-up: rate queries history for a prior inspection choice.",
    text: "The inspection exposed how we detected the facility. Two informants have gone silent, and operators are changing heat-management practices.",
    choices: {
      left: {
        label: "Protect sources",
        effects: { intelligence: -6, political: -2 },
      },
      right: {
        label: "Exploit the lead",
        effects: { intelligence: 4, political: -4 },
      },
    },
    rate: (_state: State, history: History) => {
      const trigger = latestChoice(history, "thermal-anomaly", "left");
      if (!trigger) return 0;
      if (hasCommittedChoice(history, "source-network-burned")) return 0;
      return 4;
    },
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      if (choice === "left") {
        const nextState = applyChoiceEffects(state, { intelligence: -6, political: -2 });
        nextState.enforcement.sourceProtection += 8;
        nextState.enforcement.visibility -= 1;
        return nextState;
      }

      const nextState = applyChoiceEffects(state, { intelligence: 4, political: -4 });
      nextState.enforcement.sourceProtection -= 10;
      nextState.enforcement.visibility += 1;
      return nextState;
    },
  },
];
