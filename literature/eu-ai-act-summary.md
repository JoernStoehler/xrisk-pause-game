---
title: "EU AI Act: Comprehensive Summary"
author: "European Commission / European Parliament"
year: 2024
source_url: "https://artificialintelligenceact.eu/"
source_format: html
downloaded: 2026-02-10
encrypted: false
notes: "Summary of the EU AI Act (Regulation 2024/1689), the first comprehensive AI regulation worldwide. Covers risk-based classification, requirements for general-purpose AI and frontier models, enforcement mechanisms, and implementation timeline."
---

# EU AI Act: Comprehensive Summary

## Overview

The AI Act (Regulation (EU) 2024/1689) is the first-ever comprehensive legal framework on artificial intelligence worldwide. The AI Act entered into force on 1 August 2024, and will be fully applicable 2 years later on 2 August 2026, with phased implementation.

## Implementation Timeline

The AI Act follows a phased approach:

- **2 February 2025**: Prohibited AI practices and AI literacy obligations entered into application
- **2 August 2025**: Second implementation phase for general purpose AI (GPAI) models - specific rules now apply
- **2 August 2026**: AI Act becomes fully applicable for most operators
- **2 August 2027**: Extended transition period for high-risk AI systems embedded into regulated products

## Risk-Based Classification System

The AI Act establishes a risk-based framework for AI developers and deployers regarding specific uses of AI.

### Prohibited AI Systems (Unacceptable Risk)

Social scoring, exploitative manipulation of vulnerable groups, and real-time remote biometric identification in public for law enforcement became legally binding as of February 2, 2025. These practices are completely banned in the EU.

### High-Risk AI Systems

AI use cases that can pose serious risks to health, safety, or fundamental rights are classified as high-risk.

#### Article 6: Classification Rules

Article 6 describes two pathways to high-risk classification:

**Article 6(1) - Safety Components**
An AI system is considered high-risk if two cumulative conditions are fulfilled:
1. The AI system is intended to be used as a safety component of a product (or is a product itself) covered by specific EU harmonization legislation listed in Annex I
2. The same harmonization legislation mandates that the product undergo a third-party conformity assessment before being placed on the EU market

**Article 6(2) - Annex III Categories**
The AI Act contains in Annex III a list of AI systems that must be considered high risk in eight different categories:

- **Biometrics**: Remote biometric identification systems, biometric categorization, emotion recognition
- **Critical infrastructure**: Safety components in managing digital infrastructure, road traffic, or utilities
- **Education and vocational training**: AI systems used in education institutions
- **Employment, worker management, and access to self-employment**
- **Essential private and public services**: Credit scoring, risk assessment, emergency response
- **Law enforcement**: AI for evidence assessment, case prioritization, profiling
- **Migration, asylum and border control management**
- **Administration of justice and democratic processes**

#### Profiling Override

None of the exceptions to high-risk classification apply if the AI system performs profiling of natural persons. If an AI system analyzes personal characteristics, behaviors, or traits to make predictions about individuals, it is automatically high-risk regardless of how limited its function might seem.

#### Provider Obligations

Article 10(2)(f) obligates providers of high-risk AI systems to identify, detect, prevent and mitigate harmful biases that may result in discrimination or otherwise curtail the fundamental rights of individuals under EU law.

A provider who considers that an AI system referred to in Annex III is not high-risk shall document its assessment before that system is placed on the market or put into service, and shall be subject to the registration obligation.

The Commission shall, no later than 2 February 2026, provide guidelines specifying the practical implementation of this Article together with a comprehensive list of practical examples.

## General Purpose AI (GPAI) Models

On 18 July 2025, the European Commission published draft Guidelines clarifying key provisions of the EU AI Act applicable to General Purpose AI (GPAI) models.

### Key Requirements for GPAI Models

Providers of GPAI models must provide:

- **Technical documentation** and a public summary of training content (using the Commission template)
- **Measures to comply with EU copyright rules**
- Only those making **significant modifications** to AI models need to comply with the obligations for providers of GPAI models, not those making minor changes

Providers of GPAI models placed on the market after 2 August 2025 must comply and are expected to informally collaborate with the AI Office's technical staff.

### Frontier AI / Systemic Risk Models

Providers of the most advanced models - those that pose systemic risks - are legally obliged to notify the AI Office of these models. The Code of Practice offers a clear framework to help developers of GPAI models meet the requirements of the EU AI Act.

Models are considered to pose systemic risks if they have capabilities or impact equivalent to those trained with:
- Computing power above 10^25 FLOPs (floating-point operations)
- Or are designated by the Commission as posing systemic risks based on specific criteria

