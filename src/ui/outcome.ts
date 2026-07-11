import { projectDGView } from "../model/projection.ts";
import type { DGTraceRecord, SimulationResult } from "../model/types.ts";

export interface DGDossier {
  events: DGTraceRecord[];
  artifactStatus: "NONE KNOWN";
  summary: {
    headline: string;
    detail: string;
    tone: "neutral" | "warning";
  };
}

export function buildDGDossier(result: SimulationResult): DGDossier {
  const events = projectDGView(result)
    .filter((event) => !["OPENING_POLICY", "POLICY_IMPLEMENTATION"].includes(event.transition));
  const hasInterruptionRecommendation = events
    .some((event) => event.transition === "ANALYSIS");

  return {
    events,
    // InformationObject currently has no typed artifact subject. Neither an
    // ARTIFACT_CREATED transition nor its omniscient explanation is evidence
    // that the DG knows an artifact exists.
    artifactStatus: "NONE KNOWN",
    summary: hasInterruptionRecommendation
      ? {
          headline: "An interruption recommendation reached your desk.",
          detail: "The report supports action, but your dossier does not establish the hidden workload's true state or final outcome.",
          tone: "warning",
        }
      : {
          headline: "No operational finding reached your desk.",
          detail: "This dossier does not establish that nothing happened. It records only information delivered to the Director-General.",
          tone: "neutral",
        },
  };
}
