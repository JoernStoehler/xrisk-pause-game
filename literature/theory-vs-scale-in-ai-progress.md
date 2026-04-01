---
title: "Theory vs. Scale in AI Progress: How Much Algorithmic Innovation Requires Large-Scale Experiments?"
author: "Research synthesis (multiple sources)"
year: 2025-2026
source_url: "multiple — see inline citations"
source_format: web-synthesis
downloaded: 2026-03-26
encrypted: false
notes: "Synthesis of research on the relative contributions of small-scale theoretical work vs. large-scale experiments to AI algorithmic progress. Covers empirical decompositions (Epoch AI, Gundlach et al., Fogelson et al.), the role of scaling laws, small-scale research productivity, the 'compute as substitute for ideas' debate, and historical analogies from other fields."
---

# Theory vs. Scale in AI Progress

## The Core Question

If large-scale AI training runs were restricted (e.g., by a moratorium on runs above some FLOP threshold), how much would algorithmic progress slow? This question matters for AI governance because the answer determines whether compute governance alone can durably slow the approach of dangerous AI capabilities.

The evidence is surprisingly rich, though the picture it paints is complex. The short answer: **most individual algorithmic innovations are discovered and validated at small scale, but the most impactful ones only reveal their full value at large scale.** This creates a paradox for governance: small-scale research is productive, but the innovations that matter most for frontier capabilities are precisely those whose importance is hardest to assess without large-scale experiments.

---

## 1. Empirical Decompositions: Where Does Algorithmic Progress Come From?

### 1.1 The Headline Numbers

Epoch AI's landmark study (Ho et al., 2024) found that the compute required to reach a given language model performance level has been halving every ~8 months (95% CI: 5-14 months). This is substantially faster than hardware gains per Moore's Law.

However, despite this rapid algorithmic progress, **compute scaling has contributed more to overall performance improvements** than algorithms. Using Shapley value analysis over 2012-2023:

- **Compute and data:** responsible for 60-95% of performance gains in language models
- **Algorithmic improvements:** responsible for only 5-40% of progress
- The relative importance of algorithmic advances has *decreased* over time as compute scaling accelerated post-2018

