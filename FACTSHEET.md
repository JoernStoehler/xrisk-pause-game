# Factsheet

This file records durable project facts that future agents should know before
asking Jörn for repeated context. It is not a tracker, design spec, source note,
or release checklist.

If this file conflicts with newer Jörn decisions, source files, tests, source
notes, or `PROGRESS.md`, treat the newer or more direct source as current and
update this file when the fact is durable.

## Project Goal

- This is a serious Reigns-style mobile web game about directing an
  international AI pause agency.
- The core thesis is that a pause is not quiet waiting: it is a fragile
  crisis-management race to keep capability progress contained while safety
  work catches up.
- Project success means that, after months of play, more people understand that
  a global AI pause treaty could work and can better recognize blatant
  misunderstandings or false claims about what such a treaty needs under
  different threat models.
- Fun, realism, political detail, scientific detail, build quality, deployment,
  and agent productivity are instrumental to that public-understanding goal.

## Success And Non-Success

- Passing checks, shipping a deploy, adding content, or making the app playable
  is not by itself project success.
- A technical release is useful when it improves a feedback loop: player
  understanding, playability, expert review, validation, deployment,
  playtesting, or future-agent work.
- Expert-grounded player-facing content is draft until Jörn approves it.
- There is no durable playtest corpus yet. Playtest claims should say what was
  actually observed and should not be treated as general player evidence until
  repeated evidence exists.
- Do not treat broad public readiness as established just because the public
  Cloudflare URL works.

## Jörn Approval Boundaries

- Jörn is the domain owner.
- Ask before changing the game's thesis, political model, player-facing
  terminology, card concepts, major UX direction, final feature set, or expert
  predictions.
- Agents may draft, implement, test, refactor, refresh generated artifacts, and
  propose wording or UI details independently.

## Current Content State

- `docs/expert-context.md` is the current compact, epistemically labeled
  context surface for future expert-model/content work.
- `docs/expert-model-chat-excerpts.md` and
  `docs/expert-model-recovered.md` preserve a recovered 2026-05-11 expert-model
  extraction stream. They are useful source/context surfaces, not approval for
  player-facing content.
- That file is not approval to implement broad content. Check `PROGRESS.md` for
  current blockers before broad content/card review, rewrites, or new
  expert-grounded mechanisms.
- The current `src/content/cards/` corpus is dummy architecture scaffolding, not
  expert-grounded approved content.
- Preserve traceability from literature/source notes, Jörn-provided context,
  and implementation.
- Current card text, death messages, tutorial text, and expert-grounded
  mechanisms are agent-written draft content until Jörn approves them.
- Portrait regeneration should wait until card content stabilizes.

## Current Design Decisions

- The card loop is built around explicit aggregate `State`, append-only
  `History`, card-owned `rate(state, history)` functions, card-owned
  `reduce(state, history, choice)` functions, pure pool construction, and
  deterministic continuous-time hazard draw.
- The current stochastic model assumes cards represent visible active
  processes with monthly rates. The sampler draws both elapsed time and event
  identity from the total rate. Background dynamics should be represented as
  cards, explicit state curves/functions, discovery cards, or another
  deliberate model extension.
- The global state schema is centralized in `src/engine/state.ts`; card logic
  should prefer direct, grep-friendly `state.foo.bar` access.
- Card definitions currently live in `src/content/cards/`; each module can own
  a topic or small group of related cards.
- The app is mobile-first. Desktop can remain phone-app-like unless a concrete
  desktop workflow becomes important.
- App, Playwright, and future playtest tooling should stay on shared
  `src/engine/session.ts` transitions instead of duplicating game-flow logic.

## Playtesting

- Playtest first, then record what was actually observed: build or version,
  player context if known, session shape, confusion points, remembered
  takeaways, fun or friction, bugs, screenshots, and card histories actually
  collected.
- Route observed findings back to concrete work: content/source issues, app/UX
  bugs, deploy/release-loop issues, or harness/map issues.
- Once repeated findings exist, propose lightweight capture formats or quality
  gates for Jörn review.
