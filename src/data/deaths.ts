import type { ResourceKey } from "../engine/types";

export const DEATH_MESSAGES: Record<
  ResourceKey,
  { depleted: string[]; overloaded: string[] }
> = {
  trust: {
    depleted: [
      "The public lost all faith in your agency. Protests forced your resignation. Without oversight, the labs raced ahead unchecked.",
      "A vote of no confidence. Every nation pulled their inspectors home. The treaty exists on paper only.",
      "Nobody believes ISIA anymore. A leaked poll shows 90% of citizens want the agency abolished. The labs don't even bother hiding.",
    ],
    overloaded: [
      "Your promises outgrew reality. When a catastrophic AI failure occurred, the gap between expectation and truth destroyed everything.",
      "You became the face of AI safety — and the scapegoat. When a lab breached containment, the world blamed you personally. The agency didn't survive the fallout.",
      "Overpromised and underdelivered. The public expected you to prevent all AI risks. When one slipped through, trust collapsed overnight.",
    ],
  },
  funding: {
    depleted: [
      "Your agency ran out of money. Inspectors went home. The labs noticed immediately.",
      "The last paycheck bounced. Your top analysts took private-sector jobs. Within weeks, three nations withdrew from the treaty.",
      "Budget zero. The headquarters went dark. A blog post titled 'The Day ISIA Died' went viral.",
    ],
    overloaded: [
      "Billions poured in with no accountability. Politicians called it a slush fund. The backlash dismantled everything you built.",
      "An audit revealed ISIA spending more than most nations' defense budgets. The 'defund the agency' movement became unstoppable.",
      "Your budget grew so large it became a political target. A coalition of fiscal hawks and AI accelerationists found common cause in cutting you down.",
    ],
  },
  intel: {
    depleted: [
      "You were flying blind. By the time you noticed the rogue training run, it was already too late.",
      "Zero visibility. A nation-state AI program reached dangerous capabilities months ago — you only found out from a news article.",
      "Without intelligence, you couldn't tell the compliant labs from the cheaters. The treaty became meaningless.",
    ],
    overloaded: [
      "Your surveillance apparatus became the thing everyone feared. Nations withdrew from the treaty to escape your all-seeing eye.",
      "Three whistleblowers. Five investigative documentaries. Your intelligence network was bigger than the NSA's. The world decided ISIA was the real threat.",
      "Your monitoring tools could read private messages, track researchers, and predict behavior. A free society and your agency could not coexist.",
    ],
  },
  leverage: {
    depleted: [
      "Without political backing, your orders became suggestions. Labs ignored you openly.",
      "You had no allies left. When a major lab announced it would resume prohibited research, no one returned your calls.",
      "Politically invisible. The treaty signatories forgot you existed. A new international AI body was formed — without ISIA.",
    ],
    overloaded: [
      "Your agency became more powerful than any government. A coalition formed not to stop AI, but to stop you.",
      "The Director-General of ISIA was called 'the most dangerous person alive' — not because of AI, but because of unchecked power. The backlash was swift.",
      "You could sanction nations, freeze assets, and override sovereignty. Eventually the world decided that was worse than the risk you were meant to prevent.",
    ],
  },
};
