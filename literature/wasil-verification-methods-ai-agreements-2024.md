---
title: "Verification Methods for International AI Agreements"
author: "Akash R. Wasil, Tom Reed, Jack William Miller, Peter Barnett"
year: 2024
source_url: "https://arxiv.org/abs/2408.16074"
source_format: arxiv-tex
downloaded: 2026-03-12
encrypted: false
notes: "Examines 10 verification methods for detecting unauthorized AI training runs and data centers; categorizes methods as national technical means, access-dependent, or hardware-dependent; discusses evasion techniques for each method."
---

# Verification Methods for International AI Agreements

## Abstract

What techniques can be used to verify compliance with international agreements about advanced AI development? In this paper, we examine 10 verification methods that could detect two types of potential violations: unauthorized AI training (e.g., training runs above a certain FLOP threshold) and unauthorized data centers. We divide the verification methods into three categories: (a) national technical means (methods requiring minimal or no access from suspected non-compliant nations), (b) access-dependent methods (methods that require approval from the nation suspected of unauthorized activities), and (c) hardware-dependent methods (methods that require rules around advanced hardware). For each verification method, we provide a description, historical precedents, and possible evasion techniques. We conclude by offering recommendations for future work related to the verification and enforcement of international AI governance agreements.

## Executive Summary

Efforts to maximize the benefits and minimize the global security risks of advanced AI may lead to international agreements. This paper outlines methods that could be used to verify compliance with such agreements. The verification methods we cover are focused on detecting two potential violations:

### Violations to Verify

- **Unauthorized AI development** (for example, AI development that goes beyond a FLOP threshold set by an international agreement, or the execution of a training run that has not received a license).
- **Unauthorized data centers** (for example, data centers that go beyond a maximum computing capacity limit or networking limit set by an international agreement).

We identify 10 verification methods and divide them into three categories:

1. **National technical means**: Methods that can be used by nations unilaterally.
2. **Access-dependent methods**: Methods that require a nation to grant access to national or international inspectors.
3. **Hardware-dependent methods**: Methods that require agreements pertaining to advanced hardware.

### National Technical Means

1. **Remote sensing**: Detect unauthorized data centers and semiconductor manufacturing via visual and thermal signatures.
2. **Whistleblowers**: Incentivize insiders to report non-compliance.
3. **Energy monitoring**: Detect power consumption patterns that suggest the potential presence of large GPU clusters.
4. **Customs data analysis**: Track the movement of critical AI hardware and raw materials.
5. **Financial intelligence**: Monitor large financial transactions related to AI development.

### Access-Dependent Methods

1. **Data center inspections**: Conduct inspections of sites to assess the size of a data center, verify compliance with hardware agreements, and verify compliance with other safety and security agreements.
2. **Semiconductor manufacturing facility inspections**: Conduct inspections of sites to determine the quantity of chip production and verify that chip production conforms to any agreements around advanced hardware.
3. **AI developer inspections**: Conduct inspections of AI development facilities via interviews, document and training transcript audits, and potential code reviews.

### Hardware-Dependent Methods

1. **Chip location tracking**: Automatic location tracking of advanced AI chips.
2. **Chip-based reporting**: Automatic notification if chips are used for unauthorized purposes.

### Limitations and Considerations

The verification methods proposed have some limitations, and there are many complicated national and international considerations that would influence if and how they are implemented:

- **Invasiveness**: Some methods (especially on-site inspections) may be seen as intrusive and could raise concerns about privacy and sovereignty. Several factors could influence a nation's willingness to accept invasive measures (e.g., the amount of international tension or distrust between nations, the degree to which nations are concerned about risks from advanced AI, the exact types of risks that nations find most concerning).

- **Imperfect detection**: No single method is foolproof. However, the combination of multiple methods could create a "Swiss cheese" model, where the weaknesses of one method are covered by the strengths of others.

- **Developmental stage**: Some methods (especially the hardware-dependent ones) may require additional R&D. Furthermore, unlike methods that have been used for decades in other areas, the real-world effectiveness of some hardware-dependent methods has not yet been determined.

## Introduction

