# Project guidance

## Outcome

Build a serious, mobile-first game about directing an international agency during
a global pause on dangerous AI development. Help players understand that a
global pause treaty could work, that a pause is active crisis management, and how
to recognize misunderstandings about treaty requirements under different threat
models. Law, authority, hardware control, evidence, technical progress,
institutional response, and hidden events can diverge.

Fun, realism, and political and scientific detail serve that public-understanding
goal. Passing checks or deploying a build does not establish project success.
The new game concept and stack are undecided; this is a knowledge checkpoint.

## Authority and ownership

- Jörn owns domain approval; expert-grounded content remains draft until approved.
- Keep `main` available for independent work. Make tracked changes in a worktree
  unless Jörn asks for an exact edit on `main`. Merge only after his approval.
  Changes to this file or repo-local skills require his review before merge.
- Own the assigned outcome. Revise your route when evidence undermines it;
  continue through accessible work, then return any concrete unresolved crux.
- State what a check or review establishes and which material dimensions remain
  unreviewed. Agent review cannot establish human fun, learning, or demand.

## Knowledge and claim status

- Start from the question-specific brief linked in `docs/README.md`. Briefs are
  revisable synthesis, not source truth, complete literature coverage, a fixed
  game concept, or standing approval. Recheck time-sensitive claims and search
  beyond retained literature when the question requires it.
- Preserve source fact, attributed Jörn judgment, project inference, diagnostic
  fixture, playability transform, and approved player-facing claim distinctly.
  Do not turn fixture frequencies or unresolved numbers into forecasts.
- `interviews/jorn.md` preserves four dated records. May contains direct excerpts;
  July contains polished agent-written paraphrases, not recovered transcripts.
  New interview records belong under `interviews/`; interpretation belongs in
  the relevant topic brief with a precise source pointer.
- Literature and conversions belong under `literature/`; read its scoped
  `AGENTS.md` before changing the corpus. Inclusion and a confident title do
  not certify fidelity, completeness, authority, or current coverage.
- Put durable interpretations and decision knowledge in the narrowest relevant
  `docs/<topic>.md`. Explain status, sources, assumptions, live alternatives,
  and evidence that would change the conclusion. Compact agent-oriented text
  is fine when its meaning and evidence remain checkable.
- Keep raw logs with their owning system, source text with its corpus, and
  generated data with its producer. Do not copy private session logs into the
  repo. Temporary exploration need not become permanent documentation.
- When code and a specification exist, distinguish implemented behavior from
  intended behavior and cite their actual owners. No game specification or
  symbolic-model file currently has authority by default.
- Earlier work is pinned at `archive/pre-restart-2026-10-10` / `2552820`, and
  the older retired tree at `0c5262c34c423cc62b68124d30d002b4886b879f`.
  Use Git for obsolete records; do not preserve an architecture to reduce a diff.

## Coordination

Delegate independently bounded work when it enables useful parallelism or keeps
task-internal context out of the coordinating thread. Give workers non-overlapping
write ownership, relevant sources and conditions, expected handoff, and validation
criteria. Use `$subagent-prompting` for substantial assignments with non-obvious
context; simple one- or two-sentence assignments can be direct. Coordinators
integrate results and resolve routine issues before involving Jörn in a domain
judgment or scope change.

Repo-local skills are conditional workflows, not additional project objectives.
Use them when their trigger fits; inspect current tool capabilities rather than
assuming a previous host, model family, or cloud environment remains available.

## Validation

For this knowledge checkpoint:

```bash
python3 scripts/check-repository.py
git diff --check
```

The script checks selected local Markdown links and anchors, not truth, external
URLs, or corpus fidelity. For source moves or consolidation, compare preserved
bodies with originals. Keep plaintext and keys out of commits. See `INSTALL.md`
for setup and the retained optional secret-scanning hook.

When game code is introduced, choose and document checks for its actual stack:
focused model behavior tests, desktop/mobile inspection for UI, and appropriate
build and deployment validation. There is no npm or browser requirement yet.

For harness changes use `$harness-engineering-v2`; validate changed skills,
links, discovery and trigger boundaries, and forward-test realistic fresh-agent
tasks in proportion to risk. Instruction recitation and syntax checks alone do
not establish harness quality.
