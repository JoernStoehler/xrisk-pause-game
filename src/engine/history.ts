export type ChoiceDirection = "left" | "right" | "down";

export interface GameStartedEvent {
  type: "gameStarted";
  seed: number;
}

export interface CardDrawnEvent {
  type: "cardDrawn";
  elapsedMonths: number;
  deltaMonths: number;
  cardId: string;
  rngStateBefore: number;
  rngStateAfter: number;
  totalRate: number;
}

export interface ChoiceCommittedEvent {
  type: "choiceCommitted";
  elapsedMonths: number;
  decisionIndex: number;
  cardId: string;
  choice: ChoiceDirection;
}

export type HistoryEntry =
  | GameStartedEvent
  | CardDrawnEvent
  | ChoiceCommittedEvent;

export type History = HistoryEntry[];

export function latestChoice(
  history: readonly HistoryEntry[],
  cardId: string,
  choice?: ChoiceDirection,
): ChoiceCommittedEvent | null {
  for (let index = history.length - 1; index >= 0; index--) {
    const entry = history[index];
    if (entry.type !== "choiceCommitted") continue;
    if (entry.cardId !== cardId) continue;
    if (choice !== undefined && entry.choice !== choice) continue;
    return entry;
  }
  return null;
}

export function hasCommittedChoice(
  history: readonly HistoryEntry[],
  cardId: string,
  choice?: ChoiceDirection,
): boolean {
  return latestChoice(history, cardId, choice) !== null;
}

export function hasDrawnCard(
  history: readonly HistoryEntry[],
  cardId: string,
): boolean {
  return history.some((entry) => entry.type === "cardDrawn" && entry.cardId === cardId);
}

export function choiceHistory(
  history: readonly HistoryEntry[],
): ChoiceCommittedEvent[] {
  return history.filter((entry): entry is ChoiceCommittedEvent => entry.type === "choiceCommitted");
}
