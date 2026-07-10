import { describe, expect, it } from "vitest";
import type { CardDefinition } from "./card";
import { buildPool } from "./pool";
import { pickCard } from "./draw";
import type { ChoiceDirection, History } from "./history";
import { hasDrawnCard } from "./history";
import { nextRandom } from "./rng";
import {
  chooseInSession,
  newGame,
  rehydrateActiveCard,
  startSession,
  type GameState,
  type SessionContent,
} from "./session";
import {
  applyResourceEffects,
  checkDeathCause,
  cloneState,
  initialState,
  type State,
} from "./state";

const deathMessage = (cause: { resource: string; extreme: string }, decisionCount: number) =>
  `${cause.resource}:${cause.extreme}:${decisionCount}`;

function fixtureCard(overrides: Partial<CardDefinition> = {}): CardDefinition {
  return {
    id: "fixture-card",
    speaker: "Deputy Director",
    text: "Fixture decision.",
    choices: {
      left: {
        label: "Left",
        effects: { political: 5 },
      },
      right: {
        label: "Right",
        effects: { intelligence: -5 },
      },
    },
    rate: () => 1,
    reduce: (state: State, _history: History, choice: ChoiceDirection) => {
      const nextState = cloneState(state);
      if (choice === "left") {
        applyResourceEffects(nextState, { political: 5 });
        nextState.enforcement.visibility += 1;
      } else if (choice === "right") {
        applyResourceEffects(nextState, { intelligence: -5 });
      }
      return nextState;
    },
    ...overrides,
  };
}

function content(cards: readonly CardDefinition[]): SessionContent {
  return { cards, deathMessage };
}

function drawFixture(cards: readonly CardDefinition[] = [fixtureCard()]): GameState {
  return startSession(content(cards), 42);
}

describe("initial state", () => {
  it("creates explicit aggregate world state", () => {
    const state = newGame(42);

    expect(state.world.resources).toEqual({
      political: 50,
      intelligence: 50,
      safety: 50,
      algorithmic: 50,
    });
    expect(state.world.elapsedMonths).toBe(0);
    expect(state.world.decisionCount).toBe(0);
    expect(state.phase).toBe("playing");
    expect(state.history).toEqual([{ type: "gameStarted", seed: 42 }]);
  });
});

describe("pool and draw", () => {
  it("builds a pool by mapping card rates and filtering zero rates", () => {
    const state = initialState();
    const history: History = [{ type: "gameStarted", seed: 1 }];
    const cards = [
      fixtureCard({ id: "a", rate: () => 0 }),
      fixtureCard({ id: "b", rate: () => 2 }),
    ];

    expect(buildPool(cards, state, history)).toEqual([{ card: cards[1], rate: 2 }]);
  });

  it("throws when a card returns an invalid rate", () => {
    const state = initialState();
    const history: History = [{ type: "gameStarted", seed: 1 }];
    const cards = [fixtureCard({ id: "bad-rate", rate: () => Number.NaN })];

    expect(() => buildPool(cards, state, history)).toThrow(
      "Card bad-rate returned invalid monthly rate: NaN",
    );
  });

  it("picks deterministically from the same RNG state and pool", () => {
    const pool = [
      { card: fixtureCard({ id: "a" }), rate: 1 },
      { card: fixtureCard({ id: "b" }), rate: 10 },
    ];

    const first = pickCard(42, pool);
    const second = pickCard(42, pool);

    expect(first?.rngState).not.toBe(42);
    expect(second).toEqual(first);
  });

  it("samples elapsed months from the exponential wait formula", () => {
    const pool = [
      { card: fixtureCard({ id: "a" }), rate: 1 },
      { card: fixtureCard({ id: "b" }), rate: 3 },
    ];
    const [waitRoll01] = nextRandom(42);
    const totalRate = 4;

    const picked = pickCard(42, pool);

    expect(picked?.elapsedMonths).toBe(
      -Math.log(Math.max(waitRoll01, Number.EPSILON)) / totalRate,
    );
  });

  it("draws and resolves dynamic card text", () => {
    const card = fixtureCard({
      speaker: (state) => `Deputy ${Math.floor(state.elapsedMonths)}`,
      text: (state) => `Political support is ${state.resources.political}.`,
      choices: {
        left: { label: "Left", effects: { political: 5 } },
        right: { label: "Right", effects: { intelligence: -5 } },
        down: { label: (state) => `Safety at ${state.resources.safety}`, effects: { safety: 12 } },
      },
    });

    const state = drawFixture([card]);

    expect(state.activeCard?.speaker).toBe("Deputy 0");
    expect(state.activeCard?.text).toBe("Political support is 50.");
    expect(state.activeCard?.down.disabled).toBe(false);
    expect(state.activeCard?.down.label).toBe("Safety at 50");
    expect(state.activeCard?.down.previews).toEqual([
      { resource: "safety", direction: "up", size: "large" },
    ]);
    expect(state.history.at(-1)).toMatchObject({
      type: "cardDrawn",
      cardId: "fixture-card",
      elapsedMonths: expect.any(Number),
      deltaMonths: expect.any(Number),
      totalRate: 1,
    });
  });

  it("resolves active cards against persisted draw history", () => {
    const card = fixtureCard({
      text: (_state, history) =>
        hasDrawnCard(history, "fixture-card") ? "Draw is recorded." : "Draw is missing.",
    });

    const state = drawFixture([card]);
    const serialized = JSON.parse(JSON.stringify(state)) as GameState;
    const rehydrated = rehydrateActiveCard(serialized, [card]);

    expect(state.activeCard?.text).toBe("Draw is recorded.");
    expect(rehydrated.activeCard?.text).toBe(state.activeCard?.text);
  });

  it("fails closed when no cards are eligible", () => {
    const state = drawFixture([fixtureCard({ rate: () => 0 })]);

    expect(state.phase).toBe("dead");
    expect(state.death?.resource).toBe("intelligence");
  });
});

