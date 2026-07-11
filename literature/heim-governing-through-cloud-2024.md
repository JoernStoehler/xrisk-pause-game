---
title: "Governing Through the Cloud: The Intermediary Role of Compute Providers in AI Regulation"
author: "Lennart Heim, Tim Fist, Janet Egan, Sihao Huang, Stephen Zekany, Robert Trager, Michael Osborne, Noa Zilberman"
year: 2024
source_url: "https://arxiv.org/abs/2403.08501"
source_format: arxiv-tex
downloaded: 2026-03-12
encrypted: false
notes: "Proposes compute providers as key intermediaries for AI regulation. Describes their role as securers, record-keepers, verifiers, and enforcers. Analyzes technical feasibility of governance mechanisms. Focuses on frontier AI systems and compute infrastructure as an effective policy lever."
---

# Executive Summary

Jurisdictions worldwide are taking initial steps to regulate AI (e.g., EU AI Act, US Executive Order 14110), but these efforts lack robust mechanisms to verify compliance and respond to violations. This paper proposes compute service providers—firms that offer computing infrastructure for AI development and deployment—as an important intermediary node for AI safety and regulation. They can leverage their unique relationships with AI developers to complement existing regulations.

Computing infrastructure is increasingly concentrated with a small number of hyperscalers (Microsoft Azure, AWS, Google Cloud, etc.), creating a key chokepoint in the AI supply chain. Frontier AI systems require extensive compute resources, making compute providers particularly effective policy levers for oversight compared to alternatives like chip export controls.

## Compute Providers' Intermediary Role

Frontier AI development relies on large-scale computing infrastructure in data centers housing tens of thousands of specialized AI accelerators. Because building such infrastructure is extremely expensive, most AI developers access compute through cloud services (Infrastructure as a Service, or IaaS). This concentration of compute supply, combined with the regulatory advantages of targeting a small number of providers serving many developers, makes compute providers uniquely positioned to serve as regulatory intermediaries.

Some leading AI firms manage their own data centers or maintain exclusive partnerships with hyperscalers. However, the paper emphasizes that the proposed frameworks should apply to all scenarios where frontier-scale compute is provided, including internal arrangements within AI firms, to prevent regulatory circumvention.

## Governance Capacities

The paper identifies four key capacities compute providers can leverage:

1. **Securers**: Protect intellectual property (model weights, training code, data) from theft or misuse through physical, infrastructure, and network security.

2. **Record Keepers**: Collect and maintain information on customer activities, workloads, and compliance history for analysis, attribution, and audit trails.

3. **Verifiers**: Monitor customer activities to verify compliance with regulations. This includes:
   - Identity verification (Know-Your-Customer/KYC regimes)
   - Workload classification (detecting frontier model training)
   - Compute accounting (quantifying resources used per workload)
   - Detailed workload verification (properties of code, data, evaluations run)

4. **Enforcers**: Restrict or limit compute access for non-compliant customers, either enforcing external regulations or their own terms of service.

## Technical Feasibility

The paper argues that these governance capacities are technically feasible and can be implemented while preserving customer privacy and confidentiality. Key points:

- Compute providers already collect extensive data on customers and workloads for billing, optimization, and compliance purposes. Much of this data could support governance functions.

- With existing techniques, providers can likely detect and classify frontier model training workloads and quantify compute consumption in real-time.

- Advanced verification (e.g., determining training data types or whether specific evaluations were run) currently requires direct access to customer code and data. However, emerging confidential computing techniques (trusted execution environments, homomorphic encryption, etc.) may enable privacy-preserving verification of detailed properties.

- Privacy concerns are simplified for frontier AI regulation because the customer base is limited to corporate entities (not individuals), reducing applicability of stringent personal data protections like GDPR.

## US Domestic Implementation

The paper suggests expanding on Executive Order 14110's existing measures:

- The order already requires Know-Your-Customer (KYC) identification for foreign customers and reporting of foreign frontier model training.

- Extending KYC and reporting requirements to domestic customers training frontier models would give the US government visibility into domestic AI development.

