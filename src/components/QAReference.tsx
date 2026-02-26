/**
 * QA Reference page — accessible via #qa in the URL.
 * Shows numbered portraits and card content for feedback.
 */

import { SpeakerPortrait } from "./SpeakerPortrait";
import { CARD_TEMPLATES } from "../data/cards";
import { DEATH_MESSAGES } from "../data/deaths";
import type { ResourceKey } from "../engine/types";

const RESOURCE_LABELS: Record<ResourceKey, string> = {
  trust: "Trust",
  funding: "Funding",
  intel: "Intel",
  leverage: "Leverage",
};

/** All unique speakers in portrait-import order */
const SPEAKERS = [
  "Chief Financial Officer",
  "Communications Director",
  "Head of Human Resources",
  "Political Advisor",
  "Press Secretary",
  "Intelligence Analyst",
  "Junior Analyst",
  "Customs Liaison",
  "Anonymous Source",
  "Diplomatic Attaché",
  "Legal Counsel",
  "Civil Liberties Advocate",
  "UN Secretary-General",
  "Ethics Watchdog",
  "Finance Director",
  "Enforcement Chief",
  "Investigative Journalist",
  "NATO Liaison",
  "Chief Scientist",
  "Deputy Director",
  "Executive Assistant",
];

function PreviewBadges({ previews }: { previews: Array<{ resource: ResourceKey; direction: string; size: string }> }) {
  return (
    <span className="inline-flex gap-1 flex-wrap">
      {previews.map((p, i) => (
        <span
          key={i}
          className={`text-xs px-1.5 py-0.5 rounded ${
            p.direction === "up" ? "bg-green-800 text-green-200" : "bg-red-800 text-red-200"
          }`}
        >
          {RESOURCE_LABELS[p.resource]} {p.direction === "up" ? "↑" : "↓"}
          {p.size === "large" ? "↑" : ""}
        </span>
      ))}
    </span>
  );
}

export function QAReference() {
  return (
    <div className="min-h-dvh bg-neutral-900 text-neutral-200 p-4 font-mono text-sm max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">QA Reference</h1>
      <p className="text-neutral-400 mb-6">Use numbers to reference items in feedback.</p>

      {/* --- PORTRAITS --- */}
      <h2 className="text-xl font-bold mb-3 border-b border-neutral-700 pb-1">Portraits</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-10">
        {SPEAKERS.map((speaker, i) => (
          <div key={speaker} className="text-center">
            <div className="relative">
              <span className="absolute top-1 left-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-bold z-10">
                P{i + 1}
              </span>
              <div className="rounded overflow-hidden">
                <SpeakerPortrait speaker={speaker} />
              </div>
            </div>
            <p className="text-xs mt-1 text-neutral-300">{speaker}</p>
          </div>
        ))}
      </div>

      {/* --- CARDS --- */}
      <h2 className="text-xl font-bold mb-3 border-b border-neutral-700 pb-1">Cards ({CARD_TEMPLATES.length})</h2>
      <div className="space-y-4 mb-10">
        {CARD_TEMPLATES.map((card, i) => (
          <div key={card.id} className="bg-neutral-800 rounded p-3">
            <div className="flex items-start gap-2 mb-2">
              <span className="bg-amber-700 text-white text-xs px-1.5 py-0.5 rounded font-bold shrink-0">
                C{i + 1}
              </span>
              <div>
                <span className="font-bold text-amber-300">{card.speaker}</span>
                <span className="text-neutral-500 ml-2 text-xs">({card.id})</span>
              </div>
            </div>
            <p className="text-neutral-300 mb-2 leading-relaxed">{card.text}</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-neutral-700/50 rounded p-2">
                <div className="text-blue-300 font-bold mb-1">← {card.left.label}</div>
                <PreviewBadges previews={card.left.previews} />
              </div>
              <div className="bg-neutral-700/50 rounded p-2">
                <div className="text-orange-300 font-bold mb-1">{card.right.label} →</div>
                <PreviewBadges previews={card.right.previews} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- DEATH MESSAGES --- */}
      <h2 className="text-xl font-bold mb-3 border-b border-neutral-700 pb-1">Death Messages</h2>
      <div className="space-y-4 mb-10">
        {(Object.entries(DEATH_MESSAGES) as [ResourceKey, { depleted: string[]; overloaded: string[] }][]).map(
          ([resource, msgs]) => (
            <div key={resource} className="bg-neutral-800 rounded p-3">
              <h3 className="font-bold text-amber-300 mb-2">{RESOURCE_LABELS[resource]}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-red-400 font-bold mb-1">At 0 (depleted)</div>
                  {msgs.depleted.map((m, i) => (
                    <p key={i} className="text-neutral-400 mb-1">
                      {i + 1}. {m}
                    </p>
                  ))}
                </div>
                <div>
                  <div className="text-red-400 font-bold mb-1">At 100 (overloaded)</div>
                  {msgs.overloaded.map((m, i) => (
                    <p key={i} className="text-neutral-400 mb-1">
                      {i + 1}. {m}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <p className="text-neutral-500 text-xs text-center pb-4">
        Ref format: P1-P{SPEAKERS.length} for portraits, C1-C{CARD_TEMPLATES.length} for cards
      </p>
    </div>
  );
}
