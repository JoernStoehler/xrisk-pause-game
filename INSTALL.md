# Host setup

Use the host checkout for current development. Install the pinned Node and npm
versions with the repository's normal locked dependency path:

```bash
npm ci
npm run check
npm run test:e2e
npm audit --audit-level=high
git diff --check
```

Run `npx playwright install --with-deps chromium` when the end-to-end browser
dependencies are absent. The complete environment contract and the retired
sandbox recovery history are in
[`docs/development-environment.md`](docs/development-environment.md).
