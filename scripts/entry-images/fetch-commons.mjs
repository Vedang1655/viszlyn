// Download freely licensed photos from Wikimedia Commons for ranking entries.
// Usage: node scripts/entry-images/fetch-commons.mjs <slug> <list.json>
//   list.json: [{ "key": "pagani-huayra-codalunga", "file": "2022_Pagani_Huayra_Codalunga.jpg", "alt": "..." }, ...]
// Writes public/rankings/<slug>/<key>.webp (max 1200px wide, aspect kept, no crop) and prints
// ready-to-paste `image: {...}` objects with author, licence and source page for each entry.
// Refuses anything that isn't CC0 / public domain / CC BY / CC BY-SA.
// In a sandbox behind a proxy run with NODE_USE_ENV_PROXY=1 (and NODE_EXTRA_CA_CERTS if needed).
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const [slug, listPath] = process.argv.slice(2);
if (!slug || !listPath) throw new Error("usage: fetch-commons.mjs <slug> <list.json>");
const list = JSON.parse(await readFile(listPath, "utf8"));
const UA = "ViszlynBot/1.0 (https://www.viszlyn.io; hello@viszlyn.io)";
const OK = /^(CC0|Public domain|PD|CC BY(-SA)? \d\.\d)/i;
const strip = (h = "") => h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const outDir = path.join("public/rankings", slug);
await mkdir(outDir, { recursive: true });

async function get(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (r.ok) return r;
    if (r.status === 429 || r.status >= 500) { await sleep(5000 * (i + 1)); continue; }
    throw new Error(`${r.status} ${url}`);
  }
  throw new Error(`gave up ${url}`);
}

const out = [];
for (const { key, file, alt } of list) {
  const api = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1280&titles=" + encodeURIComponent("File:" + file);
  const page = Object.values((await (await get(api)).json()).query.pages)[0];
  const info = page.imageinfo?.[0];
  if (!info) { console.error("MISSING", file); continue; }
  const m = info.extmetadata;
  const license = strip(m.LicenseShortName?.value);
  if (!OK.test(license)) { console.error("REFUSED licence", license, file); continue; }
  // thumb.wikimedia.org is not reachable from every network; the same thumbnail is served by
  // upload.wikimedia.org. Use standard widths (1280, then 960) which Commons always pre-renders.
  const thumb = (info.thumburl || info.url).replace("//thumb.wikimedia.org/", "//upload.wikimedia.org/");
  let res;
  try { res = await get(thumb); } catch { res = await get(thumb.replace(/\/1280px-/, "/960px-")); }
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(outDir, key + ".webp");
  const { width, height } = await sharp(buf).rotate().resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
  out.push({
    key,
    image: {
      src: "/" + path.relative("public", dest).split(path.sep).join("/"),
      width, height, alt,
      author: strip(m.Artist?.value),
      license,
      licenseUrl: strip(m.LicenseUrl?.value) || undefined,
      sourceUrl: info.descriptionurl,
    },
  });
  console.error("ok", key, width + "x" + height, license);
  await sleep(2500);
}
await writeFile(path.join(outDir, "_credits.json"), JSON.stringify(out, null, 2) + "\n");
console.log(JSON.stringify(out, null, 2));
