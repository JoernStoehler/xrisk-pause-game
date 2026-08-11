# syntax=docker/dockerfile:1.7@sha256:a57df69d0ea827fb7266491f2813635de6f17269be881f696fbfdf2d83dda33e

# Keep the base and Node pins aligned with the proven Compose workspaces.
FROM ubuntu:24.04@sha256:561618e2c15bf2397621dd04f96926663a3b5616c189cf7e38db7e82f5c538ea
ARG DEBIAN_FRONTEND=noninteractive
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
ENV LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 TZ=Europe/Berlin

# Ordinary workspace and agent tools. Application dependencies stay in the
# bind-mounted repository and are installed with `just install-deps`.
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt/lists,sharing=locked \
    apt-get update && apt-get install -y --no-install-recommends \
      age bash-completion build-essential ca-certificates curl git gh jq just less \
      locales openssh-client openssl procps python3 python3-venv ripgrep sudo \
      tmux trash-cli tree unzip xz-utils \
    && locale-gen en_US.UTF-8

ARG NODE_VERSION=22.22.1
ARG NODE_SHA256=9a6bc82f9b491279147219f6a18add1e18424dce90d41d2a5fcd69d4924ba3aa
RUN set -eux; \
    work="$(mktemp -d)"; \
    curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz" -o "${work}/node.tar.xz"; \
    echo "${NODE_SHA256}  ${work}/node.tar.xz" | sha256sum -c -; \
    tar -xJf "${work}/node.tar.xz" -C /usr/local --strip-components=1; \
    rm -rf "${work}"; \
    node --version; \
    npm --version

# Keep this pin aligned with package-lock.json. Playwright couples each release
# to exact browser builds, so install its Chromium and Linux dependencies
# together using the vendor-supported CLI.
ARG PLAYWRIGHT_VERSION=1.60.0
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
RUN --mount=type=cache,target=/root/.npm,sharing=locked \
    --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt/lists,sharing=locked \
    npx --yes "@playwright/test@${PLAYWRIGHT_VERSION}" install --with-deps chromium \
    && chmod -R a+rX "${PLAYWRIGHT_BROWSERS_PATH}" \
    && find "${PLAYWRIGHT_BROWSERS_PATH}" -type f -path '*/chrome-linux64/chrome' \
      -exec {} --version \;

ARG GITLEAKS_VERSION=8.30.1
RUN set -eux; \
    work="$(mktemp -d)"; \
    curl -fsSL "https://github.com/gitleaks/gitleaks/releases/download/v${GITLEAKS_VERSION}/gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz" \
      -o "${work}/gitleaks.tar.gz"; \
    tar -xzf "${work}/gitleaks.tar.gz" -C "${work}" gitleaks; \
    install -m 0755 "${work}/gitleaks" /usr/local/bin/gitleaks; \
    rm -rf "${work}"; \
    gitleaks version
ARG DEVELOPER_UID=1000
ARG DEVELOPER_GID=1000
RUN set -eux; \
    existing_user="$(getent passwd "${DEVELOPER_UID}" | cut -d: -f1 || true)"; \
    test -z "${existing_user}" || userdel -r "${existing_user}" || userdel "${existing_user}"; \
    existing_group="$(getent group "${DEVELOPER_GID}" | cut -d: -f1 || true)"; \
    test -z "${existing_group}" || groupdel "${existing_group}"; \
    groupadd --gid "${DEVELOPER_GID}" developer; \
    useradd --uid "${DEVELOPER_UID}" --gid "${DEVELOPER_GID}" --create-home --shell /bin/bash developer; \
    echo 'developer ALL=(ALL:ALL) NOPASSWD: ALL' > /etc/sudoers.d/developer; \
    chmod 0440 /etc/sudoers.d/developer; \
    visudo --check --file=/etc/sudoers.d/developer; \
    install -d -o developer -g developer -m 0700 /home/developer/.codex; \
    install -d -o developer -g developer -m 0700 /home/developer/.config/gh; \
    install -d -o developer -g developer -m 0755 \
      /home/developer/.cache /home/developer/.local /home/developer/.local/bin

COPY --chmod=0644 container/tmux.conf /etc/tmux.conf
RUN git config --system init.defaultBranch main \
    && git config --system core.autocrlf false \
    && git config --system credential.https://github.com.helper '!gh auth git-credential'

ARG CODEX_VERSION=0.147.0
RUN --mount=type=cache,target=/root/.npm,sharing=locked \
    npm install --global "@openai/codex@${CODEX_VERSION}" \
    && test "$(codex --version)" = "codex-cli ${CODEX_VERSION}"

ARG WORKSPACE_REVISION=uncommitted
LABEL org.opencontainers.image.title="xrisk-pause-game development workspace" \
      org.opencontainers.image.revision="${WORKSPACE_REVISION}" \
      io.joern.xrisk-pause-game.developer-uid="${DEVELOPER_UID}" \
      io.joern.xrisk-pause-game.developer-gid="${DEVELOPER_GID}"

ENV HOME=/home/developer \
    USER=developer \
    LOGNAME=developer \
    CODEX_HOME=/home/developer/.codex \
    NPM_CONFIG_CACHE=/home/developer/.cache/npm \
    NPM_CONFIG_PREFIX=/home/developer/.local \
    PATH=/home/developer/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

USER developer
WORKDIR /workspaces/xrisk-pause-game
CMD ["sleep", "infinity"]
