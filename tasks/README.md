<!--
Purpose: conventions for task mini-roadmaps under tasks/.
Context: task bundles are cached project knowledge. They preserve expensive
decisions and useful agent shortcuts, but they are not ground truth.
-->

# Task Bundle Conventions

## Role

Task bundles organize current work by topic. They should let a future agent
find the right source files, value judgments, blockers, and next action without
rereading the whole repo or reconstructing chat history.

Ground truth stays elsewhere:

- source files and data files: code/data evidence;
- `design/*.md`: domain model, card concepts, and design/research state;
- `literature/*`: source notes and encrypted source-derived material;
- generated artifacts: `design/cards-export.md` and `public/cards-map.html`;
- git history: old tracker completeness and superseded planning detail.

## Keep Or Delete

Keep a fact only if it changes a future decision, prevents a likely agent
mistake, records Jörn/external assessment, or gives a concrete resume/check
condition.

Delete stale schedule chatter, obsolete ownership, old queues, and derivable
state. Git history is the archive for old tracker completeness.

## Required Sections

Each `tasks/<topic>.md` should use:

```markdown
# <Topic> Roadmap

## Status
- State: <active | blocked | future | stale>
- Last updated: YYYY-MM-DD
- Source surfaces: <paths>
- Refresh when: <observable trigger>

## Steering Cache
Jörn-expensive or external facts. Preserve aggressively.

## Work Map
Current mini-roadmap.

## Agent Cache
Agent-expensive shortcuts. Useful but easier to invalidate.

## Pruned / Stale
Only entries that prevent likely rediscovery.
```

## Labels

- `[active]`: currently useful on the path to a better game.
- `[blocked]`: cannot proceed until named blocker clears.
- `[Jörn]`: needs Jörn's domain, scope, taste, or expert-context call.
- `[external]`: depends on external-world action.
- `[future]`: useful later by default.
- `[cut]`: intentionally removed from the path.
- `[done]`: acceptance condition met.
- `[stale]`: retained only to prevent rediscovery.
- `[moved]`: content lives in another surface.

## Cache Types

`Steering Cache` is Jörn-expensive or external knowledge: domain decisions,
authority boundaries, taste calls, expert context, or hard-to-reproduce
steering rationale. Say why the entry matters.

`Agent Cache` is agent-expensive knowledge: file pointers, known commands,
failed routes, promising approaches, intermediate calculations, and grep/read
shortcuts. Say how to refresh it or what invalidates it.

Do not use `/tmp` files as durable source surfaces. If a scratch report changes
future task decisions, copy or summarize the relevant result into a tracked
task, design, literature, or code file and cite that tracked file.
