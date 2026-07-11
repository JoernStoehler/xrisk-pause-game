---
title: "Algorithmic Progress in Language Models"
author: "Anson Ho, Tamay Besiroglu, Ege Erdil, David Owen, Robi Rahman, Zifan Carl Guo, David Atkinson, Neil Thompson, Jaime Sevilla"
year: 2024
source_url: "https://arxiv.org/abs/2403.05812"
source_format: arxiv-tex
downloaded: 2026-03-12
encrypted: false
notes: "Empirical study of algorithmic progress in language models. Key finding: compute required to reach a given performance level halves every ~8 months (5-14 month CI). Dataset of 200+ LM evaluations on WikiText and Penn Treebank (2012-2023). Quantifies relative contributions of scaling vs algorithmic innovation."
---

# Algorithmic Progress in Language Models

## Abstract

We investigate the rate at which algorithms for pre-training language models have improved since the advent of deep learning. Using a dataset of over 200 language model evaluations on Wikitext and Penn Treebank spanning 2012-2023, we find that the compute required to reach a set performance threshold has halved approximately every 8 months, with a 95% confidence interval of around 5 to 14 months, substantially faster than hardware gains per Moore's Law. We estimate augmented scaling laws, which enable us to quantify algorithmic progress and determine the relative contributions of scaling models versus innovations in training algorithms. Despite the rapid pace of algorithmic progress and the development of new architectures such as the transformer, our analysis reveals that the increase in compute made an even larger contribution to overall performance improvements over this time period. Though limited by noisy benchmark data, our analysis quantifies the rapid progress in language modeling, shedding light on the relative contributions from compute and algorithms.

## Introduction

The field of language modeling has seen rapid advances, with recent large language models (LLMs) demonstrating strong performance in domains such as programming, mathematics, and a wide range of standardized tests. These capabilities have enabled LLMs to support a range of commercial and scientific applications.

A key driver of this progress has been algorithmic improvements, which result in more efficient use of resources such as compute and training data. These include changes in model architectures, optimization algorithms, and software frameworks. Many surveys of progress in language modeling describe specific innovations in detail, such as:

- Transformer architecture
- Layer normalization
- IO-aware exact attention algorithms (FlashAttention)
- Positional embeddings (RoPE)
- Innovations in attention mechanisms (multi-query attention)
- Data quality improvements (training on high-quality textbook examples, data pruning)

The rapid scaling of compute for training language models, coupled with insights from scaling laws, suggests that a substantial portion of the improvement in language model capabilities can be attributed to the increased use of computational resources. The key question this paper addresses is: **How much of recent progress in language models has come from algorithmic improvements during pre-training, and how much has been from scaling up models and datasets?**

### Previous Work

Studies across computer science, including linear programming, SAT solving, game playing, and deep learning, reveal algorithmic advances to be a vital driver of improved performance over time, on par with hardware improvements following Moore's law. Algorithmic innovations enable solutions of larger problem instances, expand the scope of tractable problem classes, and reduce data and/or computation required to achieve fixed performance thresholds.

Estimated rates of algorithmic progress vary substantially across domains and problem sizes, but often correspond to effectively doubling available compute resources for a task every 1-2 years. However, progress is heterogeneous, with some domains stagnating while others improve rapidly.

#### Algorithmic Progress in Computer Science

There is a small but growing literature on progress in software and algorithms for common computer science problems.

**Linear Programming (LP):** Bixby (2012) reviews LP algorithm developments from 1985-1995. They compare solution times using different versions of the CPLEX solver, finding speedups of over 1000× between 1988 and 1995. Advances in algorithms have been as important as hardware improvements in enabling solutions of much larger linear programs.

Koch et al. (2022) assess the progress in LP and mixed-integer linear programming (MILP) solver performance by comparing modern solvers from 2020 against older solvers from around 2001. They find algorithmic improvements have yielded 9× and 50× speedups for LPs and MILPs respectively, equating to 180× and 1000× total speedups when 20× hardware improvements are accounted for. While hardware gains have stalled recently, algorithms continue rapidly advancing, expanding the frontier of tractable cases. In just the last 20 years, 62% of problem instances from a recent benchmark went from requiring over 24 hours to solve to taking 104 seconds on average.

**SAT Solving:** Fichte, Hecher, and Szeider (2020) design a "time leap challenge" to evaluate the relative contributions of hardware advances vs. algorithmic advances to progress in SAT solving over the past 20 years. By resurrecting decades-old hardware and software, they compare modern SAT solvers from 2019 running on 1999-era hardware to early 2000s solvers running on modern 2019 hardware. The modern solvers on old hardware solved a similar number of problem instances as old solvers on modern hardware, suggesting that algorithmic improvements have been just as impactful as hardware advances.

