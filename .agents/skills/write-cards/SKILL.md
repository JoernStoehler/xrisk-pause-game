---
name: write-cards
description: "Use before creating, editing, reviewing, or rebalancing pause-game cards in `src/data/cards/**`, `design/card-concepts.md`, or generated card review artifacts. Covers Card syntax, tags, source checks, hidden state, pool weights, and card QA."
---

# Write Cards

## Start Here

Read only the files needed for the requested card work:

- `TASKS.md` for current maturity and blockers.
- `src/engine/types.ts` for the live `Card`, `ChoiceSpec`, resource, hidden
  state, and history types.
- `src/data/cards/examples.ts` for supported card patterns.
- `src/data/cards/index.ts` for the current card module registry.
- `design/domain-model.md` for the settled game model.
- `design/card-concepts.md` for intended card ideas, duplicate notes, and topic
  grouping.
- `design/iabied-vocabulary.md` when using IABIED terms or checking whether a
  term is fabricated or misattributed.

## Card Shape

- Cards are `Card` objects registered with `register(...)` in a file under
  `src/data/cards/`.
- Required fields: `id`, `speaker`, `text`, `left`, `right`, and
  `poolWeight`.
- Optional fields: `down`, `color`, `tags`, `idea`, dynamic text/labels,
  `hiddenEffects`, and choice `enabled`.
- Effects use the four resource keys from `src/engine/types.ts`: `pol`, `int`,
  `saf`, `alg`.
- Hidden state is numeric. Use clear snake_case keys and check existing reads
  and writes before adding a new key.
- New files must be imported from `src/data/cards/index.ts`; otherwise their
  cards are not in the pool.

## Writing Rules

- Use `design/card-concepts.md` as the concept backlog when implementing new
  content. Preserve card IDs listed there unless there is a concrete reason to
  rename them.
- Put the primary content tag first. Reuse existing tag wording from nearby
  cards or `design/card-concepts.md` unless introducing a genuinely new topic.
- Keep each choice legible as a director-level decision. The player should see
  the tradeoff before resource previews confirm it.
- Prefer specific institutional mechanisms over generic drama: inspections,
  chip accounting, treaty votes, public legitimacy, smuggling, capture,
  safety bottlenecks, and algorithmic threshold movement.
- Use degraded variants, history chains, or hidden state when the same event
  should depend on previous choices or current institutional strength.
- Use crisis cards as high-weight resource-extreme stabilizers, not as routine
  flavor.
- Keep `saf` and `alg` monotone unless the engine/design model changes.

## Source Integrity

- Do not invent treaty terms, IABIED vocabulary, citations, or historical
  analogies. If a card names a source-backed mechanism, check the relevant
  `literature/` or `design/research/` file.
- When using IABIED language, check `design/iabied-vocabulary.md`. Avoid terms
  listed there as fabricated or misattributed.
- If a claim is based on current events or current policy, verify it with
  current sources before encoding it into card text or design notes.
- Distinguish game extrapolation from source fact in comments or design notes.
  Card text can be fictional, but the underlying mechanism should be traceable.

## Review

- Run `npm run cards` after card edits and inspect the changed sections in
  `design/cards-export.md`.
- Use `public/cards-map.html` or `design/cards-export.md` to check duplicates,
  isolated tags, hidden-state chains, and repeated speakers.
- For balancing work, follow the balance process in `TASKS.md` and run CLI
  simulations before tuning deltas or weights.
- Minimum validation after TypeScript card edits:

```bash
npm run typecheck
npm run cards
npm run cli auto 20
```

- For broader card changes, run `npm run check`.
