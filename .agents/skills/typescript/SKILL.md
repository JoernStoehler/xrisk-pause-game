---
name: typescript
description: Use when Codex writes, edits, reviews, or delegates TypeScript/React work in this repo, including engine code, app code, CLI code, scripts, tests, or TypeScript comments.
---

# TypeScript Conventions

This skill is for TypeScript, React, CLI, script, and test work in this repo.
The goal is code that a fresh agent can understand locally and verify cheaply.

## Quality Signals

- A fresh agent can understand the changed code by reading the local file,
  nearby types, and ordinary imports.
- Local standard TypeScript is better than a helper when both versions are
  about equally easy to read. Textual repetition is not by itself a reason to
  abstract.
- A helper is pulling its weight when the call site becomes easier to read, or
  when repeated local code already caused mistakes that comments/tests did not
  prevent.
- Comments and tests capture review-relevant reasons, not obvious mechanics.
  Example: `Search newest-first so an old expired trigger cannot hide a newer
  valid one.`
- `src/engine/` code is easy to test without React, browser APIs, storage, or
  player-facing copy.
- In the current repo split, browser orchestration belongs in `src/app/` and
  rendering belongs in `src/components/`.
- Tests or explicit regression breadcrumbs make important behavior visible to
  future reviewers. A breadcrumb comment is acceptable when an executable test
  would force an unsettled product decision.
