# Tasks

## Handoff Note (2026-02-25)

This repo was migrated from `JoernStoehler/xrisk-minigames` (monorepo at `projects/global-pause/`) to its own standalone repo. Fresh git history — all prior history is in the monorepo.

**What's set up:**
- Single merged CLAUDE.md (conventions + game spec)
- `.claude/hooks/` — session-start (CC Web), worktree-create/remove
- `.claude/agents/review.md` — review agent for branch changes
- `.github/workflows/deploy.yml` — deploys to `global-pause.pages.dev` on push to main
- GitHub secrets: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID
- `literature/` — AI x-risk reference materials for card content writing

**Deployment:** `global-pause.pages.dev` — unchanged, wrangler.toml still uses `name = "global-pause"`.

## Current

- [ ] Card content: replace throwaway cards with real x-risk scenario cards — use `src/data/card-writing-guide.md`, review output on `#qa` page
- [ ] Portrait regeneration: 11 portraits flagged as bad style need regen via `scripts/generate-portrait.mjs` — bad: P2(CFO), P3(Chief Scientist), P7(Deputy Dir), P9(Enforcement Chief), P11(Exec Asst), P14(Intel Analyst), P17(Legal Counsel), P20(Press Secretary); borderline: P15(Inv Journalist), P16(Junior Analyst), P18(NATO Liaison)
- [ ] More history-triggered chains (blocked on card content — no point chaining throwaway cards)
- [ ] More degraded variant pairs (blocked on card content — variants of throwaway cards will be replaced)
- [ ] Re-balance after content pass (follow BALANCE.md process)
- [ ] Title/death screen polish: animations, icon sizes, layout feel clunky on mobile — defer until after card content pass sets the mood
- [ ] Consider framer-motion migration: AnimatePresence would properly sequence card enter/exit animations (currently using setTimeout + key remount)

### Considered but deferred
- Achievements / card collection: only 29 cards — collection completes in ~5 runs. Revisit after content overhaul adds more cards
- Settings screen: nothing to configure (no audio, deliberate aesthetic). Add if tutorial needs skip toggle or accessibility needs arise
- Better desktop layout: mobile is primary, current max-w-md phone-app look works fine
- Different starts + immersive selection screen: massive scope, premature with 29 cards and one story arc

## Done

- [x] Keyboard controls: Arrow keys / A/D swipe left/right on desktop — `commitProgrammatic` in useSwipe, `forwardRef` on SwipeCard, keydown listener in GameScreen
- [x] Social sharing from death screen: narrative share text with failure mode + notable events + time in office, Web Share API (mobile) with clipboard fallback (desktop), ShareButton alongside Try Again
- [x] Tutorial cards (hybrid): 3 scripted Deputy Director briefing cards on first play, in-world narration + resource bar highlight, skip button, localStorage persistence (`global-pause-tutorial-done`)
- [x] QA reference page (`#qa` hash route): numbered portraits (P1-P21), cards (C1-C29) with speaker/text/choices/previews, death messages — Jörn references items by number
- [x] Card-writing guide (`src/data/card-writing-guide.md`): durable agent-facing spec for card content, x-risk framing, format constraints, anti-patterns — prevents lost prompts on session end
- [x] Portrait provenance: per-file JSON sidecars (slug.json next to slug.png), shared `style.json`, single-portrait script (`scripts/generate-portrait.mjs`)
- [x] Card provenance: colocated comments on all 29 cards in `src/data/cards.ts` (Source, Rationale, Category)
- [x] Fix swipe flicker bug: old card briefly reappeared at center (~80% of swipes) — removed unnecessary state resets in useSwipe.ts setTimeout callback
- [x] Swipe UX polish (test on real mobile device, tune thresholds/velocity) — Jörn tested on mobile, swipe feels fine
- [x] UX polish pass: choice labels moved below card (full width, bigger font), portrait constrained to 280px, label highlight on swipe (color-mix ramp with swipe progress), bottom bar simplified to year only, CLAUDE.md updated with documentation levels convention and label placement
- [x] Desktop playtest fixes: max-width constraint, localStorage versioning + apply() rehydration, Reigns-style card flip animation, portrait aspect-square layout shift fix, resource fill-level icons (CSS clip-path battery gauge), fixed text area height, font size bumps, wider choice labels, preview flash fix on card transition, E2E animation wait fix, stale PLAYTEST.md removed
- [x] Re-set GitHub secrets (CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID) — done via `gh secret set`
- [x] Post-migration audit & fixes: CLAUDE.md synced with v3 reality, hook/config hardening, card balance (4 cards), E2E test reliability, CLI RNG fix, useSwipe onPointerCancel, Vitest worktree exclusion, Dockerfile Playwright browsers
- [x] Visual overhaul v3 polish: match Reigns layout precisely (remove card frame/shadow, hide card back in neutral, swipe perf via refs instead of state, bigger icons 48px, correct zone proportions, overflow:hidden fix, dead code cleanup, E2E viewport fix, screenshot script)
- [x] Visual overhaul v3: Reigns-style layout (dark top/bottom bars, tan mid zone, card-back deck stack, Space Mono font, 21 AI-generated portraits via fal.ai, resource icons instead of bars, choice overlay on swipe)
- [x] Visual overhaul v2: dark warm bg (#2A2118) + cream card (#FFFDF7), 21 geometric SVG speaker portraits (SpeakerPortrait.tsx), compact resource bars with bright colors, card materiality (shadow/border), Reigns-style contrast model
- [x] Visual overhaul v1: warm cream palette, Inter font, speaker emoji portraits, colored card headers, per-resource bar colors, fixed bar labels (Funding/Leverage)
- [x] Visual QA process documented in CLAUDE.md (reusable prompt templates, scoring rubric, process rules)
- [x] V1 prototype (RTS/map style) — scrapped, UX failed on mobile
- [x] V2 engine design discussion — concepts preserved, UX pivoted to Reigns-style
- [x] Delete old code, rewrite CLAUDE.md for new direction
- [x] Engine: types, state transitions, card pool draw (pure functions, no React dep)
- [x] Throwaway card content (19 templates) + death messages (8)
- [x] CLI playtest tool (npm run cli — headless, agent-friendly)
- [x] Swipe UX (useSwipe hook, pointer events, CSS transforms, tap fallback)
- [x] UI components (TitleScreen, GameScreen, SwipeCard, ResourceDisplay, ResourceBar, DeathScreen)
- [x] App wiring + npm run check passes (typecheck + lint + build + 7 unit tests)
- [x] E2E smoke tests (4 tests: title, game, choice, death+restart)
- [x] Visual QA — mobile screenshots confirm all screens render correctly
- [x] Balance tuning: rebalanced deltas, added 10 cards (29 total), 6/8 death types reachable
- [x] Multiple death messages (3 per cause, 24 total) with turn-based selection
- [x] BALANCE.md — documented tuning process and current balance state
