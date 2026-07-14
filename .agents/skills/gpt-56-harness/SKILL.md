---
name: gpt-56-harness
description: Use when designing, editing, reviewing, diagnosing, or evaluating durable agent-facing instructions for GPT-5.6/Codex, including AGENTS.md, repo-local skills, Codex configuration ownership, custom agents, reusable instruction systems, cold-start prompts for new autonomous sessions, and model-family migrations. For a durable bounded-subagent prompt, also use subagent-prompting. Do not use for ordinary one-off prompts, ordinary delegation, or domain work merely because Codex performs it.
---

# GPT-5.6 Harness

Design the active harness around expected project success and context that a
capable current model cannot otherwise recover cheaply.

- Inspect the active surface, relevant owner files, Git history, and focused
  session evidence before inferring why material exists.
- Separate project/external facts, source maps, accepted architecture, user
  stories, and quality decompositions from model-contingent behavior controls,
  generic advice, and history.
- Put project-wide invariants in `AGENTS.md`, conditional workflows in skills,
  details in routed references, and topic-specific truth beside its owner. A
  reference is not active merely because it exists.
- Keep user/IDE model, effort, verbosity, and concurrency settings in
  `~/.codex/config.toml`. Do not add repo overrides that make later IDE writes
  ineffective.
- Prefer Codex's built-in `default`, `worker`, and `explorer` roles. Add a
  custom role only for a recurring project-specific need.

Before substantive harness work, use `$openai-docs` to fetch and read the
current [GPT-5.6 prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance-gpt-5p6)
and [Codex customization guidance](https://learn.chatgpt.com/docs/customization/overview#when-to-update-agentsmd).
A fresh copy already loaded in the current session may be reused. If current
guidance cannot be retrieved, state that limitation instead of silently relying
on memory.

For behavior evaluation, state the predicted effect and possible side effects,
then choose checks in dependency order. Configuration or discovery failures
invalidate later behavioral probes. Use representative tasks and fresh agents
when their unprimed interpretation is evidence; constrain them to surfaces a
real agent would receive and do not reveal the intended answer. Compare final
decisions and artifacts, not instruction recitation. One successful probe
establishes only that case. Read `references/evaluate-harness.md` when planning,
running, or interpreting a harness evaluation.

For a reusable bounded-subagent prompt, use both skills:
`$gpt-56-harness` owns durable placement, discovery, integration, and behavior
evaluation; `$subagent-prompting` owns the assignment model, fresh-recipient
contract, prompt artifact, and return contract. Preserve the exact prompt, raw
output, evaluation verdict, and designer interpretation as separate layers when
they guide a durable harness change.

When reviewing a reusable or cold-start prompt, keep accepted constraints,
mutable observations, provisional diagnoses, and proposed strategy
distinguishable where conflating them could suppress useful reassessment.

An explicit harness task authorizes worktree edits and commits. Jörn's approval
is required before a harness commit reaches `main`, unless he explicitly grants
a different merge boundary for the task. Validate syntax, links, discovery,
trigger boundaries, and representative behavior in proportion to risk.
