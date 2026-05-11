import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ALL_CARDS } from "../data/cards";
import { TUTORIAL_CARDS } from "../data/tutorial";
import type { Dynamic } from "../engine/types";
import {
  PORTRAIT_IMAGES,
  SPEAKER_PORTRAIT_NAMES,
  SPEAKER_PORTRAITS,
} from "./speakerPortraitRegistry";
import { SpeakerPortrait } from "./SpeakerPortrait";

const portraitAssetUrls = Object.values(
  import.meta.glob("../assets/portraits/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>,
);

function staticSpeaker(speaker: Dynamic<string>, id: string): string {
  expect(typeof speaker, `${id} uses a dynamic speaker that this audit cannot verify`).toBe(
    "string",
  );
  return speaker as string;
}

afterEach(cleanup);

describe("speaker portrait coverage", () => {
  it("has unique portrait names backed by unique imported image assets", () => {
    const portraitNames = new Set(SPEAKER_PORTRAIT_NAMES);
    const portraitUrls = SPEAKER_PORTRAITS.map(({ src }) => src);
    const uniquePortraitUrls = new Set(portraitUrls);

    expect(SPEAKER_PORTRAIT_NAMES.length).toBeGreaterThan(0);
    expect(portraitNames.size).toBe(SPEAKER_PORTRAIT_NAMES.length);
    expect(uniquePortraitUrls.size).toBe(portraitUrls.length);
  });

  it("maps every portrait PNG asset and no non-existent portrait PNG assets", () => {
    const mappedUrls = SPEAKER_PORTRAITS.map(({ src }) => src).sort();

    expect(mappedUrls).toHaveLength(portraitAssetUrls.length);
    expect(mappedUrls).toEqual([...portraitAssetUrls].sort());
  });

  it("has portraits for every registered card and tutorial speaker", () => {
    const cardSpeakers = ALL_CARDS.map((card) => staticSpeaker(card.speaker, card.id));
    const tutorialSpeakers = TUTORIAL_CARDS.map((card) => card.speaker);
    const activeSpeakers = [...new Set([...cardSpeakers, ...tutorialSpeakers])].sort();
    const missingPortraits = activeSpeakers.filter(
      (speaker) => !Object.hasOwn(PORTRAIT_IMAGES, speaker),
    );

    expect(missingPortraits).toEqual([]);
  });

  it("marks the fallback portrait path for unmapped speakers", () => {
    const { container } = render(<SpeakerPortrait speaker="Unmapped Speaker" />);

    expect(screen.getByTestId("speaker-portrait-fallback")).toBeDefined();
    expect(container.querySelector("img")).toBeNull();
  });
});
