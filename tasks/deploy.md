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
- GitHub Actions deploys on pushes to `main` using Node 22, `npm install`,
  `npm run build`, and `pages deploy dist --project-name=global-pause`.

## Work Map

- [active] Keep deployment discoverable as its own surface because release
  mechanics, public feedback loops, and game-outcome tracking are distinct from
  app implementation.
- [future] Coordinate with `tasks/playtesting.md` before treating a public
  deploy as ready for broader feedback loops.
- [future] Add deploy dry-run or preview guidance if deployment changes become
  frequent or risky.

## Agent Cache

- For build/deploy/tooling changes, inspect `.github/workflows/deploy.yml`,
  `wrangler.toml`, `package.json`, and `vite.config.ts`.
- Run at least `npm run build` before changing deployment behavior.
- App checks such as `npm run check` and `npm run test:e2e` validate local
  behavior, not Cloudflare secrets, Pages project settings, or post-deploy
  public accessibility.
- Do not change deploy credentials, GitHub secrets, Cloudflare project settings,
  or production routing without Jörn approval.

## Pruned / Stale

- Treat deploy success as operational state, not project-completion evidence.