The development of advanced artificial intelligence poses major global security risks. Significant threats include the potential for pervasive surveillance, the development of autonomous weapons, and misuse by malicious actors. Some of the most concerning risks stem from loss of control and misalignment. A sufficiently powerful misaligned AI system could autonomously act against human interests following an objective function which does not capture human values. There is a great amount of uncertainty around what kinds of safeguards will be necessary to prevent misalignment. Many experts believe that safeguards may require many years or decades of concerted research effort.

AI risks are exacerbated by race dynamics — companies are rapidly progressing in the hope of being the first to develop artificial superintelligence. In the context of an AI race, nations may not have sufficient time to carefully and cautiously develop or evaluate such safeguards.

International agreements could help avoid or mitigate a race between nations. Even though governments are at early stages of understanding AI risks, key figures in the United States and China have already acknowledged concerns about AI global security risks and expressed interest in global governance approaches. As governments become more aware of AI risks, they may become interested in global governance strategies that curb these race dynamics. Alternatively, nations might agree to cede the development of advanced AI to a joint international project.

Nations might be much more likely to form international agreements around rules that they can reliably verify. By "verify", we mean that nations would be able to detect non-compliance with agreements. Ideally, verification methods (methods used to detect non-compliance) would provide early and reliable warning signs. "Early", in that non-compliance could be detected relatively quickly (before a nation achieved any meaningful unauthorized advantage in advanced AI development), and "reliable" in that non-compliance would be very likely to be detected.

## Methodology

Our process for compiling verification methods involved: (a) reviewing relevant literature on AI verification and international AI governance, (b) reviewing relevant literature on verification methods for agreements in other fields (e.g., nuclear security, biosecurity, arms control), and (c) conducting informal interviews with experts in technical AI governance. Through this process, we identified 10 verification methods.

For each verification method, we examined its application in other fields to inform our description of how the method could be used in the context of AI agreements and to inform our section about the method's precedent in other fields. We also grouped the methods into categories based on the circumstances in which they could be implemented: universally (national technical means), only in cases where a nation provides access (access-dependent), or only in cases in which nations have agreed to rules around the design of advanced hardware (hardware-dependent).

## National Technical Means

National technical means (NTM) are verification methods that can be employed by nations unilaterally, without requiring the cooperation or approval of other nations. These methods include remote sensing, whistleblowers, energy monitoring, customs data analysis, and financial intelligence.

### 1. Remote Sensing

#### Description

Remote sensing uses orbital imagery and thermal data to detect unauthorized data centers and semiconductor manufacturing facilities. Visual signatures of large computational facilities include distinctive architectural features (such as large warehouse buildings with specific cooling infrastructure), concentrations of electrical power infrastructure, and thermal signatures from waste heat dissipation.

#### Precedents

Remote sensing has been widely used in nuclear verification, arms control, and environmental monitoring. During the Cold War, satellite imagery was essential for verifying compliance with arms control treaties. Remote sensing has also been used to verify compliance with environmental treaties and to monitor deforestation and mining activities.

#### Possible Evasion Techniques

- Distributing computing infrastructure across many smaller facilities to avoid distinctive large-scale signatures
- Using camouflage or concealment to hide thermal or visual signatures
- Operating data centers in regions with high ambient temperatures to reduce thermal contrast
- Using renewable energy sources and more efficient cooling to reduce thermal signatures

### 2. Whistleblowers

#### Description

Whistleblower programs create financial and non-financial incentives for insiders to report non-compliance. These programs typically involve monetary rewards, legal protections, and confidentiality guarantees for individuals who report violations.

#### Precedents

Whistleblower programs have been used in various international verification regimes. The Organization for the Prohibition of Chemical Weapons (OPCW) has provisions for whistleblower submissions. The International Atomic Energy Agency (IAEA) also accepts information from member states about potential non-compliance.

#### Possible Evasion Techniques

- Compartmentalizing information so that most employees are unaware of non-compliant activities
- Creating strong organizational cultures that discourage whistleblowing
- Implementing severe punishments for whistleblowers to deter potential reporters
- Using sophisticated counterintelligence to identify potential whistleblowers

### 3. Energy Monitoring

#### Description

Energy monitoring involves analyzing power consumption patterns to detect the presence of large GPU clusters or data centers. Large-scale AI training requires substantial electrical power, and unusual or unexplained power consumption patterns could indicate unauthorized activities.

