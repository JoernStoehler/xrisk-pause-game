---
name: deploy
description: Use when Codex inspects, diagnoses, documents, or changes this repo's deployment and release workflow, including Cloudflare Pages, `.github/workflows/deploy.yml`, `wrangler.toml`, deploy-related package scripts, production deploys, branch/commit preview deploys, deploy failures, or release-readiness checks.
---

# Deploy

Use this skill for deployment surfaces, not for ordinary app changes that only
need local validation.

Start from source truth:

- `DEPLOY.md`: release and public-availability map.
- `.github/workflows/deploy.yml`: current GitHub Actions deploy workflow.
- `wrangler.toml`: Cloudflare Pages project/output config.
- `package.json`: build, check, test, and card-export commands.
- `AGENTS.md` and `FACTSHEET.md`: project-success and approval boundaries.

Keep `DEPLOY.md` short. Put recurring deploy workflow guidance in this skill;
update `DEPLOY.md` only for current deploy state, public URLs, release checks,
approval boundaries, and important operator-facing facts.

## Boundaries

- Deployment is not project success. State which feedback loop a deploy change
  improves: release reliability, public availability, playtesting, expert
  review, or future-agent work.
- Do not change deploy credentials, GitHub secrets, Cloudflare project
  settings, or production routing without Jörn approval.
- Do not treat branch or commit preview deploys as configured until source
  files and/or a successful run show the workflow exists.
- Keep public internal surfaces in view: `#qa` and `?playtest=1` are acceptable
  for controlled review/playtest links, but need gating, removal, or explicit
  acceptance before broader public launch if spoilers or copied hidden-state
  logs matter.

## Workflow

- For deploy failures, inspect the exact failing job or command first. Compare
  it with `DEPLOY.md`, `.github/workflows/deploy.yml`, `wrangler.toml`, and
  `package.json` before editing.
- For deploy workflow changes, run the smallest relevant local checks. At
  minimum, inspect deploy source files and run `npm run build`; add
  `npm run check`, `npm run test:e2e`, and `npm run cards` when app behavior,
  generated artifacts, or release-sensitive surfaces could be affected.
- For Cloudflare Pages preview work, verify current Wrangler/GitHub Actions
  behavior before writing commands. Prefer local `npx wrangler pages deploy
  --help` and current official Cloudflare docs over remembered syntax.
- For branch or commit preview deploys, make the workflow explicit in source
  files and keep production `main` deployment separate. Record the resulting
  current state in `DEPLOY.md` after the workflow exists.
- For release notes or review packets, distinguish local validation, GitHub
  Actions validation, Cloudflare deployment success, and actual public
  post-deploy accessibility.
