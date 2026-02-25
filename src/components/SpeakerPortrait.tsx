/**
 * Speaker portraits — AI-generated images via fal.ai FLUX model.
 * Flat-shaded geometric style inspired by Reigns (Mieko Murakami).
 */

import chiefFinancialOfficer from "../assets/portraits/chief-financial-officer.png";
import communicationsDirector from "../assets/portraits/communications-director.png";
import headOfHumanResources from "../assets/portraits/head-of-human-resources.png";
import politicalAdvisor from "../assets/portraits/political-advisor.png";
import pressSecretary from "../assets/portraits/press-secretary.png";
import intelligenceAnalyst from "../assets/portraits/intelligence-analyst.png";
import juniorAnalyst from "../assets/portraits/junior-analyst.png";
import customsLiaison from "../assets/portraits/customs-liaison.png";
import anonymousSource from "../assets/portraits/anonymous-source.png";
import diplomaticAttache from "../assets/portraits/diplomatic-attache.png";
import legalCounsel from "../assets/portraits/legal-counsel.png";
import civilLibertiesAdvocate from "../assets/portraits/civil-liberties-advocate.png";
import unSecretaryGeneral from "../assets/portraits/un-secretary-general.png";
import ethicsWatchdog from "../assets/portraits/ethics-watchdog.png";
import financeDirector from "../assets/portraits/finance-director.png";
import enforcementChief from "../assets/portraits/enforcement-chief.png";
import investigativeJournalist from "../assets/portraits/investigative-journalist.png";
import natoLiaison from "../assets/portraits/nato-liaison.png";
import chiefScientist from "../assets/portraits/chief-scientist.png";
import deputyDirector from "../assets/portraits/deputy-director.png";
import executiveAssistant from "../assets/portraits/executive-assistant.png";

const PORTRAIT_IMAGES: Record<string, string> = {
  "Chief Financial Officer": chiefFinancialOfficer,
  "Communications Director": communicationsDirector,
  "Head of Human Resources": headOfHumanResources,
  "Political Advisor": politicalAdvisor,
  "Press Secretary": pressSecretary,
  "Intelligence Analyst": intelligenceAnalyst,
  "Junior Analyst": juniorAnalyst,
  "Customs Liaison": customsLiaison,
  "Anonymous Source": anonymousSource,
  "Diplomatic Attaché": diplomaticAttache,
  "Legal Counsel": legalCounsel,
  "Civil Liberties Advocate": civilLibertiesAdvocate,
  "UN Secretary-General": unSecretaryGeneral,
  "Ethics Watchdog": ethicsWatchdog,
  "Finance Director": financeDirector,
  "Enforcement Chief": enforcementChief,
  "Investigative Journalist": investigativeJournalist,
  "NATO Liaison": natoLiaison,
  "Chief Scientist": chiefScientist,
  "Deputy Director": deputyDirector,
  "Executive Assistant": executiveAssistant,
};

interface SpeakerPortraitProps {
  speaker: string;
}

export function SpeakerPortrait({ speaker }: SpeakerPortraitProps) {
  const src = PORTRAIT_IMAGES[speaker];

  if (!src) {
    return <div className="w-full aspect-square bg-black/30" />;
  }

  return (
    <img
      src={src}
      alt={speaker}
      className="block w-full"
      draggable={false}
    />
  );
}