#### Precedents

Energy monitoring has been proposed and discussed in the context of nuclear verification. The International Atomic Energy Agency (IAEA) sometimes uses electricity data to monitor nuclear facilities. Energy signatures have also been analyzed in the context of monitoring mining operations and other large-scale industrial activities.

#### Possible Evasion Techniques

- Distributing training activities across many locations to reduce individual facility power signatures
- Using renewable energy sources that may be harder to monitor
- Concealing power usage as part of other industrial activities
- Operating training runs during periods of high overall power consumption

### 4. Customs Data Analysis

#### Description

Customs data analysis involves tracking the movement of critical AI hardware (such as advanced semiconductors and specialized networking equipment) and raw materials (such as rare earth elements used in semiconductor manufacturing). Unusual patterns of imports or exports of these materials could indicate unauthorized AI development activities.

#### Precedents

Customs analysis has been used in nuclear security and proliferation prevention. The Nuclear Suppliers Group uses customs data to track nuclear materials and equipment. Customs data has also been analyzed to prevent the proliferation of chemical and biological weapons and to enforce sanctions.

#### Possible Evasion Techniques

- Smuggling hardware through informal supply chains
- Mislabeling shipments to disguise their contents
- Using countries with less rigorous customs monitoring as transshipment points
- Manufacturing critical hardware domestically rather than importing it

### 5. Financial Intelligence

#### Description

Financial intelligence involves monitoring financial transactions related to AI development. Large AI training runs require substantial financial expenditures for hardware, electricity, and personnel. Unusual or unexplained financial transactions could indicate unauthorized AI development.

#### Precedents

Financial intelligence has been widely used in countering proliferation and combating terrorism. Financial institutions work with government authorities to identify suspicious transactions related to weapons development or terrorist financing. Banks and financial institutions are required to report large or suspicious transactions.

#### Possible Evasion Techniques

- Using cryptocurrency or other difficult-to-trace payment methods
- Distributing purchases across multiple entities or countries
- Using legitimate companies as fronts for illicit purchases
- Making small purchases over time rather than single large transactions

## Access-Dependent Methods

Access-dependent methods require some degree of access to suspected non-compliant nations. These methods include data center inspections, semiconductor manufacturing facility inspections, and AI developer inspections.

### 1. Data Center Inspections

#### Description

Data center inspections involve conducting on-site inspections to assess the size and capabilities of data centers, verify compliance with hardware agreements, and verify compliance with other safety and security agreements. Inspections could verify the number, type, and location of processors and accelerators (GPUs, TPUs, custom chips) and assess data center cooling and power infrastructure.

#### Precedents

Inspections have been central to many arms control and non-proliferation regimes. The IAEA conducts inspections of nuclear facilities in signatory states. The OPCW conducts inspections of chemical facilities. The Biological Weapons Convention relies on inspections, though inspections under this convention have been limited. Challenge inspections (where inspectors can request to inspect a facility to investigate suspected violations) have been used in nuclear and chemical verification regimes.

#### Possible Evasion Techniques

- Hiding equipment before inspections through advance warning
- Falsifying records about the capacity and purpose of hardware
- Using mobile or temporary facilities that can be quickly relocated or dismantled
- Maintaining dual-use facilities that could plausibly be used for legitimate purposes

### 2. Semiconductor Manufacturing Facility Inspections

#### Description

Inspections of semiconductor manufacturing facilities would assess the quantity of advanced chip production and verify that chip production conforms to any agreements. Inspectors could verify production capacity, assess the types of chips being produced, and verify that chip production is consistent with reported levels.

#### Precedents

Inspections of dual-use manufacturing facilities have been conducted in the context of the Comprehensive Nuclear-Test-Ban Treaty (CTBT) and other arms control agreements. The IAEA inspects uranium enrichment facilities.

#### Possible Evasion Techniques

- Producing chips through covert facilities
- Falsifying production records
- Using foreign chip manufacturing to circumvent monitoring
- Mislabeling or disguising the purpose of chip production

### 3. AI Developer Inspections

#### Description

AI developer inspections would involve conducting inspections of AI development facilities. These inspections could include interviews with development team members, audits of documentation (such as code, training logs, and model weights), and potential code reviews. The goal would be to verify that AI development conforms to agreed-upon standards (e.g., that training runs do not exceed a specified FLOP threshold).

