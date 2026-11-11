// Share / Google Discover image for /rankings/biggest-arms-exporters-2026 (not shown on the page;
// the article keeps its block mosaic). Big title + top 3 flags, area proportional to share.
// Data: SIPRI Arms Transfers Database (March 2026), share of global arms exports, 2021–25.
// Run: node scripts/hero-images/biggest-arms-exporters-2026.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderHero } from "./render.mjs";

const slug = "biggest-arms-exporters-2026";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flag = async (c) =>
  "data:image/svg+xml;base64," +
  (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${c}.svg`))).toString("base64");

const TOP = [
  ["United States", "us", 42, "42%"],
  ["France", "fr", 9.8, "9.8%"],
  ["Russia", "ru", 6.8, "6.8%"],
];
const BIG_W = 280; // width of the largest flag; others scaled by sqrt so area ~ share

const flags = (
  await Promise.all(
    TOP.map(async ([name, code, v, label], i) => {
      const w = Math.round(BIG_W * Math.sqrt(v / TOP[0][2]));
      const first = i === 0;
      return `<div class="f">
        <div class="val${first ? " o" : ""}" style="font-size:${first ? 78 : 40}px">${label}</div>
        <img src="${await flag(code)}" style="width:${w}px;height:${Math.round((w * 3) / 4)}px"/>
        <div class="nm">#${i + 1} ${name}</div>
      </div>`;
    })
  )
).join("");

const body = `
<div class="wrap">
  <div class="left">
    <div class="eyebrow"><span class="v">V</span>Ranked · 2021–25</div>
    <h1>The World's<br/>Biggest Arms<br/>Exporters</h1>
    <div class="sub">One country supplies<br/>42% of all arms exports</div>
  </div>
  <div class="flags">${flags}</div>
  <div class="foot"><span>Share of global arms exports · SIPRI, March 2026</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden}
.left{position:absolute;left:56px;top:46px;width:470px}
.eyebrow{display:flex;align-items:center;gap:14px;color:#FF5D3A;font-weight:800;font-size:26px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:40px;height:40px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:26px;letter-spacing:0}
h1{margin:22px 0 0;font-weight:900;font-size:68px;line-height:.98;letter-spacing:-2.5px}
.sub{margin-top:26px;font-weight:800;font-size:30px;line-height:1.2;color:#FF5D3A}
.flags{position:absolute;left:560px;right:24px;top:60px;bottom:70px;display:flex;align-items:flex-end;justify-content:space-between;gap:14px}
.f{display:flex;flex-direction:column;align-items:center}
.f img{border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.5)}
.val{font-weight:900;line-height:1;margin-bottom:12px}.val.o{color:#FF5D3A}
.nm{margin-top:14px;font-weight:800;font-size:22px;color:rgba(247,245,240,.85);white-space:nowrap}
.foot{position:absolute;left:56px;right:56px;bottom:24px;display:flex;justify-content:space-between;font-size:17px;color:rgba(247,245,240,.55)}
.site{color:#F7F5F0;font-weight:800;font-size:22px}
`;

await renderHero({ slug, css, body });
