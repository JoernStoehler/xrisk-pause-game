import { describe, it, expect } from "vitest";
import { chooseInSession } from "./session";
import { newGame, applyChoice, checkDeathCause } from "./state";
import { drawNextCard } from "./cards";
import type { Card, GameState } from "./types";

const card = (overrides: Partial<Card> = {}): Card => ({
  id: "fixture-card",
  speaker: "Deputy Director",
  text: "Fixture decision.",
  left: {
    label: "Left",
    effects: { pol: 5 },
    hiddenEffects: { fixture_signal: 1 },
  },
  right: { label: "Right", effects: { int: -5 } },
  poolWeight: () => 1,
  ...overrides,
});

const drawFixture = (state: GameState, cards: readonly Card[] = [card()]) =>
  drawNextCard(state, cards);

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
    const withCard = drawFixture(state);
    expect(withCard.activeCard).not.toBeNull();
    expect(withCard.activeCard!.speaker).toBe("Deputy Director");
    expect(withCard.activeCard!.text).toBe("Fixture decision.");
  });

  it("respects the anti-repeat window when another card is eligible", () => {
    const cards = ["a", "b", "c", "d"].map((id) => card({ id }));
    const state: GameState = {
      ...newGame(42),
      history: [
        { turn: 0, cardId: "a", choice: "left" },
        { turn: 1, cardId: "b", choice: "left" },
        { turn: 2, cardId: "c", choice: "left" },
      ],
    };

    const withCard = drawNextCard(state, cards);
    expect(withCard.activeCard?.templateId).toBe("d");
  });

  it("fails closed when no cards are eligible", () => {
    const withCard = drawNextCard(newGame(42), [card({ poolWeight: () => 0 })]);
    expect(withCard.phase).toBe("dead");
    expect(withCard.death?.resource).toBe("int");
  });
});

describe("applyChoice + checkDeath", () => {
  it("applies visible and hidden effects and pushes to history", () => {
    let state = newGame(42);
    state = drawFixture(state);
    state = applyChoice(state, "left");
    expect(state.turn).toBe(1);
    expect(state.history).toHaveLength(1);
    expect(state.activeCard).toBeNull();
    expect(state.resources.pol).toBe(55);
    expect(state.hidden.fixture_signal).toBe(1);
  });

  it("ignores disabled down choices", () => {
    const state = drawFixture(newGame(42));
    expect(state.activeCard?.down.disabled).toBe(true);
    expect(applyChoice(state, "down")).toBe(state);
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

describe("chooseInSession", () => {
  it("attaches content-provided death messages", () => {
    const deadlyCard = card({
      left: { label: "Break politics", effects: { pol: -50 } },
    });
    const state = drawFixture(newGame(42), [deadlyCard]);

    const next = chooseInSession(state, "left", {
      cards: [deadlyCard],
      deathMessage: (cause, turn) => `${cause.resource}:${cause.extreme}:${turn}`,
    });

    expect(next.phase).toBe("dead");
    expect(next.death?.message).toBe("pol:depleted:1");
  });
});
