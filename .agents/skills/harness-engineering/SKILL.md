---
name: harness-engineering
description: "Use when Jörn asks to revise Codex setup, `AGENTS.md`, `.agents/skills/**`, `.codex/**`, `.devcontainer/**`, subagent prompts, skill routing, or agent workflow documentation for this repo."
---

# Harness Engineering

## Scope

The harness is:

- `AGENTS.md`: always-loaded project map and global rules.
- `.agents/skills/**`: triggerable project workflows.
- `.codex/config.toml` and `.codex/agents/*.toml`: Codex runtime config and
  subagent roles.
- `.devcontainer/**`: container setup for Codex, VS Code tunnel, caches, and
  auth mounts.
- onboarding or generated docs only when they affect agent behavior.

## Design Rules

- Keep `AGENTS.md` short. It should contain stable facts and rules needed in
  every session.
- Put procedure in skills. A skill should have a sharp trigger in
  `description` and a compact body that changes agent behavior on real tasks.
- Keep skills and subagents separate. Skills guide the active session;
  subagents define separate-context review or scouting roles.
- Delete obsolete instruction paths instead of preserving parallel routes.
- Treat old harness text as suspect during migrations. Reuse a sentence only
  if it is still true, actionable, and worth always loading or skill loading.
- Prefer observable checks over claims about how the harness works.

## Workflow

1. Confirm the requested change affects the harness.
2. Classify the surface: root map, skill routing, skill body, subagent role,
   Codex config, devcontainer, or onboarding.
3. Compare at least two approaches when there is a meaningful design choice.
4. Edit the smallest surface that can carry the behavior.
5. For skills, follow `skill-creator`: only `name` and `description` are
   required in frontmatter, and trigger conditions belong in the description.
6. Check stale operational references with `rg`, especially:

```bash
rg -n "CLAUDE.md|\\.claude|literature/CLAUDE.md|setup:ccweb|CLAUDE_PROJECT_DIR|CLAUDE_ENV_FILE"
```

7. For Codex product behavior claims, use official docs or clearly state that
   the claim is based on local observed behavior.

## Validation

Run the relevant subset:

```bash
python /home/joern/.codex/skills/.system/skill-creator/scripts/quick_validate.py .agents/skills/<skill-name>
git diff --check
npm run check
```

After devcontainer changes, rebuild and verify:

```bash
.devcontainer/host-devcontainer-rebuild.sh
devcontainer exec --workspace-folder "$PWD" --config "$PWD/.devcontainer/devcontainer.json" -- codex --version
devcontainer exec --workspace-folder "$PWD" --config "$PWD/.devcontainer/devcontainer.json" -- /usr/local/bin/code-tunnel --version
```

## Stop Conditions

Stop and ask before:

- keeping Claude and Codex harnesses active for the same behavior;
- deleting untracked harness files;
- changing credential storage, deploy credentials, or production GitHub
  settings;
- changing gameplay or content while doing harness work.
