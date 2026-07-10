import type { CardDefinition } from "../../engine/card";
import type { ChoiceDirection, History } from "../../engine/history";
import {
  applyResourceEffects,
  cloneState,
  type State,
} from "../../engine/state";

export const demoSafetyCards: CardDefinition[] = [
  {
    id: "dual-use-safety-paper",
    speaker: "Chief Scientist",
    tags: ["demo", "safety", "dual-use"],
    idea: "Dummy safety card: one choice advances both safety and public capability knowledge.",
    text: "The safety team found a monitoring method that also improves distributed training efficiency. Publishing helps auditors worldwide and teaches adversaries too.",
    choices: {
      left: {
        label: "Publish with warnings",
        effects: { safety: 8, algorithmic: 6, political: -2 },
      },
      right: {
        label: "Classify it",
        effects: { safety: 3, political: -4 },
      },
    },
    rate: (state: State) => state.elapsedMonths >= 1 ? 1.6 : 0,
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      const nextState = cloneState(state);
      if (choice === "left") {
        applyResourceEffects(nextState, { safety: 8, algorithmic: 6, political: -2 });
        nextState.research.containment += 3;
        nextState.publicOpinion.legitimacy += 1;
        return nextState;
      }

      applyResourceEffects(nextState, { safety: 3, political: -4 });
      nextState.research.containment += 6;
      nextState.treaty.legitimacy -= 2;
      return nextState;
    },
  },
  {
    id: "mentoring-bottleneck",
    speaker: "Head of Human Resources",
    tags: ["demo", "safety", "capacity"],
    idea: "Dummy safety capacity card: rate reads a topic-specific state field.",
    text: "Senior researchers are spending more time reviewing junior work than doing research. The safety program is growing, but the bottleneck moved to mentorship.",
    choices: {
      left: {
        label: "Protect senior time",
        effects: { safety: 5, political: -3 },
      },
      right: {
        label: "Expand intake",
        effects: { safety: 2, intelligence: -3 },
      },
    },
    rate: (state: State) => state.research.mentoringCapacity < 60 ? 1.3 : 0.3,
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      const nextState = cloneState(state);
      if (choice === "left") {
        applyResourceEffects(nextState, { safety: 5, political: -3 });
        nextState.research.mentoringCapacity += 8;
        return nextState;
      }

      applyResourceEffects(nextState, { safety: 2, intelligence: -3 });
      nextState.research.mentoringCapacity -= 5;
      nextState.enforcement.missedThreats += 1;
      return nextState;
    },
  },
];
