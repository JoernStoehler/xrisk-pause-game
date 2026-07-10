import type { CardDefinition, PoolEntry } from "./card";
import type { History } from "./history";
import type { State } from "./state";

export function buildPool(
  cards: readonly CardDefinition[],
  state: State,
  history: History,
): PoolEntry[] {
  return cards.flatMap((card) => {
    const rate = card.rate(state, history);
    if (!Number.isFinite(rate) || rate < 0) {
      throw new Error(`Card ${card.id} returned invalid monthly rate: ${rate}`);
    }
    return rate > 0 ? [{ card, rate }] : [];
  });
}
