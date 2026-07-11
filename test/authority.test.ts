import assert from "node:assert/strict";
import { test } from "vitest";
import { authorityActions, resolveAuthority, type AuthorityGate } from "../src/model/authority.ts";

const gates = (...values: AuthorityGate[]) => new Set(values);

test("treaty signature does not give ISIA direct US site-entry power", () => {
  const result = resolveAuthority(authorityActions.ISIA_DIRECT_DOMESTIC_ENTRY, gates());
  assert.equal(result.implementable, false);
  assert.ok(result.missingGates.includes("implementing_act"));
});

test("US voluntary monitoring can precede compulsory treaty inspection", () => {
  assert.equal(resolveAuthority(
    authorityActions.US_VOLUNTARY_MONITORING,
    gates("executive_support", "operator_consent"),
  ).implementable, true);
  assert.equal(resolveAuthority(
    authorityActions.US_COMPULSORY_TREATY_INSPECTION,
    gates("executive_support", "operator_consent"),
  ).implementable, false);
});

test("PRC civilian and military coverage require parallel chains", () => {
  const civilian = gates("party_authorization", "state_council_mandate", "provincial_team");
  assert.equal(resolveAuthority(authorityActions.PRC_CIVILIAN_FREEZE, civilian).implementable, true);
  assert.equal(resolveAuthority(authorityActions.PRC_MILITARY_FREEZE, civilian).implementable, false);
  assert.ok(resolveAuthority(authorityActions.PRC_MILITARY_FREEZE, civilian).missingGates.includes("cmc_order"));
});
