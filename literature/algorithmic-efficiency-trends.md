---
title: "Algorithmic Efficiency Trends in AI: A Research Synthesis"
author: "Synthesis of Epoch AI, Stanford HAI, MIT FutureTech, and other sources"
year: 2024-2026
source_url: "https://epoch.ai/trends"
source_format: web-synthesis
downloaded: 2026-03-26
encrypted: false
notes: "Comprehensive synthesis of published research on algorithmic efficiency improvements, training compute trends, progress decomposition, and projections. Primary sources: Epoch AI, Stanford HAI AI Index, Gundlach et al. (2025), Hernandez & Brown (2020), Hoffmann et al. (2022)."
---

# Algorithmic Efficiency Trends in AI

## 1. Epoch AI's Algorithmic Efficiency Research

### 1.1 Core Finding: Halving Time for Compute Requirements

The most cited result comes from Ho et al. (2024), "Algorithmic Progress in Language Models." Using a dataset of 200+ language model evaluations on WikiText and Penn Treebank spanning 2012-2023, they find:

> **The compute required to reach a set performance threshold has halved approximately every 8 months**, with a 95% confidence interval of 5 to 14 months.

This is substantially faster than hardware gains per Moore's Law, which predicts compute cost halving every ~18-24 months.

- **Source:** Ho, Besiroglu, Erdil et al. (2024). "Algorithmic Progress in Language Models." arXiv:2403.05812. https://epoch.ai/blog/algorithmic-progress-in-language-models

The Epoch AI trends dashboard (as of early 2026) reports the current rate as:

- **Pre-training compute efficiency:** improving at 3.0x per year (doubling every 7.6 months)
- This means "the same performance can be achieved with 3x less compute" annually through algorithmic improvements alone.

- **Source:** Epoch AI Trends Dashboard. https://epoch.ai/trends

### 1.2 Revisiting Algorithmic Progress (Broader AI Domains)

Erdil & Besiroglu (2022), later updated in Epoch's "Revisiting Algorithmic Progress" analysis, examined algorithmic progress across multiple AI domains using augmented scaling laws:

- **General finding:** Every 9 months, better algorithms contribute the equivalent of a doubling of compute budgets (95% CI: 4 to 25 months).
- **Image classification (ImageNet):** ~45% from algorithmic improvements, ~45% from compute scaling, ~10% from data scaling.
- **Over 75% of algorithmic progress is compute-augmenting** (enables more effective compute utilization), while less than 25% is data-augmenting.

- **Source:** Epoch AI, "Revisiting Algorithmic Progress." https://epoch.ai/blog/revisiting-algorithmic-progress

### 1.3 Earlier Benchmark: Computer Vision

Hernandez & Brown (2020, OpenAI) measured algorithmic efficiency in image classification:

- **44x decrease in compute** required to train a classifier to AlexNet-level performance on ImageNet between 2012 and 2019.
- This corresponds to algorithmic efficiency **doubling every 16 months** over 7 years.
- By comparison, Moore's Law would have yielded only an 11x improvement over the same period.

- **Source:** Hernandez, D. and Brown, T.B. (2020). "Measuring the Algorithmic Efficiency of Neural Networks." arXiv:2005.04305. https://arxiv.org/abs/2005.04305

---

## 2. Training Compute Trends

### 2.1 Growth Rate of Frontier Training Compute

Epoch AI maintains the most comprehensive dataset on training compute for AI models (2,700+ models, 428 meeting notability criteria since 2010). Key findings:

| Metric | Growth Rate | Doubling Time | Period | Source |
|--------|-------------|---------------|--------|--------|
| Notable AI models | 4.7x/year (90% CI: 4.3-5.2x) | ~6 months | 2010-2024 | Epoch |
| Frontier models | 5.3x/year (90% CI: 4.9-5.7x) | ~5.2 months | 2010-2024 | Epoch |
| Recent frontier models | 4.2x/year (90% CI: 3.6-4.9x) | ~6.5 months | 2018-2024 | Epoch |
| Notable language models | 9.5x/year (90% CI: 7.4-12.2x) | ~3.8 months | June 2017-2024 | Epoch |
| Top language models | 5.0x/year (80% CI: 3.1-7.3x) | ~5 months | Mid 2020-2024 | Epoch |

