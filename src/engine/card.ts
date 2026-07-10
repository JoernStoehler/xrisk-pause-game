import type { ChoiceDirection, History } from "./history";
import type { Effects, ResourceKey, State } from "./state";

export type DynamicText = string | ((state: State, history: History) => string);

export type PreviewSize = "small" | "large";

export interface ChoicePreview {
  resource: ResourceKey;
  direction: "up" | "down";
  size: PreviewSize;
}

export interface ChoiceDefinition {
  label: DynamicText;
  effects?: Effects;
}

export interface ChoiceOption {
  label: string;
  previews: ChoicePreview[];
  disabled: boolean;
}

export interface ActiveCard {
  templateId: string;
  speaker: string;
  text: string;
  left: ChoiceOption;
  right: ChoiceOption;
  down: ChoiceOption;
}

export interface CardDefinition {
  id: string;
  speaker: DynamicText;
  text: DynamicText;
  choices: {
    left: ChoiceDefinition;
    right: ChoiceDefinition;
    down?: ChoiceDefinition;
  };
  tags?: string[];
  idea?: string;
  /**
   * Events per month, evaluated when the next-card pool is built.
   * The sampler treats rates as constant until the next visible card is drawn.
   */
  rate: (state: State, history: History) => number;
  reduce: (
    state: State,
    history: History,
    choice: ChoiceDirection,
  ) => State;
}

export interface PoolEntry {
  card: CardDefinition;
  rate: number;
}

export interface TutorialCard {
  id: string;
  speaker: string;
  text: string;
  leftLabel: string;
  rightLabel: string;
  highlightResources?: boolean;
}

const LARGE_PREVIEW_THRESHOLD = 10;

function resolveText(value: DynamicText, state: State, history: History): string {
  return typeof value === "function" ? value(state, history) : value;
}

function derivePreviews(effects: Effects = {}): ChoicePreview[] {
  return Object.entries(effects)
    .filter(([, value]) => value !== 0)
    .map(([resource, value]) => ({
      resource: resource as ResourceKey,
      direction: value > 0 ? "up" : "down",
      size: Math.abs(value) >= LARGE_PREVIEW_THRESHOLD ? "large" : "small",
    }));
}

function resolveChoice(
  choice: ChoiceDefinition | undefined,
  state: State,
  history: History,
): ChoiceOption {
  if (!choice) return { label: "", previews: [], disabled: true };
  return {
    label: resolveText(choice.label, state, history),
    previews: derivePreviews(choice.effects),
    disabled: false,
  };
}

export function resolveActiveCard(
  card: CardDefinition,
  state: State,
  history: History,
): ActiveCard {
  return {
    templateId: card.id,
    speaker: resolveText(card.speaker, state, history),
    text: resolveText(card.text, state, history),
    left: resolveChoice(card.choices.left, state, history),
    right: resolveChoice(card.choices.right, state, history),
    down: resolveChoice(card.choices.down, state, history),
  };
}
