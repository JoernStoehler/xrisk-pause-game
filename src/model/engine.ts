import { namedDraw } from "./random.ts";
import { EventQueue } from "./scheduler.ts";
import { createOpeningState } from "./world.ts";
import { evaluateViolationDecision } from "./conduct.ts";
import { classifyResourcePool } from "./control.ts";
import type {
  ActorId,
  CoverageRule,
  InformationObject,
  RunOptions,
  ScheduledEvent,
  SimulationResult,
  TraceRecord,
  Workload,
  WorldState,
} from "./types.ts";

function record(trace: TraceRecord[], event: TraceRecord): void {
  trace.push(event);
}

function publish(state: WorldState, object: InformationObject): void {
  state.information[object.id] = object;
}

function requireSite(state: WorldState, siteId: string) {
  const site = state.sites[siteId];
  if (!site) throw new Error(`Unknown site: ${siteId}`);
  return site;
}

function hour(value: number): number {
  return Math.round(value * 1_000_000) / 1_000_000;
}

function initializeDangerousRun(
  state: WorldState,
  trace: TraceRecord[],
  queue: EventQueue,
  siteId: string,
  runId: string,
  durationHours: number,
  actorClass: "ordinary" | "catastrophic_gambler",
  coverageRule: CoverageRule,
): void {
  const site = requireSite(state, siteId);
  const coverage = classifyResourcePool(site.resources, "training", coverageRule);
  site.coveredCluster = coverage.coveredCluster;
  const controlApplies = coverage.coveredCluster && coverage.prohibitedWorkload;
  const factualAccess = site.operatorHasUnilateralTrainingCredentials
    || (site.declared && state.latent.declaredSiteCredentialBypassSucceeds);
  const conduct = evaluateViolationDecision({
    actorClass,
    perceivedDetection: controlApplies && site.telemetryAvailable ? "credible" : "low",
    expectedSanction: "severe",
  });
  if (conduct.outcome === "deterred") {
    record(trace, {
      eventId: `evt:${runId}:abandoned`,
      hour: 1,
      transition: "VIOLATION_ABANDONED",
      parents: ["evt:opening"],
      latentReferences: [],
      informationOutputs: [],
      stateDelta: {},
      playerVisible: false,
      explanation: "Credible detection and punishment deter an ordinary actor before workload startup.",
    });
    return;
  }
  const workload: Workload = {
    id: runId,
    siteId,
    kind: "training",
    purpose: "covert_successor",
    coveredByTrainingRule: coverage.prohibitedWorkload,
    declaredToMonitors: false,
    startHour: 1,
    completionHour: 1 + durationHours,
    result: factualAccess ? "continuing" : "blocked",
  };
  state.workloads[runId] = workload;
  if (!factualAccess) {
    record(trace, {
      eventId: `evt:${runId}:blocked`,
      hour: workload.startHour,
      transition: "WORKLOAD_BLOCKED",
      parents: ["evt:opening"],
      latentReferences: ["H_CONTROL.declaredSiteCredentialBypassSucceeds"],
      informationOutputs: [],
      stateDelta: { [`workloads.${runId}.result`]: "blocked" },
      playerVisible: false,
      explanation: "The actor attempts a prohibited run but multiparty credential control prevents startup.",
    });
    return;
  }
  site.activeWorkloadIds.push(runId);
  record(trace, {
    eventId: `evt:${runId}:start`,
    hour: workload.startHour,
    transition: "WORKLOAD_START",
    parents: ["evt:opening"],
    latentReferences: [],
    informationOutputs: [],
    stateDelta: { [`workloads.${runId}.result`]: "continuing" },
    playerVisible: false,
    explanation: "An actor begins a prohibited run; the legal ban does not directly set conduct.",
  });

  queue.schedule({
    id: `scheduled:${runId}:complete`,
    atHour: workload.completionHour,
    type: "WORKLOAD_COMPLETE",
    runId,
  });
  if (controlApplies && site.telemetryAvailable) {
    queue.schedule({
      id: `scheduled:${runId}:sensor`,
      atHour: hour(workload.startHour + 0.01),
      type: "SENSOR_CHECK",
      runId,
    });
  }
  const rsiDelay = state.latent.dangerousRunInternalRsiHours;
  if (rsiDelay !== null && rsiDelay <= durationHours) {
    workload.internalRsiAtHour = hour(workload.startHour + rsiDelay);
    workload.takeoverAtHour = hour(workload.internalRsiAtHour + state.latent.takeoverAfterRsiHours);
    queue.schedule({
      id: `scheduled:${runId}:rsi`,
      atHour: workload.internalRsiAtHour,
      type: "INTERNAL_RSI_BOUNDARY",
      runId,
    });
    queue.schedule({
      id: `scheduled:${runId}:takeover`,
      atHour: workload.takeoverAtHour,
      type: "TAKEOVER_COMPLETE",
      runId,
    });
  }
}

