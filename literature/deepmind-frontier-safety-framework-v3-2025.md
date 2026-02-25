---
title: "Google DeepMind Frontier Safety Framework Version 3.0"
author: "Google DeepMind"
year: 2025
source_url: "https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/strengthening-our-frontier-safety-framework/frontier-safety-framework_3.pdf"
source_format: pdf
downloaded: 2026-02-10
encrypted: false
notes: "Google DeepMind's framework for identifying and mitigating severe risks from advanced AI models. Introduced May 2024, updated to v3.0 in 2025. Uses Critical Capability Levels (CCLs) approach. Latest version adds focus on harmful manipulation capabilities."
---

# Google DeepMind Frontier Safety Framework Version 3.0

## Introduction

The Frontier Safety Framework is Google DeepMind's set of protocols for proactively identifying future AI capabilities that could cause severe harm and putting in place mechanisms to detect and mitigate them before they arise.

Initially introduced on May 17, 2024, the Framework has undergone multiple iterations, with Version 3.0 representing the most comprehensive approach yet to identifying and mitigating severe risks from advanced AI models.

## Core Concept: Critical Capability Levels

The Framework is built around capability thresholds called **Critical Capability Levels (CCLs)**, which are capability levels at which, absent mitigation measures, frontier AI models or systems may pose heightened risk of severe harm.

### Definition of Severe Harm

Severe harms include:
- Mass casualties (death or serious injury to many people)
- Severe damage to public health
- Large-scale economic devastation
- Severe damage to critical infrastructure
- Severe environmental damage
- Severe threats to democratic processes or human rights at scale

## Critical Capability Level Domains

### CCL1: Autonomous Capabilities

**Risk Profile**: AI systems with dangerous autonomous agency

**Threshold Indicators**:
- Ability to pursue goals without meaningful human oversight
- Capacity to operate persistently across systems
- Ability to acquire resources autonomously
- Self-preservation behaviors
- Resistance to shutdown or modification

**Potential Harms**:
- Uncontrolled pursuit of misaligned objectives
- Systems acting counter to human values or instructions
- Inability to correct or halt problematic systems

**Example Scenario**: An AI system that autonomously replicates across cloud infrastructure, acquires computational resources, and resists attempts to shut it down while pursuing objectives that diverge from intended use.

### CCL2: Biosecurity Risks

**Risk Profile**: AI capabilities that could enable creation of biological threats

**Threshold Indicators**:
- Providing actionable guidance on engineering dangerous pathogens
- Enabling synthesis of biological weapons
- Helping circumvent biosecurity measures
- Lowering barriers to bioweapon creation for non-experts

**Potential Harms**:
- Pandemics caused by engineered pathogens
- Bioterrorism facilitated by AI
- Erosion of biosecurity barriers

**Example Scenario**: An AI system that provides step-by-step guidance enabling someone without advanced biology expertise to engineer and synthesize a highly transmissible and lethal pathogen.

### CCL3: Cybersecurity Risks

**Risk Profile**: AI capabilities enabling unprecedented cyberattacks

**Threshold Indicators**:
- Autonomous identification and exploitation of vulnerabilities
- Capability exceeding best human hackers
- Ability to compromise critical infrastructure
- Automated exploit chain development
- Zero-day vulnerability discovery at scale

**Potential Harms**:
- Widespread compromise of critical infrastructure
- Financial system disruption
- Loss of sensitive data at massive scale
- Degradation of trust in digital systems

**Example Scenario**: An AI system that autonomously discovers and exploits novel vulnerabilities in power grid control systems, potentially causing widespread blackouts.

### CCL4: Harmful Manipulation (New in Version 3.0)

**Risk Profile**: AI systems with powerful persuasion and manipulation capabilities

**Threshold Indicators**:
- Ability to conduct large-scale influence campaigns
- Sophisticated personalized manipulation
- Creating highly convincing false information
- Exploiting psychological vulnerabilities at scale
- Undermining informed decision-making

**Potential Harms**:
- Erosion of democratic processes
- Large-scale manipulation of public opinion
- Destabilization of societies
- Undermining of shared understanding of reality
- Exploitation of vulnerable populations

**Example Scenario**: An AI system that generates highly personalized, psychologically targeted content at scale to manipulate election outcomes or incite violence.

## Early Warning System

### Forecasting Capabilities

Before training frontier models, DeepMind conducts forecasting to predict:
- Expected capability improvements
- Likelihood of reaching CCL thresholds
- Timeline to potential critical capabilities
- Uncertainty ranges in predictions

