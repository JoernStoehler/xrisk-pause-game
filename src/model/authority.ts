export type AuthorityGate =
  | "executive_support"
  | "operator_consent"
  | "implementing_act"
  | "appropriation"
  | "warrant_or_consent"
  | "no_court_stay"
  | "party_authorization"
  | "state_council_mandate"
  | "provincial_team"
  | "cmc_order"
  | "military_protocol";

export interface AuthorityAction {
  id: string;
  jurisdiction: "US" | "PRC" | "ISIA";
  decisionMaker: string;
  implementingActor: string;
  requiredGates: AuthorityGate[];
  impossibleWithoutNewAuthority?: boolean;
}

export interface AuthorityResolution {
  actionId: string;
  implementable: boolean;
  missingGates: AuthorityGate[];
  reason: string;
}

export const authorityActions: Record<string, AuthorityAction> = {
  US_VOLUNTARY_MONITORING: {
    id: "US_VOLUNTARY_MONITORING", jurisdiction: "US",
    decisionMaker: "President / US National Authority",
    implementingActor: "operator + designated federal team",
    requiredGates: ["executive_support", "operator_consent"],
  },
  US_COMPULSORY_TREATY_INSPECTION: {
    id: "US_COMPULSORY_TREATY_INSPECTION", jurisdiction: "US",
    decisionMaker: "Congress + US National Authority",
    implementingActor: "designated civilian regulator + DOJ/court",
    requiredGates: ["implementing_act", "appropriation", "warrant_or_consent", "no_court_stay"],
    impossibleWithoutNewAuthority: true,
  },
  PRC_CIVILIAN_FREEZE: {
    id: "PRC_CIVILIAN_FREEZE", jurisdiction: "PRC",
    decisionMaker: "central Party leadership",
    implementingActor: "State Council ministries + provincial joint team",
    requiredGates: ["party_authorization", "state_council_mandate", "provincial_team"],
  },
  PRC_MILITARY_FREEZE: {
    id: "PRC_MILITARY_FREEZE", jurisdiction: "PRC",
    decisionMaker: "Party/CMC leadership",
    implementingActor: "CMC / PLA implementation chain",
    requiredGates: ["party_authorization", "cmc_order", "military_protocol"],
  },
  ISIA_DIRECT_DOMESTIC_ENTRY: {
    id: "ISIA_DIRECT_DOMESTIC_ENTRY", jurisdiction: "ISIA",
    decisionMaker: "ISIA DG",
    implementingActor: "ISIA inspectorate",
    requiredGates: ["implementing_act", "warrant_or_consent"],
    impossibleWithoutNewAuthority: true,
  },
};

export function resolveAuthority(
  action: AuthorityAction,
  satisfied: ReadonlySet<AuthorityGate>,
): AuthorityResolution {
  const missingGates = action.requiredGates.filter((gate) => !satisfied.has(gate));
  return {
    actionId: action.id,
    implementable: missingGates.length === 0,
    missingGates,
    reason: missingGates.length
      ? `Action remains a proposal; missing ${missingGates.join(", ")}.`
      : `The named domestic implementation chain can attempt the action.`,
  };
}