- **Source:** Epoch AI, "Training Compute of Frontier AI Models Grows by 4-5x per Year." https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year
- **Source:** Epoch AI, "The Training Compute of Notable AI Models Has Been Doubling Roughly Every Six Months." https://epoch.ai/data-insights/compute-trend-post-2010

### 2.2 Company-Specific Growth Rates

| Organization | Growth Rate | Period |
|-------------|-------------|--------|
| OpenAI | 5.3x/year (90% CI: 2.5-10.2x) | Aug 2017-May 2024 |
| Google DeepMind | 4.9x/year (90% CI: 3.8-6.1x) | July 2012-May 2024 |
| Meta AI | 7.1x/year (80% CI: 4.8-10.1x) | July 2015-May 2024 |

### 2.3 Notable Model Compute Figures

| Model | Date | Estimated Training Compute |
|-------|------|---------------------------|
| GPT-3 175B | May 2020 | 3e23 FLOP |
| GPT-4 | March 2023 | ~2e25 FLOP |
| Gemini Ultra | December 2023 | ~5e25 FLOP |
| Grok-3 | February 2025 | >1e26 FLOP |
| Grok-4 | 2025 | ~5e26 FLOP |

- **Source:** Epoch AI Trends Dashboard. https://epoch.ai/trends

### 2.4 Cost and Power Trends

- **Training costs:** increasing 3.5x/year (doubling every ~7 months).
- **Training cost doubling time for largest models:** every 8 months.
- **Power requirements:** doubling annually.
- **Hardware FLOP/s per dollar:** improving 37%/year (doubling every 2.2 years).
- **Energy efficiency:** improving 34%/year (doubling every 2.4 years).

- **Source:** Epoch AI, "Training Compute Costs Are Doubling Every Eight Months for the Largest AI Models." https://epoch.ai/data-insights/cost-trend-large-scale
- **Source:** Epoch AI, "The Power Required to Train Frontier AI Models Is Doubling Annually." https://epoch.ai/data-insights/power-usage-trend

---

## 3. Algorithmic Efficiency vs. Compute Scaling: Progress Decomposition

### 3.1 Language Models

Ho et al. (2024) used Shapley value analysis to decompose performance gains in language models (2012-2023):

- **Compute and data:** responsible for 60-95% of performance gains.
- **Algorithmic improvements:** responsible for only 5-40% of progress.
- **Trend:** the relative importance of algorithmic advances has decreased over time as compute scaling accelerated around 2018.

Despite algorithmic efficiency improving faster than Moore's Law, **compute scaling has been the larger contributor to overall performance** because training compute has grown at 4-5x/year while algorithmic efficiency has improved at ~3x/year.

- **Source:** Ho et al. (2024). arXiv:2403.05812. https://epoch.ai/blog/algorithmic-progress-in-language-models

### 3.2 Computer Vision

For image classification, the decomposition is more balanced:

- **~45% from compute scaling**
- **~45% from algorithmic improvements**
- **~10% from data scaling**

- **Source:** Epoch AI, "Revisiting Algorithmic Progress." https://epoch.ai/blog/revisiting-algorithmic-progress

### 3.3 General Machine Learning

Erdil & Besiroglu (2022) found across general ML tasks:

- **Algorithmic improvements:** explain 25-70% of gains.
- **Physical compute scaling:** accounts for 30-55%.
- **Data scaling:** contributes 10-30%.

This suggests algorithms and hardware contribute roughly equally in general ML, though the balance shifts toward compute dominance in language models specifically.

### 3.4 The Gundlach et al. (2025) Decomposition

Gundlach et al. (2025), "On the Origin of Algorithmic Progress in AI," provides the most granular decomposition to date. Key findings:

**The widely-cited 22,000x efficiency gain (2012-2023) is likely overstated.** The authors estimate approximately **6,930x** -- roughly a third of previous estimates.

**Two innovations account for 91% of measured progress:**
1. **LSTM-to-Transformer transition:** 68% of frontier-scale efficiency gains.
2. **Kaplan-to-Chinchilla scaling rebalancing:** most of the remaining gains.

**Scale-invariant innovations contribute far less:**
- SwiGLU activation: 1.17x
- Pre-RMSNorm normalization: 1.87x
- Rotary positional encoding (RoPE): 1.44x
- Learning rate schedule improvements: <1.05x
- **All post-2017 scale-invariant innovations combined:** only 1.33x (after accounting for interaction effects)

