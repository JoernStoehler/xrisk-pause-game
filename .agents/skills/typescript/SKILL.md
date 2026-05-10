---
name: typescript
description: Use when Codex writes, edits, reviews, or delegates TypeScript/React work in this repo, including engine code, app code, CLI code, scripts, tests, or TypeScript comments.
---

# TypeScript Conventions

This skill owns TypeScript code, tests, scripts, React code, and TypeScript
comments in this repo.

## Conventions

- Prefer standard local TypeScript plus nearby comments/tests over helper
  abstractions when both versions are semantically about equally complex to
  read.
- Do not add a helper just because two snippets match textually. A helper is
  justified only when the local call site becomes genuinely simpler than the
  standard code, or when repeated local code has already proven error-prone
  despite comments and tests.
- Keep engine code free of React, browser APIs, storage, and direct
  player-facing content lookup.
- Keep React/browser orchestration in `src/app/` and UI rendering in
  `src/components/`.
- Prefer focused tests or explicit regression breadcrumbs for behavior that is
  easy to miss in review.
