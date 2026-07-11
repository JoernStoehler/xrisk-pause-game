---
name: deploy
description: Validate and deploy this game's Cloudflare Pages builds. Use for internal preview deployment, production release, Cloudflare Pages or Wrangler failures, deployment workflow changes, routing, or release-readiness checks.
---

# Deploy

- Read `package.json`, `wrangler.toml`, and `.github/workflows/deploy.yml` as source truth before changing commands.
- Treat `global-pause` as the existing Cloudflare Pages project and `dist` as generated build output.
- Keep credential values in the existing environment or GitHub secrets. Never print or commit them.
- Test API-token authentication with `npx wrangler pages project list`, not `wrangler login`. A token-bearing environment is already authenticated; OAuth login will reject it. Check variable presence without printing values.
- The main checkout's ignored `.env` is the local Wrangler credential source. Git worktrees do not inherit untracked files. In a nested `.worktrees/<name>` worktree, verify `.env` is ignored, then link it to `../../.env`; never read, copy, print, or commit the secret file.
- Run `npm run check`, `npm run test:e2e`, and `npm audit --audit-level=high` before a review deployment.
- Before uploading, use authenticated Cloudflare state to verify the project's actual production branch, custom-domain routing, and whether Cloudflare Access protects preview URLs. Do not infer those facts from `wrangler.toml` or the local git branch.
- Deploy only after Access is verified for previews or Jörn explicitly accepts a publicly addressable unlisted preview. Use a branch name that is verified not to be the production branch:

  ```bash
  npx wrangler pages deploy dist --project-name=global-pause --branch <preview-branch>
  ```

- A Pages preview normally avoids changing the production site, but its URL is publicly addressable unless Cloudflare Access is configured. `X-Robots-Tag: noindex` prevents indexing; it is not access control. State the verified production-branch, custom-domain, and Access status when handing off a link.
- After deployment, check response headers and run the browser suite against the returned URL with `PLAYWRIGHT_BASE_URL=<preview-url> npm run test:e2e`. Distinguish build success, upload success, accessibility of the URL, and game readiness.
- Require Jörn approval before deploying to the production branch, changing the Pages project, altering Access or domain settings, rotating credentials, or restoring automatic production deployment.
