# Development environment

This directory owns the x-risk pause game's Docker Compose development
environment. `../compose.yaml` owns ordinary lifecycle and runtime declaration;
the responsibility-specific local scripts here guard image promotion,
no-recreate startup, diagnostics, and process control. `../Justfile` is the
public command index.

The host supplies Docker Engine, Compose, Git, `just`, `jq`, `flock`,
and the three durable paths configured in ignored mode-`0600`
`.workspace.env`. The application's existing `.env` remains separate.

Normal use is:

1. `just image-build`
2. `just dev-start`
3. `just dev-status`
4. `just shell`

`just dev-start` starts an existing container without recreating it.
`just container-recreate` is the only normal operation that discards the
writable container overlay.
Builds smoke-test an immutable candidate image before promoting the local tag.

The repository is bound at `/workspaces/xrisk-pause-game`. Project Codex state
and GitHub CLI state use narrow private host binds. Ordinary home state,
installed Codex, caches, and experiments survive stop/start but disappear on
replacement. `/tmp`, `/var/tmp`, and `/run` are bounded tmpfs filesystems. The
container has no Docker socket.

Codex 0.147.0 is pinned in the image. Project dependencies follow `package-lock.json`;
startup runs `npm ci` only when the lock hash changed or installation is
incomplete. Playwright 1.60.0 and its Chromium system dependencies are baked
into the image.

`just dev-start` runs the authenticated app-server in detached tmux. Peer
containers on the shared `joern-dev` bridge connect to
`ws://xrisk-pause-game:4500`; host clients use
`ws://127.0.0.1:4501`. Both use the ignored mode-`0600`
`.app-server-token`. Only loopback is published to the host.

Linked worktrees belong under the repository's ignored `.worktrees/`
directory. After relocation, repair them from inside the workspace so their
recorded paths use `/workspaces/xrisk-pause-game/.worktrees/...`.

The pre-migration checkout, stopped Dev Container, image, Codex home, and VS
Code volume remain outside this deployment and are not modified by these
lifecycle commands.