**Scale-dependence is critical:** The Transformer showed only 6.28x improvement over LSTMs at 10^15 FLOPs but extrapolates to 100x+ gains at frontier scales (10^23 FLOPs). Progress at small scales (~10^18 FLOPs) is only 20x -- actually below hardware progress rates.

- **Source:** Gundlach, H. et al. (2025). "On the Origin of Algorithmic Progress in AI." arXiv:2511.21622. https://arxiv.org/html/2511.21622

### 3.5 The Jevons Paradox: Efficiency Does Not Reduce Compute Spending

Epoch AI argues that algorithmic progress increases rather than decreases total compute spending:

- Between 1945 and 2006, the inflation-adjusted cost of compute dropped by over one trillion-fold, yet computing's share of GDP rose to ~1% by 2000.
- Despite algorithmic efficiency improving at ~3x/year, investment in AI compute has risen by over 3 orders of magnitude.
- If AI approaches human-labor substitution capability, compute spending could expand from ~0.6% of GDP to match the labor share (~60% of GDP) -- a potential 100-fold expansion.

- **Source:** Epoch AI, "Algorithmic Progress Likely Spurs More Spending on Compute, Not Less." https://epoch.ai/gradient-updates/algorithmic-progress-likely-spurs-more-spending-on-compute-not-less

---

## 4. Specific Efficiency Milestones

### 4.1 Transformer Architecture (Vaswani et al., 2017)

The single most impactful algorithmic innovation for language modeling:

- Accounts for approximately **2 years of algorithmic progress equivalent** (Ho et al., 2024).
- **68% of all frontier-scale efficiency gains** in language models trace to the LSTM-to-Transformer transition (Gundlach et al., 2025).
- At frontier scales (10^23 FLOPs), the Transformer provides **100x+ compute-equivalent gains** over LSTMs.
- At small scales (10^15 FLOPs), the advantage is only about 6.28x -- the innovation is fundamentally scale-dependent.
- Key advantage: parallelizable self-attention replaces sequential recurrence, enabling far more efficient use of GPU hardware.

### 4.2 Chinchilla Scaling Laws (Hoffmann et al., 2022)

Discovered that most large language models were severely undertrained:

- Previous practice (following Kaplan et al., 2020): ~1.7:1 token-to-parameter ratio (e.g., GPT-3 with 175B parameters trained on 300B tokens).
- Chinchilla optimal: ~20:1 token-to-parameter ratio.
- **Chinchilla (70B parameters, 4x more data) matched or exceeded Gopher (280B), GPT-3 (175B), and Megatron-Turing NLG (530B)** using the same compute budget.
- Represents the equivalent of **8 to 16 months of algorithmic progress** (Ho et al., 2024).
- Together with the Transformer, accounts for **91% of total measured algorithmic progress** in language models (Gundlach et al., 2025).
- Provides a **2-4x reduction in compute** needed to reach a given loss target at frontier scale.

- **Source:** Hoffmann et al. (2022). "Training Compute-Optimal Large Language Models." arXiv:2203.15556.

### 4.3 FlashAttention (Dao et al., 2022)

IO-aware exact attention algorithm that reduces memory reads/writes between GPU HBM and on-chip SRAM:

- **15% end-to-end wall-clock speedup** on BERT-large (seq. length 512) vs. MLPerf 1.1 training speed record.
- **3x speedup** on GPT-2 (seq. length 1K).
- **2.4x speedup** on long-range arena (seq. length 1K-4K).
- As part of the combined compute-independent improvement stack (LayerNorm + RoPE + FlashAttention): approximately **3.5x compute-equivalent gains**.
- Unlike the Transformer or Chinchilla scaling, FlashAttention provides benefits **across scales** (compute-independent).

- **Source:** Dao, T. et al. (2022). "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness." arXiv:2205.14135.

### 4.4 Mixture of Experts (MoE)

Sparse MoE architectures dramatically reduce active compute per token:

- **Mixtral 8x7B:** 46.7B total parameters, only 12.9B active during inference. Outperforms Llama 2 70B with **5x fewer active parameters**.
- **Switch Transformer:** trained **4x faster** than T5-XXL with similar performance, using Top-1 routing to simplify MoE.
- **DeepSeek-V3:** 671B total parameters using MoE + multi-headed latent attention (MLA). Training cost: 2.788M H800 GPU hours vs. LLaMA 3.1-405B's ~30.84M H100 hours (~11x reduction). Claimed training cost of ~$6M vs. GPT-4's ~$100M.
- **Rule of thumb:** an 8-way sparse MoE model has roughly the same inference economics as a dense model half its size.

