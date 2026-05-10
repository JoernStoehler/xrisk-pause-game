import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { applyChoice, newGame } from "../engine/state";
import { drawNextCard } from "../engine/cards";
import type { Card, GameState } from "../engine/types";
import { loadState, saveState } from "./storage";

const STORAGE_KEY = "global-pause-state";

const fixtureCard = (): Card => ({
  id: "storage-fixture",
  speaker: "Deputy Director",
  text: "Fixture decision.",
  left: {
    label: "Authorize",
    effects: { pol: 5 },
    hiddenEffects: { storage_signal: 1 },
  },
  right: { label: "Defer", effects: { int: -5 } },
  poolWeight: () => 1,
});

const drawFixture = (): GameState => drawNextCard(newGame(42), [fixtureCard()]);

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
    expect(saved.v).toBe(4);
    expect(saved.state?.turn).toBe(0);
    expect(saved.state?.activeCard?.templateId).toBe("storage-fixture");
  });

  it("saveState handles unavailable localStorage", () => {
    vi.stubGlobal("localStorage", undefined);

    expect(() => saveState(drawFixture())).not.toThrow();
  });

  it("loadState discards saved state from the wrong version", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 3, state: drawFixture() }));

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
    const next = applyChoice(loaded!, "left");
    expect(next.resources.pol).toBe(55);
    expect(next.hidden.storage_signal).toBe(1);
  });
});
