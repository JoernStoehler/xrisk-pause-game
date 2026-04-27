# Devcontainer

Local devcontainer for Jörn's Ubuntu desktop. Docker is the isolation boundary
for Codex sessions, so repo Codex config can use `danger-full-access` inside
the container.

## Access

From the host:

```bash
.devcontainer/host-devcontainer-rebuild.sh
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

## Verification

After a rebuild, these checks should pass from the host:

```bash
devcontainer exec --workspace-folder "$PWD" --config "$PWD/.devcontainer/devcontainer.json" -- codex --version
devcontainer exec --workspace-folder "$PWD" --config "$PWD/.devcontainer/devcontainer.json" -- /usr/local/bin/code-tunnel tunnel status
```
