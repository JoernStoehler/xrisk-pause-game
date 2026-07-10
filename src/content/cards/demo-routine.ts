import type { CardDefinition } from "../../engine/card";
import type { ChoiceDirection, History } from "../../engine/history";
import {
  applyResourceEffects,
  cloneState,
  type State,
} from "../../engine/state";

export const demoRoutineCards: CardDefinition[] = [
  {
    id: "daily-briefing",
    speaker: "Deputy Director",
    tags: ["demo", "routine"],
    idea: "Dummy always-available card so the pool never empties during architecture tests.",
    text: "The morning briefing is thin, but the agency still has to choose where to spend attention before the next crisis arrives.",
    choices: {
      left: {
        label: "Audit enforcement leads",
        effects: { intelligence: 3, political: -1 },
      },
      right: {
        label: "Meet treaty delegates",
        effects: { political: 3, intelligence: -1 },
      },
      down: {
        label: "Protect research time",
        effects: { safety: 3, algorithmic: 1 },
      },
    },
    rate: () => 0.8,
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      const nextState = cloneState(state);
      if (choice === "left") {
        applyResourceEffects(nextState, { intelligence: 3, political: -1 });
        nextState.enforcement.sourceProtection += 1;
        return nextState;
      }
      if (choice === "right") {
        applyResourceEffects(nextState, { political: 3, intelligence: -1 });
        nextState.treaty.legitimacy += 1;
        return nextState;
      }

      applyResourceEffects(nextState, { safety: 3, algorithmic: 1 });
      nextState.research.mentoringCapacity += 1;
      return nextState;
    },
  },
];