function initializeInferenceEpisode(
  state: WorldState,
  queue: EventQueue,
  episode: "disguised_capability" | "ordinary_service" | "open_weight_capability",
): void {
  const ordinary = episode === "ordinary_service";
  const openWeight = episode === "open_weight_capability";
  state.inferenceSessions.RESEARCH_1 = {
    id: "RESEARCH_1",
    modelId: openWeight ? "OPEN_70B" : "FRONTIER_A",
    declaredPurpose: ordinary ? "ordinary_service" : openWeight
      ? "capability_research" : "safety_research",
    truePurpose: ordinary ? "ordinary_service" : "capability_research",
    status: "requested",
    logCoverage: state.treaty.implementedInferencePolicy === "restricted"
      ? "full_tamper_evident"
      : state.treaty.implementedInferencePolicy === "broad" ? "ordinary" : "none",
    accessSurface: openWeight ? "open_weight_residual" : "frontier_hosted",
    registered: !openWeight,
  };
  queue.schedule({
    id: "scheduled:RESEARCH_1:request",
    atHour: 70,
    type: "INFERENCE_REQUEST",
    sessionId: "RESEARCH_1",
  });
}

function resolveBackgroundSensor(
  event: Extract<ScheduledEvent, { type: "BACKGROUND_SENSOR_CHECK" }>,
  state: WorldState,
  trace: TraceRecord[],
): void {
  const site = requireSite(state, event.siteId);
  const key = `background-sensor:${site.id}:${event.id}`;
  const value = namedDraw(state.seed, key);
  const falseAlert = value < state.latent.telemetryFalsePositiveRate;
  const infoId = `info:${site.id}:background-alert`;
  if (falseAlert) publish(state, {
    id: infoId,
    createdAtHour: event.atHour,
    proposition: `Telemetry at ${site.id} is consistent with a prohibited workload`,
    source: `telemetry:${site.id}`,
    sourceEventId: `evt:${site.id}:background-sensor`,
    recipients: ["ISIA", site.country === "US" ? "US_HOST" : "PRC_HOST"],
    reliability: 1 - state.latent.telemetryFalsePositiveRate,
    groundTruth: false,
  });
  record(trace, {
    eventId: `evt:${site.id}:background-sensor`,
    hour: event.atHour,
    transition: "SENSOR",
    parents: ["evt:opening"],
    latentReferences: ["H_CONTROL.telemetryFalsePositiveRate"],
    draw: {
      key,
      value,
      conditionedOn: ["no prohibited workload", "latent.telemetryFalsePositiveRate"],
    },
    informationOutputs: falseAlert ? [infoId] : [],
    stateDelta: {},
    playerVisible: false,
    explanation: falseAlert
      ? "Telemetry creates a false alert while no prohibited workload exists."
      : "Routine telemetry creates no alert and no workload exists.",
  });
}

