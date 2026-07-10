import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { CardDefinition } from "../engine/card";
import type { ChoiceDirection, History } from "../engine/history";
import { startSession, type GameState } from "../engine/session";
import {
  applyResourceEffects,
  cloneState,
  type State,
} from "../engine/state";
import { loadState, saveState } from "./storage";

const STORAGE_KEY = "global-pause-state";

const fixtureCard = (): CardDefinition => ({
  id: "storage-fixture",
  speaker: "Deputy Director",
  text: "Fixture decision.",
  choices: {
    left: {
      label: "Authorize",
      effects: { political: 5 },
    },
    right: { label: "Defer", effects: { intelligence: -5 } },
  },
  rate: () => 1,
  reduce: (state: State, _history: History, choice: ChoiceDirection) => {
    const nextState = cloneState(state);
    if (choice === "left") {
      applyResourceEffects(nextState, { political: 5 });
      nextState.enforcement.visibility += 1;
    }
    return nextState;
  },
});

const drawFixture = (): GameState =>
  startSession({
    cards: [fixtureCard()],
    deathMessage: (cause, decisionCount) => `${cause.resource}:${cause.extreme}:${decisionCount}`,
  }, 42);

describe("app storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    localStorage.clear();
  });

  it("saveState writes versioned state", () => {
    const state = drawFixture();

    saveState(state);

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as {
      v?: number;
      state?: GameState;
    };
    expect(saved.v).toBe(6);
    expect(saved.state?.world.decisionCount).toBe(0);
    expect(saved.state?.activeCard?.templateId).toBe("storage-fixture");
  });

  it("saveState handles unavailable localStorage", () => {
    vi.stubGlobal("localStorage", undefined);

    expect(() => saveState(drawFixture())).not.toThrow();
  });

  it("loadState discards saved state from the wrong version", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 4, state: drawFixture() }));

    expect(loadState([fixtureCard()])).toBeNull();
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });

  it("loadState handles corrupt JSON", () => {
    localStorage.setItem(STORAGE_KEY, "{bad json");

    expect(loadState([fixtureCard()])).toBeNull();
  });

  it("loadState handles missing storage", () => {
    vi.stubGlobal("localStorage", undefined);

    expect(loadState([fixtureCard()])).toBeNull();
  });

  it("loadState rehydrates a saved active card through provided cards", () => {
    const state = drawFixture();
    saveState(state);

    const loaded = loadState([fixtureCard()]);

    expect(loaded?.activeCard?.templateId).toBe("storage-fixture");
    expect(loaded?.activeCard?.left.label).toBe("Authorize");
  });
});
