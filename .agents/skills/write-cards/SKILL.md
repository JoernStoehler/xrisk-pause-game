---
name: write-cards
description: "Rules and reference for creating or modifying pause-game cards in `src/data/cards/**`, including card text, tags, deltas, pool weights, hidden state, and source-grounded content checks. Use before editing card files or card-writing design guidance."
---

# Card Writing Guide

Read before creating or modifying cards:

1. **This file** — content rules, tone, balance, card categories
2. **`src/data/cards/examples.ts`** — annotated examples of every card pattern
3. **`src/engine/types.ts`** — `CardScript`, `PoolEntry`, `GameState` type definitions

Jörn reviews card output on the QA page (`#qa`) and via `npm run cli cards`,
not this file. Edit this file only when cards keep coming out wrong in the same
repeated way.

## Source Integrity

When cards rely on specific literature claims:

- verify unusual terminology against `literature/` before presenting it as
  source language;
- treat `design/iabied-vocabulary.md` as the current cache of verified IABIED
  terms and known past fabrications;
- if a scenario depends on a specific mechanism or historical claim, cite it in
  the relevant design doc before turning it into card prose;
- do not invent "authoritative-sounding" labels and attach them to IABIED,
  MIRI, treaty text, or other sources.

## The Game's Core Thesis

You are the Director-General of the ISIA (International Superintelligence &
Intelligence Agency), enforcing an international treaty banning ASI
development. The game teaches: **enforcement of a global AI pause is
structurally hard**. The player learns this by dying repeatedly from different
failure modes.

The core message: "With a pause we can survive superintelligence... if nothing
goes wrong and a lot goes right."

The structural hardness comes from four tensions that cannot all be resolved
simultaneously:

1. **Monitoring vs. sovereignty** — Preventing ASI requires intrusive
   verification. This looks authoritarian and drives nations to leave the
   treaty.
2. **Verification vs. trust** — Relying on good faith means nations cheat.
   Heavy verification signals distrust and erodes the coalition.
3. **Research suppression vs. innovation** — Banning dangerous AI research also
   blocks beneficial uses. Nations view this as economic sabotage and
   competitive disadvantage.
4. **Enforcement vs. backlash** — Sanctioning violators requires political
   power. Accumulating that power makes ISIA itself the threat.

Every card should sit inside one or more of these tensions.

## The Treaty

Key mechanisms from the treaty (see `literature/iabied-treaty.md` for full
text):

- **Compute caps**: Training runs above FLOP thresholds are prohibited. Small
  training (~1e22 FLOP on 16 H100s) is permitted.
- **Centralized chip infrastructure**: All AI chip clusters above threshold
  size must be in monitored facilities ("declared CCCs").
- **On-site verification**: ISIA inspectors, tamper-proof cameras, and
  chip-use monitoring at every declared CCC.
- **Supply chain tracking**: ISIA monitors fabrication, assembly, testing, and
  installation of AI chips.
- **Non-party restrictions**: Nations that do not sign are denied AI chip
  sales, cloud access, and frontier model APIs.
- **Restricted research**: Bans precursor ASI research.
- **Research verification**: Domestic enforcement agencies plus ISIA auditors
  embedded in high-risk organizations.

## Resources

| Key | Name | At 0 | At 100 | Meaning |
|---|---|---|---|---|
| `pol` | Political Power | Voted out | Hubris / capture / crash | Mandate, budget, authority, public support |
| `int` | Intelligence | Gone dark | Panopticon | Monitoring, surveillance, information quality |
| `saf` | Safety Progress | Running out of time | The cure kills | Alignment research advancement |
| `alg` | Algorithmic Progress | Should not deplete | Consumer hardware sufficient | Capability knowledge, shrinking lethal threshold |

All start at 50. `saf` and `alg` are monotone in the expert model, though the
engine still treats them as ordinary 0-100 bars.

## Card Syntax

Cards use a registry pattern. Each file imports `register` and calls it with
one or more `Card` objects. No exports needed.

```typescript
import { register } from "./registry";

register({
  id: "kebab-case-id",
  tags: ["topic-a", "topic-b"],
  speaker: "Role Title",
  text: "1-2 sentences...",
  left: { label: "Action phrase", effects: { pol: 5, int: -8 } },
  right: { label: "Action phrase", effects: { pol: -5, int: 8 } },
  poolWeight: () => 1.5,
});
```

To add a new card:

1. Create a `.ts` file in `src/data/cards/`.
2. Import `register` and call it.
3. Add a side-effect import in `index.ts`.

Use `hiddenEffects` to modify `state.hidden` when the card needs latent state.

## Tags

Every card should have `tags: string[]` with 1-3 content-topic tags that
describe what the card is about, not how it works mechanically.

Good tags:
- `"intelligence-agencies"`
- `"compute-monitoring"`
- `"chip-production"`
- `"civil-liberties"`
- `"treaty-compliance"`
- `"alignment-research"`

Bad tags:
- `"crisis"`
- `"3-choice"`
- `"turn-gated"`
- `"incident"`

Tags drive the card map visualization. Prefer descriptive kebab-case and reuse
existing tags when they express a real content relationship.

## Text Guidelines

- **50-100 words.** The card is small.
- **Present tense, concrete scenario.**
- **Speaker is briefing you, not narrating a report.**
- **No exposition.** The text presents the situation; effects teach the lesson.
- **Both choices must feel defensible.**

## Delta Guidelines

- Touch 2-3 resources per choice.
- Deltas usually range from `±3` to `±15`.
- No safe options. Every choice should cost something.

## Weight Guidelines

- Always-on routine cards: weight 1-2
- State-gated incidents: weight 1-2
- History-triggered chains: weight 3 when triggered
- Crisis cards: weight 5, gated on resource extremes
- Late-game escalation: weight 1.5-2.5, gated on turn count

## Card Categories

### Routine

Bread-and-butter cards. Budget decisions, PR, hiring, diplomatic meetings.

### Incident

Enforcement events such as rogue labs, chip smuggling, and whistleblowers.

### Political

Treaty negotiations, hearings, coalition management.

### History-triggered

Consequences of earlier choices. These should eventually become a major source
of narrative texture.

### Crisis

Thermostat cards that appear near resource extremes and offer recovery at steep
cost elsewhere.

### Late-game

Escalation cards for later turns: capability jumps, distributed training, novel
attack vectors.

### Filler

Low-stakes flavor cards. Keep deltas small.

## Patterns

### Degraded Variants

Use dynamic fields when the same event should read differently at different
resource levels. This is especially useful for teaching that low intelligence
makes every later choice worse.

### History Chains

Use `poolWeight` checks against `state.history` for immediate follow-ups and
delayed consequences. Prefer asymmetric consequences: the left and right choice
on the parent card should often lead to different future cards.

## Review Checks

Before calling a card batch done:

- verify any specialized source terminology;
- scan for obviously one-sided or fake choices;
- scan for tags that describe mechanics instead of subject matter;
- check that new history chains actually trigger from real card IDs;
- regenerate `npm run cards` if the batch changes card topology enough that
  Jörn will review through the export or card map.