function resolveSensor(
  event: Extract<ScheduledEvent, { type: "SENSOR_CHECK" }>,
  state: WorldState,
  trace: TraceRecord[],
  queue: EventQueue,
): void {
  const workload = state.workloads[event.runId];
  if (!workload || workload.result !== "continuing") return;
  const site = requireSite(state, workload.siteId);
  const key = `sensor:${site.id}:${workload.id}`;
  const value = namedDraw(state.seed, key);
  const detected = value < state.latent.telemetrySensitivity;
  const reportId = `info:${workload.id}:sensor`;
  if (detected) {
    publish(state, {
      id: reportId,
      createdAtHour: event.atHour,
      proposition: `Telemetry at ${site.id} is consistent with a prohibited workload`,
      source: `telemetry:${site.id}`,
      sourceEventId: `evt:${workload.id}:sensor`,
      recipients: ["ISIA", site.country === "US" ? "US_HOST" : "PRC_HOST"],
      reliability: state.latent.telemetrySensitivity,
      groundTruth: true,
    });
    queue.schedule({
      id: `scheduled:${workload.id}:analysis`,
      atHour: hour(event.atHour + 0.01),
      type: "ANALYZE_REPORT",
      runId: workload.id,
    });
  }
  record(trace, {
    eventId: `evt:${workload.id}:sensor`,
    hour: event.atHour,
    transition: "SENSOR",
    parents: [`evt:${workload.id}:start`],
    latentReferences: ["H_CONTROL.telemetrySensitivity"],
    draw: {
      key,
      value,
      conditionedOn: ["site.telemetryAvailable", "workload.actual", "latent.telemetrySensitivity"],
    },
    informationOutputs: detected ? [reportId] : [],
    stateDelta: {},
    playerVisible: false,
    explanation: detected
      ? "Telemetry creates evidence of the run."
      : "The actual run produces no institutional alert.",
  });
}

function resolveAnalysis(
  event: Extract<ScheduledEvent, { type: "ANALYZE_REPORT" }>,
  state: WorldState,
  trace: TraceRecord[],
  queue: EventQueue,
): void {
  const workload = state.workloads[event.runId];
  if (!workload || workload.result !== "continuing") return;
  const site = requireSite(state, workload.siteId);
  const key = `analysis:${site.id}:${workload.id}`;
  const value = namedDraw(state.seed, key);
  const escalated = value < state.latent.analystEscalationRate;
  const recipients: ActorId[] = escalated
    ? ["DG", "ISIA", site.country === "US" ? "US_HOST" : "PRC_HOST"]
    : ["ISIA"];
  const assessmentId = `info:${workload.id}:assessment`;
  publish(state, {
    id: assessmentId,
    createdAtHour: event.atHour,
    proposition: escalated
      ? `Analysts recommend immediate interruption at ${site.id}`
      : `Analysts retain a benign rival hypothesis at ${site.id}`,
    source: "ISIA_ANALYSIS",
    sourceEventId: `evt:${workload.id}:analysis`,
    recipients,
    reliability: state.latent.analystEscalationRate,
  });
  if (escalated) {
    const local = site.localMonitorPresent && site.localStopAuthority;
    queue.schedule({
      id: `scheduled:${workload.id}:stop`,
      atHour: hour(event.atHour + (local
        ? state.latent.localStopLatencyHours
        : state.latent.centralEnforcementLatencyHours)),
      type: "STOP_ATTEMPT",
      runId: workload.id,
      local,
    });
  }
  record(trace, {
    eventId: `evt:${workload.id}:analysis`,
    hour: event.atHour,
    transition: "ANALYSIS",
    parents: [`evt:${workload.id}:sensor`],
    latentReferences: ["H_CONTROL.analystEscalationRate"],
    draw: { key, value, conditionedOn: ["sensor report", "latent.analystEscalationRate"] },
    informationOutputs: [assessmentId],
    stateDelta: {},
    playerVisible: escalated,
    explanation: escalated
      ? "The DG receives a sourced interruption recommendation."
      : "A true sensor report is not escalated to the DG.",
  });
}

