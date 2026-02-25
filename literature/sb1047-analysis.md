---
title: "California SB 1047: The Safe and Secure Innovation for Frontier Artificial Intelligence Models Act"
author: "Various (Carnegie Endowment, Brookings, Wikipedia, legal analyses)"
year: 2024
source_url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB1047"
source_format: html
downloaded: 2026-02-10
encrypted: false
notes: "Analysis of California's SB 1047, proposed legislation to regulate frontier AI models. Covers the bill's provisions, political dynamics, supporters and opponents, Governor Newsom's veto rationale, and lessons for AI safety governance."
---

# California SB 1047: The Safe and Secure Innovation for Frontier Artificial Intelligence Models Act

## Overview

SB 1047, formally titled "The Safe and Secure Innovation for Frontier Artificial Intelligence Models Act," was a California state bill aimed at regulating the development of large-scale artificial intelligence models to prevent catastrophic risks.

**Timeline**:
- Introduced: February 7, 2024
- Passed Senate: May 21, 2024 (vote: 32-1)
- Significantly amended: August 15, 2024
- Passed Assembly: August 28, 2024
- Vetoed by Governor Newsom: September 29, 2024

**Author**: State Senator Scott Wiener (D-San Francisco)

## What the Bill Proposed

### Scope: "Covered Models"

SB 1047 would have applied to "covered models" - AI models meeting specific thresholds:

**Initial Training Cost Threshold**: Models trained using computing power costing over $100 million (in 2024, adjusted for inflation in subsequent years)

**Fine-Tuning Threshold**: Models fine-tuned using computing power costing over $10 million that resulted in a new covered model

**Rationale**: These thresholds were designed to capture only the most powerful "frontier" AI models from leading AI labs (OpenAI, Anthropic, Google DeepMind, Meta), not smaller or specialized models.

### Core Requirements

Developers of covered models would be required to:

#### 1. Exercise Reasonable Care

Implement reasonable care to prevent the covered model from posing an "unreasonable risk of causing or materially enabling a critical harm."

**Critical Harm Defined**:
- Mass casualties or at least $500 million in damages in a single incident or multiple related incidents
- Specifically including:
  - Creation or use of chemical, biological, radiological, or nuclear weapons
  - At least $500 million in damage through a single incident or set of closely related incidents caused by AI systems conducting cyberattacks on critical infrastructure

#### 2. Safety and Security Protocols

Before beginning initial training or fine-tuning of a covered model:

**Written Safety and Security Protocol** addressing:
- Cybersecurity protections to prevent unauthorized access, misuse, or theft
- Operational security measures protecting model weights
- Technical capability assessment methodology
- Testing procedures to identify whether the model presents unreasonable risk of critical harm

**Compliance Mechanisms**:
- Redacted version of safety protocol published on developer's website
- Attestation to the Attorney General under penalty of perjury that reasonable care was exercised
- Annual updates to safety protocols

#### 3. Kill Switch / Shutdown Capability

Developers must implement the capability to promptly enact a full shutdown of a covered model, including:
- Stopping further training
- Preventing further access to model by third parties
- Must be able to activate shutdown without requiring any third party's cooperation

#### 4. Pre-Deployment Testing

Before making a covered model publicly available or providing it to a third party:

- Conduct adversarial testing (red-teaming) by a qualified third party
- Assess if the model can cause or materially enable critical harm
- Only deploy if the covered model does not pose unreasonable risk

#### 5. Incident Reporting

If a covered model causes a critical harm or is used in a manner that poses imminent threat of critical harm:

- Report to the Attorney General within 72 hours
- Provide description of incident and steps being taken to address it

### Enforcement and Penalties

**Enforcement Authority**: California Attorney General

**Whistleblower Protections**: Employees could report violations without fear of retaliation

**Penalties for Violations**:
- Injunctive relief to prevent ongoing violations
- Civil penalties determined by courts
- No criminal liability (civil enforcement only)

**Pre-Harm Enforcement**: Critically, violations could be pursued even before actual harm occurred if developers failed to implement required safeguards

