# Repository restart: inventory and proposed checkpoint

Status: draft proposal for Jörn, 10 October 2026; no cleanup, framework selection, domain approval, or merge has been performed. This records a bounded inventory, not a literature review or proof that the repository is fully recoverable. Sources are the local checkout at `2552820`, Git metadata, three read-only Luna inventories checked by the root, local validation, and the primary technical documentation linked below. Revisit the recommendation when the next concept or execution environment becomes concrete. Cost ranges are engineering estimates, not measured agent timings or quotations.

## Recommendation

Create a checkpoint whose active contents are **preserved expert input, a usable source corpus, and portable setup instructions**. Keep the old game and its development reasoning recoverable, but stop presenting them as the current plan. Do not put a dummy game or a React/Vite game scaffold in the active checkout yet. Retain the existing literature-decryption tools and safe repository configuration. Describe browser-setup options in `INSTALL.md`; do not create a separate browser package before an actual rendering/testing task establishes its value.

This is a decision about separate layers. Browser inspection can serve an HTML mock, a React game, or a canvas prototype; it need not choose the game framework. Cloud deployment records can preserve an account/project route without activating old build configuration. A dated literature catalog can help find sources without claiming that research is complete.

The main cleanup risk is inherited authority: an agent-written synthesis, search-completion claim, or old product preference silently becoming a premise for the next attempt. File age alone cannot detect this. A false original claim remains false even if labeled historical; a valuable old source remains valuable. Preserve its evidence and assess each reused conclusion for the new question.

## Inventory

The baseline has **260 tracked files**, grouped below. Main was clean before this task. Source is about **1,940 lines across 19 files**, rather than a large irreplaceable application. There are no tracked raster/font assets in this checkout. This inventory covers paths and sampled content; it does not validate every statement in the corpus.

| Surface | What exists | Proposed disposition |
| --- | --- | --- |
| Jörn input: `docs/jorn/` — 5 files | May direct excerpts; three July attributed paraphrases; a question packet containing agent synthesis | Consolidate the four response/excerpt records into one discoverable `docs/expert-input.md`, preserving dated topic sections, context and quotation status. They total about 5,200 words; three July files together are only about 1,560. The 1,280-word agent question packet is preparation, not Jörn's answer; retain necessary question context without laundering it into expert input. |
| Expert synthesis: `docs/expert-model/` — 13 | Causal atlas, key claims, forecasts, provenance, alternative hypotheses | Preserve as dated, inspectable candidate reasoning. Reuse by question; do not inherit “current beliefs” or source-selection rules automatically. |
| Research: `docs/research/` — 8 | Legal maps, public-discourse/audience work, UX and source checks | Retain dated investigations and their sources/limits. Refresh relevant claims when reused; these are neither exhaustive searches nor evidence of demand. |
| Literature — 119 tracked files | 98 Markdown, 16 text, 4 encrypted documents, and a local ignore file; includes index/readme/public recipient metadata | Keep the corpus. At roughly 7.3 MB, physical retention is cheap; judging source quality and completeness is the expensive part. Preserve conversion-versus-synthesis distinctions. |
| Game specifications: `docs/game-model/` — 9 | `model.yaml`, causal/trace semantics, opening-slice/UI specifications, implementation map | Historical specification and mechanism quarry. A new concept should create its own intended model; do not pretend the old YAML is its specification. |
| Product/game-design: `docs/product/` — 4; `docs/game-design/` — 3 | Success/allocation models, architecture portfolio, compact-loop experiment, event grammars | Optional historical design evidence. Archive the prior allocation and concept-specific prescriptions. Salvage relevant failure evidence when needed. |
| Review: `docs/review/` — 13 | Audits, forecasts, elicitation, pruning, review routing | Dated evidence with the original verdict scope. A prior agent acceptance is not current product approval. |
| Other docs — 5; root recovery records — 4 | Knowledge map, strategy/crosswalk/gaps/environment; handoff, salvage, postmortem, shutdown audit | Rewrite active navigation around the new attempt; retain useful history outside the default reading path. Do not use the old handoff as a bootstrap prompt. |
| Application: `src/` — 19; `test/` — 9; `e2e/` — 1 | Typed treaty simulation, fixtures, React interface, unit/browser tests | Pin the baseline in recoverable Git history. Port only named mechanisms justified by the new concept. The 675-line engine and tests are substantially scenario-specific. |
| Toolchain/root files | React 19, TS 5.9, Vite 7, Vitest 3, ESLint 9, Playwright 1.62, Wrangler 4; HTML/build/test configs and lockfile | Retire active game build/test wiring together. Preserve a setup reference, rather than create a separate browser dependency package speculatively. |
| Ops/config | One GitHub workflow, `.githooks/pre-commit`, `.gitleaks.toml`, `wrangler.toml`, ignores, editor/Codex config | Keep general secret exclusions/scanning and reviewed portable setup. Record Cloudflare details as provisional recovery information. Review host-specific Codex/editor configuration rather than assuming portability. |
| Agent guidance: `.agents/` — 27 files, 9 skills; `AGENTS.md` | Project outcome/authority plus conditional workflows and references | Review maintained callers and old context assumptions. Preserve applicable authority boundaries; do not carry the entire old harness forward unexamined. Changes require Jörn review. |

