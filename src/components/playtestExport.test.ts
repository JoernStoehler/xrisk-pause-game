import { describe, expect, it } from "vitest";
import type { DeathRunExportState } from "./playtestExport";
import { buildDeathRunExport, generateDeathRunExport } from "./playtestExport";
import { initialState } from "../engine/state";

const GENERATED_AT = new Date("2026-05-11T12:00:00.000Z");

function makeState(overrides: Partial<DeathRunExportState> = {}): DeathRunExportState {
  const world = initialState();
  world.decisionCount = 2;
  world.elapsedMonths = 4.5;
  world.resources = {
    political: 0,
    intelligence: 42,
    safety: 61,
    algorithmic: 77,
  };
  world.enforcement.visibility = 3;

  return {
    phase: "dead",
    world,
    activeCard: null,
    rngState: 123456,
    death: {
      resource: "political",
      extreme: "depleted",
      message: "Political authority collapsed.",
    },
    history: [
      { type: "gameStarted", seed: 42 },
      {
        type: "cardDrawn",
        elapsedMonths: 1.2,
        deltaMonths: 1.2,
        cardId: "daily-briefing",
        rngStateBefore: 42,
        rngStateAfter: 123,
        totalRate: 1,
      },
      { type: "choiceCommitted", elapsedMonths: 1.2, decisionIndex: 0, cardId: "daily-briefing", choice: "left" },
    ],
    ...overrides,
  };
}

describe("playtest export", () => {
  it("builds a compact dead-run capture from mechanically available state", () => {
    const run = buildDeathRunExport(makeState(), GENERATED_AT);

    expect(run).toEqual({
      schema: "global-pause-playtest-death-run-v2",
      generatedAt: "2026-05-11T12:00:00.000Z",
      phase: "dead",
      decisionCount: 2,
      resources: { political: 0, intelligence: 42, safety: 61, algorithmic: 77 },
      world: expect.objectContaining({
        decisionCount: 2,
        elapsedMonths: 4.5,
        resources: { political: 0, intelligence: 42, safety: 61, algorithmic: 77 },
        enforcement: expect.objectContaining({ visibility: 3 }),
      }),
      death: {
        resource: "political",
        extreme: "depleted",
        message: "Political authority collapsed.",
      },
      history: [
        { type: "gameStarted", seed: 42 },
        {
          type: "cardDrawn",
          elapsedMonths: 1.2,
          deltaMonths: 1.2,
          cardId: "daily-briefing",
          rngStateBefore: 42,
          rngStateAfter: 123,
          totalRate: 1,
        },
        { type: "choiceCommitted", elapsedMonths: 1.2, decisionIndex: 0, cardId: "daily-briefing", choice: "left" },
      ],
      rngState: 123456,
      limitations: [
        "Card definitions are code and are not embedded in this export.",
      ],
    });
  });

  it("copies world state for content and debug review", () => {
    const state = makeState();
    const run = buildDeathRunExport(state, GENERATED_AT);

    state.world.enforcement.visibility = 99;

    expect(run.world.enforcement.visibility).toBe(3);
  });

  it("serializes as readable JSON for clipboard copying", () => {
    const text = generateDeathRunExport(makeState(), GENERATED_AT);

    expect(text).toContain('\n  "schema": "global-pause-playtest-death-run-v2"');
    expect(JSON.parse(text)).toMatchObject({
      schema: "global-pause-playtest-death-run-v2",
      generatedAt: "2026-05-11T12:00:00.000Z",
      phase: "dead",
      decisionCount: 2,
    });
  });
});
