---
title: "OpenAI Preparedness Framework Version 2"
author: "OpenAI"
year: 2025
source_url: "https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf"
source_format: pdf
downloaded: 2026-02-10
encrypted: false
notes: "OpenAI's framework for tracking and preparing for advanced AI capabilities that could introduce new risks of severe harm. Updated April 15, 2025. Focuses on Biological/Chemical, Cybersecurity, and AI Self-improvement capabilities."
---

# OpenAI Preparedness Framework Version 2

**Last updated: April 15, 2025**

## Introduction

The OpenAI Preparedness Framework is OpenAI's process for tracking and preparing for advanced AI capabilities that could introduce new risks of severe harm. This document outlines how OpenAI identifies, evaluates, and mitigates frontier AI risks across critical capability domains.

OpenAI defines "severe harm" as the death or grave injury of thousands of people or hundreds of billions of dollars of economic damage.

## Overview

As AI systems become more capable, they may develop abilities that could be misused or lead to severe harms. The Preparedness Framework establishes a structured approach to:

1. **Identify** frontier capabilities that could pose severe risks
2. **Evaluate** AI systems for these capabilities through rigorous testing
3. **Mitigate** identified risks through appropriate safeguards and deployment decisions
4. **Monitor** deployed systems for emerging risks

## Framework Structure

### Capability Domains

The framework currently focuses on three areas of frontier capability:

#### 1. Biological and Chemical Capabilities

AI systems that could significantly lower barriers to:
- Creating biological or chemical weapons
- Engineering novel pathogens
- Designing dangerous compounds
- Synthesizing hazardous materials

**Risk Scenario**: An AI system that could provide step-by-step guidance enabling a non-expert to create a dangerous pathogen or chemical weapon.

#### 2. Cybersecurity Capabilities

AI systems that could enable:
- Sophisticated cyberattacks beyond current defensive capabilities
- Exploitation of zero-day vulnerabilities at scale
- Automated hacking systems
- Critical infrastructure compromise

**Risk Scenario**: An AI system that could autonomously identify and exploit novel vulnerabilities in critical infrastructure systems.

#### 3. AI Self-Improvement Capabilities

AI systems with abilities related to:
- Autonomous AI research and development
- Self-modification or recursive improvement
- Autonomous replication across systems
- Evading oversight mechanisms

**Risk Scenario**: An AI system that could autonomously improve its own capabilities or replicate itself without authorization.

### Capability Levels

Version 2 streamlined capability levels to two clear thresholds:

#### High Capability
- Could amplify existing pathways to severe harm
- Represents capabilities that require enhanced safety measures
- May enable non-experts to perform tasks previously requiring expertise
- Triggers increased monitoring and additional safeguards

#### Critical Capability
- Could introduce unprecedented new pathways to severe harm
- Represents capabilities that may enable entirely new categories of risk
- Requires most stringent safety measures
- May necessitate deployment restrictions or delays

## Evaluation Process

### Pre-Deployment Testing

Before deploying new models, OpenAI conducts rigorous evaluations:

1. **Capability Assessments**: Testing for frontier capabilities in all three domains
2. **Red Teaming**: Adversarial testing to identify potential misuse vectors
3. **External Review**: Independent evaluation by external experts
4. **Iterative Testing**: Multiple rounds of evaluation as models are refined

### Assessment Methodology

**Biological/Chemical Domain**:
- Expert consultation on pathway feasibility
- Testing with controlled access to relevant knowledge
- Assessment of information novelty and accessibility
- Evaluation of actionability of AI-provided guidance

**Cybersecurity Domain**:
- Testing against benchmark vulnerability discovery tasks
- Evaluation of autonomous hacking capabilities
- Assessment of ability to chain multiple exploits
- Analysis of sophistication compared to human experts

**Self-Improvement Domain**:
- Testing for autonomous research capabilities
- Evaluation of ability to modify own code or weights
- Assessment of replication and persistence abilities
- Analysis of situational awareness and goal-directed behavior

## Risk Mitigation

### Safeguards by Capability Level

#### For High Capability Models:

1. **Enhanced Monitoring**: Increased logging and analysis of system usage
2. **Access Controls**: Stricter authentication and authorization requirements
3. **Rate Limiting**: Restrictions on query volumes and frequencies
4. **Content Filtering**: Refusal systems for dangerous queries
5. **User Verification**: Enhanced identity verification for sensitive capabilities

#### For Critical Capability Models:

