// Source: event-map #political--ai-economy-report
// Rationale: teaches that economic dependency on sub-threshold AI deepens over time.
//   The longer the pause runs, the more the economy depends on AI, and the harder
//   it becomes to tighten restrictions without massive disruption.
// Dynamic: economic cost is real and grows over time
// Category: report (turn-gated)

// Source: event-map #economic--ai-gdp-dependency
// Rationale: teaches that sub-threshold AI becomes economically embedded.
//   The longer the pause runs, the harder it is to tighten restrictions
//   because the economy depends on what's already permitted.
// Dynamic: economic cost of the pause is real and grows over time
// Category: report (turn-gated)

// Source: event-map #economic--automation-two-speeds
// Rationale: teaches that the pause restricts AI in a way that maximizes job
//   destruction (sub-threshold automation) while minimizing job creation (above-threshold
//   breakthroughs). The economic distributional consequences fracture political support.
// Dynamic: economic cost is real and unevenly distributed
// Category: report (turn-gated)

// Source: event-map #economic--non-treaty-advantage
// Rationale: teaches that the economic advantage of unrestricted AI is real and visible.
//   The only honest argument is "this real harm is better than extinction" — which
//   requires people to believe in an invisible threat that never materialized.
// Dynamic: economic cost is real; opponents aren't wrong about short-term economics
// Category: political (turn-gated)

// Source: event-map #economic--econ-boom-request
// Rationale: teaches that economic arguments for relaxing the threshold are legitimate.
//   The pause genuinely costs hundreds of billions. Finance ministers aren't wrong.
// Dynamic: economic cost is real; opponents aren't wrong about short-term economics
// Category: political (turn-gated)

// Source: event-map #civil--labor-union-split
// Rationale: teaches that economic cost of the pause is real and legitimate. Workers
//   whose jobs depend on AI policy take opposing sides simultaneously.
// Dynamic: economic cost is real; opponents aren't wrong about short-term economics
// Category: political (turn-gated)

