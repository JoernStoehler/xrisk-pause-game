import { describe, it, expect } from "vitest";
import type { DeathInfo, HistoryEntry } from "../engine/types";
import { generateShareText } from "./shareText";

function makeDeath(resource: DeathInfo["resource"], extreme: DeathInfo["extreme"]): DeathInfo {
  return { resource, extreme, message: "test" };
}

describe("generateShareText", () => {
  it("includes failure phrase for each resource × extreme", () => {
    const cases: [DeathInfo["resource"], DeathInfo["extreme"], string][] = [
      ["trust", "depleted", "Public revolt ended my tenure"],
      ["trust", "overloaded", "Overpromising shattered my credibility"],
      ["funding", "depleted", "The agency ran out of money"],
      ["funding", "overloaded", "A waste scandal brought it all down"],
      ["intel", "depleted", "I was flying blind when the threat arrived"],
      ["intel", "overloaded", "Surveillance overreach triggered a coalition revolt"],
      ["leverage", "depleted", "Without political backing, the treaty collapsed"],
      ["leverage", "overloaded", "Unchecked power turned the world against me"],
    ];
    for (const [resource, extreme, phrase] of cases) {
      const text = generateShareText(makeDeath(resource, extreme), 10, []);
      expect(text).toContain(phrase);
    }
  });

  it("uses year-based time framing", () => {
    expect(generateShareText(makeDeath("trust", "depleted"), 5, [])).toContain("in my first year");
    expect(generateShareText(makeDeath("trust", "depleted"), 12, [])).toContain("after a year in office");
    expect(generateShareText(makeDeath("trust", "depleted"), 36, [])).toContain("after 3 years in office");
  });

  it("includes notable card mention when present in history", () => {
    const history: HistoryEntry[] = [
      { turn: 0, cardId: "some-card", choice: "left" },
      { turn: 1, cardId: "whistleblower", choice: "right" },
    ];
    const text = generateShareText(makeDeath("funding", "depleted"), 10, history);
    expect(text).toContain("A whistleblower came to me for protection");
  });

  it("uses first notable card only", () => {
    const history: HistoryEntry[] = [
      { turn: 0, cardId: "whistleblower", choice: "left" },
      { turn: 1, cardId: "treaty-threat", choice: "right" },
    ];
    const text = generateShareText(makeDeath("funding", "depleted"), 10, history);
    expect(text).toContain("whistleblower");
    expect(text).not.toContain("threatened to leave");
  });

  it("omits notable line when no notable cards in history", () => {
    const text = generateShareText(makeDeath("intel", "overloaded"), 24, []);
    // Should go straight from "AI pause." to the failure phrase
    expect(text).toMatch(/AI pause\. Surveillance/);
  });

  it("always ends with the game URL", () => {
    const text = generateShareText(makeDeath("leverage", "depleted"), 5, []);
    expect(text).toContain("global-pause.pages.dev");
  });
});