Additional requirements for systemic risk models include:
- Model evaluation and adversarial testing
- Assessment and mitigation of systemic risks
- Tracking and reporting of serious incidents
- Ensuring adequate level of cybersecurity protection

## AI Literacy Requirements

Organizations operating in the European market must ensure adequate AI literacy among employees involved in the use and deployment of AI systems. This requirement entered into force on 2 February 2025.

## Governance and Enforcement

### European AI Office

The European Commission established a dedicated regulator known as the **European AI Office** in early 2024. Housed within the Commission's DG CONNECT, this office serves as the EU-wide center of AI expertise and enforcement coordination.

Primary roles:
- Monitor, supervise, and ensure compliance with the AI Act's rules
- Special focus on general-purpose AI models
- Coordinate enforcement across all 27 Member States

### Enforcement Powers and Penalties

From 2 August 2026, the Commission's enforcement powers enter into application. The Commission will enforce compliance with the obligations for providers of GPAI models, including with fines.

Penalties for non-compliance include:
- Up to €35 million or 7% of total worldwide annual turnover (whichever is higher) for prohibited AI practices
- Up to €15 million or 3% of turnover for violations of AI Act obligations
- Up to €7.5 million or 1.5% of turnover for supplying incorrect information

### Member State Role

Each Member State designates national competent authorities to supervise the application and implementation of the AI Act at the national level. Member States are responsible for market surveillance and enforcement within their jurisdictions, except for GPAI models which are supervised by the AI Office.

## Obligations by Actor Type

### Providers (Developers)

- Design and develop AI systems in compliance with the Act
- Implement quality management and risk management systems
- Conduct conformity assessments for high-risk systems
- Maintain technical documentation
- Ensure human oversight capabilities
- Report serious incidents

### Deployers (Users)

- Use AI systems according to instructions
- Ensure human oversight
- Monitor for risks and incidents
- Inform providers of serious incidents
- Conduct fundamental rights impact assessments for high-risk systems in certain contexts

### Distributors and Importers

- Verify that providers have fulfilled their obligations
- Ensure proper documentation and CE marking
- Inform authorities of non-compliant systems
- Ensure appropriate storage and transport conditions

## Harmonization with Other EU Law

The AI Act is designed to work alongside existing EU legislation, including:
- **GDPR** (General Data Protection Regulation): AI Act does not replace data protection law but adds AI-specific requirements
- **Product Safety Regulations**: Annex I lists harmonized EU legislation for safety components
- **Digital Services Act**: Complementary framework for online platforms
- **Copyright Directive**: GPAI providers must comply with copyright rules on training data

## International Context

The EU AI Act is the first comprehensive AI regulation globally and is expected to have extraterritorial effects (the "Brussels Effect"), similar to GDPR. It applies to:

- Providers placing AI systems on the EU market or putting them into service in the EU, regardless of location
- Deployers of AI systems located in the EU
- Providers and deployers located outside the EU where the output produced by the AI system is used in the EU

This means that non-EU companies developing or deploying AI systems that affect EU users must comply with the Act.

## Key Definitions

**AI System**: A machine-based system that is designed to operate with varying levels of autonomy and that may exhibit adaptiveness after deployment, and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments.

**General-Purpose AI Model**: An AI model, including where such an AI model is trained with a large amount of data using self-supervision at scale, that displays significant generality and is capable of competently performing a wide range of distinct tasks regardless of the way the model is placed on the market, and that can be integrated into a variety of downstream systems or applications.

**Frontier AI / Systemic Risk Model**: A general-purpose AI model that has high impact capabilities or high impact capabilities that can be reasonably expected to have in the future, evaluated on the basis of appropriate technical tools and methodologies.

## Transparency Obligations

Beyond risk classification, certain AI systems must meet transparency requirements:

- **AI-generated content**: Users must be informed when interacting with AI systems (e.g., chatbots)
- **Deep fakes**: AI-generated or manipulated image, audio, or video content must be clearly labeled
- **Emotion recognition and biometric categorization**: Individuals must be informed when these systems are used
- **AI-generated or manipulated content**: Deployers of AI systems that generate or manipulate content must ensure the outputs are marked in a machine-readable format and detectable as artificially generated

## Innovation Support

The Act includes provisions to support innovation:

- **Regulatory sandboxes**: Controlled environments where AI systems can be tested under regulatory supervision
- **SME support**: Specific provisions to reduce burden on small and medium enterprises
- **Codes of practice**: Industry can develop voluntary codes for certain obligations
