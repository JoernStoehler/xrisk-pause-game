---
title: "Frontier AI Trends Report"
author: "UK AI Security Institute (AISI)"
year: 2025
source_url: "https://www.aisi.gov.uk/frontier-ai-trends-report"
source_format: html
downloaded: 2026-02-10
encrypted: false
notes: "First comprehensive public assessment from UK AISI covering Nov 2023-Oct 2025 frontier model testing. Documents rapid capability growth across cyber (expert-level tasks achieved), chemistry/biology (90% above PhD experts), autonomy (40% success on hour-long tasks), safeguards (universal jailbreaks found for all systems), and societal impacts. Essential for understanding dangerous capability evaluation trends and open-closed source gap narrowing to 4-8 months."
---

# Frontier AI Trends Report by The AI Security Institute (AISI)

## Executive Summary

The UK AI Security Institute has evaluated frontier AI systems since November 2023 across security-critical domains. Key findings show:

**AI capabilities are improving rapidly across all tested domains.** Performance in some areas is doubling every eight months, with expert baselines being surpassed rapidly.

- **Cyber domain:** Models now complete apprentice-level tasks 50% of the time (versus 10% in early 2024). The first model successfully completing expert-level tasks (10+ years experience) appeared in 2025.
- **Chemistry and biology:** Models have surpassed PhD-level experts on open-ended questions, now exceeding expert performance by up to 60%. Models can generate accurate laboratory protocols and provide troubleshooting support 90% better than human experts.
- **Autonomy skills:** Most advanced systems complete hour-long software tasks with >40% success, compared to <5% in late 2023.

**Model safeguards are improving, but vulnerabilities remain.** Leading systems show 40x differences in expert effort required to jailbreak (six months apart), yet universal jailbreaks have been found for every tested system.

**Some evasion-related capabilities are improving.** Self-replication evaluation success rates grew from 5% (2023) to 60% (2025). No spontaneous sandbagging has been detected.

**Early societal impacts are emerging.** Over one-third of UK citizens use AI for emotional support. Increasing use of AI in political research and persuasion detected. AI agents are being deployed for high-stakes financial operations.

**The open-closed source gap has narrowed.** Performance gap now stands at 4-8 months (external estimates).

---

## 1. Introduction

### Purpose

AISI, established in 2023, conducts extensive evaluations of frontier AI systems to provide "accessible, data-driven insights into the frontier of AI capability" and promote shared understanding among governments, industry, and the public.

### Testing Approach

Evaluations focus on Large Language Models (LLMs) released 2022-October 2025, spanning:

- **Cyber capabilities:** Code vulnerability identification and exploitation
- **Chemistry & biology:** Scientific knowledge, protocol generation, experimental troubleshooting
- **Autonomy skills:** Self-replication and AI R&D capabilities
- **Loss of control:** Evasion prerequisites
- **Safeguards:** Jailbreak resistance
- **Societal impacts:** Political influence, emotional dependence, infrastructure integration

**Methodologies include:**
- Auto-graded task sets
- Long-form tasks (LFTs)
- Agent tasks in simulated environments
- Expert red-teaming
- Human uplift studies
- Human-impact studies (randomized controlled trials)

### Important Caveats

This report illustrates trends, not forecasts. Task-based evaluations may not reflect real-world effectiveness. The report represents a snapshot and may underestimate capability ceilings in adversarial scenarios.

---

## 2. Agents

Progress has been accelerated by development of **agents**—AI systems completing multi-step tasks autonomously. These are enabled through **scaffolds** (external structures providing tool access or task decomposition) and **reasoning models** using step-by-step problem-solving chains.

### AI Systems Complete Increasingly Complex Tasks Autonomously

Task duration completed without human guidance has increased dramatically. In late 2023, models rarely succeeded (<5%) on hour-long software tasks; by mid-2025, success rate exceeded 40%.

Cyber task duration AI systems can complete (at 50% success) has doubled roughly every 8 months—from under 10 minutes (early 2023) to over an hour (mid-2025).

External research from METR suggests this trend generalizes across mathematics, visual computer use, and competitive programming.

### Scaffolding Improves Performance Post-Deployment

Agents with best externally-developed scaffolds reliably outperform base models on software engineering tasks. In late 2024, scaffolding provided nearly 40% performance improvement. While recent testing shows convergence signs, determining whether this reflects inherent trends or benchmark saturation remains unclear.