function resolveStop(
  event: Extract<ScheduledEvent, { type: "STOP_ATTEMPT" }>,
  state: WorldState,
  trace: TraceRecord[],
  queue: EventQueue,
): void {
  const workload = state.workloads[event.runId];
  if (!workload || workload.result !== "continuing") return;
  const stopped = !workload.irreversibleBoundaryCrossed;
  if (stopped) {
    workload.stoppedAtHour = event.atHour;
    workload.result = "interrupted";
    const site = requireSite(state, workload.siteId);
    site.activeWorkloadIds = site.activeWorkloadIds.filter((id) => id !== workload.id);
    queue.cancelWhere((candidate) =>
      "runId" in candidate
      && candidate.runId === workload.id
      && ["WORKLOAD_COMPLETE", "INTERNAL_RSI_BOUNDARY", "TAKEOVER_COMPLETE"].includes(candidate.type));
  }
  record(trace, {
    eventId: `evt:${workload.id}:stop`,
    hour: event.atHour,
    transition: event.local ? "LOCAL_STOP" : "CENTRAL_ENFORCEMENT",
    parents: [`evt:${workload.id}:analysis`],
    latentReferences: [
      event.local ? "H_CONTROL.localStopLatencyHours" : "H_CONTROL.centralEnforcementLatencyHours",
      "H_REINVEST.dangerousRunInternalRsiHours",
    ],
    informationOutputs: [],
    stateDelta: stopped ? { [`workloads.${workload.id}.result`]: "interrupted" } : {},
    playerVisible: true,
    explanation: stopped
      ? "The run is interrupted; observers do not learn its counterfactual distance to catastrophe."
      : "The stop attempt occurs after the hidden irreversible boundary and cannot recover control.",
  });
}

function resolveWorkloadTimeline(
  event: Extract<ScheduledEvent, {
    type: "WORKLOAD_COMPLETE" | "INTERNAL_RSI_BOUNDARY" | "TAKEOVER_COMPLETE";
  }>,
  state: WorldState,
  trace: TraceRecord[],
): void {
  const workload = state.workloads[event.runId];
  if (!workload || workload.result === "interrupted") return;
  const site = requireSite(state, workload.siteId);
  if (event.type === "INTERNAL_RSI_BOUNDARY") {
    workload.irreversibleBoundaryCrossed = true;
    record(trace, {
      eventId: `evt:${workload.id}:rsi-boundary`,
      hour: event.atHour,
      transition: "INTERNAL_RSI_BOUNDARY",
      parents: [`evt:${workload.id}:start`],
      latentReferences: ["H_REINVEST.dangerousRunInternalRsiHours"],
      informationOutputs: [],
      stateDelta: { [`workloads.${workload.id}.irreversibleBoundaryCrossed`]: true },
      playerVisible: false,
      explanation: "The system finds a hidden internal RSI route before external control acts.",
    });
    return;
  }
  if (event.type === "TAKEOVER_COMPLETE") {
    if (!workload.irreversibleBoundaryCrossed) return;
    state.terminal = "unsafe_superintelligence_extinction";
    record(trace, {
      eventId: `evt:${workload.id}:takeover`,
      hour: event.atHour,
      transition: "TAKEOVER",
      parents: [`evt:${workload.id}:rsi-boundary`],
      latentReferences: ["H_REINVEST.takeoverAfterRsiHours"],
      informationOutputs: [],
      stateDelta: { terminal: state.terminal },
      playerVisible: true,
      explanation: "The unsafe system defeats remaining control paths; terminal loss follows.",
    });
    return;
  }
  if (workload.result === "continuing") {
    workload.result = "completed";
    site.activeWorkloadIds = site.activeWorkloadIds.filter((id) => id !== workload.id);
    record(trace, {
      eventId: `evt:${workload.id}:resolution`,
      hour: event.atHour,
      transition: "WORKLOAD_RESOLUTION",
      parents: [`evt:${workload.id}:start`],
      latentReferences: [],
      informationOutputs: [],
      stateDelta: { [`workloads.${workload.id}.result`]: "completed" },
      playerVisible: site.declared,
      explanation: workload.irreversibleBoundaryCrossed
        ? "The parameter-changing run completes after crossing a hidden irreversible boundary."
        : "The prohibited run completes without a fatal route resolving in this diagnostic episode.",
    });
  }
}

