# Devcontainer

Local devcontainer for Jörn's Ubuntu desktop. Docker is the isolation boundary
for Codex sessions, and this repo has its own mounted Codex home instead of
sharing the global `/srv/devhome/.codex` runtime state.

## Access Pattern

From the host:

```bash
cd ~/workspaces/xrisk-pause-game
bash .devcontainer/host-devcontainer-rebuild.sh
bash .devcontainer/host-vscode-tunnel.sh
```

Then open `vscode.dev/tunnel/xrisk-pause-game`, start a terminal, and run
`codex`. Raw localhost is not the expected access path in this setup; use VS
Code port forwarding through the tunnel.

## Persistent State

The devcontainer persists only the host state accepted for this repo:

| Host path or volume | Container path | Purpose |
| --- | --- | --- |
| `/srv/devhome/xrisk-pause-game/.codex` | `/home/vscode/.codex` | Repo-specific Codex runtime state |
| `/srv/devhome/.config/gh` | `/home/vscode/.config/gh` | Shared GitHub CLI auth |
| `xrisk-pause-game-vscode` | `~/.vscode` | VS Code tunnel auth and CLI state |

There is no bash-history mount and no npm or Playwright cache mount. The
repo-specific Codex home was created once on the host by copying the
`codex-pkm` Codex config and changing the project trust entry to
`/workspaces/xrisk-pause-game`.

## Maintenance Objective

Devcontainer maintenance should keep the host-launched VS Code tunnel,
agent CLI tools, repo-specific Codex state, and Node/Playwright test
environment usable after a rebuild without changing project behavior.

Prefer durable Dockerfile or script changes over manually patching the running
container. Manual changes inside the running container are only useful when they
verify the current session or unblock validation before the next rebuild.

For a VS Code tunnel CLI update without rebuilding or recreating the container,
run from the host:

```bash
bash .devcontainer/host-update-vscode-tunnel.sh
```

The script discovers the existing devcontainer by its Docker label, copies the
latest stable VS Code CLI to `/usr/local/bin/code-tunnel`, and verifies the
installed binary by copying it back out. It works for stopped containers. If a
tunnel process is already running, restart that tunnel process after the update;
the container itself is not started, stopped, rebuilt, or recreated.

## Quality Gates

For devcontainer or VS Code tunnel maintenance, check the relevant gates before
handing off:

```bash
bash -n .devcontainer/host-devcontainer-rebuild.sh .devcontainer/host-update-vscode-tunnel.sh .devcontainer/host-vscode-tunnel.sh .devcontainer/post-create.sh
git diff --check
code-tunnel --version
gitleaks version
node -v
npm -v
npm ls @playwright/test playwright playwright-core
./node_modules/.bin/playwright --version
./node_modules/.bin/playwright install --dry-run chromium
npm run check
npm run test:e2e
```

When Playwright changes, the npm package version, Dockerfile
`PLAYWRIGHT_VERSION`, and downloaded Chromium revision should match the same
Playwright release.

## Verification

After a rebuild, these checks should pass from the host:

```bash
devcontainer exec --workspace-folder "$PWD" --config "$PWD/.devcontainer/devcontainer.json" -- codex --version
devcontainer exec --workspace-folder "$PWD" --config "$PWD/.devcontainer/devcontainer.json" -- /usr/local/bin/code-tunnel tunnel status
```
