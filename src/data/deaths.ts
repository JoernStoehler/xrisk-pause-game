// Draft death messages — causal autopsies that teach specific dynamics.
// One message per bar × extreme for now. Will expand after card content settles.
import type { DeathCause, ResourceKey } from "../engine/types";

export const DEATH_MESSAGES: Record<
  ResourceKey,
  { depleted: string[]; overloaded: string[] }
> = {
  pol: {
    depleted: [
      "The pause was never permanent — it was always a promise that could be broken. This election, it was.",
    ],
    overloaded: [
      "Everyone trusted the agency. Nobody checked whether it deserved that trust. When the answer turned out to be no, the trust didn't erode — it shattered.",
    ],
  },
  int: {
    depleted: [
      "You lost sight of what mattered — literally. Somewhere in the world, a training run you couldn't see produced something that saw everything.",
    ],
    overloaded: [
      "You watched everyone so closely that the ones who mattered most learned to hide where you'd never look.",
    ],
  },
  saf: {
    depleted: [
      "Every year, building ASI got a little easier. You needed a solution before the problem solved itself. You didn't find one.",
    ],
    overloaded: [
      "The most advanced AI safety research in history produced... the most advanced AI in history. Turns out those are the same thing.",
    ],
  },
  alg: {
    depleted: [
      // alg is a monotone accumulator — depleted shouldn't happen in normal play.
      // Fallback message in case engine checks it.
      "Algorithmic stagnation was a gift you didn't know you had. It won't last.",
    ],
    overloaded: [
      "Consumer hardware is now sufficient. Your enforcement was designed for datacenters, not living rooms. The threshold dropped below what anyone can monitor.",
    ],
  },
};

export function getDeathMessage(cause: DeathCause, turn: number): string {
  const messages = DEATH_MESSAGES[cause.resource]?.[cause.extreme];
  return messages?.[turn % messages.length] ?? `${cause.resource} ${cause.extreme}.`;
}
