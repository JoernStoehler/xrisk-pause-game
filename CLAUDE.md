# The Pause — Reigns-Style Card Swipe Game

**Live:** https://global-pause.pages.dev

## What This Is

A Reigns-clone where the player is the Director-General of the ISIA (International Superintelligence Agency), enforcing an international treaty banning ASI development. One card at a time, binary swipe choices, four resource bars, die-and-restart loop.

**Target audience:** People who don't yet appreciate how a global pause on AI development might work — or fail.

**Core thesis:** Enforcement of a global AI pause is structurally hard. The player learns this by dying repeatedly from different failure modes — underfunding, over-surveillance, political backlash, public revolt — each caused by the tension between competing priorities.

**Inspiration:** Reigns (Nerial, 2016). Faithful clone of its core mechanics: dynamic card pool, weighted draw, binary swipe, four resource bars that kill at both extremes.

**Owner:** Jörn Stöhler — generates project ideas, provides x-risk domain expertise, reviews design decisions. Does NOT write code.

**Repo structure:**
```
CLAUDE.md              # You are here
TASKS.md               # Task tracking
BALANCE.md             # Balance tuning process and state
package.json           # Dependencies
src/                   # Source code
e2e/                   # E2E tests (Playwright)
scripts/               # Portrait generation, utilities
literature/            # Reference materials on AI x-risk (see literature/CLAUDE.md)
docs/recipes.md        # Copy-paste patterns (Workers, D1, LLM, image gen)
.devcontainer/         # Local devcontainer config (see .devcontainer/CLAUDE.md)
.claude/               # Hooks, settings
.github/               # CI/CD (deploy to Cloudflare Pages)
```

---

## Game Mechanics

### Resource Bars (die at 0 or 100)

| Bar | Icon | At 0 | At 100 |
|---|---|---|---|
| **Trust** | Shield | Public revolt, agency defunded | Overpromised; visible failure shatters credibility |
| **Funding** | Coin | Can't operate, agency shuttered | Waste scandal, agency dismantled |
| **Intel** | Eye | Blind to threats, ASI slips through | Surveillance state, nations flee treaty |
| **Leverage** | Gavel | No political power, ignored | Authoritarian backlash, coalition revolts |

All bars start at 50. Every card choice nudges 1-3 bars. The player's job is to keep all four bars away from both extremes. This is intentionally difficult — the bars pull against each other.

### Card Pool

Cards are drawn from a weighted pool. Each card template has a `weight(state)` function that computes its current weight (0 = not in pool). This is the only mechanism for card eligibility — cards own their own logic.

**Pool dynamics:**
- **State-driven:** Cards check resource levels, turn count, or history to decide their weight
- **History-driven:** Cards can check what prior cards were played and which choices were made
- **Degraded variants:** Same event concept as separate templates with mutually exclusive weights. Low-intel variant offers worse options than high-intel variant.
- **Anti-repeat:** Cards drawn in the last 3 turns are excluded

### Turn Flow

1. Draw card from weighted pool
2. Player sees card (speaker, text) and swipes or taps
3. On tilt: option labels always visible below card, affected resource icons show directional preview (small/large triangles — no numbers)
4. On commit: effects applied, turn incremented, new card drawn
5. If any bar hits 0 or 100: death screen with explanation

### Death Loop

Runs last ~15-40 turns. Death is frequent and expected. Each death teaches something about a different failure mode. The restart is instant — tap to play again.

---

## Architecture

```
src/
  engine/
    types.ts        # GameState, CardTemplate, Resources, ChoiceOption
    rng.ts          # Seeded PRNG (mulberry32)
    state.ts        # newGame, applyChoice, checkDeath (pure functions)
    state.test.ts   # Unit tests
    cards.ts        # drawNextCard (weight, filter, weighted pick)
    useGame.ts      # React bridge: state + actions + localStorage
  data/
    cards.ts        # Card templates (29 templates)
    deaths.ts       # Death messages per resource × extreme
  hooks/
    useSwipe.ts     # Pointer event drag/swipe/tilt logic
  components/
    TitleScreen.tsx
    GameScreen.tsx
    SwipeCard.tsx
    ResourceIcons.tsx
    SpeakerPortrait.tsx
    DeathScreen.tsx
  assets/
    portraits/*.png   # 21 AI-generated speaker portraits
  cli.ts            # CLI playtest tool (no React, headless)
  App.tsx
  main.tsx
  index.css
```

### Key Patterns

- **Engine has zero React dependency.** `types.ts`, `state.ts`, `cards.ts`, `rng.ts` are pure TypeScript. The CLI tool uses them directly.
- **Cards own their weight.** No external card injection or pool mutation. Each card's `weight(state)` function determines if and how likely it is to appear.
- **Swipe via Pointer Events.** Works for touch and mouse. CSS transforms via ref during drag (no re-renders). Spring-back on non-commit, fly-off on commit.
- **Directional previews (Reigns-style).** On tilt, affected resource icons show small/large colored triangles. No numbers — player develops intuition.

