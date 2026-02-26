/**
 * Generate a single portrait with JSON sidecar.
 *
 * Usage: node scripts/generate-portrait.mjs <slug> "<description>" "<bg-color>"
 *
 * Example:
 *   node scripts/generate-portrait.mjs anonymous-source "hooded figure, face in shadow" "#2A2A3E"
 *
 * Outputs:
 *   src/assets/portraits/<slug>.png   — the portrait image
 *   src/assets/portraits/<slug>.json  — provenance (prompt, model, timestamp)
 *
 * Reads shared style config from src/assets/portraits/style.json.
 * Requires FAL_KEY env var (run: source .env).
 */

import { fal } from "@fal-ai/client";
import { writeFile, readFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "../src/assets/portraits");
const STYLE_PATH = join(OUTPUT_DIR, "style.json");

const [slug, desc, bg] = process.argv.slice(2);

if (!slug || !desc || !bg) {
  console.error("Usage: node scripts/generate-portrait.mjs <slug> \"<description>\" \"<bg-color>\"");
  console.error("Example: node scripts/generate-portrait.mjs press-secretary \"red blazer, oval face, short styled hair\" \"#A04848\"");
  process.exit(1);
}

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) {
  console.error("FAL_KEY env var required. Run: source .env");
  process.exit(1);
}
fal.config({ credentials: FAL_KEY });

const style = JSON.parse(await readFile(STYLE_PATH, "utf-8"));
const prompt = `${style.style_prefix} ${desc}. ${style.style_suffix} Solid ${bg} background.`;

console.log(`Generating portrait for: ${slug}`);
console.log(`Prompt: ${prompt}`);
console.log(`Model: ${style.model}`);

await mkdir(OUTPUT_DIR, { recursive: true });

const result = await fal.subscribe(style.model, {
  input: {
    prompt,
    image_size: style.image_size,
  },
});

const imageUrl = result.data.images[0].url;
console.log(`Downloading: ${imageUrl}`);

const response = await fetch(imageUrl);
if (!response.ok) {
  console.error(`HTTP ${response.status} downloading image`);
  process.exit(1);
}

const buffer = Buffer.from(await response.arrayBuffer());
const pngPath = join(OUTPUT_DIR, `${slug}.png`);
const jsonPath = join(OUTPUT_DIR, `${slug}.json`);

await writeFile(pngPath, buffer);
await writeFile(
  jsonPath,
  JSON.stringify(
    {
      slug,
      description: desc,
      background: bg,
      prompt,
      model: style.model,
      image_size: style.image_size,
      generated: new Date().toISOString(),
    },
    null,
    2,
  ) + "\n",
);

console.log(`Saved: ${slug}.png (${buffer.length} bytes)`);
console.log(`Saved: ${slug}.json (provenance)`);
