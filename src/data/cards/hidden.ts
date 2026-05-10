export const HIDDEN = {
  civilLibertiesPressure: "civil_liberties_pressure",
  diplomaticInfrastructure: "diplomatic_infrastructure",
  enforcementVisibility: "enforcement_visibility",
  mentoringCut: "mentoring_cut",
  militaryDependency: "military_dependency",
  missedThreats: "missed_threats",
  narrativeDamage: "narrative_damage",
  politicization: "politicization",
  treatyErosion: "treaty_erosion",
} as const;

export type HiddenKey = (typeof HIDDEN)[keyof typeof HIDDEN];
