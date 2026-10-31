// Renders a 1200x630 hero design to:
//   public/heroes/<slug>.png      (2400x1260, shown on the article page)
//   public/heroes/<slug>-og.png   (1200x630, used for Open Graph / Twitter / Discover)
// Uses the Playwright + Chromium available in the dev environment; not a site dependency.
import { createRequire } from "node:module";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const FONT_DIR = path.join(ROOT, "node_modules/@fontsource/inter/files");

async function fontFaces() {
  const faces = await Promise.all(
    [400, 600, 700, 800, 900].map(async (w) => {
      const b64 = (await readFile(path.join(FONT_DIR, `inter-latin-${w}-normal.woff2`))).toString("base64");
      return `@font-face{font-family:Inter;font-weight:${w};src:url(data:font/woff2;base64,${b64}) format("woff2")}`;
    })
  );
  return faces.join("\n");
}

export async function renderHero({ slug, css, body }) {
  const outDir = path.join(ROOT, "public/heroes");
  await mkdir(outDir, { recursive: true });
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>${await fontFaces()}
html,body{margin:0;padding:0;background:#0B0E14}
${css}</style></head><body>${body}</body></html>`;

  const browser = await chromium.launch();
  try {
    for (const [scale, file] of [
      [2, `${slug}.png`],
      [1, `${slug}-og.png`],
    ]) {
      const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: scale });
      await page.setContent(html, { waitUntil: "load" });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(outDir, file), clip: { x: 0, y: 0, width: 1200, height: 630 } });
      await page.close();
    }
  } finally {
    await browser.close();
  }
  console.log(`Wrote public/heroes/${slug}.png and ${slug}-og.png`);
}
