#!/bin/bash
set -euo pipefail

# Claude Code WorktreeRemove hook.
# Safety checks before removing a worktree:
# - Warns if the branch has unmerged commits relative to local main
#
# Input: JSON on stdin with field "worktree_path".
# Output: none expected. All output goes to stderr.

WORKTREE_PATH=$(jq -r '.worktree_path')

if [[ -z "$WORKTREE_PATH" || "$WORKTREE_PATH" == "null" ]]; then
  echo "[worktree-remove] error: no worktree_path in stdin JSON" >&2
  exit 1
fi

REPO_ROOT="$CLAUDE_PROJECT_DIR"

# --- Unmerged commit warning ---
BRANCH="$(git -C "$WORKTREE_PATH" symbolic-ref --quiet --short HEAD 2>/dev/null || true)"
if [[ -n "$BRANCH" ]]; then
  if git -C "$REPO_ROOT" merge-base --is-ancestor "refs/heads/$BRANCH" main 2>/dev/null; then
    echo "[worktree-remove] branch $BRANCH is merged into main" >&2
  else
    AHEAD="$(git -C "$REPO_ROOT" rev-list --count "main..refs/heads/$BRANCH" 2>/dev/null || true)"
    if [[ -n "$AHEAD" && "$AHEAD" != "0" ]]; then
      echo "[worktree-remove] WARNING: branch $BRANCH has $AHEAD commit(s) not in main" >&2
    fi
  fi
fi

# --- Remove worktree ---
git -C "$REPO_ROOT" worktree remove --force "$WORKTREE_PATH" >&2 || true
echo "[worktree-remove] removed $WORKTREE_PATH" >&2
