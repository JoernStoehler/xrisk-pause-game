# Deploy

This is the release and public-availability map. Deployment is not the project
endpoint; the project goal is downstream public understanding over months.

## Target

- Cloudflare Pages project: `global-pause`.
- Stable app URL: `https://global-pause.pages.dev/`.
- Stable card map URL: `https://global-pause.pages.dev/cards-map.html`.
- `wrangler.toml` contains the Pages project name.
- `.github/workflows/deploy.yml` owns the GitHub Actions deploy path.

## GitHub Actions

Pushes to `main` run a validation job before deploy:

- `npm ci`
- `npm run check`
- Playwright Chromium install
- `npm run test:e2e`
- `npm run cards`
- dirty check for `design/cards-export.md`

The deploy job regenerates card artifacts so ignored `public/cards-map.html` is
present in `dist`, runs `npm run build`, and deploys `dist` with Wrangler to
Cloudflare Pages.

## Local Release Checks

Use the smallest relevant check set. For deploy/tooling changes, inspect
`.github/workflows/deploy.yml`, `wrangler.toml`, `package.json`, and
`vite.config.ts`, and run at least:

```bash
npm run build
```

For release-sensitive app changes, add the relevant app checks from
`AGENTS.md`, such as `npm run check`, `npm run test:e2e`, and `npm run cards`.

## Preview Deploys

The current GitHub Actions deploy path runs on pushes to `main`. Branch or
commit Cloudflare preview deployment is possible future deploy work, but it is
not configured as a repo-documented workflow yet.

Use the `deploy` skill when adding preview workflow guidance. Update this file
only for the resulting current deploy state, release checks, public URLs, or
approval boundaries. Do not change deploy credentials, GitHub secrets,
Cloudflare project settings, or production routing without Jörn approval.

## Public Internal Surfaces

- `#qa` is intentionally reachable by URL for internal review.
- `?playtest=1` is intentionally reachable by URL for controlled playtest
  exports.

These are acceptable for controlled review/playtest links, but should be gated,
removed, or explicitly accepted before a broader public launch where spoilers or
copied hidden-state logs would matter.

## Boundaries

Do not change deploy credentials, GitHub secrets, Cloudflare project settings,
or production routing without Jörn approval.

Local checks validate code, generated review freshness, and build behavior.
They do not validate Cloudflare secrets, Pages project settings, or public
post-deploy accessibility.
