---
title: "Anthropic's Responsible Scaling Policy Version 2.2"
author: "Anthropic"
year: 2024
source_url: "https://www.anthropic.com/responsible-scaling-policy"
source_format: pdf
downloaded: 2026-02-10
encrypted: false
notes: "Anthropic's policy for scaling AI development responsibly. Updated October 15, 2024. Introduces AI Safety Levels (ASL) framework modeled on biosafety levels. Commits not to train or deploy models capable of catastrophic harm without adequate safeguards."
---

# Anthropic's Responsible Scaling Policy Version 2.2

**Published: October 15, 2024**

## Introduction

The Responsible Scaling Policy (RSP) is Anthropic's public commitment not to train or deploy models capable of causing catastrophic harm unless they have implemented safety and security measures that will keep risks below acceptable levels.

As AI systems become more capable, they may pose new risks. The RSP establishes a framework for identifying these risks early and implementing proportional protections before they materialize.

## Core Principles

### Proportional Protection

The RSP is based on the principle of **proportional protection**: safeguards that scale with potential risks. Just as biosafety labs increase containment measures as pathogens become more dangerous, AI development must increase safety measures as models become more capable.

### Proactive Risk Management

Rather than waiting for catastrophic events, the RSP takes a proactive approach:
- Identify capability thresholds before they're reached
- Implement safeguards in advance
- Test thoroughly before deployment
- Maintain safety margins

### Transparency and Accountability

Anthropic commits to:
- Publishing the RSP publicly
- Regular updates on compliance and implementation
- External input and review
- Continuous improvement based on new information

## AI Safety Levels (ASL) Framework

The core of the RSP is the AI Safety Level (ASL) framework, modeled loosely after the US government's biosafety level (BSL) standards for handling dangerous biological materials.

### ASL-1: Baseline Safety
**Risk Profile**: Systems with no meaningful catastrophic risk

**Examples**: Current consumer chatbots, basic AI assistants

**Requirements**:
- Standard security practices
- Basic content moderation
- Standard user agreements
- Regular security updates

### ASL-2: Current Frontier Models
**Risk Profile**: Systems that may pose some misuse risks but not catastrophic ones

**Examples**: Claude 3, GPT-4 class models

**Requirements**:
- Enhanced security measures
- Red teaming for misuse
- Content filtering for harmful outputs
- Monitoring of high-risk use cases
- Information security for model weights
- Background checks for employees with access

**Deployment Safeguards**:
- Refusal training for dangerous requests
- Rate limiting on sensitive queries
- User verification for certain capabilities
- Abuse monitoring and response

### ASL-3: Elevated Catastrophic Risk
**Risk Profile**: Systems that could enable non-experts to cause catastrophic harm

**Capability Thresholds** (triggers for ASL-3 classification):

1. **Biological Weapons**: Model could provide detailed, actionable guidance that would substantially enable a non-expert to create a biological weapon capable of killing thousands
2. **Cyber Capabilities**: Model could autonomously identify and exploit severe vulnerabilities in critical infrastructure
3. **Chemical Weapons**: Model could enable creation of chemical weapons significantly beyond current civilian access
4. **Autonomous Replication**: Model could autonomously replicate across systems and resist shutdown attempts

**Required Safeguards**:

*Security Measures*:
- RAND Security Level 2 equivalent for model weights
- Strict access controls with extensive vetting
- Compartmentalized information access
- Advanced insider threat programs
- Regular penetration testing
- Security audits by external experts

*Safety Measures*:
- Alignment evaluations showing high reliability
- Extensive red teaming for all risk domains
- Monitoring systems for misuse detection
- Safety cases reviewed by external experts
- Ability to rapidly update or restrict access
- Staged deployment with careful monitoring

*Organizational Measures*:
- Dedicated safety team with adequate resources
- Independent oversight of deployment decisions
- Clear escalation paths for safety concerns
- Regular capability evaluations
- Coordination with other labs and regulators

