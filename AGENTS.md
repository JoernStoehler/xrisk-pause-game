# Project guidance

## Outcome

Build a serious, mobile-first game about directing an international agency during a global pause on dangerous AI development. The game should help players understand that a global pause treaty could work, that a pause is active crisis management, and how to recognize blatant misunderstandings or false claims about what such a treaty needs under different threat models. Law, authority, hardware control, evidence, technical progress, institutional response, and hidden events can diverge.

Fun, realism, and political and scientific detail serve that public-understanding goal. Passing tests or deploying a build is not project success by itself.

## Authority

- Jörn owns domain approval; expert-grounded content remains draft until he approves it.
- Keep `main` available for independent work. Make tracked changes in a worktree unless Jörn asks for an exact edit on `main`. Merge to `main` only after Jörn approves.
- Changes to this file or repo-local skills require Jörn review before merge.

## Work ownership

- Own the assigned outcome, not merely the requested artifact. Relate local choices to the project outcome, respond when evidence undermines the current route, and change direction within scope rather than completing work that no longer serves its purpose.
- Continue until the assigned outcome is complete, explicitly paused, or blocked after accessible work is exhausted. When progress requires a scope change, private context, or judgment outside the assigned authority, return the evidence and concrete crux through the parent.
- Treat tests, reviews, and other checks as evidence only for what they actually establish. State the artifact, conditions, verdict scope, and material dimensions that remain unreviewed when handing work off.

## Coordination

- Delegate independently bounded work when it enables parallelism or keeps task-internal context out of the coordinating thread. Give each agent the context, ownership, concurrent-work constraints, expected handoff, and validation criteria needed to work independently; subagents may delegate under the same condition.
- Give concurrent workers non-overlapping write ownership. Coordinators integrate and validate returned work; unresolved needs move through the parent, and the root involves Jörn only when his domain input or approval remains necessary after accessible work.

## Trust and claim status

- Source code and tests define implemented behavior. `docs/game-model/model.yaml` defines the intended symbolic model where code does not yet exist.
- Dated records in `source/` are the closest available layer to Jörn's statements. The July records are polished paraphrases unless explicitly marked as quotations. `source/jorn-review-2026-05-11-raw-excerpts.md` preserves older direct excerpts.
- Expert-atlas documents are project synthesis. Keep source fact, Jörn judgment, project inference, diagnostic fixture, playability transform, and approved player-facing claim distinct.
- Do not turn diagnostic fixture frequencies or unresolved quantitative judgments into forecasts.
- The retired repository is recoverable at commit `0c5262c34c423cc62b68124d30d002b4886b879f`; do not retain old architecture merely to reduce a diff.

## Knowledge placement

- Put the current best project understanding in the narrowest relevant location under `docs/`: success and impact models, evidence gates, review and testing strategy, product or game-design reasoning, and development guidance. For material uncertainty, link the supporting evidence and reasoning, preserve the strongest live alternatives, and state what future evidence would discriminate among them. Update the best guess when contrastive evidence changes it. Keep implemented behavior in code and tests, and intended symbolic behavior in `docs/game-model/model.yaml`.
- Put dated inputs beneath that synthesis in `source/`: Jörn records, web or literature investigations, source maps, sampling or search methods, and material limitations. Synthesis must link to its evidence and preserve the distinction between observation, attributed judgment, and project inference.
- Preserve decision breadcrumbs that let a future agent check and revise the result: the question, source pointers, assumptions and claim status, current conclusion, confidence when useful, and remaining discriminators. Do not preserve raw reasoning or transient process when it adds no verification or decision value.
- Put session recovery or process learning in a handoff or postmortem only when future work depends on it. Temporary exploration may remain in a worktree or scratch location; promote it into `source/`, `docs/`, code, or tests only when it becomes durable project knowledge.

## Validation

Use the smallest relevant set, then run the full set before a preview or merge:

```bash
npm ci
npm run check
npm run test:e2e
npm audit --audit-level=high
git diff --check
```

For model changes, add a focused deterministic test. For UI changes, render and inspect desktop and mobile layouts. For deployment work, read `.agents/skills/deploy/SKILL.md`.
