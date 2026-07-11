# Progress

Updated 11 July 2026.

## Current state

- The 2026-07-11 ChatGPT Work-mode packet is now the substantive baseline in a migration worktree. The retired baseline remains at commit `0c5262c34c423cc62b68124d30d002b4886b879f`.
- The executable opening slice is a strict TypeScript diagnostic engine plus a vanilla browser UI. It is an internal prototype, not forecast-calibrated release content.
- Packet reproduction passed 36 tests, a production build, and a high-severity dependency audit before integration.
- The integrated candidate passes 40 model tests and 51 browser tests locally. The same 51 browser tests pass against the deployed preview across desktop, Pixel 5, and iPhone 13-like Chromium profiles.
- Devcontainer, VS Code tunnel, Cloudflare Pages configuration, gitleaks, and Playwright infrastructure were retained because they solve current external development and review needs. The retired automatic production deployment and its GitHub secret references were intentionally removed.
- GPT-5.5-specific skills and old React/card-engine architecture were removed. Deployment is the only repo-local skill retained.

## Completed migration checks

- The compute-versus-memory player choice now changes a same-world diagnostic outcome.
- Director-General projection leaks and false artifact reporting have focused regressions.
- Browser coverage exercises all opening paths, swipe, keyboard, focus, mobile reflow, and automated accessibility semantics.
- Packet implementation and provenance maps now point to the current code and dated source records.

## Migration readiness

- The authorized unlisted preview is `https://gpt56-handoff-2026-07-11.global-pause.pages.dev` (deployment `db50756a`). It is publicly addressable, protected from indexing by `X-Robots-Tag: noindex`, and not protected by Cloudflare Access.
- The preview returns `200`, serves the expected ISIA opening build, has no browser/console/request errors on a complete path, and passes the full remote browser/accessibility suite.
- Cloudflare identifies `main` as production. The preview is a separate branch deployment, and `https://global-pause.pages.dev` still serves the retired production build.
- Technical migration checks are complete. Actual work can resume after Jörn reviews the draft content/UX and approves merging the migration branch to `main`.

## Review gates

- Jörn review: the packet's political opening, advisor choices, terminology, and expert synthesis remain draft even when technically implemented.
- Jörn review: unresolved quantitative judgments in `docs/expert-model/judgments-and-tensions.md` must not become game probabilities.
- Jörn review: confirm whether the packet's Yudkowsky-default source policy and US/PRC founding-signatory opening should become durable approved decisions.
- Merge gate: review the simplified `AGENTS.md` and deployment skill before merging the migration branch.

## Next substantive work after review

The current prioritized candidates are target-specific capability artifacts, multi-dimensional custody, distributed-training topology and detection, first-quarter political processing, save/load with schema migration, and actor-local projections. Reprioritize after Jörn reviews the playable opening slice; do not treat the handoff ordering as final feature approval.
