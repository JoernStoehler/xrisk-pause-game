# Harness Roadmap

## Status
- State: active
- Last updated: 2026-05-10
- Source surfaces: `AGENTS.md`, `.agents/skills/`, `.codex/`, `.devcontainer/`,
  `tasks/`, `scripts/`
- Refresh when: harness structure, skills, task routing, or devcontainer
  process changes

## Steering Cache

- [done] Port the cleaner `msc-math` harness shape, not the thesis/math
  content.
- [done] Repo-local `.codex/config.toml` was a stub and should stay deleted;
  user/runtime settings belong in `~/.codex/config.toml`.
- [Jörn] Skill bodies require Jörn approval before they become final durable
  instruction material.
- [Jörn] `AGENTS.md` also requires Jörn approval before it becomes final
  durable instruction material.
- [Jörn] `AGENTS.md`, `tasks/MAP.md`, `project-quality`, and current
  `tasks/*.md` structure approved on 2026-05-10.
- [Jörn] Merge with `write-cards` and `research-topic` as TODO placeholders;
  add real bodies later after successful card/research work creates insights
  worth capturing.
- [Jörn] If an agent cannot converge on a skill direction after three review
  rounds with concrete alternatives, stop and ask Jörn to choose or write it.

## Work Map

- [done] Copy `msc-math` harness skeleton in an isolated worktree.
- [done] Adapt `AGENTS.md`, `tasks/`, and copied generic skills to this repo.
- [done] Delete irrelevant copied math/Rust/thesis/cluster skills.
- [done] Keep `research-topic` and `write-cards` as explicit TODO
  placeholders for Jörn.
- [done] Keep `project-quality` as a separate skill.
- [done] Fix small review findings before merge: `AGENTS.md` session-start
  map instruction, deployment/tooling map entries, `toc.sh` fenced code
  handling, and `.codex/.gitignore` wording.
- [future] Decide whether this repo needs Codex web setup scripts analogous to
  `msc-math`.
- [cut] Do not keep `scripts/codex-worktree.sh`; use raw `git worktree`
  commands until a helper is reviewed separately.

## Agent Cache

- No harness migration worktree is currently active.
- Validation for harness-only changes:

```bash
git diff --check
bash scripts/toc.sh AGENTS.md tasks/MAP.md tasks/harness.md
```

Use targeted stale-route scans for the surface being changed. Search active
maps/instructions first; historical references under `tasks/references/` may
intentionally mention deleted routes.

## Pruned / Stale

- Old generic `.codex/agents/reviewer.toml` and
  `.codex/agents/simplification-scout.toml` were deleted in favor of explicit
  per-task delegation prompts.
