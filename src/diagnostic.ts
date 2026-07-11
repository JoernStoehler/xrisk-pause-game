import { runOpeningSlice, firstDivergence } from "./model/engine.ts";
import { diagnosticParameters, openingFixture } from "./model/fixtures.ts";

const seed = process.argv[2] ?? "diagnostic-001";
const common = {
  seed,
  parameters: diagnosticParameters,
  attemptedSiteId: "US_FRONTIER_1",
  attemptedRunId: "RUN_DECLARED",
  runInferenceResearch: true,
};
const cold = runOpeningSlice({ ...common, fixture: openingFixture("cold") });
const broad = runOpeningSlice({ ...common, fixture: openingFixture("broad") });

console.log(JSON.stringify({
  warning: "Diagnostic fixture, not a forecast",
  seed,
  cold: { terminal: cold.state.terminal, efficiency: cold.state.technical.algorithmicEfficiencyMultiplier },
  broad: { terminal: broad.state.terminal, efficiency: broad.state.technical.algorithmicEfficiencyMultiplier },
  firstDivergence: firstDivergence(cold, broad),
  broadTrace: broad.trace,
}, null, 2));
