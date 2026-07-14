# Project knowledge map

`docs/` holds durable human-readable project knowledge. Files may be curated
source extracts, analysis, living models, decisions, specifications, or review
results. The role is stated at the top of the file rather than inferred from a
universal metadata format or directory name.

A format-native opening note—introductory prose in Markdown, a docblock in code,
ordinary metadata where a data format supports it, or a companion manifest—
should make clear what the artifact is, its status and authority, the raw
sources it derives from, and how it should be interpreted or updated.

Living models should preserve strong alternatives and state what future source,
argument, test, or review would discriminate among them. Source extracts should
preserve quotation/paraphrase status and a precise pointer to the raw artifact.

## Current areas

- `expert-model/`: current beliefs about the treaty/AI territory, reasons,
  rivals, provenance, and disagreements. Start with `expert-model/README.md`.
- `game-model/`: deliberate executable approximation, omissions, state,
  transitions, trace semantics, and intended symbolic behavior. Start with
  `game-model/README.md`; `game-model/model.yaml` is the intended symbolic
  source where code does not yet exist.
- `review/`: review packets, adversarial audits, elicitation interfaces,
  coverage and pruning records. Treat dated verdicts as scoped evidence, not
  timeless truth. The dated
  `review/context-architecture-assumption-audit-2026-07-13.md` records a
  provisional process correction; it is not project architecture policy.
- `jorn/`: curated excerpts, attributed paraphrases, and elicitation packets.
  These files must state whether wording is verbatim and point to a raw session
  when that pointer is available.
- `research/`: literature, legal, product, market, and public-discourse
  investigations. A research file may contain reasoning as well as citations;
  its opening note should identify the scope, method, limits, and decision use.
- `ARTIFACT_STRATEGY.md`: current presentation strategy.
- `CURRENT_GAPS.md`: current development gaps and boundaries.
- `SELECTIVE_CROSSWALK.md`: selected expert-to-game representation bridge.

Product, research, and game-design synthesis should use clear owner directories
such as `docs/product/`, `docs/research/`, and `docs/game-design/` when present.
Avoid duplicate “latest” summaries: update the owner document when evidence
changes the best guess, preserve still-live alternatives and discriminators,
and rely on Git history for obsolete text without continuing decision value.

Raw session logs remain in the Codex session store; downloaded source corpora
remain under `literature/`; implemented behavior lives in code and tests.
Repeated conditional workflows belong in `.agents/skills/`; universal project
boundaries belong in `AGENTS.md`.
