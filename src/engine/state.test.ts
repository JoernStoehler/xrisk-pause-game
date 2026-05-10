import { describe, it, expect } from "vitest";
import { newGame, applyChoice, checkDeathCause } from "./state";
import { drawNextCard } from "./cards";
import { ALL_CARDS } from "../data/cards";

describe("newGame", () => {
  it("creates a fresh game with all bars at 50", () => {
    const state = newGame(42);
    expect(state.resources).toEqual({
      pol: 50,
      int: 50,
      saf: 50,
      alg: 50,
    });
    expect(state.turn).toBe(0);
    expect(state.phase).toBe("playing");
    expect(state.history).toEqual([]);
    expect(state.hidden).toEqual({});
  });
});

describe("drawNextCard", () => {
  it("draws a card from the pool", () => {
    const state = newGame(42);
    const withCard = drawNextCard(state, ALL_CARDS);
    expect(withCard.activeCard).not.toBeNull();
    expect(withCard.activeCard!.speaker).toBeTruthy();
    expect(withCard.activeCard!.text).toBeTruthy();
  });
});

describe("applyChoice + checkDeath", () => {
  it("applies choice and pushes to history", () => {
    let state = newGame(42);
    state = drawNextCard(state, ALL_CARDS);
    const before = state.resources;
    state = applyChoice(state, "left");
    expect(state.turn).toBe(1);
    expect(state.history).toHaveLength(1);
    expect(state.activeCard).toBeNull();
    // Resources should have changed (at least one bar differs)
    const changed = Object.keys(before).some(
      (k) =>
        before[k as keyof typeof before] !==
        state.resources[k as keyof typeof state.resources],
    );
    expect(changed).toBe(true);
  });

  it("detects death at 0", () => {
    const state = newGame(42);
    state.resources.pol = 0;
    const death = checkDeathCause(state);
    expect(death).not.toBeNull();
    expect(death!.resource).toBe("pol");
    expect(death!.extreme).toBe("depleted");
  });

  it("detects death at 100", () => {
    const state = newGame(42);
    state.resources.alg = 100;
    const death = checkDeathCause(state);
    expect(death).not.toBeNull();
    expect(death!.resource).toBe("alg");
    expect(death!.extreme).toBe("overloaded");
  });

  it("returns null when alive", () => {
    const state = newGame(42);
    expect(checkDeathCause(state)).toBeNull();
  });
});
