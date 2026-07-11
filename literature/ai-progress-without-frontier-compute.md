---
title: "AI Progress Without Frontier Compute: What Algorithmic Advancement Looks Like Under Training Restrictions"
author: "Research synthesis (multiple sources)"
year: 2025-2026
source_url: "https://hai.stanford.edu/ai-index/2025-ai-index-report"
source_format: web-synthesis
downloaded: 2026-03-26
encrypted: false
notes: "Synthesized research on what AI progress would look like if large-scale training runs were restricted or unavailable. Covers academia vs. industry contributions, open-source progress, knowledge distillation limits, small-scale discoveries that transferred to large scale, inference-time compute, and the DeepSeek phenomenon. Compiled for game design reference — understanding the 'algorithmic progress' resource bar and enforcement dynamics."
---

# AI Progress Without Frontier Compute

This document asks: if a global pause on frontier AI training were enacted, how much AI progress could still occur? The answer matters for game design (the `alg` resource bar) and for understanding the enforcement challenge: a pause on training runs does not pause all forms of AI advancement.

---

## 1. Academic vs. Industry Contributions to AI Progress

### The Headline Numbers

The Stanford HAI AI Index 2025 reports a stark and widening divide:

- **Nearly 90% of notable AI models in 2024 came from industry**, up from 60% in 2023. In 2014, the split was roughly 60% academia / 40% industry.
- **But academia remains the top source of highly cited research** (top-100 papers) over the past three years.

This creates a paradox: industry builds the models, but academia generates much of the foundational knowledge those models depend on.