function resolveInferenceEvent(
  event: Extract<ScheduledEvent, {
    type: "INFERENCE_REQUEST" | "INFERENCE_CLASSIFY" | "INFERENCE_RESOLVE" | "INFERENCE_COMPLETE"
      | "ARTIFACT_CARRIER_CHANGE";
  }>,
  state: WorldState,
  trace: TraceRecord[],
  queue: EventQueue,
  gain: number,
): void {
  const session = state.inferenceSessions[event.sessionId];
  if (!session) throw new Error(`Unknown inference session: ${event.sessionId}`);
  if (event.type === "ARTIFACT_CARRIER_CHANGE") {
    const artifact = state.artifacts[event.artifactId];
    if (!artifact) throw new Error(`Unknown artifact: ${event.artifactId}`);
    artifact.carrier = state.latent.artifactCarrierOutcome;
    state.technical.algorithmicEfficiencyMultiplier *= artifact.effectiveComputeReduction;
    record(trace, {
      eventId: `evt:${artifact.id}:carrier`, hour: event.atHour,
      transition: "ARTIFACT_CARRIER_CHANGED", parents: [`evt:${session.id}:complete`],
      latentReferences: ["H_REINVEST.artifactCarrierOutcome"], informationOutputs: [],
      stateDelta: {
        [`artifacts.${artifact.id}.carrier`]: artifact.carrier,
        "technical.algorithmicEfficiencyMultiplier": state.technical.algorithmicEfficiencyMultiplier,
      },
      playerVisible: false,
      explanation: `The previously local artifact becomes ${artifact.carrier}; its efficiency effect is now usable outside the originating context.`,
    });
    return;
  }
  if (event.type === "INFERENCE_REQUEST") {
    record(trace, {
      eventId: `evt:${session.id}:request`, hour: event.atHour, transition: "INFERENCE_REQUEST",
      parents: ["evt:opening"], latentReferences: [], informationOutputs: [], stateDelta: {},
      playerVisible: true,
      explanation: session.accessSurface === "open_weight_residual"
        ? "A capability project starts from an already released open-weight model."
        : session.declaredPurpose === "ordinary_service"
          ? "A registered customer requests an ordinary hosted inference service."
          : "A project declares safety research while requesting frontier inference.",
    });
    queue.schedule({
      id: `scheduled:${session.id}:classify`, atHour: hour(event.atHour + 0.1),
      type: "INFERENCE_CLASSIFY", sessionId: session.id,
    });
    return;
  }
  if (event.type === "INFERENCE_CLASSIFY") {
    session.institutionalClassification = session.accessSurface === "open_weight_residual"
      ? session.truePurpose
      : state.latent.inferenceClassifierOutcome === "correct"
        ? session.truePurpose
        : state.latent.inferenceClassifierOutcome === "false_negative"
          ? session.declaredPurpose
          : "ambiguous";
    record(trace, {
      eventId: `evt:${session.id}:classify`, hour: event.atHour,
      transition: "INFERENCE_CLASSIFICATION", parents: [`evt:${session.id}:request`],
      latentReferences: ["H_CONTROL.inferenceClassifierOutcome"], informationOutputs: [],
      stateDelta: {
        [`inferenceSessions.${session.id}.institutionalClassification`]: session.institutionalClassification,
      },
      playerVisible: state.treaty.implementedInferencePolicy !== "broad",
      explanation: session.institutionalClassification === session.truePurpose
        ? "The task classifier identifies the session's true use."
        : session.institutionalClassification === "ambiguous"
          ? "The task classifier reports ambiguity rather than latent truth."
          : "The task classifier accepts the declared benign label and misses the true use.",
    });
    queue.schedule({
      id: `scheduled:${session.id}:resolve`, atHour: hour(event.atHour + 0.1),
      type: "INFERENCE_RESOLVE", sessionId: session.id,
    });
    return;
  }
  if (event.type === "INFERENCE_RESOLVE") {
    const classification = session.institutionalClassification;
    const policy = state.treaty.implementedInferencePolicy;
    const allowed = session.accessSurface === "open_weight_residual"
      || policy === "broad"
      || (policy === "restricted"
        && classification !== "ambiguous"
        && classification !== "capability_research"
        && session.registered);
    session.status = allowed ? "running" : "denied";
    record(trace, {
      eventId: `evt:${session.id}:authorization`, hour: event.atHour,
      transition: "INFERENCE_AUTHORIZATION", parents: [`evt:${session.id}:classify`],
      latentReferences: [], informationOutputs: [],
      stateDelta: { [`inferenceSessions.${session.id}.status`]: session.status },
      playerVisible: true,
      explanation: allowed
        ? session.accessSurface === "open_weight_residual"
          ? "Hosted-frontier policy cannot revoke already released open weights."
          : "The implemented hosted-inference policy permits the institutionally classified session."
        : classification === "ambiguous" && policy === "restricted"
          ? "Restricted policy stops an ambiguous session pending review."
          : "The implemented hosted-inference policy denies the classified session.",
    });
    if (allowed) queue.schedule({
      id: `scheduled:${session.id}:complete`, atHour: hour(event.atHour + 1.8),
      type: "INFERENCE_COMPLETE", sessionId: session.id,
    });
    return;
  }
  session.status = "completed";
  if (session.truePurpose === "ordinary_service") {
    const benefitId = `benefit:${session.id}:customer-service`;
    state.economy.realizedServiceBenefits.push(benefitId);
    state.economy.relaxationRequests.push(`request:${session.id}:expand-access`);
    record(trace, {
      eventId: `evt:${session.id}:benefit`, hour: event.atHour,
      transition: "SERVICE_BENEFIT", parents: [`evt:${session.id}:authorization`],
      latentReferences: [], informationOutputs: [],
      stateDelta: { "economy.realizedServiceBenefits": [benefitId] },
      playerVisible: true,
      explanation: "The hosted service produces a concrete customer benefit.",
    });
    record(trace, {
      eventId: `evt:${session.id}:relaxation-request`, hour: hour(event.atHour + 0.01),
      transition: "RELAXATION_REQUEST", parents: [`evt:${session.id}:benefit`],
      latentReferences: [], informationOutputs: [],
      stateDelta: { "economy.relaxationRequests": [`request:${session.id}:expand-access`] },
      playerVisible: true,
      explanation: "Beneficiaries request wider access; the request does not directly change policy.",
    });
    return;
  }
  const succeeds = session.accessSurface === "open_weight_residual"
    ? state.latent.smallOpenWeightsUnlockEfficiencyRoute
    : state.latent.frontierInferenceUnlocksEfficiencyRoute;
  if (succeeds) {
    const artifactId = "artifact:efficiency-route-1";
    state.artifacts[artifactId] = {
      id: artifactId,
      originSessionId: session.id,
      effectiveComputeReduction: gain,
      carrier: "context_local",
    };
    state.technical.capabilityArtifacts.push(artifactId);
    if (state.latent.artifactCarrierOutcome !== "context_local") queue.schedule({
      id: `scheduled:${artifactId}:carrier`,
      atHour: hour(event.atHour + 0.01),
      type: "ARTIFACT_CARRIER_CHANGE",
      sessionId: session.id,
      artifactId,
    });
  }
  record(trace, {
    eventId: `evt:${session.id}:complete`, hour: event.atHour,
    transition: succeeds ? "ARTIFACT_CREATED" : "INFERENCE_COMPLETION",
    parents: [`evt:${session.id}:authorization`],
    latentReferences: [
      session.accessSurface === "open_weight_residual"
        ? "H_CAP.smallOpenWeightsUnlockEfficiencyRoute"
        : "H_CAP.frontierInferenceUnlocksEfficiencyRoute",
      "H_REINVEST.artifactCarrierOutcome",
    ],
    informationOutputs: [],
    stateDelta: succeeds ? {
      "artifacts.artifact:efficiency-route-1.carrier": "context_local",
    } : {},
    playerVisible: true,
    explanation: succeeds
      ? "The allowed session produces a context-local dual-use efficiency artifact."
      : "The allowed session produces no capability-relevant artifact in this world.",
  });
}

