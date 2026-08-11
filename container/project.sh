#!/usr/bin/env bash
set -euo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"

validate
id="$(container_id)"
[[ -n "${id}" ]] && container_running "${id}" ||
  die "development container is not running"

compose exec -T "${SERVICE}" bash -lc \
  'set -euo pipefail
   expected="$(sha256sum package-lock.json | cut -d " " -f 1)"
   actual="$(cat node_modules/.xrisk-pause-game-package-lock.sha256 2>/dev/null || true)"
   if [[ "${actual}" != "${expected}" ]]; then
     npm ci
     printf "%s\n" "${expected}" > node_modules/.xrisk-pause-game-package-lock.sha256
   fi
   git config core.hooksPath .githooks'
