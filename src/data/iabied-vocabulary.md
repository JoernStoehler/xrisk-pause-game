# IABIED Vocabulary Reference

Authoritative vocabulary from the IABIED treaty, book, and online resources.
Only terms that IABIED specifically introduces, defines, or uses as terms-of-art.
Verified against primary sources — no fabricated terms.

## Treaty Definitions (Article II)

**Core concepts:**
- **Artificial intelligence (AI)** — Computational system performing tasks requiring cognition, planning, learning, or action. (Art. II)
- **Artificial superintelligence (ASI)** — Any AI with sufficiently superhuman cognitive performance that it could plan and successfully execute the destruction of humanity. (Art. II)
- **Dangerous AI activities** — Activities that substantially increase the risk of ASI being created, including precursor steps. Concretized by Articles IV–IX. (Art. II)
- **Restricted Research** — Research that advances AI capabilities or undermines verification; classified as either Controlled or Banned. (Art. VIII)
- **Controlled** (research classification) — Restricted Research that may proceed under monitoring and ISIA review. (Art. VIII)
- **Banned** (research classification) — Restricted Research that is absolutely prohibited. (Art. VIII)

**Compute and training:**
- **Floating-point operations (FLOP)** — Computational measure for training/post-training scale, counted as FP16-equivalent or total ops, whichever is higher. (Art. II)
- **Training run** — Any computational process that optimizes AI parameters using gradient-based or other search/learning methods. (Art. II)
- **Pre-training** — Initial training run using large-scale datasets to learn generalizable representations. (Art. II)
- **Post-training** — Training run executed after pre-training; also any training on models created before the treaty. (Art. II)
- **Methods used to create frontier models** — Broad set of AI development methods: architectures, optimizers, training algorithms, data curation, etc. Excludes prompting. (Art. II)

**Hardware:**
- **Advanced computer chips** — Integrated circuits fabricated on processes at least as advanced as 28nm. (Art. II)
- **AI chips** — Specialized integrated circuits designed primarily for AI computations (GPUs, TPUs, NPUs, etc.). Subset of advanced computer chips. (Art. II)
- **AI hardware** — All hardware for training/running AIs: AI chips, networking, power, cooling. (Art. II)
- **AI chip manufacturing equipment** — Equipment used to fabricate, test, assemble, or package AI chips. (Art. II)
- **H100-equivalent** — Unit of computing capacity equal to one NVIDIA H100 SXM (990 TFLOP/s FP16, TPP 15,840). (Art. II)
- **Covered chip cluster (CCC)** — Any set of AI chips with aggregate capacity >16 H100-equivalents, or inter-node bandwidth >25 Gbit/s. (Art. II)
- **Chip-use verification** — Methods providing insight into what activities are running on chips, to differentiate acceptable from prohibited use. (Art. II)

**Verification:**
- **National Technical Means (NTM)** — Satellite, aerial, cyber, signals, imagery, and other remote-sensing capabilities used by Parties for verification. (Art. II)

## Treaty Organizational Structure

- **ISIA (International Superintelligence Agency)** — The international body implementing the treaty. (Art. III)
- **Conference of the Parties** — All treaty parties; sets overall policy, adopts budget, elects Executive Council. (Art. III)
- **Executive Council** — 15 members (5 UNSC permanent + 10 elected); approves inspections, appoints Director-General, oversees Technical Secretariat. (Art. III)
- **Technical Secretariat** — Implements treaty provisions; headed by the Director-General. (Art. III)
- **Director-General** — Head of Technical Secretariat; 4-year term, renewable once; can make emergency threshold changes. (Art. III)

**Technical divisions (under Technical Secretariat):**
- **Chip Tracking and Manufacturing Safeguards** — Monitors chip production and supply chain. (Art. III, Art. VI)
- **Chip Use Verification Safeguards** — Verifies chips are used only for permitted activities. (Art. III, Art. VII)
- **Research Controls** — Classifies research as Controlled or Banned; maintains boundaries of Restricted Research. (Art. III, Art. VIII)
- **Information Consolidation** — Receives intelligence from parties; maintains secure/anonymous reporting channels. (Art. III, Art. X)
- **Technical Reviews** — Conducts evaluations of declared AI models to track capability trends. (Art. III, Art. XIII)
- **Legal and Compliance** — Legal support for treaty implementation. (Art. III)
- **Administration and Finance** — Budget and operations. (Art. III)

## Treaty Mechanisms and Procedures

- **Challenge inspections** — On-site inspections of suspected sites; require Executive Council majority; 24hr access after approval; max 20 per party per year. (Art. X)
- **ISIA Reviews** — Evaluations of declared AI models to inform whether thresholds need revision. (Art. XIII)
- **Protective Actions** — Last-resort measures (cyber ops, interdiction, military action) to prevent ASI development, authorized under Art. XII. Must be necessary, proportionate, targeted.
- **Protective Action Statement** — Public statement accompanying any Protective Action: explains purpose, identifies targets, states cessation conditions. (Art. XII)
- **ASI-enabling assets** — Advanced computer chip manufacturing equipment and other infrastructure that withdrawing nations must forfeit or render inoperable. (Art. XV)
- **Covered Whistleblowers** — Individuals who in good faith provide credible information about treaty violations; protected from retaliation, eligible for asylum. (Art. X)
- **Associated Persons** — Family members and close associates of Covered Whistleblowers who assist or are at risk due to the disclosure. (Art. X)
- **Dispute Resolution** — Concerned Party raises issue, Requested Party must clarify within 5 days; Executive Council adjudicates if unresolved. (Art. XI)

