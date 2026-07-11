import type { DiagnosticParameters, InferencePolicy, OpeningFixture } from "./types.ts";

export const diagnosticParameters: DiagnosticParameters = {
  declaredSiteRunDurationHours: {
    value: 24,
    role: "diagnostic_fixture",
    source: "architecture test; not a forecast",
  },
  covertSiteRunDurationHours: {
    value: 240,
    role: "diagnostic_fixture",
    source: "architecture test; not a forecast",
  },
  researchEfficiencyGain: {
    value: 2,
    role: "diagnostic_fixture",
    source: "Jörn elicitation event magnitude; event probability remains provisional",
  },
};

export function openingFixture(inferencePolicy: InferencePolicy): OpeningFixture {
  return {
    id: `${inferencePolicy.toUpperCase()}-OPENING-SLICE-V1`,
    inferencePolicy,
    sites: [
      {
        id: "US_FRONTIER_1",
        country: "US",
        declared: true,
        coveredCluster: true,
        localMonitorPresent: true,
        hostMonitorPresent: true,
        telemetryAvailable: true,
        localStopAuthority: true,
        hostStopAuthority: true,
        operatorHasUnilateralTrainingCredentials: false,
        activeWorkloadIds: [],
        resources: {
          // Diagnostic memory-heavy pool: policy variants intentionally disagree
          // about coverage; these values are not forecast calibration.
          h100EquivalentAccelerators: 8,
          acceleratorMemoryGb: 2_000,
          interNodeBandwidthGbps: 3_200,
          plannedTrainingFlop: 2e24,
          plannedPostTrainingFlop: 0,
        },
      },
      {
        id: "US_COVERT_1",
        country: "US",
        declared: false,
        coveredCluster: true,
        localMonitorPresent: false,
        hostMonitorPresent: false,
        telemetryAvailable: false,
        localStopAuthority: false,
        hostStopAuthority: false,
        operatorHasUnilateralTrainingCredentials: true,
        activeWorkloadIds: [],
        resources: {
          h100EquivalentAccelerators: 32,
          acceleratorMemoryGb: 2_560,
          interNodeBandwidthGbps: 100,
          plannedTrainingFlop: 2e24,
          plannedPostTrainingFlop: 0,
        },
      },
      {
        id: "PRC_FRONTIER_1",
        country: "PRC",
        declared: true,
        coveredCluster: true,
        localMonitorPresent: true,
        hostMonitorPresent: true,
        telemetryAvailable: true,
        localStopAuthority: true,
        hostStopAuthority: true,
        operatorHasUnilateralTrainingCredentials: false,
        activeWorkloadIds: [],
        resources: {
          h100EquivalentAccelerators: 80_000,
          acceleratorMemoryGb: 6_400_000,
          interNodeBandwidthGbps: 3_200,
          plannedTrainingFlop: 2e24,
          plannedPostTrainingFlop: 0,
        },
      },
    ],
    models: [
      {
        id: "FRONTIER_A",
        frontier: true,
        location: "US_FRONTIER_1",
        weightsInMultipartyCustody: true,
        servingCredentialsInMultipartyCustody: true,
        portableCopiesOutstanding: false,
      },
      {
        id: "FRONTIER_PRC_A",
        frontier: true,
        location: "PRC_FRONTIER_1",
        weightsInMultipartyCustody: true,
        servingCredentialsInMultipartyCustody: true,
        portableCopiesOutstanding: false,
      },
      {
        id: "OPEN_70B",
        frontier: false,
        location: "US_COVERT_1",
        weightsInMultipartyCustody: false,
        servingCredentialsInMultipartyCustody: false,
        portableCopiesOutstanding: true,
      },
    ],
    coverageRule: {
      id: "PAUSE-LIMITS-2026-V1",
      trainingFlopLimit: 1e24,
      postTrainingFlopLimit: 1e23,
      clusterAcceleratorLimit: 16,
      clusterMemoryGbLimit: 1_280,
      topologyBandwidthGbps: 25,
      countMemoryAsAlternativeTrigger: true,
    },
  };
}
