# AI pause treaty game — restart checkpoint

This repository preserves knowledge for a new attempt at a serious, mobile-first
game about directing an international agency during a global pause on dangerous
AI development. Players should understand how a treaty could work, why a pause
requires active crisis management, and how law, authority, hardware control,
evidence, technical progress, and hidden events can diverge.

The game concept and software stack are open. This checkpoint contains topic
briefs, source records, literature, setup guidance, and repository checks. The
previous application and deployment configuration are preserved in Git rather
than serving as the next game's scaffold.

## Start with the question

- [Topic briefs](docs/README.md): treaty mechanisms, threats and actors, Jörn's
  judgments, fun, teaching, and distribution. These are revisable project
  synthesis, not approved content or exhaustive research.
- [Jörn interview records](interviews/jorn.md): four preserved source records;
  May direct excerpts and July attributed paraphrases have different authority.
- [Literature navigation](literature/README.md) and [catalog](literature/INDEX.md):
  retained sources and research aids, with passage checking and availability limits.
- [Setup](INSTALL.md): common requirements, environment-specific first-run
  questions, encrypted literature, and recovery of the previous game.
- [Project instructions](AGENTS.md): ownership, authority, and validation.

## Recover earlier work

The immediate pre-restart tree is pinned at
`archive/pre-restart-2026-10-10` / full commit
`255282028d6d5e13274bd21b80a00dbd7b902f44`. Inspect a document without restoring
its instructions into the working tree:

```bash
git show archive/pre-restart-2026-10-10:docs/expert-model/current-synthesis.md
```

The still older retired repository is at
`0c5262c34c423cc62b68124d30d002b4886b879f`. Recovery requires those Git objects
to be present; a file-only upload or shallow clone may omit them. Neither
historical synthesis nor a recovered prototype becomes the current plan by
being available.
