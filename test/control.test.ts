import assert from "node:assert/strict";
import { test } from "vitest";
import { aggregateCoordinatedResources, classifyResourcePool } from "../src/model/control.ts";
import { openingFixture } from "../src/model/fixtures.ts";

test("memory is an OR trigger rather than a compute multiplier", () => {
  const rule = openingFixture("cold").coverageRule;
  const memoryHeavy = {
    h100EquivalentAccelerators: 8,
    acceleratorMemoryGb: 2_000,
    interNodeBandwidthGbps: 100,
    plannedTrainingFlop: 2e24,
    plannedPostTrainingFlop: 0,
  };
  const decision = classifyResourcePool(memoryHeavy, "training", rule);
  assert.equal(decision.coveredCluster, true);
  assert.ok(decision.triggers.includes("accelerator_memory"));
  assert.equal(decision.prohibitedWorkload, true);
});

test("compute-only sensitivity variant misses a memory-only covered cluster", () => {
  const base = openingFixture("cold").coverageRule;
  const resources = {
    h100EquivalentAccelerators: 8,
    acceleratorMemoryGb: 2_000,
    interNodeBandwidthGbps: 100,
    plannedTrainingFlop: 0,
    plannedPostTrainingFlop: 0,
  };
  assert.equal(classifyResourcePool(resources, "inference", base).coveredCluster, true);
  assert.equal(classifyResourcePool(
    resources, "inference", { ...base, id: "COMPUTE-ONLY-DIAGNOSTIC", countMemoryAsAlternativeTrigger: false },
  ).coveredCluster, false);
});

test("coordinated resources aggregate across parts", () => {
  const part = {
    h100EquivalentAccelerators: 8,
    acceleratorMemoryGb: 640,
    interNodeBandwidthGbps: 100,
    plannedTrainingFlop: 6e23,
    plannedPostTrainingFlop: 0,
  };
  const aggregate = aggregateCoordinatedResources([part, part]);
  assert.equal(aggregate.h100EquivalentAccelerators, 16);
  assert.equal(aggregate.acceleratorMemoryGb, 1_280);
  assert.equal(aggregate.plannedTrainingFlop, 1.2e24);
  assert.equal(classifyResourcePool(aggregate, "training", openingFixture("cold").coverageRule).prohibitedWorkload, true);
});