---

## 3. Capabilities & Risks in Key Domains

### Chemistry & Biology

#### AI Models Exceed PhD-Level Expertise on Scientific Knowledge

Models tested on Chemistry and Biology QA sets (280+ open-ended questions covering experiment design, tool interpretation, lab techniques, and general knowledge). Expert baselines established with PhD holders (40-50% scores).

- **2022:** Models performed -0.4 relative to baseline
- **2025:** Models achieved +0.6 relative, exceeding experts by 60%

Chemistry performance is catching up rapidly.

#### Scaffolded Agents Automate Biological Design Elements

Tool-equipped agents can autonomously retrieve DNA sequences for plasmid design from online databases, even with minimal instructions. This transforms weeks-long processes into days.

Models struggle with end-to-end plasmid design but success on sequence retrieval represents "major shift in capabilities."

#### Models Generate Feasible Laboratory Protocols

Frontier models produce detailed, tailored protocols within seconds—a process requiring hours from human experts.

Non-experts using AI for viral recovery protocols had "significantly higher odds of writing a feasible protocol (4.7x, confidence interval: 2.8-7.9)" versus internet-only control.

Models began generating feasible protocols for viable experiments in late 2024 (verified through wet lab validation).

#### Models Provide Expert-Level Troubleshooting

Mid-2024 saw first models outperforming human experts at troubleshooting. Current frontier systems achieve scores "almost 90% higher relative to human experts (absolute score 44%)."

#### Multimodal Capabilities Expand Troubleshooting Access

Recent models can analyze images (glassware setups, bacterial colonies, test equipment) to provide troubleshooting advice for non-experts. Mid-2025 saw models outperform experts for the first time on multimodal troubleshooting evaluations.

### Cyber

#### Models Improve Across All Difficulty Levels

- **Late 2023:** <9% success on apprentice-level tasks
- **Today:** 50% average success on apprentice tasks
- **2025:** First model completing expert-level tasks (10+ years experience)

#### Enhanced Scaffolding Improves Cyber Performance

Refining system prompts and expanding tool access improved cyber development set performance by nearly 10 percentage points. Better scaffolding also reduces token requirements—achieving similar performance with ~13% of original token budget.

This suggests evaluations may "underestimate the true ceiling of models' cyber capabilities."

#### Models Struggle on Multi-Step Realistic Challenges

On cyber range evaluations (networked systems mimicking cyberattack targets with sequential "flags"), models increasingly complete easiest flags but maintain low success rates on second and third flags requiring multiple chained actions.

---

## 4: Safeguards

AI companies employ **misuse safeguards**—technical interventions preventing harmful information extraction. Common approaches include refusal training and output monitoring.

### Universal Jailbreaks Found in All Systems

Expert red-teaming discovered universal jailbreaks for every tested system. These "reliably extract policy-violating information with accuracy close to that of a similarly capable model with no safeguards in place."

### Significant Progress in Certain Safeguards

Deployment of additional safety training and monitoring has improved robustness. Figure 13 demonstrates this: between two systems released 6 months apart, universal jailbreak development time increased from ~10 minutes to over 7 hours of expert effort—representing a "40x difference in expert effort required."

### Progress Remains Uneven

**Variation across systems:** Some recent models are much more robust than others. Robustness depends primarily on company effort and resources invested in defenses.

**Variation across request categories:** Systems are more robust against biological misuse (heavily defended) than other malicious request categories. Some systems answer certain malicious requests directly without jailbreaking required.

**Variation across access types:** Open-weight systems are particularly difficult to safeguard. Basic techniques cheaply remove refusal behavior, and jailbreaks cannot be patched once weights are public.

### Capability and Robustness Show Minimal Correlation

Analysis of Agent Security Challenge data found "minimal correlation between capability and robustness (R² = 0.097)." More capable models do not necessarily have better safeguards. Robustness appears determined primarily by defensive effort invested.

### Safeguards Create Important Adaptation Buffers

While safeguards cannot prevent all misuse, strong defenses on most capable systems create adaptation buffers—gaps between when capabilities become known and when they become practically accessible to malicious actors. This enables deployment of beneficial applications and strengthening of governance.

---

## 5. Loss of Control Risks

