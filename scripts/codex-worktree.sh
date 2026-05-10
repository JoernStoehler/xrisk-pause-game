#!/usr/bin/env bash
# Spawn a Codex CLI session inside a fresh git worktree.
#
# Codex CLI has no native worktree support (verified from docs: no /worktree
# slash command, no `codex worktree` subcommand). Parallel Codex sessions
# therefore need a shell helper that (1) creates a git worktree, (2) seeds a
# trust entry in ~/.codex/config.toml so Codex will load that worktree's
# repo-local agents and project skills, and (3) starts Codex there.
#
# Creates Codex worktrees under .codex/worktrees/<name>.
#
# Usage:
#   scripts/codex-worktree.sh <name> [branch]
#     <name>   required — directory under .codex/worktrees/
#     [branch] optional — local branch to check out or create; defaults to <name>
#
# Example: scripts/codex-worktree.sh harness-cleanup
#   -> git worktree add .codex/worktrees/harness-cleanup harness-cleanup
#   -> appends trust entry for the new worktree path
#   -> cd there, exec codex

set -euo pipefail

if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "usage: $(basename "$0") <name> [branch]" >&2
  exit 64
fi

NAME=$1
BRANCH=${2:-$NAME}

REPO_ROOT=$(git rev-parse --show-toplevel)
WORKTREE_REL=".codex/worktrees/${NAME}"
WORKTREE_ABS="${REPO_ROOT}/${WORKTREE_REL}"

if [[ ! -d "$WORKTREE_ABS" ]]; then
  if git -C "$REPO_ROOT" show-ref --verify --quiet "refs/heads/${BRANCH}"; then
    git -C "$REPO_ROOT" worktree add "$WORKTREE_REL" "$BRANCH"
  else
    git -C "$REPO_ROOT" worktree add -b "$BRANCH" "$WORKTREE_REL" HEAD
  fi
fi

CODEX_USER_CONFIG="${CODEX_HOME:-$HOME/.codex}/config.toml"
mkdir -p "$(dirname "$CODEX_USER_CONFIG")"
touch "$CODEX_USER_CONFIG"
if ! grep -qF "projects.\"${WORKTREE_ABS}\"" "$CODEX_USER_CONFIG"; then
  printf '\n[projects."%s"]\ntrust_level = "trusted"\n' "$WORKTREE_ABS" >> "$CODEX_USER_CONFIG"
fi

cd "$WORKTREE_ABS"
exec codex
