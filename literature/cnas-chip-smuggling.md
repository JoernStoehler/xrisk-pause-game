# Countering AI Chip Smuggling Has Become a National Security Priority

**Full title:** Countering AI Chip Smuggling Has Become a National Security Priority: An Updated Playbook for Preventing AI Chip Smuggling to the PRC

**Authors:** Erich Grunewald (Institute for AI Policy and Strategy) and Tim Fist (Center for a New American Security)

**Date:** June 2025

**Publisher:** Center for a New American Security (CNAS), Technology & National Security Program

**URL:** https://www.cnas.org/publications/reports/countering-ai-chip-smuggling-has-become-a-national-security-priority

**PDF:** https://s3.us-east-1.amazonaws.com/files.cnas.org/documents/Countering-AI-Chip-Smuggling-Has-Become-a-National-Security-Priority-CNAS-Working-Paper-2020-format_061125_Final.pdf

**Note:** This is an updated version of the authors' October 2023 paper "Preventing AI Chip Smuggling to China" (https://www.cnas.org/publications/reports/preventing-ai-chip-smuggling-to-china). The text below is transcribed from the June 2025 PDF (32 pages). Figures, charts, and images are described in brackets. Footnote superscript numbers are preserved but footnote text is not included (see PDF for full endnotes).

---

## Executive Summary