describe("chooseInSession and checkDeathCause", () => {
  it("applies the active card reducer, advances time, and redraws", () => {
    const state = drawFixture();
    const next = chooseInSession(state, "left", content([fixtureCard()]));

    expect(next.world.decisionCount).toBe(1);
    expect(next.world.elapsedMonths).toBeGreaterThan(state.world.elapsedMonths);
    expect(next.world.resources.political).toBe(55);
    expect(next.world.enforcement.visibility).toBe(1);
    expect(next.history.some((entry) =>
      entry.type === "choiceCommitted" &&
      entry.cardId === "fixture-card" &&
      entry.choice === "left",
    )).toBe(true);
    expect(next.activeCard?.templateId).toBe("fixture-card");
  });

  it("ignores disabled down choices", () => {
    const state = drawFixture();

    expect(state.activeCard?.down.disabled).toBe(true);
    expect(chooseInSession(state, "down", content([fixtureCard()]))).toBe(state);
  });

  it("detects death at resource extremes", () => {
    const lowPolitics = initialState();
    lowPolitics.resources.political = 0;
    expect(checkDeathCause(lowPolitics)).toEqual({
      resource: "political",
      extreme: "depleted",
    });

    const highAlgorithmic = initialState();
    highAlgorithmic.resources.algorithmic = 100;
    expect(checkDeathCause(highAlgorithmic)).toEqual({
      resource: "algorithmic",
      extreme: "overloaded",
    });

    expect(checkDeathCause(initialState())).toBeNull();
  });

  it("attaches content-provided death messages", () => {
    const deadlyCard = fixtureCard({
      choices: {
        left: { label: "Break politics", effects: { political: -50 } },
        right: { label: "Right", effects: { intelligence: -5 } },
      },
      reduce: (state) => {
        const nextState = cloneState(state);
        applyResourceEffects(nextState, { political: -50 });
        return nextState;
      },
    });
    const state = drawFixture([deadlyCard]);
    const next = chooseInSession(state, "left", content([deadlyCard]));

    expect(next.phase).toBe("dead");
    expect(next.death?.message).toBe("political:depleted:1");
  });
});

describe("rehydrateActiveCard", () => {
  it("restores active-card display data from current card definitions", () => {
    const original = drawFixture([fixtureCard()]);
    const serialized = JSON.parse(JSON.stringify(original)) as GameState;

    const rehydrated = rehydrateActiveCard(serialized, [fixtureCard()]);

    expect(rehydrated.activeCard?.templateId).toBe("fixture-card");
    expect(rehydrated.activeCard?.left.label).toBe("Left");
  });

  it("draws a replacement when a saved active card no longer exists", () => {
    const state = drawFixture([fixtureCard({ id: "removed-card" })]);
    const rehydrated = rehydrateActiveCard(state, [fixtureCard({ id: "replacement-card" })]);

    expect(rehydrated.phase).toBe("playing");
    expect(rehydrated.activeCard?.templateId).toBe("replacement-card");
  });
});
