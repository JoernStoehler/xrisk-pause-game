---
title: "Compute Requirements for Frontier AI: Trends, Thresholds, and the Consumer Gap"
author: "Research synthesis (multiple sources)"
year: 2025
source_url: "https://epoch.ai/trends"
source_format: synthesis
downloaded: 2026-03-26
encrypted: false
notes: "Synthesized research on training compute trends, dangerous capability thresholds, consumer hardware capabilities, distributed training efficiency, and the frontier-consumer gap. Primary sources: Epoch AI, Cotra bio-anchors, DiLoCo/INTELLECT-1 papers, NVIDIA specifications. Compiled for game design reference — understanding what compute levels matter for enforcement scenarios."
---

# Compute Requirements for Frontier AI: Trends, Thresholds, and the Consumer Gap

## 1. Training Compute for Frontier Models

### Historical Training Compute (FLOP)

| Model | Organization | Year | Training Compute (FLOP) | Confidence |
|-------|-------------|------|------------------------|------------|
| GPT-2 (1.5B) | OpenAI | 2019 | ~1e20 | Estimated (6ND formula) |
| GPT-3 (175B) | OpenAI | 2020 | 3e23 | Epoch AI |
| GPT-4 | OpenAI | 2023 | 2.1e25 | Epoch AI (low confidence) |
| GPT-4 Turbo | OpenAI | 2023 | 2.2e25 | Epoch AI (low confidence) |
| GPT-4o | OpenAI | 2024 | 3.8e25 | Epoch AI (low confidence) |
| GPT-4.5 | OpenAI | 2025 | 6.4e25 | Epoch AI (low confidence) |
| Claude 3 Opus | Anthropic | 2024 | 1.6e25 | Epoch AI (low confidence) |
| Claude 3.5 Sonnet | Anthropic | 2024 | 3.6e25 | Epoch AI (low confidence) |
| Claude 3.7 Sonnet | Anthropic | 2025 | 3.4e25 | Epoch AI (low confidence) |
| Gemini 1.0 Ultra | Google DeepMind | 2023 | 5.0e25 | Epoch AI (low confidence) |
| Gemini 1.5 Pro | Google DeepMind | 2024 | 1.6e25 | Epoch AI (low confidence) |
| Llama 3.1-405B | Meta | 2024 | 3.8e25 | Epoch AI (high confidence) |
| Grok-2 | xAI | 2024 | 3.0e25 | Epoch AI (high confidence) |
| Grok-3 | xAI | 2025 | 4.6e26 | Epoch AI (high confidence) |
| Grok 4 | xAI | 2025 | ~5e26 | Epoch AI (largest known run) |

