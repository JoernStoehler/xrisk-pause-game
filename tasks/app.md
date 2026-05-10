# App Roadmap

## Status
- State: active
- Last updated: 2026-05-10
- Source surfaces: `src/`, `e2e/`, `package.json`
- Refresh when: engine, UI flow, input handling, or app validation changes

## Steering Cache

- Mobile is primary.
- Desktop can stay phone-app-like unless a specific desktop use case becomes
  important.
- Add features only when the consumer is known enough to justify them.

## Work Map

- [active] Preserve settled engine/swipe/theme behavior while content overhaul
  proceeds.
- [future] Rebalance after content pass.
- [future] Rework title/death screen polish after content and takeaway message
  are clearer.
- [future] Revisit achievements/card collection after content overhaul.
- [cut] Do not add settings until tutorial skip, accessibility, or another real
  configuration need appears.

## Agent Cache

- `npm run check` covers typecheck, lint, build, and unit tests.
- `npm run test:e2e` is relevant for UI flow, screen transition, input, or
  mobile interaction changes.
- `npm run cards` is required after TypeScript card edits.

## Pruned / Stale

- None yet.