### Exemptions and Limitations

The bill would NOT have applied to:

- Developers using open-source covered models for research, fine-tuning, or deployment (liability remained with the original developer)
- Models below the cost thresholds
- Federal government AI systems
- Models used solely within a single organization without being made available to others

## August 2024 Amendments

Senator Wiener made significant amendments in August 2024 in response to industry concerns:

**Changes Made**:
- Removed potential criminal liability provisions
- Narrowed scope of what constitutes a covered model
- Clarified that developers are not liable for how others misuse their models
- Modified enforcement mechanisms to focus on failure to implement safeguards rather than outcomes
- Added more flexibility in how safety protocols could be structured
- Clarified that open-source developers had limited liability

**Rationale**: Wiener stated these changes addressed misrepresentations and legitimate concerns while maintaining the core safety framework.

## Political Dynamics

### Supporters

**AI Safety Organizations**:
- Center for AI Safety
- AI safety researchers and organizations focused on existential risk

**Prominent AI Researchers**:
- Geoffrey Hinton (2024 Nobel Prize in Physics, "Godfather of AI")
- Yoshua Bengio (Turing Award winner, pioneer of deep learning)
- Stuart Russell (UC Berkeley, author of leading AI textbook)

**AI Company Employees**:
- At least 113 current and former employees of OpenAI, Google DeepMind, Anthropic, Meta, and xAI signed a letter to Governor Newsom in support
- Many cited concerns about safety practices at their own companies