Source: [Epoch AI — Models Over 1e25 FLOP](https://epoch.ai/data-insights/models-over-1e25-flop); [Epoch AI — Training Compute Grows 4-5x/Year](https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year)

### Key Scaling Facts

- **5 orders of magnitude in 5 years**: From GPT-2 (~1e20 FLOP, 2019) to Grok 4 (~5e26 FLOP, 2025)
- **Growth rate (frontier models, 2010-2024)**: 4.2-5.3x per year (Epoch AI 90% CI)
- **Growth rate (frontier LLMs, post-2020)**: ~5x per year, doubling time ~5.2 months
- **Growth rate (LLMs overall, 2017-2024)**: 9.5x/year (includes non-frontier models catching up)
- **Models exceeding 1e25 FLOP**: Over 30 from 12 developers as of June 2025, averaging ~2 new models per month during 2024
- **Grok-3 (Feb 2025)**: First model estimated to exceed 1e26 FLOP

Source: [Epoch AI — Trends](https://epoch.ai/trends); [Epoch AI — Model Counts at Compute Thresholds](https://epoch.ai/blog/model-counts-compute-thresholds)

### Projected Model Counts Above Regulatory Thresholds

| Threshold | 2026 (median) | 2027 (median) | 2030 (median) |
|-----------|---------------|---------------|---------------|
| >1e26 FLOP | ~30 models | ~80 models | ~235 models |
| >1e27 FLOP | Emerging | ~10 models | >100 models |

Conservative scenario: ~10 models above 1e26 by 2027. Aggressive scenario: ~80 models by 2027. These counts cover "notable" models only; actual total could be 4x larger at thresholds well below the frontier.

Source: [Epoch AI — Model Counts at Compute Thresholds](https://epoch.ai/blog/model-counts-compute-thresholds)

### Cost Trends

- Training cost has grown 3.5x per year (doubling every ~7 months)
- But algorithmic efficiency improves ~3x per year, partially offsetting cost
- AI chip price-performance improves ~37% per year
- Net effect: frontier capability grows faster than spending alone would predict

### DeepSeek Efficiency Shock (2025)

DeepSeek V3 (671B MoE parameters) was trained on 2,048 H800 GPUs for ~2 months at an estimated cost of $5.58 million — dramatically cheaper than Western frontier models. Key innovations: Multi-head Latent Attention (MLA), DeepSeekMoE architecture, proprietary gradient synchronization reducing inter-GPU communication overhead from 30% to <8%. DeepSeek-R1 achieves comparable performance to OpenAI's o1 at 20-50x lower inference cost.

This demonstrates that algorithmic efficiency breakthroughs can rapidly reduce the compute (and cost) needed for frontier-level performance, complicating any enforcement regime that relies on the assumption that dangerous models require massive, easily-monitored data centers.

Source: [Epoch AI — What Went Into Training DeepSeek-R1](https://epoch.ai/gradient-updates/what-went-into-training-deepseek-r1); [The Register — DeepSeek Training Cost](https://www.theregister.com/2025/09/19/deepseek_cost_train/)

---

## 2. The "Compute Threshold" for Dangerous Capabilities

### Regulatory Thresholds (Current Policy)

| Framework | Threshold | Purpose |
|-----------|-----------|---------|
| EU AI Act | 1e25 FLOP | Presumed systemic risk; triggers notification, evaluation, risk assessment |
| US AI Executive Order (2023) | 1e26 FLOP | Triggers reporting to government, red-teaming results, cybersecurity measures |
| US AI EO (biology-specific) | 1e23 FLOP | Lower threshold for biological sequence models |

As of mid-2024, no public model exceeded the US 1e26 threshold. By February 2025, Grok-3 became the first, with ~30 models projected above 1e26 by 2027.

Source: [Heim & Koessler — Training Compute Thresholds (2024)](https://arxiv.org/abs/2405.10799)

### Biological Anchors Framework (Cotra, 2020; updated 2023)

Ajeya Cotra's framework estimates how much compute might be needed for "transformative AI" — AI that could trigger economic growth comparable to the Industrial Revolution. The framework uses six "anchors" drawn from biological analogies:

| Anchor | Median FLOP Estimate | Weight |
|--------|---------------------|--------|
| Lifetime (birth to 32 years of brain compute) | ~1e28 | 5% |
| Short horizon neural network (1-1000 subjective seconds) | ~1e32 | 15% |
| Genome (parameters = human genome bytes) | ~1e33 | 10% |
| Medium horizon neural network (1000-1M subjective seconds) | ~3e34 | 30% |
| Long horizon neural network (1M-1B subjective seconds) | ~1e37 | 20% |
| Evolution (all neural computation throughout evolutionary history) | ~1e41 | 10% |

**Weighted median across all anchors: ~2050 for transformative AI**, with >10% probability by 2036 and ~78% probability before 2100.

Tom Davidson's 2023 update (adding recursive self-improvement) shifted the median from 2053 to 2043.

**Key insight for enforcement**: The range spans ~20 orders of magnitude (1e24 to 1e50). Current frontier models (~1e25-1e26) are well above the lifetime anchor (~1e28 is close) but far below the evolution anchor (~1e41). This massive uncertainty means we cannot confidently say "this much compute is safe."

Source: [Epoch AI — Grokking Bio-Anchors](https://epoch.ai/blog/grokking-bioanchors); [Cold Takes — Biological Anchors in a Nutshell](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/)

### Epoch AI Direct Approach (2023)

Epoch's "Direct Approach" forecasts AI timelines by directly extrapolating scaling laws and interpreting cross-entropy loss as a proxy for capability. Rather than biological analogies, it asks: how much compute (given algorithmic efficiency trends) is needed to reach performance levels that would automate most economically valuable tasks?

The approach references ~1e35 FLOP as an illustrative (not definitive) estimate for transformative AI, but the authors explicitly caution against putting too much trust in any specific number. The key variables are algorithmic efficiency growth, compute investment growth, and hardware price-performance trends.

Source: [Epoch AI — The Direct Approach](https://epoch.ai/blog/the-direct-approach)

### Problems with Compute-Based Thresholds

1. **Reasoning/post-training compute is growing faster**: Reasoning training compute has grown ~10x every 3-5 months, far outpacing pre-training compute growth of 4-5x/year. Post-training may soon dominate total training cost, making pre-training FLOP a worse proxy for capability.
2. **Algorithmic efficiency compounds**: The compute required to reach a given performance level halves every ~8 months (Epoch AI, 95% CI: 5-14 months). Today's 1e25 FLOP model matches what required 1e26 FLOP two years ago.
3. **Thresholds require constant updating**: Both EU AI Act and US EO mandate regular threshold updates, but political processes lag behind technical change.

Source: [Epoch AI — Algorithmic Progress in LMs](https://arxiv.org/abs/2403.05812); [Epoch AI — Three Challenges for Compute-Based Policies](https://epoch.ai/gradient-updates/three-issues-undermining-compute-based-ai-policies)

---

## 3. Consumer Hardware Capabilities

### Current Top Consumer GPU: NVIDIA RTX 5090 (January 2025, ~$2,000)

| Specification | RTX 5090 | RTX 4090 (prior gen) |
|---------------|----------|---------------------|
| CUDA Cores | 21,760 | 16,384 |
| Tensor Cores | 680 (5th gen) | 512 (4th gen) |
| FP32 | ~105 TFLOPS | ~83 TFLOPS |
| FP16/BF16 (Tensor) | ~210 TFLOPS | ~165 TFLOPS |
| FP16 with sparsity | ~419 TFLOPS | ~330 TFLOPS |
| VRAM | 32 GB GDDR7 | 24 GB GDDR6X |
| Memory Bandwidth | 1,792 GB/s | 1,008 GB/s |
| TDP | 575W | 450W |
| Price | ~$2,000 | ~$1,600 |

**What can an RTX 5090 do?**
- Run models up to ~40B parameters (4-bit quantized) for inference
- Fine-tune (QLoRA/LoRA) models up to 13-30B parameters
- Train small models (<4B parameters) from scratch
- 72% faster than RTX 4090 in NLP tasks; 44% faster in computer vision

Source: [RunPod — RTX 5090 Review](https://www.runpod.io/articles/guides/nvidia-rtx-5090); [Puget Systems — RTX 5090 AI Review](https://www.pugetsystems.com/labs/articles/nvidia-geforce-rtx-5090-amp-5080-ai-review/)

### Consumer GPU Cluster Scenarios

**Cluster of 100 RTX 5090s:**
- Total FP16 Tensor: ~21,000 TFLOPS (~21 PFLOPS)
- Total VRAM: 3.2 TB
- Cost: ~$200,000 hardware
- Could train: ~7-13B parameter models from scratch (limited by VRAM and interconnect)
- Key limitation: consumer GPUs lack NVLink; PCIe-only interconnect creates severe communication bottlenecks for data-parallel training

**Cluster of 1,000 RTX 5090s:**
- Total FP16 Tensor: ~210 PFLOPS
- Total VRAM: 32 TB
- Cost: ~$2 million hardware
- Could theoretically train larger models, but interconnect bottleneck becomes dominant
- Without NVLink/InfiniBand, communication overhead could consume 50-80% of wall-clock time for synchronous data-parallel training at this scale

### Consumer vs. Data Center GPU Comparison

| Specification | RTX 5090 | H100 SXM | B200 |
|---------------|----------|----------|------|
| FP16/BF16 Tensor | ~210 TFLOPS | ~1,979 TFLOPS | ~2,250 TFLOPS |
| FP8 Tensor | N/A | ~3,958 TFLOPS | ~9,000 TFLOPS |
| VRAM | 32 GB GDDR7 | 80 GB HBM3 | 192 GB HBM3e |
| Memory Bandwidth | 1.8 TB/s | 3.35 TB/s | 8 TB/s |
| Interconnect | PCIe 5.0 only | NVLink (900 GB/s) | NVLink (1.8 TB/s) |
| Price | ~$2,000 | ~$25,000-40,000 | ~$30,000-60,000 |
| Cloud price/hr | ~$0.76-0.89 | ~$2.11-2.50 | ~$6.03 |

**Single GPU performance gap: ~10x** (RTX 5090 at ~210 TFLOPS vs. H100 SXM at ~1,979 TFLOPS in FP16 Tensor). The B200 is roughly **10-40x** a consumer GPU depending on precision.

**But the real gap is in interconnect, not raw FLOPS.** NVLink provides 900 GB/s (H100) to 1,800 GB/s (B200) of inter-GPU bandwidth. Consumer GPUs are limited to PCIe 5.0 (~64 GB/s), a **14-28x bandwidth disadvantage per link**. This makes large-scale synchronous training on consumer hardware dramatically less efficient.

Source: [Spheron — RTX 5090 vs H100 vs B200](https://www.spheron.network/blog/rtx-5090-vs-h100-vs-b200/); [BentoML — NVIDIA Data Center GPUs Explained](https://www.bentoml.com/blog/nvidia-data-center-gpus-explained-a100-h200-b200-and-beyond)

---

## 4. Distributed Training Efficiency

### The Core Problem

Standard data-parallel training requires synchronizing gradients after every batch across all GPUs. For a 175B parameter model, each synchronization step transmits ~700 GB of gradient data. On consumer internet (~60 Mbps), this would take ~26 hours per step, making naive distributed training of large models across the internet effectively impossible.

### DiLoCo: The Breakthrough (Douillard et al., 2024)

DiLoCo (Distributed Low-Communication training) reduces communication by performing many local training steps (H steps) before synchronizing. Key results:

- **500x communication reduction** compared to standard data-parallel training
- **Performance matches or exceeds** fully synchronous training on 8 workers
- Tested on 60M, 150M, and 400M parameter models
- Inner optimizer: AdamW; Outer optimizer: Nesterov momentum
- Robust to non-i.i.d. data distributions and variable communication frequency
- Communication every H=500 steps is optimal; H=1000 increases perplexity by only 2.9%

Source: [DiLoCo paper (arXiv:2311.08105)](https://arxiv.org/abs/2311.08105)

### INTELLECT-1: Real-World Decentralized Training (2024)

Prime Intellect trained a 10B parameter model across 3 continents with 30 independent compute providers:

- **400x communication reduction** (DiLoCo + int8 all-reduce + gradient compression)
- **83-96% GPU utilization** despite heterogeneous, unreliable nodes
- **36-41% model FLOPS utilization** (vs. 50-60% for centralized training)
- **1 trillion tokens in 11 days** on up to 14 concurrent nodes
- Nodes dynamically joined and left during training

Source: [INTELLECT-1 Technical Report (arXiv:2412.01152)](https://arxiv.org/abs/2412.01152)

### Recent Advances (2024-2025)

- **Streaming DiLoCo**: Overlaps computation with communication, further reducing wall-clock overhead
- **4-bit gradient quantization**: Combined with DiLoCo, achieves 100x bandwidth reduction vs. naive data parallelism
- **SPARTA**: Addresses worker divergence at very large H values; DiLoCo + SPARTA achieves 14.3% better perplexity at H=10,000 (10,000x less communication)
- **FedComLoc**: Combines federated learning with gradient compression, achieving 40-70% bandwidth savings
- **Low-rank gradient factorization**: 33% further reduction in communication costs
- **Constraint techniques (Pluralis)**: Reduce activation sizes by 100x, enabling consumer GPUs to train 7.5-8B parameter models through volunteer networks

### Efficiency Penalty Summary

| Approach | Communication Reduction | Performance Penalty |
|----------|------------------------|-------------------|
| Standard data-parallel | 1x (baseline) | None |
| DiLoCo (H=500) | 500x | Comparable or better |
| DiLoCo + int8 quantization | 400-500x | Minimal (<5% perplexity) |
| DiLoCo + SPARTA (H=10,000) | 10,000x | ~14% improvement over plain DiLoCo |
| Scaling to 10,000 nodes | Varies | ~6x more FLOP needed vs. centralized |
| 1 to 8 nodes | Varies | ~1.5x more FLOP needed |

**The key insight**: Communication efficiency has improved dramatically. The overhead penalty for distributed training is now measured in single-digit percentage points at moderate scale (8-14 nodes), not orders of magnitude. The remaining challenge is scaling to very large node counts while maintaining efficiency.

Source: [Epoch AI — How Far Can Decentralized Training Scale](https://epoch.ai/gradient-updates/how-far-can-decentralized-training-over-the-internet-scale); [ICLR 2025 Workshop — Improving Efficiency of DiLoCo](https://openreview.net/pdf?id=stFPf3gzq1)

---

## 5. The Frontier-Consumer Compute Gap

### Current State of the Gap

**Largest known training run**: Grok 4 at ~5e26 FLOP (xAI, 2025)

**Largest known decentralized training runs**: 6e22-6e23 FLOP (INTELLECT-1, Protocol Model 8B, Consilience 40B)

**Gap: ~1,000-10,000x** between decentralized training capability and frontier centralized training.

**Largest data center clusters**:
- xAI Colossus (as of June 2025): 150,000 H100 + 50,000 H200 + 30,000 GB200 GPUs
  - Peak FP16/BF16: ~99 ExaFLOPS dense; ~395 ExaFLOPS sparse FP8
  - Expanding toward 555,000 GPUs and ~2 GW power capacity
- OCI Superclusters: Up to 131,072 Blackwell GPUs, ~2.4 ZettaFLOPS peak

**Consumer-scale cluster (1,000 RTX 5090s)**: ~210 PFLOPS FP16 Tensor

**Gap in peak throughput**: Colossus is ~470,000x more powerful than a 1,000-GPU consumer cluster in raw FP16 TFLOPS. Even accounting for the fact that consumer clusters are much cheaper per FLOP, the scale difference is roughly **5-6 orders of magnitude** in effective training compute (accounting for interconnect inefficiency).

Source: [xAI Colossus](https://x.ai/colossus); [Epoch AI — How Far Can Decentralized Training Scale](https://epoch.ai/gradient-updates/how-far-can-decentralized-training-over-the-internet-scale)

### How Fast Is the Gap Closing?

**In raw capability (inference/fine-tuning)**: Leading open-weight models runnable on a single consumer GPU typically match frontier model capabilities from **6-12 months ago**:
- GPQA-Diamond: 7.4-month lag
- MMLU-Pro: 7.3-month lag
- LM Arena Elo: 12.4-month lag
- Artificial Analysis Intelligence Index: 6.3-month lag

Consumer-accessible models show a steeper improvement rate (+125 Elo/year) than frontier models (+80 Elo/year), meaning **the inference gap is actively shrinking**.

**In training capability (from scratch)**: The gap is closing more slowly. Decentralized training compute has grown ~20x/year since 2020 (a 600,000x increase over 5 years), compared to frontier training growing ~5x/year. But decentralized training started from a much lower base and is "unlikely to catch up to the frontier this decade."

Based on folding@home and Bitcoin as reference classes for volunteer compute networks, decentralized training could expand 30-3,000x in scale over 3-6 years, but this still likely leaves a 1-3 order of magnitude gap with frontier labs.

Source: [Epoch AI — Consumer GPU Model Gap](https://epoch.ai/data-insights/consumer-gpu-model-gap); [Epoch AI — How Far Can Decentralized Training Scale](https://epoch.ai/gradient-updates/how-far-can-decentralized-training-over-the-internet-scale)

### Why Algorithmic Progress Matters More Than Hardware

The compute required to reach a given performance level halves every ~8 months (Epoch AI). This means:

- A model requiring 1e26 FLOP today could be trained with ~1e25 FLOP in 8 months, ~1e24 FLOP in 16 months
- Today's frontier capability could be reproduced with consumer-cluster-level compute within 2-4 years
- The "safe" gap between dangerous capabilities and consumer hardware is **not fixed** — it shrinks continuously through algorithmic progress, even if hardware stays constant

DeepSeek V3 (2025) is the most dramatic example: frontier-competitive performance achieved at a fraction of Western labs' compute budgets, primarily through architectural and training innovations rather than raw hardware scaling.

Source: [Epoch AI — Algorithmic Progress in LMs](https://arxiv.org/abs/2403.05812)

---

## 6. Implications for Enforcement of an AI Development Pause

### What the Data Tells Us

1. **The regulatory window is narrowing.** In 2023, only a handful of labs could train models above 1e25 FLOP. By 2027, ~80 models from many organizations will exceed 1e26. Enforcement becomes harder as the number of capable actors grows.

2. **Compute monitoring works today but has a shelf life.** Current frontier training requires massive, conspicuous data centers (thousands of GPUs, hundreds of megawatts). This makes covert frontier training very difficult today. But algorithmic progress steadily reduces the compute needed for any given capability level, eventually bringing dangerous capabilities within reach of smaller, harder-to-monitor clusters.

3. **Distributed training is the long-term enforcement challenge.** DiLoCo and successors have reduced the communication overhead for distributed training from "impossible over the internet" to "5% penalty at moderate scale." INTELLECT-1 demonstrated real-world decentralized training of a 10B model across 3 continents. The gap between decentralized and frontier training is ~1,000x today, but shrinking.

4. **The "algorithmic progress" resource bar is the key game mechanic.** The real enforcement clock is not raw hardware deployment — it's algorithmic efficiency. Every 8 months of algorithmic progress halves the compute needed. This means a pause must either: (a) halt algorithmic research too (extremely difficult), or (b) continuously tighten compute thresholds, or (c) accept that the enforcement window is finite.

5. **Consumer hardware is not the near-term threat; it is the endgame threat.** Today's RTX 5090 is ~10x less powerful than an H100 and lacks the interconnect for large-scale training. A 1,000-GPU consumer cluster is ~5-6 orders of magnitude below a frontier data center in effective training compute. But this gap has been closing at ~10-20x per year on the decentralized side, and algorithmic efficiency doubles every ~8 months. Within a decade, today's frontier capabilities may be reproducible on hardware that fits in a building rather than a campus.

### Key Numbers for Game Design

| Fact | Number | Source |
|------|--------|--------|
| Frontier training compute growth | 4-5x / year | Epoch AI |
| Algorithmic efficiency doubling | ~8 months | Epoch AI |
| Models above 1e26 FLOP by 2027 | ~30-80 | Epoch AI |
| Consumer GPU lag behind frontier | 6-12 months (inference) | Epoch AI |
| Distributed training efficiency penalty | <5% at moderate scale | DiLoCo/INTELLECT-1 |
| Frontier vs. decentralized training gap | ~1,000x | Epoch AI |
| Decentralized training growth rate | ~20x / year | Epoch AI |
| Largest training cluster (Colossus) | 230,000+ GPUs, ~99 ExaFLOPS | xAI |
| Consumer GPU vs. data center GPU | ~10x per-chip gap | NVIDIA specs |
| Consumer cluster vs. data center | ~100,000-500,000x gap | Calculated |

---

## Sources

- [Epoch AI — Trends in Artificial Intelligence](https://epoch.ai/trends)
- [Epoch AI — Training Compute Grows 4-5x per Year](https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year)
- [Epoch AI — Models Over 1e25 FLOP](https://epoch.ai/data-insights/models-over-1e25-flop)
- [Epoch AI — Model Counts at Compute Thresholds](https://epoch.ai/blog/model-counts-compute-thresholds)
- [Epoch AI — Consumer GPU Model Gap](https://epoch.ai/data-insights/consumer-gpu-model-gap)
- [Epoch AI — How Far Can Decentralized Training Scale](https://epoch.ai/gradient-updates/how-far-can-decentralized-training-over-the-internet-scale)
- [Epoch AI — Grokking Bio-Anchors](https://epoch.ai/blog/grokking-bioanchors)
- [Epoch AI — Algorithmic Progress in Language Models (arXiv:2403.05812)](https://arxiv.org/abs/2403.05812)
- [Epoch AI — The Direct Approach](https://epoch.ai/blog/the-direct-approach)
- [Epoch AI — Three Challenges for Compute-Based Policies](https://epoch.ai/gradient-updates/three-issues-undermining-compute-based-ai-policies)
- [Heim & Koessler — Training Compute Thresholds (arXiv:2405.10799)](https://arxiv.org/abs/2405.10799)
- [Douillard et al. — DiLoCo: Distributed Low-Communication Training (arXiv:2311.08105)](https://arxiv.org/abs/2311.08105)
- [Jaghouar et al. — INTELLECT-1 (arXiv:2412.01152)](https://arxiv.org/abs/2412.01152)
- [Cold Takes — Biological Anchors Method in a Nutshell](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/)
- [Cotra — Forecasting TAI with Biological Anchors (2020)](https://www.alignmentforum.org/posts/AfH2oPHCApdKicM4m/two-year-update-on-my-personal-ai-timelines)
- [xAI — Colossus](https://x.ai/colossus)
- [Spheron — RTX 5090 vs H100 vs B200](https://www.spheron.network/blog/rtx-5090-vs-h100-vs-b200/)
- [RunPod — RTX 5090 Review](https://www.runpod.io/articles/guides/nvidia-rtx-5090)
- [Epoch AI — What Went Into Training DeepSeek-R1](https://epoch.ai/gradient-updates/what-went-into-training-deepseek-r1)
- [The Register — DeepSeek Training Cost](https://www.theregister.com/2025/09/19/deepseek_cost_train/)
- [ICLR 2025 Workshop — Improving DiLoCo Efficiency](https://openreview.net/pdf?id=stFPf3gzq1)
- [CNAS — Future-Proofing Frontier AI Regulation](https://www.cnas.org/publications/reports/future-proofing-frontier-ai-regulation)
