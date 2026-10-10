# Literature corpus

This README is reader and navigation guidance for the retained files in this
flat directory. It is project-maintained guidance, not domain evidence. The
corpus supports passage checking for game and research work; it is neither an
exhaustive literature review nor a guarantee of current truth. Source identity,
conversion fidelity, and claims in project-written material need checking at
the cited original when they matter.

## Find and interpret material

- [`INDEX.md`](INDEX.md) is the file-level catalog. Search filenames and full
  text with `rg`; use headings in Markdown files to locate passages, then check
  the cited URL or original publication for consequential wording and context.
- [`REFERENCES.md`](REFERENCES.md) is a historical sanctions-retrieval backlog.
  Its access notes record attempts at the time they were written and may be
  stale; they do not establish that an item remains unavailable.
- File presence means only that a local record is retained. It may be an
  original-source conversion, a bounded excerpt, a compilation, or a project
  synthesis. Titles, frontmatter, and the record itself determine what is
  claimed; where extent or provenance is unclear, treat it as unverified.
- The incident-database compilation and several explicit research aids or
  syntheses are project-authored or assembled records, not independent source
  publications. In particular, `ai-progress-without-frontier-compute.md`,
  `algorithmic-efficiency-trends.md`, `compute-requirements-trends.md`,
  `theory-vs-scale-in-ai-progress.md`, `ai-economic-impact-jobs-2024-2025.md`,
  `ai-investment-bubble-2024-2025.md`, `political-statements-ai-risk.md`,
  `sb1047-analysis.md`, `iabied-references-analysis.md`, and `REFERENCES.md`
  should be read as research aids/compilations. Other files may also contain
  summaries or incomplete conversions; this list is not a quality assessment.
- Some copyrighted items are tracked only as ciphertext. The index links the
  logical `.md` name to its actual `.md.enc` file and labels that plaintext as
  absent from a normal checkout. A decrypted `.md` may exist locally as an
  ignored file. `age-recipient.txt` is a public encryption recipient, not a
  decryption key. Use the existing `scripts/decrypt-literature.sh` and local
  secret-key setup when authorized; keep plaintext and secret keys private.

## Corpus shape

The directory stays flat so filename and full-text search remain useful. The
catalog covers retained literature resources and the retrieval backlog; local
rules for editing it live in [`AGENTS.md`](AGENTS.md). No entry implies that
research coverage is exhaustive or that a source remains online and current.
