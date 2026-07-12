# Product and UX evidence for the treaty game

Date checked: 11 July 2026.

## What existing product evidence establishes

- Official [App Store](https://apps.apple.com/us/app/reigns/id1114127463) and
  [Steam](https://store.steampowered.com/app/474750/Reigns/) pages show that
  left/right advisor decisions, delayed consequences, unlockable content and
  replay work as a viable mobile/desktop commercial shell. Ratings and reviews
  do not identify which mechanic caused engagement and do not validate four
  meters or random-seeming outcomes for treaty pedagogy.
- One surfaced review described about fifteen decisions/five minutes and found
  outcomes arbitrary. This is anecdote, not a session-length estimate, but it
  identifies the central design risk: hidden uncertainty can feel like random
  punishment unless later traces explain causal dependence.
- No authoritative universal ideal session length was found. The project should
  estimate its own quit/satisfaction hazard curve rather than import one.

## Design inferences to test

- Start with one sentence of premise, one primary action and an immediate policy
  decision. Teach treaty details through early cards; keep a glossary optional.
- Binary cards should use two serious specific action labels, not generic yes/no.
  Swipe is an enhancement; visible buttons remain primary accessible controls.
- Explain foreseeable effects briefly, call back to earlier choices when delayed
  consequences arrive, and provide a post-run causal timeline. Label unknown
  effects as uncertain.
- Test a first checkpoint after roughly 8–12 decisions/4–7 minutes rather than
  assert it as optimal. Auto-save/resume before longer runs.
- Offer new-world replay and same-world/different-policy replay. The latter
  teaches intervention effects without RNG drift.
- Place sharing after a meaningful beat. Share an outcome plus one revealing
  choice, not a disputed survival score. [Web Share](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
  requires a copy-link fallback and share-intent is not recipient engagement.

## Accessibility and performance constraints

- WCAG 2.2 [Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html):
  every swipe choice needs a single-pointer alternative.
- [Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) and
  [Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html):
  all decisions work by Tab/Enter/Space and focus is visible.
- [Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html):
  at least 24×24 CSS pixels; aim at the 44×44 enhanced target for consequential
  repeated decisions.
- Meet [contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html),
  avoid [color-only meaning](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html),
  support 320px [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html),
  and honor [reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).
- Field p75 targets: LCP ≤2.5s, INP ≤200ms and CLS ≤0.1, following [Core Web
  Vitals](https://web.dev/articles/vitals).

## Instrumentation

Version events by engine/content build and avoid raw user text or detailed
hidden traces.

- Funnel: landing, start, first card, first choice, first consequence, first
  checkpoint, run end; record time and end reason.
- Decision: card/choice IDs, input modality, latency, glossary use, whether a
  foreseeable-effect hint and later callback were seen.
- Learning: short optional checks for prohibition scope, proactive enforcement
  versus punishment, and why monitoring succeeded/failed.
- Replay/share: same-world/new-world replay, postmortem opened, share intent,
  native-share result, copy link and referred start.
- Quality: Core Web Vitals, JS errors, viewport/input modality and voluntary
  accessibility settings without fingerprinting.

Optimize comprehension per minute and satisfying versus frustrated stopping,
not raw duration, survival rate or share-button presses.

## Test sequence

1. Silent first-use with 6–8 pause-aware but treaty-naive people on their own
   phones/laptops; interview only after they stop, preserving pacing evidence.
2. Another 6–8 spanning skeptics/low-prior and x-risk-familiar users; test causal
   understanding and expert false implications.
3. Actual keyboard-only, screen-reader, low-vision/zoom and limited-dexterity
   passes on phone and desktop.
4. Soft launch with quit hazard by minute/card/device/source/prior familiarity
   and a one-tap exit reason.

Test only consequential variants: swipe emphasis, early causal hints, duration
label and same-world replay placement. Set public duration claims from observed
data.
