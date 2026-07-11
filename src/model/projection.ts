import type { DGTraceRecord, SimulationResult, TraceRecord } from "./types.ts";

export function projectDGView(result: SimulationResult): DGTraceRecord[] {
  return result.trace
    .map((event) => {
      const informationOutputs = event.informationOutputs
        .map((id) => result.state.information[id])
        .filter((object): object is NonNullable<typeof object> =>
          object !== undefined && object.recipients.includes("DG"))
        .map(({ id, proposition, source, reliability }) => ({ id, proposition, source, reliability }));
      if (informationOutputs.length === 0) return undefined;
      return {
        eventId: event.eventId,
        hour: event.hour,
        transition: event.transition,
        informationOutputs,
        // Trace explanations describe the omniscient transition. The DG-facing
        // account can repeat only propositions actually delivered to the DG.
        explanation: informationOutputs.map((object) => object.proposition).join("; "),
      };
    })
    .filter((event): event is DGTraceRecord => event !== undefined);
}

export interface RetrospectiveTrace {
  warning: "sampled diagnostic world, not a unique historical counterfactual";
  events: TraceRecord[];
}

export function projectRetrospective(result: SimulationResult): RetrospectiveTrace {
  return {
    warning: "sampled diagnostic world, not a unique historical counterfactual",
    events: structuredClone(result.trace),
  };
}
