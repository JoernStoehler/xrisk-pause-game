# Context-architecture assumption audit

This is a provisional self-audit of claims made by the coordinating root on 2026-07-13 while discussing how project context should be exposed to agents. It is not project policy or a settled architecture. Its purpose is to expose the root's evidence and inferences to adversarial review. Authority remains with `AGENTS.md`, the owner documents linked by `docs/README.md`, and Jörn. Update this file by preserving challenged claims and appending the resulting verdict rather than silently rewriting the history.

## Established evidence

- `AGENTS.md` says durable human-readable knowledge belongs in the narrowest relevant location under `docs/`, while implementation belongs in code and tests and intended symbolic behavior belongs in `docs/game-model/model.yaml`.
- `docs/README.md` describes itself as the project knowledge map, asks artifacts to state their role and authority, and says to avoid duplicate "latest" summaries by updating the owner document.
- The repository does not currently define `PROJECT_STATUS.md` as an authoritative surface.
- Project policy deliberately permits tracked experimental work to remain in worktrees until Jörn approves a merge to `main`.

## Claim ledger

| Root claim or move | Evidence available at the time | Classification | Correction or remaining question |
|---|---|---|---|
| The lack of `PROJECT_STATUS.md` indicated inadequate orientation. | No such file was present; however, `docs/README.md` already defined a knowledge map. No fresh-agent orientation test had been run. | Unsupported inference from absence of one proposed artifact. | Separate discovery failures from missing documentation. Test the existing interfaces before concluding that a new summary is needed. |
| A central `PROJECT_STATUS.md` was the likely remedy. | It was one design alternative raised in discussion, not a repository decision or demonstrated remedy. | Proposal presented too much like a conclusion. | Keep it as an alternative only. Compare it with registry-plus-local ownership and with improvements to branch/workstream discovery. |
| The current best guess needed the refinement that the registry should not duplicate local status. | `docs/README.md` already rejected duplicate latest summaries, and Jörn's description already gave local surfaces ownership. | Factual misreading and false attribution. | No refinement was needed; the root imported a problem from its own earlier `PROJECT_STATUS.md` proposal. |
| Important current state should be visible on `main`. | Worktree policy intentionally keeps unapproved tracked work off `main`. Some branch-only evidence was harder to discover. | Observed discoverability problem converted into an unsupported storage conclusion. | Determine whether branch/workstream indexing is insufficient; do not infer that experimental state belongs on `main`. |
| Not visible from `main` meant not adequately documented. | Several relevant artifacts existed on the handoff branch. | Error. | Visibility, indexing, authority, freshness, and documentation quality are distinct dimensions. |
| Fresh agents should always read `AGENTS.md`, `PROJECT_STATUS.md`, then a workstream spec. | `AGENTS.md` is authoritative. `PROJECT_STATUS.md` did not exist and its value was untested. | Mixed: one repository-supported requirement plus an invented protocol. | Only require documented authoritative entry points. Evaluate additional briefing surfaces empirically. |
| A single integration session should own updates to the proposed status file. | No comparison of ownership models was performed. The prior root session itself exhibited integration bottlenecks. | Untested organizational proposal, with counterevidence. | Treat ownership and synchronization cost as an open design question. |
| Folder READMEs or `COMPONENT.md` files should generally expose product role, quality contract, and state. | Local ownership follows project guidance, but no evidence showed every folder/component needs the same wrapper. | Plausible selective pattern overgeneralized into a default. | Add local interfaces only where a concrete consumer or recurring misunderstanding warrants them. |
| Agents read function bodies because they distrust prose or need semantic details. | No session-log study or controlled comparison established agent motives. | Hypothesis stated as explanation. | Measure what agents open, what task required it, and whether trustworthy interface documentation changes behavior. |
| Better component summaries would reduce token use. | Plausible, but no token or task-quality comparison was run. Summaries also impose reading and maintenance cost. | Untested hypothesis. | Compare representative tasks with and without the proposed surface, including correctness and staleness failures. |
| Volatile coordination requires a separate central cursor. | Worktrees, handoffs, and local workstream artifacts already exist. Their adequacy was not tested. | Proposed solution, not an established requirement. | First identify concrete coordination questions that current owners cannot answer cheaply. |
| Jörn-orchestrated multiple sessions had roughly a 75% chance of outperforming a resumed root. | One root-session failure and qualitative reasoning, with no comparable multi-session trial or calibrated reference class. | Directional hypothesis disguised by spurious numerical precision. | Remove the probability. Test a bounded multi-session arrangement and compare coordination burden and useful output. |
| A larger persistent agent team would be better after Jörn called the team small. | No workload decomposition showed that additional persistent roles had independent value. | Social cue converted into orchestration policy. | Size streams from independently valuable work and integration capacity, not desired headcount. |
| `main` was the deployed baseline. | Branch state could be inspected locally; live deployment state was not checked. | Temporally unstable factual claim without verification. | Say only what local evidence establishes unless deployment is checked. |

## Provisional corrected model

The documented default is a central map and authority index in `docs/README.md`, with durable knowledge and status owned by the narrowest authoritative local artifact. Code and tests own implemented behavior; `model.yaml` owns intended symbolic behavior. Temporary coordination may remain in worktrees or handoffs. This model does not entail a duplicate global synthesis, uniform folder READMEs, or moving experimental state onto `main`. It also does **not** settle whether a central coordination index that owns only branch/workstream pointers would be useful.

That default can still fail in practice. The unresolved questions are whether a fresh agent can discover the right owner quickly, distinguish approved from experimental state, avoid stale summaries, and complete representative work without unnecessary context consumption. A fresh-agent orientation test is a plausible discriminator, not yet proof that documentation is the main bottleneck. It should compare actual tasks and record files consulted, mistaken claims, required corrections, context cost, and outcome quality. Other possible causes—poor task scoping, weak delegation prompts, branch discoverability, or model behavior—must remain live alternatives.

## Independent adversarial review

A fresh Luna-medium reviewer checked the claims against `AGENTS.md`, `docs/README.md`, and the record-project-knowledge skill without editing files. It found the following additional problems:

- The correction “no central status summary is needed” was itself too strong. The project has rejected duplicate latest-state synthesis, not a central coordination index with distinct ownership.
- Worktree policy establishes that branch-local experimental state is legitimate; it does not establish that such state is adequately discoverable.
- A fresh-agent orientation test is an appropriate discriminator because the knowledge-recording skill calls for forward-testing costly workflows, but the test must not assume orientation is the dominant failure or that one small task generalizes to future project work.
- The earlier comparison between root-led and Jörn-orchestrated sessions failed to define “better”: possible metrics include Jörn effort, API cost, useful progress, product outcome, and context loss.
- “Main was deployed” must remain unknown until deployment evidence is inspected.

The reviewer had only a five-turn conversation fork in order to use a cheaper model. It did not inspect the full session JSONL, `FRESH_ROOT_HANDOFF.md`, the postmortem, or deployment records. Consequently it independently tested the repository-architecture reasoning, but could not verify every historical claim about the previous root session. A complete historical audit would require a second pass over those sources.

## Review status

Adversarial repository-guidance review complete. Historical/session-evidence review remains incomplete for the explicitly listed sources above.
