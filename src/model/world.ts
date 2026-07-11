import { namedBoolean, namedRange } from "./random.ts";
import type {
  DiagnosticParameters,
  LatentWorld,
  OpeningFixture,
  WorldState,
} from "./types.ts";

export function sampleDiagnosticLatentWorld(seed: string): LatentWorld {
  const classifierDraw = namedRange(seed, "latent:inference-classifier", 0, 1);
  const carrierDraw = namedRange(seed, "latent:artifact-carrier", 0, 1);
  return {
    id: `world:${seed}`,
    samplingRole: "diagnostic_fixture",
    declarationCompleteness: namedRange(seed, "latent:declarations", 0.55, 0.98),
    telemetrySensitivity: namedRange(seed, "latent:telemetry-sensitivity", 0.65, 0.995),
    telemetryFalsePositiveRate: namedRange(seed, "latent:telemetry-fpr", 0.001, 0.08),
    analystEscalationRate: namedRange(seed, "latent:analyst-escalation", 0.55, 0.98),
    declaredSiteCredentialBypassSucceeds: namedBoolean(seed, "latent:credential-bypass", 0.5),
    localStopLatencyHours: namedRange(seed, "latent:local-stop-hours", 0.02, 2),
    centralEnforcementLatencyHours: namedRange(seed, "latent:central-enforcement-hours", 12, 240),
    distributedSubstitutionFeasible: namedBoolean(seed, "latent:distributed", 0.5),
    // Balanced diagnostic branches. These are intentionally not Jörn's
    // unresolved 25%/10% comparison and must never be reported as forecasts.
    frontierInferenceUnlocksEfficiencyRoute: namedBoolean(seed, "latent:frontier-efficiency", 0.5),
    smallOpenWeightsUnlockEfficiencyRoute: namedBoolean(seed, "latent:small-efficiency", 0.5),
    inferenceClassifierOutcome: classifierDraw < 1 / 3
      ? "correct" : classifierDraw < 2 / 3 ? "false_negative" : "ambiguous",
    artifactCarrierOutcome: carrierDraw < 1 / 3
      ? "context_local" : carrierDraw < 2 / 3 ? "communicated" : "leaked",
    dangerousRunInternalRsiHours: namedBoolean(seed, "latent:rsi-route-exists", 0.5)
      ? namedRange(seed, "latent:rsi-hours", 0.05, 96)
      : null,
    takeoverAfterRsiHours: namedRange(seed, "latent:takeover-after-rsi-hours", 0.01, 12),
  };
}

export function createOpeningState(
  seed: string,
  fixture: OpeningFixture,
  _parameters: DiagnosticParameters,
): WorldState {
  return {
    runId: `${fixture.id}:${seed}`,
    seed,
    hour: 0,
    latent: sampleDiagnosticLatentWorld(seed),
    treaty: {
      declaredInferencePolicy: fixture.inferencePolicy,
      implementedInferencePolicy: fixture.inferencePolicy,
      usParticipation: "active",
      prcParticipation: "active",
      trainingBanActive: true,
    },
    sites: Object.fromEntries(fixture.sites.map((site) => [site.id, structuredClone(site)])),
    models: Object.fromEntries(fixture.models.map((model) => [model.id, structuredClone(model)])),
    inferenceSessions: {},
    artifacts: {},
    workloads: {},
    information: {},
    technical: { algorithmicEfficiencyMultiplier: 1, capabilityArtifacts: [] },
    economy: { realizedServiceBenefits: [], relaxationRequests: [] },
    terminal: "none",
  };
}
