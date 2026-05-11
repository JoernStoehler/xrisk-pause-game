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

export const SPEAKER_PORTRAITS = [
  { speaker: "Chief Financial Officer", src: chiefFinancialOfficer },
  { speaker: "Communications Director", src: communicationsDirector },
  { speaker: "Head of Human Resources", src: headOfHumanResources },
  { speaker: "Political Advisor", src: politicalAdvisor },
  { speaker: "Press Secretary", src: pressSecretary },
  { speaker: "Intelligence Analyst", src: intelligenceAnalyst },
  { speaker: "Junior Analyst", src: juniorAnalyst },
  { speaker: "Customs Liaison", src: customsLiaison },
  { speaker: "Anonymous Source", src: anonymousSource },
  { speaker: "Diplomatic Attaché", src: diplomaticAttache },
  { speaker: "Legal Counsel", src: legalCounsel },
  { speaker: "Civil Liberties Advocate", src: civilLibertiesAdvocate },
  { speaker: "UN Secretary-General", src: unSecretaryGeneral },
  { speaker: "Ethics Watchdog", src: ethicsWatchdog },
  { speaker: "Finance Director", src: financeDirector },
  { speaker: "Enforcement Chief", src: enforcementChief },
  { speaker: "Investigative Journalist", src: investigativeJournalist },
  { speaker: "NATO Liaison", src: natoLiaison },
  { speaker: "Chief Scientist", src: chiefScientist },
  { speaker: "Deputy Director", src: deputyDirector },
  { speaker: "Executive Assistant", src: executiveAssistant },
] as const;

export const SPEAKER_PORTRAIT_NAMES = SPEAKER_PORTRAITS.map(
  ({ speaker }) => speaker,
);

export const PORTRAIT_IMAGES: Record<string, string> = Object.fromEntries(
  SPEAKER_PORTRAITS.map(({ speaker, src }) => [speaker, src]),
);
