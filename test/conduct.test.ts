import assert from "node:assert/strict";
import test from "node:test";
import { evaluateViolationDecision } from "../src/model/conduct.ts";
import { runOpeningSlice } from "../src/model/engine.ts";
import { diagnosticParameters, openingFixture } from "../src/model/fixtures.ts";

test("credible punishment deters an ordinary diagnostic actor", () => {
  const decision = evaluateViolationDecision({
    actorClass: "ordinary",
    perceivedDetection: "credible",
    expectedSanction: "severe",
  });
  assert.equal(decision.outcome, "deterred");
  assert.equal(decision.calibrationRole, "diagnostic_fixture");
});

test("catastrophic gambler proceeds to factual-control check", () => {
  assert.equal(evaluateViolationDecision({
    actorClass: "catastrophic_gambler",
    perceivedDetection: "credible",
    expectedSanction: "severe",
  }).outcome, "proceed");
});

test("deterrence can prevent an attempt without a workload existing", () => {
  const result = runOpeningSlice({
    seed: "ordinary-deterred",
    fixture: openingFixture("cold"),
    parameters: diagnosticParameters,
    attemptedSiteId: "US_FRONTIER_1",
    attemptedActorClass: "ordinary",
  });
  assert.equal(Object.keys(result.state.workloads).length, 0);
  assert.ok(result.trace.some((event) => event.transition === "VIOLATION_ABANDONED"));
});

test("intact multiparty credentials can block a residual gambler", () => {
  let result;
  for (let index = 0; index < 10_000; index += 1) {
    result = runOpeningSlice({
      seed: `custody-block-${index}`,
      fixture: openingFixture("cold"),
      parameters: diagnosticParameters,
      attemptedSiteId: "US_FRONTIER_1",
      attemptedActorClass: "catastrophic_gambler",
    });
    if (result.trace.some((event) => event.transition === "WORKLOAD_BLOCKED")) break;
  }
  assert.equal(result?.state.workloads.RUN_1.result, "blocked");
  assert.ok(result?.trace.some((event) => event.transition === "WORKLOAD_BLOCKED"));
});