Based on the available evidence, artificial intelligence (AI) chip smuggling has likely been occurring at a scale that significantly undermines U.S. attempts to restrict the People's Republic of China's (PRC's) access to advanced AI. This is indicated by four lines of argument:

1. **Smuggling should be expected based on historical precedent**. The PRC has a long history of smuggling U.S. technology despite export restrictions, which has rarely resulted in criminal or civil penalties.^1

2. **Smuggling of U.S. AI chips is highly incentivized by their superior performance, higher supply, and more mature software ecosystem relative to chips legally available to Chinese AI labs**.^2 Based on publicly available data, of the 22 notable models that had been developed exclusively in the PRC by 2025, only two were trained with Chinese chips.^3

3. **Six news outlets have independently reported evidence of large-scale AI chip smuggling, totaling tens to hundreds of thousands of chips smuggled in 2024**. One smuggler reportedly handled an order of for servers containing 2,400 NVIDIA H100s--worth $120 million--to a customer in the PRC.^4 Another facilitated an order worth $103 million.^5 Singapore authorities arrested three individuals suspected of diverting AI servers worth $390 million.^6 Within this reporting, multiple chip resellers and start-ups in the PRC have claimed that gaining access to export-controlled AI chips is straightforward, with one Chinese start-up founder estimating in 2024 that there were more than 100,000 NVIDIA H100s in the PRC.^7 Most of the Chinese chip sellers interviewed in these reports confirm that they work with multiple distributors, use shell companies based overseas, and employ simple tactics to avoid detection, such as relabeling shipments as tea or toys.^8

4. **There are many online listings for export-controlled AI chips available for purchase in the PRC.** The authors conducted a non-exhaustive search of three Chinese online marketplaces and found 132 domestic listings for export-controlled chips, along with many photos of supposedly smuggled goods.^9 Where sellers provided information on stock, the average quantity of export-controlled graphics processing units (GPUs) per listing was around 1,200 for GPU server listings and 400 for GPU card listings. Though this data is patchy and likely unreliable, the total stock implied is around 100,000 H100 GPUs, as of December 2024.

Across these data sources, there is much uncertainty in either direction. Using publicly available data from this reporting, while accounting for uncertainty about its veracity, the authors estimate the total scale of AI chip smuggling to the PRC in 2024 could have ranged anywhere from 10,000 to several hundred thousand chips, with a median estimate of around 140,000. This estimate is based on a probabilistic model of chip smuggling as an extrapolation of known cases. It should be understood as a high-level distribution of possible outcomes, rather than a summation of confirmed smuggling cases.^10

If the true number is within this distribution, **smuggled chips could make up a significant portion of AI compute acquired by the PRC in 2024-- between 1 and 30 percent of its inference compute capacity (median 6 percent) or between 1 and 40 percent of its training compute capacity (median 10 percent).** Other sources of PRC AI compute acquisition considered are Huawei Ascend chips fabricated by China's Semiconductor Manufacturing International Corporation (SMIC) and Taiwan Semiconductor Manufacturing Company (TSMC), and NVIDIA H20 chips legally exported into the PRC. Because the export of the H20 was restricted in April 2025, and TSMC is under investigation for its role in fabricating chips for Huawei, smuggled chips may make up a much larger portion of AI compute acquired by the PRC in 2025 and beyond.^11

Given the potential scale of AI chip smuggling to the PRC, policymakers should prioritize gathering information to better understand its true extent. Large-scale chip smuggling and uncertainty about its true extent exist partly because the Bureau of Industry and Security (BIS)--the part of government tasked with administering and enforcing AI chip export controls--is under-resourced. The BIS's budget for enforcement has decreased in real terms over time, even after it was tasked with far more responsibilities in 2022 following Russia's invasion of Ukraine and the introduction of a wide range of new export controls on AI chips and related tooling. The profits likely netted by chip smugglers from just three reported smuggling cases from *The New York Times* and *The Information* are more than double the BIS's annual budget for export control enforcement.^12

AI chip smuggling is a recent problem, and counterefforts remain limited. Moreover, AI chip companies typically lack the deep experience in exporting sensitive goods that exists, for example, in the defense industry. As a result, there are many promising steps that government and industry could take to collect better information and tackle smuggling. The authors offer six recommendations:

1. AI chip companies and their distributors should leverage their technical capacities and resources to significantly strengthen their **due diligence processes,** make similar requirements of any distribution firms to which they sell, and report to the BIS on specific measures taken.

2. The BIS could use its existing authorities to **create a new notification requirement for controlled AI chip exports, reexports, and ownership transfers.** This would enable much better tracking of controlled chips exported outside the United States, allowing for more efficient enforcement.

3. AI chip designers should implement software-based **location verification** features, allowing the owner of a controlled chip to prove that the chip is not located in the PRC. This would both provide valuable data on the scale of chip smuggling and provide a useful mechanism for enforcement, enabling knowledge of which specific devices have been smuggled, and knowledge of which exporters and downstream entities were responsible. BIS could incentivize the development of these features through the normal export licensing process today, by requiring chip owners outside the United States to periodically prove that their chips are not in the PRC as a condition for importing chips.

4. The Department of Commerce, in **coordination with the intelligence community (IC)**, could establish processes to generate information on the scale, locations, and perpetrators of AI chip smuggling, and share it with the BIS to aid enforcement, inform policy, and share leads with relevant industry actors. This could be facilitated through the Director for National Intelligence (DNI) updating the National Intelligence Priorities Framework to make intelligence collection related to export control enforcement a top priority, and the DNI and Secretary of Commerce establishing a joint analysis team (for example, in the Export Control Enforcement Center) to facilitate BIS-IC coordination.

5. Congress could authorize a **whistleblower incentive program and qui tam lawsuits** (lawsuits that allow a private person to prosecute on behalf of the government) to incentivize reports of possible export violations. These two measures could significantly boost the BIS's export enforcement while paying for themselves in revenue generated through additional penalties. A whistleblower program could be modeled on the highly successful Securities and Exchange Commission (SEC) Whistleblower Program, which tackles federal securities laws violations and has aided the collection of $7 billion to $22 billion in penalties since 2011.^13 In April 2025, a bipartisan bill was introduced in the Senate to implement such a program.^14 Authorizing qui tam lawsuits against those who violate the export rules would additionally allow individuals to sue a violator and collect a portion of the resulting penalty, modeled on a similar law in the False Claims Act.

6. Finally, Congress could grant **the White House's requested budget of $313 million for the BIS** for fiscal year 2026. This 64 percent increase over the BIS's current budget of $191 million would help the BIS modernize its tooling and improve operational capacity. In addition to strengthening national security, funding to improve the enforcement of the AI chip controls would likely pay for itself through increased collection of fines on violators of the export rules. The multiple documented instances of AI chip smuggling from 2024 alone could each have resulted in penalties of over $200 million, more than the BIS's annual budget.

As controlling access to advanced AI capabilities becomes an increasing national security imperative, U.S. policymakers should prioritize actions to collect more reliable information on the extent of AI chip smuggling and close gaps wherever possible.

---

## Collecting Detailed Data on AI Chip Smuggling Is Difficult Under Existing Laws

Under the Export Control Reform Act (ECRA), the legal authority underpinning AI chip export controls, companies are incentivized to perform only the minimum supply chain due diligence required to avoid legal exposure, as an exporter is only subject to criminal penalty if it willfully commits a violation of the rules.^15 The Bureau of Industry and Security (BIS), the agency tasked with overseas export control enforcement for AI chips, can impose civil penalties without evidence that a company had positive "knowledge" of a violation, but it is reportedly reluctant to do so. This led a December 2024 report by the U.S. Senate's Permanent Subcommittee on Investigations Majority Staff to recommend that the BIS should "charge companies with 'knowing' violations when they fail to sufficiently investigate red flags or other strong indicia of potential diversion and violations occur."^16

As a result, despite their large budgets and central position in the AI chip supply chain--which put them in a favorable position to collect *detailed data* on potential cases of chip smuggling--U.S. chip firms often remain unaware of the ultimate destination of their chips. For the purposes of this paper, "detailed data" refers to specific information about a suspected smuggling case that would directly lead to enforcement action, including the business identity of the exporter, the legal identities of persons involved in the transaction, and the serial numbers of the smuggled devices.

Another option for detailed data collection is via the U.S. government. However, the BIS has little spare capacity to proactively collect evidence about cases of smuggling. The BIS's budget for enforcement has decreased in real terms over the past few years despite a massive increase in its responsibilities.^17 The BIS has just six export control officers across all of East, South, and Southeast Asia (across China, India, Singapore, Taiwan, and Hong Kong), and reportedly only two in-house Mandarin speakers as of May 2024.^18 The BIS is also reportedly limited by Chinese law and a U.S.-China agreement from conducting investigations inside the PRC.^19 If smuggled AI chips are being used to support state-backed military and intelligence projects in the PRC--the intended targets of the U.S. chip export controls--this would be difficult for the BIS could uncover this with its current resources.

A final option for detailed data collection is open-source intelligence from nongovernmental research organizations. This approach has successfully uncovered large-scale chip smuggling to support Russia's invasion of Ukraine. However, this intelligence gathering relied on the collection of Russian military hardware by Ukrainian soldiers; there is no equivalent in the PRC incentivized to uncover evidence of smuggling.^20 Open-source intelligence gathering is further limited by a lack of access to private business data, and collecting data on the ground in the PRC, especially in coordination with Chinese citizens, risks attracting retribution from the Chinese Communist Party's national security dragnet.^21

Taken together, these considerations highlight the difficulty of enforcing export controls on AI chips. They also explain why the lack of detailed data on large-scale smuggling of AI chips to the PRC does not necessarily prove its absence. Assessing the scale of AI chip smuggling to the PRC requires looking at the more scattered evidence that does exist.

---

## Large Volumes of AI Chips Are Likely Being Smuggled into the PRC

In an October 2023 paper, the authors estimated the potential scale of AI chip smuggling to the PRC in the event of a concerted smuggling effort, estimating a 50 percent chance that more than 12,500 chips would be smuggled in 2024.^22 Since then, multiple sources of public reporting have indicated that a concerted smuggling effort is indeed underway. This reporting, combined with other sources of evidence, strongly suggests that at least 100,000 AI chips were smuggled into the PRC in 2024. Four lines of argument support this conclusion:

**First, there is a long record of PRC actors smuggling sensitive U.S. technology despite export controls.** According to customs data analyzed by *Nikkei Asia*, over $570 million worth of U.S. chips were shipped to Russia from the PRC in 2022 despite sanctions, up from $51 million in 2021.^23 These illicit activities, largely carried out by actors outside U.S. jurisdiction, rarely result in criminal or civil penalties.

**Second, Chinese AI companies are highly incentivized to obtain controlled U.S.-designed chips,** given their substantially higher performance versus PRC-made alternatives, larger supply, and superior software stacks.^24 Epoch AI's publicly available data confirms the preferences of Chinese developers to use U.S. chips. Of the 22 notable models developed exclusively in the PRC by 2025, only two were trained with Chinese chips.

[Figure 1: Which Chips Are AI Developers in Different Countries Using? Bar chart showing number of notable models trained by developers in the US, China, and other countries, and the chips used to train them, categorized by chip design firm (NVIDIA, Google, AMD, Huawei). US developers overwhelmingly use NVIDIA (~80) and Google (~40). Other countries use mostly NVIDIA (~100) with some Google and AMD. China uses mostly NVIDIA (~20) with a small amount of Huawei. Chart source: Authors, Epoch AI.]

**Third, several investigative reports by journalists point to large-scale AI chip smuggling into the PRC**. In 2023, early reports identified cases of small-scale smuggling (tens of chips at a time), mostly related to NVIDIA A100 GPUs, which the PRC could have stockpiled prior to the October 2022 ban.^25 More recent reports suggest that a much larger smuggling ecosystem is now active, with brokers selling hundreds to thousands of AI chips at a time. These reported smuggling cases mostly involve NVIDIA H100 GPUs and servers, which were launched in March 2023 (after export controls came into force). More recent cases have also involved NVIDIA Blackwell GPUs, launched in December 2024.^26 Large-scale AI chip smuggling of this kind has been independently reported by *The Wall Street Journal*, *The New York Times*, *The Information*, and the *Financial Times*.^27 One smuggler reportedly handled an order of 2,400 cutting-edge NVIDIA H100s, worth $120 million, to a customer in the PRC.^28 Another facilitated an order worth $103 million.^29 Outside of the PRC, *Bloomberg* reported that nearly 9,000 AI chips worth $300 million were smuggled into Russia via an Indian pharmaceutical company over a six month period, despite U.S. sanctions.^30

According to interviews from these reports, it is accepted among buyers and sellers of AI chips in the PRC that large-scale smuggling of U.S. AI chips is occurring. One Chinese start-up founder estimated that there are more than 100,000 NVIDIA H100s in the PRC.^31 Most of the Chinese chip sellers interviewed in these reports confirm that they work with multiple distributors, use shell companies based overseas, and employ simple tactics to avoid detection, such as relabeling shipments as tea or toys.^32 As Figure 2 shows, reports also suggest that smuggled AI chips are not substantially more expensive than chips bought legally in the United States, and lead times for smuggled chips in 2024 were on the scale of weeks rather than months.

[Figure 2: A Summary of AI Chip Smuggling Cases Uncovered by Journalistic Investigations -- detailed table with columns for Source, Date, Summary, and Price, covering investigations by Reuters (Jun '23), IC Trends (Nov '23), Reuters (Jan '24), Wall Street Journal (Jul '24), The New York Times (Aug '24), and The Information (Aug '24). Key findings include: A100 cards at $19,150 (1.9x MSRP), H100 cards at $44,200 (1.5x MSRP), vendors in Shenzhen selling A100s and H100s, one vendor selling 200-300 chips at a time, another selling 2,000 H100s for $103 million, a smuggler shipping 300 H100 servers (2,400 GPUs) via Malaysia for $130 million, and H100 server prices of $385,000-$400,000 (1.2-1.3x MSRP).]

**Fourth, online marketplace listings for export-controlled AI chips available in the PRC imply substantial smuggling operations.** The authors conducted nonexhaustive automated searches of three online platforms for listings featuring potentially smuggled chips: Baidu Tieba (a forum often used as an informal marketplace), JD.com (a marketplace often used for electronics, operated by China's second largest e-commerce company), and Taobao (China's largest online shopping platform, owned by Alibaba Group). The authors then manually checked each retrieved listing to determine whether it claimed to sell export-controlled chips.^34 The results are in Figure 3. From this search, the authors found 57 listings for export-controlled servers (devices typically containing eight graphics processing units, or GPUs, for installation in data centers), and 75 listings for export-controlled cards (individual GPUs). On Baidu Tieba, information was sometimes available about the quantity of stock a seller possessed. Expressed as total GPUs, this averaged to around 1,200 GPUs for those selling servers and 400 GPUs for those selling cards. Many listings also contained photos of smuggled products.^35

[Figure 3: Export-Controlled AI Chip Listings on Chinese Online Marketplaces -- table showing listings on Baidu Tieba, JD.com, and Taobao for H100 servers (53 total listings, avg 1,227 GPUs per server listing on Baidu Tieba), H100 cards (75 total listings, avg 400 GPUs per card listing on Baidu Tieba), and H200 servers (4 total listings, avg 1,024 GPUs per listing on Baidu Tieba).]

Despite the ready availability of this data, it is highly unlikely to reflect the true extent of AI chip smuggling. First, it is unlikely that this data would include larger sales, as direct negotiation with suppliers further up the chain likely yields lower prices and more reliable deliveries. Furthermore, it is likely that at least some of these listings are fake or are for counterfeit goods. This data should be taken mainly as evidence for the existence of an AI chip smuggling ecosystem, indicating that smuggled AI chips are readily available in the PRC in informal and secondhand markets.

Taken together, these four lines of argument strongly suggest a sizable pipeline of smuggled chips into the PRC, in turn suggesting that U.S. export controls on AI chips are not currently working as intended. The authors estimate that it is more likely than not that over 100,000 banned AI chips, worth several billion dollars, were likely smuggled into the PRC in 2024. The authors reached this estimate by breaking two separate smuggling pathways down into constituent factors (for example, the number of vendors selling banned chips and the number of chips sold per vendor and year), and anchoring those factors in the aforementioned data from public reporting.^36 The pathways are then weighed by probability and combined to yield an all-things-considered estimate. This estimate is based on probabilistic extrapolations of known reports. In other words, the authors estimate the potential scale of both reported and unreported smuggling. Importantly, the estimates should be understood as a high-level distribution of possible outcomes, rather than a summation of confirmed smuggling cases. The authors offer these estimates to help prioritize policy attention and resources in the absence of better data. Further details about the methodology are included in Appendix A.

[Figure 4: Probabilistic Model of AI Chip Smuggling to the PRC in 2024 -- histogram/density plot on log scale from 1K to 10M showing likelihood of smuggling at different scales. The 90% confidence interval spans roughly from 10,000 to several hundred thousand, with the peak/median around 140,000.]

If this distribution is accurate, smuggled chips could make up a significant portion of AI compute acquired by the PRC in 2024--between 1 and 30 percent of its inference compute capacity (median 6 percent) or between 1 and 40 percent of its training compute capacity (median 10 percent).^37 This comparison is based on:

- Tear down analysis of Ascend chips and reporting from Reuters and the Center for Strategic and International Studies, stating that TSMC has fabricated between 2 and 3 million Ascend 910B dies for Huawei, which could be used to produce 750,000 to 1.125 million Ascend 910Cs, after taking into account a 75% success rate during packaging.^38

- Analysis from the authors on the number of Ascend 910Cs manufactured by SMIC in 2024, based on reports of PRC wafer production capacity, fabrication yields, and the proportion of capacity used for AI chips.^39

- A report from Reuters, claiming that NVIDIA shipped 1 million H20s in 2024.^40

[Figure 5: Estimates of AI Compute Acquired by the PRC in 2024 -- two bar charts showing Training and Inference compute in exaflop/s FP16. Training: Ascend 910Cs (TSMC) ~348, H20s (legally imported) ~89, H100s (smuggled) ~54 with wide 90% CI, Ascend 910Cs (SMIC) ~46. Inference: Ascend 910Cs (TSMC) ~104, H20s ~118, H100s (smuggled) ~16 with 90% CI, Ascend 910Cs (SMIC) ~14.]

---

## Why Does AI Chip Smuggling Occur?

Widespread smuggling of U.S. AI chips occurs because PRC-linked actors are willing to disregard U.S. export law, because BIS's lack of resourcing creates opportunities for smuggling, and because U.S. chips are superior to domestic Chinese alternatives.

PRC-linked actors' willingness to disregard U.S. export law is well-documented.^41 For example, PRC entities have facilitated widespread smuggling of conventional chips to Russia--shipments from Hong Kong and China jumped tenfold after the invasion of Ukraine.^42 PRC firms have also circumvented end-use and end-user restrictions in the PRC: a 2022 analysis by the Center for Security and Emerging Technology found that PRC military and state-owned defense enterprises were acquiring U.S.-made chips despite end-use and end-user controls.^43

These PRC successes are enabled by resourcing issues at home. BIS is underresourced and ill-equipped to combat AI chip smuggling. For example, a single U.S. Export Control Officer is responsible for investigating violations, conducting inspections, and managing outreach across all of Southeast Asia and Australasia.^44 Overall, AI chip smugglers can likely spend more than fifteen times as much on smuggling operations as the BIS can spend on enforcing the AI chip controls.^45 This is because the BIS's budget for export enforcement is relatively small ($55 million in 2024), whereas AI chip smugglers likely generate significant profits, based on estimated volumes and reported premiums. Estimated profits from just three reported cases of large-scale AI chip smuggling in 2024 exceeded the BIS's entire enforcement budget for the year.

[Figure 6: Resources Available to BIS vs AI Chip Smugglers -- bar chart comparing BIS's total enforcement budget 2024 (~$55M) vs estimated smuggler profits from three reported smuggling cases 2024 (~$150M total, broken down by New York Times, The Information (1), and The Information (2) cases). Caption notes 30% margin assumption over typical sales price.]

While the BIS can take certain steps immediately to reduce AI chip smuggling, it will ultimately need more resources to enforce the controls on AI chips and related tools effectively.

Smuggling is additionally incentivized by the wide performance gap between export-controlled U.S. chips and domestically made Chinese chips. Access to large quantities of powerful AI chips will likely remain a key bottleneck in Chinese AI development, as it is for U.S. firms.^46 Before the October 2023 update to the Interim Final Rule published on October 7, 2023, Chinese companies could legally import NVIDIA A800s and H800s, the export control-compliant counterparts to the NVIDIA A100 and H100, respectively. DeepSeek's widely noted V3 and R1 language models, released in December 2024 and January 2025, respectively, were both developed using NVIDIA H800s.^47 These models achieved strong benchmark scores and demonstrated impressive algorithmic advances. Many commentators have thus interpreted DeepSeek's success as a sign that AI chip export controls have failed.^48 This is wrong for two reasons. First, effective AI chip export restrictions have not been in force long enough to have a large effect--the chips that DeepSeek bought before October 2023 are only 10 to 30 percent less computationally performant than their counterparts available outside the PRC, which are still the most widely used AI chips.^49 Second, DeepSeek's models would have been even more capable if they had been trained with better chips.^50 When the founder of DeepSeek was asked about financing plans in September 2024, he responded that money "has never been the problem for us; bans on shipments of advanced chips are the problem."^51

Now that the BIS has also banned the A800 and H800, the performance gap between the chips available for legal purchase in the PRC and outside the PRC has widened, and it will likely keep growing as NVIDIA's new Blackwell series of chips enters the market.^52 For context, the best banned chip is about seven times as performant for AI training as the best that can be exported legally to the PRC, and two to three times as performant as the best domestic Chinese AI chip.^53 It also has major software and other advantages over the best domestic Chinese alternative.^54 This dynamic likely creates strong incentives to smuggle.

---

## Better Enforcement Can Curtail AI Chip Smuggling

AI chip smugglers follow a well-established playbook. Typically, they purchase chips via shell or front companies located in "third countries," generally in East and Southeast Asia. Smugglers then reexport the chips to the PRC, sometimes with intermediate steps to muddy the trail, such as by labeling them as another, non-restricted product. Shell companies can typically be set up online for a few thousand dollars in a matter of hours or days, whereas it can take years of investigation to uncover a shell company's illicit activities.^55 Bad actors use these methods to smuggle varying quantities of chips, ranging from small orders to massive shipments worth hundreds of millions of dollars.^56

[Figure 7: The AI Chip Smuggling Chain -- flow diagram showing: Chip manufacturer (e.g. TSMC, mainly in Taiwan) and Electronics manufacturer (e.g. FOXCONN, LEADTEK) at top, connected to Chip designer (e.g. NVIDIA, AMD, in the US), which connects to Server builder (e.g. SUPERMICRO, DELL, HPE) and Distributor (e.g. INGRAM MICRO, TD SYNNEX). Distributor connects to Reseller. Both Server builder and Reseller connect to End customer and Smuggler. Smuggler connects to Server builder in PRC (e.g. XFUSION, INSPUR) which connects to End customer in PRC.]

Smugglers used this playbook to supply Russia with sanctioned military goods. A report by the U.S. Senate's Permanent Subcommittee on Investigations Majority Staff found that countries such as Armenia, Georgia, and Kazakhstan saw enormous increases in imports from U.S. chip firms following Russia's invasion of Ukraine, suggesting that restricted items were being reexported to Russia through those countries.^57 Similar evidence now points to AI chips being smuggled into the PRC. In 2024, NVIDIA's exports to Singapore alone constituted 18 percent of its total revenue--a sharp increase shortly after the A800 and H800 ban.^58 It is unlikely that Singapore or neighboring countries required this many of NVIDIA's chips--between 2013 and 2024, only 300 AI companies were founded across the entire Southeast Asian region, fewer than in Germany (394) or Japan (388)--suggesting a reasonable share of these chips were truly destined for the PRC.^59 In January 2025, Singapore authorities arrested three individuals for misrepresenting the ultimate destination of $390 million worth of AI servers containing NVIDIA chips shipped to Malaysia.^60 Chinese retailers are also advertising servers containing banned NVIDIA chips built by Chinese server makers--including NVIDIA partners like Inspur--suggesting there are also modules and/or graphics cards being smuggled into the PRC and assembled there.^61

**A Case Study of Large-Scale AI Chip Smuggling**

Based on interviews with eight chip smugglers, several NVIDIA employees, and authorized distributors, along with a review of procurement documents, *The Information* tracked multiple instances of large-scale chip smuggling.^62

In one case, the smuggling occurred as follows:

1. A company in eastern China placed a $120 million order for around 2,400 NVIDIA H100 graphics processing units (GPUs)--the most advanced AI GPU available from NVIDIA at the time.

2. The Chinese company placed the order with a broker in Malaysia, who assisted it in establishing a Malaysian shell company to conceal its national identity.

3. As part of this, the chip broker helped the Chinese company set up a Malaysian business website and email address. The broker also rented space in a Malaysian data center to temporarily house the GPUs once they arrived, in order to fool any NVIDIA staff conducting inspections.

4. After an unspecified number of weeks, the GPUs were shipped from the data center in Malaysia to the buyer in the PRC.

To enforce its controls, the BIS relies largely on exporters to screen buyers, look for red flags, report violations, and conduct other due diligence. However, these exporters have limited visibility into their distribution networks and little incentive to improve them. Within this ecosystem, NVIDIA is by far the most important player. It has an estimated 80 to 95 percent of the AI chip market, and all evidence of AI chip smuggling so far has concerned NVIDIA chips.^63 NVIDIA has responded to past reports of smuggling by stating that it insists its customers and partners "strictly adhere to all export control restrictions."^64 NVIDIA's AI chips are typically sold to partner companies that assemble them into servers. These servers are then sold to end-users, such as AI labs or cloud providers, sometimes via multiple layers of distributors and resellers. Large orders often involve a three-party negotiation between the buyer, the partner, and NVIDIA.^65

Within the space of server maker companies, NVIDIA's largest revenue source is Supermicro.^66 According to the *Financial Times*, "People involved in the trade said merchants in Malaysia, Japan, and Indonesia often shipped Supermicro servers or NVIDIA processors to Hong Kong before bringing them across the border to Shenzhen."^67 *The Information* report cites a smuggler claiming to acquire thousands of chips from companies like Dell and Supermicro "thanks to what he called 'strong personal relationships' with sales representatives at these firms."^68 A report by analyst firm Hindenburg Research also documented multiple compliance failures by Supermicro, alleging, for example, that it has supplied millions of dollars of products to a distributor in Russia through a Californian entity despite sanctions.^69 Supermicro servers have also been advertised on Chinese e-commerce sites.^70 Supermicro has responded to past reports of smuggling by stating that it follows "all US export control requirements on the sale, service, support, and export of GPU systems."^71

These companies lack visibility into their distribution networks for several reasons. First, existing regulations create the incentive to know as little as possible about who ultimately owns exported chips, so long as companies do the limited due diligence required to avoid legal exposure. Under ECRA, an exporter is only subject to criminal penalty if it willfully commits (or tries, conspires, or helps someone else commit) a violation of the rules, and for civil penalties, factors like willfulness, negligence, and concealment are considered.^72 Second, while these companies are strongly motivated to ensure compliance with U.S. regulations, they must balance more aggressive anti-smuggling efforts against their financial obligations to shareholders. It is unclear how such above-and-beyond efforts would affect the market competitiveness of these companies. NVIDIA has stated that illicit trade "would be a burden on our business, not a benefit," and rampant smuggling could cause the BIS to extend the export ban to important reexport countries, possibly reducing NVIDIA's access to foreign markets.^73

Despite these challenges, the U.S. government and industry can act to limit AI chip smuggling. AI chip smuggling is a relatively new phenomenon, and limited measures have been taken thus far to curb it. The incentives to smuggle AI chips increased substantially as the BIS tightened export controls in October 2023 and as AI companies began planning ever larger compute infrastructure buildouts. AI chip designers and resellers also lack deep experience in export control compliance, which is more common in the defense industry, suggesting substantial room for improvement.

With their significant technical capacity and resources, a few key companies could make a substantial difference in enforcing AI chip controls. As mentioned previously, NVIDIA holds an estimated 80 to 95 percent of the AI chip market, and it is likely that nearly all smuggled AI chips are NVIDIA chips.^74 Meanwhile, NVIDIA works closely with partners that assemble those chips into servers, such as Supermicro, and other partners that distribute servers to resellers. NVIDIA can encourage these partners to take additional measures to prevent smuggling--the authors recommend specific measures below--and even refuse to sell to them if they do not.

Finally, unlike other dual-use goods such as highly enriched uranium, AI chips are digital computers. This allows for a range of promising technical anti-smuggling measures enabled by functionality implemented directly on the chips' hardware or firmware. For example, AI chip designers could implement a software-based feature that allows chip owners to prove to some authority (like the chip designer or the BIS) that their chips are not located in the PRC, a proposal called "location verification."^75 Other hardware-enabled mechanisms could provide further tools to help the U.S. government enforce the AI chip controls.^76

---

## Recommendations

A key problem for enforcing the AI chip controls is that the BIS, AI chip designers like NVIDIA, and other AI chip exporters and reexporters currently lack a clear picture of the scale, geography, and key actors for AI chip smuggling. As a result, they cannot proactively block diversion attempts, take punitive action against smugglers to disincentivize future smuggling, or properly evaluate the effectiveness of the AI chip controls and related enforcement practices.

The BIS and chip exporters already have many capabilities to address AI chip smuggling, but they require a clearer picture of the smuggling ecosystem. For instance, the BIS can stop or penalize diversion attempts effectively when the violating entity has a presence in the United States. It is harder for them to do this abroad, but even in this case, the BIS has some ability to interdict shipments and penalize offenders. It can also extend the AI chip ban to third countries commonly used for reexport. Meanwhile, AI chip designers and distributors can cut out buyers that are likely to engage in smuggling, or that do not take appropriate due diligence measures.

Below, the authors offer a potential playbook to address AI chip smuggling. These recommendations focus primarily on actions that the BIS and industry can take with their current authorities and resources. Though the authors have designed each recommendation to be useful on its own, their synergies would make them more effective taken together.

[Figure 8: Overview of Proposed Recommendations -- flow diagram similar to Figure 7 but with additional boxes on the right side showing: Whistleblower Program (funded through Export Compliance Accountability Fund, individuals can make whistle-blower reports), Chip Notification Program (notifications for exports, reexports, and ownership transfers enable BIS to prioritize inspections and request location verification), and Intelligence Community (conducts joint analysis with BIS, e.g. through Export Control Enforcement Center). Arrows show information flows between these entities and the supply chain.]

### Strengthen Industry Due Diligence

Because of their substantial resources and interactions with potential buyers, AI chip companies and distributors have significant power to mitigate AI chip smuggling.^77 In particular, if NVIDIA were to strengthen its due diligence processes and cause companies in its distribution network to do the same, most smuggling cases would be covered by this strengthened regime.

AI chip companies are aware that smuggling happens and have taken some steps to address the problem.^78 The Semiconductor Industry Association (SIA) recently highlighted extra steps some chip companies have taken to curb smuggling into Russia.^79 These "compliance-plus" measures include deploying software to automatically scan for smuggling, verifying customer addresses, contractually prohibiting customers from reselling chips, requesting more information from customers about how and where they intend to use chips, regularly auditing distributors' sales data and practices, and establishing mechanisms for employees to anonymously report smuggling.^80 The SIA does not name specific companies or detail which measures each has implemented.

These measures are helpful but unlikely to dramatically reduce smuggling, given that most smuggling likely occurs further down the supply chain once chips have been sold by distributors. Figure 9 highlights actions firms could take to ensure a robust due diligence process for all substantial purchases of export-controlled chips.

[Figure 9: Enhanced Due Diligence Measures for AI Chip Exports -- table with four stages:

**Initial customer risk assessment:** Identify the customer and their beneficial owners, and assess chip smuggling risk factors such as: Is the customer in a country where smuggling is more likely? Is the customer a first-time buyer or otherwise unknown entity? Does the customer have close ties to the PRC or other countries where AI chip exports are restricted? Where will the chips be kept and what will they be used for?

**Further vetting of customers assessed as higher risk:** Conduct more rigorous vetting including: checking if reseller has sold controlled items in past, identifying key personnel and checking relevant lists/PRC ties, examining operational and financial history, checking for vouching parties, visiting offices, checking red flags in Supplement No. 3 to Part 732 of EAR, and other anti-money-laundering measures. For resellers: regularly audit sales records and KYC investigations, ensure KYC processes understood and staffed, check previous sales for repeat buyers.

**Further risk mitigation (if significant unresolved concerns):** Place order on hold, limit quantities or impose staged delivery, consult BIS, consider order modification or cancellation.

**Post-shipment verification:** For end-use customers (cloud providers, AI labs): carry out post-shipment inspections within a week and again six months later, verify repeat buyers' previous chips still being used as intended.

Footnote: NVIDIA (and possibly other firms) has started to make post-shipment inspections for at least some large orders to verify that the chips sold are installed in a data center. However, these measures likely need to be improved, as shown by a recent report of a smuggler temporarily installing the chips in a data center to fool NVIDIA's inspectors before shipping them to the PRC.]

These voluntary due diligence measures will only be effective if they are well implemented and have industry buy-in. To build confidence, NVIDIA and other exporters should form detailed plans for their intended due diligence measures and share them confidentially with the BIS and relevant executive branch officials and congressional committees. Meanwhile, the BIS should periodically verify implementation and, if necessary, check records of past Know Your Customer (KYC) evaluations.

These due diligence measures will incur costs on exporters and reexporters. AI chip exporters will bear most of the cost, but they have seen staggering revenue growth in recent years. For example, NVIDIA earned a net income of $30 billion in fiscal year 2024.^81 Additionally, extremely strong and growing U.S. demand for NVIDIA's AI chips means that it could redirect sales from potentially risky actors in Southeast and East Asia to more trustworthy domestic customers.^82 Though the BIS will need to play a consulting role with industry as these due diligence measures are implemented, it could likely do so without additional appropriations.

### Create AI Chip Export Notification Requirements

The BIS could collect much more detailed information about the location and ownership of controlled AI chips by creating a new notification requirement. This would involve companies reporting ownership and location changes for restricted AI chips involving a foreign entity or location to the BIS. The BIS would then collect that data and store them in a database, with the BIS then using that data to improve its enforcement activities. This data would significantly enhance the BIS's visibility into advanced AI chip distribution networks, making it easier to detect diversion. A previous analysis conducted by the authors provides offers one potential form of implementation.^83 Here, the authors describe a leaner version that the BIS could implement without any change to its budget or existing authorities. Former Senator Mitt Romney mentioned a similar idea in a hearing on export control enforcement that took place in April 2024.^84

The proposal requires that:

- The BIS adds a notification requirement to the Export Administration Regulations (EAR) for location or ownership changes involving a foreign location or entity of more than 100 items controlled by ECCN 4A090. The requirement is modeled after existing requirements in the EAR, and like those would exist separately from license requirements and requests. The authors provide draft text for these additions in Appendix B.

- Anyone who initiates a transaction of affected items reports it to the BIS within a month, using a standard form.

- The BIS sets up a database to collect, store, and use the reported information.

[Figure 10: Useful Data Attributes for AI Chip Notification Requirements -- table listing: Serial number (to track items across transfers), Product name (to search/filter/group), Export Control Classification Number (to search/filter/group), Item status/whether declared lost (to report legitimately lost/broken items), Name/address/telephone of owner after transfer (to contact owner and for searching/filtering), Name/address/telephone of location owner/operator after transfer (to locate/inspect chip and for searching/filtering), Date transaction expected to begin (to reconstruct location/ownership history), Date transaction expected to be completed (to reconstruct history).]

The authors expect the notification requirement to incur only a minor and manageable cost on exporters and reexporters, as larger AI chip sellers likely already track relevant information and could automate the reporting process, and smaller distributors sell low enough volumes that the reporting can likely be done manually. Smaller distributors located in third countries will be incentivized to report transactions because a failure to do so would violate the EAR and incur hefty penalties. Moreover, the BIS can add violating entities to the Entity List and advise NVIDIA and other industry actors to cut them out of their distribution networks.

### Implement Software-Based Location Verification

Manual and one-off location checks are insufficient to address the growing challenge of AI chip smuggling, given the ease with which smugglers can fool manual inspections, and the fact that many smaller orders of servers can later be combined to build much larger AI clusters once in the PRC. However, it is possible to use well-established technical measures to automate the process of verifying the location of exported chips.

AI chip designers should implement location verification features on controlled AI chips to allow chip owners to prove their chips are not in the PRC or other prohibited markets. The most promising method relies on measuring the network latency for a query (with a "ping") to trusted landmark servers in order to infer basic facts about the chip's physical location.^85 Importantly, this method would not allow the chip designer to access other data; it only gives the chip owner the ability to prove to the chip designer roughly where its chips are, if and when the user chooses to do so.^86 The chip designer--or the BIS--could then require chip owners outside the United States to periodically prove that their chips are not in the PRC as a condition for importing chips.

Location verification features on AI chips would allow for significantly more reliable, scalable, and cost-effective post-shipment verification. It would reduce or even remove the need for the labor-intensive, in-person inspection that exporters are already doing for some sales. It could also provide chip firms, and by extension the BIS, with strategic information about how many chips go missing and where, and help direct and inform investigations into illicit trade in AI chips.

To implement location verification features, AI chip designers could implement the feature and deploy it to controlled chips through a firmware update. They could also install a set of trusted landmark servers in key locations outside the PRC.^87 Having done this, they can:

- Ask chip buyers to verify the chips' locations within a month of their ship date, instead of carrying out manual post-shipment data center inspections.

- Mandate that chip owners regularly verify the location of their chips, keep a running list of chips and whom they have been sold to, and, whenever a notable batch goes missing, investigate and inform the BIS.

- Support AI chip export notification requirements by allowing the BIS to ask chip owners to verify a chip's location and report if the verification was successful.

In May 2025, bipartisan legislation was introduced in the U.S. House and Senate that would require location verification on restricted AI chips within six months, after which exporters would need to report to the BIS if any chip stops confirming it is outside countries of concern.^88

### Increase the Intelligence Community's Coordination with the BIS

The intelligence community (IC) is well suited to analyze AI chip diversion, as it has substantial resources and prior experience with nonproliferation and smuggling, for instance, in combating the illicit drug trade, uncovering North Korea's nuclear weapons program, and hindering the proliferation of weapons of mass destruction via the National Counterproliferation and Biosecurity Center.^89 Meanwhile, the BIS's limited resources prevent it from conducting many potentially important analyses, which improved collaboration could address. As a result, the intelligence community and the BIS could likely see substantial benefits from increased coordination.

Concretely, the intelligence community could:

- Map AI chip smuggling networks in detail, including key personnel and companies and structures for financial transactions.

- Estimate how many chips are being smuggled and through which countries.

- Search for weak points in the AI chip distribution network.

- Provide real-time alerts of imminent diversion attempts.

- Investigate possible past instances of AI chip diversion to support legal cases.

Currently, coordination between the BIS and the intelligence community happens via the BIS's Information Triage Unit.^90 However, its main role is to inform license application reviews, and as such it does not carry out the type of analyses mentioned above.^91 License reviews are largely irrelevant to AI chip diversion, since advanced AI chips are banned on a country-wide basis and hence likely see very few license applications. However, the BIS could use the Information Triage Unit to also solicit intelligence as described above, which it could then share with relevant parts of the BIS and declassify for industry where appropriate. Useful actions to establish this coordination include:

1. The Director for National Intelligence could make intelligence related to export control enforcement a top priority in the National Intelligence Priorities Framework (NIPF), enabling IC agencies to devote more resources to this kind of intelligence collection.

2. The Secretary of Commerce and Director for National Intelligence could agree to establish a new joint team, composed of BIS enforcement personnel and analysts from IC agencies. A natural home for such a team could be the existing Export Control Enforcement Center. This would facilitate coordination between BIS and the IC, and provide both BIS and the IC with a dedicated analysis capability to inform intelligence collection and enforcement priorities.

### Incentivize Insiders to Report Violations

Congress should authorize a whistleblower incentive program and qui tam lawsuits to incentivize reports of possible export violations. These measures could significantly boost export enforcement for the BIS while paying for themselves in revenue generated through additional penalties.

A bipartisan bill introduced into the Senate in April 2025 would implement a whistleblower incentive program funded entirely through penalties and modeled on the Securities and Exchange Commission (SEC) Whistleblower Program, created in 2010 as part of the Dodd-Frank Act.^92 The SEC Whistleblower Program is considered highly successful.^93 Since its inception, the SEC Whistleblower Program has awarded more than $2.2 billion to 444 individuals, aiding $7 to $22 billion in penalties.^94

Qui tam lawsuits allow individuals to file lawsuits on behalf of the government against violators of export law. Authorizing them would allow anyone to sue a violator and collect a portion of the resulting penalty, modeled on a similar law in the False Claims Act. The qui tam provision in the False Claims Act has been successful at uncovering fraud against the government. In fiscal year 2022, about 70 percent of cases brought under the False Claims Act were qui tam, and about 90 percent of the $2.2 billion recovered came through qui tam cases.^95 Penalties imposed in this way serve as a strong deterrent against violators and are revenue for the federal government.

**Authorize a Whistleblower Incentive Program**

The BIS offers financial rewards for some reports of sanctions violations.^96 However, these incentives are too weak to substantially reduce AI chip smuggling and other common violations. To be effective, a whistleblower program needs to ensure that potential whistleblowers are strongly incentivized to report leads by:

- Offering high monetary awards for successful tips, mirroring the SEC Whistleblower Program, which offers awards at between 10 and 30 percent of the penalty.^97

- Providing robust protections against employer retaliation, with measures to protect the confidentiality of whistleblowers, making it illegal for U.S. employers to retaliate against whistleblowers, and allowing whistleblowers to report leads anonymously if represented by an attorney. Congress could also explore options such as increasing the BIS's ability to grant or recommend S visas for whistleblowers, or in extreme cases involving credible threats, consider protective measures similar to those used in witness protection programs.^98

- Providing rapid review and action on whistleblower reports. Long turnaround times have reduced the effectiveness of other whistleblower programs.^99

The bipartisan legislation introduced into the Senate in April 2025 aims to meet these goals. To ensure the whistleblower incentive program is adequately funded, the bill would also establish an Export Compliance Accountability Fund that would be financed by monetary penalties paid by export law violators. In addition to paying awards to whistleblowers, the fund would also finance activities like reviewing and investigating whistleblower reports, protecting whistleblowers from employer retaliation, educating businesses and individuals about the program, and record-keeping and reporting. Such a fund has a direct precedent in the SEC's Investor Protection Fund. The authors expect the Export Compliance Accountability Fund to pay for itself or even generate net income for the federal government, as whistleblowers would help uncover violations--and collect penalties--that would otherwise go undetected.

**Authorize Qui Tam Lawsuits**

A qui tam provision should be modeled on the qui tam provision in the False Claims Act, where it helps discover and penalize instances of fraud against the government. This provision should allow private individuals to file qui tam lawsuits if they have evidence of violations against the EAR (within a certain number of years of the violation). After a lawsuit has been filed, the Department of Justice (DOJ) should have the option of taking over the case if it wishes to. If it declines, the individual can proceed with the case on their own. If the case is won, the DOJ determines how much the individual is awarded following a similar methodology to that of the whistleblower incentive program described above.

Congress should empower the DOJ to prosecute qui tam lawsuits for export violations and determine the awards provided from those lawsuits. The DOJ already has a team within its National Security Division dedicated to prosecuting export law violations, including violations related to ECRA. The most natural alternative to the DOJ, the BIS, currently lacks the resources needed to carry out these responsibilities.^100

**Extend Incentives Globally**

Most violations of the EAR likely occur abroad, in countries such as Malaysia, Singapore, and Taiwan. As a result, both U.S. and foreign citizens should be eligible to submit leads and receive awards via the whistleblower incentive program, as well as to bring qui tam lawsuits. The SEC program allows this and has received reports from at least 130 countries.^101 Many of the potential violators will also be foreign companies. As a result, the whistleblower incentive program and the qui tam provision should apply to any violation of the EAR, as described by ECRA, no matter if the violator is a U.S. or foreign entity.

Although the authors expect these measures to especially benefit efforts to prevent AI chip smuggling due to the large sums of money involved, the measures should not be written as specific to AI chips. Rather, they should allow for whistleblower reports on all violations of the EAR, thus also helping to prevent U.S. technology from reaching Russia, Iran, and other adversaries, as well as prevent advanced chip-making tooling from reaching the PRC. A floor of $1 million for any violation to result in an award could reduce the risk that the BIS gets overwhelmed by reports of insignificant violations.

### Increase Funding for the BIS

Congress should grant the White House's $313 million budget request for BIS for fiscal year 2026, a 64 percent increase over its current budget of $191 million.^102 This would improve national security by allowing substantial additional funding for export control enforcement, which has decreased in real terms over the past seven years. As Matt Borman, former principal deputy assistant secretary of commerce for export administration, said last year, "We spend 100 percent of our time on Russia sanctions, another 100 percent on China and the other 100 percent on everything else."^103 BIS's current budget for export control enforcement is around 55 million, half the cost of a single F-35 fighter jet.^104

[Figure 11: Bureau of Industry and Security: Total Budget and Budget for Export Enforcement, FY2018 to FY2026 -- four bar charts showing Total Budget (nominal, rising from ~$120M to proposed $313M), Total Inflation-Adjusted (roughly flat ~$130-150M until proposed jump), Export Enforcement Budget (nominal, roughly flat ~$40-55M), and Enforcement Inflation-Adjusted (declining in real terms). Source: U.S. Department of Commerce, Bureau of Labor Statistics, Office of Management and Budget.]

Investment to better enforce AI chip controls could likely pay for itself. The BIS's fines for export violations return to the federal government, which means that increased BIS enforcement increases government revenue. The high cost of AI chips means penalties for smuggling would also be high. There are multiple documented instances of AI chip smuggling from 2024 alone that each could have resulted in a penalty over $200 million, more than the BIS's annual budget.^105 These sums are not unprecedented: in 2023, the BIS imposed a $300 million penalty on Seagate for selling hard drives to Huawei.^106 If the aforementioned budget increase resulted in civil penalties for even 2,100 NVIDIA H100 chips per year--less than two percent of all estimated AI chips smuggled in 2024--it would pay for itself.^107

Money spent to improve the enforcement of the BIS's AI chip controls is also a highly cost-effective way of strengthening national security. A budget increase of the scale proposed here would help the BIS modernize its antiquated tooling and improve its operational capacity, for example, by hiring more people. In a similar vein, a Center for Strategic and International Studies report has recommended an increase of $25 million to pay for BIS technological modernization, including procuring data sets, integrating those into a data analytics platform, and adding and training analysts.^108

---

## Conclusion

Despite U.S. export controls, tens or even hundreds of thousands of banned AI chips likely made it into the PRC in 2024. This is evidenced by historical precedent, listings of banned chips on Chinese online platforms, and credible investigative reports. While U.S. export controls still significantly constrain Chinese companies, enforcement gaps have reduced their effectiveness. To protect America's compute advantage over the PRC, the BIS, Congress, and AI chip companies must take decisive action. The challenge of AI chip smuggling is unlikely to go away on its own: as the capabilities of U.S.-designed AI chips grow, so will their black market demand.

---

## Appendices

### Appendix A: Methodology

To generate estimates for the quantity of AI chips smuggled in 2024, the authors used Monte Carlo simulations to model a range of possible outcomes from the two highest likelihood large-scale smuggling pathways. In the first pathway, smugglers use shell companies to re-export relatively low volumes of AI chips purchased from resellers in various third countries. In the second pathway, smugglers set up real cloud service providers as front companies in third countries, use those to purchase relatively large volumes of AI chips directly from server builders and/or AI chip makers, and re-export a portion of the purchased chips. The model's input parameters, such as the number of cloud provider fronts and order volumes, are grounded in real-world data whenever possible, although with substantial uncertainty given the limited data available. The online methodology provides more detail and allows for parameter adjustments to explore different assumptions.^109

The estimates suggest that smuggling of AI chips by PRC-linked actors more likely than not exceeded 100,000 GPUs in 2024, with a median estimate of around 140,000. These estimates have a large amount of uncertainty given a lack of firm data on chip smuggling cases across the ecosystem, and the complex dynamics involved in large-scale smuggling operations. Accordingly, these estimates rest on a series of assumptions based on a small set of public data; this is reflected in the authors' wide confidence intervals. They can be seen as an extrapolation of known reported cases. The authors present these estimates to help policymakers prioritize their attention in the absence of better data.

**Smuggling Pathway One**

In this pathway, which is highlighted in reporting from *The Wall Street Journal*, *The New York Times*, and *The Information*, each shell company buys a relatively small number of AI chips and disguises itself as a variety of different firms.^110 After procurement, the chips are relabeled as non-controlled chips and transported to front or trading companies in the PRC. Modeling this pathway uses two key parameters: the number of vendors selling controlled chips into the PRC and the average monthly sales volume per vendor.

Public reporting from July 2024 suggested that, at the time, somewhere around 70 sellers in the PRC were openly advertising export-controlled NVIDIA GPUs online.^111 This corresponds to the number of vendors found through the authors' own searches across Baidu, JD.com, and Taobao. The authors assume that the true number could plausibly be half or double; some of these vendors may not actually have real products for sale, some may be operating through multiple online storefronts, some may not be actively advertising online (especially those moving large numbers of GPUs), and some discoverable vendors may have been missed in the search process underlying public reporting. Of the 70 distributors identified by *The Wall Street Journal*, the reporters were able to verify 25 of them.^112 The authors model these dynamics as a simple probabilistic distribution, with a 90 percent confidence interval spanning from 38 to 150 vendors.

The authors' aggregation of news reports suggests that the average volume of export-controlled GPUs sold per vendor is approximately 200 per year (see Figure 2). However, this distribution will have a long tail, based on multiple reports of single transactions far exceeding this estimated average (2,000, 2,400, 4,800), and some reports of typical monthly order sizes numbering in the hundreds (see Figure 2). The monthly average for the median vendor is likely lower than these large orders, as reporting is more likely to pick up larger-volume orders. However, there may also be larger, more professional smuggling operations that have evaded such reporting. The authors therefore assume an average monthly order volume for each vendor ranging from the bottom end of reporting (17 per month) up to the size implied by more regular, larger orders (1,000 per month).

**Smuggling Pathway Two**

In this pathway, rather than working through multiple smaller resellers, low- to mid-tier cloud providers located in countries in South and Southeast Asia place orders directly with chip exporters. After procurement, a portion of these chips could be relabeled as non-controlled goods and transported to companies in the PRC. This pathway makes sense to smuggle larger volumes of chips: there is growing demand for cloud computing services in the region, allowing local demand for AI computing to serve as a convenient cover story for illicit actors. The authors modelled this pathway using three parameters: the number of cloud operators involved in this strategy, the number of chips acquired by each operator, and the proportion of chips diverted.

The authors assume no more than a quarter of cloud providers operating in a country are engaging in smuggling, given the risk of attracting too much scrutiny. Based on a non-exhaustive search, the authors identified between five and ten mid-tier local cloud companies for each of Indonesia, Singapore, Thailand, and Vietnam, which together with a few Chinese providers operating there makes for a total of approximately 10 cloud providers per country. This yields between one and ten potential cloud service provider fronts across countries of concern.

The authors assume any cloud company engaged in smuggling will want to avoid news coverage of its orders, so it will stay below a certain quantity. Reporting from 2023 suggests ByteDance and Alibaba have placed orders of around 100,000 H800s and A100s, whereas large U.S. companies have attracted attention for orders reaching hundreds of thousands of GPUs in 2024.^113 Given this, the authors assume cloud companies engaged in smuggling will seek to stay below 100,000 GPUs ordered per year, with a modeled range between 10,000 and 100,000.

Too much diversion from front companies posing as cloud providers could raise red flags, due to a lack of maintenance requested from exporters, an unusually low power consumption footprint of the data center, or a lack of customers for its AI services. Depending on how readily observable these factors are, the authors roughly assume a cloud front would need to hold on to at most half of its chips. The authors model this as a fraction of chips diverted ranging from 40 percent to 99 percent.

**Final Estimate**

There are many reasons these scenarios and assumptions could be unrealistic. PRC-linked actors could aim for less or more ambitious, surreptitious, or inventive operations. The authors also expect that these numbers underestimate the difficulties involved in AI chip smuggling, given the authors' approach of focusing on the ways that large-scale smuggling could be successful, rather than the ways it could fail.

Therefore, the authors attempt to model their remaining uncertainty, building in uncertainty about whether one, both, or neither of the two pathways described above will be pursued. Given the overwhelming focus of public reporting, the authors assign a 95 percent chance to pathway one being pursued in 2024. This is decomposed into a 75 percent chance that pathway one is the only major pathway pursued, and a 20 percent chance that both pathway one and pathway two are pursued. An approximately 5 percent chance is assigned to this overall framework being completely off, which is modeled as noise across many possible outcome distributions.

---

### Appendix B: Additions to the Export Administration Regulations for an AI Chip Notification Requirement

The authors offer draft text for inclusion in Part 743 (Special Reporting and Notification) of the EAR.^114 This text would implement the notification requirement and is based on an existing reporting requirement for thermal imaging cameras.^115

**§ 743.7 Advanced computing notification.**

(a) **General requirement.** Changes in location or ownership must be reported to BIS as provided in this section.

(b) **Transactions to be reported.** Location or ownership changes as defined in § 772.1 of the EAR involving a foreign location or entity of more than 100 items controlled by ECCN 4A090 over any three-month period must be reported to BIS.

(c) **Party responsible for reporting.** The owner prior to the transfer must ensure the reports required by this section are submitted to BIS.

(d) **Information to be included in the reports.** For each export described in paragraph (b) of this section, the report must provide a purchase order if one exists, as well as a spreadsheet (following a template provided by BIS) with the following information for each transferred item: the serial number (the most tamper-resistant unique identifier present and inspectable on the device); the product name; the ECCN; the item's status (whether or not it is declared lost); the name, address, and telephone number of the owner after the transfer; the name, address, and telephone number of the owner or operator of the location after the transfer; the date that the transaction is expected to begin; and the date that the transaction is expected to be completed.

(e) **Where to submit reports.** Submit the reports via email with spreadsheets attached to AIChipNotifications@bis.doc.gov.

(f) **Reporting periods and due dates.** This reporting requirement applies to exports made on or after [insert date]. Transfers must be reported no later than the last day of the month following the month in which the transfer took place.

Additionally, the terms "location change" and "ownership change" would need to be defined in Part 772 (Definitions of Terms) of the EAR.^116

*Location change*. Any movement of an item subject to the EAR from one physical address to another. This includes, but is not limited to, transfers between different buildings of the same company, movements between separate facilities owned by the same entity, and relocations to a different city, state, or country. Temporary movements for the purpose of exhibition, demonstration, or testing are also considered location changes unless otherwise exempted.

*Ownership change*. Any transfer of ownership of an item subject to the EAR from one entity to another. This includes, but is not limited to, sales, gifts, and transfers between affiliated companies. However, it does not include temporary changes in possession such as loans and leases. An ownership change occurs even if the item remains in the same physical location. Changes in the ownership structure of the entity possessing the item (such as corporate mergers or acquisitions) may also constitute an ownership change if they result in a new entity gaining control over the item.

---

## About the Authors

**Erich Grunewald** is a researcher on the compute policy team at the Institute for AI Policy and Strategy (IAPS). He previously worked as a software engineer and earned a BSc in computer engineering and an MSc in interaction design from Chalmers University of Technology.

**Tim Fist** is an adjunct senior fellow with the Technology and National Security Program at the Center for a New American Security (CNAS) and the director of emerging technology policy at the Institute for Progress. Fist has an engineering background, having previously worked for five years on both AI chips and software. Fist holds a BA (honors) in aerospace engineering and a BA in political science from Monash University, and is a DPhil candidate in Engineering Science at the University of Oxford.

---

## About the Technology & National Security Program

The CNAS Technology and National Security Program produces cutting-edge research and recommendations to help U.S. and allied policymakers responsibly win and manage the great power competition with China over critical and emerging technologies. The escalating U.S.-China AI, biotechnologies, next-generation information and communications technologies, digital infrastructure, and quantum information sciences will have far-reaching implications for U.S. foreign policy and national and economic security. The Technology and National Security Program focuses on high-impact technology areas with in-depth, evidence-based analysis to assess U.S. leadership vis-a-vis China, anticipate technology-related risks to security and democratic values, and outline bold but actionable steps for policymakers to lead the way in responsible technology development, adoption, and governance. A key focus of the Tech Program is to bring together the technology and policy communities to better understand these challenges and together develop solutions.

## About the Artificial Intelligence Safety & Stability Project

The CNAS AI Safety & Stability Project is a multiyear, multiprogram effort that addresses the established and emerging risks associated with artificial intelligence. Its work is focused on anticipating and mitigating catastrophic AI failures, improving the U.S. Department of Defense's processes for AI testing and evaluation, understanding and shaping opportunities for compute governance, understanding Chinese decision-making on AI and stability, and understanding Russian decision-making on AI and stability.

## Acknowledgements

The authors would like to acknowledge the CNAS Publications and Communications teams for their support, design, and editing. The authors are also grateful to Vivek Chilukuri, Paul Scharre, and others who provided valuable feedback and insights throughout the development of this report. This project is made possible with the generous support of Open Philanthropy.

As a research and policy institution committed to the highest standards of organizational, intellectual, and personal integrity, CNAS maintains strict intellectual independence and sole editorial direction and control over its ideas, projects, publications, events, and other research activities. CNAS does not take institutional positions on policy issues, and the content of CNAS publications reflects the views of their authors alone. In keeping with its mission and values, CNAS does not engage in lobbying activity and complies fully with all applicable federal, state, and local laws. CNAS will not engage in any representational activities or advocacy on behalf of any entities or interests and, to the extent that the Center accepts funding from non-U.S. sources, its activities will be limited to bona fide scholastic, academic, and research-related activities, consistent with applicable federal law. The Center publicly acknowledges on its website annually all donors who contribute.
