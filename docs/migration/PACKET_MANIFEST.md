# Handoff packet manifest

The archive `xrisk-pause-game-codex-handoff-2026-07-11.zip` was intended to be
unpacked into an already-cleaned repository. That precondition was false. The
migration instead performed the hard cut from commit
`0c5262c34c423cc62b68124d30d002b4886b879f`; see
[`retained-old-material.md`](retained-old-material.md).

## Included roots

- `HANDOFF_TO_CODEX.md`
- `README.md`
- `index.html`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `src/`
- `test/`
- `docs/`
- `source/`
- `dist/`

## Deliberately excluded

- `.git/`
- `node_modules/`
- credentials, `.env` files and Cloudflare secrets;
- browser/session state;
- obsolete prior-repository material; and
- ChatGPT-internal metadata.

## Collision policy

- Substantive old game/model files: replace after Jörn's cleanup.
- Devcontainer/Cloudflare/CI/infrastructure: inspect and reconcile.
- Secrets: retain only through the existing secret store; never take a value
  from this packet because none is included.
- Old `SKILL.md` and agent instructions: assume deletion unless Jörn explicitly
  retained them during the GPT-5.6 cleanup.