Top-level counts reconcile: root files 20, `.agents` 27, `.codex` 1, `.githooks` 1, `.github` 1, `.vscode` 1, docs 60, e2e 1, literature 119, scripts 1, src 19, test 9.

## Preservation is partly outside Git

All four encrypted literature files have ignored plaintext copies in the main checkout, including `literature/iabied-book.md`. The book's ciphertext and `scripts/decrypt-literature.sh` are tracked. `age` is installed, but `LITERATURE_KEY` is unset here and the root `.env` is absent. A new worktree or clone therefore does **not** inherit the readable book or establish that it can be decrypted. Keep the existing readable copies in their private owning corpus, retain ciphertext, the public recipient and encryption/decryption instructions, and establish a recoverable key route before relying on a clone. The implementation checkpoint should identify an owner-controlled backup location and restore route, compare backup plaintext checksums, and verify ciphertext decryption against the retained plaintext once a key is available. Current possession alone is not a backup; no backup/key recovery was performed here. No key or plaintext was copied into this report.

The May excerpts preserve direct wording. The July response files explicitly lack raw-session pointers; retain them as attributed paraphrases with that limitation. Handoffs cite old `/home/vscode/.codex/sessions/...` paths that are unavailable here. This task did not search raw session logs. A future recovery task should seek those sources rather than claim the paraphrases are complete expert input.

The retired baseline `0c5262c34c423cc62b68124d30d002b4886b879f` and curated evidence commit `234bf611506475d6c6d039ae67b61514d233a551` exist locally and are reachable from retained refs. Several named prototype/research commits do **not** resolve locally: `7cbf546`, `7f23bc2`, `1c6f376`, `cf563b7`, `a759485`, `b3f0be9`. Their content may exist elsewhere, but old “branches remain recoverable” prose is insufficient evidence. Current research documents do exist on main; unavailable original commits do not imply those documents are lost.

Inspect/back up branch-only work before any pruning: `docs/sandbox-winddown` adds an `INSTALL.md` and environment changes; `codex/knowledge-integrity-repair` and `codex/jorn-message-protocol` contain documentation/harness differences and require review rather than a wholesale merge. Both pre-existing worktrees were clean. Local `origin/main` matches main, but no fresh remote fetch or external backup verification was done.

## Concrete stale-claim risks

These examples are evidence of risky wording or routing, not proof that a future agent will obey it.

