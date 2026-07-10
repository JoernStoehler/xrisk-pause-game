import type { CardDefinition } from "../../engine/card";
import { demoEnforcementCards } from "./demo-enforcement";
import { demoGeopoliticsCards } from "./demo-geopolitics";
import { demoInstitutionCards } from "./demo-institutions";
import { demoRoutineCards } from "./demo-routine";
import { demoSafetyCards } from "./demo-safety";

export interface CardGroup {
  id: string;
  label: string;
  cards: readonly CardDefinition[];
}

export const CARD_GROUPS = [
  { id: "demo-routine", label: "Demo routine", cards: demoRoutineCards },
  { id: "demo-enforcement", label: "Demo enforcement", cards: demoEnforcementCards },
  { id: "demo-safety", label: "Demo safety", cards: demoSafetyCards },
  { id: "demo-geopolitics", label: "Demo geopolitics", cards: demoGeopoliticsCards },
  { id: "demo-institutions", label: "Demo institutions", cards: demoInstitutionCards },
] satisfies readonly CardGroup[];

export const ALL_CARDS: readonly CardDefinition[] = CARD_GROUPS.flatMap(
  (group) => group.cards,
);
