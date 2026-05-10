// Source: event-map #political--corporate-lobbying
// Rationale: teaches that corporate hypocrisy is structural — companies publicly
//   support the pause while privately funding opposition. Intel sources are finite.
// Dynamic: corporate interests structurally opposed to pause
// Category: political (turn-gated)

// Source: event-map #corporate--acquisition-consolidation
// Rationale: teaches that regulatory capture doesn't require corruption — market
//   dynamics produce it. The treaty's compliance costs favor big companies.
//   Big companies accumulate political leverage. Political leverage constrains enforcement.
// Dynamic: institutions rot from within; enforcement vs. backlash
// Category: political (turn-gated)

// Source: event-map #corporate--hypocrisy-exposed
// Rationale: teaches that corporate hypocrisy is structural — incentives guarantee it.
//   Companies that publicly support the pause while privately undermining it.
//   Even illicit research can produce genuine safety advances.
// Dynamic: institutions rot from within; the cure and the disease
// Category: crisis (turn-gated)

import type { Card, GameState } from "../../engine/types";

export const institutionalCaptureCards: Card[] = [
  {
    id: "corporate-lobbying",
    tags: ["corporate-lobbying", "political-support"],
    idea: "AI companies publicly support pause while secretly funding opposition",
    speaker: "Intelligence Analyst",
    text: "Three largest AI companies formed a lobbying alliance. They publicly support the pause. A journalist contact has evidence they're privately funding anti-enforcement candidates. Publishing burns the source.",
    left: {
      label: "Leak to independent press",
      effects: { pol: 5, int: -8 },
    },
    right: {
      label: "Confront companies privately",
      effects: { pol: -3, int: -3 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 5) return 0;
      return 1.5;
    },
  },
  {
    id: "acquisition-consolidation",
    tags: ["corporate-lobbying", "treaty-compliance"],
    idea: "mega-corp acquiring competitors to control 38% of permitted AI compute",
    speaker: "Legal Counsel",
    text: "Apex AI — market cap $4.2 trillion, larger than most nations' GDP — is acquiring three mid-size compliance companies. Post-merger, they'd control 38% of all permitted AI compute in treaty nations. Their CEO's argument: 'We are the compliance layer the treaty needs. Small companies cut corners. We don't. Consolidation makes monitoring easier.' He's not wrong — monitoring 50 facilities IS easier than 5,000. But if Apex threatens non-cooperation, we lose access to a third of global AI infrastructure.",
    left: {
      label: "Block the acquisition",
      effects: { pol: -10, int: -3 },
    },
    right: {
      label: "Approve with enhanced monitoring conditions",
      effects: { pol: -3, int: 5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 8) return 0;
      return 1.5;
    },
  },
  {
    id: "hypocrisy-exposed",
    tags: ["corporate-lobbying", "rogue-actors"],
    idea: "corporate ally exposed running shadow program while chairing responsible AI group",
    speaker: "Investigative Journalist",
    text: "Three-part series in the Financial Times: 'The Pause Profiteers.' Nexus AI — whose CEO chairs the 'Responsible AI Alliance' and appeared in our recruitment videos — ran a shadow program at a Singapore subsidiary. Multiple sub-threshold runs chained together for above-threshold results. Their internal memos call it 'threshold arbitrage.' They also donated $45M to anti-enforcement candidates while the CEO publicly called for stronger enforcement. But there's a complication: the shadow program produced a genuine corrigibility insight our team hadn't considered.",
    left: {
      label: "Prosecute aggressively — seize and classify",
      effects: { pol: 5, int: -5, saf: -5 },
    },
    right: {
      label: "Negotiate — transfer research to ISIA oversight",
      effects: { pol: -5, saf: 5, int: -3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    poolWeight: (state: GameState) => {
      if (state.turn < 7) return 0;
      return 2;
    },
    color: "#ef4444",
  },
];
