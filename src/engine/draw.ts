import type { CardDefinition, PoolEntry } from "./card";
import type { History } from "./history";
import type { State } from "./state";
import { nextRandom } from "./rng";
import { buildPool } from "./pool";

export interface PickResult {
  entry: PoolEntry;
  elapsedMonths: number;
  totalRate: number;
  rngState: number;
}

export interface DrawResult {
  card: CardDefinition;
  elapsedMonths: number;
  totalRate: number;
  rngStateBefore: number;
  rngStateAfter: number;
}

export function pickCard(rngState: number, pool: readonly PoolEntry[]): PickResult | null {
  const totalRate = pool.reduce((sum, entry) => sum + entry.rate, 0);
  if (totalRate <= 0) return null;

  const [waitRoll01, afterWaitRngState] = nextRandom(rngState);
  const [pickRoll01, nextRngState] = nextRandom(afterWaitRngState);
  const elapsedMonths = -Math.log(Math.max(waitRoll01, Number.EPSILON)) / totalRate;
  let roll = pickRoll01 * totalRate;
  for (const entry of pool) {
    roll -= entry.rate;
    if (roll <= 0) return { entry, elapsedMonths, totalRate, rngState: nextRngState };
  }

  return { entry: pool[pool.length - 1], elapsedMonths, totalRate, rngState: nextRngState };
}

export function drawNextCard(
  cards: readonly CardDefinition[],
  state: State,
  history: History,
  rngState: number,
): DrawResult | null {
  const pool = buildPool(cards, state, history);
  const picked = pickCard(rngState, pool);
  if (!picked) return null;

  return {
    card: picked.entry.card,
    elapsedMonths: picked.elapsedMonths,
    totalRate: picked.totalRate,
    rngStateBefore: rngState,
    rngStateAfter: picked.rngState,
  };
}
