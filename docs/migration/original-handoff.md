# AI treaty game — Codex handoff

> Historical handoff packet. Its assumed precondition that Jörn had already
> cleaned the repository was false. The completed migration records its actual
> decisions in [`retained-old-material.md`](retained-old-material.md).

Target repository: `github.com/JoernStoehler/xrisk-pause-game`.

Handoff date: 11 July 2026.

## Assumed precondition

**Jörn first cleans the repository for GPT-5.6 and makes a hard cut from the old
game concept and old expert model.**

That cleanup may delete heavily and should include stale `SKILL.md` files or
other orchestration written for GPT-5.5 when they are not independently useful.
Do not spend model or human time salvaging them merely because they exist.

Preserve infrastructure only when it is still useful after inspection—for
example the devcontainer, Cloudflare credentials/configuration, deployment
workflow, domain configuration, and any generic testing/browser setup. Never
copy secrets into committed files or model-facing documentation.

## Migration posture

This packet is the new substantive baseline. The cleaned repository is the
infrastructure host.

- Do not merge the new engine into the old game architecture by default.
- Do not preserve old mechanics, content, state schemas, prompts, skills or
  documentation unless they pass a current usefulness test.
- Prefer deletion/replacement to compatibility layers.
- Treat the prior repository's git history as provenance, not as a design
  constraint.
- Keep any retained old file explicitly labelled as retained infrastructure or
  independently valuable source material.

## Packet contents

- `src/model/` — dependency-free TypeScript diagnostic engine.
- `src/ui/` — first Reigns-style opening-day interface.
- `test/` — model, counterfactual, authority, projection, golden-trace and UI
  reducer tests.
- `docs/expert-model/` — current expert atlas.
- `docs/game-model/` — symbolic specification, executable-slice documentation,
  audits and implementation map.
- `docs/review/` — review/pruning/forecast interfaces.
- `source/` — Jörn reviews and primary/authoritative literature maps.
- `dist/` — last successfully built static prototype.
- `package.json`, `package-lock.json`, `tsconfig.json`, `index.html` — build
  entrypoint.

The packet contains no credentials and no `.git` history.

## Verified state at handoff

- `npm test`: **36 passing tests**.
- `npm run build`: successful production Vite build.
- `npm audit --audit-level=high`: zero known vulnerabilities at handoff.
- Production output: roughly 34 KB JavaScript and 9 KB CSS before gzip.
- YAML architectural specification parses successfully.
- Static UI and model code type-check strictly.

Visual browser QA was not completed because the Work-mode browser refused the
local development URL. The devcontainer/browser environment should make this
the first validation task after migration.

## First Codex session

### 1. Establish the cleaned baseline

1. Inspect Jörn's cleaned working tree and retained infrastructure.
2. Confirm no secrets will be overwritten or committed.
3. Unpack this packet at the repository root, replacing substantive old files.
4. Resolve only genuine infrastructure conflicts (`package.json`, Cloudflare
   config, devcontainer, CI). Do not reintroduce old architecture to reduce diff
   size.
5. Record retained old files and why they survived in
   `docs/migration/retained-old-material.md`.

### 2. Reproduce verification

Run:

```text
npm install
npm test
npm run build
npm audit --audit-level=high
```

The packet currently expects Node 22 or later and uses Vite/TypeScript versions
recorded in `package-lock.json`. If the devcontainer differs, update the
container or deliberately pin compatible tooling; do not silently skip strict
type-checking.

### 3. Use the ready environment

1. Launch the prototype.
2. Test desktop and mobile widths visually.
3. Exercise buttons and pointer/touch swipe through every decision path.
4. Run keyboard/focus and screen-reader checks.
5. Fix clipping, reflow, contrast, focus, touch-target and outcome-announcement
   failures.
6. Deploy an internal preview through the retained Cloudflare setup.

Do not publish publicly; the stochastic sampler is explicitly diagnostic and
not forecast-calibrated.

### 4. Continue substantive work

After UI verification:

1. Add target-specific capability artifacts rather than one global efficiency
   multiplier.
2. Expand custody from one credential Boolean into physical, power, network,
   credential, weight and restart control edges.
3. Connect the new US/PRC authority gates to a first-quarter political chapter.
4. Add distributed-training topology, slowdown, concealment and discovery.
5. Add multi-session/multi-case scheduling, save/load and schema migration.
6. Build actor-local views beyond the DG/retrospective projections.
7. Scale authored cards only through the closed typed-action boundary.
8. Keep forecast parameters, diagnostic fixtures and playability transforms in
   separate versioned namespaces.

## Expert-model constraints to preserve

- Default to Yudkowsky where he has a relevant view; use others for gaps.
- Capability progress is correlated but ragged; benchmark/task observations
  weakly locate lethal/RSI thresholds.
- A dangerous improvement episode may fizzle or outrun response.
- Punishment deters many ordinary actors; proactive factual control covers the
  catastrophic residual.
- Compute, memory, interconnect, algorithms and inference can substitute.
- Legal rules, implementation, factual control, conduct, evidence and DG belief
  are different objects.
- Leakage, run initiation, interruption, withdrawal and re-entry are nonterminal
  transitions.
- A stopped run need not reveal how close it came to catastrophe.
- None of the currently brainstormed safe-ASI routes looks adequate. Jörn's
  leading speculative route involves human uploads/intelligence augmentation
  and unprecedented epistemic institution-building.
- The game must not constrain ASI manifestation to present-day technology.
- No displayed meter may secretly equal true survival probability.
- Same-world replay preserves unrelated draws.

The atlas contains the detailed arguments, rivals, provenance and unresolved
claims; do not replace this list with a scalar design summary.

## Unresolved expert inputs

Do not guess these into release calibration:

1. Whether Jörn's 25%/10% inference numbers refer to entry into a persistent
   roughly 2×/year efficiency regime during one year, during a ten-year pause,
   or another horizon; and whether 25% already conditions on ~10× redirected
   research labor.
2. Whether the release sampler should represent Jörn's full beliefs, explicitly
   condition on easier technical worlds, or apply a disclosed playability
   transform. The current recommendation is explicit easy-world conditioning.
3. The truncated safety-research thought after “or perhaps have enough leeway
   that they don't…”, which controls secrecy, outside labor and political
   legibility mechanics.

Diagnostic implementation may continue around these questions. Do not assign
forecast-colored probabilities until they are answered.

## Reading order

1. `README.md`
2. `docs/review/HIGH_LEVEL_REVIEW.md`
3. `docs/expert-model/current-synthesis.md`
4. `docs/game-model/opening-slice-v1.md`
5. `docs/game-model/vertical-slice-ui.md`
6. `docs/review/opening-slice-adversarial-audit.md`
7. `docs/game-model/actor-authority-opening.md`
8. `docs/game-model/model.yaml`
9. `docs/review/coverage-ledger.md`
10. `docs/WORKPLAN.md`

## Definition of a successful migration

- The cleaned repository builds, tests and deploys an internal preview.
- No stale old-game/old-model architecture is accidentally authoritative.
- Retained infrastructure and old material are explicitly inventoried.
- The expert atlas, symbolic model, executable kernel and UI remain separate
  products with explicit crosswalks.
- A fresh GPT-5.6 Codex agent can determine current state, verification commands,
  source status, omissions and next gates from repository files alone.
