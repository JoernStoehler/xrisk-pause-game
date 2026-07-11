---
title: "DiLoCo: Distributed Low-Communication Training of Language Models"
author: "Arthur Douillard, Qixuan Feng, Andrei A. Rusu, Rachita Chhaparia, Yani Donchev, Adhiguna Kuncoro, Marc'Aurelio Ranzato, Arthur Szlam, Jiajun Shen"
year: 2024
source_url: "https://arxiv.org/abs/2311.08105"
source_format: arxiv-tex
downloaded: 2026-03-12
encrypted: false
notes: "Demonstrates distributed training across poorly-connected compute islands with 500x less communication — directly relevant to enforcement challenges of distributed compute evasion in ASI pause."
---

# DiLoCo: Distributed Low-Communication Training of Language Models

## Abstract

Large language models (LLM) have become a critical component in many applications of machine learning. However, standard approaches to training LLM require a large number of tightly interconnected accelerators, with devices exchanging gradients and other intermediate states at each optimization step. While it is difficult to build and maintain a single computing cluster hosting many accelerators, it might be easier to find several computing clusters each hosting a smaller number of devices. In this work, we propose a distributed optimization algorithm, Distributed Low-Communication (DiLoCo), that enables training of language models on islands of devices that are poorly connected. The approach is a variant of federated averaging, where the number of inner steps is large, the inner optimizer is AdamW, and the outer optimizer is Nesterov momentum. On the widely used C4 dataset, we show that DiLoCo on 8 workers performs as well as fully synchronous optimization while communicating 500 times less. DiLoCo exhibits great robustness to the data distribution of each worker. It is also robust to resources becoming unavailable over time, and vice versa, it can seamlessly leverage resources that become available during training.

**Keywords:** large-scale, language modeling, distributed learning

## 1. Introduction

Language models have shown remarkable ability to generalize to new tasks, and are at the heart of a multitude of new applications of machine learning. Because performance has scaled with model size, practitioners train increasingly larger models on increasingly large data. Nevertheless, at a high level, the basic training approach remains standard mini-batch back-propagation of the error.

At modern scale, training via standard back-propagation poses unprecedented engineering and infrastructure challenges. To start, several thousands of devices need to be powered and placed at the same physical location, and interconnected with high-bandwidth cables to minimize latency. Careful software engineering is required to orchestrate the passage of gradients, parameters and intermediate states between these devices at each optimization step, keeping all devices fully utilized. Furthermore, the more devices that are used for each synchronous training step, the more chances there are that one of them fails, risking halting training, or introducing subtle numerical issues. Moreover, the current paradigm poorly leverages heterogeneous devices, that might have different speed and topology. In the simplest terms, it is difficult to co-locate and tightly synchronize a large number of accelerators.

In this work, we take inspiration from literature on Federated Learning to address the above mentioned difficulties. In Federated Learning, there are k workers, each operating on their own island of devices, each consuming a certain partition of the data, and each updating a model replica. Such workers perform some amount of work locally, and then exchange gradients every H steps to get their model replica back in sync.

We propose a variant of the popular Federated Averaging (FedAvg) algorithm, or a particular instantiation with a momentum-based optimizer as in the FedOpt algorithm, whereby the number of inner steps is large, the inner optimizer is replaced with AdamW, and the outer optimizer with Nesterov Momentum for best performance. This combination enables us to address the shortcomings mentioned above, because: (a) while each worker requires co-located devices their number is roughly k times smaller than the total, (b) workers need not to communicate at each and every single step but only every H steps which can be in the order of hundreds or even thousands, and (c) while devices within an island need to be homogeneous, different islands can operate with different device types. We dub this approach Distributed Low-Communication (DiLoCo) training.

In a large-batch training setting with overtraining, our empirical validation on the C4 dataset demonstrates that DiLoCo can achieve even better performance (as measured in perplexity) than a fully synchronous model, while communicating 500 times less. DiLoCo is capable of effectively utilizing several islands of devices at training time, despite low bandwidth connectivity among these islands. Finally, at inference time the resulting model has the same size and speed as a model trained in fully synchronous mode.

Our experiments show that DiLoCo is robust against different data distributions used by local workers and frequency of global parameter updates. Finally, DiLoCo exhibits robustness to island failure, and nicely leverages islands whenever these become available.

## 2. DiLoCo Algorithm

We assume that we have a base model architecture (e.g., a transformer) with parameters θ. We denote a training dataset as D = {(x, y), ...} with x and y being respectively the input data and target. In language modeling, the input is a sequence of tokens and the target is the input sequence shifted by one. When the dataset is split across multiple shards, we denote the i-th shard with D_i.

