#!/usr/bin/env bash
# Local devcontainer post-create setup for xrisk-pause-game.

set -euo pipefail

echo "[post-create] Local devcontainer post-create..."

sudo mkdir -p \
  "${HOME}/.config" \
  "${HOME}/.local" \
  "${HOME}/.cache"
sudo chown -R "${USER}:${USER}" \
  "${HOME}/.config" \
  "${HOME}/.local" \
  "${HOME}/.cache"

sudo chown "${USER}:${USER}" "${HOME}/.vscode" 2>/dev/null || true

mkdir -p "$HOME/.codex" "$HOME/.config/gh" "$HOME/.vscode"

# Refresh VS Code tunnel CLI on every container recreate. The Dockerfile also
# bakes a copy into the image, but that layer can be cached across rebuilds.
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT
curl -fsSL "https://update.code.visualstudio.com/latest/cli-linux-x64/stable" -o "$tmpdir/vscode-cli.tar.gz"
tar -xzf "$tmpdir/vscode-cli.tar.gz" -C "$tmpdir"
sudo install -m 0755 "$tmpdir/code" /usr/local/bin/code-tunnel
rm -rf "$tmpdir"
trap - EXIT

if command -v npm >/dev/null 2>&1; then
  mkdir -p "${HOME}/.local/bin" "${HOME}/.cache/npm"
  npm config set prefix "${HOME}/.local"
  npm config set cache "${HOME}/.cache/npm"
  npm install -g @openai/codex
fi

# Trust the project root so Codex loads repo-local .codex/ and .agents/ files.
CODEX_USER_CONFIG=/home/vscode/.codex/config.toml
touch "$CODEX_USER_CONFIG"
if ! grep -qF 'projects."/workspaces/xrisk-pause-game"' "$CODEX_USER_CONFIG"; then
  printf '\n[projects."/workspaces/xrisk-pause-game"]\ntrust_level = "trusted"\n' >> "$CODEX_USER_CONFIG"
fi

if command -v gh >/dev/null 2>&1; then
  gh auth setup-git || true
fi

# Use repo-local git hooks (gitleaks pre-commit secret scanner)
git config core.hooksPath .githooks

# Install the browser binary for the package version in node_modules if needed.
npx -y playwright@1.60.0 install chromium

cat > ~/.tmux.conf << 'TMUXCONF'
set -g mouse on
set -g status off
set -g set-titles on
set -g set-titles-string "[#S] #{pane_title}"
set -g @scroll-down-exit-copy-mode off

# Terminal TUI compatibility.
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

# Bell passthrough.
set -g bell-action any
set -g visual-bell on
set -g monitor-bell on

# Copy mode styling (readable on light background).
set -g mode-style "bg=#a8d1ff,fg=#000000"
TMUXCONF

echo "[post-create] code-tunnel: $(code-tunnel --version 2>/dev/null || echo 'not found')"
echo "[post-create] codex: $(codex --version 2>/dev/null || echo 'not found')"
echo "[post-create] gh: $(gh --version 2>/dev/null | head -1 || echo 'not found')"
echo "[post-create] node: $(node -v 2>/dev/null || echo 'not found')"
echo "[post-create] npm: $(npm -v 2>/dev/null || echo 'not found')"
echo "[post-create] uv: $(uv --version 2>/dev/null || echo 'not found')"
echo "[post-create] Local post-create complete."
