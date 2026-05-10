import type { Card } from "../../engine/types";
import { accelerationistOppositionCards } from "./accelerationist-opposition";
import { algorithmicThreatCards } from "./algorithmic-threat";
import { chainsCards } from "./chains";
import { corporateResponseCards } from "./corporate-response";
import { crisisCards } from "./crisis";
import { dataCenterChainCards } from "./data-center-chain";
import { economicCostsCards } from "./economic-costs";
import { enforcementAiParadoxCards } from "./enforcement-ai-paradox";
import { enforcementCostsCards } from "./enforcement-costs";
import { enforcementDetectionCards } from "./enforcement-detection";
import { enforcementFrictionCards } from "./enforcement-friction";
import { enforcementIntegrityCards } from "./enforcement-integrity";
import { enforcementMonitoringCards } from "./enforcement-monitoring";
import { enforcementSupplyChainCards } from "./enforcement-supply-chain";
import { governmentPoliticalCards } from "./government-political";
import { incidentsCards } from "./incidents";
import { innovationSuppressionCards } from "./innovation-suppression";
import { institutionalCaptureCards } from "./institutional-capture";
import { institutionalInternalCards } from "./institutional-internal";
import { institutionalLeadershipCards } from "./institutional-leadership";
import { intelligenceNetworksCards } from "./intelligence-networks";
import { internationalAdversarialCards } from "./international-adversarial";
import { internationalCoalitionCards } from "./international-coalition";
import { lateGameCards } from "./late-game";
import { militaryEscalationCards } from "./military-escalation";
import { opinionDynamicsCards } from "./opinion-dynamics";
import { oppositionLegalCards } from "./opposition-legal";
import { politicalCards } from "./political";
import { politicalSupportCards } from "./political-support";
import { researchDualUseCards } from "./research-dual-use";
import { researchSafetyProgressCards } from "./research-safety-progress";
import { researchScalingCards } from "./research-scaling";
import { rogueLabChainCards } from "./rogue-lab-chain";
import { routineCards } from "./routine";
import { safetyEraChainCards } from "./safety-era-chain";
import { subAsiHarmsCards } from "./sub-asi-harms";
import { weightSecurityCards } from "./weight-security";
import { winConditionCards } from "./win-condition";

export interface CardGroup {
  id: string;
  label: string;
  cards: readonly Card[];
}

export const CARD_GROUPS = [
  { id: "routine", label: "Routine placeholders", cards: routineCards },
  { id: "incidents", label: "Incidents", cards: incidentsCards },
  { id: "political", label: "Political placeholders", cards: politicalCards },
  { id: "chains", label: "Chain placeholders", cards: chainsCards },
  { id: "crisis", label: "Crisis placeholders", cards: crisisCards },
  { id: "late-game", label: "Late game placeholders", cards: lateGameCards },

  { id: "enforcement-detection", label: "Enforcement detection", cards: enforcementDetectionCards },
  { id: "enforcement-supply-chain", label: "Enforcement supply chain", cards: enforcementSupplyChainCards },
  { id: "enforcement-costs", label: "Enforcement costs", cards: enforcementCostsCards },
  { id: "enforcement-friction", label: "Enforcement friction", cards: enforcementFrictionCards },
  { id: "enforcement-integrity", label: "Enforcement integrity", cards: enforcementIntegrityCards },
  { id: "enforcement-monitoring", label: "Enforcement monitoring", cards: enforcementMonitoringCards },
  { id: "enforcement-ai-paradox", label: "Enforcement AI paradox", cards: enforcementAiParadoxCards },

  { id: "intelligence-networks", label: "Intelligence networks", cards: intelligenceNetworksCards },
  { id: "weight-security", label: "Weight security", cards: weightSecurityCards },
  { id: "data-center-chain", label: "Data center chain", cards: dataCenterChainCards },
  { id: "rogue-lab-chain", label: "Rogue lab chain", cards: rogueLabChainCards },

  { id: "international-coalition", label: "International coalition", cards: internationalCoalitionCards },
  { id: "international-adversarial", label: "International adversarial", cards: internationalAdversarialCards },
  { id: "military-escalation", label: "Military escalation", cards: militaryEscalationCards },

  { id: "research-dual-use", label: "Research dual-use", cards: researchDualUseCards },
  { id: "research-scaling", label: "Research scaling", cards: researchScalingCards },
  { id: "research-safety-progress", label: "Research safety progress", cards: researchSafetyProgressCards },
  { id: "safety-era-chain", label: "Safety era chain", cards: safetyEraChainCards },

  { id: "institutional-internal", label: "Institutional internal", cards: institutionalInternalCards },
  { id: "institutional-leadership", label: "Institutional leadership", cards: institutionalLeadershipCards },
  { id: "institutional-capture", label: "Institutional capture", cards: institutionalCaptureCards },

  { id: "economic-costs", label: "Economic costs", cards: economicCostsCards },
  { id: "corporate-response", label: "Corporate response", cards: corporateResponseCards },
  { id: "innovation-suppression", label: "Innovation suppression", cards: innovationSuppressionCards },

  { id: "political-support", label: "Political support", cards: politicalSupportCards },
  { id: "opinion-dynamics", label: "Opinion dynamics", cards: opinionDynamicsCards },
  { id: "opposition-legal", label: "Opposition legal", cards: oppositionLegalCards },
  { id: "accelerationist-opposition", label: "Accelerationist opposition", cards: accelerationistOppositionCards },
  { id: "government-political", label: "Government political", cards: governmentPoliticalCards },

  { id: "sub-asi-harms", label: "Sub-ASI harms", cards: subAsiHarmsCards },
  { id: "algorithmic-threat", label: "Algorithmic threat", cards: algorithmicThreatCards },

  { id: "win-condition", label: "Win condition", cards: winConditionCards },
] satisfies readonly CardGroup[];

export const ALL_CARDS: readonly Card[] = CARD_GROUPS.flatMap((group) => group.cards);
