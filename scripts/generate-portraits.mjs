import { fal } from "@fal-ai/client";
import { writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const FAL_KEY = "68777f27-9b9c-4255-84f6-e830c6bef6fc:e4cab7d2d0bb60f9ad8319f999561e34";
fal.config({ credentials: FAL_KEY });

const OUTPUT_DIR = join(__dirname, "../src/assets/portraits");

const PROMPT_PREFIX = "Flat-shaded geometric character portrait in the style of Reigns game art by Mieko Murakami. Angular polygonal shapes, 2-4 flat colors only, no gradients, no outlines, hard edges. Simple small rectangular slit eyes, no mouth, no nose.";
const PROMPT_SUFFIX = "Head and upper torso, centered. Low-poly cubist minimalist art.";

const speakers = [
  { name: "Chief Financial Officer", slug: "chief-financial-officer", desc: "gray suit, neat short hair, rectangular head", bg: "#B89B1A", bgName: "gold" },
  { name: "Communications Director", slug: "communications-director", desc: "colorful casual clothes, round face, earpiece", bg: "#3B78B2", bgName: "blue" },
  { name: "Head of Human Resources", slug: "head-of-human-resources", desc: "warm casual dress, round face, pearl necklace", bg: "#8B6344", bgName: "brown" },
  { name: "Political Advisor", slug: "political-advisor", desc: "dark suit, thin angular face, slicked hair", bg: "#6B4E8B", bgName: "purple" },
  { name: "Press Secretary", slug: "press-secretary", desc: "red blazer, oval face, short styled hair", bg: "#A04848", bgName: "red" },
  { name: "Intelligence Analyst", slug: "intelligence-analyst", desc: "dark suit, thick glasses, square jaw", bg: "#3B7A64", bgName: "teal" },
  { name: "Junior Analyst", slug: "junior-analyst", desc: "casual shirt, young face, messy hair", bg: "#728B48", bgName: "olive" },
  { name: "Customs Liaison", slug: "customs-liaison", desc: "uniform with badge, stern square face", bg: "#8B7248", bgName: "khaki" },
  { name: "Anonymous Source", slug: "anonymous-source", desc: "hooded figure, face in shadow", bg: "#2A2A3E", bgName: "dark navy" },
  { name: "Diplomatic Attache", slug: "diplomatic-attache", desc: "formal robes or suit, gentle oval face", bg: "#4A7A8B", bgName: "steel blue" },
  { name: "Legal Counsel", slug: "legal-counsel", desc: "dark robes, angular stern face, glasses", bg: "#7A4A7A", bgName: "plum" },
  { name: "Civil Liberties Advocate", slug: "civil-liberties-advocate", desc: "casual clothes, strong jaw, fist raised", bg: "#A0604A", bgName: "terracotta" },
  { name: "UN Secretary-General", slug: "un-secretary-general", desc: "formal suit, distinguished gray hair, round face", bg: "#3B6490", bgName: "navy" },
  { name: "Ethics Watchdog", slug: "ethics-watchdog", desc: "turtleneck, watchful angular face", bg: "#607A48", bgName: "forest" },
  { name: "Finance Director", slug: "finance-director", desc: "expensive suit with tie, wide confident face", bg: "#B8860B", bgName: "dark gold" },
  { name: "Enforcement Chief", slug: "enforcement-chief", desc: "military-style jacket, medals, broad shoulders", bg: "#5E4A78", bgName: "dark purple" },
  { name: "Investigative Journalist", slug: "investigative-journalist", desc: "rumpled shirt, thin face, notepad", bg: "#8B6048", bgName: "sienna" },
  { name: "NATO Liaison", slug: "nato-liaison", desc: "military cap, strong angular face, olive uniform", bg: "#487848", bgName: "army green" },
  { name: "Chief Scientist", slug: "chief-scientist", desc: "lab coat, friendly face, messy hair", bg: "#4A6090", bgName: "slate blue" },
  { name: "Deputy Director", slug: "deputy-director", desc: "neat suit, average face, tie", bg: "#786048", bgName: "taupe" },
  { name: "Executive Assistant", slug: "executive-assistant", desc: "smart casual, slim face, clipboard", bg: "#4A8B6A", bgName: "sage" },
];

async function generatePortrait(speaker) {
  const prompt = `${PROMPT_PREFIX} ${speaker.desc}. ${PROMPT_SUFFIX} Solid ${speaker.bgName} (${speaker.bg}) background.`;
  console.log(`[START] ${speaker.name} -- generating...`);

  try {
    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: {
        prompt,
        image_size: { width: 512, height: 512 },
      },
    });

    const imageUrl = result.data.images[0].url;
    console.log(`[DOWNLOAD] ${speaker.name} -- ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status} downloading image`);

    const buffer = Buffer.from(await response.arrayBuffer());
    const filePath = join(OUTPUT_DIR, `${speaker.slug}.png`);
    await writeFile(filePath, buffer);

    console.log(`[DONE] ${speaker.name} -- saved to ${speaker.slug}.png (${buffer.length} bytes)`);
    return { name: speaker.name, slug: speaker.slug, success: true };
  } catch (err) {
    console.error(`[FAIL] ${speaker.name} -- ${err.message}`);
    return { name: speaker.name, slug: speaker.slug, success: false, error: err.message };
  }
}

async function processBatch(batch) {
  return Promise.all(batch.map(generatePortrait));
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const BATCH_SIZE = 3;
  const results = [];

  for (let i = 0; i < speakers.length; i += BATCH_SIZE) {
    const batch = speakers.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(speakers.length / BATCH_SIZE);
    console.log(`\n=== Batch ${batchNum}/${totalBatches} (${batch.map(s => s.slug).join(", ")}) ===\n`);

    const batchResults = await processBatch(batch);
    results.push(...batchResults);

    // Small delay between batches to avoid rate limits
    if (i + BATCH_SIZE < speakers.length) {
      console.log("\nWaiting 2s before next batch...\n");
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log("\n========== RESULTS ==========\n");
  const succeeded = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`Succeeded: ${succeeded.length}/${results.length}`);
  for (const r of succeeded) {
    console.log(`  OK ${r.name} -> ${r.slug}.png`);
  }

  if (failed.length > 0) {
    console.log(`\nFailed: ${failed.length}/${results.length}`);
    for (const r of failed) {
      console.log(`  FAIL ${r.name} -- ${r.error}`);
    }
  }
}

main();