| Location | Risk | Cleanup treatment |
| --- | --- | --- |
| `docs/jorn/jorn-review-batch-1.md:7` | Says “standard literature work” and initial causal work were completed, without a defined search scope or cutoff | Retain as a description of preparing that packet. Remove it from active research-completion claims. A source catalog never establishes that the present question has been researched adequately. |
| `README.md:63` | Prescribes the “next high-level review” reading order from the prior attempt | Replace active navigation; do not make new agents read the old model before understanding their new task. |
| `docs/product/PRIORITY_DECISION_LEDGER.md:16` | “Current allocation” selects an old operational-control experiment; later instructions defer broad research/production | Historical allocation only. It cannot prohibit research needed by the new concept. |
| `docs/game-design/README.md:35` | “Build a case-driven Director campaign,” despite exploration status | Retain a dated proposal, remove its current imperative authority. |
| `docs/expert-model/README.md:5` | Presents the atlas as current project belief and routes readers to its current synthesis | Make its last substantive review/status legible; fresh questions can challenge the synthesis and seek omitted evidence. |
| `docs/expert-model/provenance.md:26` | Defaults to a named expert school; exact claim sourcing remains incomplete | Preserve any verified Jörn source preference as an attributed choice. Do not mistake the selection policy for a research finding or a reason to exclude contrary evidence. |
| `docs/development-environment.md` | Calls old surfaces supported; describes a retained sandbox and repository-owned Herdr skill not present in this checkout | Keep historical setup facts separate from tested present support. Replace the active environment contract. |

There is also counterevidence: `literature/README.md` warns about conversion/accuracy, `docs/expert-model/source-index.md` calls itself a compact bibliography, and the dated source check explicitly says it is not a complete literature review. Do not rewrite these as if they claimed completeness. We did not find Jörn's hypothetical exact phrase “extensive literature list.”

A useful cleanup test is whether a fresh agent asked a question beyond the catalog searches outside it, recognizes the old campaign as optional, and distinguishes Jörn's words from agent interpretation. Test observable decisions on representative tasks after changing the guidance. Extra warning headers alone do not establish improvement. Context-dependent aesthetic preferences should retain their original artifact/context; ask Jörn again once a new visual direction makes the question concrete, instead of imposing an old palette rule.

## Actual stack condition

`npm run check` passed: typecheck, lint, **43 unit tests in 9 files**, and build. The generated JS bundle was approximately 229 kB, 72 kB gzip. No fresh `npm ci` was performed: checks used existing `node_modules` (roughly 413 MB).

Browser validation is **unestablished**: all 51 e2e cases failed before interaction because the expected Chromium binary was missing. The host has Node **22.23.2** and npm **12.0.2**; `.node-version` and package engines require Node **24.20.0–24.x**, the package manager field says npm **11.19.0**, and CI selects Node **22.22.1**. Passing local checks does not resolve this environment disagreement.

The lockfile audit reported **9 findings: 1 moderate, 6 high, 2 critical**, on development-tool paths. Critical findings involve Vitest/tinypool; the suggested complete fix includes a breaking Vitest upgrade. These findings do not establish an exploitable shipped React bundle, but they are real maintenance work if retaining the old toolchain. Audit JSON is temporary evidence at `/tmp/xrisk-repo-inventory-20261010/audit.json`.

`.github/workflows/deploy.yml` currently validates; it contains no upload step. `wrangler.toml` names Pages project `global-pause` and `dist`. Account access, live production/preview branches, domain routing and Access protection were not verified. Keeping these two files is not preserving a demonstrated working deployment service.

## Costs and alternatives

Estimates below assume one competent implementer using agents, an ordinary static browser prototype, and accessible credentials when needed. They include integration/debugging effort; agent elapsed time and API dollars will differ. No billing data was available. Backend, multiplayer, native delivery, content authoring and human validation can dominate these ranges and are excluded. Rows overlap and should not be summed mechanically.

