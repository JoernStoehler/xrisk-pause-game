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
- [active] Make validation choice match the touched surface; `npm run check`
  passing does not mean engine/card/UI behavior is fully covered.
- [future] Rebalance after content pass.
- [future] Rework title/death screen polish after content and takeaway message
  are clearer.
- [future] Revisit achievements/card collection after content overhaul.
- [future] Add CLI support for down-choice sampling if three-choice cards
  become balance-relevant.
- [cut] Do not add settings until tutorial skip, accessibility, or another real
  configuration need appears.

## Agent Cache

- `npm run check` covers typecheck, lint, build, and unit tests.
- Current Vitest coverage is a small engine/share-text suite. Engine behavior
  changes should add focused tests for affected contracts, such as hidden
  state, disabled/down choices, draw eligibility, anti-repeat fallback,
  death/victory, RNG, or save compatibility.
- `npm run test:e2e` covers mobile-first title/tutorial/drag/keyboard/death
  flows through Playwright. It does not cover broad desktop layout, deployed
  preview behavior, share/clipboard behavior, audio/mute persistence, or the
  generated card-map page.
- `npm run cards` is required after TypeScript card edits.
- For build/deploy/tooling changes, inspect `package.json`, `vite.config.ts`,
  `playwright.config.ts`, `wrangler.toml`, and `.github/workflows/deploy.yml`;
  run at least `npm run build`.

## Pruned / Stale

- None yet.
