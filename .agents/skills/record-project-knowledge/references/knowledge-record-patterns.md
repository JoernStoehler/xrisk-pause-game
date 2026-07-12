# Knowledge record patterns

Use these as adaptable shapes, not mandatory forms. Omit fields that do not
help a future agent verify, revise, or act.

## Source extract or source-grounded record under `docs/`

Suitable for a web investigation, literature map, interview, legal map, product
research record, or code/runtime record.

```markdown
# Topic — date

Role: source extract | attributed paraphrase | research analysis | prompt packet
Authority: who or what establishes each kind of claim
Scope: population, date range, jurisdictions, repositories, queries, exclusions
Raw source: exact URL, artifact path, session/thread/timestamp, or corpus pointer

## Question

## Method and limitations

## Quoted or extracted material

## Source-bounded summary

## Analysis or project inferences

## What this evidence does not establish
```

For web work, retain direct URLs, access dates when time-sensitive, selection or
search method, source type, and reasons not to generalize from the sample.
Prefer primary sources for factual status. Do not call a literature or market
summary raw evidence: it is analysis whose claims point to raw sources.

## Current-best model under `docs/`

Suitable for expert models, product success, market/audience understanding,
game design, testing strategy, architecture, or development guidance.

```markdown
# Topic

Status: living best guess | draft proposal | approved decision |
conditional specification | review snapshot | historical
Last material update: date and evidence/change

## Decision use
What future choice this model informs.

## Current best guess
The shortest usable conclusion, with conditions and confidence if useful.

## Why
Evidence links, mechanism, assumptions, and claim status.

## Strongest alternatives
Only alternatives still capable of changing a decision.

## Discriminating evidence
Observations, tests, or expert answers that would favor one live model.

## Consequences
What changes in design, implementation, review, or prioritization.

## Known gaps
```

Update this document when contrastive evidence changes the best guess. Do not
append a second “latest” section while leaving the old conclusion active.

## Decision record

For a narrow durable choice, preserve:

- decision and date;
- decision owner and approval state;
- alternatives considered;
- evidence and assumptions that selected the choice;
- scope and consequences;
- reversal conditions.

Use a separate record only when the decision needs independent lifecycle or
audit history. Otherwise keep it in the owner document.

## Repeatable workflow

Use this ladder:

1. **One-off exploration:** worktree or scratch note.
2. **Repeated judgment:** skill instructions or a conditional reference.
3. **Stable repeated transform:** script, schema, generator, or code API.
4. **Stable acceptance boundary:** test, linter, hook, or deterministic check.
5. **Universal project boundary:** concise `AGENTS.md` rule only if nearly every
   agent benefits from loading it.

A workflow record should tell an agent:

- when it triggers and when it does not;
- desired outcome and decision served;
- required inputs and source-of-truth order;
- outputs and ownership boundaries;
- judgment points and available alternatives;
- validation and verdict scope;
- common failure modes;
- stop, escalation, and handoff conditions.

## Converting Sol-level reasoning for Luna or Terra

The goal is not to make a lower-cost model imitate hidden reasoning. Extract the
stable structure that made the result good:

1. Have the reasoning agent return source pointers, assumptions, alternatives,
   conclusion, and reversal conditions.
2. Identify reusable ontology, decision rules, examples, counterexamples,
   failure modes, and checks.
3. Put domain best guesses in `docs/`; put the repeated procedure in a skill;
   turn mechanical steps into scripts or tests.
4. Give the execution agent a bounded artifact, explicit ownership, expected
   handoff, and validation criteria. Do not make it reread the full research
   history unless its task actually depends on it.
5. Forward-test with a fresh Luna or Terra agent on a realistic raw task. Check
   the artifact, not whether it repeats preferred wording.
6. Escalate only the unresolved judgment crux; do not rerun the entire workflow
   at higher effort.

### Example: web investigation

- Luna writes a dated source-grounded research record under `docs/research/`
  with method, direct sources, status, limits, and contradictions.
- Sol synthesizes the decision-relevant best guess and alternatives in the
  relevant `docs/` owner file.
- A later Luna refresh updates evidence; the owner document changes only if the
  new evidence is contrastive.

### Example: expert model

- Preserve Jörn's statement or attributed paraphrase under `docs/jorn/` with
  quotation status and a raw session pointer when available.
- Record the project's current causal model, rival hypotheses, conditioning,
  and policy consequences in `docs/expert-model/`.
- Keep diagnostic game frequencies out of the expert claim unless separately
  supported.

### Example: market or public-discourse research

- Preserve the purposive sample, channel findings, comparables, source pointers,
  and limits in the relevant `docs/research/` record.
- Put the current audience/distribution or teaching-priority model under
  `docs/research/` or the relevant product owner directory.
- Distinguish channel existence, demand, virality, learning, influence, and
  policy effect.

### Example: implementation

- Put the current intended behavior and reasons in the relevant specification.
- Put actual behavior in code and focused tests.
- Put repeatable authoring or migration mechanics in scripts or APIs.
- Do not treat the implementation's convenient abstraction as expert truth.

### Example: process failure

- Preserve a postmortem when the failure supplies evidence for future work.
- Promote only recurring, robust learning into `AGENTS.md`, a skill, a script,
  or a test.
- Keep session chronology out of always-loaded context.