### 4.5 Knowledge Distillation

Transferring knowledge from large to small models:

- **DistilBERT:** retains ~97% of BERT's language understanding with 60% of the runtime and 40% reduction in model size.
- Distilled models typically consume **80-95% fewer compute resources** than the original large model.
- **Stanford HAI AI Index (2025):** in 2022, the smallest model scoring >60% on MMLU was PaLM at 540B parameters. By 2024, Microsoft's Phi-3-mini achieved the same at 3.8B parameters -- a **142-fold parameter reduction** in 2 years.

- **Source:** Stanford HAI, "AI Index Report 2025." https://hai.stanford.edu/ai-index/2025-ai-index-report

### 4.6 Quantization and Low-Precision Training

Reducing numerical precision from FP32 to FP16, BF16, INT8, or INT4:

- Moving from FP32 to FP16/BF16: ~2x memory reduction and significant speedup with minimal accuracy loss.
- INT8 quantization: ~4x memory reduction from FP32, enabling inference on consumer hardware.
- INT4 quantization: ~8x memory reduction, with emerging techniques maintaining acceptable quality.
- These gains are largely orthogonal to algorithmic efficiency -- they multiply with other improvements.

### 4.7 Inference Cost Collapse

Combining algorithmic improvements, hardware scaling, and competitive pricing:

- **LLM inference pricing:** falling at 40x/year (doubling every ~2 months) per Epoch AI trends dashboard.
- **Stanford HAI (2025):** the inference cost for GPT-3.5-level performance dropped **280-fold** between November 2022 and October 2024.

---

## 5. Projections and Extrapolations

### 5.1 Epoch AI: AI Scaling Through 2030

Epoch AI's "Can AI Scaling Continue Through 2030?" analysis projects:

**Training compute by 2030:**
- Central estimate: **~2e29 FLOP** per frontier training run (80% CI).
- This is thousands of times more compute than GPT-4 (~2e25 FLOP).
- Training clusters would cost over **$100 billion**.

**Power requirements:**
- Single data center campus: 1-5 GW by 2030 (supporting 1e28 to 3e29 FLOP).
- Geographically distributed: 2-45 GW (supporting 2e28 to 2e30 FLOP).
- US data center capacity projected to grow from ~40 GW to ~90 GW by 2030.

**Hardware production:**
- Central estimate: 100 million H100-equivalent GPUs for training by 2030 (range: 20-400M).
- Annual GPU production growth: 30-100%.

**Data availability:**
- Text data can sustain scaling to at least 2027; synthetic data extends capacity further.
- Total estimated capacity by 2030: 400 trillion to 20 quadrillion tokens.

**Key conclusion:** "The historical rate of compute scaling can likely be sustained until at least 2030, at least if investors are willing to fund the necessary infrastructure."

- **Source:** Epoch AI, "Can AI Scaling Continue Through 2030?" https://epoch.ai/blog/can-ai-scaling-continue-through-2030

### 5.2 Algorithmic Progress: Will It Continue?

Several considerations suggest both optimism and caution about future algorithmic progress:

**Arguments for continued rapid progress:**
- The rate of algorithmic improvement (3x/year) has been remarkably consistent over the past decade.
- New paradigms (e.g., reinforcement learning from human feedback, chain-of-thought reasoning, test-time compute) represent additional efficiency vectors not captured in pre-training benchmarks.
- DeepSeek-V3/R1 demonstrated that significant algorithmic efficiency gains remain achievable (10x+ cost reduction vs. comparable models).

**Arguments for potential slowdown:**
- Gundlach et al. (2025) show that 91% of historical progress came from just two innovations (Transformers and Chinchilla scaling). Such architectural breakthroughs may be rare.
- Scale-invariant improvements (LayerNorm, RoPE, FlashAttention, etc.) combined provide only ~3.5x -- modest compared to the big architectural shifts.
- Future progress may require increasingly rare "compute-dependent" breakthroughs that are harder to discover.
- The pace of takeoff "depends on the relative difficulty and infrequency of discovering" compute-dependent advances.

**Epoch AI's position:** "There is no particular reason to expect algorithmic progress will accelerate -- even if it did, this seems likely to encourage using more compute." Algorithmic efficiency improvements occur within and complement the existing compute growth trajectory, rather than substituting for it.

