export type ActorId = "ISIA" | "US_HOST" | "PRC_HOST" | "OPERATOR" | "DG";
export type Country = "US" | "PRC";
export type SiteId = string;
export type ModelId = string;
export type EventId = string;

export type ProvenanceRole =
  | "scenario_premise"
  | "elicited_expert_judgment"
  | "published_evidence"
  | "diagnostic_fixture"
  | "playability_transform";

export interface Parameter<T> {
  value: T;
  role: ProvenanceRole;
  source: string;
  note?: string;
}

export type InferencePolicy = "cold" | "restricted" | "broad";
export type WorkloadKind =
  | "training"
  | "post_training"
  | "inference"
  | "integrity_check";
export type WorkloadPurpose =
  | "ordinary_service"
  | "treaty_implementation"
  | "safety_research"
  | "capability_research"
  | "cyber"
  | "covert_successor";

export interface LatentWorld {
  id: string;
  samplingRole: "diagnostic_fixture";
  declarationCompleteness: number;
  telemetrySensitivity: number;
  telemetryFalsePositiveRate: number;
  analystEscalationRate: number;
  declaredSiteCredentialBypassSucceeds: boolean;
  localStopLatencyHours: number;
  centralEnforcementLatencyHours: number;
  distributedSubstitutionFeasible: boolean;
  frontierInferenceUnlocksEfficiencyRoute: boolean;
  smallOpenWeightsUnlockEfficiencyRoute: boolean;
  inferenceClassifierOutcome: "correct" | "false_negative" | "ambiguous";
  artifactCarrierOutcome: "context_local" | "communicated" | "leaked";
  dangerousRunInternalRsiHours: number | null;
  takeoverAfterRsiHours: number;
}

export interface SiteState {
  id: SiteId;
  country: Country;
  declared: boolean;
  coveredCluster: boolean;
  localMonitorPresent: boolean;
  hostMonitorPresent: boolean;
  telemetryAvailable: boolean;
  localStopAuthority: boolean;
  hostStopAuthority: boolean;
  operatorHasUnilateralTrainingCredentials: boolean;
  activeWorkloadIds: string[];
  resources: ResourceVector;
}

export interface ResourceVector {
  h100EquivalentAccelerators: number;
  acceleratorMemoryGb: number;
  interNodeBandwidthGbps: number;
  plannedTrainingFlop: number;
  plannedPostTrainingFlop: number;
}

export interface CoverageRule {
  id: string;
  trainingFlopLimit: number;
  postTrainingFlopLimit: number;
  clusterAcceleratorLimit: number;
  clusterMemoryGbLimit: number;
  topologyBandwidthGbps: number;
  countMemoryAsAlternativeTrigger: boolean;
}

export interface ModelAsset {
  id: ModelId;
  frontier: boolean;
  location: SiteId;
  weightsInMultipartyCustody: boolean;
  servingCredentialsInMultipartyCustody: boolean;
  portableCopiesOutstanding: boolean;
}

export interface Workload {
  id: string;
  siteId: SiteId;
  modelId?: ModelId;
  kind: WorkloadKind;
  purpose: WorkloadPurpose;
  coveredByTrainingRule: boolean;
  declaredToMonitors: boolean;
  startHour: number;
  completionHour: number;
  stoppedAtHour?: number;
  internalRsiAtHour?: number;
  takeoverAtHour?: number;
  irreversibleBoundaryCrossed?: boolean;
  result?: "blocked" | "completed" | "interrupted" | "continuing";
}

export interface InferenceSession {
  id: string;
  modelId: ModelId;
  declaredPurpose: WorkloadPurpose;
  truePurpose: WorkloadPurpose;
  institutionalClassification?: WorkloadPurpose | "ambiguous";
  status: "requested" | "denied" | "allowed" | "running" | "completed" | "stopped";
  logCoverage: "none" | "ordinary" | "full_tamper_evident";
  accessSurface: "frontier_hosted" | "open_weight_residual";
  registered: boolean;
}

export interface CapabilityArtifact {
  id: string;
  originSessionId: string;
  effectiveComputeReduction: number;
  carrier: "context_local" | "communicated" | "published" | "leaked";
}

export interface InformationObject {
  id: string;
  createdAtHour: number;
  proposition: string;
  source: string;
  sourceEventId: EventId;
  recipients: ActorId[];
  reliability: number;
  groundTruth?: boolean;
}

export interface TreatyState {
  declaredInferencePolicy: InferencePolicy;
  implementedInferencePolicy: InferencePolicy;
  usParticipation: "active" | "suspended" | "withdrawn";
  prcParticipation: "active" | "suspended" | "withdrawn";
  trainingBanActive: boolean;
}

