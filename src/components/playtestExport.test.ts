import { describe, expect, it } from "vitest";
import type { GameState } from "../engine/types";
import { buildPlaytestExport, generatePlaytestExport } from "./playtestExport";

const GENERATED_AT = new Date("2026-05-11T12:00:00.000Z");

function makeState(overrides: Partial<GameState> = {}): GameState {
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
    const run = buildPlaytestExport(makeState(), GENERATED_AT);

    expect(run).toEqual({
      schema: "global-pause-playtest-run-v1",
      generatedAt: "2026-05-11T12:00:00.000Z",
      phase: "dead",
      outcome: "dead",
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
      activeCardId: null,
      rngState: 123456,
      limitations: [
        "initialSeed is not currently tracked; current rngState is exported instead.",
      ],
    });
  });

  it("copies hidden state for content and debug review", () => {
    const state = makeState({ hidden: { pressure: 2, leak_risk: -1 } });
    const run = buildPlaytestExport(state, GENERATED_AT);

    state.hidden.pressure = 99;

    expect(run.hidden).toEqual({ pressure: 2, leak_risk: -1 });
  });

  it("reports live runs without exposing resolved card text or choice functions", () => {
    const run = buildPlaytestExport(
      makeState({
        phase: "playing",
        death: null,
        activeCard: {
          templateId: "live-card",
          speaker: "Deputy Director",
          text: "A live prompt.",
          left: {
            label: "Authorize",
            apply: (state) => state,
            previews: [],
            disabled: false,
          },
          right: {
            label: "Delay",
            apply: (state) => state,
            previews: [],
            disabled: false,
          },
          down: {
            label: "",
            apply: (state) => state,
            previews: [],
            disabled: true,
          },
        },
      }),
      GENERATED_AT,
    );

    expect(run.outcome).toBe("in-progress");
    expect(run.death).toBeNull();
    expect(run.activeCardId).toBe("live-card");
    expect(JSON.stringify(run)).not.toContain("A live prompt.");
  });

  it("serializes as readable JSON for clipboard copying", () => {
    const text = generatePlaytestExport(makeState(), GENERATED_AT);

    expect(text).toContain('\n  "schema": "global-pause-playtest-run-v1"');
    expect(JSON.parse(text)).toMatchObject({
      generatedAt: "2026-05-11T12:00:00.000Z",
      turnCount: 2,
    });
  });
});