Source: [Stanford HAI AI Index 2025 — Research & Development](https://hai.stanford.edu/ai-index/2025-ai-index-report/research-and-development)

### What This Means for a Pause Scenario

Under a training compute ban, the 90% of model development that happens in industry would be directly restricted. But the academic research pipeline — which produces the algorithmic ideas, architectural innovations, and theoretical insights — would continue largely unimpeded. Academia doesn't need 10,000 H100s to publish papers on attention mechanisms, scaling laws, or optimization techniques.

The historical record supports this. Most foundational techniques in modern deep learning were discovered in academic or small-lab settings:

| Technique | Origin | Year | Initial Compute |
|-----------|--------|------|-----------------|
| Dropout | University of Toronto (Hinton lab) | 2014 | Small CNNs |
| Batch normalization | Google (2 researchers) | 2015 | Inception network |
| Residual connections (ResNet) | Microsoft Research | 2015 | ImageNet-scale CNNs |
| Adam optimizer | University of Toronto | 2015 | Standard benchmarks |
| GANs | University of Montreal (Goodfellow) | 2014 | Small image datasets |
| Word2Vec | Google (2 researchers) | 2013 | Text corpus, single machine |
| Attention mechanism (Bahdanau) | University of Montreal | 2014 | Machine translation |
| Transformer | Google Brain (8 researchers) | 2017 | WMT translation (~1e19 FLOP) |
| LoRA | Microsoft Research | 2021 | Fine-tuning experiments |
| FlashAttention | Stanford (Dao et al.) | 2022 | Standard GPU benchmarks |
| RoPE (Rotary Position Embedding) | Independent researcher (Su et al.) | 2021 | Small-scale experiments |

Many of these were developed with compute budgets orders of magnitude below frontier training runs. The Transformer itself, the most impactful single innovation in modern AI, was trained on a single machine translation task at ~1e19 FLOP — roughly 1 million times less compute than GPT-4.

Sources:
- [Srivastava et al. (2014) — Dropout](https://jmlr.org/papers/v15/srivastava14a.html)
- [Ioffe & Szegedy (2015) — Batch Normalization](https://arxiv.org/abs/1502.03167)
- [He et al. (2015) — ResNet](https://arxiv.org/abs/1512.03385)
- [Kingma & Ba (2015) — Adam](https://arxiv.org/abs/1412.6980)
- [Vaswani et al. (2017) — Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Hu et al. (2021) — LoRA](https://arxiv.org/abs/2106.09685)
- [Dao et al. (2022) — FlashAttention](https://arxiv.org/abs/2205.14135)

---

## 2. The Scale-Dependence Problem: Small Discoveries vs. Large Impact

### The Gundlach et al. (2025) Finding

The most important recent work on this question is Gundlach et al. (2025), "On the Origin of Algorithmic Progress in AI." Their key finding fundamentally complicates the story told above:

**Two innovations account for 91% of measured algorithmic progress in language models:**
1. **LSTM-to-Transformer transition** — 68% of frontier-scale efficiency gains
2. **Kaplan-to-Chinchilla scaling rebalancing** — most of the remaining gains

**All post-2017 scale-invariant innovations combined** (SwiGLU, RoPE, pre-RMSNorm, FlashAttention, learning rate improvements, etc.) provide only **~3.5x compute-equivalent gains** when measured at frontier scale.

Crucially, the Transformer's advantage is **strongly scale-dependent**:
- At 10^15 FLOP (small-scale experiments): only **6.28x** advantage over LSTMs
- At 10^23 FLOP (frontier scale): **100x+** advantage over LSTMs

This means: **the Transformer was discoverable at small scale, but its true value was only apparent at large scale.** A researcher with limited compute in 2016 could have (and did) notice that attention-based architectures were promising. But they could not have predicted the 100x advantage that would emerge at frontier scale.

**Implication for a pause:** Many algorithmic innovations can be discovered at small scale. But whether those innovations would be *transformative* may only become apparent when someone eventually trains at scale — which is exactly what a pause aims to prevent.

Source: [Gundlach et al. (2025) — On the Origin of Algorithmic Progress in AI](https://arxiv.org/abs/2511.21622)

### Scale-Invariant vs. Scale-Dependent Innovations

| Category | Examples | Magnitude | Discoverable at Small Scale? |
|----------|----------|-----------|------------------------------|
| **Scale-dependent** | Transformer architecture, Chinchilla scaling | 100x+ at frontier | Architecture discoverable, but full impact not |
| **Scale-invariant** | FlashAttention, RoPE, SwiGLU, pre-RMSNorm | ~1.2-1.9x each, ~3.5x combined | Yes |
| **Training methodology** | Chinchilla-optimal data ratios | 2-4x | Partially (requires large ablations) |
| **Post-training** | RLHF, RLVR, chain-of-thought | Significant but hard to quantify | Partially |

The scale-invariant improvements (the ones most accessible to compute-constrained researchers) contribute real but modest gains. The transformative breakthroughs have historically been scale-dependent.

---

## 3. Open-Source AI Progress and the Distillation Ratchet

### The Current Open-Source Ecosystem

Open-weight models (Llama, Mistral, Qwen, DeepSeek) now routinely match frontier closed models with a **6-12 month lag**:

| Benchmark | Open-weight lag behind frontier | Source |
|-----------|-------------------------------|--------|
| GPQA-Diamond | 7.4 months | Epoch AI |
| MMLU-Pro | 7.3 months | Epoch AI |
| LM Arena Elo | 12.4 months | Epoch AI |
| AI Analysis Intelligence Index | 6.3 months | Epoch AI |

Consumer-accessible models improve at **+125 Elo/year** vs. frontier models at **+80 Elo/year**, meaning the gap is actively shrinking.

Source: [Epoch AI — Consumer GPU Model Gap](https://epoch.ai/data-insights/consumer-gpu-model-gap)

### The Distillation Ratchet

Knowledge distillation allows smaller models to be trained to approximate the performance of larger models, using the larger model's outputs as training signal. This creates a one-way ratchet: once a capable model exists, its capabilities can be compressed into smaller, cheaper models.

**Key results:**

| Student Model | Size | Performance vs. Teacher | Technique |
|--------------|------|------------------------|-----------|
| DistilBERT | 66M (40% smaller than BERT) | 97% of BERT performance | Task-agnostic distillation |
| TinyBERT | 4 layers | 96.8% of BERT-base on GLUE | Two-phase distillation |
| Phi-3 Mini | 3.8B parameters | Matches Mixtral 8x7B, GPT-3.5 | Data curation + distillation |
| DeepSeek-R1-Distill-Qwen-7B | 7B | 55.5% on AIME 2024 (vs. o1-mini's 37.3%) | Reasoning distillation |
| TinyR1-32B-Preview | 32B | Near-equal to DeepSeek-R1 on AIME 2024 | Distillation |

The Stanford HAI AI Index 2025 highlights a dramatic compression trend: in 2022, the smallest model scoring >60% on MMLU was PaLM at 540B parameters. By 2024, Phi-3-mini achieved the same at 3.8B parameters — a **142-fold parameter reduction** in 2 years.

Sources:
- [Sanh et al. (2019) — DistilBERT](https://arxiv.org/abs/1910.01108)
- [Stanford HAI AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report)
- [Microsoft (2024) — Phi-3 Technical Report](https://arxiv.org/abs/2404.14219)

### Limits of Distillation

Distillation is not unlimited compression. Key constraints:

1. **Capacity gap:** Student models with fewer parameters fundamentally cannot represent everything the teacher knows. Performance degrades as the size gap widens, especially for complex reasoning tasks.

2. **Architectural mismatch:** Distilling across different architectures (e.g., Transformer teacher to a non-Transformer student) incurs additional losses.

3. **Distribution mismatch:** Supervised distillation uses a static dataset; the student may perform poorly on inputs outside that distribution.

4. **Emergent abilities may not transfer:** Some capabilities appear to require minimum model scale. Whether distillation can transfer these is an open question.

5. **You need a teacher:** Distillation fundamentally depends on having a capable teacher model. Under a pause, no new frontier teachers would be trained. Distillation could squeeze more out of pre-pause models, but could not exceed them.

Source: [Comprehensive Survey on Knowledge Distillation (2025)](https://arxiv.org/abs/2503.12067)

### Could Open Source Progress Continue Without Frontier Models?

This is the critical question. The current open-source ecosystem heavily depends on frontier models in two ways:

1. **Direct distillation:** Many open models are explicitly distilled from larger proprietary models (GPT-4, Claude, etc.) using synthetic data or API outputs.

2. **Architectural knowledge transfer:** Open labs learn what works by observing frontier labs' published architectures, scaling laws, and training recipes.

Under a pause:
- **Distillation from existing models would continue.** Pre-pause models could be further compressed, fine-tuned, and optimized. This is a meaningful source of continued progress.
- **New architectural innovations would still be discovered.** Academic researchers can explore novel architectures at small scale.
- **But the "test at scale" feedback loop would break.** Researchers currently validate ideas at small scale, then frontier labs test at large scale, confirming or disconfirming their value. Without frontier-scale experiments, progress would be slower and more uncertain.
- **Independent development is possible but slower.** DeepSeek demonstrated that a lab outside the Western frontier ecosystem could independently achieve frontier-quality results. But DeepSeek still used thousands of GPUs — their innovation was algorithmic efficiency, not operating without compute.

Sources:
- [Red Hat — State of Open Source AI Models in 2025](https://developers.redhat.com/articles/2026/01/07/state-open-source-ai-models-2025)
- [Knowledge Distillation Using Frontier Open-Source LLMs (2024)](https://arxiv.org/abs/2410.18588)

---

## 4. Inference-Time Compute: Progress Without Training

### The Paradigm Shift

The most significant recent development for "progress without frontier training" is the rise of inference-time compute scaling. Instead of training larger models, researchers achieve better results by spending more compute *at inference time* — letting models "think longer."

Key results:

- **A 7B model with 100x inference compute can match a 70B model with standard inference** (Snell et al., 2024).
- **Llama-3.2 1B with test-time scaling outperforms Llama-3.2 8B**; Llama-3.2 3B with test-time scaling outperforms Llama-3.2 70B (Hugging Face, 2024).
- **OpenAI's 2024 inference spend reached $2.3 billion** — 15x the training cost for GPT-4.5.
- Analysts project inference will claim **75% of total AI compute by 2030**.

Source: [Snell et al. (2024) — Scaling LLM Test-Time Compute](https://arxiv.org/abs/2408.03314)

### Techniques

| Technique | Description | Training Required? |
|-----------|-------------|-------------------|
| Chain-of-thought prompting | Model generates intermediate reasoning steps | No (prompt engineering) |
| Best-of-N sampling | Generate N answers, pick best via reward model | Reward model training |
| Tree search (MCTS) | Systematic exploration of reasoning paths | Process reward model training |
| Self-correction | Model critiques and revises its own output | Minimal or no training |
| Extended thinking / "deep reasoning" | Model generates very long reasoning chains (10-100x tokens) | RL training (e.g., RLVR) |

Sources:
- [Survey of Test-Time Compute (2025)](https://arxiv.org/abs/2501.02497)
- [Microsoft Research — Inference-Time Scaling for Complex Tasks](https://www.microsoft.com/en-us/research/wp-content/uploads/2025/03/Inference-Time-Scaling-for-Complex-Tasks-Where-We-Stand-and-What-Lies-Ahead-2.pdf)
- [Forest-of-Thought: Scaling Test-Time Compute (2024)](https://arxiv.org/abs/2412.09078)

### Does Inference Scaling Require Large Training Runs?

Partially. The picture is nuanced:

**Does NOT require large training runs:**
- Chain-of-thought prompting works on any model capable of generating coherent text.
- Best-of-N sampling only needs an existing model plus a reward signal.
- Self-correction requires no additional training.

**Does require some training (but not frontier-scale):**
- Process reward models (PRMs) need training data, but can be trained at moderate scale.
- RLVR (Reinforcement Learning with Verifiable Rewards) needs RL training, but has been demonstrated primarily on small-to-medium models (up to 32B parameters) due to computational costs.
- Extended thinking models (o1, R1) require RL-based post-training, but DeepSeek-R1 showed this can be done relatively cheaply ($294K for the RL phase).

**Important caveat from Toby Ord (2025):** Inference-at-deployment scaling may be less impactful than it appears. If the next two orders of magnitude of compute go into inference rather than training, the resulting model "can only be immediately deployed in 1% as many tasks" and costs up to 100x more per query. Inference scaling trades breadth for depth.

Source: [Ord (2025) — Inference Scaling Reshapes AI Governance](https://arxiv.org/abs/2503.05705)

### RLVR: A Low-Compute Path to Reasoning?

Reinforcement Learning with Verifiable Rewards (RLVR) is particularly relevant for a pause scenario because:

1. It requires only problems with checkable answers (math, code, constrained formats) — no human labelers.
2. It has been applied primarily to small models (7B-32B) due to compute costs.
3. DeepSeek-R1 showed it can produce frontier-class reasoning at low cost ($294K for RL phase).

However, there is active debate about whether RLVR truly creates new reasoning capabilities or merely makes existing latent capabilities more accessible. Recent research suggests "the reasoning paths generated by RLVR models are already included in the base models' sampling distribution" — meaning RLVR may be bounded by the base model's pre-trained knowledge.

Sources:
- [RLVR Implicitly Incentivizes Correct Reasoning (2025)](https://arxiv.org/abs/2506.14245)
- [Promptfoo — RLVR Explained](https://www.promptfoo.dev/blog/rlvr-explained/)

---

## 5. The DeepSeek Phenomenon

### What Happened

DeepSeek V3 was trained on 2,048 H800 GPUs for ~2 months at a disclosed cost of $5.58 million, achieving performance competitive with models that cost 10-20x more to train. DeepSeek R1, built atop V3 with RLVR, matched or exceeded OpenAI's o1 on reasoning benchmarks at a fraction of the cost.

| Metric | DeepSeek | Comparison |
|--------|----------|------------|
| V3 training cost (disclosed) | $5.58M | GPT-4: ~$100M; Gemini Ultra: ~$191M |
| V3 GPU hours | 2.664M H800 hours | Llama 3.1 405B: ~30.84M H100 hours |
| R1 RL phase cost | $294K | — |
| R1 MMLU accuracy | 90.8% | GPT-4: 87.2% |
| R1 AIME 2024 math | 79.8% | GPT-4: 9.3% |

### Key Innovations

1. **Multi-Head Latent Attention (MLA):** Compresses the KV cache via low-rank decomposition, dramatically reducing memory requirements during inference while matching or exceeding standard multi-head attention performance.

2. **DeepSeekMoE with auxiliary-loss-free load balancing:** 671B total parameters with only 37B active per token. The auxiliary-loss-free approach adjusts expert routing via bias terms rather than loss penalties, avoiding the performance degradation that traditional load-balancing losses cause.

3. **Multi-token prediction (MTP):** Predicts multiple future tokens simultaneously, providing denser training signals and improving data efficiency.

4. **FP8 mixed-precision training:** Reduces memory and compute requirements with minimal accuracy impact.

5. **Proprietary gradient synchronization:** Reduces inter-GPU communication overhead from ~30% to <8%, achieving near-full computation-communication overlap.

Source: [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437)

### Important Caveats

The $5.58M figure is misleading in several ways:

1. **It excludes R&D costs.** SemiAnalysis estimated DeepSeek's total hardware expenditure at "well higher than $500 million." The disclosed cost covers only the final successful training run, not the hundreds of failed experiments, ablations, and architectural explorations that preceded it.

2. **It required frontier-class hardware.** 2,048 H800 GPUs is still a substantial cluster — far beyond what academia, hobbyists, or most companies have access to.

3. **It built on public research.** DeepSeek's innovations drew on published Transformer research, scaling laws, MoE literature, and other work from the global AI research community. It was not built in isolation.

4. **Toby Ord's perspective:** "The cost to train GPT-4 was about $50-100 million in Aug 2022. The cost of the final stage of training DeepSeek was $6 million in late 2024. So DeepSeek is about 10x cheaper. But current trends were already for 10x progress in algorithmic efficiency every two years anyway."

### What DeepSeek Tells Us About a Pause

DeepSeek demonstrates that **algorithmic cleverness can substitute for brute-force compute to a significant degree**, but not entirely. The innovations that made DeepSeek efficient (MoE, MLA, better load balancing) are precisely the kind of scale-invariant improvements that Gundlach et al. showed contribute ~3.5x gains. DeepSeek's 10x cost advantage is real but largely in line with the expected rate of algorithmic efficiency improvement (~3x/year per Epoch AI).

For enforcement, DeepSeek shows that:
1. The compute threshold for "dangerous capability" keeps falling as algorithms improve.
2. A lab with 2,000 high-end GPUs (not 20,000) can reach the frontier with the right algorithms.
3. Algorithmic progress doesn't stop when you restrict compute — it may accelerate, as constrained labs have stronger incentives to innovate.

Sources:
- [CSIS — DeepSeek: A Deep Dive](https://www.csis.org/analysis/deepseek-deep-dive)
- [Toby Ord on DeepSeek](https://x.com/tobyordoxford/status/1884640136647852195)
- [Epoch AI — What Went Into Training DeepSeek-R1](https://epoch.ai/gradient-updates/what-went-into-training-deepseek-r1)

---

## 6. The RAND Projection: Small Models May Dominate Anyway

The RAND Corporation's 2025 report "Algorithmic Advancement in Artificial Intelligence" identifies two key drivers for near-term advancement:

1. **Synthetic data generation methods** that enable broader improvements
2. **Alternative architectures** that are more data-efficient

Their projection: "Without these types of improvements, smaller models are likely to dominate the market. With one advancement, small models will likely be the predominant AI models used, but there will be roles for large models. If there is advancement along both drivers, larger models may deliver meaningful and more-useful capabilities."

This suggests that even without a formal pause, the AI market may naturally shift toward smaller, more efficient models — and a pause would accelerate this trend rather than fight it.

Source: [RAND — Algorithmic Advancement in AI (2025)](https://www.rand.org/pubs/research_reports/RRA3485-1.html)

---

## 7. Synthesis: What AI Progress Looks Like Under a Pause

### What Would Continue

1. **Academic algorithmic research.** New architectures, optimization techniques, training methodologies. Most foundational innovations have come from researchers with limited compute. Rate: probably 70-90% of current academic output continues.

2. **Distillation and compression of pre-pause models.** Every existing frontier model becomes a teacher. Smaller, faster, cheaper versions would proliferate. But this is bounded by the teacher's capabilities — you can't distill knowledge the teacher doesn't have.

3. **Inference-time compute research.** Chain-of-thought, tree search, self-correction, RLVR. Much of this can be explored with small models. A 3B model with sophisticated inference can match a 70B model with naive inference.

4. **Fine-tuning and specialization.** LoRA, QLoRA, and domain-specific fine-tuning require minimal compute. Specialized models for medicine, law, code, etc. would continue improving.

5. **Small-model training.** Models under ~10B parameters can be trained on modest hardware. Research at this scale would continue, though the gap to frontier would widen without large-scale validation.

### What Would Slow or Stop

1. **Frontier model training.** By definition, a pause halts training runs above a compute threshold. The 90% of notable models that come from industry would be directly affected.

2. **Discovery of scale-dependent innovations.** The Transformer's true value was only visible at scale. Future Transformer-equivalent breakthroughs may be discoverable at small scale but would remain unvalidated — and therefore uncertain.

3. **The "test at scale" feedback loop.** Currently, academic ideas are validated by frontier labs running large experiments. This loop would break, making algorithmic research slower and less directed.

4. **New foundation models.** No new GPT-5, Claude 4, Gemini 2, etc. The world would be frozen at the capability level of pre-pause models (plus whatever distillation and inference-time improvements add).

### The Net Effect

Based on the evidence reviewed:

- **Algorithmic efficiency improves at ~3x/year** (Epoch AI), but **91% of historical progress came from just two scale-dependent innovations** (Gundlach et al.). Under a pause, the rate of scale-invariant improvement — the only kind that could be fully validated — would yield perhaps **1.3-1.5x per year** rather than 3x.

- **Inference-time compute could add 10-100x effective capability** to existing models, without new training. This is the largest single avenue for post-pause progress.

- **Distillation would bring frontier capabilities to consumer hardware within 2-4 years**, even without new frontier models. A 3.8B model already matches 540B performance from 2 years ago.

- **The "algorithmic progress" bar in the game should still rise during a pause, but more slowly.** The player's challenge is that even under a successful pause, the compute threshold for dangerous capability keeps falling — just at ~1.3x/year instead of ~3x/year.

---

## Key Numbers for Game Design

| Fact | Value | Source |
|------|-------|--------|
| Industry share of notable AI models (2024) | ~90% | Stanford HAI 2025 |
| Academic share of top-cited AI research | Majority | Stanford HAI 2025 |
| Algorithmic efficiency doubling time | ~8 months (full), ~18-24 months (scale-invariant only) | Epoch AI; Gundlach et al. |
| Scale-invariant innovations combined | ~3.5x total (2017-2025) | Gundlach et al. |
| Knowledge distillation retention | 96-97% at 40-60% size reduction | DistilBERT, TinyBERT |
| Parameter compression (MMLU >60%) | 142x in 2 years (540B to 3.8B) | Stanford HAI 2025 |
| Small model matching large via inference scaling | 1B matches 8B; 3B matches 70B | Hugging Face (2024) |
| Open-weight lag behind frontier | 6-12 months | Epoch AI |
| DeepSeek training cost vs. GPT-4 | ~10x cheaper | Toby Ord analysis |
| RLVR training cost (DeepSeek R1 RL phase) | $294K | DeepSeek technical report |

---

## Sources

- [Stanford HAI — AI Index Report 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report)
- [Stanford HAI — Research and Development Chapter](https://hai.stanford.edu/ai-index/2025-ai-index-report/research-and-development)
- [Epoch AI — Algorithmic Progress in Language Models (Ho et al., 2024)](https://arxiv.org/abs/2403.05812)
- [Epoch AI — Trends Dashboard](https://epoch.ai/trends)
- [Epoch AI — Consumer GPU Model Gap](https://epoch.ai/data-insights/consumer-gpu-model-gap)
- [Epoch AI — The Least Understood Driver of AI Progress](https://epoch.ai/gradient-updates/the-least-understood-driver-of-ai-progress)
- [Epoch AI — How Fast Can Algorithms Advance Capabilities?](https://epoch.ai/gradient-updates/how-fast-can-algorithms-advance-capabilities)
- [Gundlach et al. (2025) — On the Origin of Algorithmic Progress in AI](https://arxiv.org/abs/2511.21622)
- [Ord (2025) — Inference Scaling Reshapes AI Governance](https://arxiv.org/abs/2503.05705)
- [Snell et al. (2024) — Scaling LLM Test-Time Compute](https://arxiv.org/abs/2408.03314)
- [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437)
- [Microsoft (2024) — Phi-3 Technical Report](https://arxiv.org/abs/2404.14219)
- [Sanh et al. (2019) — DistilBERT](https://arxiv.org/abs/1910.01108)
- [Comprehensive Survey on Knowledge Distillation (2025)](https://arxiv.org/abs/2503.12067)
- [RAND — Algorithmic Advancement in AI (2025)](https://www.rand.org/pubs/research_reports/RRA3485-1.html)
- [CSIS — DeepSeek: A Deep Dive](https://www.csis.org/analysis/deepseek-deep-dive)
- [Survey of Test-Time Compute (2025)](https://arxiv.org/abs/2501.02497)
- [RLVR Implicitly Incentivizes Correct Reasoning (2025)](https://arxiv.org/abs/2506.14245)
- [Vaswani et al. (2017) — Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Hu et al. (2021) — LoRA](https://arxiv.org/abs/2106.09685)
- [Dao et al. (2022) — FlashAttention](https://arxiv.org/abs/2205.14135)
- [Hoffmann et al. (2022) — Chinchilla Scaling Laws](https://arxiv.org/abs/2203.15556)
- [Knowledge Distillation Using Frontier Open-Source LLMs (2024)](https://arxiv.org/abs/2410.18588)
- [Hugging Face — Test-Time Compute for Small Models](https://venturebeat.com/ai/hugging-face-shows-how-test-time-scaling-helps-small-language-models-punch-above-their-weight)
- [Red Hat — State of Open Source AI Models in 2025](https://developers.redhat.com/articles/2026/01/07/state-open-source-ai-models-2025)