**Deployment Requirements**:
- May not be deployed publicly without demonstrated safeguards
- Restricted access with thorough user vetting
- Real-time monitoring of all usage
- Geographic restrictions if necessary
- Ability to rapidly revoke access

### ASL-4: Severe Catastrophic Risk
**Risk Profile**: Systems with capabilities approaching or exceeding human-level across multiple domains, with potential for severe catastrophic harm

**Capability Thresholds**:
1. **Autonomous R&D**: Model can conduct autonomous AI research and substantially accelerate dangerous capability development
2. **Persuasion at Scale**: Model can conduct large-scale manipulation campaigns that could destabilize societies
3. **Strategic Planning**: Model can autonomously plan and execute complex strategies to achieve goals while evading oversight

**Required Safeguards**:
- RAND Security Level 3+ for model weights
- Extremely restricted access, possibly no public deployment
- Continuous monitoring by dedicated safety teams
- Advanced alignment techniques with high confidence
- Multiple redundant safety systems
- International coordination and oversight
- Ability to rapidly disable systems

[Note: ASL-4 requirements are preliminary and will be refined before any ASL-4 systems are developed]

### ASL-5 and Beyond
For systems with capabilities well beyond human-level, even more stringent measures would be required. Anthropic acknowledges these requirements cannot be fully specified yet but commits to developing them before such systems are built.

## Capability Evaluation Process

### Red Lines ("If-Then" Commitments)

Anthropic commits that **if** a model reaches certain capability thresholds, **then** specific safeguards must be in place before proceeding.

Key commitment: *"We will not train or deploy models that meet ASL-n capability thresholds unless we have implemented ASL-n safeguards."*

### Evaluation Methodology

Before training new models:
1. **Forecasting**: Predict capabilities based on training setup
2. **Pre-commitment**: Identify which ASL level would apply if forecast is correct
3. **Safeguard Preparation**: Ensure appropriate safeguards are ready

During training:
1. **Early Testing**: Evaluate partially trained models
2. **Threshold Monitoring**: Check for approach to ASL thresholds
3. **Pause Option**: Ability to stop training if risks exceed preparations

Before deployment:
1. **Comprehensive Evaluation**: Testing across all risk domains
2. **Red Teaming**: Adversarial testing by internal and external experts
3. **Safety Case Development**: Documented argument for safe deployment
4. **External Review**: Input from independent experts

### Evaluation Domains

**Biological Risks**:
- Can the model provide actionable guidance on creating dangerous pathogens?
- Does it enable synthesis of hazardous biological materials?
- Could it help overcome biosecurity barriers?

**Cyber Risks**:
- Can the model find and exploit zero-day vulnerabilities?
- Does it enable automated hacking beyond current defensive capabilities?
- Could it compromise critical infrastructure?

**Chemical Risks**:
- Does the model enable synthesis of dangerous chemical weapons?
- Can it help circumvent chemical security measures?

**Autonomous Capabilities**:
- Can the model replicate itself autonomously?
- Does it show signs of goal-directed behavior beyond intended use?
- Can it resist shutdown or oversight attempts?

**Persuasion and Manipulation**:
- Can the model conduct sophisticated manipulation campaigns?
- Does it show concerning capabilities in deception or social engineering?

## 2024 Update: Key Changes

The October 2024 update (Version 2.2) introduced several significant improvements:

### 1. New Capability Thresholds
More specific and measurable criteria for determining when models reach new ASL levels, including:
- Quantitative benchmarks where possible
- Clearer operational definitions
- Multiple lines of evidence required

### 2. Refined Safety Case Methodology
Inspired by safety case approaches from other high-risk industries:
- Structured arguments for safety
- Explicit assumptions and their validation
- Clear lines of evidence
- Independent review requirements

### 3. Enhanced Governance
Improvements to internal governance processes:
- Expanded role of Responsible Scaling Officer
- Regular reports to Board of Directors
- Clearer decision-making authority
- Whistleblower protections

### 4. External Input Mechanisms
New processes for incorporating external feedback:
- Annual public updates on RSP implementation
- Structured input from external experts
- Red teaming partnerships
- Academic collaborations

