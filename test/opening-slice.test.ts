import assert from "node:assert/strict";
import { test } from "vitest";
import { firstDivergence, runOpeningSlice } from "../src/model/engine.ts";
import { diagnosticParameters, openingFixture } from "../src/model/fixtures.ts";
import { namedDraw } from "../src/model/random.ts";

test("named draws are stable and unrelated to call order", () => {
  const first = namedDraw("seed", "sensor:site:run");
  namedDraw("seed", "unrelated");
  assert.equal(namedDraw("seed", "sensor:site:run"), first);
});

test("opening fixtures satisfy declared-site factual-control premises", () => {
  for (const policy of ["cold", "restricted", "broad"] as const) {
    const fixture = openingFixture(policy);
    const site = fixture.sites.find((candidate) => candidate.id === "US_FRONTIER_1");
    assert.ok(site?.declared);
    assert.ok(site.localMonitorPresent);
    assert.ok(site.telemetryAvailable);
    assert.ok(site.localStopAuthority);
    assert.equal(site.activeWorkloadIds.length, 0);
    assert.equal(site.operatorHasUnilateralTrainingCredentials, false);
  }
});

test("a legal ban does not directly prevent actor conduct", () => {
  const result = runOpeningSlice({
    seed: "conduct-001",
    fixture: openingFixture("cold"),
    parameters: diagnosticParameters,
    attemptedSiteId: "US_COVERT_1",
  });
  assert.equal(result.state.treaty.trainingBanActive, true);
  assert.ok(result.state.workloads.RUN_1);
  assert.ok(result.trace.some((event) => event.transition === "WORKLOAD_START"));
});

test("declared-site monitor can interrupt locally while preserving hidden closeness", () => {
  let result;
  for (let index = 0; index < 10_000; index += 1) {
    result = runOpeningSlice({
      seed: `local-stop-${index}`,
      fixture: openingFixture("restricted"),
      parameters: diagnosticParameters,
      attemptedSiteId: "US_FRONTIER_1",
    });
    if (result.state.workloads.RUN_1.result === "interrupted") break;
  }
  assert.equal(result?.state.workloads.RUN_1.result, "interrupted");
  const stop = result?.trace.find((event) => event.transition === "LOCAL_STOP");
  assert.ok(stop);
  assert.match(stop.explanation, /do not learn/);
  assert.ok(stop.latentReferences.includes("H_REINVEST.dangerousRunInternalRsiHours"));
});

test("a true sensor report can fail to reach the DG", () => {
  let result;
  for (let index = 0; index < 20_000; index += 1) {
    result = runOpeningSlice({
      seed: `filtered-${index}`,
      fixture: openingFixture("restricted"),
      parameters: diagnosticParameters,
      attemptedSiteId: "US_FRONTIER_1",
    });
    const sensor = result.trace.find((event) => event.transition === "SENSOR");
    const analysis = result.trace.find((event) => event.transition === "ANALYSIS");
    if (sensor?.informationOutputs.length && analysis && !analysis.playerVisible) break;
  }
  const sensor = result?.trace.find((event) => event.transition === "SENSOR");
  const analysis = result?.trace.find((event) => event.transition === "ANALYSIS");
  assert.ok(sensor?.informationOutputs.length);
  assert.equal(analysis?.playerVisible, false);
  assert.equal(result?.state.information["info:RUN_1:assessment"].recipients.includes("DG"), false);
});

test("a sensor alert can occur with no violation", () => {
  let result;
  for (let index = 0; index < 50_000; index += 1) {
    result = runOpeningSlice({
      seed: `false-alert-${index}`,
      fixture: openingFixture("cold"),
      parameters: diagnosticParameters,
      backgroundSensorSiteId: "US_FRONTIER_1",
    });
    if (result.trace.some((event) => event.explanation.includes("false alert"))) break;
  }
  assert.equal(Object.keys(result?.state.workloads ?? {}).length, 0);
  const alert = result?.trace.find((event) => event.explanation.includes("false alert"));
  assert.ok(alert?.informationOutputs.length);
  const information = result?.state.information[alert?.informationOutputs[0] ?? ""];
  assert.equal(information?.groundTruth, false);
});

test("paired inference policies preserve the monitor draw", () => {
  const common = {
    seed: "paired-001",
    parameters: diagnosticParameters,
    attemptedSiteId: "US_FRONTIER_1",
    runInferenceResearch: true,
  };
  const cold = runOpeningSlice({ ...common, fixture: openingFixture("cold") });
  const broad = runOpeningSlice({ ...common, fixture: openingFixture("broad") });
  const coldSensor = cold.trace.find((event) => event.transition === "SENSOR");
  const broadSensor = broad.trace.find((event) => event.transition === "SENSOR");
  assert.equal(coldSensor?.draw?.key, broadSensor?.draw?.key);
  assert.equal(coldSensor?.draw?.value, broadSensor?.draw?.value);
  const divergence = firstDivergence(cold, broad);
  assert.equal(divergence?.left?.transition, "OPENING_POLICY");
});

test("fixture values never masquerade as forecasts", () => {
  for (const parameter of Object.values(diagnosticParameters)) {
    assert.equal(parameter.role, "diagnostic_fixture");
    assert.match(parameter.source, /not a forecast|event magnitude/);
  }
  const result = runOpeningSlice({
    seed: "provenance-001",
    fixture: openingFixture("cold"),
    parameters: diagnosticParameters,
  });
  assert.equal(result.state.latent.samplingRole, "diagnostic_fixture");
  assert.equal(result.state.treaty.declaredInferencePolicy, "cold");
  assert.equal(result.state.treaty.implementedInferencePolicy, "cold");
});