- **Source:** Epoch AI, "How Fast Can Algorithms Advance Capabilities?" https://epoch.ai/gradient-updates/how-fast-can-algorithms-advance-capabilities
- **Source:** Epoch AI, "The Least Understood Driver of AI Progress." https://epoch.ai/gradient-updates/the-least-understood-driver-of-ai-progress

### 5.3 Effective Compute: The Combined Picture

Effective compute = physical compute x algorithmic efficiency. Combining current trends:

- **Physical compute growth:** 4-5x/year
- **Algorithmic efficiency:** ~3x/year
- **Combined effective compute growth:** roughly 12-15x/year, or doubling every ~3 months

This combined rate explains how AI capabilities have improved so rapidly and suggests continued rapid progress through at least 2030, barring regulatory intervention, economic constraints, or fundamental technical barriers.

---

## Summary Table: Key Rates

| Metric | Rate | Doubling Time | Source |
|--------|------|---------------|--------|
| Algorithmic efficiency (LMs) | 3.0x/year | 7.6 months | Epoch AI (2024) |
| Algorithmic efficiency (LMs, 95% CI) | - | 5-14 months | Ho et al. (2024) |
| Algorithmic efficiency (general ML) | - | 9 months (CI: 4-25) | Erdil & Besiroglu (2022) |
| Algorithmic efficiency (vision) | - | 16 months | Hernandez & Brown (2020) |
| Training compute (frontier) | 5.3x/year | 5.2 months | Epoch AI (2024) |
| Training compute (notable) | 4.7x/year | 6 months | Epoch AI (2024) |
| Training costs | 3.5x/year | 7 months | Epoch AI (2024) |
| Hardware FLOP/$ | 1.37x/year | 2.2 years | Epoch AI (2024) |
| LLM inference pricing | 40x/year decline | 2 months | Epoch AI (2025) |
| GPU stock | 2.3x/year | 10 months | Epoch AI (2025) |

---

## Sources

- Dao, T. et al. (2022). "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness." arXiv:2205.14135. https://arxiv.org/abs/2205.14135
- Epoch AI. Trends Dashboard. https://epoch.ai/trends
- Epoch AI. "Algorithmic Progress in Language Models." https://epoch.ai/blog/algorithmic-progress-in-language-models
- Epoch AI. "Algorithmic Progress Likely Spurs More Spending on Compute, Not Less." https://epoch.ai/gradient-updates/algorithmic-progress-likely-spurs-more-spending-on-compute-not-less
- Epoch AI. "Can AI Scaling Continue Through 2030?" https://epoch.ai/blog/can-ai-scaling-continue-through-2030
- Epoch AI. "How Fast Can Algorithms Advance Capabilities?" https://epoch.ai/gradient-updates/how-fast-can-algorithms-advance-capabilities
- Epoch AI. "Revisiting Algorithmic Progress." https://epoch.ai/blog/revisiting-algorithmic-progress
- Epoch AI. "The Least Understood Driver of AI Progress." https://epoch.ai/gradient-updates/the-least-understood-driver-of-ai-progress
- Epoch AI. "Training Compute of Frontier AI Models Grows by 4-5x per Year." https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year
- Epoch AI. "What Will AI Look Like in 2030?" https://epoch.ai/blog/what-will-ai-look-like-in-2030
- Erdil, E. and Besiroglu, T. (2022). Referenced in Epoch AI's algorithmic progress analyses.
- Gundlach, H. et al. (2025). "On the Origin of Algorithmic Progress in AI." arXiv:2511.21622. https://arxiv.org/html/2511.21622
- Hernandez, D. and Brown, T.B. (2020). "Measuring the Algorithmic Efficiency of Neural Networks." arXiv:2005.04305. https://arxiv.org/abs/2005.04305
- Ho, A., Besiroglu, T., Erdil, E. et al. (2024). "Algorithmic Progress in Language Models." arXiv:2403.05812.
- Hoffmann, J. et al. (2022). "Training Compute-Optimal Large Language Models." arXiv:2203.15556. https://arxiv.org/abs/2203.15556
- Our World in Data. "Artificial Intelligence." https://ourworldindata.org/artificial-intelligence
- Our World in Data. "Scaling Up: How Increasing Inputs Has Made Artificial Intelligence More Capable." https://ourworldindata.org/scaling-up-ai
- Stanford HAI. "AI Index Report 2025." https://hai.stanford.edu/ai-index/2025-ai-index-report