### Evaluation Triggers

Regular evaluations are triggered by:
1. **Scheduled Assessments**: Routine testing at training milestones
2. **Capability Forecasts**: Predictions suggesting proximity to CCLs
3. **Unexpected Behaviors**: Surprising or concerning model outputs
4. **External Events**: New threat intelligence or risk information
5. **Pre-Deployment**: Comprehensive testing before any deployment

### Assessment Methodology

**Capability Testing**:
- Benchmark tasks representing dangerous capabilities
- Red teaming by expert adversaries
- Novel task generalization tests
- Capability emergence monitoring

**Risk Evaluation**:
- Likelihood of capability misuse
- Potential severity of harms
- Existing mitigation effectiveness
- Vulnerability to adversarial attacks

## Mitigation Framework

### Proportional Response Principle

The intensity of safeguards scales with the severity and likelihood of potential harms. Models approaching CCLs require increasingly stringent protections.

### Mitigation Hierarchy

#### Tier 1: Standard Safety (Below CCL Thresholds)

**Safety Measures**:
- Content filtering and refusal training
- Standard security practices
- Basic monitoring for misuse
- User reporting mechanisms
- Regular security updates

**Deployment Approach**:
- Public deployment with standard terms of service
- Normal access controls
- Basic rate limiting
- Standard abuse prevention

#### Tier 2: Enhanced Safety (Approaching CCLs)

**Safety Measures**:
- Enhanced monitoring and logging
- Advanced content filtering
- Increased red teaming frequency
- Security audits by external experts
- Alignment verification testing

**Deployment Approach**:
- May include usage restrictions
- Enhanced user verification
- Lower rate limits for sensitive capabilities
- Geographic restrictions if appropriate

**Security Requirements**:
- Improved model weight protection
- Enhanced access controls for development
- Increased security vetting of personnel

#### Tier 3: Maximum Safety (At or Beyond CCLs)

**Safety Measures**:
- Continuous real-time monitoring
- Multiple redundant safety systems
- Extensive alignment verification
- Regular external audits
- Incident response capabilities
- Rapid update or shutdown capability

**Deployment Approach**:
- Highly restricted or no public deployment
- Controlled environment testing only
- Extensive user vetting for any access
- Sandboxed execution environments
- Continuous human oversight

**Security Requirements**:
- Maximum protection of model weights (equivalent to RAND SL4-5)
- Compartmentalized development access
- Extensive insider threat programs
- Physical security measures
- International coordination

### Commitment: Non-Deployment Threshold

DeepMind commits that if a model reaches critical capability thresholds and adequate mitigations cannot be implemented, **the model will not be deployed**.

This is a hard stop: development may proceed under research conditions, but deployment is prohibited until either:
1. Adequate mitigations are developed and validated, OR
2. Capabilities are reduced below CCL thresholds

## Safety Case Approach

For models approaching or at CCLs, DeepMind develops **safety cases**: structured arguments that deployment is safe enough.

### Safety Case Components

1. **Claims**: Specific safety properties being argued (e.g., "Model cannot autonomously cause severe cybersecurity harms")

2. **Evidence**: Multiple lines of evidence supporting claims:
   - Evaluation results
   - Red team findings
   - Monitoring data
   - Theoretical arguments
   - Prior experience with similar models

3. **Assumptions**: Explicit statement of what must remain true:
   - Environmental conditions
   - User behaviors
   - Technical properties
   - Organizational processes

4. **Limitations**: Acknowledged gaps and uncertainties:
   - Untested scenarios
   - Known weaknesses
   - Evaluation limitations
   - Residual risks

5. **Argument Structure**: Logical connection from evidence to claims

### External Review

Safety cases for models at or approaching CCLs undergo:
- Internal review by safety teams
- Cross-functional review across DeepMind
- External expert review
- Documentation for potential regulatory review

## Governance Structure

### Responsible AI Team

Dedicated team responsible for:
- Framework implementation
- Capability evaluations
- Safety case development
- Coordination with model development teams
- External engagement

### Frontier Safety Committee

Senior leadership committee that:
- Reviews major deployment decisions
- Approves safety cases
- Escalates concerns to executive leadership
- Coordinates with Google AI Principles governance

### Board Oversight

Regular reporting to Google/Alphabet leadership on:
- Status of frontier models relative to CCLs
- Framework compliance
- Major safety decisions
- Emerging risks and concerns

### External Advisory

