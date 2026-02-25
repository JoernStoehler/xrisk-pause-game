// Mulberry32 seeded PRNG — deterministic from seed
export function nextRandom(state: number): [number, number] {
  const s = (state + 0x6d2b79f5) | 0;
  let t = Math.imul(s ^ (s >>> 15), 1 | s);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  const value = ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  return [value, s];
}

// Get a random number and advance state in-place
export function random(state: { rngState: number }): number {
  const [value, newState] = nextRandom(state.rngState);
  state.rngState = newState;
  return value;
}

// Random integer in [0, max)
export function randomInt(state: { rngState: number }, max: number): number {
  return Math.floor(random(state) * max);
}

// Weighted random pick from items array with corresponding weights
export function weightedPick<T>(
  state: { rngState: number },
  items: T[],
  weights: number[],
): T {
  const total = weights.reduce((a, b) => a + b, 0);
  let roll = random(state) * total;
  for (let i = 0; i < items.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return items[i];
  }
  return items[items.length - 1];
}

// Poisson-distributed random number with given mean
export function randomPoisson(
  state: { rngState: number },
  mean: number,
): number {
  const L = Math.exp(-mean);
  let k = 0;
  let p = 1;
  do {
    k++;
    p *= random(state);
  } while (p > L);
  return k - 1;
}