// Source: event-map #economic--unemployment-crisis
// Rationale: teaches that AI automation happens under the threshold — permitted
//   deployments destroy jobs. Different opinion clusters blame the pause for
//   opposite reasons simultaneously.
// Dynamic: economic cost of pause is real and legitimate; opinion clusters diverge
// Category: political (turn-gated)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const economicCostsCards: Card[] = [
  {
    id: "ai-economy-report",
    tags: ["economic-pressure", "treaty-compliance"],
    idea: "sub-threshold AI now 18% of GDP, tightening restrictions threatens economy",
    speaker: "Political Advisor",
    text: "New economic data: AI systems operating within treaty limits now contribute 18% of global GDP. Entire industries depend on them — logistics, finance, manufacturing, healthcare. If we tighten the threshold further, we threaten hundreds of millions of livelihoods. The economy didn't just adapt to the pause — it grew around it. Sub-threshold AI became load-bearing infrastructure. Any future restrictions are no longer about preventing growth. They're about tearing out foundations.",
    left: {
      label: "Acknowledge dependency, hold threshold",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Commission review of threshold adequacy",
      effects: { pol: -3, saf: -3 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 1.5;
    },
  },
  {
    id: "ai-gdp-dependency",
    tags: ["economic-pressure", "treaty-compliance"],
    idea: "sub-threshold AI accounts for 31% of GDP, threshold reduction means recession",
    speaker: "Finance Director",
    text: "New economic data: sub-threshold AI now accounts for 31% of GDP across treaty nations. Industries built around permitted AI are lobbying hard against any threshold reduction. 'You can't lower the limit without triggering a recession.' They're probably right.",
    left: {
      label: "Accept the dependency",
      effects: { pol: 5, alg: 5 },
    },
    right: {
      label: "Begin gradual restrictions",
      effects: { pol: -10, alg: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 1.5;
    },
  },
  {
    id: "automation-two-speeds",
    tags: ["economic-pressure", "political-support"],
    idea: "pause creates two-speed economy: automation booms, innovation stagnates",
    speaker: "Political Advisor",
    text: "The pause created a two-speed economy. Industries where sub-threshold AI suffices — logistics, customer service, basic manufacturing — are booming. AI handles 60% of work, productivity up 400%, 40 million jobs eliminated. Industries needing more compute — drug discovery, climate modeling, advanced engineering — stagnate, unable to create replacement jobs. Both groups blame the pause. Laid-off workers: 'It lets companies automate without restriction.' Stalled researchers: 'It prevents the breakthroughs that would create new industries.'",
    left: {
      label: "Propose sector-specific thresholds",
      effects: { pol: -5, alg: 5 },
      hiddenEffects: { [HIDDEN.treatyErosion]: 1 },
    },
    right: {
      label: "Stay out of economic policy",
      effects: { pol: -8 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 1.5;
    },
  },
  {
    id: "non-treaty-advantage",
    tags: ["economic-pressure", "international-diplomacy"],
    idea: "non-treaty nation booms with unrestricted AI, treaty nations lose competitiveness",
    speaker: "Political Advisor",
    text: "Vietnam, which never signed the treaty, hit 14% GDP growth for three consecutive years — unrestricted AI deployment in manufacturing, logistics, and finance. Vietnamese companies are outcompeting treaty-nation firms. Factory closures in our member states are directly attributed to Vietnamese competition. 'Made in Vietnam by AI' is a bitter slogan. Three small treaty nations are openly discussing withdrawal. The lobbying group's new ads — shuttered American factories, Vietnamese boom towns — are factually accurate.",
    left: {
      label: "Tighten non-party sanctions",
      effects: { pol: -8, int: -3 },
    },
    right: {
      label: "Accept the cost — focus on messaging",
      effects: { pol: -5, int: -3 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 1.5;
    },
  },
  {
    id: "econ-boom-request",
    tags: ["economic-pressure", "compute-monitoring"],
    idea: "G7 finance ministers request 10x compute threshold increase for economic growth",
    speaker: "Finance Director",
    text: "G7 finance ministers formally request raising the training threshold from 1e22 to 1e23 FLOP — a 10x increase. Their analysis: the current limit costs the global economy $800B annually. They're not wrong about the economics. They're wrong about what a 10x increase means for safety.",
    left: {
      label: "Hold the line — reject",
      effects: { pol: -12 },
    },
    right: {
      label: "Compromise — 3x increase",
      effects: { pol: 5, alg: 8, int: -5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 6) return 0;
      return 2;
    },
  },
  {
    id: "labor-union-split",
    tags: ["economic-pressure", "political-support"],
    idea: "labor unions fracture: manufacturing wants pause lifted, logistics wants it tightened",
    speaker: "Political Advisor",
    text: "The International Metalworkers' Federation is fracturing over the pause. Manufacturing wing wants it lifted — non-treaty nations automate freely while their members' jobs stagnate. Logistics wing wants it strengthened — sub-threshold AI already eliminated four million warehouse and transport jobs. Both sides are lobbying hard. Both have legitimate grievances. The manufacturing wing is threatening a general strike if we don't respond.",
    left: {
      label: "Tighter sub-threshold limits",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Stay out of labor politics",
      effects: { pol: -6, int: -3 },
      hiddenEffects: { [HIDDEN.politicization]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 1.5;
    },
  },
  {
    id: "unemployment-crisis",
    tags: ["economic-pressure", "sub-asi-incidents"],
    idea: "legal sub-threshold automation eliminates 12M jobs, both sides blame ISIA",
    speaker: "Political Advisor",
    text: "Sub-threshold AI automation eliminated 12 million jobs in treaty nations in two years. All perfectly legal. Protests spreading — half blame the pause for 'not restricting AI enough,' half blame it for 'restricting the AI that could create new jobs.' Both groups are marching against ISIA.",
    left: {
      label: "Propose sub-threshold restrictions",
      effects: { pol: -8, alg: -3 },
    },
    right: {
      label: "Stay focused on ASI mandate",
      effects: { pol: -5 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 1.5;
    },
  },
];
