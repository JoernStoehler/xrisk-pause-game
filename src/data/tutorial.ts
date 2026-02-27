import type { TutorialCard } from "../engine/types";

export const TUTORIAL_CARDS: TutorialCard[] = [
  {
    id: "tutorial-welcome",
    speaker: "Deputy Director",
    text: "Welcome, Director-General. The international treaty banning ASI development is now your responsibility. Every nation is watching.",
    leftLabel: "I'm ready",
    rightLabel: "Tell me more",
  },
  {
    id: "tutorial-resources",
    speaker: "Deputy Director",
    text: "Your authority rests on four pillars: public Trust, agency Funding, Intelligence capability, and political Leverage. Let any one collapse — or grow unchecked — and you're finished.",
    leftLabel: "Understood",
    rightLabel: "Go on",
    highlightResources: true,
  },
  {
    id: "tutorial-mechanics",
    speaker: "Deputy Director",
    text: "Every petition demands a choice. Swipe the portrait left or right — or use arrow keys. Watch how each option affects your resources before you commit.",
    leftLabel: "Got it",
    rightLabel: "Let's begin",
  },
];
