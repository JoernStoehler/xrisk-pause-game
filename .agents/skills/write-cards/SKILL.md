---
name: write-cards
description: Use before creating, editing, reviewing, or rebalancing pause-game cards in `src/data/cards/**`, `design/card-concepts.md`, or generated card review artifacts.
---

# Write Cards

## TODO For Jörn

This skill is intentionally a placeholder after the `msc-math` harness port.
Jörn should write or approve the durable card workflow before agents treat this
as a settled content instruction surface.

Until then, agents using this skill should:

- read `AGENTS.md`, `ARCHITECTURE.md`, `PROGRESS.md`, and relevant design
  files;
- inspect `src/engine/types.ts`, `src/data/cards/examples.ts`, and nearby card
  files before editing;
- run `npm run cards` after TypeScript card edits;
- run `npm run check` for TypeScript/data/app changes;
- use `npm run cli auto 20` or a larger simulation batch for balance-sensitive
  changes;
- ask Jörn before finalizing card concepts, major takeaway changes,
  player-facing central terminology, or expert predictions.
