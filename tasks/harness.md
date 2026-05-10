# Harness Roadmap

## Status
- State: active
- Last updated: 2026-05-10
- Source surfaces: `AGENTS.md`, `.agents/skills/`, `.codex/`, `.devcontainer/`,
  `tasks/`, `scripts/`
- Refresh when: harness structure, skills, task routing, or devcontainer
  process changes

## Steering Cache

- [active] Port the cleaner `msc-math` harness shape, not the thesis/math
  content.
- [active] Repo-local `.codex/config.toml` was a stub and should stay deleted;
  user/runtime settings belong in `~/.codex/config.toml`.
- [Jörn] Skill bodies require Jörn approval before they become final durable
  instruction material.
- [Jörn] `AGENTS.md` also requires Jörn approval before it becomes final
  durable instruction material.
- [Jörn] If an agent cannot converge on a skill direction after three review
  rounds with concrete alternatives, stop and ask Jörn to choose or write it.

## Work Map

- [done] Copy `msc-math` harness skeleton in an isolated worktree.
- [active] Adapt `AGENTS.md`, `tasks/`, and copied generic skills to this repo.
- [active] Delete irrelevant copied math/Rust/thesis/cluster skills.
- [active] Keep `research-topic` and `write-cards` as explicit TODO
  placeholders for Jörn.
- [active] Keep `project-quality` as a separate skill, but collect variants for
  Jörn instead of editing the skill body in this pass.
- [done] Fix small review findings before merge: `AGENTS.md` session-start
  map instruction, deployment/tooling map entries, `toc.sh` fenced code
  handling, and `.codex/.gitignore` wording.
- [future] Decide whether this repo needs Codex web setup scripts analogous to
  `msc-math`.
- [cut] Do not keep `scripts/codex-worktree.sh`; use raw `git worktree`
  commands until a helper is reviewed separately.

## Agent Cache

- Worktree path for current migration:
  `.codex/worktrees/harness-msc-math`.
- Validation for harness-only changes:

```bash
git diff --check
rg -n "TASKS.md|ROADMAP.md|msc-math|formal|Rust|thesis|LICCA|\\.claude|CLAUDE.md|reviewer.toml|simplification-scout|\\.codex/config.toml" AGENTS.md tasks .agents .codex .devcontainer scripts
```

## Pruned / Stale

- Old generic `.codex/agents/reviewer.toml` and
  `.codex/agents/simplification-scout.toml` were deleted in favor of explicit
  per-task delegation prompts.