DiLoCo training proceeds as follows. First, we start from an initial model with parameters θ^(0), which can be initialized at random or using a pretrained model. We also have k workers each capable of training a model replica and k shards of data, one for each worker.

There are two optimization processes. There is an outer optimization, which consists of T outer steps. At each outer step t, outer gradients from each worker are gathered, averaged and sent to an outer optimizer to update the shared copy of the parameters. Afterwards, this shared copy of the parameters is re-dispatched to each local worker.

Within each phase, each worker performs independently and in parallel its own inner optimization for H steps using an inner optimizer. Each worker samples data from its own shard, and updates its own local copy of the parameters. Note that the inner optimization consists of H >> 1 steps; for instance, several hundred steps. Therefore, communication across workers is minimal.

Once all workers have completed their inner optimization step, the delta in parameters space spanning multiple inner steps is computed per worker and averaged in the outer gradient which is used to update the shared copy of the parameters, which is then used as starting point for the next round of inner optimizations. This is the only time when communication among workers is required, and it happens once every H inner optimization steps. In total, a worker trains for N = T × H inner steps.

In this work, we use as inner optimizer AdamW, which is the most widely used optimizer for transformer language models. As for the outer optimizer we use Nesterov momentum because it gave the best convergence empirically. When the outer optimizer is SGD, then the outer optimizer is equivalent to classical Federated Averaging. If the total number of outer optimization steps T is further set to 1, then DiLoCo reduces to "souping". Finally, if the number of inner optimization steps H is set to 1 and the inner optimizer is SGD, DiLoCo is equivalent to large-batch training with data-parallelism.

Overall, DiLoCo can be interpreted as a data parallelism method that requires very little communication, and therefore, it can scale to workers that are poorly connected, e.g., workers placed in very distant geographic regions. Workers could of course use standard data and model parallelism for their inner optimization.

[Figure 1: DiLoCo Algorithm - First, a pretrained model θ^(0) is replicated k times and each worker θ^(1)_i trains a model replica on its own shard of data for H steps independently and in parallel. Afterwards, workers average their outer gradients and an outer optimizer updates the global copy of the parameters θ^(1). This will then be re-dispatched to the workers. The process repeats T times.]

## 3. Experiments

### 3.1 Setup and Main Results

We consider a language modeling task on the C4 dataset, a dataset derived from Common Crawl. We report perplexity on the validation set against number of steps used at training time. The total number of steps is set to 88,000. We consider three model sizes, all decoder-only transformers adapted from the Chinchilla architecture. Model configurations: 60M (3 layers, 896 hidden dim, 16 heads), 150M (12 layers, 896 hidden dim, 16 heads), and 400M (12 layers, 1536 hidden dim, 12 heads).

We perform experiments both in the i.i.d. and non-i.i.d. settings, meaning when the data distribution of the shards D_i is the same for all i and when these are different like in heterogeneous federated learning. Since the latter is a more challenging use case, we use this setting by default except when indicated otherwise. Similarly, by default all training experiments start from a transformer language model pretrained for 24,000 steps on the same training set.

In our experiments we have searched over the hyper-parameters of the outer optimizer (e.g. learning rate, momentum, etc.). We use a sequence length of 1,024 tokens and a batch of size 512 but otherwise we left unchanged the inner optimization and model architecture.

### 3.2 Main Result

After pretraining a 150M baseline for 24,000 training steps on C4, we compare networks finetuned for an additional 64,000 steps using the same batch size, and using 8 times bigger batch size, and a transformer model trained from scratch. DiLoCo using 8 workers yields lower perplexity, even compared to the baseline using 8 times bigger batch size, while being 8 times faster in wall-clock time and communicating 500 times less.

[Figure 2: Main result - Perplexity vs steps. DiLoCo (blue) with 8 workers achieves lower perplexity than baselines while communicating 500x less.]

**Trade-offs of various training algorithms:**

| Model | Communication | Time | Compute & Data | Perplexity |
|-------|---|---|---|---|
| Baseline | 0 | 1x | 1x | 16.23 |
| Baseline, 8x batch size with data parallelism | 8x N | 1x | 8x | 15.30 |
| Baseline, 8x batch size with microbatching | 0 | 8x | 8x | 15.30 |
| Baseline, 8x updates | 0 | 8x | 8x | 14.72 |
| DiLoCo | 8x N/H | 1x | 8x | 15.02 |

For the same time and amount of compute, we can compare the second baseline and DiLoCo. The former communicates gradients at each time step (N total steps), while DiLoCo communicates H=500 times less (and is amenable to distributed training) while also reaching better generalization performance.

### 3.3 Ablations

#### Number of Pretraining Steps

