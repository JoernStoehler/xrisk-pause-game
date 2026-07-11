import type { InferencePolicy } from "../model/types.ts";

export type GameAction =
  | { type: "SET_CUSTODY"; value: "legal_order" | "multiparty" }
  | { type: "SET_FRONTIER_SERVICE"; value: "cold" | "continue" }
  | { type: "SET_SERVICE_RULE"; value: "restricted" | "broad" }
  | { type: "SET_RESOURCE_COVERAGE"; value: "compute_only" | "compute_or_memory" }
  | { type: "REVIEW_ORDERS" }
  | { type: "RESOLVE" };

export interface Choice {
  label: string;
  hint: string;
  action: GameAction;
  direction: "left" | "right";
}

export interface AdvisorCard {
  id: string;
  date: string;
  role: string;
  name: string;
  portrait: "control" | "inference" | "verification" | "secretariat";
  statement: string;
  context: string;
  left: Choice;
  right: Choice;
}

export const cards = {
  custody: {
    id: "custody", date: "1 AUG 2026 · 08:10 UTC",
    role: "Commissioner for Site Control", name: "MARA VOSS", portrait: "control",
    statement: "The halt orders are acknowledged. But an order and a stopped machine are different things.",
    context: "At the declared frontier sites, we can rely on criminal enforcement or place training credentials under ISIA–host-state two-person custody now.",
    left: { label: "Rely on the order", hint: "Punishment deters many actors; operators retain a unilateral technical path.", action: { type: "SET_CUSTODY", value: "legal_order" }, direction: "left" },
    right: { label: "Take joint custody", hint: "Removes the ordinary unilateral path; bypass and insider risks remain.", action: { type: "SET_CUSTODY", value: "multiparty" }, direction: "right" },
  },
  frontierService: {
    id: "frontierService", date: "1 AUG 2026 · 09:25 UTC",
    role: "Commissioner for Model Access", name: "LIN WEI", portrait: "inference",
    statement: "Training is stopped. Existing models can still perform millions of experiments.",
    context: "Cold-holding frontier weights cuts off useful services and research. Continuing hosted inference preserves both the benefits and the dangerous uses.",
    left: { label: "Cold-hold frontier weights", hint: "Hosted frontier inference stops; already released smaller weights remain.", action: { type: "SET_FRONTIER_SERVICE", value: "cold" }, direction: "left" },
    right: { label: "Retain hosted service", hint: "Choose the access conditions next.", action: { type: "SET_FRONTIER_SERVICE", value: "continue" }, direction: "right" },
  },
  serviceRule: {
    id: "serviceRule", date: "1 AUG 2026 · 09:31 UTC",
    role: "Commissioner for Model Access", name: "LIN WEI", portrait: "inference",
    statement: "Then we need a rule for who may ask the models to do what.",
    context: "Registered access gives control teams full logs and stops ambiguous sessions. Broad service retains ordinary provider logging and permits capability research unless separately illegal.",
    left: { label: "Registered tasks only", hint: "Lower research access; classification mistakes and open weights remain.", action: { type: "SET_SERVICE_RULE", value: "restricted" }, direction: "left" },
    right: { label: "Allow broad service", hint: "More benefit and political support; larger capability-research surface.", action: { type: "SET_SERVICE_RULE", value: "broad" }, direction: "right" },
  },
  resourceCoverage: {
    id: "resourceCoverage", date: "1 AUG 2026 · 11:40 UTC",
    role: "Chief Verification Engineer", name: "AMINA RAHAL", portrait: "verification",
    statement: "A cluster limit written only in chips is already an evasion target.",
    context: "Dispersed training depends on memory and interconnect as well as accelerator count. We can add accelerator memory as an alternative coverage trigger without pretending this makes evasion impossible.",
    left: { label: "Keep compute-only rule", hint: "Simpler rule; memory-heavy configurations can fall outside cluster coverage.", action: { type: "SET_RESOURCE_COVERAGE", value: "compute_only" }, direction: "left" },
    right: { label: "Cover compute OR memory", hint: "Raises evasion cost and coverage; operational calibration remains uncertain.", action: { type: "SET_RESOURCE_COVERAGE", value: "compute_or_memory" }, direction: "right" },
  },
  resolve: {
    id: "resolve", date: "1 AUG 2026 · 18:00 UTC",
    role: "Director-General's Secretariat", name: "OPENING DOSSIER", portrait: "secretariat",
    statement: "The first operating orders are ready. The institution will now discover what kind of world it inherited.",
    context: "The same hidden diagnostic world can be replayed under another policy. Relative frequencies in this prototype are not forecasts.",
    left: { label: "Review the orders", hint: "Return to the first decision.", action: { type: "REVIEW_ORDERS" }, direction: "left" },
    right: { label: "Begin operations", hint: "Resolve the opening diagnostic episode.", action: { type: "RESOLVE" }, direction: "right" },
  },
} as const satisfies Record<string, AdvisorCard>;

export type CardId = keyof typeof cards;

export function policyLabel(policy: InferencePolicy | null): string {
  if (!policy) return "UNSET";
  return policy === "cold" ? "COLD HOLD" : policy === "restricted" ? "REGISTERED" : "BROAD";
}
