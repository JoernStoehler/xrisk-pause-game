import { describe, expect, it } from "vitest";
import type { DeathRunExportState } from "./playtestExport";
import { buildDeathRunExport, generateDeathRunExport } from "./playtestExport";

const GENERATED_AT = new Date("2026-05-11T12:00:00.000Z");

function makeState(overrides: Partial<DeathRunExportState> = {}): DeathRunExportState {
  return {
    phase: "dead",
    resources: { pol: 0, int: 42, saf: 61, alg: 77 },
    hidden: { pressure: 2 },
    turn: 2,
    activeCard: null,
    rngState: 123456,
    death: {
      resource: "pol",
      extreme: "depleted",
      message: "Political authority collapsed.",
    },
    history: [
      { turn: 0, cardId: "opening-brief", choice: "left" },
      { turn: 1, cardId: "treaty-threat", choice: "right" },
    ],
    ...overrides,
  };
}

describe("playtest export", () => {
  it("builds a compact dead-run capture from mechanically available state", () => {
    const run = buildDeathRunExport(makeState(), GENERATED_AT);

    expect(run).toEqual({
      schema: "global-pause-playtest-death-run-v1",
      generatedAt: "2026-05-11T12:00:00.000Z",
      phase: "dead",
      turnCount: 2,
      resources: { pol: 0, int: 42, saf: 61, alg: 77 },
      hidden: { pressure: 2 },
      death: {
        resource: "pol",
        extreme: "depleted",
        message: "Political authority collapsed.",
      },
      history: [
        { turn: 0, cardId: "opening-brief", choice: "left" },
        { turn: 1, cardId: "treaty-threat", choice: "right" },
      ],
      rngState: 123456,
      limitations: [
        "initialSeed is not currently tracked; current rngState is exported instead.",
      ],
    });
  });

  it("copies hidden state for content and debug review", () => {
    const state = makeState({ hidden: { pressure: 2, leak_risk: -1 } });
    const run = buildDeathRunExport(state, GENERATED_AT);

    state.hidden.pressure = 99;

    expect(run.hidden).toEqual({ pressure: 2, leak_risk: -1 });
  });

  it("serializes as readable JSON for clipboard copying", () => {
    const text = generateDeathRunExport(makeState(), GENERATED_AT);

    expect(text).toContain('\n  "schema": "global-pause-playtest-death-run-v1"');
    expect(JSON.parse(text)).toMatchObject({
      generatedAt: "2026-05-11T12:00:00.000Z",
      phase: "dead",
      turnCount: 2,
    });
  });
});
