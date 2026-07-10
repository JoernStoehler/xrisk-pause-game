import type { TutorialCard } from "../engine/card";

export const TUTORIAL_CARDS: TutorialCard[] = [
  {
    id: "tutorial-1",
    speaker: "Deputy Director",
    text: "Cards are proposals from advisors. Swipe or use the buttons to choose how the director responds.",
    leftLabel: "Understood",
    rightLabel: "Continue",
  },
  {
    id: "tutorial-2",
    speaker: "Deputy Director",
    text: "The visible bars are still placeholder state variables. The new architecture is built so future cards can read and write a larger explicit world state.",
    leftLabel: "Show me",
    rightLabel: "Start",
    highlightResources: true,
  },
];
