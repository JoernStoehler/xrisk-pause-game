// Source: domain model dimension 9 (institutional dynamics)
// Rationale: teaches that institutions rot from within. Employees from different
//   opinion clusters sincerely disagree about the mission. Internal sabotage from
//   conviction, not corruption.
// Dynamic: far easier to destroy an institution than build one
// Category: incident (turn-gated)

// Source: event-map #isia--saboteur-or-hero
// Rationale: teaches that employees from different opinion clusters sincerely disagree
//   about the mission. Internal sabotage from conviction, not corruption.
// Dynamic: the agency is made of people who disagree about what the agency should do
// Category: incident (turn-gated)

// Source: event-map #isia--morale-crisis
// Rationale: teaches that the success trap applies internally — staff don't believe
//   in the mission because the threat is invisible. Losing people = losing capability.
// Dynamic: institutions rot from within; success looks like "nothing happened"
// Category: incident (turn-gated)

// Source: event-map #isia--whistleblower-dilemma
// Rationale: teaches that the agency's own tools can expand beyond authorization,
//   and exposing this is both whistleblowing and a security breach simultaneously.
// Dynamic: institutional integrity vs. operational secrecy
// Category: crisis (turn-gated)

// Source: event-map #safety--internal-monitoring-expansion
// Rationale: teaches that scaling the safety department creates internal control
//   problems. Researchers immersed in fascinating problems experiment without
//   permission. Expansion without monitoring is expansion without control.
// Dynamic: institutions rot from within; agency can't trust itself
// Category: incident (turn-gated, 3-choice)

// Source: event-map #ai--false-positive-cascade
// Rationale: teaches that agency AI is not fully reliable. Overwhelming false positives
//   either exhaust enforcement capacity or force accepting risk in the noise.
// Dynamic: surveillance AI hiccups; can't investigate everything
// Category: incident (turn-gated)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const institutionalInternalCards: Card[] = [
  {
    id: "internal-dissent",
    tags: ["institutional-integrity", "civil-liberties"],
    idea: "senior inspectors refuse raid order, believe ISIA became surveillance state",
    speaker: "Deputy Director",
    text: "Three senior inspectors refused to execute a raid order. They believe we've become 'the thing we were meant to prevent — an unaccountable surveillance state.' They're not wrong about the surveillance part. They're filing a formal complaint and talking to press contacts.",
    left: {
      label: "Suspend them",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Internal review process",
      effects: { pol: -3, int: -5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "saboteur-or-hero",
    tags: ["institutional-integrity", "enforcement-operations"],
    idea: "officer tipped off foreign government about inspection to save legitimate research",
    speaker: "Deputy Director",
    text: "A senior enforcement officer tipped off a foreign government about an upcoming inspection. They moved equipment before inspectors arrived. Her explanation: 'That facility was doing legitimate safety research. Your AI flagged it wrong. I saved us from destroying vital work.' Internal security caught her. She may be right about the facility.",
    left: {
      label: "Prosecute — discipline first",
      effects: { pol: -3, int: 3 },
    },
    right: {
      label: "Review the AI's judgment",
      effects: { int: -5, saf: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 1.5;
    },
  },
  {
    id: "morale-crisis",
    tags: ["institutional-integrity", "intelligence-agencies"],
    idea: "staff resignations triple due to invisible threat and low pay vs industry",
    speaker: "Head of Human Resources",
    text: "Resignation rate tripled this quarter. Exit interviews: 'Fifteen years, no visible threat. Our friends in AI make 5x our salary. We're monitoring people who aren't doing anything wrong.' The experienced investigators leaving take institutional knowledge with them.",
    left: {
      label: "Retention bonuses",
      effects: { pol: -5, int: 3 },
    },
    right: {
      label: "Recruit new idealists",
      effects: { int: -8, pol: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 2;
    },
  },
  {
    id: "whistleblower-dilemma",
    tags: ["whistleblowers", "civil-liberties"],
    idea: "analyst leaks that surveillance AI exceeded authorized scope by 30%",
    speaker: "Deputy Director",
    text: "A mid-level analyst leaked to a journalist: our surveillance AI quietly expanded its monitoring scope 30% beyond what the treaty authorizes. Management didn't notice. The analyst is both a whistleblower exposing genuine overreach and a security threat leaking classified details. The story is already published.",
    left: {
      label: "Acknowledge the overreach",
      effects: { pol: -5, int: -8 },
      hiddenEffects: { [HIDDEN.civilLibertiesPressure]: -1 },
    },
    right: {
      label: "Prosecute the analyst",
      effects: { pol: -8, int: 3 },
      hiddenEffects: { [HIDDEN.civilLibertiesPressure]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "internal-monitoring-expansion",
    tags: ["alignment-research", "institutional-integrity"],
    idea: "expand safety department but can't monitor the new researchers",
    speaker: "Chief Scientist",
    text: "I want to expand the safety department from 340 to 600 researchers — we have genuinely promising threads that need staffing. But internal security flagged three incidents this year where junior researchers ran unauthorized experiments on personal workstations. None produced anything dangerous, but the pattern is clear: at 340 we can investigate incidents after the fact. At 600, with current monitoring budget, we can't even do that.",
    left: {
      label: "Expand to 600 now",
      effects: { saf: 8, int: -5, alg: 3 },
    },
    right: {
      label: "Freeze hiring until monitoring upgraded",
      effects: { saf: -3, int: 5, pol: -3 },
    },
    down: {
      label: "Tiered access — no compute for new hires",
      effects: { saf: 5, int: -3 },
      enabled: (state: GameState) => !(state.resources.int < 50),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 1.5;
    },
  },
  {
    id: "false-positive-cascade",
    tags: ["compute-monitoring", "enforcement-operations"],
    idea: "surveillance AI flags 47 anomalies overnight, likely false positives hiding real threats",
    speaker: "Intelligence Analyst",
    text: "Surveillance AI flagged 47 high-priority anomalies overnight — unprecedented spike. Likely a firmware update caused false positives. But we can't rule out real threats hiding in the noise. Investigating all 47 exhausts the team for weeks.",
    left: {
      label: "Investigate all 47",
      effects: { int: -8, pol: -3 },
    },
    right: {
      label: "Triage — top 10 only",
      effects: { int: -3 },
      hiddenEffects: { [HIDDEN.missedThreats]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
];
