// Hero (Discover + first image on the page) for /rankings/countries-with-most-lakes-2026.
// Each country is drawn as a lake whose AREA is proportional to its number of lakes >=10 ha (Messager et al. 2016, Table 1).
// Run: node scripts/hero-images/countries-with-most-lakes-2026.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderHero } from "./render.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flag = async (c) => "data:image/svg+xml;base64," + (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${c}.svg`))).toString("base64");
const D1 = 400; // Canada's diameter in px; others scale by sqrt(count) so area is proportional
const ROWS = [
  // name, flag, count, cx, cy, label position
  ["Canada", "ca", 879800, 235, 405, "in"],
  ["Russia", "ru", 201200, 560, 280, "below"],
  ["United States", "us", 102500, 548, 505, "right"],
  ["China", "cn", 23800, 785, 230, "below"], ["Sweden", "se", 22600, 950, 230, "below"], ["Brazil", "br", 20900, 1108, 230, "below"],
  ["Norway", "no", 20000, 785, 375, "below"], ["Argentina", "ar", 13600, 940, 375, "below"], ["Kazakhstan", "kz", 12400, 1108, 375, "below"],
  ["Australia", "au", 11400, 950, 505, "below"],
];
const SHAPES = ["58% 42% 55% 45% / 47% 58% 42% 53%", "45% 55% 40% 60% / 55% 45% 55% 45%", "62% 38% 50% 50% / 50% 55% 45% 50%", "50% 50% 38% 62% / 60% 40% 60% 40%"];
const blobs = (await Promise.all(ROWS.map(async ([n, c, v, cx, cy, pos], i) => {
  const d = Math.round(D1 * Math.sqrt(v / ROWS[0][2]));
  const lake = `<div class="lake" style="left:${cx - d / 2}px;top:${cy - d / 2}px;width:${d}px;height:${d}px;border-radius:${SHAPES[i % 4]}"></div>`;
  const f = `<img src="${await flag(c)}"/>`;
  if (pos === "in") return lake + `<div class="cl" style="left:${cx - 170}px;top:${cy - 95}px"><div class="r1">#1 ${f} Canada</div><div class="v1">879,800</div><div class="s1">lakes · 62% of the world's</div></div>`;
  const lab = `<div class="lab"><div class="ln"><span class="rk">${i + 1}</span>${f}<span>${n}</span></div><div class="lv">${v.toLocaleString("en-US")}</div></div>`;
  if (pos === "right") return lake + `<div class="lw" style="left:${cx + d / 2 + 14}px;top:${cy - 28}px;text-align:left">${lab}</div>`;
  return lake + `<div class="lw" style="left:${cx - 90}px;top:${cy + d / 2 + 6}px;width:180px;text-align:center">${lab}</div>`;
}))).join("");

const body = `<div class="wrap">
  <div class="head"><div class="eyebrow"><span class="v">V</span>Ranked · World</div>
  <h1>The Countries With the Most <em>Lakes</em></h1>
  <p class="sub">Lakes of at least 10 hectares · each lake's area is to scale</p></div>
  ${blobs}
  <div class="foot"><span>Data: Messager et al. (2016), Nature Communications (HydroLAKES), Table 1</span><span class="site">viszlyn.io</span></div></div>`;

const css = `.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;background:radial-gradient(ellipse at 30% 20%,#2E5A3A 0%,#1B3A26 50%,#10251A 100%)}
.head{position:absolute;left:40px;right:40px;top:20px;z-index:2}
.eyebrow{display:flex;align-items:center;gap:12px;color:#8FE3FF;font-weight:800;font-size:19px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:32px;height:32px;border-radius:8px;background:#8FE3FF;color:#10251A;font-weight:900;font-size:21px;letter-spacing:0}
h1{margin:6px 0 0;font-size:46px;line-height:1.02;font-weight:900;letter-spacing:-1px}
h1 em{font-style:normal;color:#5CD3FF}
.sub{margin:6px 0 0;font-size:18px;font-weight:700;color:#CDE8D5}
.lake{position:absolute;background:radial-gradient(circle at 35% 30%,#7FE0FF 0%,#2B9FE0 40%,#155E9E 100%);box-shadow:0 0 0 4px rgba(225,240,210,.25),inset 0 -10px 30px rgba(0,30,70,.45)}
.cl{position:absolute;width:340px;text-align:center;z-index:2}
.r1{display:inline-flex;align-items:center;gap:10px;font-size:30px;font-weight:900;text-shadow:0 2px 8px rgba(0,0,0,.4)}
.r1 img,.ln img{width:34px;height:25px;border-radius:3px;box-shadow:0 0 0 1px rgba(255,255,255,.4)}
.v1{font-size:80px;font-weight:900;letter-spacing:-3px;line-height:1;margin-top:4px;text-shadow:0 3px 12px rgba(0,30,70,.5)}
.s1{font-size:22px;font-weight:800;margin-top:4px}
.lw{position:absolute;z-index:2}
.ln{display:inline-flex;align-items:center;gap:6px;font-size:18px;font-weight:800;white-space:nowrap}
.ln img{width:24px;height:18px}
.rk{color:#8FE3FF;font-weight:900}
.lv{font-size:22px;font-weight:900}
.foot{position:absolute;left:40px;right:40px;bottom:10px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.7)}
.site{font-weight:800;color:#fff}`;
await renderHero({ slug: "countries-with-most-lakes-2026", css, body });
