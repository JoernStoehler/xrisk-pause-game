import { describe, it, expect } from "vitest";
import type { HistoryEntry } from "../engine/history";
import type { DeathInfo } from "../engine/state";
import { generateShareText } from "./shareText";

function makeDeath(resource: DeathInfo["resource"], extreme: DeathInfo["extreme"]): DeathInfo {
  return { resource, extreme, message: "test" };
}

describe("generateShareText", () => {
  it("includes failure phrase for each resource × extreme", () => {
    const cases: [DeathInfo["resource"], DeathInfo["extreme"], string][] = [
      ["political", "depleted", "Political support collapsed"],
      ["political", "overloaded", "Unchecked institutional power"],
      ["intelligence", "depleted", "I was flying blind"],
      ["intelligence", "overloaded", "Total surveillance drove threats underground"],
      ["safety", "depleted", "lethal threshold shrank"],
      ["safety", "overloaded", "Safety research produced"],
      ["algorithmic", "depleted", "Algorithmic stagnation"],
      ["algorithmic", "overloaded", "Consumer hardware became sufficient"],
    ];
    for (const [resource, extreme, phrase] of cases) {
      const text = generateShareText(makeDeath(resource, extreme), 10, []);
      expect(text).toContain(phrase);
    }
  });

  it("uses elapsed-month time framing", () => {
    expect(generateShareText(makeDeath("political", "depleted"), 0.5, [])).toContain("in my first month");
    expect(generateShareText(makeDeath("political", "depleted"), 5, [])).toContain("after 5 months in office");
    expect(generateShareText(makeDeath("political", "depleted"), 12, [])).toContain("after a year in office");
    expect(generateShareText(makeDeath("political", "depleted"), 36, [])).toContain("after 3 years in office");
  });

  it("includes notable card mention when present in history", () => {
    const history: HistoryEntry[] = [
      { type: "gameStarted", seed: 42 },
      { type: "choiceCommitted", elapsedMonths: 0, decisionIndex: 0, cardId: "some-card", choice: "left" },
      { type: "choiceCommitted", elapsedMonths: 1, decisionIndex: 1, cardId: "thermal-anomaly", choice: "right" },
    ];
    const text = generateShareText(makeDeath("political", "depleted"), 10, history);
    expect(text).toContain("Satellite imagery forced an inspection call");
  });

  it("uses first notable card only", () => {
    const history: HistoryEntry[] = [
      { type: "choiceCommitted", elapsedMonths: 0, decisionIndex: 0, cardId: "thermal-anomaly", choice: "left" },
      { type: "choiceCommitted", elapsedMonths: 1, decisionIndex: 1, cardId: "public-fatigue", choice: "right" },
    ];
    const text = generateShareText(makeDeath("political", "depleted"), 10, history);
    expect(text).toContain("Satellite imagery");
    expect(text).not.toContain("Public fatigue");
  });

  it("omits notable line when no notable cards in history", () => {
    const text = generateShareText(makeDeath("intelligence", "overloaded"), 24, []);
    // Should go straight from "AI pause." to the failure phrase
    expect(text).toMatch(/AI pause\. Total surveillance/);
  });

  it("always ends with the game URL", () => {
    const text = generateShareText(makeDeath("political", "depleted"), 5, []);
    expect(text).toContain("global-pause.pages.dev");
  });
});
