# TypeScript Skill Creation Report

Date: 2026-05-10.

## Scope

This report records observed events from creating the local `$typescript` skill.
It is not a general skill-writing guide.

## Starting Point

- Jörn and Codex discussed a TypeScript code convention: when local standard
  code and a helper abstraction are about equally easy to read, prefer the
  local code plus a comment or regression test.
- The motivating code example was history lookup in card logic. Jörn rejected
  a helper abstraction because it added indirection without making the local
  code simpler to read.
- Jörn asked where to encode the rule and whether an analogue to the `msc-math`
  Rust skill existed.

## Rejected First Pass

- Codex first placed the rule in `$project-quality` and committed it.
- Jörn rejected that placement: the rule was downstream of project quality but
  local to code and architecture.
- Codex then created and committed a new `$typescript` skill and updated
  `$harness-engineering` to list it, without first getting approval for the
  exact skill body.
- Jörn flagged this as a durable instruction change committed without approval.
- Codex reverted the unapproved repo-state change. The current tree no longer
  contained the unapproved skill or the harness list entry after the revert.

## Approved Later Pass

- Codex created a draft outside the repo at `/tmp/typescript-skill-draft/`.
- Jörn rejected drafting in chat; the draft artifact stayed in `/tmp`.
- Codex iterated the draft against the observed incident, the existing
  `$harness-engineering` skill, the system `$skill-creator` skill, and
  `msc-math` `$rust` / `$python-conventions` examples.
- Jörn added skill-writing constraints during review:
  - KISS and YAGNI;
  - remove speculation not grounded in observed usefulness, established
    suggestions, or copied instrumental objectives;
  - use plain language, standard terminology, and low cognitive overhead;
  - focus on how to tell the result is good, not prescribing implementation
    steps that GPT-5.5 can choose itself.
- Codex revised the draft from prescriptive "Conventions" wording toward
  "Quality Signals."
- Jörn approved the final draft.
- Codex copied the approved draft into `.agents/skills/typescript/SKILL.md`,
  updated `$harness-engineering` to list `$typescript`, ran lightweight harness
  checks, and committed the approved change.

## Observed Failure Modes

- "Committed" was an insufficient status report because it did not distinguish
  committed, pushed, loaded by the current Codex session, and approved as
  durable instruction material.
- Reporting commit hashes did not answer Jörn's question about semantic and
  approval state.
- Repeating broad project or maintenance goals obscured the live goal: encode
  the local-code-over-helper rule in durable instruction material.
- A first draft was not ready for Jörn review merely because it existed. Jörn
  expected Codex to iterate, review, and test the skill draft first.
- A plausible instruction was not enough. Jörn asked to remove advice that had
  not been observed to be useful or imported from an established source.

## Observed Checks

- `git diff --check` caught no formatting issues for the approved skill change.
- `bash scripts/toc.sh .agents/skills/typescript/SKILL.md
  .agents/skills/harness-engineering/SKILL.md` showed the expected sections.
- The system `quick_validate.py` could not run in this environment because
  Python `yaml` was unavailable.

## Final Skill Shape

- The approved `$typescript` skill is short and has one body section:
  `Quality Signals`.
- It records the observed abstraction rule, the current app/engine/component
  split, and the accepted regression-breadcrumb practice.
- It does not include scripts, references, assets, or a longer process.
