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

## Files

```text
.
|-- AGENTS.md
|-- package.json
|-- src/
|   |-- App.tsx
|   |-- main.tsx
|   |-- engine/
|   |   |-- types.ts
|   |   |-- state.ts
|   |   |-- cards.ts
|   |   |-- useGame.ts
|   |   `-- *.test.ts
|   |-- data/
|   |   |-- cards/
|   |   |   |-- index.ts
|   |   |   |-- registry.ts
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
|-- tasks/
|   |-- README.md
|   |-- MAP.md
|   `-- <group>.md
|-- public/
|   |-- cards-map.html
|   `-- static assets
|-- e2e/
|-- scripts/
|   |-- export-cards.ts
|   |-- decrypt-literature.sh
|   |-- codex-worktree.sh
|   `-- toc.sh
|-- .agents/skills/<skill>/
|   |-- SKILL.md
|   |-- agents/openai.yaml
|   |-- references/*.md
|   `-- scripts/
|-- .codex/
|   |-- .gitignore
|   |-- agents/.gitkeep
|   `-- worktrees/
|-- .devcontainer/
|   |-- README.md
|   |-- devcontainer.json
|   |-- Dockerfile
|   `-- *.sh
`-- /tmp/  (outside repo)
```

- `AGENTS.md`: root instruction map. This repo does not use nested
  `AGENTS.md`.
- `package.json`: Vite, React, TypeScript, test, CLI, and card-export commands.
- `src/engine/`: pure TypeScript game state, RNG, card resolution, tutorial
  logic, and tests.
- `src/data/cards/`: card declarations. Current implementation uses
  side-effect registration through `src/data/cards/index.ts`.
- `src/components/`, `src/hooks/`, `src/index.css`: React UI, swipe/audio
  hooks, and Tailwind v4 theme CSS.
- `design/`: domain model, card concepts, generated review exports, map
  reviews, and research/design notes.
- `literature/`: source notes and encrypted source-derived material. Run
  `scripts/decrypt-literature.sh` only when encrypted literature is needed.
- `tasks/`: current steering, topic task bundles, and harness migration notes.
- `.agents/skills/`: repo-local skill surface. Skill bodies require Jörn
  approval before they are treated as final durable instruction material.
- `.codex/agents/`: optional repo-local subagent templates. Empty by default.
- `.codex/worktrees/`: isolated worktrees for independent agent sessions.
- `.devcontainer/`: local devcontainer with documentation.
- `/tmp/`: scratch space for disposable clones, prompt drafts, and temporary
  reports; not durable project state.

## Map Files

Map files are navigation caches. They index, summarize, and structure folder
content for quick navigation. They are not authoritative sources.

- `tasks/MAP.md`: current roadmap, priority map, and task routing surface.
- `tasks/README.md`: conventions for task bundles under `tasks/`.
- `literature/INDEX.md`: source-note navigation.
- `design/cards-export.md`: generated card review export; refresh with
  `npm run cards`.
- `public/cards-map.html`: generated card graph; refresh with `npm run cards`.

## Review

Final summaries should list review passes performed, including review
subagents used or intentionally not used. Ask Jörn before merging harness
changes that alter `AGENTS.md`, skill bodies, task-routing structure, or
authority boundaries.

## Commands

```bash
# Harness and navigation
git diff --check
bash scripts/toc.sh AGENTS.md tasks/MAP.md

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
scripts/codex-worktree.sh <name> [branch]
```
