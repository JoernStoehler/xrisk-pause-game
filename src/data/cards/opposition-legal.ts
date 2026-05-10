// Source: event-map #civil--protest-to-legislator-pipeline
// Rationale: teaches that democratic accountability and existential risk management
//   are genuinely in tension. The agency can't survive without democratic legitimacy
//   and can't do its job within the constraints democracy imposes.
// Dynamic: enforcement vs. backlash; political support IS the pause
// Category: political (turn-gated, 3-choice)

// Source: event-map #consequence--protest-that-helps
// Rationale: teaches that non-ASI incidents shift opinion in ways you can exploit
//   but shouldn't. Attaching your mission to misunderstanding is effective but fragile.
// Dynamic: crises as opportunities; incorrect conclusions help short-term, hurt long-term
// Category: incident (turn-gated)

// Source: event-map #civil--supreme-court-challenge
// Rationale: teaches that the agency operates within legal systems that don't have a
//   category for existential risk. Civil liberties arguments are often legally correct.
// Dynamic: monitoring vs. sovereignty (int vs. pol tension)
// Category: political (turn-gated)

// Source: event-map #isia--vote-of-no-confidence
// Rationale: teaches that the agency exists at politicians' discretion — including
//   the DG's own position. Competent leadership can be replaced by political appointees.
// Dynamic: far easier to destroy an institution than build one
// Category: crisis (pol-gated)

import type { Card, GameState } from "../../engine/types";

export const oppositionLegalCards: Card[] = [
  {
    id: "protest-to-legislator",
    tags: ["civil-liberties", "political-support"],
    idea: "street protests escalate to legislation stripping surveillance authority",
    speaker: "Political Advisor",
    text: "Street protests against ISIA surveillance in Berlin, London, and Washington crossed a threshold. Three European parliamentary caucuses and a bipartisan US Senate group introduced coordinated legislation to strip our domestic surveillance authority. 40% poll approval. The surveillance powers being challenged are genuinely important for enforcement. The people challenging them have genuinely legitimate civil liberties concerns. Democracy is functioning correctly — and it might kill everyone.",
    left: {
      label: "Lobby against the bills",
      effects: { pol: -8, int: 3 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    right: {
      label: "Propose independent oversight board",
      effects: { pol: -3, int: -5 },
    },
    down: {
      label: "Declassify a recent surveillance success",
      effects: { pol: 3, int: -8 },
      enabled: (state: GameState) => !(state.resources.int > 60),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      if ((state.hidden.civil_liberties_pressure ?? 0) < 1) return 0;
      return 2;
    },
  },
  {
    id: "protest-that-helps",
    tags: ["sub-asi-incidents", "media-narrative"],
    idea: "drone swarm incident creates momentum, exploit or correct the narrative",
    speaker: "Political Advisor",
    text: "Autonomous drone swarm malfunction killed 6 people in a military exercise. Sub-threshold AI, nothing to do with ASI. Massive protests — not about existential risk, but the public doesn't distinguish. Momentum for stronger enforcement is surging. I can push through measures we've wanted for years.",
    left: {
      label: "Exploit the momentum",
      effects: { pol: 8, int: 5 },
      hiddenEffects: { narrative_damage: 1 },
    },
    right: {
      label: "Correct the narrative",
      effects: { pol: -5, saf: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 4) return 0;
      return 1.5;
    },
  },
  {
    id: "supreme-court-challenge",
    tags: ["civil-liberties", "compute-monitoring"],
    idea: "ACLU challenges chip-tracking firmware as Fourth Amendment violation",
    speaker: "Legal Counsel",
    text: "The ACLU is bringing a landmark case: our chip-tracking firmware on consumer devices violates the Fourth Amendment. Two former ISIA attorneys filed supporting briefs — they helped design the program and now say it overreaches. The Ninth Circuit is sympathetic. If we lose, consumer-hardware monitoring collapses in the US. If we fight and win, we've set a surveillance precedent that will follow us internationally.",
    left: {
      label: "Fight the case",
      effects: { pol: -8, int: -3 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    right: {
      label: "Narrow the program preemptively",
      effects: { pol: -3, int: -10 },
    },
    // More likely when surveillance is high
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      if (state.resources.int < 60) return 0;
      return 1.5;
    },
  },
  {
    id: "vote-of-no-confidence",
    tags: ["political-support", "institutional-integrity"],
    idea: "council members table no-confidence motion over refused corporate exemptions",
    speaker: "Deputy Director",
    text: "Three council members tabled a no-confidence motion. Publicly: 'operational failures.' Privately: you refused their corporations compute exemptions. Vote in 72 hours. If it passes, you're replaced — and they choose your successor.",
    left: {
      label: "Lobby wavering members",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Resign — name your deputy",
      effects: { pol: -3, saf: -5 },
    },
    down: {
      label: "Leak their corporate ties",
      effects: { pol: 5, int: -8 },
      enabled: (state: GameState) => !(state.resources.int < 40),
    },
    color: "#ef4444",
    // Only fire once per game
    poolWeight: (state: GameState) => {
      if (state.resources.pol >= 30) return 0;
      if (state.history.some((h) => h.cardId === "vote-of-no-confidence")) return 0;
      return 5;
    },
  },
];