## Treaty Thresholds

- **1e24 FLOP** — Training ban: pre-training above this threshold is prohibited. (Art. IV)
- **1e23 FLOP** — Post-training ban: post-training above this threshold is prohibited. (Art. IV)
- **1e22 FLOP** — Reporting threshold: training in the 1e22–1e24 band requires declaration and ISIA oversight. (Art. IV)
- **16 H100-equivalents** — CCC threshold: chip clusters above this must be in declared, monitored facilities. (Art. V)
- **25 Gbit/s** — Networking threshold: inter-node bandwidth above this defines a networked cluster as a CCC. (Art. II)

## Book Concepts (Yudkowsky & Soares 2025)

**Fictional entities:**
- **Galvanic** — Fictional AI company in the book's narrative.
- **Sable** — Fictional ASI system in the book's narrative.
- **Mink** — Fictional LLM in the book's narrative.
- **Klurl and Trapaucius** — Fictional aliens from a Stanislaw Lem parable used to illustrate alignment failure.
- **Correct-Nest aliens** — Fictional alien species used to illustrate value alignment concepts.

**Named framings:**
- **"Hard calls and easy calls"** — Epistemological framework: some decisions about ASI risk are genuinely hard, but the current situation is an easy call.
- **"Grown, not crafted"** — Why modern AI is unlike traditional engineering: neural networks are grown through training, not designed from blueprints.
- **"You don't get what you train for"** — Preference divergence principle: training objectives do not reliably produce the intended goals in the trained system.
- **Zero/one/modest/big complication vignettes** — Pedagogical structure presenting escalating levels of alignment difficulty.
- **"The gap between before and after"** — The central alignment difficulty: the transition from sub-ASI to ASI may be irreversible and must be navigated correctly on the first try.
- **"The curse of edge cases"** — Security principle applied to alignment: a system that fails on edge cases is not safe, because adversarial or novel situations are inevitable.
- **"An alchemy, not a science"** — Characterization of the current state of alignment research: empirical tinkering without deep understanding.
- **"Parallel scaling law"** — Fictional capability of Sable (the fictional ASI) in the book's narrative.

## Resource Chapter Concepts

- **"The Lemoine effect"** — Alarm fatigue pattern: repeated false alarms about AI sentience/danger cause the public to dismiss genuine warnings. (Resources)
- **"Mechanomorphism" / "mechanoskepticism"** — Cognitive bias opposite to anthropomorphism: underestimating AI capabilities by assuming machines cannot truly reason or plan. (Resources)
- **"Relative efficiency"** — Epistemic and instrumental concept: generalized efficient markets reasoning applied to AI capabilities. (Resources)
- **"Before and After"** — Capitalized framework: the world before ASI exists vs. the world after, and why the transition is the critical moment. (Resources, also Ch. 10)
- **"Intelligence as prediction and steering"** — IABIED's operative definition of intelligence: the ability to predict outcomes and steer toward desired ones. (Book, Ch. 1; exact phrasing unverified in resource chapters — may appear in ch7-9 which were not fully searched)
- **"Aliens wearing many masks"** — Characterization of LLMs: they simulate many personas without having a stable identity. (Resources)
- **"The banality of self-destruction"** — Historical recklessness pattern: civilizations repeatedly fail to act on known existential threats due to normalcy bias and diffusion of responsibility. (Resources)
- **"Keep the coalition large"** — Political strategy principle: nothing should be packaged with the survival of humanity except the survival of humanity. (Ch. 13 Resources)

## Terms NOT from IABIED (commonly misattributed)

Terms previously used in game event files as if from IABIED, but which are not IABIED-coined vocabulary. These have been corrected in event files (2026-03-05) but are documented here to prevent reintroduction.

- **"Born dangerous"** — Fabricated. Was used as "B-24 (born dangerous)" — the actual concept is dual-use research, covered by IABIED's Restricted Research classification (Art. VIII). Replaced with "dual-use" in all event files.
- **"Born secret"** — Real historical doctrine from the U.S. Atomic Energy Act of 1946, not coined by IABIED. The treaty cites it as precedent for restricting AI research by default. Correct to reference as historical precedent, incorrect to attribute to IABIED.
- **"Smuggling channel"** — Fabricated. Was used as "B-25c (inadvertent smuggling channel)" — the actual concept is classification failure (researchers disguising banned capability work as approved safety work). Replaced with "disguised capability work" in all event files.
- **"Breakout time"** — Standard arms control vocabulary borrowed from nuclear nonproliferation, meaning the time between when an actor starts pursuing ASI and when they succeed. The concept appears in the treaty (Arts. V, VII) but is not formally defined by IABIED.
