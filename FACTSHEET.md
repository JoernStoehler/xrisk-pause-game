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

- `design/EXPERT_MODEL.md` is the current recovered source of truth for Jörn's
  expert model until Jörn replaces or approves it.
- That file is not approval to implement broad content. Check `PROGRESS.md` for
  current blockers before broad content/card review, rewrites, or new
  expert-grounded mechanisms.
- Preserve traceability from literature and design notes to card concepts and
  implementation.
- Current card text, death messages, tutorial text, and expert-grounded
  mechanisms are agent-written draft content until Jörn approves them.
- Portrait regeneration should wait until card content stabilizes.

## Current Design Decisions

- The intended content direction is static two-or-three-choice cards. Prefer
  binary choices where they preserve the decision, but keep genuine three-way
  decisions.
- Locked or unlocked alternatives should usually be represented as separate
  cards, not dynamic option availability.
- Existing authored cards still use some dynamic `enabled` options, and
  `src/data/cards/content.test.ts` keeps an expected-failing guard for this.
- The app is mobile-first. Desktop can remain phone-app-like unless a concrete
  desktop workflow becomes important.
- App, CLI, and future playtest tooling should stay on shared
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