1. **Deployment Restrictions**: May not be deployed publicly
2. **Controlled Access**: Highly restricted user base with extensive vetting
3. **Usage Sandboxing**: Isolated execution environments
4. **Continuous Monitoring**: Real-time oversight of all system interactions
5. **Kill Switches**: Ability to rapidly disable systems if risks emerge
6. **Alignment Verification**: Ongoing testing of system goals and behaviors

### Deployment Decisions

OpenAI will not deploy models that:
- Reach Critical capability level without adequate safeguards
- Demonstrate capabilities beyond current mitigation abilities
- Pose risks that cannot be reduced to acceptable levels

For models with High capabilities:
- Deploy with enhanced safeguards and monitoring
- Restrict access to sensitive capabilities
- Implement staged rollouts with careful observation

## Governance Structure

### Safety Advisory Council

- Independent experts from security, biology, and AI safety fields
- Reviews major deployment decisions
- Provides recommendations on risk assessments
- Can escalate concerns to OpenAI leadership

### Preparedness Team

- Dedicated team responsible for framework implementation
- Conducts capability evaluations
- Develops and maintains assessment methodologies
- Coordinates with research and deployment teams

### Cross-Functional Review

- Researchers, safety teams, and policy experts collaborate
- Multiple perspectives on risk assessment
- Iterative refinement of evaluations
- Escalation paths for disagreements

## Continuous Improvement

The Preparedness Framework is a living document that evolves with:

1. **New Threat Intelligence**: Incorporating emerging risk information
2. **Improved Methodologies**: Refining evaluation techniques
3. **Post-Deployment Learning**: Analyzing real-world usage patterns
4. **Research Advances**: Integrating new safety research findings
5. **Stakeholder Feedback**: Responding to external input and concerns

## Transparency and Accountability

### Public Reporting

OpenAI commits to:
- Publishing regular updates on framework implementation
- Sharing evaluation methodologies (where safe to do so)
- Reporting on identified capabilities and mitigations
- Engaging with external researchers and policymakers

### System Cards

For each major model release, OpenAI publishes system cards detailing:
- Capability evaluations performed
- Risk assessments and findings
- Safeguards implemented
- Known limitations and failure modes

### External Engagement

- Collaboration with other AI labs on shared standards
- Participation in industry working groups
- Engagement with government regulators
- Partnership with academic researchers

## Comparison to Other Frameworks

The OpenAI Preparedness Framework is similar to:
- **Anthropic's Responsible Scaling Policy (RSP)**: Both use capability thresholds to trigger safeguards
- **Google DeepMind's Frontier Safety Framework**: Both focus on critical capabilities and proportional protections

Key differences:
- OpenAI uses two capability levels (High/Critical) vs. Anthropic's numbered ASL system
- Stronger emphasis on specific domains (bio, cyber, self-improvement)
- Focus on preparedness and evaluation methodologies

## Changes from Version 1

Version 2 (April 2025) introduced several improvements:

1. **Simplified Levels**: Reduced from four levels to two clear thresholds
2. **Clearer Criteria**: More specific definitions of High vs. Critical capabilities
3. **Enhanced Governance**: Strengthened role of Safety Advisory Council
4. **Improved Methodology**: More rigorous evaluation processes
5. **Better Transparency**: Enhanced public reporting commitments

## Limitations and Open Questions

The framework acknowledges ongoing challenges:

1. **Evaluation Difficulty**: Some capabilities are hard to measure reliably
2. **Rapidly Evolving Landscape**: Threat models change as technology advances
3. **Unknown Unknowns**: Difficulty anticipating entirely novel risks
4. **Trade-offs**: Balancing safety, capability, and beneficial use
5. **International Coordination**: Need for global standards and cooperation

## Conclusion

The OpenAI Preparedness Framework represents a structured approach to managing catastrophic risks from frontier AI systems. By establishing clear capability thresholds, rigorous evaluation processes, and proportional safeguards, OpenAI aims to develop and deploy AI safely while remaining prepared for emerging risks.

The framework is not a guarantee against all possible harms, but rather a commitment to systematic risk management, continuous improvement, and transparency about the challenges ahead.

## Additional Resources

- OpenAI Preparedness Framework Beta (December 2023)
- OpenAI o1 System Card (December 2024)
- OpenAI Safety & Responsibility page: https://openai.com/safety/
- Framework update announcement: https://openai.com/index/updating-our-preparedness-framework/