| Work/choice | Estimated engineering effort | Benefit and main risk |
| --- | --- | --- |
| Rough health inventory | 15–45 minutes | Finds visible wiring/debt; cannot establish clean-install portability, game quality or optimality. This session supplied that first pass. |
| Reproduce existing stack in a clean supported environment | 1–3 hours | Tests installation and browser launch. Audit remediation/version alignment may add 2–8 hours; cloud restrictions may block setup. |
| Recreate a local minimal web scaffold | 1–3 hours | Templates make build wiring cheap. A consistent CI/test/browser baseline is closer to 4–8 hours total. |
| Meaningful stack-fit comparison after concept selection | 4–12 hours | Compare one important interaction on real phone-sized surfaces in one or two candidates, including authoring/debugging and necessary persistence. Before that, 30–60 minutes can identify constraints, not “the optimal stack.” |
| Adapt old app into a neutral shell | 2–6 hours, plus debt repair | Reuses configuration, but stripping scenario code/tests/copy and old visual assumptions can cost as much as a fresh shell. |
| First verified static preview, after local build works | Additional 1–3 hours if existing account is usable; 3–8 with account/access/routing work | Hosting can remain independent of React or a renderer. Cloud authentication, protection and production behavior must be checked. Changing provider may cost 4–12 hours. |
| Remove active game stack safely | 1–3 hours | Deleting files is quick; preserving refs/local-only data and updating CI/docs/guidance is the work. Code can be restored; missing plaintext/key or session evidence may be much harder to recover. |
| First portable setup runbook | 0.5–1.5 hours for known commands and explicit TBDs | Additional 0.5–2 hours per environment first run is a planning allowance, not a support guarantee. Automating recurring browser work with a package/probe could cost 1–3 hours, justified only when a concrete consumer or repetition exists. |
| Corpus backup and restore check | 0.5–2 hours if an owner-controlled destination and key route already exist | Missing key recovery or missing original session evidence has no defensible estimate from this audit. |
| Active-document/caller cleanup with focused checks | 3–8 hours for a bounded first pass | Removes old decision authority while preserving evidence. Full reconciliation across 60 docs and 27 guidance files could take 1–3 days; exhaustive corpus truth/coverage review is separate and larger. |

**Keep the whole stack:** fastest if the next game genuinely reuses the current interaction/model. Risks are scenario anchoring, maintenance debt and apparent readiness from passing tests. It becomes preferable if the next concept explicitly selects this prototype as its base.

**Keep a runnable neutral game scaffold:** buys immediate blank-page previews and familiar wiring, but still chooses framework/toolchain before a representative need exists. It becomes preferable when an executable browser prototype is the next task and the likely interaction fits the chosen renderer. Do not describe this as concept-neutral proof of stack fit.

**Keep portable setup knowledge and existing corpus tools, defer new scaffolds — recommended now:** preserves source access and a browser-setup route while paying package/framework setup cost when requirements exist. Risk: the first rendering/playable task still has setup work, and each cloud image needs verification. Record a recoverable old-stack candidate so deferral does not require rediscovery. A dedicated browser package is a later option, not a prerequisite of this checkpoint.

**Keep no setup knowledge or corpus tools:** has the least active tooling, but discards useful decryption procedures and environment learning. Keeping a runbook avoids much of that loss without requiring a new dependency package.

