# Content Roadmap

## Status
- State: active
- Last updated: 2026-05-14
- Source surfaces: `design/`, `literature/`, `src/data/cards/`
- Refresh when: card concepts, domain model, or generated card exports change

## Steering Cache

- [Jörn] The game should teach that a global AI pause treaty could work while
  making blatant misunderstandings easier to recognize.
- [Jörn] Expert-grounded content is draft until Jörn approves it.
- [active] The geopolitical model needed strengthening around corruption,
  institutional capture, and adversary influence.
- [Jörn] Current bottleneck is expert-model extraction. Broad card review,
  rewrites, and new expert-grounded mechanisms should wait until Jörn marks the
  extracted proposal ready for integration review.

## Work Map

- [blocked] Review and revise card text by related card groups after the
  expert-model proposal is ready; doing broad card review before then is likely
  wasteful.
- [active] Keep source-grounded mechanisms traceable from design/literature
  notes to card concepts and implementation.
- [active] Add or restore a usable card/research workflow before large-scale
  content edits; current skills are honest TODO placeholders.
- [active] Extend card corpus validation when new content invariants become
  important for balance/content conclusions.
- [active] Cards may be static 2-or-3 choice structures. Prefer binary choices
  where they preserve the decision, but keep genuine three-way decisions instead
  of squeezing them into two options. Locked/unlocked alternatives should be
  separate cards, not dynamic option availability.
- [blocked] Implement geopolitics cards only after Jörn approves the relevant
  concepts and mechanism framing.
- [future] Portrait regeneration waits until card content stabilizes.
- [future] More history-triggered chains and degraded variants wait until card
  content stabilizes.

## Agent Cache

- `npm run cards` refreshes `design/cards-export.md` and ignored
  `public/cards-map.html`. The deploy job also runs it before build so the
  ignored map is included in deployed assets.
- New card files should export a `Card[]` array and be added to
  `src/data/cards/groups.ts`.
- After `npm run cards`, inspect generated diffs for card count, grouping,
  hidden-state/history/tag graph edges, and review-text quality.
- Current `design/cards-export.md` includes source files and line numbers,
  group/tag/speaker summaries, initial pool weights, hidden read/write aids,
  dynamic-enabled markers, and per-card review text. These are lightweight
  review aids, not semantic proof.
- Static 2-or-3 choices are the intended direction, but this is not yet a
  passing invariant: `src/data/cards/content.test.ts` keeps an expected-failing
  guard until existing dynamic `enabled` options are migrated or deliberately
  retained.
- Use `npm run cli auto 20` or a larger batch for balance-sensitive content
  changes.
- Current CLI autoplay samples available left/right/down choices, so it is a
  smoke path rather than a controlled balance proof.
- If one resource death dominates more than about 40 percent of deaths, inspect
  all sources and sinks for that resource before tuning isolated deltas.

## Pruned / Stale

- Old balance observations from the pre-overhaul small card set are stale.
