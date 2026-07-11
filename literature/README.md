# Literature

## Purpose

Pre-downloaded reference materials and project research aids. They reduce repeated
retrieval and formatting work, but their presence here is not evidence that a source,
conversion, summary, or synthesis is accurate or suitable for a particular claim.

**This is shared, read-only context**: not code, not a dependency. Project
instructions reference specific files or sections from `AGENTS.md`, skills, or
design notes.

---

## Structure

```
literature/
  README.md        # You are here
  INDEX.md         # One-line summary of each resource
  .gitignore       # Ignores decrypted copies of encrypted files
  <slug>.md        # Tracked source conversion or research aid
  <slug>.txt       # Tracked source text or excerpt
  <slug>.md.enc    # Encrypted resource (copyrighted), committed
  <slug>.md        # Optional local decrypted copy, gitignored
```

**File naming:** descriptive, short kebab-case slugs, normally with `.md` or
`.txt`; encrypted Markdown uses `.md.enc` in git.

**No nesting.** The flat directory uses INDEX.md as its navigation layer.

---

## File Format

New converted `.md` files should start with YAML frontmatter:

```yaml
---
title: "Full Title of the Resource"
author: "Author Name(s)"
year: 2024
source_url: "https://original-source-url"
source_format: pdf  # pdf | arxiv-tex | html | epub
downloaded: 2026-02-07
encrypted: false  # true if .enc version exists and .md is gitignored
notes: "Optional — what this covers, which parts are most useful"
---
```

Then the content as clean markdown:
- Clear `# Chapter` / `## Section` headers so agents can navigate by offset/limit
- No images — replace with `[Figure N: brief description of what the figure shows]`
- No complex tables — simplify to plain text or lists if needed
- Preserve the intellectual structure, not the visual layout

**Evidence status:** Converted files can contain OCR, transcription, omission,
formatting, or metadata errors, including in prose. Project-written analyses,
reference lists, and multi-source syntheses are discovery and research aids, not
presumptively reliable evidence. Before relying on a claim, distinguish the original
source from project synthesis and verify material wording, figures, tables, citations,
and context against the original source when accuracy matters.

---

## How to Add New Literature

When adding literature, prefer a bounded source-ingestion task:
- Source: URL or precise source description.
- Slug: kebab-case filename stem.
- Copyrighted: yes/no.
- Required output: converted source file, `INDEX.md` update, and
  encryption/gitignore update when copyrighted.

If Jörn explicitly authorizes subagents, delegate this as a worker task with
`literature/` as the write scope. The parent session remains responsible for
relevance, source quality, copyright/encryption handling, and whether
downstream claims cite the added source.

### Conversion recipes (for the subagent to follow)

**PDF → Markdown:**
```bash
# Using pandoc (best for well-structured PDFs)
pandoc -f pdf -t markdown --wrap=none /tmp/source.pdf -o /tmp/output.md

# If pandoc output is poor, try marker (better for complex layouts)
pip install marker-pdf
marker_single /tmp/source.pdf /tmp/output/
```

**arxiv .tex → Markdown:**
```bash
# Download source
wget -O /tmp/arxiv-source.tar.gz "https://arxiv.org/e-print/PAPER_ID"
mkdir -p /tmp/arxiv-source && tar -xzf /tmp/arxiv-source.tar.gz -C /tmp/arxiv-source

# Find main .tex file and convert
pandoc -f latex -t markdown --wrap=none /tmp/arxiv-source/main.tex -o /tmp/output.md
```

**HTML → Markdown:**
```bash
pandoc -f html -t markdown --wrap=none /tmp/source.html -o /tmp/output.md
```

### Post-conversion cleanup

After mechanical conversion, clean up the output:
- Remove artifacts: page numbers, headers/footers, watermarks, repeated running titles
- Fix broken headings and section structure (ensure proper `#` hierarchy)
- Replace images: `![...](...)` → `[Figure N: description]`
- Simplify complex tables to plain text or lists
- Remove excessive whitespace, fix broken paragraphs
- Add YAML frontmatter
- Verify the document is navigable by scanning the first ~50 lines (table of contents / chapter headers)

### Encryption (copyrighted material)

Uses `age` with a keypair (not passphrase mode):
- **`LITERATURE_KEY`** env var: the age secret key (`AGE-SECRET-KEY-...`)
- **`literature/age-recipient.txt`**: the corresponding public key (`age1...`), committed to repo

```bash
# Generate keypair (one-time setup):
age-keygen -o /tmp/age-key.txt 2>&1 | grep -oP 'age1\S+' > literature/age-recipient.txt
# Copy the AGE-SECRET-KEY-... line from /tmp/age-key.txt into the LITERATURE_KEY env var
# Then: rm /tmp/age-key.txt

# Encrypt a file:
age -r $(cat literature/age-recipient.txt) -o literature/<slug>.md.enc literature/<slug>.md
```

Then add `<slug>.md` to `literature/.gitignore` and set `encrypted: true` in the
plaintext frontmatter before encryption. Git stores only `<slug>.md.enc`; the encrypted
file is not readable Markdown and has no inspectable frontmatter until decrypted.

### Decryption

Encrypted index entries use the logical plaintext `.md` filename for navigation and
mark it `Yes`. In a normal checkout that path may not exist: the tracked counterpart is
`<slug>.md.enc`. If `LITERATURE_KEY` is available, create the local ignored plaintext
copies with:

```bash
bash scripts/decrypt-literature.sh
```

The script also sources `.env` when present, so local devcontainer sessions
usually do not need a separate export.

---

## How Projects Reference Literature

In `AGENTS.md`, a skill, or a design note:

```markdown
## Reference Literature
- literature/iabied-book.md — chapters 3, 7 on instrumental convergence
- literature/some-paper.md — section 2 on threat models
```

Agents then use `Read` with `offset`/`limit` to access relevant sections, guided by the markdown headers in the file.
