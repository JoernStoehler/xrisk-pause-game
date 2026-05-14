# Devcontainer

Local devcontainer for Jörn's Ubuntu desktop. Docker is the isolation boundary
for Codex sessions, so repo Codex config can use `danger-full-access` inside
the container.

## Access

From the host:

```bash
.devcontainer/host-devcontainer-rebuild.sh --refresh-tools
.devcontainer/host-vscode-tunnel.sh
```

Then open `vscode.dev/tunnel/xrisk-pause-game`, start a terminal, and run
`codex`. Raw localhost is not the expected access path in this setup; use VS
Code port forwarding through the tunnel.

## Persistent State

Host bind mounts under `/srv/devhome/` persist credentials and caches across
container rebuilds:

| Host path | Container path | Purpose |
|-----------|----------------|---------|
| `/srv/devhome/.codex` | `~/.codex` | Codex auth, sessions, user config |
| `/srv/devhome/.config/gh` | `~/.config/gh` | GitHub CLI auth |
| `/srv/devhome/.cache/npm` | `~/.cache/npm` | npm cache |
| `/srv/devhome/.cache/ms-playwright` | `~/.cache/ms-playwright` | Playwright browser cache |
| `/srv/devhome/.bash_history_dir` | `~/.bash_history_dir` | shell history |

VS Code tunnel state uses a Docker named volume:

| Volume | Container path | Purpose |
|--------|----------------|---------|
| `xrisk-pause-game-vscode` | `~/.vscode` | VS Code tunnel auth and CLI state |

Use `--refresh-tools` when the goal is to update downloaded image tools such as
the VS Code tunnel CLI. It maps to `devcontainer build --no-cache`, so the
download layer is not reused from Docker cache.

## Maintenance Objective

Devcontainer maintenance should keep the host-launched VS Code tunnel,
agent CLI tools, Node/Playwright test environment, and persisted caches usable
after a rebuild without changing project behavior.

Prefer durable Dockerfile or script changes over manually patching the running
container. Manual changes inside the running container are only useful when they
verify the current session or unblock validation before the next rebuild.

## Quality Gates

For devcontainer or VS Code tunnel maintenance, check the relevant gates before
handing off:

```bash
bash -n .devcontainer/host-devcontainer-rebuild.sh .devcontainer/host-vscode-tunnel.sh .devcontainer/post-create.sh .devcontainer/warmup-cache.sh
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