**Technology Leaders**:
- Elon Musk (despite his companies' AI work)
- Several startup founders

**Other Supporters**:
- The Los Angeles Times editorial board
- Consumer protection organizations
- Some labor unions

**Anthropic**:
- Initially expressed concerns but ultimately wrote a nuanced letter supporting the bill with suggested modifications
- Noted benefits of establishing clear safety standards
- Emphasized importance of having some regulation rather than none

### Opponents

**Major AI Companies**:
- **OpenAI**: Argued the bill would stifle innovation and could not effectively regulate AI safety
- **Google/Google DeepMind**: Opposed the bill as premature and overly prescriptive
- **Meta**: Cited concerns about impact on open-source AI development

**Technology Industry Groups**:
- Chamber of Progress
- TechNet
- Other Silicon Valley advocacy organizations

**Political Figures**:
- **Nancy Pelosi** (then-House Speaker): Publicly opposed, arguing the bill would hinder innovation and suggested federal regulation was more appropriate
- Several California Congressional representatives

**Academic Critics**:
- **Andrew Ng** (former Google Brain founder, Stanford faculty): Argued the bill was based on speculative risks and would harm AI research
- **Fei-Fei Li** (Stanford HAI co-director): Raised concerns about impact on academic research and startups
- **Yann LeCun** (Meta Chief AI Scientist, Turing Award winner): Dismissed catastrophic AI risk concerns as unfounded

### Nature of the Debate

The debate over SB 1047 revealed deep divisions:

**Philosophical Divide**:
- **Precautionary approach**: We should implement safeguards now for frontier AI given potential catastrophic risks, even if those risks are uncertain
- **Innovation-first approach**: Regulation should wait until risks are clearly demonstrated; premature regulation will harm beneficial AI development

**Factual Disputes**:
- Disagreement over whether current or near-term AI models pose catastrophic risks
- Debate over whether proposed safety measures are technically feasible
- Conflicting claims about economic impact on California's AI industry

**Political Tensions**:
- California vs. federal jurisdiction over AI regulation
- State economic interests vs. safety concerns
- Influence of major technology companies on policy

## Misrepresentations and Clarifications

According to analyses from Brookings and other sources, several common criticisms of SB 1047 were based on misrepresentations:

### Misrepresentation 1: Liability for Misuse

**Claim**: Developers would be liable for any harmful use of their models by third parties

**Reality**: The bill explicitly stated developers were NOT liable for how others used their models. Liability was only for failure to implement reasonable safeguards during development.

### Misrepresentation 2: Harm to Open Source

**Claim**: The bill would kill open-source AI development

**Reality**: The bill exempted developers who used open-source covered models for research, fine-tuning, or deployment. Only the original developer of an open-source covered model had compliance obligations.

### Misrepresentation 3: Stifling All AI Innovation

**Claim**: The bill would prevent AI development in California

**Reality**: The bill only applied to models costing over $100 million to train - a small number of frontier models from well-resourced companies. The vast majority of AI research and development would have been unaffected.

### Misrepresentation 4: Impossible Technical Requirements

**Claim**: The safety requirements were technically impossible to implement

**Reality**: The bill required "reasonable care" and safety protocols that were practical for the developers to implement. Leading AI safety researchers argued these were feasible for companies already spending $100M+ on training.

### Misrepresentation 5: California Regulating the World

**Claim**: California was trying to regulate AI globally

**Reality**: The bill only applied to models that would be deployed in California. Developers could choose not to offer their models in California if they didn't want to comply.

## Governor Newsom's Veto

On September 29, 2024, Governor Gavin Newsom vetoed SB 1047.

### Veto Message Key Points

**Primary Rationale**: Focus on cost threshold rather than risk

> "While well-intentioned, SB 1047 does not take into account whether an AI system is deployed in high-risk environments, involves critical decision-making or the use of sensitive data. Instead, the bill applies stringent standards to even the most basic functions — so long as a large system deploys it."

**Concern About False Security**:

> "I do not believe this is the best approach to protecting the public from real threats posed by the technology... A California-only approach may well be warranted—especially absent federal action by Congress—but it must be based on empirical evidence and science."

**Smaller Models Can Pose Risks**:

Newsom argued that the bill's focus on high-cost, large-scale models would provide a false sense of security, emphasizing that smaller, specialized models could pose equally significant risks depending on deployment context.

**Commitment to Action**:

Despite the veto, Newsom announced:
- Collaboration with leading AI researchers to develop guardrails
- Working on alternative approaches to AI safety regulation
- Signed other AI-related bills (AB 2013 requiring transparency for generative AI; AB 2885 requiring watermarking of AI-generated content)

### Reaction to Veto

**Supporters of Veto**:
- Technology industry groups praised the decision
- Some academics agreed with the reasoning about context-dependent risk
- Critics of the bill claimed vindication

**Opponents of Veto (Bill Supporters)**:
- Senator Wiener expressed disappointment but vowed to continue working on AI safety legislation
- AI safety researchers argued the perfect should not be the enemy of the good
- Some characterized it as a victory for industry lobbying over public safety
- Noted that Newsom's concern about smaller models could have been addressed through amendments rather than veto

## Lessons for AI Safety Governance

SB 1047's journey from introduction to veto revealed important dynamics in AI governance:

### Lesson 1: Industry Influence is Substantial

Major AI companies mobilized significant resources to oppose the bill:
- Direct lobbying of legislators and governor
- Public communications campaigns
- Mobilizing academic allies
- Framing concerns in terms of innovation and competitiveness

This influence was decisive in shaping both amendments and the ultimate veto.

### Lesson 2: Catastrophic Risk Framing is Contested

The debate highlighted that:
- Many influential technologists reject the premise that AI poses catastrophic risks
- Even among those who accept some risk, there's disagreement about appropriate policy responses
- Catastrophic risk concerns have not achieved consensus status among policymakers

### Lesson 3: Federal vs. State Tension

Arguments about California acting alone without federal coordination resonated with the Governor. This suggests:
- Federal AI legislation (or lack thereof) significantly constrains state action
- States may defer to federal government even when Congress is not acting
- Industry can leverage federalism concerns to block state regulation

### Lesson 4: Technical Thresholds are Controversial

The $100 million compute cost threshold was criticized as:
- Arbitrary (why not $50M or $200M?)
- Potentially obsolete quickly (costs decline over time)
- Not capturing actual risk (context-dependent deployment matters more than training cost)

Future proposals need more robust justification for specific thresholds or alternative approaches.

### Lesson 5: Open Source Creates Unique Challenges

Despite exemptions for open-source users, concerns about impact on open-source development were prominent. This reflects:
- Strong ideological commitment to open source in tech community
- Uncertainty about how regulation interacts with open development models
- Need for clear frameworks that support both safety and openness

### Lesson 6: Safety Requirements Need Clear Justification

Requirements like "kill switch" capability and pre-deployment testing faced criticism as:
- Potentially ineffective (e.g., can you really prevent all access to a widely distributed model?)
- Vague about implementation (what counts as adequate testing?)
- Not clearly connected to preventing specific harms

More concrete, technically justified requirements may be more defensible.

### Lesson 7: Timing and Proof Matter

The bill was criticized as "premature" - acting before clear evidence of catastrophic risk. This "wait and see" framing is powerful, even though it contradicts precautionary approaches common in other domains (environmental protection, pharmaceutical safety, etc.).

Advocates for AI safety regulation need to address this timing question explicitly.

### Lesson 8: Coalition Building is Critical

The bill had support from:
- AI safety advocates
- Some prominent researchers
- Consumer groups

But lacked support from:
- Major AI companies (except Anthropic's qualified support)
- Much of the academic AI research community
- Key political figures

Broader coalition building earlier in the process might have changed outcomes.

### Lesson 9: Media and Public Understanding are Weak

Public discourse on SB 1047 was characterized by:
- Widespread misunderstandings of what the bill actually required
- Misleading characterizations that went uncorrected
- Limited engagement from general public (mostly insider debate)

Future efforts need better communication strategies.

### Lesson 10: Compromise May Not Save a Bill

Senator Wiener made substantial amendments in August 2024 to address industry concerns. The bill still failed. This suggests:
- Some opponents may be immovable regardless of amendments
- Compromise can reduce support from original advocates without gaining opponents
- Strategic considerations about when to compromise and when to hold firm

## Comparison to Other Regulatory Efforts

### EU AI Act

**Similarities**:
- Risk-based approach (though EU's is more comprehensive)
- Focus on high-capability systems
- Requirements for safety testing and documentation

**Differences**:
- EU Act is comprehensive law, not targeted at frontier models only
- EU has enforcement mechanisms across member states
- SB 1047 was narrower in scope but more specific about catastrophic risks

**Context**: Opponents cited the EU AI Act as evidence that regulation was possible, while also criticizing SB 1047 for being different from the EU approach. This created a rhetorical challenge for bill supporters.

### Biden's Executive Order 14110

**Similarities**:
- Compute thresholds for identifying high-risk models
- Red-teaming requirements
- Reporting to government

**Differences**:
- Federal EO had broader scope across government
- SB 1047 had more specific safety protocol requirements
- EO was executive action; SB 1047 would have been state law

**Context**: The existence of federal action (EO 14110) was used both to support ("federal government agrees this is important") and oppose ("California shouldn't act alone") SB 1047. The subsequent rescission of EO 14110 by Trump in January 2025 arguably vindicated the case for state action, but came after the veto.

### UK AI Safety Approach

The UK took a non-statutory, principles-based approach through its AI Safety Institute rather than binding legislation. This was cited by opponents as an alternative to SB 1047's regulatory approach.

Supporters of SB 1047 argued that voluntary approaches have failed to constrain other technology risks and are unlikely to work for AI.

## Current Status and Future Prospects

### Immediate Aftermath

Following the veto:
- Senator Wiener indicated intent to introduce new AI safety legislation
- Other states have continued to explore AI regulation
- California has enacted narrower AI bills on specific issues (transparency, watermarking, deepfakes)

### Federal Preemption

The Trump administration's December 2025 executive order seeking to preempt state AI laws has created new challenges:
- Federal government now actively opposing state AI regulation
- Legal uncertainty about whether California could pass similar bills
- Political climate less favorable to AI safety regulation

### Ongoing Influence

Despite being vetoed, SB 1047 has had significant influence:
- Established a detailed model for how to regulate frontier AI
- Educated policymakers and public about AI risks
- Created a template that other jurisdictions can learn from or adapt
- Demonstrated the political challenges of AI safety legislation

### Alternative Approaches

In the wake of SB 1047's failure, various alternatives have been proposed:

**Sector-Specific Regulation**: Rather than regulating AI models themselves, regulate their use in specific high-risk domains (healthcare, criminal justice, finance, etc.)

**Voluntary Industry Standards**: Encourage or incentivize industry to adopt safety practices without mandating them through law

**Liability Reform**: Change liability rules so developers face consequences for harms from their AI systems, creating incentives for safety without specific prescriptive requirements

**International Coordination**: Focus on international agreements rather than unilateral state or national action

**Empirical Triggers**: Establish monitoring systems and only implement regulation if/when specific risk thresholds are crossed

Each of these has its own challenges and may face similar political obstacles to SB 1047.

## Implications for X-Risk Communication

From an existential risk communication perspective, SB 1047's failure highlights several challenges:

### Challenge 1: Expert Disagreement is Highly Visible

The fact that prominent AI researchers were on both sides of the debate makes it easy for policymakers and public to dismiss catastrophic risk concerns as speculative or contested.

### Challenge 2: Near-Term Harms Dominate Discussion

Even when discussing frontier AI, debates often focused on near-term issues (bias, misinformation, job displacement) rather than catastrophic or existential risks.

### Challenge 3: Economic Arguments are Powerful

Concerns about harming California's AI industry and losing competitiveness to other states/countries proved very influential.

### Challenge 4: Abstraction is a Disadvantage

Concrete harms (discrimination, privacy violations) are easier to communicate than abstract catastrophic risks. "Mass casualties OR $500 million in damages" is precise but still feels hypothetical compared to documented current harms.

### Challenge 5: Trust in Regulation is Low

Both industry and some public interest advocates distrust government's ability to effectively regulate complex technology, creating skepticism about whether proposed requirements would actually improve safety.

## Key Figures and Organizations

### Supporters

- **Scott Wiener**: Bill author, California State Senator
- **Geoffrey Hinton**: "Godfather of AI," vocal about AI risks
- **Yoshua Bengo**: Pioneer of deep learning, AI safety advocate
- **Stuart Russell**: UC Berkeley, author of standard AI textbook
- **Center for AI Safety**: Leading AI safety research and advocacy organization
- **Employees of leading AI companies**: Over 100 signed support letter

### Opponents

- **Nancy Pelosi**: Then-House Speaker, influential California Democrat
- **Andrew Ng**: Former Google Brain founder, Stanford faculty
- **Fei-Fei Li**: Stanford HAI co-director
- **Yann LeCun**: Meta Chief AI Scientist
- **OpenAI, Google, Meta**: Major AI companies
- **Chamber of Progress**: Tech industry advocacy group

### Nuanced Positions

- **Anthropic**: Supported with modifications, written analysis of pros and cons
- **Gavin Newsom**: Vetoed but committed to alternative AI safety measures

## Technical Context

### What Models Would Have Been Covered (2024)

Based on the $100 million training cost threshold:
- GPT-4 (OpenAI)
- Claude 3 Opus (Anthropic)
- Gemini Ultra (Google)
- Llama 3 largest variants (Meta)
- Estimated 5-10 models total as of 2024

### What Would NOT Have Been Covered

- The vast majority of AI research and development
- Smaller language models
- Specialized AI systems
- Most commercial AI applications
- Academic research projects
- Startup AI development

### Trajectory of Coverage

Due to declining compute costs, the $100 million threshold (with inflation adjustment) would likely cover more models over time. This "expanding coverage" was both cited as a feature (future-proofing) and a bug (unclear scope) by different sides.

## Document Sources

This analysis synthesizes information from:
- Legislative text of SB 1047 and amendments
- Brookings Institution analysis
- Carnegie Endowment for International Peace analysis
- Wikipedia article on the Safe and Secure Innovation for Frontier Artificial Intelligence Models Act
- Governor Newsom's veto message
- Public letters from supporters and opponents
- News coverage from multiple outlets