#### Precedents

Inspections of research facilities are less common in arms control agreements than inspections of manufacturing or weapons storage facilities. However, the IAEA conducts inspections of research nuclear reactors. Some proposals for biological weapons verification have included inspections of research facilities. The challenge of verifying activities in research facilities stems from the difficulty of distinguishing between legitimate and prohibited activities.

#### Possible Evasion Techniques

- Conducting unauthorized training runs in covert facilities
- Falsifying training logs or documentation
- Using distributed or federated training to hide the scale of training activities
- Concealing training activities as smaller-scale research or development efforts

## Hardware-Dependent Methods

Hardware-dependent methods require that nations have agreed to rules around the design of advanced hardware. These methods include chip location tracking and chip-based reporting.

### 1. Chip Location Tracking

#### Description

Chip location tracking would involve embedding unique identifiers and location-tracking capabilities into advanced AI chips. These location trackers could work through various mechanisms, such as GPS, cell networks, or satellite networks. The location data would be periodically transmitted to an international body to verify that chips are being used in authorized locations and facilities.

#### Precedents

Tracking technologies have been used in various contexts. GPS tracking has been used in the context of arms control (e.g., in Iraq after the Gulf War). Tracking is also used in supply chain management and logistics. In the context of dual-use items, tracking has been proposed but rarely implemented.

#### Possible Evasion Techniques

- Removing tracking hardware from chips or disabling tracking capabilities
- Using signal jamming to prevent location data transmission
- Moving chips to locations that are difficult to monitor (such as underground facilities)
- Using multiple layers of obfuscation or false positives to confuse location tracking systems

### 2. Chip-Based Reporting

#### Description

Chip-based reporting would involve embedding capabilities into advanced AI chips that automatically detect and report if chips are being used for unauthorized purposes. For example, chips could be programmed to detect if they are being used for training runs that exceed a certain FLOP threshold or if they are being used in facilities that are not authorized for advanced AI development. In cases where unauthorized use is detected, the chips could automatically report this to an international body.

#### Precedents

Automated reporting systems are less common in arms control agreements. However, similar concepts have been discussed in the context of nuclear verification (e.g., sensors that automatically detect radiation). Telemetry and automated reporting are used in environmental monitoring (e.g., for tracking greenhouse gas emissions or air quality).

#### Possible Evasion Techniques

- Removing reporting capabilities from chips
- Modifying chip firmware to disable unauthorized-use detection
- Using older chips or non-standard chips that do not have reporting capabilities
- Creating false signals to confuse reporting systems

## Future Directions

Our work provides a foundation for discussions on AI governance verification, but several key areas require further research:

- **Red-teaming exercises for verification regimes**: Future work could examine how adversaries might attempt to circumvent a verification regime, describe potential evasion methods, and develop robust countermeasures to improve the effectiveness of the verification regime.

- **Design of international AI governance institutions**: Future work could examine how international AI governance institutions should be designed, potentially drawing lessons from existing international bodies. Such work could explore questions such as: (a) what specific powers should be granted to the international institution, (b) how the institution should make core decisions, (c) how power is distributed between nations, and (d) how to handle potential violations or instances of non-compliance.

- **Enforcement strategies**: Future work could examine what kinds of responses could be issued if non-compliance is discovered. This includes examining how such responses can be proportionate to the severity of the violation.

- **Development of tamper-proof and privacy-preserving hardware-enabled verification mechanisms**: Future R&D efforts could improve the effectiveness, feasibility, robustness, or desirability of various hardware-dependent verification methods.

## Conclusion

This paper has outlined 10 verification methods that could be used to detect non-compliance with international AI agreements. These methods span three categories: national technical means, access-dependent methods, and hardware-dependent methods. Each method has strengths and limitations. The most effective verification regime would likely use a combination of these methods to provide multiple lines of detection and to address the weaknesses of individual methods.

The development of robust verification mechanisms is essential for the formation of effective international AI governance agreements. As AI capabilities continue to advance, the importance of reliable and early detection of potential violations will only increase. This paper aims to contribute to the ongoing discussion of how to design effective verification regimes for international AI agreements.
