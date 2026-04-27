---
name: harness-engineering
description: "Guidance for Jörn-approved edits to this repo's agent harness: `AGENTS.md`, `.agents/skills/**`, `.codex/agents/*.toml`, `.codex/config.toml`, `.devcontainer/**`, onboarding wording, and subagent/review prompts. Use only when Jörn explicitly asks to revise Codex setup, skill routing, prompt behavior, or agent workflow documentation."
---

# Harness Engineering

## Goal

Edit the agent harness after Jörn has asked for harness edits. If normal
project work exposes a harness issue, propose the change at the end of the
session instead of editing harness files opportunistically.

The harness is:

- `AGENTS.md`: always-loaded project map and global invariants.
- `.agents/skills/**`: triggerable convention and workflow bodies.
- `.codex/agents/*.toml`: narrow subagent role prompts.
- `.codex/config.toml`: repo-level Codex configuration.
- `.devcontainer/**`: runtime setup for the local devcontainer and Codex
  sessions.

## Design Rules

- Keep `AGENTS.md` short and task-facing. It is always loaded.
- Put detailed conventions, editing rationale, and workflow procedure in
  skills.
- Put trigger conditions in the skill `description`, not only in the skill
  body.
- Do not maintain a complete skill inventory in `AGENTS.md`; skill names and
  descriptions are already visible through the skill system.
- Do not rely on nested settings or nested `AGENTS.md` files for required
  behavior.
- Keep workflow skills and subagent roles separate. Skills define procedures in
  the active session; subagent roles define separate-context output contracts.
- Write skill bodies as operating model, action checklist, Jörn gates, and
  stop conditions. Avoid long philosophy sections.
- Prefer observable checks over open-ended prompts such as "make it good" or
  "be robust".
- Use one reviewer subagent role with loaded checklists when the role is stable
  and only the review surface changes.
- Split a subagent only when the role, permissions, or output contract
  differs.
- Before deleting a tracked harness file or directory, check that git has
  captured the current state. Rollback should be possible through git.

## Editing Workflow

1. Confirm Jörn asked for harness edits.
2. Identify whether the change affects always-loaded context, skill routing,
   skill body procedure, subagent role, or runtime setup.
3. Keep a short decision ledger in the conversation before broad edits:
   decision, rejected alternative, and affected files.
4. Remove obsolete text instead of preserving it as another path.
5. If editing a skill, follow `$skill-creator`: frontmatter has only `name`
   and `description`; the description carries trigger conditions.
6. If moving content out of `AGENTS.md`, add it to the skill whose description
   should trigger for that work.
7. Check stale path assumptions with `rg`, especially `CLAUDE.md`, `.claude`,
   old hook names, `literature/CLAUDE.md`, old reviewer paths, and stale setup
   scripts such as `setup:ccweb`.
8. For Codex product behavior claims, cite official OpenAI documentation or say
   the claim is based on local observed behavior.
9. Run validation:

```bash
python /home/joern/.codex/skills/.system/skill-creator/scripts/quick_validate.py .agents/skills/<skill-name>
git diff --check
```

## Stop Conditions

Stop and ask Jörn before:

- keeping both Claude and Codex harnesses active for the same behavior;
- deleting untracked harness files;
- changing deploy credentials, secret storage, or production GitHub settings;
- making a change that requires a devcontainer rebuild when Jörn asked for a
  docs-only edit.
