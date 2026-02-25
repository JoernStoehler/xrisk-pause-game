#!/bin/bash
set -euo pipefail

# SessionStart hook — environment setup for Claude Code on the web.
# Local devcontainer has gh pre-installed; this hook handles CC Web only.

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Install GitHub CLI if not already present
if ! command -v gh &>/dev/null; then
  GH_VERSION="2.86.0"
  curl -fsSL "https://github.com/cli/cli/releases/download/v${GH_VERSION}/gh_${GH_VERSION}_linux_amd64.tar.gz" -o /tmp/gh.tar.gz
  tar -xzf /tmp/gh.tar.gz -C /tmp
  cp "/tmp/gh_${GH_VERSION}_linux_amd64/bin/gh" /usr/local/bin/gh
  rm -rf /tmp/gh.tar.gz "/tmp/gh_${GH_VERSION}_linux_amd64"
fi

# Export GH_REPO so gh CLI works despite the git proxy.
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  REPO=$(git -C "$CLAUDE_PROJECT_DIR" remote get-url origin 2>/dev/null | sed -n 's|.*/git/\(.*\)$|\1|p')
  if [ -n "$REPO" ]; then
    echo "export GH_REPO=$REPO" >> "$CLAUDE_ENV_FILE"
  fi
fi

# Decrypt encrypted literature if LITERATURE_KEY is set.
if [ -n "${LITERATURE_KEY:-}" ] && command -v age &>/dev/null; then
  LIT_DIR="$CLAUDE_PROJECT_DIR/literature"
  KEY_FILE=$(mktemp)
  echo "$LITERATURE_KEY" > "$KEY_FILE"
  for enc_file in "$LIT_DIR"/*.enc; do
    [ -f "$enc_file" ] || continue
    dec_file="${enc_file%.enc}"
    if [ ! -f "$dec_file" ]; then
      age -d -i "$KEY_FILE" -o "$dec_file" "$enc_file" 2>/dev/null || true
    fi
  done
  rm -f "$KEY_FILE"
fi