Source: Ho, A. et al. (2024). "Algorithmic Progress in Language Models." [arXiv:2403.05812](https://arxiv.org/abs/2403.05812)

### 1.2 The Gundlach Decomposition: Two Innovations Dominate

Gundlach et al. (2025), "On the Origin of Algorithmic Progress in AI," provides the most granular decomposition to date. Their central finding upends conventional wisdom:

**The widely-cited 22,000x efficiency gain (2012-2023) is overstated.** The authors estimate approximately 6,930x — roughly a third of previous estimates.

**Two innovations account for 91% of measured progress at frontier scale:**
1. **LSTM-to-Transformer transition:** 68% of frontier-scale efficiency gains
2. **Kaplan-to-Chinchilla scaling rebalancing:** most of the remainder

**Scale-invariant innovations contribute far less than commonly believed:**
- SwiGLU activation: 1.17x
- Pre-RMSNorm normalization: 1.87x
- Rotary positional encoding (RoPE): 1.44x
- AdamW vs SGD: 1.87x
- Learning rate schedule improvements: <1.05x
- **All post-2017 scale-invariant innovations combined:** only ~3.5x (after accounting for interaction effects)

**The critical insight — scale-dependence:** The Transformer shows only 6.28x improvement over LSTMs at 10^15 FLOPs, but extrapolates to 725x at frontier scale (2x10^23 FLOPs). Progress at small scales (~10^18 FLOPs) is only ~20x — actually *below* hardware progress rates over the same period (32x from Moore's Law).

This means: **measured at small scale, algorithmic progress looks modest. Measured at frontier scale, it looks enormous. The innovations are identical — only the scale of evaluation changes.**

Source: Gundlach, H. et al. (2025). "On the Origin of Algorithmic Progress in AI." [arXiv:2511.21622](https://arxiv.org/abs/2511.21622)

### 1.3 Fogelson et al.: What Compute Does Innovation Actually Require?

Fogelson et al. (2025), "Compute Requirements for Algorithmic Innovation in Frontier AI Models" (ICML 2025), directly addresses what compute is needed to *develop* (not deploy) algorithmic innovations. They catalog 36 pre-training innovations used in Llama 3 and DeepSeek-V3.

**Key findings:**

- **~50% of cataloged innovations could have been developed at GPT-2 training compute levels (~10^20 FLOP)** or with hardware capped at 8 H100 GPUs
- **25% of innovations (9 of 36) required negligible training FLOP** — these are systems-level improvements (parallelism strategies, memory optimizations like ZeRO, FlashAttention) that require only a small number of forward/backward passes for validation
- Innovations using significant compute resources are doubling in their requirements annually (2.53x/year for FLOP)
- By 2028, projected median requirements reach 10^24 FLOP — still 10-100x below frontier training scales

**The governance implication:** "Even very restrictive caps — such as capping total operations to the compute used to train GPT-2 or capping hardware capacity to 8 H100 GPUs — would both only disallow about half of the cataloged innovations." Compute caps alone are "unlikely to dramatically slow AI algorithmic progress."

**However**, this finding must be read alongside Gundlach et al.'s result: the half of innovations that *can* be developed at small scale are predominantly the scale-invariant ones that contribute only ~3.5x combined efficiency gains. The innovations that *matter most* (Transformer architecture, optimal scaling laws) are both discoverable at small scale but only reveal their true impact at large scale.

Source: Fogelson, B. et al. (2025). "Compute Requirements for Algorithmic Innovation in Frontier AI Models." [arXiv:2507.10618](https://arxiv.org/abs/2507.10618)

---

## 2. Were Major Breakthroughs Discovered at Small Scale?

### 2.1 Innovations First Demonstrated on Small Models

The vast majority of foundational deep learning innovations were discovered at academic or modest-compute scales:

| Innovation | Year | Origin | Original Scale |
|---|---|---|---|
| Dropout | 2012 | Hinton's lab (U. Toronto) | Small neural networks |
| Word2Vec | 2013 | Mikolov (Google, but small models) | Modest compute |
| GANs | 2014 | Goodfellow (PhD student, U. Montreal) | Tiny models |
| Batch Normalization | 2015 | Ioffe & Szegedy (Google) | Moderate scale |
| ResNet / skip connections | 2015 | He et al. (Microsoft Research) | ImageNet-scale (moderate) |
| Attention mechanism | 2014-15 | Bahdanau (U. Montreal) | Machine translation |
| Transformer | 2017 | Vaswani et al. (Google Brain) | ~100M params, trained in 12 hours to 3.5 days on 8 GPUs |
| RLHF | 2017 | Christiano et al. (OpenAI/academic) | Atari games, small RL agents |
| FlashAttention | 2022 | Dao (Stanford) | Academic lab |
| LoRA | 2021 | Hu et al. (Microsoft/academic) | Fine-tuning at modest scale |
| Mixture of Experts routing | 2017 | Shazeer et al. (Google) | Moderate scale |

**Pattern:** Almost every major architectural and training innovation was first demonstrated at modest compute budgets, typically by teams of 2-8 researchers at universities or within small research groups at large companies.

The Transformer — the single most impactful innovation in modern AI — was developed by a team at Google Brain and demonstrated on a ~100M parameter model trained in 3.5 days on 8 GPUs. This is roughly 4x10^19 FLOP, approximately five orders of magnitude below today's frontier training runs.

Source: Vaswani, A. et al. (2017). "Attention Is All You Need." [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)

### 2.2 The Catch: Small-Scale Discovery vs. Large-Scale Validation

While innovations are *discovered* at small scale, their *importance* often cannot be determined without large-scale experiments:

- **The Transformer** showed only 6.28x gains over LSTMs at 10^15 FLOP. At that scale, it was a nice improvement for machine translation but would not have suggested it would be 725x better at frontier scale. The scale-dependent advantage — that self-attention parallelizes perfectly across GPUs while recurrence cannot — only becomes decisive at large scale.

- **Chinchilla scaling laws** (Hoffmann et al., 2022) could not have been discovered without training multiple large models to completion at different parameter/data ratios. The key insight — that most LLMs were severely undertrained — required observing the behavior of loss curves across a range of scales up to 280B parameters. Kaplan et al. (2020) had reached different conclusions partly because they "studied smaller sized model sizes," and the scaling coefficient shifts at larger scales.

- **RLHF** was first demonstrated on Atari games (Christiano et al., 2017) but its transformative impact on language model alignment (InstructGPT, ChatGPT) could only be validated on models with sufficient pre-trained capability — requiring frontier-scale pre-training first.

- **Emergent capabilities** — such as in-context learning, chain-of-thought reasoning, and multi-step problem solving — appear abruptly only above certain scale thresholds and "cannot be predicted simply by extrapolating the performance of smaller models" (Wei et al., 2022). Though recent work suggests some apparent emergence may be an artifact of evaluation metrics, the general pattern of capabilities appearing discontinuously with scale is well-documented.

Source: Hoffmann, J. et al. (2022). "Training Compute-Optimal Large Language Models." [arXiv:2203.15556](https://arxiv.org/abs/2203.15556); Wei, J. et al. (2022). "Emergent Abilities of Large Language Models." [arXiv:2206.07682](https://arxiv.org/abs/2206.07682); Reconciling Kaplan and Chinchilla: [arXiv:2406.12907](https://arxiv.org/abs/2406.12907)

### 2.3 Innovations That Required Large Scale

Some important contributions could *only* have emerged from large-scale experimentation:

- **Scaling laws themselves** (Kaplan et al., 2020; Hoffmann et al., 2022): Characterizing how loss scales with parameters, data, and compute requires training many models across a range of scales. Chinchilla's correction of Kaplan specifically required frontier-scale experiments.

- **RLHF for language models** (Ouyang et al., 2022 / InstructGPT): While the RL algorithm was known, applying it to large language models and discovering it produced dramatically more helpful/harmless responses required GPT-3-scale models.

- **In-context learning** (Brown et al., 2020 / GPT-3): The discovery that large language models could learn new tasks from examples in the prompt, without gradient updates, was only observed in models above ~1B parameters and became robust at ~100B+.

- **DeepSeek's efficiency innovations** (2025): Multi-head Latent Attention (MLA) and their proprietary gradient synchronization methods were developed and validated on models up to 671B parameters. While DeepSeek used less compute than Western labs, it still required thousands of GPUs and training budgets in the millions of dollars.

---

## 3. The Bitter Lesson and Its Critics

### 3.1 Sutton's Argument

Richard Sutton's "The Bitter Lesson" (2019) is the canonical statement that compute matters more than ideas:

> "The biggest lesson that can be read from 70 years of AI research is that general methods that leverage computation are ultimately the most effective, and by a large margin."

His examples: chess (Deep Blue's brute-force search beat hand-crafted knowledge), Go (AlphaGo's learning + search beat expert-designed heuristics), speech recognition (statistical methods beat linguistic rules), computer vision (deep learning beat hand-crafted features).

The lesson: "Researchers always tried to make systems that worked the way the researchers thought their own minds worked... and this always eventually proved counterproductive." Time is better invested in "finding simple scalable solutions that can take advantage of Moore's law" than in encoding human knowledge.

Source: Sutton, R. (2019). "The Bitter Lesson." [incompleteideas.net](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)

### 3.2 Gwern's Scaling Hypothesis

Gwern's influential essay (2020, updated 2022) argues that intelligence is "just" simple neural units and learning algorithms applied at sufficient scale. His central claim: **"we built the compute, and the algorithms did come."** GPT-3 used "a magnificently obsolete architecture from early 2018" yet achieved remarkable results through scale alone.

The implication for ideas vs. compute: scaling and algorithmic progress are complementary but with scaling as primary. "It is easier to make something efficient after it exists than before" — suggesting large-scale experiments come first, optimization follows.

Source: Gwern (2020). "The Scaling Hypothesis." [gwern.net/scaling-hypothesis](https://gwern.net/scaling-hypothesis)

### 3.3 The Counterargument: "The Bitter Lesson Is Misunderstood"

Critics note that the Bitter Lesson is often over-applied:

**Architectures are not "brute force."** Attention mechanisms, convolutional layers, residual connections, layer normalization — all the components that enable scaling — are products of human ingenuity. They are "priors that humans thought might make learning work better, and they are essential for the scaling improvements we've seen so far." Without the Transformer architecture (a human invention), scaling LSTMs would have produced far less impressive results.

**Ideas enable scaling, not the reverse.** The Transformer enabled efficient parallelization across GPUs. FlashAttention enabled longer context windows. Chinchilla showed how to allocate compute optimally. Each of these *ideas* unlocked further *scaling*. Compute without the right algorithmic framework is wasted.

**DeepSeek as counterexample.** DeepSeek achieved frontier-competitive performance with ~11x less compute than comparable Western models, primarily through architectural innovations (MoE, MLA, FP8 mixed precision). This suggests ideas can substitute for some amount of compute — at least when the ideas are available.

Source: "The Bitter Lesson is Misunderstood." [obviouslywrong.org](https://www.obviouslywrong.org/p/the-bitter-lesson-is-misunderstood); DeepSeek V3 Technical Report.

### 3.4 Sutskever's "Age of Research" Pivot

Ilya Sutskever, in his November 2025 interview with Dwarkesh Patel, declared the "age of scaling" over:

- 2012-2020 was an "age of research"
- 2020-2025 was an "age of scaling"
- 2026 onward will be another "age of research"

His argument: "Another 100x scaling of AI models would make a difference, but would not transform AI capabilities." The bottleneck is now ideas, not compute. Current models generalize "dramatically worse than people" despite benchmark performance, exhibiting "jaggedness" — inexplicable failures on basic tasks. He argues that a fundamentally new scientific principle is needed, not just more data or compute.

This is notable because Sutskever was one of the key architects of the scaling era (co-founding OpenAI, leading GPT development). His pivot suggests that even scaling proponents see diminishing returns from compute alone.

Source: Sutskever interview with Dwarkesh Patel, November 2025. [dwarkesh.com](https://www.dwarkesh.com/p/ilya-sutskever-2)

---

## 4. What Would Happen Without Large-Scale Experiments?

### 4.1 The Fogelson Analysis: Half of Innovations Survive Compute Caps

Fogelson et al.'s direct analysis of 36 pre-training innovations provides the most concrete answer. Under a GPT-2-level compute cap (~10^20 FLOP) or an 8-H100 hardware cap:

- ~50% of innovations could still have been developed
- These are predominantly scale-invariant improvements (better optimizers, normalization, attention mechanisms, positional encodings, memory optimization)
- The other ~50% required more compute, including scaling law experiments, architectural comparisons at scale, and recent innovations trending toward higher compute requirements (doubling annually)

### 4.2 The Scale-Dependent Discovery Problem

The deeper issue is not whether innovations can be *developed* at small scale but whether their *importance* can be *assessed* at small scale. Gundlach et al.'s findings reveal a discovery problem:

- An innovation might show only 1.5x improvement at small scale but 100x at frontier scale (like the Transformer over LSTMs)
- Conversely, an innovation might look promising at small scale but fail to deliver at large scale
- Without large-scale experiments, researchers cannot distinguish between these cases
- This creates a "compute bottleneck" for discovery: "limits to compute scaling pose obstacles not only to realizing efficiency gains but also to discovering them"

The authors even suggest there may exist **undiscovered algorithms that "decrease performance at small scales but would improve performance if we scaled"** — innovations that are invisible without large-scale experiments.

### 4.3 Multiple Axes of Continued Progress

Even under strict compute caps, several avenues of progress would remain:

1. **Post-training and inference innovations:** RLHF, chain-of-thought prompting, test-time compute scaling, tool use — these enhance deployed models without requiring new large training runs

2. **Data quality improvements:** Epoch AI argues that "most software progress might actually be due to data quality improvements" rather than novel algorithms. Better data curation, synthetic data generation, and deduplication can improve model quality without scaling compute.

3. **Efficiency improvements for existing architectures:** FlashAttention, quantization (FP32 to INT4), knowledge distillation, pruning — these make existing models cheaper and faster without new frontier training runs

4. **Small-scale architectural research:** Novel activation functions, normalization schemes, positional encodings, routing algorithms for MoE — these can be developed and validated at modest compute

5. **Transfer and fine-tuning:** LoRA and similar parameter-efficient fine-tuning methods enable adapting existing large models for new tasks at minimal compute cost

Source: Epoch AI. "The Least Understood Driver of AI Progress." [epoch.ai](https://epoch.ai/gradient-updates/the-least-understood-driver-of-ai-progress)

### 4.4 What Would Be Lost

Under strict compute restrictions, several categories of progress would slow or stop:

1. **Scaling law characterization:** Understanding how capability scales with resources requires training at multiple scales. Future Chinchilla-like insights would be much harder to obtain.

2. **Emergent capability discovery:** Behaviors that appear only above certain scale thresholds would remain unknown until someone violates the cap.

3. **Scale-dependent architectural validation:** The Transformer's superiority was only fully apparent at scale. Future architectural innovations with similar scale-dependent properties might be dismissed as unimpressive based on small-scale results.

4. **Frontier model pre-training:** The obvious direct impact — no new models above the threshold.

5. **Reinforcement learning at scale:** Sutskever notes that companies currently "spend more compute on RL than on pre-training," yet RL provides "a relatively small amount of learning for the compute it uses." Whether RL can be made efficient is itself a research question that may require scale to answer.

### 4.5 The RAND Projection

The RAND Corporation's 2025 report (Price, Alkire, and Ahmadi) identifies two key drivers for near-term AI advancement: (1) synthetic data generation methods and (2) alternative architectures that are more data-efficient. Their projection:

- Without these improvements: smaller models dominate
- With one advancement: small models predominate but large models retain roles
- With both: larger models deliver meaningfully more-useful capabilities

This suggests the trajectory of AI under compute restrictions depends critically on whether algorithmic progress in data efficiency and architecture continues — which, per Fogelson et al., it largely can at modest compute budgets.

Source: Price, C.C., Alkire, B., and Ahmadi, M. (2025). "Algorithmic Advancement in Artificial Intelligence." [RAND RRA3485-1](https://www.rand.org/pubs/research_reports/RRA3485-1.html)

---

## 5. "Compute as a Substitute for Ideas"

### 5.1 The Substitution View

The strong version of the Bitter Lesson implies compute substitutes for ideas: given enough compute, simple algorithms will always outperform clever but small ones. Evidence for this view:

- GPT-3 (2020) used a 2018-era architecture but outperformed all prior work through scale alone
- AlphaZero achieved superhuman chess/Go with simple self-play at scale, after decades of human-knowledge-engineered approaches failed
- Language models trained only to "predict the next token" acquired capabilities (translation, reasoning, coding) that were never explicitly trained

### 5.2 The Complementarity View

The alternative view: compute and ideas are *complements*, not substitutes. You need both, and they multiply each other's value. Evidence:

- The Transformer architecture was a necessary precondition for the scaling era. Scaling LSTMs would not have produced GPT-3 — the architecture change was worth 725x at frontier scale (Gundlach et al.)
- Chinchilla's insight (train smaller models on more data) was worth 2-4x in compute efficiency — a pure idea that made existing compute budgets dramatically more effective
- DeepSeek V3 achieved frontier performance at 11x less compute through MoE architecture + MLA + training optimizations. Ideas substituted for compute.
- FlashAttention (a Stanford PhD project) provided 2-3x speedups through better memory access patterns — a pure algorithmic insight

### 5.3 The Jevons Paradox

Epoch AI argues that algorithmic progress *increases* rather than *decreases* total compute spending:

- Between 1945 and 2006, compute costs dropped one-trillion-fold, yet computing's share of GDP rose to ~1%
- Despite algorithmic efficiency improving at ~3x/year, investment in AI compute has risen by 3+ orders of magnitude
- More efficient algorithms make compute more valuable, increasing demand rather than reducing it

This means algorithmic progress under compute restrictions would not substitute for large-scale experiments but would instead intensify pressure to lift restrictions — making the governance challenge harder over time.

Source: Epoch AI. "Algorithmic Progress Likely Spurs More Spending on Compute, Not Less." [epoch.ai](https://epoch.ai/gradient-updates/algorithmic-progress-likely-spurs-more-spending-on-compute-not-less)

---

## 6. Historical Analogies

### 6.1 Nuclear Test Ban Treaties (1963 / 1996)

**The restriction:** The Partial Test Ban Treaty (1963) banned atmospheric nuclear tests; the Comprehensive Nuclear-Test-Ban Treaty (1996) banned all nuclear explosive testing.

**Effect on progress:** Nuclear weapons states adapted by developing:
- Computational simulation capabilities (the US Stockpile Stewardship Program)
- Sub-critical experiments and laboratory facilities (National Ignition Facility, Laser Megajoule)
- Extrapolation from the ~1,000 tests already conducted

**Result:** The moratorium did not halt nuclear weapons understanding — states that had already tested extensively could maintain and refine their arsenals using simulation. But it **effectively prevented new entrants** from developing advanced weapons, since they lacked the empirical base needed for simulation validation. The test ban slowed proliferation more than it slowed existing programs.

**AI analogy:** A compute cap might similarly slow *new* entrants (who lack the institutional knowledge from prior large-scale experiments) more than incumbents (who can extrapolate from existing frontier models). Labs that have already trained GPT-4-scale models have empirical knowledge that is hard to replicate at small scale.

Source: [National Academies — Technical Issues Related to the CTBT](https://www.nationalacademies.org/projects/PGA-CISAC-09-01/publication/10471); [Nature — Nuclear weapons testing is harmful](https://www.nature.com/articles/d41586-026-00561-5)

### 6.2 The Superconducting Super Collider (1993)

**The restriction:** Congress cancelled the SSC after $2 billion spent and 22.5 km of tunnel bored, primarily due to cost overruns ($4.4B original estimate ballooned toward $10-15B).

**Effect on progress:** The cancellation ended American leadership in high-energy physics and delayed the Higgs boson discovery by approximately a decade. CERN's LHC (smaller, cheaper) eventually found the Higgs in 2012, but since then "the LHC has found no clues of any new physics" — raising questions about whether even larger experiments would be productive.

**AI analogy:** Restricting large-scale AI experiments would shift leadership to whoever can still conduct them (jurisdictional leakage). But unlike particle physics, AI progress has multiple avenues beyond just scaling up — the field would not be reduced to a single experimental paradigm.

Source: [Scientific American — The Supercollider That Never Was](https://www.scientificamerican.com/article/the-supercollider-that-never-was/); [APS — Congress Cancels Funding for the SSC](https://www.aps.org/publications/apsnews/201310/physicshistory.cfm)

### 6.3 Asilomar and the Recombinant DNA Moratorium (1974-1975)

**The restriction:** Leading molecular biologists voluntarily halted recombinant DNA experiments in 1974 due to safety concerns, then negotiated guidelines at the 1975 Asilomar Conference that allowed research to resume under strict containment.

**Effect on progress:** The moratorium lasted approximately one year. Far from halting progress, the guidelines *enabled* the field to advance by providing a governance framework that maintained public trust. By 1995, rDNA experiments "dominated all other areas of biological research," with millions of experiments conducted and no documented hazards to public safety. The moratorium-plus-guidelines approach is widely considered a success story for scientific self-governance.

**AI analogy:** A well-structured pause that establishes governance frameworks and safety requirements could enable rather than prevent long-term progress — if it builds the institutional infrastructure needed for safe development. The key difference: rDNA risks turned out to be lower than feared, whereas AI x-risk may be as high as or higher than feared.

Source: [NobelPrize.org — Asilomar and recombinant DNA](https://www.nobelprize.org/prizes/chemistry/1980/berg/article/); [NCBI — Asilomar and Recombinant DNA: The End of the Beginning](https://www.ncbi.nlm.nih.gov/books/NBK234217/)

### 6.4 Pharmaceutical Development Restrictions

**The restriction:** The FDA has historically required extensive animal testing before human trials. The 2022 FDA Modernization Act 2.0 removed the mandatory animal testing requirement, allowing alternative methods.

**Effect on progress:** Animal testing requirements have been criticized as both expensive and ineffective — approximately 90% of drugs that pass animal testing fail in human trials. The restriction forced development of New Approach Methodologies (computational models, organoid testing, organ-on-chip systems). Paradoxically, the restriction may have slowed progress by mandating a low-information step while also spurring innovation in alternative methods.

**AI analogy:** Compute restrictions might similarly force development of more efficient methods (analogous to computational drug modeling replacing animal tests). But unlike pharma, where animal testing was arguably low-value, large-scale AI training runs are currently high-value for both capability assessment and algorithmic discovery.

Source: [FDA — Phase Out Animal Testing Requirement](https://www.fda.gov/news-events/press-announcements/fda-announces-plan-phase-out-animal-testing-requirement-monoclonal-antibodies-and-other-drugs)

---

## 7. Summary: What the Evidence Says

### The Optimistic Case (for governance)

1. **Most innovations are small-scale.** ~50% of cataloged pre-training innovations could have been developed at GPT-2 compute levels or below (Fogelson et al., 2025).

2. **Scale-invariant improvements continue.** Better optimizers, normalization, attention mechanisms, positional encodings, and systems optimizations can all be developed at modest compute. These provide ~3.5x combined efficiency gains.

3. **Data quality may matter more than algorithms.** If Epoch AI is right that "most software progress might actually be due to data quality improvements," then much of future progress could continue without large training runs.

4. **The scaling era may be ending.** Sutskever argues we are entering an "age of research" where new ideas, not more compute, are the bottleneck. If true, restricting compute would be less damaging than commonly assumed.

5. **Historical analogies are encouraging.** Nuclear test bans, the Asilomar moratorium, and pharmaceutical development restrictions all show that restricting large-scale experiments redirects rather than halts scientific progress.

### The Pessimistic Case (for governance)

1. **The innovations that matter most are scale-dependent.** 91% of measured algorithmic progress comes from just two scale-dependent innovations (Gundlach et al., 2025). Future breakthroughs of similar impact may require large-scale experiments to discover or validate.

2. **Small-scale research cannot assess large-scale impact.** The Transformer showed only 6x gains at small scale but 725x at frontier scale. Researchers testing innovations at typical academic budgets cannot identify which improvements will be transformative at scale.

3. **Compute restrictions create pressure to circumvent.** The Jevons Paradox means algorithmic progress makes compute more valuable, increasing incentives to evade restrictions. DeepSeek demonstrated that hardware export controls do not prevent algorithmic catch-up.

4. **The 50% that requires large compute includes the most important innovations.** Scaling law characterization, emergent capability discovery, and architectural validation at scale are all in the restricted half — and these are disproportionately important for frontier capabilities.

5. **Undiscovered innovations may exist only at scale.** Gundlach et al. raise the possibility of algorithms that "decrease performance at small scales but would improve performance if we scaled" — innovations that are invisible without large-scale experiments.

6. **Post-training and inference improvements may bypass restrictions.** Even without new pre-training runs, improvements in reasoning training, tool use, scaffolding, and test-time compute can rapidly increase the capabilities of existing models — a pathway that compute restrictions on training do not address.

### The Bottom Line

A compute cap on training runs would **slow but not stop** algorithmic progress. Roughly half of pre-training innovations and most post-training innovations would continue. However, the most *consequential* innovations — those that change the scaling exponent rather than adding a constant factor — are precisely those that require large-scale experiments to discover and validate. A pause that restricts large training runs buys time, but the bought time diminishes as small-scale innovations compound and as post-training methods improve existing models. The enforcement challenge is not just preventing new training runs but managing the improving capabilities of already-trained models and the steady march of algorithmic efficiency that makes any fixed compute threshold less meaningful over time.

---

## Sources

### Primary Research Papers

- Ho, A. et al. (2024). "Algorithmic Progress in Language Models." [arXiv:2403.05812](https://arxiv.org/abs/2403.05812)
- Gundlach, H. et al. (2025). "On the Origin of Algorithmic Progress in AI." [arXiv:2511.21622](https://arxiv.org/abs/2511.21622)
- Fogelson, B. et al. (2025). "Compute Requirements for Algorithmic Innovation in Frontier AI Models." [arXiv:2507.10618](https://arxiv.org/abs/2507.10618)
- Hoffmann, J. et al. (2022). "Training Compute-Optimal Large Language Models." [arXiv:2203.15556](https://arxiv.org/abs/2203.15556)
- Kaplan, J. et al. (2020). "Scaling Laws for Neural Language Models." [arXiv:2001.08361](https://arxiv.org/abs/2001.08361)
- Vaswani, A. et al. (2017). "Attention Is All You Need." [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)
- Hernandez, D. and Brown, T.B. (2020). "Measuring the Algorithmic Efficiency of Neural Networks." [arXiv:2005.04305](https://arxiv.org/abs/2005.04305)
- Dao, T. et al. (2022). "FlashAttention." [arXiv:2205.14135](https://arxiv.org/abs/2205.14135)
- Wei, J. et al. (2022). "Emergent Abilities of Large Language Models." [arXiv:2206.07682](https://arxiv.org/abs/2206.07682)
- Christiano, P. et al. (2017). "Deep Reinforcement Learning from Human Preferences." [arXiv:1706.03741](https://arxiv.org/abs/1706.03741)
- Erdil, E. and Besiroglu, T. (2022). "Algorithmic Progress in ML." Referenced in Epoch AI analyses.
- Price, C.C. et al. (2025). "Algorithmic Advancement in Artificial Intelligence." [RAND RRA3485-1](https://www.rand.org/pubs/research_reports/RRA3485-1.html)

### Blog Posts, Essays, and Analysis

- Sutton, R. (2019). "The Bitter Lesson." [incompleteideas.net](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
- Gwern (2020). "The Scaling Hypothesis." [gwern.net](https://gwern.net/scaling-hypothesis)
- Epoch AI. "Algorithmic Progress in Language Models." [epoch.ai](https://epoch.ai/blog/algorithmic-progress-in-language-models)
- Epoch AI. "The Least Understood Driver of AI Progress." [epoch.ai](https://epoch.ai/gradient-updates/the-least-understood-driver-of-ai-progress)
- Epoch AI. "Algorithmic Progress Likely Spurs More Spending on Compute, Not Less." [epoch.ai](https://epoch.ai/gradient-updates/algorithmic-progress-likely-spurs-more-spending-on-compute-not-less)
- Epoch AI. "How Fast Can Algorithms Advance Capabilities?" [epoch.ai](https://epoch.ai/gradient-updates/how-fast-can-algorithms-advance-capabilities)
- Epoch AI. "Revisiting Algorithmic Progress." [epoch.ai](https://epoch.ai/blog/revisiting-algorithmic-progress)
- "The Bitter Lesson is Misunderstood." [obviouslywrong.org](https://www.obviouslywrong.org/p/the-bitter-lesson-is-misunderstood)

### Interviews and Reports

- Sutskever, I. interview with Dwarkesh Patel, November 2025. [dwarkesh.com](https://www.dwarkesh.com/p/ilya-sutskever-2)
- UK AI Security Institute. "Frontier AI Trends Report." [aisi.gov.uk](https://www.aisi.gov.uk/frontier-ai-trends-report)
- Stanford HAI. "AI Index Report 2025." [hai.stanford.edu](https://hai.stanford.edu/ai-index/2025-ai-index-report)

### Historical Analogies

- National Academies. "Technical Issues Related to the CTBT." [nationalacademies.org](https://www.nationalacademies.org/projects/PGA-CISAC-09-01/publication/10471)
- Nobel Prize. "Asilomar and Recombinant DNA." [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/1980/berg/article/)
- Scientific American. "The Supercollider That Never Was." [scientificamerican.com](https://www.scientificamerican.com/article/the-supercollider-that-never-was/)
- NCBI. "Asilomar and Recombinant DNA: The End of the Beginning." [ncbi.nlm.nih.gov](https://www.ncbi.nlm.nih.gov/books/NBK234217/)
- FDA. "Phase Out Animal Testing Requirement." [fda.gov](https://www.fda.gov/news-events/press-announcements/fda-announces-plan-phase-out-animal-testing-requirement-monoclonal-antibodies-and-other-drugs)

### DeepSeek

- CSIS. "DeepSeek's Latest Breakthrough Is Redefining AI Race." [csis.org](https://www.csis.org/analysis/deepseeks-latest-breakthrough-redefining-ai-race)
- Tom's Hardware. "DeepSeek's optimizations could highlight limits of US sanctions." [tomshardware.com](https://www.tomshardware.com/tech-industry/artificial-intelligence/chinese-ai-company-says-breakthroughs-enabled-creating-a-leading-edge-ai-model-with-11x-less-compute-deepseeks-optimizations-highlight-limits-of-us-sanctions)