---

## Design Rules

**Reference:** Reigns (Nerial, 2016). The gold standard for card-swipe games.

**Color model — dark background, light card:**
- Background: dark brown (#2A1F0F) — dark top/bottom bars frame the card zone
- Card zone: tan/gold mid-zone (#B8A668) — parchment-like feel, card-back deck stack visible
- Card back: dark green (#1A3D2E) — the face-down card in the deck
- Dark-on-tan contrast model creates depth and card-as-object presence

**Card proportions:**
- Card fills ~70-75% of screen width, ~55-60% of screen height
- Generous horizontal margins (~12-15% each side)
- Card is the dominant visual element — everything else is secondary

**Character portraits:**
- AI-generated PNG portraits per speaker (fal.ai FLUX model, 21 portraits in `src/assets/portraits/`)
- Dark, moody, stylized illustrations — each speaker instantly recognizable
- Portrait occupies center of card body (max 280px wide), choice labels sit below
- **Generating portraits:** `node scripts/generate-portrait.mjs <slug> "<description>" "<bg-color>"` — one portrait at a time, outputs `.png` + `.json` sidecar with provenance. Shared style config in `src/assets/portraits/style.json`.
- **Provenance:** Each portrait has a colocated `<slug>.json` sidecar recording how it was generated (prompt, model, timestamp).

**Typography:**
- Space Mono font (Google Fonts), monospace — surveillance-era aesthetic
- Speaker name: base size, bold, centered below portrait
- Dialogue text: medium weight, standard case, generous line-height, centered
- Choice labels: text-sm bold, below speaker name, both always visible

**Resource icons:**
- 48×48 SVG icons: shield (Trust), dollar (Funding), eye (Intel), scales (Leverage)
- Single color (#D4C8A0), compact row at top of screen
- Preview indicators on tilt: small colored triangles (green ↑ / red ↓, single or double for magnitude)

**Layout:**
- Mobile-first (portrait, touch targets ≥44px)
- Card centered between resource icons (top) and year display (bottom)
- Minimal dead space — card dominates
- ~2 minute runs, highly replayable

---

## Repo Invariants

- `npm run check` passes (typecheck + lint + build + unit tests; E2E via `npm run test:e2e`)
- Tech stack: Vite + React + TypeScript, Tailwind CSS, Playwright, Cloudflare Pages
- `.env` at repo root has Cloudflare credentials (account ID, API token) and service keys
- **When an env var is missing:** `source .env` first. Never ask the user for secrets.
- **Never read `.jsonl` transcript logs directly** — they are large and will crash agent context. Use memory files and conversation summaries instead.

**Definition of Done (before marking work complete):**
- Code compiles: `npm run build` passes
- Lint passes: `npm run lint` passes
- Feature works end-to-end (not just "function exists")
- `// TODO` stubs do NOT count as done

**No guessing:**
- For engineering problems: attempt before escalating. If you fail, present what you learned.
- For x-risk content, communication approach, or scope: ask Jörn directly — don't guess on domain expertise you don't have

**Specs are authoritative:**
- This CLAUDE.md defines what to build
- Don't modify specs without explicit approval
- Fix code to match specs, not the other way around

---

## Code Conventions

**KISS and YAGNI everywhere:**
- Simple, standard, well-known solutions only
- Don't add features beyond what's requested
- Don't refactor code you didn't change
- Three lines of code > premature abstraction
- Don't add error handling for impossible scenarios

**Prefer standard over clever:**
- Use patterns agents already know (React hooks, Tailwind utilities, standard Vite config)
- Push back when Jörn suggests non-standard approaches — propose the standard alternative
- Every idiosyncratic pattern is a tax on every future agent session
- "X is more standard than Y" is a strong argument — use it

**Aggressively prune false information:**
- Never document removed features or previous versions
- Only current state matters in docs
- False or misleading documentation is worse than none

**No over-engineering:**
- No feature flags or backwards-compatibility shims
- No helpers/utilities for one-time operations
- No design for hypothetical future requirements

**Documentation levels (progressive disclosure):**
- `CLAUDE.md` — rules and context every agent needs. Keep concise.
- `TASKS.md` — current/done work items. Read at session start.
- Code comments — design rationale, non-obvious decisions. Found when reading relevant code.

---

## Processes

### Session Workflow

Two modes:

**Planned work** (feature sessions): discuss → plan → implement → review → push
- Read `CLAUDE.md` and `TASKS.md`. Flag ambiguities. Wait for Jörn's scope decision before planning.
- Commit and push to main. Jörn reviews deployed result.

**Reactive work** (playtest sessions): Jörn tests on https://global-pause.pages.dev and reports bugs/feedback in real-time. Fix → verify → push → confirm deployed (~40s deploy via GitHub Actions). Verify deployment with `gh run list` before telling Jörn it's live.

### Verifying Changes

```bash
npm run check          # typecheck + lint + build + test (all at once)
npm run dev            # start dev server
npm run test:e2e       # E2E tests with Playwright
```

### Playtesting

```bash
npm run cli show         # Print current card + resources
npm run cli left         # Swipe left, see result
npm run cli right        # Swipe right, see result
npm run cli auto 20      # Random-play 20 turns
npm run cli state        # Full state dump (pool, history)
npm run cli reset        # New game
```

### Writing Card Content

Follow `src/data/card-writing-guide.md` — the authoritative spec for card writing. Do not invent your own card-writing prompt. The guide covers x-risk framing, mechanical constraints, tone, balance rules, and literature references.

Each card in `src/data/cards.ts` has a provenance comment (Source, Rationale, Category). Maintain this convention when adding or modifying cards.

### QA Reference Pages

Access via URL hash on the live site or dev server:
- **`#qa`** — numbered portrait gallery (P1-P21) + card content overview (C1-C29) + death messages. Jörn uses these numbers to reference items in feedback.

### Visual QA (screenshots)

Take screenshots at mobile viewport (390×844), view with Read tool. Clear localStorage before each screenshot to start fresh. See Review Checklist for full process.

### Task Tracking

`TASKS.md` at repo root. Format:

```markdown
## Current
- [ ] Task description

## Done
- [x] Completed task
```

Update this file as you work. It persists across sessions.

---

## Local Devcontainer (Primary)

Primary environment (~80% of work). Local devcontainer on Jörn's Ubuntu desktop.

- **Rebuild:** `.devcontainer/host-devcontainer-rebuild.sh` (from host)
- **VS Code tunnel:** `.devcontainer/host-vscode-tunnel.sh` (from host)
- **First run:** `npm install` (Playwright browsers + system deps pre-installed in image)
- **Playwright:** No special flags needed — Chromium runs normally in the devcontainer

---

## Claude Code Web Environment (Secondary)

CC Web is a secondary/fallback environment (~20% of work). Has restricted network access and pre-installed tooling.

- **Playwright pinned to v1.56.1** — do not upgrade
- **No external URLs from browsers** — `ERR_TUNNEL_CONNECTION_FAILED`; test deployments from your own browser
- **First run:** `npm run setup:ccweb` (installs Playwright browsers + npm deps)
- **Playwright on gVisor** — Chromium crashes under gVisor's restricted kernel. Add `--no-zygote` and `--disable-setuid-sandbox` to `launchOptions.args` in `playwright.config.ts` (alongside `--no-sandbox`, `--disable-gpu`, `--disable-dev-shm-usage`, `--disable-software-rasterizer`). Do NOT use `--single-process` — it makes the browser unstable across Playwright test contexts.

---

## Working with the Owner

### Jörn's Expertise
- Top 100 expert on ASI x-risk, AI capabilities/trends, AI governance
- Average expert in forecasting, geopolitics, x-risk communication
- NOT an expert in science communication broadly or web-based interactive design
- Self-described bad taste in design/UX/game mechanics
- Top 10% in using agents for development; top software engineer who prefers not to write code
- Provides the "what to communicate" (x-risk concepts) but agents own the "how" (web experience design)

### Communication Style
- Aim for efficient information exchange, not politeness or engagement
- Number items so Jörn can refer to them unambiguously
- Push back on YAGNI/KISS violations, unclear requirements, over-scoping
- Present decision tradeoffs with your forecast of outcomes — Jörn can agree/disagree
- Don't ask permission for obvious engineering decisions
- DO ask when: x-risk content accuracy matters, communication approach is unclear, scope is ambiguous
- Jörn doesn't see exact edit diffs in chat — mention and explain repo changes when he should be aware

### Session Scoping
- Before the session ends: report friction points, flag leftover tasks, note workflow improvements

---

## Review Checklist (after implementing UI changes)

The core mechanic is the drag/swipe interaction. Automated checks (typecheck, lint, build) do NOT verify interactive behavior. After any change to SwipeCard, useSwipe, ResourceIcons, or GameScreen:

1. **Drag E2E test passes** (`e2e/drag.spec.ts`) — simulates pointer drag, verifies tilt direction propagates to resource bar previews, verifies swipe commit advances the game
2. **Card re-mount on new card** — the SwipeCard key must change when activeCard changes, otherwise drag state leaks between cards and enter animation doesn't fire
3. **Visual QA at mobile viewport** — follow the Visual QA Process below

### Visual QA Process

After any visual change: take screenshots (title, game, tilt states at 390×844), evaluate against Reigns reference. Use background subagents for screenshots and QA — don't block the main conversation or ask Jörn to be your tester.

Quality bar: card dominates viewport, colors harmonious, typography clean, no wasted space, app-store polish. Iterate until quality is excellent.

---

## CLAUDE.md Conventions

- Invariants and behaviors documented only after empirically confirmed as useful
- Label invariants as `[aspirational]` if not yet satisfied
- Prefer simple, common, expected rules that don't claim excessive agent attention
