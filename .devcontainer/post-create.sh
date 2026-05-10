#!/usr/bin/env bash
# Local devcontainer post-create setup (Jörn's Ubuntu desktop).

set -euo pipefail

echo "[post-create] Local devcontainer post-create..."

# Ensure user directories exist
sudo mkdir -p \
  "${HOME}/.config" \
  "${HOME}/.local" \
  "${HOME}/.cache"
sudo chown -R "${USER}:${USER}" \
  "${HOME}/.config" \
  "${HOME}/.local" \
  "${HOME}/.cache"

# Fix ownership of Docker volume mounts (created as root by default)
sudo chown "${USER}:${USER}" "${HOME}/.vscode" 2>/dev/null || true

# Configure npm paths and install global packages
if command -v npm >/dev/null 2>&1; then
  mkdir -p "${HOME}/.local/bin" "${HOME}/.cache/npm"
  npm config set prefix "${HOME}/.local"
  npm config set cache "${HOME}/.cache/npm"
  npm install -g @openai/codex
fi

# Codex: idempotently seed project trust so repo-level .codex/agents/ and
# .agents/skills/ load in this checkout. Runtime/model/sandbox settings belong
# in the machine-local ~/.codex/config.toml, not in this repo.
mkdir -p /home/vscode/.codex
CODEX_USER_CONFIG=/home/vscode/.codex/config.toml
touch "$CODEX_USER_CONFIG"
if ! grep -qF 'projects."/workspaces/xrisk-pause-game"' "$CODEX_USER_CONFIG"; then
  printf '\n[projects."/workspaces/xrisk-pause-game"]\ntrust_level = "trusted"\n' >> "$CODEX_USER_CONFIG"
fi

# Configure git credentials via GitHub CLI
if command -v gh >/dev/null 2>&1; then
  gh auth setup-git || true
fi

# Use repo-local git hooks (gitleaks pre-commit secret scanner)
git config core.hooksPath .githooks

# Install Playwright browser binary (system deps already in image)
npx -y playwright install chromium

# Verify tools
echo "[post-create] code-tunnel: $(code-tunnel --version 2>/dev/null || echo 'not found')"
echo "[post-create] codex: $(codex --version 2>/dev/null || echo 'not found')"
echo "[post-create] node: $(node -v 2>/dev/null || echo 'not found')"
echo "[post-create] npm: $(npm -v 2>/dev/null || echo 'not found')"

# tmux config for terminal agent sessions
cat > ~/.tmux.conf << 'TMUXCONF'
set -g mouse on
set -g status off
set -g set-titles on
set -g set-titles-string "[#S] #{pane_title}"
set -g @scroll-down-exit-copy-mode off

set -g allow-passthrough on
set -sg escape-time 0
set -g extended-keys always
set -as terminal-features 'xterm*:extkeys'
set -as terminal-features 'xterm-kitty:extkeys'
set -g set-clipboard on
set -g history-limit 250000
set -g focus-events on
set -g default-terminal "tmux-256color"
set -ag terminal-overrides ",xterm-256color:RGB"

# Copy mode styling (readable on light background)
set -g mode-style "bg=#a8d1ff,fg=#000000"
TMUXCONF

# Safe delete wrapper — redirects rm to trash-put (use /bin/rm for real deletes)
if ! grep -q 'trash-put' ~/.bashrc 2>/dev/null; then
  cat >> ~/.bashrc << 'BASHRC'

# Safe delete: redirect rm to trash-put (use /bin/rm for real deletes)
rm() { trash-put "$@"; }
export -f rm
BASHRC
fi

# Source .env into shell profile so secrets are available in all sessions.
DOTENV="/workspaces/xrisk-pause-game/.env"
if [ -f "$DOTENV" ] && ! grep -q 'source.*\.env' "${HOME}/.bashrc"; then
  echo -e '\n# Project secrets\nset -a; source '"$DOTENV"'; set +a' >> "${HOME}/.bashrc"
fi

# Run warmup cache in background
nohup .devcontainer/warmup-cache.sh >> "${HOME}/.cache/warmup.log" 2>&1 &

echo "[post-create] Local post-create complete."
