# Recipes — Reusable Patterns

Reference implementations stolen from existing projects. Copy-paste and adapt.

---

## Cloudflare Workers Backend

From `ai-forecast-game`. Add when a project needs server-side logic or API keys.

**Setup:**
```bash
npm install -D wrangler
```

**`wrangler.toml`:**
```toml
name = "your-project-name"
main = "worker/index.ts"
compatibility_date = "2024-12-01"

[[d1_databases]]
binding = "DB"
database_name = "your-db-name"
database_id = "your-db-id"  # from `npx wrangler d1 create your-db-name`
```

**`worker/index.ts`:**
```typescript
export interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({ ok: true });
    }

    // Serve static assets (Cloudflare Pages handles this in prod)
    return new Response("Not found", { status: 404 });
  },
};
```

**D1 Migrations:**
```bash
npx wrangler d1 create your-db-name
npx wrangler d1 migrations create your-db-name init
# Edit worker/migrations/0001_init.sql
npx wrangler d1 migrations apply your-db-name --remote
```

---

## Cloudflare Pages Deployment

**`wrangler.toml` for Pages (static only):**
```toml
name = "your-project"
pages_build_output_dir = "dist"
```

**Deploy:**
```bash
npm run build
npx wrangler pages deploy dist --project-name=your-project
```

**GitHub Actions (when ready):**
```yaml
name: Deploy
on:
  push:
    branches: [main]
    paths: ['projects/your-project/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22 }
      - run: cd projects/your-project && npm ci && npm run check
      - run: cd projects/your-project && npx wrangler pages deploy dist
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

---

## LLM Integration (Client-Side)

For projects that call an LLM from the browser (user provides API key or uses a free model).

**Google Gemini (free tier available):**
```typescript
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models";

async function generateText(
  prompt: string,
  apiKey: string,
  model = "gemini-2.0-flash",
): Promise<string> {
  const res = await fetch(
    `${GEMINI_API_URL}/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    },
  );
  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
}
```

**Via Cloudflare Worker (hides API key):**
```typescript
// worker/index.ts
import Anthropic from "@anthropic-ai/sdk";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (new URL(request.url).pathname === "/api/generate") {
      const { prompt } = await request.json();
      const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
      const message = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      });
      return Response.json({ text: message.content[0].text });
    }
    return new Response("Not found", { status: 404 });
  },
};
```

---

## Image Generation

**Via Cloudflare Worker (using Workers AI):**
```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (new URL(request.url).pathname === "/api/image") {
      const { prompt } = await request.json();
      const result = await env.AI.run("@cf/stabilityai/stable-diffusion-xl-base-1.0", {
        prompt,
      });
      return new Response(result, {
        headers: { "Content-Type": "image/png" },
      });
    }
    return new Response("Not found", { status: 404 });
  },
};
```

**Note:** For most x-risk minigames, hand-crafted SVG or CSS visuals are simpler and more reliable than AI-generated images. Only reach for image gen when the game concept requires dynamic imagery.

---

## Visual QA with Playwright Screenshots

Works in both local dev and CC Web:

```bash
# Start dev server in background
npm run dev &

# Take a screenshot
npx playwright screenshot http://localhost:5173 /tmp/screenshot.png

# With options
npx playwright screenshot \
  --viewport-size=1280,720 \
  --full-page \
  http://localhost:5173 /tmp/full-page.png

# Dark mode
npx playwright screenshot \
  --color-scheme=dark \
  http://localhost:5173 /tmp/dark.png
```

Then use the Read tool to view the image.