**General Algorithms:** Sherry and Thompson (2021) provide a comprehensive analysis of over 100 important algorithm families and provide evidence that algorithms have been a crucial driver of improved computing performance, and increasingly so for larger problem sizes. Their work reveals extreme heterogeneity, with many algorithms stagnating while others improve massively. Overall, 30-43% of algorithms outpaced hardware advances like Moore's Law for moderate problem sizes.

#### Algorithmic Progress in Machine Learning

Thus far, there have been few works investigating algorithmic progress in machine learning specifically.

**Computer Vision:** Hernandez and T. Brown (2020) investigate the rate of algorithmic progress in computer vision; specifically, image classification on ImageNet. By re-implementing popular open-source models, they find a 44× decrease in the compute required to train image classifiers to the same performance as AlexNet (state-of-the-art in 2012).

Karpathy (2022) reproduced the seminal work of LeCun et al. (1989) on early convolutional neural networks for handwritten digit recognition. By modernizing the model's loss function, optimizer, and regularization techniques while maintaining the original model size, Karpathy achieved a 60% reduction in error rate, highlighting the significant role of advancements in training techniques.

**Reinforcement Learning:** Dorner (2021) measures progress in the sample efficiency of deep reinforcement learning algorithms over time through historical training curves on Atari games, MuJoCo physics tasks, and DeepMind Control Suite environments. Across these benchmarks, state-of-the-art sample efficiency is found to improve at exponential rates, with doubling times ranging from 5 to 18 months depending on the domain and performance threshold.

**General Machine Learning:** Erdil and Besiroglu (2022) propose an alternative approach to estimating algorithmic progress based on fitting a statistical model inspired by neural scaling laws, and use Shapley values to determine the relative contributions of training compute and data to performance. They find that algorithmic improvements explain 25-70% of gains, with physical compute scaling accounting for 30-55% and data scaling contributing 10-30%, indicating algorithms and hardware contribute roughly equally. Compute-augmenting algorithmic advances halve physical compute requirements for a certain performance level every 9 months, faster than hardware gains per Moore's law.

**Scaling Law Improvements:** Recent work by Hoffmann et al. (2022) proposes an improved scaling law for training language models compared to Kaplan et al. (2020). By directly applying the new scaling law, this provides a 2× to 4× reduction in compute needed to reach a given loss target at the scale of current frontier LLMs, depending on the scale of the model.

## Methodology

### Data Collection

We produce a dataset of over 200 language models that have been evaluated, by others and by ourselves, on a range of popular language modeling datasets. The language modeling datasets we focus on are:

- **WikiText-103** and **WikiText-2**
- **Penn Treebank**

We focus on evaluations on these datasets because these represent high-quality text data that have been used for many years to evaluate language models. Focusing on established benchmarks used throughout the development of neural language models provides continuity to compare models old and new.

### Scope of Analysis

This paper quantifies pre-training algorithmic improvements. This is distinct from algorithmic progress in general, since we are not considering "post-training enhancements", such as:

- Chain-of-thought prompting
- Improvements to fine-tuning techniques
- Integration of search-based methods

These can significantly improve the performance of already-trained models on downstream tasks (e.g. programming or solving mathematics problems) but are outside the scope of this analysis.

## Key Findings

### Primary Result

**Compute required to reach a set performance threshold has halved approximately every 8 months**, with a 95% confidence interval of around 5 to 14 months. This is substantially faster than hardware gains per Moore's Law (which predicts compute doubling every ~18-24 months).

### Relative Contributions: Compute vs. Algorithms

Despite the rapid pace of algorithmic progress and the development of new architectures such as the transformer, our analysis reveals that **the increase in compute made an even larger contribution to overall performance improvements** over the time period studied (2012-2023).

### Scaling Laws and Performance

The paper provides augmented scaling laws that enable quantification of algorithmic progress and determination of the relative contributions of:

- Scaling models (increase in model size)
- Innovations in training algorithms
- Data scaling

## Limitations

The analysis is limited by noisy benchmark data, which affects the precision of estimates. The focus on established benchmarks (WikiText, Penn Treebank) provides continuity but may not capture all dimensions of language model capability.

## Conclusion

The paper quantifies rapid progress in language modeling, shedding light on the relative contributions from compute and algorithms. Algorithmic improvements, while substantial, have been outpaced by the contribution of increased computational resources to overall performance improvements in language models over the 2012-2023 period.

## References and Code

- **Paper:** arXiv:2403.05812
- **Code and data:** https://github.com/epoch-research/lm-algorithmic-progress

