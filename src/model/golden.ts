import { runOpeningSlice } from "./engine.ts";
import { diagnosticParameters, openingFixture } from "./fixtures.ts";
import { projectDGView, projectRetrospective } from "./projection.ts";
import type { RunOptions } from "./types.ts";

const goldenOptions: Record<string, RunOptions> = {
  ordinary_actor_deterred: {
    seed: "golden-deterred-v1",
    fixture: openingFixture("cold"),
    parameters: diagnosticParameters,
    attemptedSiteId: "US_FRONTIER_1",
    attemptedActorClass: "ordinary",
  },
  restricted_service_and_pressure: {
    seed: "g-service-1",
    fixture: openingFixture("restricted"),
    parameters: diagnosticParameters,
    inferenceEpisode: "ordinary_service",
  },
  misclassified_research_leaks_artifact: {
    seed: "g-leak-12",
    fixture: openingFixture("restricted"),
    parameters: diagnosticParameters,
    inferenceEpisode: "disguised_capability",
  },
  narrowly_interrupted_run: {
    seed: "g-narrow-916",
    fixture: openingFixture("restricted"),
    parameters: diagnosticParameters,
    attemptedSiteId: "US_FRONTIER_1",
    attemptedActorClass: "catastrophic_gambler",
  },
};

export function buildGoldenTraces() {
  return Object.fromEntries(Object.entries(goldenOptions).map(([id, options]) => {
    const result = runOpeningSlice(options);
    return [id, {
      diagnosticOnly: true,
      options: { seed: options.seed, scenario: options.fixture.id },
      finalState: {
        terminal: result.state.terminal,
        technical: result.state.technical,
        economy: result.state.economy,
      },
      dgView: projectDGView(result),
      retrospective: projectRetrospective(result),
    }];
  }));
}
