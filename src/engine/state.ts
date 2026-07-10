export type ResourceKey = "political" | "intelligence" | "safety" | "algorithmic";

export const RESOURCE_KEYS: ResourceKey[] = [
  "political",
  "intelligence",
  "safety",
  "algorithmic",
];

export interface Resources {
  political: number;
  intelligence: number;
  safety: number;
  algorithmic: number;
}

export type Effects = Partial<Record<ResourceKey, number>>;

export interface TimeCurve {
  elapsedMonths: number;
  value: number;
  changePerMonth: number;
}

export interface TreatyState {
  erosion: number;
  legitimacy: number;
  usChinaWar: boolean;
}

export interface EnforcementState {
  visibility: number;
  missedThreats: number;
  sourceProtection: number;
}

export interface PublicOpinionState {
  legitimacy: number;
  fatigue: TimeCurve;
}

export interface ResearchState {
  mentoringCapacity: number;
  containment: number;
}

export interface State {
  elapsedMonths: number;
  decisionCount: number;
  resources: Resources;
  treaty: TreatyState;
  enforcement: EnforcementState;
  publicOpinion: PublicOpinionState;
  research: ResearchState;
}

export interface DeathInfo {
  resource: ResourceKey;
  extreme: "depleted" | "overloaded";
  message: string;
}

export type DeathCause = Omit<DeathInfo, "message">;

export function initialState(): State {
  return {
    elapsedMonths: 0,
    decisionCount: 0,
    resources: {
      political: 50,
      intelligence: 50,
      safety: 50,
      algorithmic: 50,
    },
    treaty: {
      erosion: 0,
      legitimacy: 50,
      usChinaWar: false,
    },
    enforcement: {
      visibility: 0,
      missedThreats: 0,
      sourceProtection: 60,
    },
    publicOpinion: {
      legitimacy: 50,
      fatigue: {
        elapsedMonths: 0,
        value: 20,
        changePerMonth: 2,
      },
    },
    research: {
      mentoringCapacity: 50,
      containment: 35,
    },
  };
}

export function cloneState(state: State): State {
  return {
    elapsedMonths: state.elapsedMonths,
    decisionCount: state.decisionCount,
    resources: { ...state.resources },
    treaty: { ...state.treaty },
    enforcement: { ...state.enforcement },
    publicOpinion: {
      legitimacy: state.publicOpinion.legitimacy,
      fatigue: { ...state.publicOpinion.fatigue },
    },
    research: { ...state.research },
  };
}

export function clampResource(value: number): number {
  return Math.max(0, Math.min(100, value));
}

export function applyResourceEffects(state: State, effects: Effects): void {
  for (const [resource, delta] of Object.entries(effects) as [ResourceKey, number][]) {
    state.resources[resource] = clampResource(state.resources[resource] + delta);
  }
}

export function curveValue(curve: TimeCurve, elapsedMonths: number): number {
  return curve.value + (elapsedMonths - curve.elapsedMonths) * curve.changePerMonth;
}

export function publicFatigue(state: State): number {
  return curveValue(state.publicOpinion.fatigue, state.elapsedMonths);
}

export function resetPublicFatigue(state: State, value: number): void {
  state.publicOpinion.fatigue = {
    elapsedMonths: state.elapsedMonths,
    value,
    changePerMonth: state.publicOpinion.fatigue.changePerMonth,
  };
}

export function checkDeathCause(state: State): DeathCause | null {
  for (const resource of RESOURCE_KEYS) {
    const value = state.resources[resource];
    if (value <= 0) return { resource, extreme: "depleted" };
    if (value >= 100) return { resource, extreme: "overloaded" };
  }
  return null;
}