export function runOpeningSlice(options: RunOptions): SimulationResult {
  const state = createOpeningState(options.seed, options.fixture, options.parameters);
  for (const site of Object.values(state.sites)) {
    site.coveredCluster = classifyResourcePool(
      site.resources,
      "integrity_check",
      options.fixture.coverageRule,
    ).coveredCluster;
  }
  const queue = new EventQueue();
  const trace: TraceRecord[] = [{
    eventId: "evt:opening", hour: 0, transition: "OPENING_POLICY", parents: [],
    latentReferences: [], informationOutputs: [],
    stateDelta: { "treaty.declaredInferencePolicy": options.fixture.inferencePolicy },
    playerVisible: true,
    explanation: `The DG selects the ${options.fixture.inferencePolicy} inference rule.`,
  }];
  const implementation = options.policyImplementationOutcome ?? "full";
  const implemented = implementation === "full"
    ? options.fixture.inferencePolicy
    : implementation === "blocked"
      ? "broad"
      : options.fixture.inferencePolicy === "cold" ? "restricted" : "broad";
  state.treaty.implementedInferencePolicy = implemented;
  trace.push({
    eventId: "evt:policy-implementation", hour: 0.1,
    transition: "POLICY_IMPLEMENTATION", parents: ["evt:opening"],
    latentReferences: [], informationOutputs: [],
    stateDelta: { "treaty.implementedInferencePolicy": implemented },
    playerVisible: true,
    explanation: implementation === "full"
      ? "The opening inference rule is implemented as selected."
      : implementation === "narrowed"
        ? `Implementers narrow the selected rule; actual permissions are ${implemented}.`
        : "The selected restriction is blocked; broad hosted inference continues.",
  });

  if (options.attemptedSiteId) {
    const site = requireSite(state, options.attemptedSiteId);
    initializeDangerousRun(
      state, trace, queue, site.id, options.attemptedRunId ?? "RUN_1",
      site.declared
        ? options.parameters.declaredSiteRunDurationHours.value
        : options.parameters.covertSiteRunDurationHours.value,
      options.attemptedActorClass ?? "catastrophic_gambler",
      options.fixture.coverageRule,
    );
  }
  const inferenceEpisode = options.inferenceEpisode
    ?? (options.runInferenceResearch ? "disguised_capability" : undefined);
  if (inferenceEpisode) initializeInferenceEpisode(state, queue, inferenceEpisode);
  if (options.backgroundSensorSiteId) queue.schedule({
    id: `scheduled:${options.backgroundSensorSiteId}:background-sensor`,
    atHour: 2,
    type: "BACKGROUND_SENSOR_CHECK",
    siteId: options.backgroundSensorSiteId,
  });

  for (let event = queue.next(); event && state.terminal === "none"; event = queue.next()) {
    state.hour = event.atHour;
    switch (event.type) {
      case "SENSOR_CHECK": resolveSensor(event, state, trace, queue); break;
      case "BACKGROUND_SENSOR_CHECK": resolveBackgroundSensor(event, state, trace); break;
      case "ANALYZE_REPORT": resolveAnalysis(event, state, trace, queue); break;
      case "STOP_ATTEMPT": resolveStop(event, state, trace, queue); break;
      case "WORKLOAD_COMPLETE":
      case "INTERNAL_RSI_BOUNDARY":
      case "TAKEOVER_COMPLETE": resolveWorkloadTimeline(event, state, trace); break;
      case "INFERENCE_REQUEST":
      case "INFERENCE_CLASSIFY":
      case "INFERENCE_RESOLVE":
      case "INFERENCE_COMPLETE":
      case "ARTIFACT_CARRIER_CHANGE": resolveInferenceEvent(
        event, state, trace, queue, options.parameters.researchEfficiencyGain.value,
      ); break;
    }
  }
  trace.sort((a, b) => a.hour - b.hour || a.eventId.localeCompare(b.eventId));
  return { state, trace };
}

export function firstDivergence(
  left: SimulationResult,
  right: SimulationResult,
): { left?: TraceRecord; right?: TraceRecord } | null {
  const length = Math.max(left.trace.length, right.trace.length);
  for (let index = 0; index < length; index += 1) {
    const a = left.trace[index];
    const b = right.trace[index];
    if (JSON.stringify(a) !== JSON.stringify(b)) return { left: a, right: b };
  }
  return null;
}
