import type { CardDefinition } from "../../engine/card";
import type { ChoiceDirection, History } from "../../engine/history";
import {
  applyResourceEffects,
  cloneState,
  publicFatigue,
  resetPublicFatigue,
  type State,
} from "../../engine/state";

export const demoInstitutionCards: CardDefinition[] = [
  {
    id: "public-fatigue",
    speaker: "Communications Director",
    tags: ["demo", "institutions", "functional-state"],
    idea: "Dummy functional-state card: fatigue is read from a curve, not advanced by hidden ticks.",
    text: (state: State) =>
      `Our support trackers show fatigue at ${Math.round(publicFatigue(state))}. People remember the pause, but fewer remember the near miss that made it urgent.`,
    choices: {
      left: {
        label: "Show prevented crises",
        effects: { political: 4, intelligence: -4 },
      },
      right: {
        label: "Stay quiet",
        effects: { political: -3 },
      },
    },
    rate: (state: State) => publicFatigue(state) >= 24 ? 1.8 : 0,
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      const nextState = cloneState(state);
      if (choice === "left") {
        applyResourceEffects(nextState, { political: 4, intelligence: -4 });
        nextState.publicOpinion.legitimacy += 5;
        resetPublicFatigue(nextState, 15);
        return nextState;
      }

      applyResourceEffects(nextState, { political: -3 });
      nextState.publicOpinion.legitimacy -= 3;
      nextState.treaty.erosion += 1;
      resetPublicFatigue(nextState, publicFatigue(state) + 4);
      return nextState;
    },
  },
  {
    id: "budget-turf-war",
    speaker: "Finance Director",
    tags: ["demo", "institutions", "cross-topic-effects"],
    idea: "Dummy institution card: budget choices directly change multiple state sections.",
    text: "Enforcement and safety both want the next emergency appropriation. The council will fund one headline priority, not two.",
    choices: {
      left: {
        label: "Fund enforcement",
        effects: { intelligence: 8, safety: -3, political: -3 },
      },
      right: {
        label: "Fund safety",
        effects: { safety: 8, intelligence: -3, political: -3 },
      },
    },
    rate: () => 1,
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      const nextState = cloneState(state);
      if (choice === "left") {
        applyResourceEffects(nextState, { intelligence: 8, safety: -3, political: -3 });
        nextState.enforcement.sourceProtection += 4;
        nextState.research.mentoringCapacity -= 3;
        return nextState;
      }

      applyResourceEffects(nextState, { safety: 8, intelligence: -3, political: -3 });
      nextState.research.mentoringCapacity += 4;
      nextState.enforcement.missedThreats += 1;
      return nextState;
    },
  },
];