- Adding verification and enforcement roles for compute providers would enable a comprehensive domestic oversight scheme, allowing authorities to identify and address safety risks.

- The Department of Commerce is implementing KYC requirements through proposed rules (as of the paper's writing).

## International Coordination

The success of compute-based oversight depends on multilateral adoption. If only one jurisdiction implements oversight, high-capability AI development could migrate to less regulated jurisdictions. The paper emphasizes:

- International coordination is necessary to prevent regulatory arbitrage.

- Complex issues arise at the intersection of AI regulation, international trade law, privacy, and confidentiality. These require careful legal and policy analysis.

- Concerns about national competitiveness and impacts on US compute providers' ability to serve global customers need to be addressed.

- Privacy-preserving standards, possibly industry-led, could build trust and incentivize international buy-in.

## Technical and Governance Challenges

Several challenges must be addressed to realize a robust governance model:

**Technical challenges:**
- Identifying additional measurable properties of AI development that correspond to real safety risks
- Making workload classification robust against potential evasion techniques
- Formulating privacy-preserving verification protocols
- Scaling verification techniques to global deployments and various compute environments

**Governance challenges:**
- Ensuring multilateral adoption to prevent regulatory arbitrage
- Balancing regulatory goals with privacy and confidentiality protections
- Addressing competitive concerns in the AI ecosystem
- Developing international legal frameworks that account for differing privacy regimes and jurisdictional interests
- Maintaining trust between compute providers, customers, and governments

## Limitations

The paper is conceptual rather than a complete implementation blueprint. Some aspects are immediately actionable, while others require further research and development. Key limitations:

- International legal and policy aspects are not explored in detail.

- Privacy and confidentiality implications require careful weighting against government overreach risks.

- The paper focuses on frontier AI and does not comprehensively address broader AI regulation.

- Implementation details for international coordination remain uncertain.

## Conclusion

Compute providers are well-positioned to support AI governance frameworks in a privacy-preserving manner. Many proposed interventions are feasible with existing capabilities, though realizing the full potential requires addressing technical challenges and achieving international cooperation. As governments move to regulate AI, compute providers stand as a key intermediary node for effective policy implementation.

---

# Full Paper Structure

## 1. Introduction

Governments worldwide lack visibility into frontier AI development and deployment because these activities largely occur in the private sector with unreliable self-reporting. Various jurisdictions (US, EU, UK, China) are imposing reporting requirements and capability-based regulations, but lack enforcement mechanisms. This paper proposes compute providers as an intermediary for governance, acting as a first line of detection and defense against regulatory violations.

## 2. Compute Providers' Intermediary Role

### 2.1 Large Scale Compute Infrastructure

Frontier AI training and deployment require massive compute clusters with thousands to tens of thousands of accelerators, costing billions to build. This concentration creates natural regulatory chokepoints.

### 2.2 Regulatory Intermediaries (Not New)

Using private entities as regulatory intermediaries has precedent:
- Aviation: airlines maintain security plans, verify passenger identities, enforce access rules
- Financial: KYC and anti-money laundering regimes
- Telecommunications: data retention policies
- Content platforms: CSAM detection and reporting

Compute providers already operate under various regulations (CSAM detection, GDPR data protection, counter-terrorism financing monitoring).

### 2.3 Focus on Frontier AI

Frontier AI is defined as "highly capable general-purpose AI models that can perform a wide variety of tasks and match or exceed the capabilities present in today's most advanced models." The regulatory focus should be proportional—targeting only those customers and activities at frontier scale, not the entire ecosystem.

## 3. Governance Capacities of Compute Providers

Compute providers occupy a unique position in the AI supply chain. They can serve four governance functions:

### 3.1 Securers

Compute providers can protect intellectual property through:
- Physical security: restricting data center access
- Infrastructure security: hardened hardware, tamper detection
- Network security: encryption, access controls, intrusion detection

Advanced threats (insider threats, supply chain attacks, state-sponsored actors) require additional safeguards beyond baseline security practices.

### 3.2 Record Keepers

Compute providers collect extensive data on customers and workloads for billing, optimization, and service analysis. This data can support governance through:

- **Audit trails**: Record what compute was accessed, when, by whom, and for what purpose
- **Attribution**: Identify responsible parties after policy violations
- **Analysis**: Understand trends and patterns in frontier AI development
- **Future investigation**: Enable authorities to investigate compliance in retrospect

Providers typically maintain records on:
- Customer identity and verification status
- Resource consumption (compute hours, network traffic, storage)
- Workload types and durations
- Performance metrics and system behavior

### 3.3 Verifiers

Verification—confirming that customers are complying with regulations—has multiple sub-categories:

**Identity Verification (KYC)**
- Confirming customer identity and beneficial ownership
- Screening against sanctions lists, terrorist financing lists
- Ongoing monitoring for changes in customer status

**Workload Classification**
- Determining whether a workload involves frontier model training
- Distinguishing training from inference at scale
- Identifying potentially dangerous use cases (e.g., biological, chemical research)

Current providers collect information that enables workload classification:
- Compute resource type, quantity, and duration
- Data transfer patterns (size of datasets being accessed)
- Model size inferences (memory usage, network bandwidth for all-reduce communication during distributed training)
- Job metadata (user-provided descriptions, framework used)

Techniques for classification:
- Direct signals: user-provided metadata on model size, training data
- Indirect signals: compute utilization patterns, communication patterns, memory usage
- Machine learning: training classifiers on historical data to predict workload type

**Compute Accounting**
- Quantifying compute consumption per workload
- Tracking aggregate compute use per customer
- Detecting threshold-crossing events (e.g., crossing a frontier AI training threshold)

Methods:
- Direct measurement: tracking GPU/TPU hours per job
- Job-level monitoring: duration × resource count
- Real-time alerts: when a customer crosses specified thresholds

**Detailed Workload Verification**
- Properties of training data used (data lineage, provenance)
- Whether specific model evaluations or red-teaming was conducted
- Testing for dangerous capabilities
- Verification of safety techniques applied (RLHF, constitutional AI, etc.)

Current limitations: requires access to customer code and data, which many customers consider proprietary. Potential solutions using confidential computing:
- Trusted Execution Environments (TEEs): customer code runs in hardware-protected enclave, provider sees only inputs/outputs
- Homomorphic encryption: compute on encrypted data
- Secure multi-party computation: joint computation without revealing data
- Attestation: cryptographic proof that specific code ran without modification

### 3.4 Enforcers

Enforcement entails restricting compute access for non-compliant customers. Methods:

- **Temporary suspension**: Pause workloads pending investigation
- **Permanent termination**: End service for repeated violations
- **Quota reduction**: Limit compute access to non-sensitive workloads
- **Escalated monitoring**: Increase verification intensity for suspicious activity

Enforcement decisions must balance:
- Regulatory compliance goals
- Customer rights and due process
- Avoiding collateral damage to legitimate research
- Liability for wrongful enforcement

## 4. US Oversight Framework

### 4.1 Executive Order 14110 Context

Biden's November 2023 Executive Order on "Safe, Secure, and Trustworthy AI" includes Section 4 requirements for compute providers:
- Establishing a Customer Identification Program (KYC regime)
- Reporting to US government when foreign customers train models with specified compute thresholds

Implementation is progressing through Department of Commerce proposed rules.

### 4.2 Extending Domestic Oversight

The paper proposes expanding these measures to cover domestic customers:

1. Extend KYC requirements to all frontier-scale compute customers (not just foreign)
2. Implement real-time compute accounting and threshold-crossing alerts
3. Add verification requirements (workload classification, evaluation verification)
4. Enable enforcement actions (compute suspension for violations of AI regulations)
5. Coordinate with other regulators (NIST, AI Safety Institute, etc.)

This would create a comprehensive compute oversight scheme enabling:
- Detection of frontier model training at scale
- Compliance verification with AI Executive Order requirements and broader AI governance frameworks
- Attribution of AI systems to responsible developers
- Enforcement of regulations through compute access restrictions

### 4.3 Privacy and Confidentiality Considerations

For frontier AI oversight, privacy concerns are reduced compared to general surveillance:
- Customer base is limited to corporate entities (not individuals)
- Fewer stringent privacy constraints apply to business entities under GDPR
- Information focuses on compute consumption and workload types, not personal data
- Privacy-preserving techniques (confidential computing) can protect customer code and data

Risk mitigation:
- Restrict access to oversight data to authorized agencies
- Implement audit logs on data access
- Sunset requirements if threats decline
- Maintain checks and balances against government overreach

## 5. Challenges and Opportunities

### 5.1 Technical Challenges

**Measurable properties that correspond to risks**: The paper assumes frontier model training and dangerous evaluations are the key risks. But risks may include:
- Training with dangerous data (e.g., bioweapon synthesis instructions)
- Inadequate safety testing
- Training of deceptive or power-seeking models
- Deployment without appropriate safeguards

Not all risks reduce to compute thresholds. Verification of these deeper properties is harder and currently infeasible without customer code access.

**Robustness to evasion**: Adversarial customers could:
- Distribute training across multiple jobs or customers (sandboxing attacks)
- Disguise training as inference or other workloads
- Use obfuscated code or encrypted workloads
- Migrate to unmonitored jurisdictions

Providers must develop classification techniques robust to known evasion techniques.

**Privacy-preserving verification protocols**: Confidential computing is promising but:
- Still research stage for complex workloads
- Performance overhead may be significant
- Compatibility with diverse customer environments uncertain
- Trust assumptions (TEE manufacturers, attestation) must be validated

**Global scale and diversity**: Verification techniques must work across:
- Multiple compute providers (different hardware, software stacks)
- Geographically distributed data centers
- Various customer types and use cases
- Evolving AI techniques and model architectures

### 5.2 Governance Challenges

**Multilateral adoption**: Compute-based oversight fails if only one jurisdiction adopts it. AI development would migrate to non-compliant jurisdictions. This requires:
- International negotiation and buy-in
- Coordinated timelines for implementation
- Mutual recognition of oversight regimes
- Dispute resolution mechanisms

**Privacy and international law**: Different jurisdictions have different privacy standards:
- GDPR (EU) vs. weaker protections elsewhere
- Varying definitions of corporate vs. personal data
- Conflicts between privacy and oversight objectives
- International data transfer restrictions

Legal frameworks must address:
- Cross-border data sharing for oversight
- Liability for compute providers implementing oversight
- Right to appeal, due process, legal remedies
- Handling of proprietary business information

**Competitive impacts**: Compute provider oversight could:
- Advantage US providers if framework is US-centric
- Disadvantage global providers serving multiple jurisdictions
- Create barriers to entry in the compute market (compliance costs)
- Raise concerns about government favoritism or discrimination

Mitigation requires:
- Fair, transparent implementation standards
- Proportional compliance requirements
- Level playing field for competing providers
- Antitrust safeguards

**Industry coordination**: Providers may resist oversight due to:
- Costs of implementation and compliance
- Customer concerns about data sharing
- Liability risks for enforcement actions
- Preference for self-regulation

Solutions:
- Public-private partnerships
- Industry-led standard setting
- Liability protections for good-faith compliance
- Gradual implementation phases

## 6. Conclusion

Compute providers occupy a pivotal position in the AI supply chain and can serve as effective intermediaries for frontier AI governance. The paper argues that:

1. Compute providers can serve as securers, record keepers, verifiers, and enforcers across AI regulation.

2. Many proposed governance functions are technically feasible with current capabilities, particularly identity verification, workload classification, and compute accounting.

3. More advanced verification (detailed workload properties, safety technique verification) requires research into privacy-preserving techniques, particularly confidential computing.

4. The US Executive Order 14110 already mandates some compute provider oversight (KYC, foreign reporting). Expanding these measures domestically and internationally could enable comprehensive oversight.

5. Realizing the full potential requires addressing technical challenges (robust classification, evasion resistance) and governance challenges (international coordination, privacy, competitive concerns).

6. International cooperation is essential. Unilateral measures risk driving development elsewhere.

The paper concludes by emphasizing that compute providers are well-positioned to support AI governance, but success requires concerted effort from researchers, policymakers, and industry to address remaining technical and governance challenges.

