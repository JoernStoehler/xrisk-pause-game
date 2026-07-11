/** Stable, browser-compatible named draws. This is diagnostic, not cryptographic. */
function hash32(text: string): number {
  let value = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    value ^= text.charCodeAt(i);
    value = Math.imul(value, 16777619);
  }
  value += value << 13;
  value ^= value >>> 7;
  value += value << 3;
  value ^= value >>> 17;
  value += value << 5;
  return value >>> 0;
}

export function namedDraw(seed: string, key: string): number {
  return hash32(`${seed}::${key}`) / 0x1_0000_0000;
}

export function namedBoolean(seed: string, key: string, probability: number): boolean {
  return namedDraw(seed, key) < probability;
}

export function namedRange(seed: string, key: string, low: number, high: number): number {
  return low + namedDraw(seed, key) * (high - low);
}