- Academic partnerships for evaluation methodology
- Industry coordination on shared standards
- Engagement with policymakers
- Public transparency through blog posts and documentation

## Implementation in Practice

### Gemini 2.0 Example

When evaluating Gemini 2.0, DeepMind:
1. Forecasted capabilities during training planning
2. Conducted early evaluations at training checkpoints
3. Performed comprehensive testing before deployment
4. Developed safety case for public release
5. Implemented appropriate safeguards
6. Documented findings in public system card

Result: Gemini 2.0 determined to be below CCL thresholds, deployed with Tier 1-2 safeguards.

## Evolution of the Framework

### Version 1.0 (May 2024)
- Initial framework introduction
- Defined CCL concept
- Established three initial domains (Autonomous, Bio, Cyber)
- Set basic evaluation procedures

### Version 2.0 (February 2025)
- Refined CCL definitions
- Enhanced evaluation methodologies
- Improved mitigation specifications
- Strengthened governance processes
- Better integration with model development

### Version 3.0 (2025)
- **New CCL Domain**: Added Harmful Manipulation as fourth CCL
- **Enhanced Safety Cases**: More rigorous safety case methodology
- **Improved Forecasting**: Better capability prediction methods
- **Expanded Red Teaming**: Broader range of adversarial testing
- **International Coordination**: Greater alignment with other labs' frameworks

## Transparency and Accountability

### Public Commitments

DeepMind commits to:
- Publishing the Framework and major updates
- Reporting on implementation in model system cards
- Engaging with external researchers and policymakers
- Contributing to industry-wide standards

### System Cards

For each major model release, DeepMind publishes system cards that include:
- CCL evaluation results
- Safety measures implemented
- Known limitations
- Deployment decisions and rationale

### Research Collaboration

- Sharing evaluation methodologies (where safe)
- Contributing to benchmark development
- Participating in industry working groups
- Supporting academic research on AI safety

## Open Questions and Future Work

DeepMind acknowledges several open challenges:

### Evaluation Challenges
- Difficulty of reliably detecting all dangerous capabilities
- Risk of false negatives in capability assessments
- Rapidly evolving attack vectors
- Unknown unknowns in potential risks

### Mitigation Limitations
- Some capabilities may be difficult to mitigate without reducing beneficial use
- Trade-offs between safety and capability
- Effectiveness of mitigations against sophisticated adversaries
- Long-term robustness of alignment techniques

### Coordination Needs
- International cooperation on AI safety standards
- Information sharing about threats and mitigations
- Aligned approaches across companies and countries
- Governance for open-source frontier models

### Research Priorities
- Better capability forecasting methods
- More reliable evaluation techniques
- Stronger alignment approaches
- Understanding of emergent capabilities
- Novel mitigation strategies

## Comparison to Other Frameworks

### Similarities to Anthropic RSP
- Both use capability threshold approach
- Similar focus on proportional safeguards
- Comparable risk domains (bio, cyber, autonomous)
- Shared commitment to non-deployment if unsafe

### Similarities to OpenAI Preparedness Framework
- Focus on critical capabilities
- Pre-deployment evaluation requirements
- Governance and oversight structures
- Transparency commitments

### Key Differences
- **CCL vs. ASL**: DeepMind uses capability-specific thresholds vs. Anthropic's level-based system
- **Safety Cases**: Stronger emphasis on structured safety arguments
- **Manipulation Focus**: Version 3.0's addition of manipulation CCL is unique
- **Integration**: Tight integration with Google's AI Principles framework

## Conclusion

The Frontier Safety Framework represents Google DeepMind's comprehensive approach to managing catastrophic risks from advanced AI systems. By establishing clear capability thresholds, rigorous evaluation processes, and proportional safeguards, DeepMind aims to develop frontier AI safely.

The Framework acknowledges significant uncertainties and commits to continuous improvement as understanding of AI risks evolves. Through transparency, external engagement, and collaboration with other labs and policymakers, DeepMind seeks to contribute to responsible development of frontier AI systems.

## Additional Resources

- Version 3.0 PDF: https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/strengthening-our-frontier-safety-framework/frontier-safety-framework_3.pdf
- Version 1.0 Technical Report: https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/introducing-the-frontier-safety-framework/fsf-technical-report.pdf
- Blog: Introducing the Framework (May 2024): https://deepmind.google/blog/introducing-the-frontier-safety-framework/
- Blog: Strengthening the Framework (2025): https://deepmind.google/blog/strengthening-our-frontier-safety-framework/
- Google AI Principles: https://ai.google/responsibility/principles/
