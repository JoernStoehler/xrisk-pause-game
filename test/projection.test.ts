import assert from "node:assert/strict";
import { test } from "vitest";
import { runOpeningSlice } from "../src/model/engine.ts";
import { diagnosticParameters, openingFixture } from "../src/model/fixtures.ts";
import { projectDGView, projectRetrospective } from "../src/model/projection.ts";
import { buildDGDossier } from "../src/ui/outcome.ts";

test("DG projection omits latent references and hidden events", () => {
  const result = runOpeningSlice({
    seed: "projection-001",
    fixture: openingFixture("broad"),
    parameters: diagnosticParameters,
    attemptedSiteId: "US_COVERT_1",
  });
  const projection = projectDGView(result);
  assert.ok(projection.every((event) => !("latentReferences" in event)));
  assert.ok(projection.every((event) => !("draw" in event)));
  assert.equal(projection.some((event) => event.transition === "INTERNAL_RSI_BOUNDARY"), false);
});

test("player-visible omniscient explanations are not DG knowledge without delivered information", () => {
  const result = runOpeningSlice({
    seed: "artifact-false-2",
    fixture: openingFixture("broad"),
    parameters: diagnosticParameters,
    inferenceEpisode: "disguised_capability",
  });
  const completionEvent = result.trace.find((event) => event.transition === "INFERENCE_COMPLETION");
  if (!completionEvent) throw new Error("Expected inference completion event");
  assert.equal(completionEvent.playerVisible, true);
  assert.equal(result.trace.some((event) => event.transition === "ARTIFACT_CREATED"), false);
  assert.equal(Object.keys(result.state.artifacts).length, 0);
  assert.equal(projectDGView(result).some((event) => event.eventId === completionEvent.eventId), false);
  assert.equal(buildDGDossier(result).artifactStatus, "NONE KNOWN");
});

test("DG explanations repeat delivered propositions rather than hidden trace explanations", () => {
  let result;
  for (let index = 0; index < 20_000; index += 1) {
    result = runOpeningSlice({
      seed: `projection-delivery-${index}`,
      fixture: openingFixture("restricted"),
      parameters: diagnosticParameters,
      attemptedSiteId: "US_FRONTIER_1",
      attemptedActorClass: "catastrophic_gambler",
    });
    if (projectDGView(result).some((event) => event.transition === "ANALYSIS")) break;
  }
  const analysis = projectDGView(result!).find((event) => event.transition === "ANALYSIS");
  if (!analysis) throw new Error("Expected a delivered analysis event");
  assert.equal(analysis.explanation, analysis.informationOutputs[0]?.proposition);
  assert.doesNotMatch(analysis.explanation, /true sensor report|hidden|counterfactual/i);
});

test("DG dossier outcome is invariant to hidden workload truth", () => {
  const result = runOpeningSlice({
    seed: "projection-hidden-state",
    fixture: openingFixture("cold"),
    parameters: diagnosticParameters,
  });
  const altered = structuredClone(result);
  altered.state.workloads.RUN_1 = {
    id: "RUN_1",
    siteId: "US_COVERT_1",
    kind: "training",
    purpose: "covert_successor",
    coveredByTrainingRule: true,
    declaredToMonitors: false,
    startHour: 1,
    completionHour: 2,
    irreversibleBoundaryCrossed: true,
    result: "completed",
  };
  altered.state.terminal = "unsafe_superintelligence_extinction";
  assert.deepEqual(buildDGDossier(altered), buildDGDossier(result));
});

test("retrospective trace labels the sampled world", () => {
  const result = runOpeningSlice({
    seed: "projection-002",
    fixture: openingFixture("cold"),
    parameters: diagnosticParameters,
  });
  assert.match(projectRetrospective(result).warning, /not a unique historical counterfactual/);
});

test("declared policy and implemented permissions can diverge", () => {
  const result = runOpeningSlice({
    seed: "implementation-blocked",
    fixture: openingFixture("cold"),
    parameters: diagnosticParameters,
    policyImplementationOutcome: "blocked",
    inferenceEpisode: "disguised_capability",
  });
  assert.equal(result.state.treaty.declaredInferencePolicy, "cold");
  assert.equal(result.state.treaty.implementedInferencePolicy, "broad");
  assert.equal(result.state.inferenceSessions.RESEARCH_1.status, "completed");
});
