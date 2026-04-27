# AGENTS.md

## Project

Reigns-clone card-swipe game. You are the Director-General of the ISIA
(International Superintelligence Agency), trying to enforce a global AI pause.
Engine and tooling are in solid shape; content and some presentation surfaces
are still draft or placeholder.

**Live:** https://global-pause.pages.dev
**Audience:** People who do not yet appreciate how a serious global AI pause
might work or fail.
**Core thesis:** Without a serious pause we are dead. A serious pause is
possible. It requires concrete mechanisms and tradeoffs that players should be
able to articulate afterward.
**Owner:** Jörn Stöhler: x-risk domain expertise, project direction, and
deployed-result review. Jörn does not write code.

## Current Layout

- `src/engine/`: pure TypeScript game engine with no React dependency.
  - `types.ts`: `GameState`, `Card`, `Resources`, `ChoiceSpec`.
  - `state.ts`: `newGame`, `applyChoice`, `checkDeath`.
  - `cards.ts`: weighted card pool and anti-repeat draw logic.
  - `rng.ts`: seeded PRNG.
  - `useGame.ts`: React bridge, actions, and localStorage.
- `src/data/`: card, death, and tutorial content.
  - `src/data/cards/`: card files and registry.
  - `src/data/deaths.ts`: death messages.
  - `src/data/tutorial.ts`: tutorial cards.
- `src/components/`: React UI components.
- `src/hooks/`: swipe logic.
- `src/assets/portraits/`: speaker portraits.
- `e2e/`: Playwright smoke and drag tests.
- `scripts/`: portrait generation, card export, and literature helpers.
- `design/`: game design notes, domain model, review docs, and card exports.
- `literature/`: source documents for grounded content.
- `.agents/skills/`: Codex skills for project workflows and conventions.
- `.codex/agents/`: Codex subagent definitions.
- `.codex/worktrees/`: repo-local Codex worktrees for isolated sessions.
- `.devcontainer/`: local devcontainer setup.

## Instruction Sources

Required project instructions live in this root map or in discoverable skills.
Do not add nested `AGENTS.md` files as required instruction maps; root-launched
Codex sessions will not reliably load them.

Use skills for detailed reusable procedures. Skill descriptions are the routing
source of truth.

## Architecture

- Engine is pure TypeScript with zero React dependency. `types.ts`, `state.ts`,
  `cards.ts`, and `rng.ts` are used by both the React UI and CLI tools.
- Cards are declarative. Each card has `poolWeight: (state) => number`. The
  engine evaluates all cards each turn, filters by positive weight and
  anti-repeat rules, picks by weighted random draw, and resolves an
  `ActiveCard` for the UI.
- Current resource keys are `pol`, `int`, `saf`, and `alg`.
- Swipe uses Pointer Events. CSS transforms are applied through refs during
  drag to avoid rerendering on pointer movement.

## Product State

Settled and safe to build on:
- engine, swipe UX, layout system, card map tool, portrait generation script.

Draft or placeholder:
- most card text, death messages, tutorial content, portraits, title/death
  screen polish, history-chain coverage, and some balance assumptions.

`TASKS.md` is the current task tracker and maturity map. Read it before
planning feature or content work.

## Decision Authority

|  | Cheap to verify | Expensive to verify |
|---|---|---|
| **Easy rollback** | Act freely | Act, then Jörn verifies |
| **Hard rollback** | Discuss first | Discuss first |

Engineering and web experience design decisions belong to agents. Content
accuracy, game design, x-risk communication, taste, and scope belong to Jörn.

Jörn is often on mobile, so keep questions rare, concrete, and numbered when a
decision is genuinely needed.

## Working Style

- Verify claims before making them. Read code before saying what it does.
- If Jörn asks what a file says, answer from the file.
- Push back when a better approach or hidden risk matters.
- Ask Jörn only for content judgment, game-design judgment, taste,
  external-world actions, or irreversible choices.
- Do not ask "should I proceed" when the next step is a normal reversible
  engineering action.
- Quote or summarize important command output because Jörn does not see tool
  output.

## Git

- Use local `main` as the base unless Jörn names a different base.
- Agents may commit without asking. Ask about merge approval, not commit
  permission.
- Before merging a separate branch to `main`, report what changed, what was
  verified, and what needs Jörn review.
- Destructive operations such as force-push, branch deletion on `main`,
  `git reset --hard`, and checkout-based reverts require explicit approval.
- `npm run check` should pass before committing code changes.
- Push to `main` when Jörn wants the deployed result reviewed.

## Worktrees

- Work only in the assigned cwd. Treat the tool default cwd as untrusted until
  it matches the assigned cwd.
- Create a worktree when Jörn asks for isolated edits or when parallel sessions
  may edit overlapping tracked files.
- Use local `main` unless Jörn names a different base:
  `git worktree add -b <branch> .codex/worktrees/<branch> main`
- Every subagent prompt must name the required cwd.
- After merge, remove a worktree with
  `git worktree remove .codex/worktrees/<branch>` and delete the branch with
  `git branch -d <branch>`.

## Environment

Local devcontainer on Jörn's Ubuntu desktop. `npm install` on first run.
Playwright browsers are pre-installed.

- `.env` at repo root has Cloudflare credentials and service keys. Source it
  when needed. Never ask for secrets.
- Never hardcode secrets in source files. Always read them from the
  environment.
- If encrypted literature is needed and decrypted `.md` files are missing, run
  `bash scripts/decrypt-literature.sh`.
- Raw localhost does not work in Jörn's setup; use VS Code port forwarding
  through the devcontainer/tunnel.
- Never read `.jsonl` transcript logs directly.
- Tech stack: Vite, React 19, TypeScript, Tailwind CSS 4, Playwright,
  Cloudflare Pages.

## QA

- `#qa` hash on live site: portrait gallery, card overview, death messages.
- Visual QA: 390x844 viewport, clear localStorage first.
- After UI changes to `SwipeCard`, `useSwipe`, `ResourceIcons`, or
  `GameScreen`, run `e2e/drag.spec.ts`, verify the `SwipeCard` key changes with
  `activeCard`, and do a mobile visual check.

## Quick Commands

```bash
npm run check          # typecheck + lint + build + unit tests
npm run dev            # dev server
npm run test:e2e       # Playwright E2E
npm run cards          # export design/cards-export.md + public/cards-map.html
npm run cli auto 20    # random-play 20 turns
```
