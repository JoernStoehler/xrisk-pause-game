#!/usr/bin/env bash
# Local devcontainer post-create setup (Jörn's Ubuntu desktop).

set -euo pipefail

echo "Local devcontainer post-create..."

# Ensure user directories exist
sudo mkdir -p \
  "${HOME}/.config" \
  "${HOME}/.local" \
  "${HOME}/.cache"
sudo chown -R "${USER}:${USER}" \
  "${HOME}/.config" \
  "${HOME}/.local" \
  "${HOME}/.cache"

# Configure npm paths
if command -v npm >/dev/null 2>&1; then
  mkdir -p "${HOME}/.local/bin" "${HOME}/.cache/npm"
  npm config set prefix "${HOME}/.local"
  npm config set cache "${HOME}/.cache/npm"
fi

# Configure git credentials via GitHub CLI
if command -v gh >/dev/null 2>&1; then
  gh auth setup-git || true
fi

# Install Claude Code CLI
curl -fsSL https://claude.ai/install.sh | bash

# Install Playwright browser binary (system deps already in image)
npx -y playwright install chromium

# Verify tools
echo "code-tunnel: $(code-tunnel --version 2>/dev/null || echo 'not found')"
echo "node: $(node -v 2>/dev/null || echo 'not found')"
echo "npm: $(npm -v 2>/dev/null || echo 'not found')"

# Source .env into shell profile so secrets are available in all sessions.
DOTENV="/workspaces/xrisk-pause-game/.env"
if [ -f "$DOTENV" ] && ! grep -q 'source.*\.env' "${HOME}/.bashrc"; then
  echo -e '\n# Project secrets\nset -a; source '"$DOTENV"'; set +a' >> "${HOME}/.bashrc"
fi

# Run warmup cache in background
nohup .devcontainer/warmup-cache.sh >> "${HOME}/.cache/warmup.log" 2>&1 &

echo "Local post-create complete."