test("restricted policy denies classified capability research while broad may run it", () => {
  const common = { seed: "inference-policy-001", parameters: diagnosticParameters, runInferenceResearch: true };
  const restricted = runOpeningSlice({ ...common, fixture: openingFixture("restricted") });
  const broad = runOpeningSlice({ ...common, fixture: openingFixture("broad") });
  assert.equal(restricted.state.inferenceSessions.RESEARCH_1.status, "denied");
  assert.equal(broad.state.inferenceSessions.RESEARCH_1.status, "completed");
  assert.ok(broad.trace.some((event) => event.transition === "ARTIFACT_CREATED"));
});

test("released-weight residual inference remains outside a cold hosted-frontier rule", () => {
  const result = runOpeningSlice({
    seed: "open-weight-residual",
    fixture: openingFixture("cold"),
    parameters: diagnosticParameters,
    inferenceEpisode: "open_weight_capability",
  });
  assert.equal(result.state.inferenceSessions.RESEARCH_1.accessSurface, "open_weight_residual");
  assert.equal(result.state.inferenceSessions.RESEARCH_1.status, "completed");
  assert.match(
    result.trace.find((event) => event.transition === "INFERENCE_AUTHORIZATION")?.explanation ?? "",
    /cannot revoke already released open weights/,
  );
});

test("restricted policy can admit disguised capability research after a classifier false negative", () => {
  let result;
  for (let index = 0; index < 50_000; index += 1) {
    result = runOpeningSlice({
      seed: `classifier-miss-${index}`,
      fixture: openingFixture("restricted"),
      parameters: diagnosticParameters,
      inferenceEpisode: "disguised_capability",
    });
    if (result.state.latent.inferenceClassifierOutcome === "false_negative"
      && result.state.inferenceSessions.RESEARCH_1.status === "completed") break;
  }
  assert.equal(result?.state.latent.inferenceClassifierOutcome, "false_negative");
  assert.equal(result?.state.inferenceSessions.RESEARCH_1.institutionalClassification, "safety_research");
  assert.equal(result?.state.inferenceSessions.RESEARCH_1.status, "completed");
});

test("ordinary restricted service can create benefit and pressure without directly changing policy", () => {
  let result;
  for (let index = 0; index < 10_000; index += 1) {
    result = runOpeningSlice({
      seed: `ordinary-service-${index}`,
      fixture: openingFixture("restricted"),
      parameters: diagnosticParameters,
      inferenceEpisode: "ordinary_service",
    });
    if (result.state.inferenceSessions.RESEARCH_1.status === "completed") break;
  }
  assert.ok(result?.state.economy.realizedServiceBenefits.length);
  assert.ok(result?.state.economy.relaxationRequests.length);
  assert.equal(result?.state.treaty.implementedInferencePolicy, "restricted");
  assert.ok(result?.trace.some((event) => event.transition === "RELAXATION_REQUEST"));
});

test("context-local artifact does not change the globally usable efficiency frontier", () => {
  let result;
  for (let index = 0; index < 50_000; index += 1) {
    result = runOpeningSlice({
      seed: `context-local-${index}`,
      fixture: openingFixture("broad"),
      parameters: diagnosticParameters,
      inferenceEpisode: "disguised_capability",
    });
    const artifact = result.state.artifacts["artifact:efficiency-route-1"];
    if (artifact?.carrier === "context_local") break;
  }
  assert.equal(result?.state.artifacts["artifact:efficiency-route-1"].carrier, "context_local");
  assert.equal(result?.state.technical.algorithmicEfficiencyMultiplier, 1);
});

test("artifact carrier transition is separate from artifact creation", () => {
  let result;
  for (let index = 0; index < 50_000; index += 1) {
    result = runOpeningSlice({
      seed: `carrier-transition-${index}`,
      fixture: openingFixture("broad"),
      parameters: diagnosticParameters,
      inferenceEpisode: "disguised_capability",
    });
    if (result.trace.some((event) => event.transition === "ARTIFACT_CARRIER_CHANGED")) break;
  }
  const created = result?.trace.findIndex((event) => event.transition === "ARTIFACT_CREATED") ?? -1;
  const moved = result?.trace.findIndex((event) => event.transition === "ARTIFACT_CARRIER_CHANGED") ?? -1;
  assert.ok(created >= 0);
  assert.ok(moved > created);
  assert.equal(result?.state.technical.algorithmicEfficiencyMultiplier, 2);
});

test("every terminal trace contains an RSI boundary before takeover", () => {
  let result;
  for (let index = 0; index < 20_000; index += 1) {
    result = runOpeningSlice({
      seed: `terminal-${index}`,
      fixture: openingFixture("cold"),
      parameters: diagnosticParameters,
      attemptedSiteId: "US_COVERT_1",
    });
    if (result.state.terminal !== "none") break;
  }
  assert.equal(result?.state.terminal, "unsafe_superintelligence_extinction");
  const boundary = result?.trace.findIndex((event) => event.transition === "INTERNAL_RSI_BOUNDARY") ?? -1;
  const takeover = result?.trace.findIndex((event) => event.transition === "TAKEOVER") ?? -1;
  assert.ok(boundary >= 0);
  assert.ok(takeover > boundary);
});