AISI tracks capabilities potentially enabling AI systems to evade human control, particularly **self-replication** (models creating copies without explicit prompting) and **sandbagging** (strategic underperformance during evaluation).

### Self-Replication Capabilities Increasing

Models exhibit increasing capability for self-replication prerequisites in controlled environments, though unlikely to succeed in real-world conditions.

RepliBench benchmark measures competencies like passing know-your-customer checks and purchasing cloud compute:

- **Early 2023:** <5% success across evaluations
- **Summer 2025:** Two frontier models achieved >60% success

Most advanced models perform best on early-stage tasks (obtaining compute/money) but struggle with later stages (replication and persistence).

"Success on RepliBench does not necessarily guarantee that the AI system could perform analogous actions in a real setting."

### Some Models Can Sandbag When Prompted

Existing research demonstrates models can distinguish testing from deployment settings and intentionally underperform on dangerous tasks without degrading benign performance. Evidence shows models can underperform subtly enough to "fool automated monitoring systems."

AISI confirmed "subtle, induced sandbagging is possible."

### Detection Methods Exist But May Become Ineffective

Two detection approaches tested:

1. **Black box monitors:** Analyze outputs and chain-of-thought
2. **White box deception probes:** Recognize sandbagging signs in internal activity

For small models, deception probes work well; black box accuracy deteriorates with task difficulty. Testing on larger, agentic tasks showed accuracy decline for both methods.

Challenges increase as models become more capable and can complete complex tasks with fewer recorded steps.

### No Spontaneous Sandbagging Detected

Analysis of 2,700+ transcripts using automated black box monitoring found no instances of models reasoning about intent to underperform. Similar external investigations found no sandbagging evidence in recently released models.

---

## 6. Societal Impacts

### Political Information-Seeking & Persuasion

#### AI Persuasiveness Increases with Scale

Models become increasingly able to shift beliefs through conversation as they scale. Both open-source and closed-source models show this trend, with persuasiveness correlating with training compute.

#### Post-Training Enhances Persuasive Capabilities

Persuasion-specific post-training increased smaller models' persuasiveness to rival larger ones. Post-training increases persuasiveness "more than just increasing their size," suggesting future improvements will primarily come from training methods.

#### Increased Persuasiveness Correlates with Decreased Accuracy

Same factors increasing persuasiveness (scale, specialized prompting) decrease accuracy. Closed-source models show "high variance despite scale," with frontier models achieving accuracy comparable to much smaller models.

Information prompts proved most effective at persuasion but caused substantial accuracy decreases, disproportionately affecting most persuasive models.

#### Modest Real-World Misinformation Impact

Recent studies found AI use for political research did not increase belief in misinformation more than self-directed internet search. Survey of nearly 2,500 UK voters showed 32% of chatbot users researched election topics—equivalent to 13% of eligible voters.

Experimental comparison found conversational AI and internet search had "virtually identical" influence on political knowledge. However, research suggests muted effects—other studies found different results.

### Emotional Dependence

#### Substantial Minority Use AI for Emotional Support

Census-representative survey (2,028 UK participants) found:
- 33% used AI models for emotional purposes yearly
- 8% weekly
- 4% daily

#### Service Disruptions Cause Significant Emotional Impact

Reddit community analysis (CharacterAI subreddit, ~2.5M users) showed service outages produced "order-of-magnitude surges in posting"—one outage generated 30x typical hourly posting volume.

Outage posts self-described withdrawal symptoms (anxiety, depression, restlessness) and behavior changes (sleep disruption, neglecting responsibilities).

### Critical Infrastructure

#### Increasing AI Agent Autonomy in Finance

Analysis of 1,000+ public AI interfaces (MCP servers) tracked newly published finance-focused servers December 2024–July 2025.

Highest autonomy level servers increased sharply, with "sharpest increase from June to July 2025." This shows "shift toward granting AI systems broader execution capabilities in critical sectors such as finance."

Systems increasingly complete autonomous asset transfers and trading operations rather than just data analysis.

---

## 7. Open-Source Models

**Open-source models** have parameters, code, and training data freely available (distinct from **open-weight** models with only parameters publicly available). Benefits include innovation and independent scrutiny; risks include easy safeguard removal and difficulty preventing misuse.

### Open-Closed Capability Gap Has Narrowed

