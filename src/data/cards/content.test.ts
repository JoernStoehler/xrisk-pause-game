import { describe, expect, it } from "vitest";
import { CARD_GROUPS, ALL_CARDS } from ".";
import type { ChoiceSpec } from "../../engine/types";
import { RESOURCE_KEYS } from "../../engine/types";
import { HIDDEN } from "./hidden";

const resourceKeys = new Set<string>(RESOURCE_KEYS);
const hiddenKeys = new Set<string>(Object.values(HIDDEN));
const cardModules = import.meta.glob("./*.ts", { eager: true }) as Record<
  string,
  Record<string, unknown>
>;
const cardModuleEntries = Object.entries(cardModules).filter(
  ([path]) =>
    !path.endsWith(".test.ts") &&
    !["./examples.ts", "./groups.ts", "./hidden.ts", "./index.ts"].includes(path),
);

describe("card content registry", () => {
  it("has explicit non-empty groups and one canonical card list", () => {
    expect(CARD_GROUPS.length).toBeGreaterThan(0);
    expect(ALL_CARDS.length).toBeGreaterThan(0);

    const fromGroups = CARD_GROUPS.flatMap((group) => group.cards);
    expect(ALL_CARDS).toEqual(fromGroups);

    for (const group of CARD_GROUPS) {
      expect(group.id).toMatch(/^[a-z0-9-]+$/);
      expect(group.label.trim()).not.toBe("");
      expect(group.cards.length, group.id).toBeGreaterThan(0);
    }
  });

  it("includes every card module export in the explicit groups", () => {
    const groupedArrays = new Set<readonly unknown[]>(
      CARD_GROUPS.map((group) => group.cards),
    );

    for (const [path, module] of cardModuleEntries) {
      const cardArrayExports = Object.entries(module).filter(
        ([name, value]) => name.endsWith("Cards") && Array.isArray(value),
      );

      expect(cardArrayExports.length, path).toBe(1);
      const [, cards] = cardArrayExports[0];
      expect(groupedArrays.has(cards as readonly unknown[]), path).toBe(true);
    }
  });

  it("uses unique, reviewable card ids and non-empty player text", () => {
    const ids = new Set<string>();

    for (const card of ALL_CARDS) {
      expect(card.id).toMatch(/^[a-z0-9-]+$/);
      expect(ids.has(card.id), card.id).toBe(false);
      ids.add(card.id);

      expect(String(card.speaker).trim(), card.id).not.toBe("");
      expect(String(card.text).trim(), card.id).not.toBe("");
      expect(String(card.left.label).trim(), card.id).not.toBe("");
      expect(String(card.right.label).trim(), card.id).not.toBe("");
      if (card.down) expect(String(card.down.label).trim(), card.id).not.toBe("");
    }
  });

  it("only declares effects for known visible resources", () => {
    for (const card of ALL_CARDS) {
      const choices = [card.left, card.right, card.down].filter(
        (choice): choice is ChoiceSpec => choice !== undefined,
      );
      for (const choice of choices) {
        for (const key of Object.keys(choice.effects)) {
          expect(resourceKeys.has(key), `${card.id} effect ${key}`).toBe(true);
        }
      }
    }
  });

  it("only declares hidden effects for named hidden keys", () => {
    for (const card of ALL_CARDS) {
      const choices = [card.left, card.right, card.down].filter(
        (choice): choice is ChoiceSpec => choice !== undefined,
      );
      for (const choice of choices) {
        for (const key of Object.keys(choice.hiddenEffects ?? {})) {
          expect(hiddenKeys.has(key), `${card.id} hidden effect ${key}`).toBe(true);
        }
      }
    }
  });

  it("has at least one card eligible from a fresh game", () => {
    const state = {
      phase: "playing" as const,
      resources: { pol: 50, int: 50, saf: 50, alg: 50 },
      hidden: {},
      turn: 0,
      activeCard: null,
      rngState: 1,
      death: null,
      history: [],
    };

    const eligible = ALL_CARDS.filter((card) => card.poolWeight(state) > 0);
    expect(eligible.length).toBeGreaterThan(0);
  });
});
