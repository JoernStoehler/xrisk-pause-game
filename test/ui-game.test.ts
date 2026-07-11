import assert from "node:assert/strict";
import test from "node:test";
import { createGame, configureFixture, reduceGame } from "../src/ui/game.ts";

test("cold path skips the hosted-service detail card", () => {
  let state = createGame("ui-cold");
  state = reduceGame(state, { type: "SET_CUSTODY", value: "multiparty" });
  state = reduceGame(state, { type: "SET_FRONTIER_SERVICE", value: "cold" });
  assert.equal(state.inferencePolicy, "cold");
  assert.equal(state.cardId, "resourceCoverage");
});

test("continued service requires a restricted-or-broad choice", () => {
  let state = createGame("ui-service");
  state = reduceGame(state, { type: "SET_CUSTODY", value: "multiparty" });
  state = reduceGame(state, { type: "SET_FRONTIER_SERVICE", value: "continue" });
  assert.equal(state.cardId, "serviceRule");
  state = reduceGame(state, { type: "SET_SERVICE_RULE", value: "restricted" });
  assert.equal(state.inferencePolicy, "restricted");
});

test("cards configure typed fixture inputs rather than mutating engine state", () => {
  let state = createGame("ui-fixture");
  state = reduceGame(state, { type: "SET_CUSTODY", value: "legal_order" });
  state = reduceGame(state, { type: "SET_FRONTIER_SERVICE", value: "cold" });
  state = reduceGame(state, { type: "SET_RESOURCE_COVERAGE", value: "compute_only" });
  const fixture = configureFixture(state);
  assert.equal(fixture.sites.find((site) => site.id === "US_FRONTIER_1")?.operatorHasUnilateralTrainingCredentials, true);
  assert.equal(fixture.coverageRule.countMemoryAsAlternativeTrigger, false);
});

test("full decision flow resolves into an outcome without changing its seed", () => {
  let state = createGame("ui-full-flow");
  state.screen = "card";
  state = reduceGame(state, { type: "SET_CUSTODY", value: "multiparty" });
  state = reduceGame(state, { type: "SET_FRONTIER_SERVICE", value: "continue" });
  state = reduceGame(state, { type: "SET_SERVICE_RULE", value: "restricted" });
  state = reduceGame(state, { type: "SET_RESOURCE_COVERAGE", value: "compute_or_memory" });
  state = reduceGame(state, { type: "RESOLVE" });
  assert.equal(state.screen, "outcome");
  assert.equal(state.seed, "ui-full-flow");
  assert.ok(state.result);
});

test("resource coverage choice changes a memory-heavy run in the same diagnostic world", () => {
  function resolveWith(resourceCoverage: "compute_only" | "compute_or_memory") {
    let state = createGame("coverage-counterfactual-1");
    state.screen = "card";
    state = reduceGame(state, { type: "SET_CUSTODY", value: "legal_order" });
    state = reduceGame(state, { type: "SET_FRONTIER_SERVICE", value: "cold" });
    state = reduceGame(state, { type: "SET_RESOURCE_COVERAGE", value: resourceCoverage });
    const result = reduceGame(state, { type: "RESOLVE" }).result;
    if (!result) throw new Error("Expected the game to resolve");
    return result;
  }

  const computeOnly = resolveWith("compute_only");
  const computeOrMemory = resolveWith("compute_or_memory");
  assert.equal(computeOnly.state.seed, computeOrMemory.state.seed);
  assert.deepEqual(computeOnly.state.latent, computeOrMemory.state.latent);
  assert.equal(computeOnly.state.sites.US_FRONTIER_1?.coveredCluster, false);
  assert.equal(computeOrMemory.state.sites.US_FRONTIER_1?.coveredCluster, true);
  assert.notEqual(
    computeOnly.state.workloads.RUN_1?.result,
    computeOrMemory.state.workloads.RUN_1?.result,
  );
  assert.equal(computeOnly.state.workloads.RUN_1?.result, "completed");
  assert.equal(computeOrMemory.state.workloads.RUN_1?.result, "interrupted");
});

test("review orders returns to the first decision in the same hidden world", () => {
  let state = createGame("ui-review");
  state.screen = "card";
  state = reduceGame(state, { type: "SET_CUSTODY", value: "legal_order" });
  state = reduceGame(state, { type: "SET_FRONTIER_SERVICE", value: "cold" });
  state = reduceGame(state, { type: "SET_RESOURCE_COVERAGE", value: "compute_only" });
  state = reduceGame(state, { type: "REVIEW_ORDERS" });
  assert.equal(state.cardId, "custody");
  assert.equal(state.seed, "ui-review");
  assert.equal(state.custody, null);
});