Vite supplies vanilla and multiple framework templates, so choosing its build tooling need not imply React. This supports the low bootstrap estimate; it does not prove any framework is optimal. [Vite setup documentation](https://vite.dev/guide/). Pages accepts prebuilt static assets, independently of their authoring framework. Its project-level Git versus Direct Upload choice has migration constraints, so record the existing mode before assuming interchangeability. [Cloudflare Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/), [Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/).

## Proposed active checkout

```text
README.md                       new attempt, authority, short navigation
AGENTS.md                       reviewed mission/authority and applicable rules
INSTALL.md                      shared setup plus environment sections
.gitignore / secret scanning    includes private plaintext and environment files
docs/README.md                  source/evidence map, no research-completion claim
docs/expert-input.md            dated/topic sections; quotations vs paraphrases
docs/<relevant-topic>.md        other retained notes only where useful to a live question
literature/                     retained corpus, index, encrypted + private readable copies
scripts/decrypt-literature.sh   retain; documented age/key prerequisites
```

This is a proposed layout, not an instruction to relocate every file now. There is no proposed `docs/history/` dumping ground: keep material useful to a live question discoverable under its topic; leave discarded material in a verified Git snapshot with a short recovery pointer. Keep dated expertise easy to reach; exclude old allocation, campaign shape, forecasts, palette choices and machine-specific claims from required orientation. No active `src/`, old game tests, game package/build configs or `wrangler.toml` until selected for a concrete prototype. CI must be revised with this change so it does not invoke missing root game scripts. A browser probe becomes useful when there is an environment to verify; its existence is not required to make the checkpoint look ready.

## Portable environment setup

`INSTALL.md` should own common requirements once, with sections for **Ubuntu workstation**, **Claude chat cloud**, and **ChatGPT Work cloud**. Treat the latter two names as Jörn's intended execution surfaces; do not substitute desktop Cowork or Codex Cloud facts. Each section states what has actually been tested, date/image facts when observed, installation differences, network/privilege limitations, and how outputs/private literature move into and out of that session. Unknowns remain explicit TBDs.

If Playwright is chosen for a concrete task, its CLI separately downloads compatible browser binaries and installs Linux libraries. A version/lockfile helps reproduce the same tool and browser expectations across runs; it also creates update and validation work. That tradeoff does not justify introducing a dedicated browser package now. Pinning the npm package alone does not install Chromium. When supported and permitted, `playwright install --with-deps chromium` combines binary and OS dependency installation. If OS libraries are present, browser-only installation can suffice. If downloads or required privileged package installation are unavailable, report the concrete limitation rather than claim successful browser validation. A launch/render check distinguishes an installed package from an executable renderer. [Playwright browser installation](https://playwright.dev/docs/browsers).

Do not commit a workstation cache or assume a browser binary can be copied across operating systems/architectures. Reuse cache only when its compatibility and persistence are known. Browser testing does not require Cloudflare credentials; literature reading does not require game dependencies; game preview does not require decrypting the book. Setup should support these tasks independently.

Existing setup already mentions browser installation but contradicts itself on locked setup (`npm ci` versus `npm install`) and relies on old external environment configuration. A single active runbook plus small reusable commands would be more portable than another host-specific installation. Cloud sections should first record: actual OS/architecture, Node/npm, install permissions, package/browser network reachability, process/port access, screenshot inspection and file persistence/export. **TBD: fill and verify on first use** is appropriate for facts this inventory cannot establish.

The bounded cloud-documentation search did not establish a shell-install contract for Jörn's intended Claude chat or ChatGPT Work environments. Related products are not substitutes: documentation for Claude Code web, desktop Cowork, Codex Cloud, or a remote cloud browser does not establish their VM image, shell privileges or persistence. First-run observation should fill those gaps. If a surface provides only a managed renderer/browser, use that capability and record its limits instead of requiring an unavailable local install path.

## Execution and acceptance

1. Preserve the baseline and verify recovery of corpus/plaintext, relevant refs and branch-only work. A Git tag alone does not preserve ignored files or absent commits.
2. Prepare the new active navigation, reviewed guidance changes, retained-source disposition and portable setup instructions in a worktree. Do not overwrite expert excerpts to make them look current.
3. Check remaining callers/links and representative fresh-agent behavior: beyond-catalog research, optional old game concept, source-versus-synthesis attribution. A syntax pass alone cannot establish these behaviors.
4. Verify source access and browser setup in the environments actually used. Record unsupported or untested surfaces plainly. Add game build/hosting only when a selected artifact needs them.
5. Submit the concrete checkpoint for Jörn review before merging, especially `AGENTS.md` and skill changes. Check provider-side build/deploy triggers before merging a stack removal: the lack of a GitHub upload step does not rule out Cloudflare Git integration reacting to main. Domain/player-facing claims remain draft until approved.

This proposal does not establish literature completeness, expert-model accuracy, human fun/learning, live deployment readiness or cloud-environment support. It gives a bounded starting inventory and a reversible path that preserves costly inputs while allowing new evidence and a new game concept to change the implementation.
