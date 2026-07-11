FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

ARG GITLEAKS_VERSION=8.30.1
ARG PLAYWRIGHT_VERSION=1.60.0

ENV DEBIAN_FRONTEND=noninteractive

SHELL ["/bin/bash", "-lc"]

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    gh \
    git \
    jq \
    less \
    python3 \
    python3-pip \
    python3-venv \
    ripgrep \
    age \
    tmux \
    tree \
    unzip \
    xz-utils \
    && rm -rf /var/lib/apt/lists/*

# Gitleaks: repo-local pre-commit secret scanner.
RUN set -eux; \
    curl -fsSL "https://github.com/gitleaks/gitleaks/releases/download/v${GITLEAKS_VERSION}/gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz" \
    | tar xz -C /usr/local/bin gitleaks; \
    gitleaks version

# VS Code tunnel CLI. post-create.sh refreshes this on every container recreate
# because this Docker layer can be cached even when the "latest" URL changes.
RUN set -eux; \
    tmpdir="$(mktemp -d)"; \
    curl -fsSL "https://update.code.visualstudio.com/latest/cli-linux-x64/stable" -o "$tmpdir/vscode-cli.tar.gz"; \
    tar -xzf "$tmpdir/vscode-cli.tar.gz" -C "$tmpdir"; \
    install -m 0755 "$tmpdir/code" /usr/local/bin/code-tunnel; \
    rm -rf "$tmpdir"

# Node.js (npm included). Pin an exact package version so rebuilds do not drift
# within the 22.x line.
ENV NODEJS_VERSION=22.22.1-1nodesource1
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get update \
    && apt-get install -y --no-install-recommends "nodejs=${NODEJS_VERSION}" \
    && rm -rf /var/lib/apt/lists/* \
    && node -v && npm -v

# Playwright system dependencies for Chromium.
# Uses the playwright CLI to install the correct system packages for this OS.
RUN npx -y "playwright@${PLAYWRIGHT_VERSION}" install-deps chromium

# Switch to dev user (browser binaries installed as vscode, not root)
USER vscode
ENV HOME=/home/vscode
ENV PATH="$HOME/.local/bin:/usr/local:$PATH"

# Playwright browser binaries (pinned to project version).
# install-deps above handles system libs; this downloads the actual browser.
RUN npx -y "playwright@${PLAYWRIGHT_VERSION}" install chromium

WORKDIR /workspaces/xrisk-pause-game
