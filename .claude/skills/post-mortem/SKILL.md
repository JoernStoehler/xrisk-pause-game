---
name: post-mortem
description: Run a session post-mortem to capture process failures and improvement opportunities
---

Review the current session for process failures. Check each item and report only items that apply:

1. **Agent splitting needed?** — Did any multi-responsibility agent fail to adequately cover all its assigned checks? If so, recommend splitting into focused agents.
2. **Fabrications slipped through?** — Did fabricated claims, false attributions, or convention violations reach Jörn that should have been caught by subagent review?
3. **Iterated in front of user?** — Did I run multiple fix/review cycles in the conversation instead of using subagents offline?
4. **False attribution?** — Did I attribute something to Jörn or to a source that didn't actually say it?
5. **Memory update needed?** — Are there new process lessons from this session that belong in `memory/process-rules.md`?

Write findings to `memory/process-rules.md` if any new rules emerged.
