# AGENTS.md

## Project

Serious Reigns-style mobile web game about directing an international AI pause
agency. The core thesis is that a pause is not quiet waiting: it is a fragile
crisis-management race to keep capability progress contained while safety work
catches up.

Success means that, after months of play, more people understand that a global
AI pause treaty could work and can better recognize blatant misunderstandings
or false claims about what such a treaty needs under different threat models.
Fun, realism, and political/scientific detail are instrumental to that public
understanding goal.

Jörn is the domain owner. Expert-grounded content is draft until Jörn approves
it. Ask before changing the game's thesis, political model, player-facing
terminology, card concepts, major UX direction, final feature set, or expert
predictions. Agents may draft, implement, test, refactor, refresh generated
artifacts, and propose wording or UI details independently.

## Rules

These rules override default agent behavior where this project needs a more
specific operating mode. They exist to fix common agent failures, not to turn
`AGENTS.md` into a full manual.

- Every session must serve project success. If the relation to project success
  is unclear after checking the relevant maps, state the assumed relation or
  ask only when the answer would change scope or review criteria. Task
  definitions should explain how the task improves the game, player
  understanding, expert review, validation, deployment, playtesting, or
  future-agent work.
- Push back when a task or scope looks worse than an alternative. It is fine to
  make progress on an established task before all downstream uses are known;
  restore project-level context during review so goal drift is caught.
- Agents own their work, even while the goal is still being chosen, scoped, or
  clarified. Jörn is available as domain owner, project stakeholder, and
  prompt/harness/agent-engineering expert. Agents should otherwise cover the
  roles needed to complete the work: developer, reviewer, tester, progress
  tracker, researcher, and similar roles.
- Do not ask Jörn to do accessible local or repo work. Ask Jörn for domain
  decisions, approval-sensitive calls, external access that agents lack, or
  feedback where his judgment is the scarce input.
- `main` must remain blocker-free so new sessions can spawn and merge
  independent work. Read-only inspection on `main` is fine. Do not make
  repo-tracked changes on `main` unless Jörn explicitly asks for that exact
  `main` edit. For ordinary tracked work, create a git worktree first, do the
  work there, and merge after review. Merge-to-main requires Jörn approval.
- Harness files (`AGENTS.md`, `.agents/skills/**`, `.codex/agents/**`) are
  frozen unless Jörn explicitly asks for a harness edit. Discussion, planning,
  and read-only inspection are allowed.

### Chat With Jörn

Jörn's time should go to expert feedback, not handholding or session repair.
Communication should be low-friction and focused on information transfer.

- Write plain: ordinary words, existing project terms, no metaphors, no
  analogies, no invented labels.
- Number or label everything so Jörn can reference it without ambiguity.
- Use `/tmp/` to polish messages or artifacts that cannot be written cleanly in
  chat. Then send the polished message or link the scratch path.
- Do not iterate artifacts in chat. Iterate artifacts in scratch, then copy the
  current artifact to chat or link the scratch path.
- Do not blur unrelated questions into one ambiguous request. When several
  decisions are genuinely needed, group them in one numbered request with clear
  labels.
- Give enough context for Jörn's answers. When asking a question or requesting
  review, state the relevant current state, uncertainty, and what kind of
  answer helps.
- Make questions, review requests, and other requests hard to overlook.
  Usually put them on their own line or at the end of a short list. Re-ask or
  follow up if a request was missed or only partly answered.
- Use progressive disclosure. Put the main point first, then details Jörn can
  skip.
- Preserve precision that matters for communication. Do not shorten recaps if
  shortening loses the actual distinction.
- Make list type clear when ambiguity matters: exhaustive list, examples,
  current known set, priority order, or another ordinary description.
- Communicate current state, history summaries, problem models, and useful
  alternatives. Do not narrate process unless the process itself is the relevant
  state.
- Communicate uncertainty, evidence strength, expected value, and cost when
  they matter. Numbers can reduce ambiguity, but only if it is clear what
  quantity they estimate.

## Navigation

This repo does not use nested `AGENTS.md` files.

