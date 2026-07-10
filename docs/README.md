# Docs

This folder contains durable agent-facing architecture and quality-evaluation
material.

- `architecture.md`: current architecture decisions, alternatives considered,
  decisive reasons, and update triggers for engine, UI, and deployment.
- `expert-context.md`: compact epistemically labeled project/domain context for
  future content work. It replaces stale pre-cleanup `design/` notes.
- `expert-model-chat-excerpts.md`: raw Jörn chat excerpts recovered from an old
  expert-model extraction branch; source layer for exact wording checks.
- `expert-model-recovered.md`: recovered expert-model synthesis over those
  excerpts; useful for content planning but fallible until checked.
- `quality.md`: shared quality model for developers and reviewers.
- `development.md`: practical guidance for planning and implementing changes
  toward the quality model.
- `review.md`: automated checks, manual review workflows, blind spots, and
  early exits for behavior, UI, code, content, deployment, and performance.
- `cards-export.md`: generated card review export from `npm run cards`.

These docs are meant to be maintained when context changes. They are not source
truth over code, tests, Jörn decisions, or source notes.

## File Roles

| File | Purpose | Primary readers | Primary editors | Read when | Edit when | Do not put here |
|---|---|---|---|---|---|---|
| `architecture.md` | architecture reasoning, rejected alternatives, pivot triggers | architecture/dev/review agents | agents changing architecture or documenting a pivot | changing engine/UI/deploy/tooling shape | architecture rationale, alternatives, or pivot triggers changed | generic TypeScript/React advice; current work status |
| `expert-context.md` | compact epistemically labeled domain/project context | content/dev/review agents | agents recording Jörn context or source-routing changes | touching card content, claims, terminology, or domain assumptions | Jörn context, source routing, or open domain questions changed | broad stale design notes; unapproved claims framed as truth |
| `expert-model-chat-excerpts.md` | raw recovered Jörn excerpts | content/review agents checking exact claims | agents preserving recovered raw source excerpts | exact wording or attribution matters | better raw source layer is recovered | polished synthesis; game prose |
| `expert-model-recovered.md` | recovered expert-model synthesis | content/dev/review agents | agents preserving or correcting recovered synthesis | planning expert-grounded mechanisms or prompts to Jörn | Jörn corrects it or raw excerpts show compression errors | final ontology; approved card text |
| `quality.md` | shared quality target for developers and reviewers | all dev/review agents | agents updating quality after observed failures, Jörn decisions, or playtests | planning or reviewing nontrivial work | "what good means" changes | command checklists; implementation maps |
| `development.md` | practical developer-agent guidance from the quality model | developer agents | agents changing implementation workflow or developer conventions | implementing code/content/docs/tooling | routes, commands, contracts, or repeated developer failures change | reviewer checklists; long architecture arguments |
| `review.md` | checks, review workflows, blind spots, early exits | reviewer/tester agents, dev agents choosing validation | agents changing tests/review workflows or known blind spots | validating work or delegating review | commands, coverage, review lenses, or risks change | quality definitions; implementation how-to |
| `cards-export.md` | generated card review export | content/review agents | `npm run cards` only | reviewing card groups/rates/state references | never by hand; regenerate after card edits | hand-written source truth |

If a docs file becomes hard to use even with headings and grep, split by
reader/task. If a file stops being a current route for agents, delete or demote
it instead of preserving history.
