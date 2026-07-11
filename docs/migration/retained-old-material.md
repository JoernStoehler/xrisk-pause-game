# Migration provenance and retained material

The GPT-5.6 migration started from commit `0c5262c34c423cc62b68124d30d002b4886b879f`. That commit is the recovery point for every deleted file; the migration deliberately avoids compatibility layers with its React/card engine.

The handoff archive was `xrisk-pause-game-codex-handoff-2026-07-11.zip`. Its precondition that Jörn had already cleaned the repository was false. The migration worktree performed that cleanup and treated the packet as the new substantive baseline.

## Retained infrastructure

| Path | Reason retained |
| --- | --- |
| `.devcontainer/` except the dated `codex-web.md` report | Jörn's local Codex, VS Code tunnel, Node, Chromium, GitHub CLI, and secret-scanning environment |
| `.github/workflows/deploy.yml` | GitHub validation skeleton; old automatic production deployment and secret references were removed |
| `wrangler.toml` | Existing Cloudflare Pages project and `dist` output configuration |
| `.githooks/pre-commit`, `.gitleaks.toml` | Secret scanning without storing credentials in the repository |
| `.gitignore`, `.vscode/extensions.json` | Generic workspace hygiene and editor support |
| `playwright.config.ts` | Reusable desktop/mobile browser harness, with old game tests replaced and local/remote base-URL support |
| `source/jorn-review-2026-05-11-raw-excerpts.md` | Direct older Jörn wording that the packet atlas did not fully preserve |

No Cloudflare credential value was copied into the migration. The ignored main-checkout `.env` remains the local Wrangler credential source; the migration worktree uses an ignored symlink to it because git worktrees do not inherit untracked files. The validation-only GitHub workflow no longer references deployment secrets.

## Deliberately not retained

- old React UI, monthly hazard/card engine, dummy cards, portraits, and their tests;
- old maps, generated card exports, and game-specific scripts;
- old package/tooling dependencies that existed only for that architecture;
- the old literature tree, which remains recoverable from the recorded commit and was not copied wholesale into the new source hierarchy;
- GPT-5.5 prompting, planning, recovery, goal, quality, TypeScript, and skill-writing compensations;
- `dist/`, because it is reproducible build output; and
- the dated `.devcontainer/codex-web.md` report about a different backup environment.

The sole repo-local skill retained is deployment because preview versus production routing, Cloudflare credentials, and external side effects remain a recurring project-specific workflow.
