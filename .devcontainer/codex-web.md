# Codex Web backup env: attempted checks (success/fail list)

Date run: **2026-05-13 UTC**.
Repo: `/workspace/xrisk-pause-game`.

This file is intentionally only a list of checks that were actually run here, with outcomes.

## Baseline environment checks

- ✅ `uname -a` succeeded.
- ✅ `whoami` succeeded (`root`).
- ✅ `pwd` succeeded (`/workspace/xrisk-pause-game`).
- ✅ `node -v` succeeded (`v20.20.2`).
- ✅ `npm -v` succeeded (`11.4.2`).
- ✅ `git --version` succeeded (`2.43.0`).
- ✅ `python3 --version` succeeded (`3.12.13`).

## Screenshots

- ✅ `npx playwright --version` succeeded (`1.56.1` installed).
- ❌ Playwright screenshot smoke test failed:
  - Command used a headless Chromium launch + screenshot to `/tmp/codex-web-shot.png`.
  - Failure: Playwright browser executable missing (`npx playwright install` needed).

Conclusion from actual run: **screenshot tooling package exists, but browser binaries were not installed, so screenshot capture failed.**

## Deployment-related checks

- ❌ `npx wrangler --version` failed.
- ❌ `npx wrangler whoami` failed.
- Failure reason in both cases: Wrangler requires Node `>=22`, current Node is `20.20.2`.

Conclusion from actual run: **deployment CLI checks are blocked in this env by Node version mismatch before auth is even checked.**

## Merge-to-main checks

- ✅ `git branch -a` succeeded.
- Result: only branch present is `work`; no `main` branch in this local clone.
- ⚠️ No merge test was possible because `main` does not exist locally and no remotes are configured.

Conclusion from actual run: **cannot test merge-to-main from this clone state.**

## Decryption checks

- ✅ `bash -n scripts/decrypt-literature.sh` succeeded (script syntax is valid).
- ❌ `bash scripts/decrypt-literature.sh` failed.
- Failure output: `age is not installed.`

Conclusion from actual run: **decryption failed due to missing `age` dependency in this environment.**

## Image generation

- ⚠️ Not run in this session.
- Reason: no image-generation command was executed in this repo during these checks.

Conclusion from actual run: **no empirical pass/fail result recorded yet for image generation in this backup environment.**

## Command log (exact commands executed)

```bash
npx playwright --version
node -e "const { chromium } = require('playwright'); (async()=>{const b=await chromium.launch(); const p=await b.newPage(); await p.goto('data:text/html,<h1>ok</h1>'); await p.screenshot({path:'/tmp/codex-web-shot.png'}); await b.close(); console.log('saved');})().catch(e=>{console.error(String(e)); process.exit(1);});"
npx wrangler --version
npx wrangler whoami
bash -n scripts/decrypt-literature.sh
bash scripts/decrypt-literature.sh </dev/null
git branch -a
```
