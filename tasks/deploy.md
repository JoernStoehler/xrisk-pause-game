# Deploy Roadmap

## Status
- State: active
- Last updated: 2026-05-10
- Source surfaces: `.github/workflows/deploy.yml`, `wrangler.toml`,
  `package.json`, `vite.config.ts`, `dist/`, Cloudflare Pages
- Refresh when: build output, deploy workflow, Cloudflare config, package
  scripts, environment assumptions, or public release process changes

## Steering Cache

- Deployment is not the project endpoint. The project goal is measured by
  downstream public understanding and feedback over months, not by a successful
  Pages upload.
- The current deploy target is Cloudflare Pages project `global-pause`.
- GitHub Actions deploys on pushes to `main` only after a `validate` job passes
  on Node 22: `npm ci`, `npm run check`, Playwright Chromium install,
  `npm run test:e2e`, `npm run cards`, and a dirty check for
  `design/cards-export.md`. The workflow uses Node 24-native GitHub actions.
  The deploy job then rebuilds generated card artifacts so ignored
  `public/cards-map.html` is present in `dist`, runs `npm run build`, and runs
  `npx wrangler pages deploy dist --project-name=global-pause` directly with
  Cloudflare secrets.

## Work Map

- [active] Keep deployment discoverable as its own surface because release
  mechanics, public feedback loops, and game-outcome tracking are distinct from
  app implementation.
- [done] 2026-05-10 post-change deploy verification: GitHub Actions validate
  and deploy jobs passed after switching to Node 24-native actions and direct
  `npx wrangler`; stable app and `cards-map` URLs returned 200.
- [future] Coordinate with `tasks/playtesting.md` before treating a public
  deploy as ready for broader feedback loops.
- [future] Add deploy dry-run or preview guidance if deployment changes become
  frequent or risky.

## Agent Cache

- For build/deploy/tooling changes, inspect `.github/workflows/deploy.yml`,
  `wrangler.toml`, `package.json`, and `vite.config.ts`.
- Run at least `npm run build` before changing deployment behavior.
- App checks such as `npm run check`, `npm run test:e2e`, and `npm run cards`
  validate local behavior and generated review freshness, not Cloudflare
  secrets, Pages project settings, or post-deploy public accessibility.
- Public smoke targets: `https://global-pause.pages.dev/` and
  `https://global-pause.pages.dev/cards-map.html`. Wrangler prints
  commit-specific Pages URLs during deploy; use those for commit-level smoke
  checks when needed.
- Do not change deploy credentials, GitHub secrets, Cloudflare project settings,
  or production routing without Jörn approval.

## Pruned / Stale

- Treat deploy success as operational state, not project-completion evidence.
