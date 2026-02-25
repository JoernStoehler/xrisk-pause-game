import { describe, it, expect } from "vitest";
import { newGame, clampResources, applyChoice, checkDeath } from "./state";
import { drawNextCard } from "./cards";
import { CARD_TEMPLATES } from "../data/cards";

describe("newGame", () => {
  it("creates a fresh game with all bars at 50", () => {
    const state = newGame(42);
    expect(state.resources).toEqual({
      trust: 50,
      funding: 50,
      intel: 50,
      leverage: 50,
    });
    expect(state.turn).toBe(0);
    expect(state.phase).toBe("playing");
    expect(state.history).toEqual([]);
  });
});

describe("clampResources", () => {
  it("applies deltas and clamps to 0-100", () => {
    const r = { trust: 50, funding: 10, intel: 90, leverage: 50 };
    const result = clampResources(r, { trust: 60, funding: -20, intel: 15 });
    expect(result.trust).toBe(100);
    expect(result.funding).toBe(0);
    expect(result.intel).toBe(100);
    expect(result.leverage).toBe(50);
  });
});

describe("drawNextCard", () => {
  it("draws a card from the pool", () => {
    const state = newGame(42);
    const withCard = drawNextCard(state, CARD_TEMPLATES);
    expect(withCard.activeCard).not.toBeNull();
    expect(withCard.activeCard!.speaker).toBeTruthy();
    expect(withCard.activeCard!.text).toBeTruthy();
  });
});

describe("applyChoice + checkDeath", () => {
  it("applies choice and pushes to history", () => {
    let state = newGame(42);
    state = drawNextCard(state, CARD_TEMPLATES);
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
    state.resources.trust = 0;
    const death = checkDeath(state);
    expect(death).not.toBeNull();
    expect(death!.resource).toBe("trust");
    expect(death!.extreme).toBe("depleted");
  });

  it("detects death at 100", () => {
    const state = newGame(42);
    state.resources.leverage = 100;
    const death = checkDeath(state);
    expect(death).not.toBeNull();
    expect(death!.resource).toBe("leverage");
    expect(death!.extreme).toBe("overloaded");
  });

  it("returns null when alive", () => {
    const state = newGame(42);
    expect(checkDeath(state)).toBeNull();
  });
});