```text
.
|-- AGENTS.md
|-- FACTSHEET.md
|-- ARCHITECTURE.md
|-- PROGRESS.md
|-- package.json
|-- src/
|   |-- App.tsx
|   |-- main.tsx
|   |-- app/
|   |-- engine/
|   |-- content/
|   |-- components/
|   |-- hooks/
|   `-- index.css
|-- docs/
|   |-- README.md
|   |-- architecture.md
|   |-- expert-context.md
|   |-- expert-model-chat-excerpts.md
|   |-- expert-model-recovered.md
|   |-- quality.md
|   |-- development.md
|   |-- review.md
|   `-- cards-export.md
|-- literature/
|   |-- INDEX.md
|   |-- REFERENCES.md
|   |-- *.md
|   |-- *.txt
|   `-- *.enc
|-- public/
|   |-- cards-map.html
|   `-- static assets
|-- e2e/
|-- scripts/
|-- .github/workflows/deploy.yml
|-- wrangler.toml
|-- vite.config.ts
|-- playwright.config.ts
|-- .agents/skills/<skill>/
|-- .codex/
|-- .worktrees/
|-- .devcontainer/
`-- /tmp/  (outside repo)
```

Start here:

- `FACTSHEET.md`: durable project facts, Jörn decisions, success/non-success
  boundaries, approval boundaries, and repeated context.
- `ARCHITECTURE.md`: current implementation map, available features, known
  placeholders, generated artifacts, and validation map.
- `PROGRESS.md`: current work state, blockers, planned/deferred work, and
  Jörn-needed decisions.
- `docs/README.md`: role/maintenance map for the docs in `docs/`.
- `docs/quality.md`: shared quality target for developers and reviewers.
- `docs/development.md`: developer-agent guidance for planning and
  implementing changes toward the quality target.
- `docs/review.md`: automated checks, manual review workflows, blind spots,
  and early exits.
- `docs/architecture.md`: current architecture reasoning, alternatives,
  rejected options, and pivot triggers.
- `docs/expert-context.md`: compact epistemically labeled project/domain
  context for future content work. This is not approval to implement broad
  content; check `PROGRESS.md` for current blockers.
- `docs/expert-model-chat-excerpts.md`: recovered raw Jörn chat excerpts for
  exact wording checks.
- `docs/expert-model-recovered.md`: recovered expert-model synthesis; useful
  for content planning but fallible until checked against raw excerpts and
  Jörn.
- `literature/INDEX.md`: source-note navigation.

Important routes:

- `src/engine/`: pure TypeScript game state, session transitions, RNG, card
  resolution, and tests.
- `src/app/`: React game hook, browser storage, and tutorial-completion
  persistence.
- `src/content/cards/`: current card declarations. Card modules export explicit
  arrays; `index.ts` is the canonical grouped card registry.
- `src/content/deaths.ts` and `src/content/tutorial.ts`: death outcomes and
  scripted tutorial cards.
- `src/components/`, `src/hooks/`, `src/index.css`: React UI, swipe/audio
  hooks, and Tailwind v4 theme CSS.
- `package.json`, `vite.config.ts`, `playwright.config.ts`,
  `.github/workflows/deploy.yml`, and `wrangler.toml`: package scripts, app/test
  framework configuration, and deploy source truth.
- `.agents/skills/deploy/SKILL.md`: deployment and release workflow guidance.
- `docs/cards-export.md`: generated card review export; refresh with
  `npm run cards`.
- `public/cards-map.html`: generated card graph; refresh with `npm run cards`.
- `literature/`: source notes and encrypted source-derived material. Run
  `scripts/decrypt-literature.sh` only when encrypted literature is needed.
- `scripts/export-cards.ts`, `scripts/decrypt-literature.sh`, and
  `scripts/toc.sh`: card export, literature decrypt, and map heading helpers.
- `.agents/skills/`: repo-local skill surface.
- `.agents/skills/<skill>/SKILL.md`: active skill instructions. Optional
  `references/`, `agents/openai.yaml`, and `scripts/` support the skill.
- `.codex/agents/`: optional repo-local subagent templates. Empty by default.
- `.worktrees/`: ignored local worktrees for independent sessions.
- `/tmp/`: scratch for subagent prompts, iterative drafts, disposable chat
  artifacts, disposable clones, and temporary reports. It is not durable
  project state.

## Trust Model

- Source files and tests overrule maps for implementation behavior. Source
  notes overrule maps for source facts. Jörn decisions overrule agent-written
  drafts for approval-sensitive content and scope. Agent-authored docs describe
  current reasoning where they are not contradicted by source truth, Jörn
  decisions, or `PROGRESS.md`.
- `FACTSHEET.md` records durable project facts, Jörn decisions, and repeated
  context. `ARCHITECTURE.md`, `PROGRESS.md`, and `literature/INDEX.md` are
  navigation caches. Keep them current, but do not treat them as source truth
  when source files or Jörn decisions disagree.
- `docs/cards-export.md` and `public/cards-map.html` are generated review
  surfaces. They are useful for generated counts, links, and cross-card
  structure. Regenerate them with `npm run cards`; do not hand-edit generated
  content as source truth.
- Card text, death messages, tutorial text, and expert-grounded mechanisms are
  agent-written draft content until Jörn approves them.
- Browser/deploy behavior should be checked with the relevant command or local
  run before being treated as current.

## Documentation

- Write for current Codex agents and Jörn, not weaker hypothetical agents. Do
  not explain generic TypeScript, React, git, Markdown, or game-development
  concepts unless this repo uses them in a non-obvious way.
- Put knowledge where future agents need it: code comments for local invariants,
  tests for executable behavior, `docs/quality.md` for quality definitions,
  `docs/development.md` for developer guidance, `docs/review.md` for checks and
  review workflows, `docs/expert-context.md` and source notes for domain
  context, `FACTSHEET.md` for durable project facts and repeated context,
  `ARCHITECTURE.md` for implementation maps, `PROGRESS.md` for work state, and
  skills for recurring agent behavior and deploy operations.
- Keep documentation lean, current, and easy to verify. Prefer source-truth
  links, generated artifacts, tests, and short reasoning traces over broad
  summaries.
- When adding or changing claims, distinguish source fact, Jörn decision or
  approval, agent inference, game extrapolation, current implementation state,
  aspiration, and observed playtest result where confusion would matter.
- Delete or demote obsolete notes. Git history is enough for historical
  material once no future agent needs it as current context.

## Review

Final summaries should list review passes performed, including review
subagents used or intentionally not used. Ask Jörn before merging harness
changes that alter `AGENTS.md`, skill bodies, task-routing structure, or
authority boundaries. `AGENTS.md` and skill bodies require Jörn approval before
they are treated as final durable instruction material.

## Commands

Use the smallest relevant check set. Verify locally when a command might be
stale or too broad for the task.

```bash
# Harness and navigation
git diff --check
bash scripts/toc.sh AGENTS.md FACTSHEET.md ARCHITECTURE.md PROGRESS.md

# App and engine
npm run check
npm run test:e2e

# Cards and generated review surfaces
npm run cards

# Literature
bash scripts/decrypt-literature.sh

# Local environment
npm run dev
.devcontainer/host-devcontainer-rebuild.sh
.devcontainer/host-vscode-tunnel.sh
```
