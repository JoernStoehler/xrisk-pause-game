// Source: event-map #enforcement--emperor-billionaire
// Rationale: teaches that ideologically motivated violators can't be negotiated with.
//   "The species that builds superintelligence first inherits the universe."
//   Enough personal wealth = sovereign-level capability.
// Dynamic: enforcement designed for institutions fails against individuals
// Category: crisis (late-game, 3-choice)

// Source: event-map #international--emperor-manifesto
// Rationale: teaches that ideological opposition can't be deterred the way profit
//   motivation can. The accelerationist opinion cluster is real and growing. "He's
//   selling hope, we're selling fear."
// Dynamic: 30 years of political noise; opinion clusters shift
// Category: history-triggered (consequence of emperor-billionaire)

import type { Card, GameState } from "../../engine/types";
import { HIDDEN } from "./hidden";

export const accelerationistOppositionCards: Card[] = [
  {
    id: "emperor-billionaire",
    tags: ["rogue-actors", "enforcement-operations"],
    idea: "ideological billionaire building ASI on private island, daring ISIA to stop him",
    speaker: "Enforcement Chief",
    text: "Tech billionaire — $140B net worth, three citizenships, private island in international waters. Publicly says 'the species that builds ASI first inherits the universe.' Intel tracked him acquiring 4,000 chips through shell companies. His island compound has its own power plant. He's not hiding — he's daring us.",
    left: {
      label: "Naval interdiction",
      effects: { pol: -12, int: 5 },
      hiddenEffects: { [HIDDEN.enforcementVisibility]: 2 },
    },
    right: {
      label: "Build legal case first",
      effects: { pol: -3, alg: 5 },
    },
    down: {
      label: "Coordinate passport revocation",
      effects: { pol: -8, int: -5 },
      enabled: (state: GameState) => !(state.resources.pol < 40),
    },
    color: "#ef4444",
    poolWeight: (state: GameState) => {
      if (state.turn < 12) return 0;
      return 2.5;
    },
  },
  {
    id: "emperor-manifesto",
    tags: ["media-narrative", "political-support"],
    idea: "follow-up: billionaire's manifesto goes viral, accelerationist movement grows",
    speaker: "Communications Director",
    text: "Whether we stopped him or not, the billionaire's 80-page manifesto has gone viral. 'The Case for Cosmic Ambition' argues the pause condemns humanity to mediocrity. It's passionate, well-written, and wrong in ways that require technical expertise to rebut. Three bestselling authors endorsed it. University students are organizing 'Free the Future' rallies. The accelerationist cluster grew six points in two months. I'll be blunt: we can't out-argue a vision of the future with warnings about risk. He's selling hope. We're selling fear.",
    left: {
      label: "Public scientific rebuttal",
      effects: { pol: -5, saf: -3 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: -1 },
    },
    right: {
      label: "Don't dignify it with a response",
      effects: { pol: -8 },
      hiddenEffects: { [HIDDEN.narrativeDamage]: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.history.some((h) => h.cardId === "emperor-manifesto")) return 0;
      // Search newest-first so an old expired incident does not hide a newer one.
      const trigger = [...state.history].reverse().find(
        (h) => h.cardId === "emperor-billionaire",
      );
      if (!trigger) return 0;
      const delay = state.turn - trigger.turn;
      if (delay < 2 || delay > 5) return 0;
      return 8;
    },
  },
];
