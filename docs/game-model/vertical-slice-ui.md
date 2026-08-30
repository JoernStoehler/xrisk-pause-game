# Opening-day playable vertical slice

Status: production-buildable internal prototype; not release content. Chromium
QA covers desktop, Pixel 5, and iPhone 13-like viewports. Physical-device and
human screen-reader/comprehension testing remain pending.

## Player path

The prototype starts on 1 August 2026 with the US and PRC as founding
signatories. The player makes three policy choices:

1. rely on legal deterrence at declared sites or add multiparty training-
   credential custody;
2. cold-hold frontier hosted inference, permit registered restricted access, or
   permit broad access; and
3. regulate covered clusters by compute only or compute **OR** accelerator
   memory.

It then resolves one persistent diagnostic world and shows only the DG-visible
history. The player may replay the same hidden world with different choices or
sample a new diagnostic world.

This is intentionally smaller than a release run. It tests whether treaty
details can be made legible through fast advisor decisions without turning the
game into a policy textbook.

## Architecture boundary

Advisor content is declarative data in `src/ui/content.ts`. Choices emit a
closed `GameAction` union. `src/ui/game.ts` reduces those actions into typed
fixture inputs; cards cannot run arbitrary state mutations. The model core then
produces a causal trace, `src/ui/App.tsx` renders the DG projection, and
`src/ui/main.tsx` mounts the React application.

This protects the engine/content boundary:

```text
advisor prose → typed action → UI reducer → versioned fixture → model engine
                                                    ↓
DG-visible UI ← projection contract ← causal trace ← hidden world
```

The interface does not read hidden capability artifacts to populate the DG
dossier. It uses projected visible events. Replay preserves the seed; new-world
play samples another diagnostic fixture.

## UX decisions

- One decision per card, with explicit buttons and optional left/right swipe.
- Text labels state the action and a one-sentence causal tradeoff.
- Three top-line fields report selected policy, not hidden survival odds.
- Geometric CSS portraits keep advisor role/person distinction without loading
  image assets or implying photographic realism.
- No remote fonts or runtime dependencies; the production bundle is small.
- Reduced-motion preference disables transitions.
- All swipe decisions have large semantic button alternatives; focus treatment
  must remain visible.
- The footer and intro method note state that current worlds are structural
  diagnostics, not forecast-calibrated.
- Outcome language distinguishes blocked startup, successful interruption,
  continued hazard and terminal loss.

## Verification completed

- strict TypeScript check;
- production Vite build;
- the model, counterfactual, projection, golden-trace and UI-state unit suite;
- cold path skips the hosted-access detail card;
- continued service requires restricted versus broad choice;
- UI actions configure typed fixtures rather than engine state;
- full decision flow retains one seed through resolution;
- “review orders” resets choices without resampling the world; and
- only DG-visible artifacts appear as known in the dossier.

## Browser verification completed during migration

- all twelve opening decision paths reach a dossier at desktop and two mobile
  viewport profiles;
- pointer swipe, semantic buttons, keyboard activation, focus movement, method
  disclosure state, and horizontal reflow are automated;
- serious and critical automated accessibility findings are checked on the
  intro, decision, and dossier surfaces; and
- desktop/mobile screenshots of those surfaces were inspected after rendering.

## Verification still required

- physical-device touch testing and browser-specific Safari behavior;
- human screen-reader and full keyboard-order review;
- font fallback and text wrapping beyond the current Chromium profiles;
- comprehension tests with pause-aware but treaty-naive players;
- latency measurement on low-end mobile hardware; and
- empirical session/drop-off instrumentation.

The source-backed instrumentation and user-test plan is in
`docs/research/product-ux-research-2026-07-11.md`. No universal session-length target is
assumed.

The app can be run with `npm run dev`, built with `npm run build`, and tested
with `npm test`.

## Content limitations

- Current branch sampling is diagnostic and deliberately balanced in places.
- Only one attempted run and one research session resolve.
- Compute-or-memory changes coverage and one memory-heavy diagnostic outcome;
  distributed topology and authored downstream evasion remain absent.
- The outcome dossier compresses multiple technical events and is not a full
  postmortem.
- The UI has no publication, save/share, accessibility settings or source
  explorer yet.
- The advisor names and CSS portraits are placeholders, not final character
  canon.
