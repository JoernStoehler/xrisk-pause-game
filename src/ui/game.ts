import { runOpeningSlice } from "../model/engine.ts";
import { diagnosticParameters, openingFixture } from "../model/fixtures.ts";
import type { InferencePolicy, OpeningFixture, SimulationResult } from "../model/types.ts";
import type { CardId, GameAction } from "./content.ts";

export interface GameState {
  screen: "intro" | "card" | "outcome";
  cardId: CardId;
  seed: string;
  custody: "legal_order" | "multiparty" | null;
  frontierService: "cold" | "continue" | null;
  inferencePolicy: InferencePolicy | null;
  resourceCoverage: "compute_only" | "compute_or_memory" | null;
  result?: SimulationResult;
}

export function createGame(seed: string): GameState {
  return { screen: "intro", cardId: "custody", seed, custody: null, frontierService: null, inferencePolicy: null, resourceCoverage: null };
}

export function configureFixture(state: GameState): OpeningFixture {
  const fixture = structuredClone(openingFixture(state.inferencePolicy ?? "cold"));
  const unilateral = state.custody === "legal_order";
  for (const site of fixture.sites.filter((candidate) => candidate.declared)) {
    site.operatorHasUnilateralTrainingCredentials = unilateral;
  }
  fixture.coverageRule.countMemoryAsAlternativeTrigger = state.resourceCoverage !== "compute_only";
  return fixture;
}

export function resolveGameWorld(state: GameState): SimulationResult {
  return runOpeningSlice({
    seed: state.seed,
    fixture: configureFixture(state),
    parameters: diagnosticParameters,
    attemptedSiteId: "US_FRONTIER_1",
    attemptedActorClass: "catastrophic_gambler",
    inferenceEpisode: "disguised_capability",
    backgroundSensorSiteId: "PRC_FRONTIER_1",
  });
}

export function reduceGame(previous: GameState, action: GameAction): GameState {
  const state: GameState = { ...previous };
  switch (action.type) {
    case "SET_CUSTODY":
      state.custody = action.value; state.cardId = "frontierService"; break;
    case "SET_FRONTIER_SERVICE":
      state.frontierService = action.value;
      if (action.value === "cold") { state.inferencePolicy = "cold"; state.cardId = "resourceCoverage"; }
      else state.cardId = "serviceRule";
      break;
    case "SET_SERVICE_RULE":
      state.inferencePolicy = action.value; state.cardId = "resourceCoverage"; break;
    case "SET_RESOURCE_COVERAGE":
      state.resourceCoverage = action.value; state.cardId = "resolve"; break;
    case "REVIEW_ORDERS":
      return { ...createGame(state.seed), screen: "card" };
    case "RESOLVE":
      state.result = resolveGameWorld(state); state.screen = "outcome"; break;
  }
  return state;
}
