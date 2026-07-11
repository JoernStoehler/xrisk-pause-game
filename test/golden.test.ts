import assert from "node:assert/strict";
import test from "node:test";
import { buildGoldenTraces } from "../src/model/golden.ts";

test("golden traces preserve their intended causal lessons", () => {
  const traces = buildGoldenTraces();
  assert.ok(traces.ordinary_actor_deterred.retrospective.events
    .some((event) => event.transition === "VIOLATION_ABANDONED"));
  assert.ok(traces.restricted_service_and_pressure.retrospective.events
    .some((event) => event.transition === "RELAXATION_REQUEST"));
  assert.ok(traces.misclassified_research_leaks_artifact.retrospective.events
    .some((event) => event.transition === "ARTIFACT_CARRIER_CHANGED"
      && event.explanation.includes("leaked")));
  const narrowEvents = traces.narrowly_interrupted_run.retrospective.events;
  assert.ok(narrowEvents.some((event) => event.transition === "LOCAL_STOP"));
  assert.equal(narrowEvents.some((event) => event.transition === "TAKEOVER"), false);
  assert.equal(traces.narrowly_interrupted_run.dgView
    .some((event) => /\d+\.?\d*\s*(hour|minute|second)/i.test(event.explanation)), false);
});
