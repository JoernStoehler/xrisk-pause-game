---
name: record-project-knowledge
description: Preserve project knowledge in a durable, checkable form. Use when recording web or literature investigations, curated source extracts, Jörn interviews, expert-model or market reasoning, current best guesses about project success, difficult decisions that will recur, postmortem learning, or a repeated workflow that should become executable by Luna or Terra without reconstructing Sol-level context. Also use when deciding among docs/, raw source storage, code/tests, AGENTS.md, a skill, a script, a handoff, or temporary scratch state.
---

# Record Project Knowledge

Preserve enough evidence and structure for future agents to verify, revise, and
use the result. Do not preserve volume merely because work was expensive.

## Choose the artifact

- `docs/`: durable human-readable knowledge—curated quotations or paraphrases,
  research and analysis, living models, alternatives and discriminators,
  decisions, specifications, review results, and development guidance.
- Raw source storage: the original JSONL, downloaded paper, dataset, screenshot,
  generated output, code, or test result. Keep it with its owning tool, corpus,
  or producer; link it from the human-readable artifact. Do not invent a repo
  raw-source directory or copy private session logs merely for colocation.
- Code, tests, and `docs/game-model/model.yaml`: implemented or intended
  executable behavior.
- `AGENTS.md`: short project-wide boundaries every agent needs.
- A skill: a conditional, repeated workflow or role-specific knowledge whose
  description should trigger loading only when relevant.
- A skill script, test, linter, or generator: deterministic repeated work that
  should not depend on reconstructing prose instructions.
- Handoff or postmortem: session recovery or process evidence needed by future
  work, not general domain truth.
- Worktree or scratch state: exploration that has not earned durable status.

Read [knowledge record patterns](references/knowledge-record-patterns.md) when
writing a substantial record, converting deep reasoning into a repeatable
workflow, or choosing a template.

## Record the result

Inspect existing owner files first. Update the narrowest current artifact when
the new evidence changes its best guess; avoid adding a second synthesis merely
because it is easier than reconciling the first.

Preserve the decision-relevant chain:

1. question and scope;
2. raw source pointers and source conditions;
3. claim status, assumptions, and authority;
4. current best conclusion;
5. strongest live alternatives;
6. future sources, arguments, tests, or reviews that would discriminate or
   reverse the conclusion;
7. implications for downstream decisions, tests, or implementation.

Use ordinary summaries of reasons, evidence, and alternatives. Do not attempt
to preserve hidden chain-of-thought or a chronological transcript of thinking.

## Productize repeated reasoning

When a workflow will recur, identify which parts require judgment and which can
be made explicit or deterministic. Keep the judgment model in a concise skill
or reference; encode stable transforms and checks in scripts, schemas, tests,
or linters. Give lower-context agents explicit inputs, outputs, decision points,
validation, failure modes, and escalation conditions.

Forward-test a new workflow on a fresh realistic task when failure would be
costly or the workflow is intended to replace repeated high-capability work.
Pass the raw task and artifact, not the intended answer. Record a model-routing
update only when the result changes future delegation.

## Maintain the knowledge

Link analysis and synthesis back to raw sources. Date source extracts and review snapshots; state
when a document is living, conditional, draft, approved, or historical. When
evidence changes the best guess, update it and preserve still-live alternatives
or a pointer to superseded history. Git history is sufficient for obsolete text
that has no continuing decision value.

Check links, claim status, and owner-file consistency before handoff. A passing
format check does not establish that the record is true, current, or useful.
