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

Jörn is the domain owner. Ask before changing the game's thesis, political
model, player-facing terminology, card concepts, major UX direction, final
feature set, or expert predictions. Agents may draft, implement, test,
refactor, refresh generated artifacts, and propose wording or UI details
independently, but expert-grounded content is draft until Jörn approves it.

## Implicit Objectives
Unless stated otherwise:
- Agents must contextualize their work, including task scope and review criteria, as instrumental for project success.
- Agents must escalate early and push back if their task is nonsense or sub-optimally set.
- Agents must minimize the amount of time Jörn has to spend (this is the one bottleneck for the project timeline)
- Concretely, agents should not ask questions they know the answer to, make requests they can carry out, end a turn without good reason, split a questionnaire into multiple messages, ask questions that Jörn cannot cheaply answer, withhold/skip gathering information that Jörn has to rederive on his own time then.
- Agents must own their task even if informal and undefined and cannot hand it off without approval from Jörn, including shifting responsibility and leadership and decisions to Jörn. Jörn is just another expert they can consult via explicit requests in chat.
- Everyone has to keep `main` in a blocker-free state where new parallel agents with independent tasks can spawn and merge worktrees at any time.

## Chat Rules

When interacting with Jörn in chat:
- Use no new terminology.
- Number/label everything so Jörn can reference it without ambiguity.
- Write plain. Use zero metaphors and zero analogies.
- Use progressive disclosure.
- Do not iterate artifacts in chat. Iterate artifacts in scratch, then copy the
  current artifact to chat or link the scratch path.

## Files

```text
.
|-- AGENTS.md
|-- ARCHITECTURE.md
|-- PROGRESS.md
|-- DEPLOY.md
|-- package.json
|-- src/
|   |-- App.tsx
|   |-- main.tsx
|   |-- app/
|   |   |-- useGame.ts
|   |   |-- storage.ts
|   |   `-- tutorialStorage.ts
|   |-- engine/
|   |   |-- types.ts
|   |   |-- state.ts
|   |   |-- cards.ts
|   |   |-- session.ts
|   |   `-- *.test.ts
|   |-- data/
|   |   |-- cards/
|   |   |   |-- index.ts
|   |   |   |-- groups.ts
|   |   |   |-- hidden.ts
|   |   |   `-- *.ts
|   |   |-- deaths.ts
|   |   `-- tutorial.ts
|   |-- components/
|   |-- hooks/
|   `-- index.css
|-- design/
|   |-- domain-model.md
|   |-- card-concepts.md
|   |-- cards-export.md
|   |-- geopolitics-synthesis.md
|   |-- research/*.md
|   `-- *.md
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
|   |-- export-cards.ts
|   |-- decrypt-literature.sh
|   `-- toc.sh
|-- .github/workflows/deploy.yml
|-- wrangler.toml
|-- vite.config.ts
|-- playwright.config.ts
|-- .agents/skills/<skill>/
|   |-- SKILL.md
|   |-- agents/openai.yaml
|   |-- references/*.md
|   `-- scripts/
|-- .codex/
|   |-- .gitignore
|   `-- agents/.gitkeep
|-- .worktrees/
|-- .devcontainer/
|   |-- README.md
|   |-- devcontainer.json
|   |-- Dockerfile
|   `-- *.sh
`-- /tmp/  (outside repo)
```

- `AGENTS.md`: root instruction map. This repo does not use nested
  `AGENTS.md`.
- `ARCHITECTURE.md`: current implementation map, available features, known
  placeholders, generated artifacts, and validation map.
- `PROGRESS.md`: current work state, blockers, planned/deferred work, and
  Jörn-needed decisions.
- `DEPLOY.md`: Cloudflare Pages deployment, release checks, public URLs, and
  deploy approval boundaries.
- `package.json`: Vite, React, TypeScript, test, CLI, and card-export commands.
- `vite.config.ts`, `playwright.config.ts`: app/test framework configuration.
- `src/app/`: React game hook, browser storage, and tutorial-completion
  persistence.
- `src/engine/`: pure TypeScript game state, session transitions, RNG, card
  resolution, and tests.
- `src/data/cards/`: card declarations. Card modules export explicit arrays;
  `groups.ts` is the canonical grouped card map, and `hidden.ts` names hidden
  state keys with stable storage strings.
- `src/components/`, `src/hooks/`, `src/index.css`: React UI, swipe/audio
  hooks, and Tailwind v4 theme CSS.
- `design/`: domain model, card concepts, generated review exports, map
  reviews, and research/design notes.
- `literature/`: source notes and encrypted source-derived material. Run
  `scripts/decrypt-literature.sh` only when encrypted literature is needed.
- `.agents/skills/`: repo-local skill surface.
- `.codex/agents/`: optional repo-local subagent templates. Empty by default.
- Harness files (`AGENTS.md`, `.agents/skills/**`, `.codex/agents/**`) are
  frozen unless Jörn explicitly asks for a harness edit.
- `.worktrees/`: isolated worktrees for independent agent sessions.
- `.devcontainer/`: local devcontainer with documentation.
- `.github/workflows/deploy.yml`, `wrangler.toml`: Cloudflare Pages deployment.
- `/tmp/`: scratch space for subagent prompts, iterative drafts, disposable
  chat artifacts, disposable clones, and temporary reports; not durable project
  state.

## Map Files

Map files are navigation caches. They index, summarize, and structure folder
content for quick navigation. They are not authoritative sources.

- `ARCHITECTURE.md`: current repo architecture, implementation state, and
  available feature map.
- `PROGRESS.md`: current work state, blockers, planned/deferred work, and
  approval-sensitive items.
- `DEPLOY.md`: deployment and release map.
- `literature/INDEX.md`: source-note navigation.
- `design/cards-export.md`: generated card review export; refresh with
  `npm run cards`.
- `public/cards-map.html`: generated card graph; refresh with `npm run cards`.

## Review

Final summaries should list review passes performed, including review
subagents used or intentionally not used. Ask Jörn before merging harness
changes that alter `AGENTS.md`, skill bodies, task-routing structure, or
authority boundaries. `AGENTS.md` and skill bodies require Jörn approval before
they become final durable instruction material.

## Commands

```bash
# Harness and navigation
git diff --check
bash scripts/toc.sh AGENTS.md ARCHITECTURE.md PROGRESS.md DEPLOY.md

# App and engine
npm run check
npm run test:e2e
npm run cli auto 20

# Cards and generated review surfaces
npm run cards

# Literature
bash scripts/decrypt-literature.sh

# Local environment
npm run dev
.devcontainer/host-devcontainer-rebuild.sh
.devcontainer/host-vscode-tunnel.sh
```
