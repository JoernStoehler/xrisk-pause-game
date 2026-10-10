# Setup and repository checks

This guide describes the October 2026 knowledge checkpoint. Commit `2552820` is the pre-cleanup recovery baseline. This is setup guidance, not evidence that any particular account, host, or cloud workspace has been configured. Update it after first-run checks establish actual support.

## What you need

For reading and editing the project knowledge, you need a checkout of this repository, a Markdown editor, and Git if you want history or to contribute changes. The repository check script needs Python 3's standard library. There is no Node.js requirement for reading or editing these materials.

Clone the repository and enter it:

```bash
git clone <repository-url>
cd xrisk-pause-game
```

For history-backed source pointers, use a full clone with tags. A file upload or
shallow clone may omit the recovery objects; check `git show 2552820:README.md`
before relying on an archived passage. The full commit is
`255282028d6d5e13274bd21b80a00dbd7b902f44`.

In any agent environment, make the root `AGENTS.md` available as project
instructions and read scoped instructions before editing that directory.
Automatic discovery of `.agents/skills` and `AGENTS.md` differs by product;
do not assume Codex discovery works in a chat cloud. If needed, explicitly give
the session the root instructions, `docs/README.md`, its topic brief, and the
relevant local workflow file. File-only sessions also need separately supplied
archived sources if the brief relies on Git history.

Use the repository's own review and contribution process before treating project synthesis or expert-grounded content as approved. The knowledge check is a lightweight local-link check; it does not establish domain accuracy, source preservation, external link availability, or GitHub branch-protection settings.

```bash
python3 scripts/check-repository.py
git diff --check
```

## Ubuntu workstation

An Ubuntu workstation is an intended environment. First-run status: **TBD**. Check that `git` and Python 3 are available, clone the repository, then run the two checks above. No browser, Node.js, or system package installation is required for repository knowledge work. Do not install a browser solely for this repository.

The optional pre-commit hook runs Gitleaks if installed. To enable the tracked hook:

```bash
git config core.hooksPath .githooks
```

Whether Gitleaks is installed and whether the hook works on a given workstation remain local checks.

## Claude chat cloud

Claude chat in a cloud workspace is a possible environment; support is **unverified**. Claude chat, Claude Code web, and desktop Cowork are separate products and their capabilities must not be inferred from one another. First check whether the specific Claude chat session provides a shell, a writable persistent checkout, Git, and Python 3. If those capabilities are absent, use the available file-based workflow; the commands above cannot be assumed to run. No account, repository connection, persistence, or network access has been verified here.

## ChatGPT Work cloud

ChatGPT Work is a possible environment; support is **unverified**. It must not be treated as Codex Cloud. First check whether the specific Work session provides a shell, a writable persistent checkout, Git, and Python 3. If it does, clone the repository and run the checks above; otherwise, use the file-based workflow that the session supports. No cloud repository setup, shell access, persistence, or network access has been verified here.

For each environment, fill in after the first successful run: observed product
and date; OS image; shell/admin access; Git/Python availability; network and
package-install support; checkout and file persistence; instruction-loading
method; the check result. Keep secrets out of this record. Image-specific
commands earn a place here once actually observed, rather than guessed.

## Optional browser automation

Most repository work does not need a browser. If a task specifically selects Playwright and the package is present in that task's tooling, install the matching browser binary on demand using the tool's current browser-install command. See the [Playwright browser installation guide](https://playwright.dev/docs/browsers) and [CI guidance](https://playwright.dev/docs/ci). The Playwright package, its matching browser binaries, required operating-system libraries, and any managed-browser service are separate dependencies. A managed browser can be used where the tool supports it. This repository does not pin a Chromium version or install Chromium as part of ordinary setup.

## Optional encrypted literature

Some literature is stored as encrypted files. Decryption requires both the `age` program and the private `LITERATURE_KEY`; neither is guaranteed to be available in a checkout or cloud session. If either is missing, those plaintext sources are unavailable. The helper may print that it is skipping when the key is absent; that means the material remains unavailable, not that decryption succeeded:

```bash
bash scripts/decrypt-literature.sh
```

Keep the key private and do not commit it. The owner must provide any key separately. A clone alone cannot recover or decrypt the plaintext corpus.

## Recovering the prior game baseline

The game stack retired during this cleanup is preserved at `archive/pre-restart-2026-10-10`, based on Git commit `2552820`. To inspect or work on that baseline without changing the cleaned checkout:

```bash
git worktree add ../xrisk-pause-game-pre-restart 2552820
```

The archived baseline contains the former Node/Vite game setup. Its `wrangler.toml` names the Pages project `global-pause` and sets `dist` as the build output directory. That configuration does not establish that a deploy command or GitHub deploy step exists, nor verify the Cloudflare account, project, routing, or production build triggers. Treat deployment as unverified until those external details are checked.
