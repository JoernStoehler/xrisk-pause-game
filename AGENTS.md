# Project guidance

## Outcome

Build a serious, mobile-first game about directing an international agency during a global pause on dangerous AI development. The game should help players understand that a global pause treaty could work, that a pause is active crisis management, and how to recognize blatant misunderstandings or false claims about what such a treaty needs under different threat models. Law, authority, hardware control, evidence, technical progress, institutional response, and hidden events can diverge.

Fun, realism, and political and scientific detail serve that public-understanding goal. Passing tests or deploying a build is not project success by itself.

## Authority

- Jörn is the domain owner. He also has prompt, harness, and agent-engineering expertise available when relevant. Expert-grounded content remains draft until he approves it.
- Keep `main` available for independent work. Make tracked changes in a worktree unless Jörn asks for an exact edit on `main`. Merge to `main` only after Jörn approves.
- Ask before changing production routing, credentials, Cloudflare project settings, or other external state not already authorized by the task.
- Changes to this file or repo-local skills require Jörn review before merge.

## Coordination

- Delegation is useful when bounded work can proceed independently or when its internal context is substantially larger than the result its parent needs to integrate. Subagents may delegate further when the same condition holds. Avoid concurrent write ownership that requires agents to reconcile the same files or decisions.
- A delegation should identify why the work matters and where it sits in the current workflow; its ownership and relevant concurrent work; the required context or repository sources; the expected deliverable and next consumer; and the acceptance, validation, and handoff conditions. Fork conversation history when it is materially required; otherwise provide bounded context and let the receiving agent retrieve supporting context from the repository.
- Agents resolve what they can within their scope through accessible work. Unresolved questions and blockers, together with recommendations that require coordination, return through the coordinating parent. Each coordinating agent passes upward the evidence, work already performed, recommendation, and specific missing input. The root involves Jörn when his approval, domain judgment, unavailable external access, or review of an already-developed artifact is the remaining scarce input.
- Coordinating agents remain responsible for integrating and validating returned work. Workstream boundaries and agent lifetimes are temporary; revise them when the work becomes differently coupled.

## Trust and claim status

- Source code and tests define implemented behavior. `docs/game-model/model.yaml` defines the intended symbolic model where code does not yet exist.
- Dated records in `source/` are the closest available layer to Jörn's statements. The July records are polished paraphrases unless explicitly marked as quotations. `source/jorn-review-2026-05-11-raw-excerpts.md` preserves older direct excerpts.
- Expert-atlas documents are project synthesis. Keep source fact, Jörn judgment, project inference, diagnostic fixture, playability transform, and approved player-facing claim distinct.
- Do not turn diagnostic fixture frequencies or unresolved quantitative judgments into forecasts.
- The retired repository is recoverable at commit `0c5262c34c423cc62b68124d30d002b4886b879f`; do not retain old architecture merely to reduce a diff.

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

For Cloudflare token authentication, check presence without printing the value, then query the Pages project:

```bash
test -n "${CLOUDFLARE_API_TOKEN:-}"
npx wrangler pages project list
```

An environment-provided API token is already an authentication method. Do not run `wrangler login` unless deliberately replacing token authentication with OAuth. The main checkout's ignored `.env` is Wrangler's local credential source; untracked files do not appear in git worktrees. For a nested `.worktrees/<name>` worktree, verify `.env` is ignored and link it to `../../.env` without reading or copying its contents.
