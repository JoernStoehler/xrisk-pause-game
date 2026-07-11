import type { CoverageRule, ResourceVector, WorkloadKind } from "./types.ts";

export interface CoverageDecision {
  coveredCluster: boolean;
  prohibitedWorkload: boolean;
  triggers: string[];
}

export function classifyResourcePool(
  resources: ResourceVector,
  kind: WorkloadKind,
  rule: CoverageRule,
): CoverageDecision {
  const topologyCovered = resources.interNodeBandwidthGbps > rule.topologyBandwidthGbps;
  const acceleratorTrigger = resources.h100EquivalentAccelerators > rule.clusterAcceleratorLimit;
  const memoryTrigger = rule.countMemoryAsAlternativeTrigger
    && resources.acceleratorMemoryGb > rule.clusterMemoryGbLimit;
  const coveredCluster = topologyCovered && (acceleratorTrigger || memoryTrigger);
  const trainingTrigger = kind === "training" && resources.plannedTrainingFlop > rule.trainingFlopLimit;
  const postTrainingTrigger = kind === "post_training"
    && resources.plannedPostTrainingFlop > rule.postTrainingFlopLimit;
  const triggers = [
    acceleratorTrigger ? "accelerator_count" : null,
    memoryTrigger ? "accelerator_memory" : null,
    topologyCovered ? "network_topology" : null,
    trainingTrigger ? "training_flop" : null,
    postTrainingTrigger ? "post_training_flop" : null,
  ].filter((trigger): trigger is string => trigger !== null);
  return {
    coveredCluster,
    prohibitedWorkload: trainingTrigger || postTrainingTrigger,
    triggers,
  };
}

export function aggregateCoordinatedResources(parts: ResourceVector[]): ResourceVector {
  return parts.reduce<ResourceVector>((total, part) => ({
    h100EquivalentAccelerators: total.h100EquivalentAccelerators + part.h100EquivalentAccelerators,
    acceleratorMemoryGb: total.acceleratorMemoryGb + part.acceleratorMemoryGb,
    interNodeBandwidthGbps: Math.max(total.interNodeBandwidthGbps, part.interNodeBandwidthGbps),
    plannedTrainingFlop: total.plannedTrainingFlop + part.plannedTrainingFlop,
    plannedPostTrainingFlop: total.plannedPostTrainingFlop + part.plannedPostTrainingFlop,
  }), {
    h100EquivalentAccelerators: 0,
    acceleratorMemoryGb: 0,
    interNodeBandwidthGbps: 0,
    plannedTrainingFlop: 0,
    plannedPostTrainingFlop: 0,
  });
}
