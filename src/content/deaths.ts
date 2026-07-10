import type { DeathCause, ResourceKey } from "../engine/state";

export const DEATH_MESSAGES: Record<
  ResourceKey,
  Record<DeathCause["extreme"], string[]>
> = {
  political: {
    depleted: [
      "The council withdrew your mandate. The pause still exists on paper, but no government will spend capital enforcing it.",
    ],
    overloaded: [
      "ISIA became the story. Governments united to restrain the agency before the agency could restrain unsafe AI work.",
    ],
  },
  intelligence: {
    depleted: [
      "The agency lost the picture. By the time inspectors knew where to look, the relevant training run was already over.",
    ],
    overloaded: [
      "Monitoring became total enough to destroy cooperation. Serious actors moved fully underground.",
    ],
  },
  safety: {
    depleted: [
      "Safety work never caught up. The pause bought time, but the agency failed to turn time into usable knowledge.",
    ],
    overloaded: [
      "The safety program produced capabilities faster than containment practices could absorb them.",
    ],
  },
  algorithmic: {
    depleted: [
      "Capability progress stalled in a way the current model did not expect. This placeholder ending marks a state-schema edge case.",
    ],
    overloaded: [
      "Public algorithmic progress lowered the compute threshold below what the enforcement model could track.",
    ],
  },
};

export function getDeathMessage(cause: DeathCause, decisionCount: number): string {
  const messages = DEATH_MESSAGES[cause.resource][cause.extreme];
  return `${messages[decisionCount % messages.length]} (${decisionCount} decisions survived.)`;
}
