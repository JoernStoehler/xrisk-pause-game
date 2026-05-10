# Content Roadmap

## Status
- State: active
- Last updated: 2026-05-10
- Source surfaces: `design/`, `literature/`, `src/data/cards/`
- Refresh when: card concepts, domain model, or generated card exports change

## Steering Cache

- [Jörn] The game should teach that a global AI pause treaty could work while
  making blatant misunderstandings easier to recognize.
- [Jörn] Expert-grounded content is draft until Jörn approves it.
- [active] The geopolitical model needed strengthening around corruption,
  institutional capture, and adversary influence.

## Work Map

- [active] Review and revise card text by related card groups, not only
  isolated cards.
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

- `npm run cards` refreshes `design/cards-export.md` and
  `public/cards-map.html`.
- New card files should export a `Card[]` array and be added to
  `src/data/cards/groups.ts`.
- After `npm run cards`, inspect generated diffs for card count, grouping,
  hidden-state/history/tag graph edges, and review-text quality.
- Current `design/cards-export.md` omits useful review metadata such as tags,
  hidden effects, pool weights, gating, source comments, and source line
  references.
- Use `npm run cli auto 20` or a larger batch for balance-sensitive content
  changes.
- Current CLI autoplay samples only left/right choices, so down-choice content
  is under-tested by balance runs.
- If one resource death dominates more than about 40 percent of deaths, inspect
  all sources and sinks for that resource before tuning isolated deltas.

## Pruned / Stale

- Old balance observations from the pre-overhaul small card set are stale.
