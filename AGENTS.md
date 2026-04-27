# xrisk-pause-game

## Project

This is a serious Reigns-style mobile web game about directing an international
AI pause agency. The core thesis is that a pause is not quiet waiting: it is a
fragile crisis-management race to keep capability progress contained while
safety work catches up.

Jörn is the domain owner. Ask before changing the game's thesis, political
model, terminology, card concepts, or major UX direction. Current content is
draft quality unless `TASKS.md` says otherwise.

## Instruction Sources

- Read `TASKS.md` at session start. It is the current state and priority file.
- Use skills for specialized work. In particular, load `write-cards` before
  editing `src/data/cards/**`, `research-topic` before creating source-grounded
  design material, and `harness-engineering` before changing this harness.
- Do not depend on nested instruction files for required behavior.

## Repository Map

- `src/engine/`: pure TypeScript game state, card resolution, RNG, tutorial
  logic, and tests.
- `src/data/cards/`: card declarations registered by side-effect imports in
  `src/data/cards/index.ts`.
- `src/components/`, `src/hooks/`, `src/index.css`: React UI, swipe/audio hooks,
  and Tailwind v4 theme CSS.
- `design/`: domain model, card concepts, generated card export, map reviews,
  and research/design notes.
- `literature/`: source notes and encrypted source-derived material. Run
  `scripts/decrypt-literature.sh` when encrypted literature is needed.
- `.agents/skills/`: Codex skills for project-specific workflows.
- `.codex/`: repo Codex config and subagent roles.
- `.devcontainer/`: local Docker setup for Codex sessions and VS Code tunnel.

## Current Architecture Facts

- The app is React 19 + Vite + TypeScript.
- The engine uses four visible resources: `pol`, `int`, `saf`, and `alg`.
- Cards are static `Card` objects with dynamic fields and `poolWeight(state)`.
- Hidden state is a numeric key-value map used for cross-card interactions.
- `npm run cards` regenerates `design/cards-export.md` and
  `public/cards-map.html` from the TypeScript card pool.
- The devcontainer is the primary environment. It bind-mounts Codex and GitHub
  auth from `/srv/devhome/` and persists VS Code tunnel state in the
  `xrisk-pause-game-vscode` Docker volume at `~/.vscode`.

## Work Rules

- Preserve unrelated user changes. Check `git status --short --branch` before
  broad edits and do not reset or checkout files unless explicitly asked.
- Keep changes scoped to the requested surface. This repo is mid-content
  overhaul; avoid polishing placeholder content unless that is the task.
- Prefer observable validation over prose claims. If a file says a command,
  path, count, or generated artifact exists, verify it.
- Use `rg` and direct file reads for repo inspection. Use `apply_patch` for
  manual edits.
- For current-world claims, check sources instead of relying on memory.

## Commands

```bash
npm run dev
npm run check
npm run test:e2e
npm run cli auto 20
npm run cards
bash scripts/decrypt-literature.sh
.devcontainer/host-devcontainer-rebuild.sh
.devcontainer/host-vscode-tunnel.sh
```