For all experiments here we perform 88,000 training steps. A subset of those steps are done during the pretraining stage, and the remainder with DiLoCo. We study the impact of the number of pretraining steps on the final generalization performance in a non-i.i.d. data regime. We compare no pretraining, pretraining of 12k, 24k, and 48k steps. We observe that starting DiLoCo before 24k steps achieves a similar final perplexity, demonstrating the robustness of the approach. Interestingly, performance is not degraded even when starting from a randomly initialized network.

[Figure 3: Impact of number of pretraining steps in non-i.i.d. setting. DiLoCo can be initialized from a pretrained model or from scratch with minimal degradation.]

#### Communication Frequency

In order to scale up distributed training across a set of poorly connected machines, the frequency of communication needs to be reduced. We vary the communication frequency for a 150M transformer, in the non-i.i.d. data regime, from H=50 steps to H=2000 steps. In general, we observe that communicating more frequently improves generalization performance. However, communicating more frequently than H=500 steps leads to diminishing returns. Moreover, the performance degradation is very mild up to H=1000 steps. For instance, when H=1000 the perplexity increases by only 2.9% relative to H=50, despite communicating 20x less. Based on these considerations, for all remaining experiments we choose H=500 as this strikes a good trade-off between generalization performance and communication cost.

[Figure 4: Varying communication frequency every H={50, 100, 250, 500, 1000, 2000} steps in non-i.i.d. setting. Performance is robust to infrequent communication.]

#### i.i.d. vs non-i.i.d. Data Regimes

We assess the effect that different data distributions have on the convergence of DiLoCo. In the non-i.i.d. setting we cluster with k-Means the entire training set using a pretrained model's last layer features. The i.i.d. setting is a random partitioning of the data. Despite the i.i.d. setting converging faster early on in training, the final generalization performance of the two settings is comparable. This demonstrates DiLoCo's strong robustness to data heterogeneity.

[Figure 5: i.i.d. vs non-i.i.d. data regimes. DiLoCo converges faster in i.i.d. setting but both attain similar final generalization.]

#### Number of Replicas

We investigate the impact of the number of replicas/clusters, assuming there are as many workers as there are shards of data. The results show that increasing the number of replicas improves generalization performance, but with diminishing returns when there are more than 8 workers. This finding applies to both i.i.d. and non-i.i.d. settings.

**Impact of number of replicas/clusters on evaluation perplexity:**

| Number of replicas | i.i.d | non-i.i.d |
|---|---|---|
| 1 | 16.23 | 16.23 |
| 4 | 15.23 | 15.18 |
| 8 | 15.08 | 15.02 |
| 16 | 15.02 | 14.91 |
| 64 | 14.95 | 14.96 |

## 4. Related Work

DiLoCo builds upon several streams of prior work in distributed optimization and federated learning. The most closely related work is Federated Averaging (FedAvg) and its variants with advanced optimizers (FedOpt). Our contribution is demonstrating that with large number of inner steps, carefully chosen optimizers (AdamW for inner, Nesterov momentum for outer), and modern architectural choices (transformers, Chinchilla scaling), the approach works exceptionally well for language model training.

Other related approaches include local SGD, post-local SGD, and methods for training on heterogeneous data. Our work differs in its focus on extremely low-communication regimes and its empirical validation at scale on modern language models.

## 5. Limitations

While DiLoCo demonstrates strong results, there are several limitations to consider:

1. **Communication overhead not eliminated:** While communication is reduced 500x, for truly offline islands the periodic synchronization still requires bandwidth.

2. **Potential for asynchronous training:** Future work could explore fully asynchronous variants where islands can update at different rates.

3. **Limited to certain model architectures:** Validation is primarily on transformer language models. Applicability to other architectures requires further study.

4. **Data heterogeneity limits:** While robustness is demonstrated, extremely heterogeneous distributions may require algorithmic adjustments.

## 6. Conclusions

We have proposed DiLoCo, a distributed optimization algorithm that enables training of large language models across islands of devices that are poorly connected. By using a large number of inner local steps with AdamW optimization and Nesterov momentum for outer optimization, we demonstrate that training can proceed with 500x less communication while achieving equal or better generalization performance.

The key insight is that the federated averaging framework, when instantiated with careful choices of optimizers and inner step counts, naturally addresses the infrastructure challenges of large-scale training. This opens new possibilities for leveraging distributed compute resources that cannot be easily co-located or tightly synchronized.

Our results on the C4 dataset with 60M, 150M, and 400M parameter models demonstrate robustness to data heterogeneity, dynamically available resources, and a wide range of communication frequencies. We believe DiLoCo provides a practical pathway for distributed training across geographic regions and independent compute clusters.

## Acknowledgements

We would like to thank Ross Hemsley, Bo Liu, Amal Rannen-Triki, and Jack Rae for their valuable feedback.
