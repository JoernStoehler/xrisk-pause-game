#!/usr/bin/env python3
"""Check active project Markdown links and anchors using only Python's stdlib.

This does not inspect the downloaded literature corpus or validate external URLs.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent.parent
MARKDOWN_LINK = re.compile(r"!?(?:\[[^\]]*\])\((?:<([^>]+)>|([^\s)]*))(?:\s+[^)]*)?\)")
HEADING = re.compile(r"^#{1,6}\s+(.+?)\s*#*\s*$")
EXPLICIT_ANCHOR = re.compile(r"<(?:a\s+[^>]*?name|[^>]+\s+id)=['\"]([^'\"]+)['\"]", re.I)
SLUG_PUNCTUATION = re.compile(r"[^\w\-\s]", re.UNICODE)


def active_markdown_files() -> list[Path]:
    candidates: set[Path] = set()
    for relative in ("README.md", "INSTALL.md", "AGENTS.md", "literature/README.md",
                     "literature/INDEX.md", "literature/REFERENCES.md", "literature/AGENTS.md"):
        path = ROOT / relative
        if path.is_file():
            candidates.add(path)
    for directory in (ROOT / "docs", ROOT / "interviews", ROOT / ".agents" / "skills"):
        if directory.is_dir():
            candidates.update(path for path in directory.rglob("*.md") if path.is_file())
    return sorted(candidates)


def heading_anchors(text: str) -> set[str]:
    anchors: set[str] = set()
    occurrences: dict[str, int] = {}
    for line in text.splitlines():
        explicit = EXPLICIT_ANCHOR.search(line)
        if explicit:
            anchors.add(explicit.group(1))
        match = HEADING.match(line)
        if not match:
            continue
        slug = SLUG_PUNCTUATION.sub("", match.group(1).lower()).strip()
        # GitHub preserves consecutive spaces as consecutive hyphens after
        # punctuation removal (for example, "Sufficiency / Fake Hope").
        slug = re.sub(r"\s", "-", slug)
        count = occurrences.get(slug, 0)
        occurrences[slug] = count + 1
        anchors.add(slug if count == 0 else f"{slug}-{count}")
    return anchors


def resolve_target(source: Path, raw_target: str) -> tuple[Path | None, str | None]:
    target = unquote(raw_target.strip())
    if not target or target.startswith("#"):
        return source, target[1:] if target.startswith("#") else None
    parsed = urlsplit(target)
    if parsed.scheme or parsed.netloc:
        return None, None
    fragment = parsed.fragment or None
    path_part = parsed.path
    candidate = (source.parent / path_part).resolve() if path_part else source.resolve()
    return candidate, unquote(fragment) if fragment else None


def main() -> int:
    files = active_markdown_files()
    if not files:
        print("ERROR: no active project Markdown files were found.", file=sys.stderr)
        return 1

    errors: list[str] = []
    unavailable: list[str] = []
    checked_links = 0
    for source in files:
        text = source.read_text(encoding="utf-8")
        for match in MARKDOWN_LINK.finditer(text):
            raw_target = match.group(1) or match.group(2) or ""
            # External and empty destinations do not describe local files.
            if not raw_target or raw_target.startswith(("http://", "https://", "mailto:", "data:")):
                continue
            checked_links += 1
            candidate, fragment = resolve_target(source, raw_target)
            if candidate is None:
                continue
            line = text.count("\n", 0, match.start()) + 1
            relative_source = source.relative_to(ROOT)
            if not candidate.exists():
                encrypted = candidate.with_suffix(candidate.suffix + ".enc")
                if candidate.suffix == ".md" and encrypted.is_file():
                    unavailable.append(f"{relative_source}:{line}: plaintext unavailable (encrypted source exists): {raw_target}")
                else:
                    errors.append(f"{relative_source}:{line}: missing local target: {raw_target}")
                continue
            if fragment and candidate.is_file() and candidate.suffix.lower() in {".md", ".html", ".htm"}:
                target_text = candidate.read_text(encoding="utf-8", errors="replace")
                if fragment not in heading_anchors(target_text):
                    errors.append(f"{relative_source}:{line}: missing anchor #{fragment} in {raw_target}")

    for item in unavailable:
        print(f"UNAVAILABLE: {item}")
    for item in errors:
        print(f"ERROR: {item}", file=sys.stderr)
    if errors:
        print(f"FAILED: {len(errors)} broken local link(s); {len(unavailable)} encrypted plaintext target(s) unavailable.")
        return 1
    print(f"OK: checked {len(files)} active Markdown file(s) and {checked_links} local link(s); {len(unavailable)} encrypted plaintext target(s) unavailable.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
