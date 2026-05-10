// --- Resource bars (visible to player) ---

// Working hypothesis — will change based on what cards actually need
export type ResourceKey = "pol" | "int" | "saf" | "alg";

export const RESOURCE_KEYS: ResourceKey[] = ["pol", "int", "saf", "alg"];

export interface Resources {
  pol: number; // Political power — mandate, budget, authority
  int: number; // Intelligence — monitoring, surveillance, information quality
  saf: number; // Safety progress — alignment research advancement
  alg: number; // Algorithmic progress — capability knowledge, shrinking lethal threshold
}

/** Resource deltas for visible bars. Omitted = no change. */
export type Effects = Partial<Record<ResourceKey, number>>;

// --- Hidden state (not visible to player, mediates card interactions) ---

/** Arbitrary key-value pairs that cards read and write.
 *  The medium through which cards interact without pairwise history checks. */
export type HiddenState = Record<string, number>;

// --- Directional previews (shown on tilt) ---

export type PreviewSize = "small" | "large";

export interface ChoicePreview {
  resource: ResourceKey;
  direction: "up" | "down";
  size: PreviewSize;
}

// --- Card declarations (static data + dynamic callbacks) ---

/** Anything that can be static or state-dependent. */
export type Dynamic<T> = T | ((state: GameState) => T);

/** One swipe direction's spec. */
export interface ChoiceSpec {
  label: Dynamic<string>;
  effects: Effects;
  /** Changes to hidden state variables. */
  hiddenEffects?: Record<string, number>;
  /**
   * Transitional legacy hook. Authored cards should prefer static 2-or-3 choice
   * structures and separate locked/unlocked card variants over dynamic options.
   */
  enabled?: Dynamic<boolean>;
}

/** A card declaration. Registered once, evaluated every turn via poolWeight. */
export interface Card {
  id: string;
  speaker: Dynamic<string>;
  text: Dynamic<string>;
  left: ChoiceSpec;
  right: ChoiceSpec;
  /** Third option (swipe down). Omit for standard 2-choice cards. */
  down?: ChoiceSpec;
  color?: string;
  /** Developer tags for categorization. Shown in card map. */
  tags?: string[];
  /** One-line concept: the generating idea behind this card. Shown in cards-export.md. */
  idea?: string;
  /** Return 0 to exclude from pool this turn. Higher = more likely to be drawn. */
  poolWeight: (state: GameState) => number;
}

// --- Resolved choices (built by engine from DirectionSpec) ---

/** Resolved choice with apply function and previews. */
export interface ChoiceOption {
  label: string;
  apply: (state: GameState) => GameState;
  previews: ChoicePreview[];
  disabled: boolean;
}

/** Active card ready for the UI. */
export interface ActiveCard {
  templateId: string;
  speaker: string;
  text: string;
  left: ChoiceOption;
  right: ChoiceOption;
  down: ChoiceOption;
  color?: string;
}

// --- Game state ---

export type ChoiceDirection = "left" | "right" | "down";

export interface HistoryEntry {
  turn: number;
  cardId: string;
  choice: ChoiceDirection;
}

export interface DeathInfo {
  resource: ResourceKey;
  extreme: "depleted" | "overloaded";
  message: string;
}

export type DeathCause = Omit<DeathInfo, "message">;

export type GamePhase = "title" | "tutorial" | "playing" | "dead" | "victory";

export interface TutorialCard {
  id: string;
  speaker: string;
  text: string;
  leftLabel: string;
  rightLabel: string;
  highlightResources?: boolean;
}

export interface GameState {
  phase: GamePhase;
  resources: Resources;
  hidden: HiddenState;
  turn: number;
  activeCard: ActiveCard | null;
  rngState: number;
  death: DeathInfo | null;
  history: HistoryEntry[];
}
