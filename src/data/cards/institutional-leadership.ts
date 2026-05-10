// Source: event-map #institutional--leadership-purge
// Rationale: teaches that politicians can undermine the agency by replacing competent
//   officials with political appointees. Institutional fragility is structural.
// Dynamic: far easier to destroy an institution than build one
// Category: crisis (turn-gated)

// Source: event-map #institutional--empire-builder
// Rationale: teaches that organizations can be destroyed by their most dedicated
//   members building fiefdoms. Empire-building driven by sincere belief, not
//   corruption. Internal fractures waste resources.
// Dynamic: institutions rot from within
// Category: incident (turn-gated)

// Source: event-map #institutional--mission-drift-decade
// Rationale: teaches that bureaucratic inertia is structural, not a failure of
//   leadership. Organizations drift toward compliance paperwork and away from
//   their actual mission over time.
// Dynamic: institutions rot from within through slow gravitational pull
// Category: report (late-game)

// Source: event-map #isia--institutional-memory-loss
// Rationale: teaches that organizations forget. Competence isn't permanent.
//   The 30-year timescale means complete generational turnover. Institutional
//   knowledge degrades like a game of telephone.
// Dynamic: institutions rot from within; 30 years of political noise
// Category: report (late-game, 3-choice)

// Source: event-map #safety--rogue-internal-experiment
// Rationale: teaches the innovator's dilemma inside a bureaucracy — the same initiative
//   that produces breakthroughs also produces uncontrolled risk. Best researchers
//   may not follow rules. Punishing initiative deters future breakthroughs.
// Dynamic: institutions rot from within; the cure and the disease
// Category: crisis (turn-gated, 3-choice)

// Source: event-map #safety--funding-deal-techbro
// Rationale: teaches that funding sources create subtle influence even without
//   explicit strings. The most dangerous conditions are the ones that aren't written down.
//   Regulatory capture by private actors, not just governments.
// Dynamic: institutions rot from within; independence vs. resources
// Category: crisis (turn-gated, 3-choice)

import type { Card, GameState } from "../../engine/types";

export const institutionalLeadershipCards: Card[] = [
  {
    id: "leadership-purge",
    tags: ["institutional-integrity", "political-support"],
    idea: "government demands replacement of competent officials with political appointees",
    speaker: "Deputy Director",
    text: "New government demands replacement of three senior ISIA officials deemed 'too aggressive.' Threatens to withhold treaty funding. The officials are competent — the real objection is political. Lose them and we lose decades of institutional knowledge. Keep them and we lose a major funder.",
    left: {
      label: "Replace the officials",
      effects: { pol: 5, int: -10 },
    },
    right: {
      label: "Refuse — defend independence",
      effects: { pol: -10, int: 3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
  {
    id: "empire-builder",
    tags: ["institutional-integrity", "enforcement-operations"],
    idea: "enforcement division quietly grew into agency-within-agency via empire building",
    speaker: "Deputy Director",
    text: "The enforcement division quietly expanded from 200 to 1,800 staff over eight years. Division chief argues every expansion was justified. But a leaked org chart shows: enforcement now has its own intelligence unit, its own communications team, its own political liaisons — duplicating central functions. It's become an agency within the agency. The division chief isn't corrupt. She's a genuine believer who thinks enforcement is the only thing that matters and didn't trust the rest of us to prioritize it.",
    left: {
      label: "Reorganize — merge duplicated functions",
      effects: { int: -5, pol: -3 },
    },
    right: {
      label: "Formalize the split — give enforcement autonomy",
      effects: { pol: -5, int: -3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 1.5;
    },
  },
  {
    id: "mission-drift",
    tags: ["institutional-integrity", "enforcement-operations"],
    idea: "bureaucratic drift: compliance paperwork crowding out actual enforcement",
    speaker: "Ethics Watchdog",
    text: "Internal audit after 12 years. Findings: 40% of enforcement staff now spend most time on compliance paperwork for permitted AI — not detecting unauthorized training. Budget for monitoring rogue actors is down 25% while compliance grew 300%. We're becoming a rubber-stamp agency by institutional drift.",
    left: {
      label: "Major reorganization",
      effects: { int: 5, pol: -8 },
    },
    right: {
      label: "Incremental rebalancing",
      effects: { int: -3, pol: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 12) return 0;
      return 2;
    },
  },
  {
    id: "institutional-memory-loss",
    tags: ["institutional-integrity", "intelligence-agencies"],
    idea: "third-generation staff lost institutional knowledge via generational turnover",
    speaker: "Deputy Director",
    text: "Third generation of staff. The founding cohort who lived through the crisis retired years ago. Second generation learned from them. Now the third generation learned from the second. Institutional knowledge has degraded like telephone. A routine inspection team just missed a suspicious chip configuration that any founding-era inspector would have caught instantly — chips arranged for distributed training across 'innocent' facilities. An old hand in intel caught it by chance. She's retiring next month.",
    left: {
      label: "Knowledge-preservation program — pull seniors to train",
      effects: { int: -5, saf: -3, pol: -3 },
    },
    right: {
      label: "Hire the old hand as consultant",
      effects: { int: -3, pol: -3 },
    },
    down: {
      label: "Deploy AI to encode institutional pattern recognition",
      effects: { int: 5, saf: -3, alg: 3 },
      enabled: (state: GameState) => !(state.resources.saf < 50),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 12) return 0;
      return 2;
    },
  },
  {
    id: "rogue-internal-experiment",
    tags: ["institutional-integrity", "alignment-research"],
    idea: "junior researchers ran unauthorized experiment, produced genuine result",
    speaker: "Enforcement Chief",
    text: "Internal security caught four junior researchers who ran an unauthorized experiment overnight — 200 consumer GPUs cobbled from a university partnership, below any compute threshold, perfectly safe in isolation. Their team leader is defiant: 'The classification review takes nine months. The alignment problem doesn't wait for bureaucracy.' The experiment was small enough to be safe. But if four juniors can do this, so can forty. And not all will be as careful. The finding they produced is, by initial assessment, genuinely significant.",
    left: {
      label: "Discipline — suspensions, example set",
      effects: { saf: -5, int: 5, pol: -3 },
    },
    right: {
      label: "Quietly incorporate the result",
      effects: { saf: 5, int: -5, alg: 3 },
    },
    down: {
      label: "Use incident to justify expanded monitoring",
      effects: { int: 8, saf: 3, pol: -5 },
      enabled: (state: GameState) => !(state.resources.int > 60),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 2;
    },
    color: "#ef4444",
  },
  {
    id: "funding-deal-techbro",
    tags: ["institutional-integrity", "economic-pressure"],
    idea: "billionaire ex-CEO offers huge endowment with hidden strings attached",
    speaker: "Chief Scientist",
    text: "A billionaire former lab CEO offers a $500M endowment for our safety research. No strings attached, he says. But intelligence flagged something: his family office holds $4B in AI investments that skyrocket if the pause ends. Three researchers he's recommending we hire are his former capability employees. Assessment: 60% genuine philanthropy, 40% long-term play to embed people who'll eventually argue alignment is 'close enough.'",
    left: {
      label: "Take money, decline his hires",
      effects: { saf: 5, pol: -5 },
    },
    right: {
      label: "Decline everything",
      effects: { saf: -5, pol: -3, int: 3 },
    },
    down: {
      label: "Accept but monitor his hires",
      effects: { saf: 8, int: -5 },
      enabled: (state: GameState) => !(state.resources.int < 50),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 2;
    },
  },
];
