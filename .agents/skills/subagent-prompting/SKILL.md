---
name: subagent-prompting
description: Use when a fresh subagent will own a substantial bounded task and needs a carefully designed prompt carrying the right context, ownership boundaries, completion evidence, and return contract. This includes producing an artifact, isolating context-heavy intermediate work, independent review for a consequential decision, or repairing an assignment that produced misunderstandings or unusable results. The outcome and reason to delegate must already be decided. Skip this skill when the assignment fits clearly in one or two sentences, the work is open-ended session ownership, or there is only spare capacity but no established task.
---

# Subagent Prompting

Subagents are useful when another agent can own a bounded result while the parent
keeps noisy intermediate work out of its context, runs independent work in
parallel, or gets an unprimed judgment. Delegation also adds coordination cost:
the recipient lacks private context from the parent session, and the parent must
be able to judge and use the result without reconstructing the work.

Turn an already-chosen outcome and reason for delegation into a prompt that
carries information the recipient cannot recover while leaving generic
reasoning and ordinary implementation choices to the capable agent doing the
work.

## Confirm The Assignment Exists

Begin only when all are established:

- a desired result, state change, or decision;
- a reason the work belongs with a subagent, such as context isolation,
  parallel execution, independent interpretation, or bounded implementation;
- a fresh recipient with zero inherited conversation turns.

Do not start from available capacity and search for a purpose. If no established
outcome exists, several incompatible outcomes are conflated, or the parent
cannot say what it will do with the result, report the missing task definition.

## Build The Task Model

Determine the following before polishing prose. This is a decision inventory,
not a required prompt template. Include only details that can change the work or
the parent's ability to use it.

- **Problem and downstream use:** Explain why the result is wanted and name the
  decision, artifact, or later action it must support.
- **Deliverable and integration boundary:** Define the required hand-in and the
  surface downstream work will consume or merge. Bound changes so the parent
  can combine parallel work without surprise scope expansion. A worktree
  isolates execution; it does not define the acceptable hand-in. Say whether
  adjacent repairs should only be reported or may be implemented separately.
- **Task context:** Supply session-private decisions, rationale, observations,
  constraints, or current status that changes interpretation and cannot be
  recovered from repo sources. Distinguish fixed boundaries and accepted
  stakeholder decisions from factual premises, provisional diagnoses, and
  suggested strategies that the recipient may re-evaluate.
- **Source routes:** Name authoritative files, artifacts, or commands to inspect
  and distinguish source truth from optional starting points and preliminary
  reasoning. Explain a source's role when it is not obvious.
- **Working authority:** State the editing or read-only surface, allowed side
  effects, workspace ownership, decisions reserved for the parent or Jörn, and
  relevant concurrent work. Tell editing workers they are not alone and must
  preserve others' changes. Let an editing subagent create its own worktree
  unless the parent supplies an appropriate isolated workspace. For read-only
  work, name what to inspect; do not create a worktree merely for isolation.
- **Completion evidence:** State observable evidence and abstract quality needs.
  Include known failure modes only when they materially improve the work and
  make clear they are not an exhaustive checklist. Ask whether an easier but
  useless substitute could satisfy the stated evidence.
- **Return contract:** Request only what the parent needs to evaluate or
  continue. Leave task-local paths, commands, type signatures, and architecture
  to the subagent unless the downstream contract fixes them. Usually omit
  process narration.
- **Stop and escalation conditions:** Identify assumptions whose falsification
  makes continuing invalid or wasteful. State what missing evidence, blocked
  action, scope expansion, failed validation, or conflict with source truth
  should cause the subagent to stop and return evidence or conditional paths
  rather than guess or silently change the objective.

For review prompts, also name the target, source material, downstream decision,
and priority lenses. State whether lenses are ranked priorities, a closed
whitelist, or reminders of past oversights. When findings will drive repairs,
ask for evidence or location, downstream consequence, and a concrete
correction, plus an explicit statement when no material finding remains.

When a decision depends on the parent's wider task context, ask for evidence,
alternatives, tradeoffs, and conditional reasoning that make the verdict
legible. A bare `yes` is rarely a useful hand-in. State the relative costs of
false positives and false negatives when they shape review.

## Use A Fresh Recipient

Spawn with zero inherited conversation turns (`fork_turns="none"`). Supply all
task-relevant private context explicitly and route the recipient to repo sources
it can inspect directly. Fresh context keeps intermediate discussion out of the
recipient, prevents inherited clues from masking prompt defects, and supports
independent interpretation.

Choose model and reasoning effort from task difficulty and evidence needs, not
a permanent model-routing slogan. Treat model differences as empirical until
representative results support a stable rule.

## Write And Self-Review The Prompt

For a nontrivial prompt, draft in `/tmp` and review it before use. Lead with the
problem and outcome, then context and constraints. Use direct prose and the
lightest structure that preserves the task model.

Do not prescribe step-by-step reasoning or implementation unless the sequence
is a real dependency, safety boundary, required workflow, or artifact contract.
Remove repeated rules and context the recipient can recover cheaply.

Before using the prompt, ask yourself:

- Can the recipient tell why the work matters, what it must hand in, which
  integration boundaries apply, and what done means?
- Which facts am I assuming only because I saw the parent session?
- Did I turn an observation, diagnosis, or proposed strategy into an
  unjustified imperative?
- Could the recipient return something formally compliant but worthless?
- Does the return contract exclude noisy intermediate work while preserving
  enough evidence to trust the result?

## Evaluate Proportionally

For ordinary bounded work, inspect the returned artifact and validation rather
than adding ritual prompt review. For a costly, reusable, repeatedly failing, or
hard-to-reverse prompt, use representative evidence before scaling it.

Judge recipient comprehension and assignment value separately. Test
comprehension with the surfaces a real recipient receives. Test value against
the named downstream use: can the parent attain the desired state or make the
decision from the result without reconstructing the work?

Keep the exact prompt, raw result, evaluation verdict, and parent interpretation
separate when the evidence will guide a durable workflow or harness change.
