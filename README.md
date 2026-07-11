# AI Treaty Game

This repository is the development home for a browser game about operating an
international pause on dangerous AI development. The current substantive
baseline came from the 11 July 2026 ChatGPT Work-mode handoff. The retired game
and its full history remain recoverable at commit
`0c5262c34c423cc62b68124d30d002b4886b879f`.

The opening slice is an internal structural prototype. Its worlds are
diagnostic fixtures, not calibrated forecasts, and its expert-grounded content
remains draft pending Jörn's review.

## Three independent products

1. **Expert-model atlas (`docs/expert-model/`)**
   Communicates what the project currently believes about the territory, why,
   where it is uncertain, and where experts disagree. It may remain partly
   informal because forcing unused detail into numbers would create false
   precision.

2. **Symbolic game model (`docs/game-model/`)**
   Describes the deliberately simplified territory implemented by the eventual
   engine: typed state, causal transitions, observations, actions, stochastic
   hypotheses, omissions, and trace semantics. This layer should become more
   explicit than the expert model because it is a specification for code.

3. **Review and pruning interface (`docs/review/`)**
   Makes errors and disagreements cheap to locate. It contains first-year
   forecast elicitation, crux records, intervention-conditioned comparisons,
   and explicit decisions about which mechanisms are represented, compressed,
   scenario-only, or omitted.

Similarity between these products is optional. Crosswalks exist only where they
help determine whether a game abstraction changes an important policy ordering
or public lesson.

## Source status

- `literature/INDEX.md` — navigation for the retained downloaded and cleaned
  reference corpus. Treat converted text as a research aid and verify precise
  quotations, formulas, tables, and time-sensitive claims against the original.
- `source/jorn-review-2026-05-11-raw-excerpts.md` — recovered direct excerpts.
- `source/jorn-review-2026-07-11-*.md` — dated polished records of Jörn's later
  reviews; treat them as paraphrases unless marked otherwise.
- `source/jorn-review-batch-1.md` — questions and synthesis that prompted part
  of the July review, not the response record itself.
- Public sources — should be cited inside the expert-model atlas when used.
- Reconstructed project inference — must be labeled rather than attributed to
  Jörn or a publication.

## Promotion rule

No number enters a playable distribution merely because an artifact needs a
number. A statement can stop at a qualitative branch, ordering, broad range, or
unweighted stress case. The symbolic game model may use explicit values only
when their provenance and role—forecast, elicited judgment, diagnostic fixture,
or playability transform—are recorded.

## Reading order for the next high-level review

1. [High-level review packet](docs/review/HIGH_LEVEL_REVIEW.md)
2. [Presentation strategy](docs/ARTIFACT_STRATEGY.md)
3. [Expert atlas overview](docs/expert-model/README.md)
4. [Expert causal map](docs/expert-model/map.md)
5. [Conditional first-year outlook](docs/expert-model/first-year-outlook.md)
6. [Symbolic stochastic expert model](docs/review/symbolic-stochastic-expert-model.md)
7. [Symbolic game-model overview](docs/game-model/README.md)
8. [Game causal atlas](docs/game-model/causal-atlas.md)
9. [Pruning protocol](docs/review/pathway-pruning-and-representation.md)
10. [Fast disagreement interface](docs/review/expert-disagreement-elicitation-interface.md)

The detailed first-year register and canonical game `model.yaml` are reference
artifacts; they are not the recommended first reading pass.

## Run and verify the internal vertical slice

```text
npm ci
npm run check
npm run test:e2e
npm run dev
```

`npm run build` creates the ignored static bundle under `dist/`. See
`PROGRESS.md` for current gates and
`docs/migration/retained-old-material.md` for migration provenance.
