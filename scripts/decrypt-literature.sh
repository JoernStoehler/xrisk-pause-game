#!/usr/bin/env bash
# Decrypt gitignored literature/*.md files from committed *.md.enc files.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

if [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

if ! command -v age >/dev/null 2>&1; then
  echo "[decrypt-literature] age is not installed." >&2
  exit 1
fi

shopt -s nullglob
encrypted_files=(literature/*.md.enc)

if (( ${#encrypted_files[@]} == 0 )); then
  echo "[decrypt-literature] No encrypted literature files found."
  exit 0
fi

if [[ -z "${LITERATURE_KEY:-}" ]]; then
  echo "[decrypt-literature] LITERATURE_KEY is not set; skipping." >&2
  exit 0
fi

key_file="$(mktemp)"
trap 'rm -f "$key_file"' EXIT
printf '%s\n' "$LITERATURE_KEY" > "$key_file"

decrypted=0
skipped=0
for enc_file in "${encrypted_files[@]}"; do
  out_file="${enc_file%.enc}"
  if [[ -f "$out_file" ]]; then
    ((skipped += 1))
    continue
  fi
  age -d -i "$key_file" -o "$out_file" "$enc_file"
  ((decrypted += 1))
done

echo "[decrypt-literature] Decrypted $decrypted file(s), skipped $skipped existing file(s)."