export interface TechnicalState {
  algorithmicEfficiencyMultiplier: number;
  capabilityArtifacts: string[];
}

export interface EconomyState {
  realizedServiceBenefits: string[];
  relaxationRequests: string[];
}

export interface WorldState {
  runId: string;
  seed: string;
  hour: number;
  latent: LatentWorld;
  treaty: TreatyState;
  sites: Record<SiteId, SiteState>;
  models: Record<ModelId, ModelAsset>;
  inferenceSessions: Record<string, InferenceSession>;
  artifacts: Record<string, CapabilityArtifact>;
  workloads: Record<string, Workload>;
  information: Record<string, InformationObject>;
  technical: TechnicalState;
  economy: EconomyState;
  terminal: "none" | "unsafe_superintelligence_extinction";
}

export interface DrawRecord {
  key: string;
  value: number;
  conditionedOn: string[];
}

export interface TraceRecord {
  eventId: EventId;
  hour: number;
  transition:
    | "OPENING_POLICY"
    | "POLICY_IMPLEMENTATION"
    | "WORKLOAD_START"
    | "WORKLOAD_BLOCKED"
    | "VIOLATION_ABANDONED"
    | "SENSOR"
    | "ANALYSIS"
    | "LOCAL_STOP"
    | "CENTRAL_ENFORCEMENT"
    | "WORKLOAD_RESOLUTION"
    | "INTERNAL_RSI_BOUNDARY"
    | "TAKEOVER"
    | "INFERENCE_REQUEST"
    | "INFERENCE_CLASSIFICATION"
    | "INFERENCE_AUTHORIZATION"
    | "INFERENCE_COMPLETION"
    | "ARTIFACT_CREATED"
    | "ARTIFACT_CARRIER_CHANGED"
    | "SERVICE_BENEFIT"
    | "RELAXATION_REQUEST"
    | "TREATY_PARTICIPATION";
  parents: EventId[];
  latentReferences: string[];
  draw?: DrawRecord;
  informationOutputs: string[];
  stateDelta: Record<string, unknown>;
  playerVisible: boolean;
  explanation: string;
}

export interface SimulationResult {
  state: WorldState;
  trace: TraceRecord[];
}

export interface DiagnosticParameters {
  declaredSiteRunDurationHours: Parameter<number>;
  covertSiteRunDurationHours: Parameter<number>;
  researchEfficiencyGain: Parameter<number>;
}

export interface OpeningFixture {
  id: string;
  inferencePolicy: InferencePolicy;
  sites: SiteState[];
  models: ModelAsset[];
  coverageRule: CoverageRule;
}

export interface RunOptions {
  seed: string;
  fixture: OpeningFixture;
  parameters: DiagnosticParameters;
  attemptedSiteId?: SiteId;
  attemptedRunId?: string;
  runInferenceResearch?: boolean;
  inferenceEpisode?: "disguised_capability" | "ordinary_service" | "open_weight_capability";
  backgroundSensorSiteId?: SiteId;
  attemptedActorClass?: "ordinary" | "catastrophic_gambler";
  policyImplementationOutcome?: "full" | "narrowed" | "blocked";
}

export interface DGTraceRecord {
  eventId: EventId;
  hour: number;
  transition: TraceRecord["transition"];
  informationOutputs: Array<Pick<InformationObject, "id" | "proposition" | "source" | "reliability">>;
  explanation: string;
}

export type ScheduledEvent =
  | { id: string; atHour: number; type: "SENSOR_CHECK"; runId: string }
  | { id: string; atHour: number; type: "BACKGROUND_SENSOR_CHECK"; siteId: SiteId }
  | { id: string; atHour: number; type: "ANALYZE_REPORT"; runId: string }
  | { id: string; atHour: number; type: "STOP_ATTEMPT"; runId: string; local: boolean }
  | { id: string; atHour: number; type: "WORKLOAD_COMPLETE"; runId: string }
  | { id: string; atHour: number; type: "INTERNAL_RSI_BOUNDARY"; runId: string }
  | { id: string; atHour: number; type: "TAKEOVER_COMPLETE"; runId: string }
  | { id: string; atHour: number; type: "INFERENCE_REQUEST"; sessionId: string }
  | { id: string; atHour: number; type: "INFERENCE_CLASSIFY"; sessionId: string }
  | { id: string; atHour: number; type: "INFERENCE_RESOLVE"; sessionId: string }
  | { id: string; atHour: number; type: "INFERENCE_COMPLETE"; sessionId: string }
  | { id: string; atHour: number; type: "ARTIFACT_CARRIER_CHANGE"; sessionId: string; artifactId: string };