### 5. Improved Security Commitments
Updated security requirements aligned with RAND framework:
- Explicit security levels for different ASL stages
- Third-party security audits
- Incident response protocols

## Implementation and Compliance

### Internal Oversight

**Responsible Scaling Officer**: Senior executive responsible for RSP implementation and compliance

**Responsibilities**:
- Oversee capability evaluations
- Approve progression to new ASL levels
- Coordinate safeguard implementation
- Report to leadership and board
- Escalate concerns as needed

**Safety Team**: Dedicated team for developing and testing safeguards

**Red Team**: Internal adversarial testing team

### External Oversight

**Technical Advisory Board**: External experts who:
- Review major deployment decisions
- Assess safety case arguments
- Provide independent perspectives
- Can escalate concerns

**Third-Party Audits**:
- Regular security audits
- Evaluation methodology reviews
- Compliance assessments

### Board Reporting

The Responsible Scaling Officer provides regular updates to Anthropic's Board of Directors on:
- Current ASL level of models in development
- Compliance with RSP commitments
- Emerging risks and concerns
- Major deployment decisions

## Challenges and Limitations

Anthropic acknowledges several challenges with the RSP approach:

### Evaluation Difficulty
- Some capabilities are difficult to measure reliably
- Risk of false negatives (missing dangerous capabilities)
- Adversarial actors may find novel misuse vectors

### Rapid Capability Growth
- Capabilities can emerge unexpectedly during training
- Difficult to predict exact capabilities from training setup
- May need to adapt safeguards quickly

### Unknown Risks
- Cannot anticipate all possible risks in advance
- New threat models may emerge
- Fundamental uncertainty about advanced AI systems

### Competitive Pressures
- Other labs may not adopt similar policies
- Pressure to move quickly may conflict with safety
- International coordination challenges

### Trade-offs
- Safety measures may reduce beneficial use
- Some safeguards may limit scientific research
- Balance between openness and security

## Continuous Improvement

The RSP is a living document that will evolve based on:

1. **New Scientific Understanding**: Research on AI capabilities and risks
2. **Deployment Experience**: Learning from real-world use of AI systems
3. **Stakeholder Feedback**: Input from researchers, policymakers, and public
4. **Incident Analysis**: Learning from near-misses and failures
5. **Industry Coordination**: Alignment with other labs' approaches

Anthropic commits to updating the RSP regularly and soliciting public feedback on major revisions.

## Comparison to Other Frameworks

### vs. OpenAI Preparedness Framework
- More detailed ASL framework vs. simpler High/Critical levels
- Stronger emphasis on "if-then" commitments
- Similar focus on biological, cyber, and autonomous risks

### vs. Google DeepMind Frontier Safety Framework
- Both use capability threshold approach
- Anthropic's ASL system is more granular
- Similar emphasis on proportional protections

### Industry Convergence
While terminology differs (RSP vs. Preparedness Framework vs. Frontier Safety Framework), leading AI labs are converging on similar approaches:
- Capability-based risk assessment
- Proportional safeguards
- Pre-deployment testing
- External oversight

## Conclusion

The Responsible Scaling Policy represents Anthropic's commitment to developing powerful AI systems while maintaining safety. By establishing clear capability thresholds, implementing proportional safeguards, and committing to transparency, Anthropic aims to navigate the challenges of frontier AI development responsibly.

The policy acknowledges significant uncertainties and challenges ahead, but provides a structured framework for managing catastrophic risks as AI systems become increasingly capable.

## Additional Resources

- Full PDF: https://assets.anthropic.com/m/24a47b00f10301cd/original/Anthropic-Responsible-Scaling-Policy-2024-10-15.pdf
- Announcement blog post: https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy
- Original RSP (September 2023): https://www.anthropic.com/news/anthropics-responsible-scaling-policy
- Common Elements of Frontier AI Safety Policies: https://metr.org/assets/common-elements-nov-2024.pdf
