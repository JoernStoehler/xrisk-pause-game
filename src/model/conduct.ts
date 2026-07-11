export interface ViolationDecision {
  outcome: "deterred" | "proceed";
  reasons: string[];
  calibrationRole: "diagnostic_fixture";
}

/**
 * Structural diagnostic only. It demonstrates that deterrence and factual
 * incapacitation are separate mechanisms; it does not estimate actor shares.
 */
export function evaluateViolationDecision(input: {
  actorClass: "ordinary" | "catastrophic_gambler";
  perceivedDetection: "low" | "credible";
  expectedSanction: "minor" | "severe";
}): ViolationDecision {
  const deterred = input.actorClass === "ordinary"
    && input.perceivedDetection === "credible"
    && input.expectedSanction === "severe";
  return {
    outcome: deterred ? "deterred" : "proceed",
    reasons: deterred
      ? ["credible apprehension", "severe expected sanction", "ordinary actor disposition"]
      : [input.actorClass === "catastrophic_gambler"
          ? "later punishment does not dominate the actor's gamble"
          : "apprehension is not perceived as credible"],
    calibrationRole: "diagnostic_fixture",
  };
}
