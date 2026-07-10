import type { CardDefinition } from "./card";
import type { ChoiceDirection, History } from "./history";
import type { State } from "./state";

export function applyCardChoice(
  card: CardDefinition,
  state: State,
  history: History,
  choice: ChoiceDirection,
): State {
  if (choice === "down" && !card.choices.down) return state;
  return card.reduce(state, history, choice);
}
