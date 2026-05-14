FROM mcr.microsoft.com/devcontainers/base:ubuntu

ARG GITLEAKS_VERSION=8.30.1
ARG PLAYWRIGHT_VERSION=1.60.0

ENV DEBIAN_FRONTEND=noninteractive

SHELL ["/bin/bash", "-lc"]

# -----------------------------------------------------------------------------
# Local devcontainer image for xrisk-pause-game (Jörn's Ubuntu desktop)
#
# Design goals:
# - Keep the image simple and close to standard devcontainer patterns (KISS).
# - Heavyweight dependencies in earlier layers for caching.
# - More frequently tweaked tools after base deps.
# -----------------------------------------------------------------------------

# Base system dependencies (rarely change)
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    git \
    build-essential \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# CLI tools used by agents
RUN apt-get update && apt-get install -y --no-install-recommends \
    ripgrep \
    jq \
    gh \
    tree \
    inotify-tools \
    age \
    tmux \
    trash-cli \
    && rm -rf /var/lib/apt/lists/*

# Gitleaks — pre-commit secret scanner (prevents hardcoded API keys)
RUN set -eux; \
    curl -fsSL "https://github.com/gitleaks/gitleaks/releases/download/v${GITLEAKS_VERSION}/gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz" \
    | tar xz -C /usr/local/bin gitleaks; \
    gitleaks version

# VS Code tunnel CLI (bake into image to avoid slow postCreate download)
RUN set -eux; \
    tmpdir="$(mktemp -d)"; \
    curl -fsSL "https://update.code.visualstudio.com/latest/cli-linux-x64/stable" -o "$tmpdir/vscode-cli.tar.gz"; \
    tar -xzf "$tmpdir/vscode-cli.tar.gz" -C "$tmpdir"; \
    install -m 0755 "$tmpdir/code" /usr/local/bin/code-tunnel; \
    rm -rf "$tmpdir"

# Node.js 22.x (npm included)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get update \
    && apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/* \
    && node -v && npm -v

# Playwright system dependencies for Chromium.
# Uses the playwright CLI to install the correct system packages for this OS.
RUN npx -y "playwright@${PLAYWRIGHT_VERSION}" install-deps chromium

# Switch to dev user (browser binaries installed as vscode, not root)
USER vscode
ENV HOME=/home/vscode
ENV PATH="$HOME/.local/bin:$PATH"

# Playwright browser binaries (pinned to project version).
# install-deps above handles system libs; this downloads the actual browser.
RUN npx -y "playwright@${PLAYWRIGHT_VERSION}" install chromium

WORKDIR /workspaces/xrisk-pause-game
