# .devcontainer/CLAUDE.md

Local devcontainer for Jörn's Ubuntu desktop. PRIMARY ENVIRONMENT (80% of work).
Claude Code on the web is a secondary environment (20%) — uses the session-start hook at `.claude/hooks/session-start.sh`.

## Files

```
.devcontainer/
  devcontainer.json          # Container config (mounts, env vars, memory limits)
  Dockerfile                 # Image build (Node.js, Playwright deps, CLI tools)
  post-create.sh             # Runtime setup (npm, gh auth, Claude Code, Playwright browsers)
  warmup-cache.sh            # Background cache warming (npm install)
  host-devcontainer-rebuild.sh  # Host-side: rebuild image + recreate container
  host-vscode-tunnel.sh      # Host-side: launch VS Code tunnel
  worktree-new.sh            # Create worktree with dep hydration
  worktree-remove.sh         # Safe worktree removal with diagnostics
```

## Dependencies

For system dependencies: `Dockerfile` and `post-create.sh`.
npm dependencies are managed via `package.json` at repo root.