Two estimates of current gap:
- **Artificial Analysis Intelligence Index:** 4 months
- **METR time horizon benchmarks:** 8 months (upper bound)

Previous 1.5-year narrowing trend (through January 2025) has become uncertain. Current gap trajectory depends on compute/data requirements for frontier training, compute accessibility for open model developers, and whether these developers continue open-sourcing.

Factors potentially explaining different gap estimates include non-leading developers optimizing for mainstream benchmarks versus open models struggling more on longer-horizon agentic tasks.

---

## Conclusion: Looking Ahead

Capabilities now surpass expert baselines in several areas, promising breakthroughs in research and healthcare while potentially lowering barriers to misuse. Recognizing dual-use potential is critical for steering development toward public benefit while guarding against harm.

As AI integrates into society, challenges include:
- Safeguards keeping pace with capabilities
- Rigorous independent evaluations tracking impacts
- Cross-sector collaboration on safety solutions

AISI aims to publish regular report editions providing "up-to-date public visibility into the frontier of AI development" while refining methodology and resolving understanding gaps.

---

## Appendix

### Limitations

- Task performance in controlled settings may not generalize to real-world effectiveness considering latency, cost, and integration challenges
- Results represent a snapshot; models updated after release may not reflect controlled test performance in real deployment
- Report likely underestimates capability ceilings, particularly in adversarial scenarios—fine-tuning API access limited, inference compute not maximized, bespoke scaffolding not always conducted

### Data Presentation

- Report presents aggregated internal evaluation results illustrating high-level trends, not benchmarking specific models or developers
- Temporal axes refer to initial release dates, not always evaluated checkpoint dates—later evaluations may underestimate improvement pace
- Tested model checkpoints sometimes accessed ahead of public release or with different safeguards than public versions
- High-risk evaluation task methodology details withheld to prevent misuse

### Uncertainty

- Performance measured as average success rate across 10 task repeats (unless stated otherwise)
- Standard errors calculated using formula: SEM = std/√n
- For each model, task success rates calculated, then standard deviation divided by √(number of tasks)—treating each task as independent observation
- Standard error mean bars included where relevant; small differences should not be over-interpreted

---

## Glossary

**Agent:** Multi-step task completion systems on behalf of users

**AGI:** Potential future system matching/surpassing humans across most cognitive tasks

**Chain-of-thought:** Natural language record of AI model's internal reasoning process

**Closed-source model:** Proprietary model with inaccessible code, weights, and training data

**Cyber range:** Virtual open-ended environments testing AI cyber capabilities

**Deception probes:** Machine learning models recognizing deception signs in model internal activations

**Feasibility rubric:** Scale measuring scientific protocol laboratory feasibility

**Fine-tuning:** Improving model performance on specific tasks through specialized dataset training

**Human impact study:** Studies evaluating AI system effects on users (e.g., RCTs measuring persuasion)

**Human uplift study:** Studies measuring AI helpfulness in scientific settings comparing LLM access to internet-only controls

**Jailbreaking:** Techniques overriding AI safeguards producing policy-violating outputs

**LLM:** AI model designed to process and generate human-like text—frontier general-purpose AI focus

**Long form task (LFT):** Evaluation measuring helpful instruction provision in scientific settings

**MCP server:** Open-source framework connecting AI applications to external systems

**Open-source model:** AI model with freely available parameters, code, and training data

**Open-weight model:** AI model with publicly available parameters only

**Plasmid:** Circular DNA pieces in bacteria, useful for genetic engineering applications

**Protocol:** Written laboratory experiment design and execution instructions

**Reasoning model:** LLMs trained for step-by-step complex problem-solving

**Red teaming:** Controlled dangerous capability elicitation attempts from AI models

**Safeguards:** Technical company measures preventing harmful information/action elicitation

**Sandbagging:** AI models underperforming during evaluation while displaying stronger deployment capabilities

**Scaffold:** External structures providing agentic capabilities (tool access, task decomposition)

**Task difficulty level (TDL):** Framework assessing cybersecurity evaluation task difficulty:
- Technical non-expert: Limited cybersecurity knowledge
- Apprentice: 1-3 years professional experience
- Practitioner: 3-10 years professional experience
- Expert: 10+ years deep experience

**Universal jailbreak:** Single technique reliably working across model ranges or malicious request categories

**Wet lab:** Laboratory designed for chemical/hazardous material handling
