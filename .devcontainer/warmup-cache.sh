#!/usr/bin/env bash
set -euo pipefail

# Background cache warming.
# Runs npm install to populate node_modules.
#
# Designed to run in background (nohup ... &) during container startup.
# Progress logged to ~/.cache/warmup.log.

if [[ ${1:-} == "--help" || ${1:-} == "-h" ]]; then
  cat <<'EOF'
Usage: .devcontainer/warmup-cache.sh

Background cache warming.
Runs npm install at repo root.

Designed to run in background (nohup ... &) during container startup.
Progress logged to ~/.cache/warmup.log.
EOF
  exit 0
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

log() {
  echo "[warmup-cache][$(date -Iseconds)] $*"
}

log "Starting cache warmup..."

if [[ -f "package.json" ]]; then
  log "Installing deps..."
  if npm install --prefer-offline; then
    log "Done."
  else
    log "WARNING: npm install failed (non-fatal)."
  fi
fi

log "Cache warmup complete."
