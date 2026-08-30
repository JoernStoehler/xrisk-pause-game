# Development environment

Status: current development setup for this repository. Update this document
when a supported execution surface or a project prerequisite changes.

The supported execution surfaces are:

- a normal host checkout;
- a Docker Sandbox, including an interactive `sbx run codex` session or
  commands executed with `sbx exec`; and
- Codex Cloud.

The repository does not support Docker Compose, Dev Containers, or the
abandoned Codex GUI integration. It does not run a Codex app-server or require
an app-server capability token.

## Common project setup

All supported environments use the checked-in Node application directly. They
must provide Node.js 24.20.0 (the repository pins this in `.node-version`) and
npm 11.19.0. The `packageManager` field records the npm version used to create
the lockfile.

Install the locked dependency set:

```bash
npm ci
```

The npm 11 install policy explicitly allows scripts for the pinned `esbuild`
and `workerd` packages; no other dependency install scripts are approved.

Run the standard validation:

```bash
npm run check
npm run test:e2e
npm audit --audit-level=high
git diff --check
```

Playwright may require its browser and operating-system dependencies before the
end-to-end suite can run:

```bash
npx playwright install --with-deps chromium
```

Start the local development server with:

```bash
npm run dev
```

## Host checkout

Run the common commands directly in the checkout. The project owns no host
container, image, network, port publication, authentication bootstrap, or
lifecycle wrapper.

The optional pre-commit hook uses `gitleaks` when it is available. Enable the
tracked hook explicitly in a checkout with:

```bash
git config core.hooksPath .githooks
```

## Docker Sandbox

Sandbox creation, authentication, resource limits, ports, and lifecycle are
host concerns rather than repository scripts. Use `sbx run codex` for an
attached Codex session, or use the ordinary `sbx` create, exec, ports, and
policy commands when managing a named sandbox. Follow the host's current
Docker Sandbox runbook when one is available.

Once the checkout is mounted or cloned into the sandbox, use the common project
commands above. Do not add a project Dockerfile or Compose layer to customize
the sandbox; change the host-side sandbox setup only when the declared project
requirements cannot be met by the supported sandbox environment.

## Codex Cloud

Codex Cloud is supported through its externally configured environment. The
repository currently needs no Cloud-specific install wrapper. Configure both
the setup and maintenance stages directly with:

```bash
npm install
bash scripts/decrypt-literature.sh
```

When encrypted literature should be available, configure `LITERATURE_KEY` as a
Cloud environment variable rather than a Cloud secret. Cloud environment
variables remain available to the agent, which allows it to encrypt or decrypt
literature during its task; Cloud secrets are setup-only and would prevent that
workflow. Keep the remaining Cloud environment settings outside the repository
unless setup becomes complex enough to require a reusable, testable script.

## Optional encrypted literature

Some committed literature is encrypted and is not required for normal builds
or tests. Agents may decrypt it on demand when `age` and `LITERATURE_KEY` are
available:

```bash
bash scripts/decrypt-literature.sh
```

The script sources an ignored local `.env` when present. Keep `.env` at mode
`0600` and use it only for application or research secrets. Do not put
environment lifecycle configuration in it.
