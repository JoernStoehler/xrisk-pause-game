/**
 * REFERENCE ONLY — not wired into the card pool.
 *
 * Shows every card pattern using the declarative Card type.
 * Copy-paste and modify to create new cards.
 *
 * Real cards: export an array from the relevant card module and add it to groups.ts.
 */

import type { Card, GameState } from "../../engine/types";

// ─── ROUTINE CARD ───────────────────────────────────────────────────
// Always in the pool. Constant poolWeight. Touch 2-3 resources per choice.
//
// Source: [literature reference or "original"]
// Rationale: [what dynamic this teaches]
// Category: routine

const _routine: Card = {
  id: "hiring-spree",
  speaker: "Deputy Director",
  text: "We have openings for 200 new inspectors. Aggressive hiring would boost our capabilities but the cost is significant.",
  left: { label: "Hire aggressively", effects: { pol: -4, int: 8 } },
  right: { label: "Hire conservatively", effects: { pol: 5 } },
  poolWeight: () => 1.5,
};

// ─── STATE-GATED INCIDENT ──────────────────────────────────────────
// Appears only when a resource condition is met. poolWeight returns 0 to exclude.

const _incident: Card = {
  id: "rogue-lab-normal",
  speaker: "Deputy Director",
  text: "Thermal anomaly near Shenzhen. Signature consistent with an undeclared compute cluster running prohibited training.",
  left: { label: "Send inspectors", effects: { int: 8, pol: -3 } },
  right: { label: "Flag for next quarter", effects: { pol: -5, int: -3 } },
  poolWeight: (state: GameState) => state.resources.int >= 40 ? 1.5 : 0,
};

// ─── DEGRADED VARIANTS ──────────────────────────────────────────────
// Same event concept, TWO separate Card objects with mutually exclusive poolWeights.
// Each variant has its own static text, speaker, and effects.

const _degradedNormal: Card = {
  id: "rogue-lab-normal",
  speaker: "Deputy Director",
  text: "Thermal anomaly near Shenzhen. Signature consistent with an undeclared compute cluster.",
  left: { label: "Send inspectors", effects: { int: 8, pol: -3 } },
  right: { label: "Flag for next quarter", effects: { pol: -5, int: -3 } },
  poolWeight: (state: GameState) => state.resources.int >= 40 ? 1.5 : 0,
};

const _degradedLow: Card = {
  id: "rogue-lab-degraded",
  speaker: "Junior Analyst",
  text: "Rumors of unauthorized compute usage somewhere in East Asia. We can't pin it down.",
  left: { label: "Expensive investigation", effects: { int: 5, pol: -5 } },
  right: { label: "Ignore the rumors", effects: { pol: -3, int: -6 } },
  poolWeight: (state: GameState) => state.resources.int < 40 ? 1.5 : 0,
};

// ─── CRISIS CARD ───────────────────────────────────────────────────
// High weight. Appears at resource extremes (< 20 or > 80). Thermostat.

const _crisis: Card = {
  id: "pol-crisis",
  speaker: "Deputy Director",
  text: "Public approval cratering. Emergency options only.",
  left: { label: "Emergency appeal", effects: { pol: 15, int: -10 } },
  right: { label: "Cut programs", effects: { pol: 8, int: -12 } },
  color: "#ef4444",
  poolWeight: (state: GameState) => state.resources.pol < 20 ? 5 : 0,
};

// ─── HISTORY CHAIN ──────────────────────────────────────────────────
// Consequence of a prior choice. Check state.history in poolWeight.

const _chain: Card = {
  id: "cannabis-plantation",
  speaker: "Deputy Director",
  text: "The 'rogue compute cluster' was a cannabis growing operation. Heat lamps, not GPUs. The raid made international news.",
  left: { label: "Issue public apology", effects: { pol: -5, int: -3 } },
  right: { label: "Classify the incident", effects: { pol: -8, int: 3 } },
  poolWeight: (state: GameState) => {
    const trigger = state.history.find(
      (h) => h.cardId === "heat-signature" && h.choice === "left",
    );
    if (!trigger) return 0;
    if (state.turn - trigger.turn > 2) return 0;
    return 10;
  },
};

// ─── THREE-CHOICE CARD ──────────────────────────────────────────────
// Third option (swipe down). Omit `down` for standard 2-choice cards.
// Use `enabled` (default true) to gate availability based on state.

const _threeChoice: Card = {
  id: "three-way-decision",
  speaker: "Deputy Director",
  text: "A lab offers to share their safety research if we grant compute access. Your AI advisor has a third option.",
  left: { label: "Accept the deal", effects: { saf: 8, alg: 5, pol: -3 } },
  right: { label: "Decline", effects: { pol: 3, saf: -2 } },
  down: {
    label: "Counter-propose",
    effects: { saf: 5, pol: -1 },
    // Gate on hidden state — only available if we have diplomatic infrastructure
    enabled: (state: GameState) => (state.hidden.diplomatic_infrastructure ?? 0) >= 1,
  },
  poolWeight: () => 1.5,
};

// ─── LATE-GAME ESCALATION ──────────────────────────────────────────
// Turn-gated via poolWeight.

const _lateGame: Card = {
  id: "underground-network",
  speaker: "Deputy Director",
  text: "Decentralized network of small labs, each below thresholds but collectively training something massive.",
  left: { label: "Coordinate raids", effects: { int: 10, pol: -8 } },
  right: { label: "Propose treaty amendment", effects: { pol: 5, int: -3 } },
  poolWeight: (state: GameState) => state.turn < 15 ? 0 : 2.5,
};

// Suppress unused-variable warnings — this file is reference only
void [_routine, _incident, _degradedNormal, _degradedLow, _crisis, _chain, _threeChoice, _lateGame];
