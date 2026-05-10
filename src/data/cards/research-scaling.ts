// Source: event-map #research--stepping-on-toes
// Rationale: teaches that safety research can't be parallelized. Adding researchers
//   creates redundancy, not progress. The hard fundamental problems bottleneck all approaches.
// Dynamic: nobody knows how hard alignment is; can't throw money at it
// Category: report (turn-gated, saf-gated)

// Source: event-map #safety--senior-time-allocation
// Rationale: teaches that safety research doesn't scale — senior researchers are
//   the bottleneck for everything and their time must be allocated between research,
//   mentoring, and public communication, all of which are load-bearing.
// Dynamic: the cure and the disease are the same substance; safety doesn't scale
// Category: report (turn-gated, 3-choice)

// Source: event-map #safety--mentoring-pipeline-crisis
// Rationale: teaches that safety doesn't scale by hiring. Senior researchers are the
//   bottleneck and can't be produced faster. The pipeline math requires centuries
//   unless something fundamental changes. Mentoring competes directly with research.
// Dynamic: the lethal threshold keeps shrinking; safety doesn't scale
// Category: report (late-game, 3-choice)

import type { Card, GameState } from "../../engine/types";

export const researchScalingCards: Card[] = [
  {
    id: "stepping-on-toes",
    tags: ["alignment-research"],
    idea: "doubling budget didn't help, fundamental problems bottleneck all approaches",
    speaker: "Chief Scientist",
    text: "Quarterly safety report. Despite doubling the budget, output plateaued. Three independent teams arrived at the same result — the hard fundamental problems bottleneck all approaches. Adding researchers just creates redundancy. We can't buy our way out of this.",
    left: {
      label: "Reorganize — fewer, better teams",
      effects: { saf: 3, pol: -5 },
    },
    right: {
      label: "Diversify — try everything",
      effects: { saf: 5, int: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      if (state.resources.saf > 55) return 0;
      return 2;
    },
  },
  {
    id: "senior-time-allocation",
    tags: ["alignment-research", "political-support"],
    idea: "allocate scarce senior researchers between research, mentoring, and public comms",
    speaker: "Chief Scientist",
    text: "We have 12 senior alignment researchers. Four mentor juniors. Three do congressional testimony and media — they're why our funding hasn't collapsed. Five do actual research. I want to pull the communication scientists back to research. The corrigibility window is narrow and I need every mind we have. But the comms director says support for our budget will evaporate within two quarters without senior scientists explaining the work to Congress.",
    left: {
      label: "Pull comms seniors to research",
      effects: { saf: 8, pol: -10 },
    },
    right: {
      label: "Maintain current allocation",
      effects: { saf: -3, pol: -3 },
    },
    down: {
      label: "Reassign mentoring seniors instead",
      effects: { saf: 5, pol: -3 },
      hiddenEffects: { mentoring_cut: 1 },
      enabled: (state: GameState) => !(state.resources.pol > 60),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 2;
    },
  },
  {
    id: "mentoring-pipeline-crisis",
    tags: ["alignment-research"],
    idea: "senior researcher pipeline produces 0.4 net new per year, need hundreds",
    speaker: "Chief Scientist",
    text: "Annual workforce report. Five years in, we have 12 senior alignment researchers. We started with 11. One recruited, two developed from mentoring, two retired from burnout — one now teaches kindergarten, calls it 'more tractable than corrigibility.' The pipeline produces 0.4 net new seniors per year. My estimate for solving alignment: over ten thousand philosopher-years of serial senior-equivalent work. At 12 seniors, that's 833 years assuming no attrition and no wrong turns. We need either a way to make mentoring more efficient or a way to make the research easier. I don't have either.",
    left: {
      label: "Double mentoring allocation",
      effects: { saf: -5, pol: -3 },
      hiddenEffects: { mentoring_cut: -1 },
    },
    right: {
      label: "Optimize current seniors' output",
      effects: { saf: -3, pol: -3 },
    },
    down: {
      label: "Build AI research-amplification tools",
      effects: { saf: 5, alg: 5, int: -3 },
      enabled: (state: GameState) => !(state.resources.saf < 60),
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 10) return 0;
      return 2;
    },
  },
];
