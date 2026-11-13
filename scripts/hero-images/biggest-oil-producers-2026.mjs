// Share / Google Discover image for /rankings/biggest-oil-producers-2026 (the page keeps its block mosaic).
// Ten glass columns filled with crude oil; each oil level is proportional to 2025 production
// (thousand barrels per day, Energy Institute Statistical Review 2026). Pumpjack silhouettes at dusk.
// Run: node scripts/hero-images/biggest-oil-producers-2026.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderHero } from "./render.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flag = async (code) =>
  "data:image/svg+xml;base64," +
  (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${code}.svg`))).toString("base64");

const ROWS = [
  ["US", "us", 21065],
  ["Saudi<br/>Arabia", "sa", 11408],
  ["Russia", "ru", 10737],
  ["Canada", "ca", 6164],
  ["Iran", "ir", 5184],
  ["Iraq", "iq", 4396],
  ["China", "cn", 4340],
  ["UAE", "ae", 4207],
  ["Brazil", "br", 3881],
  ["Kuwait", "kw", 2820],
];
const MAXH = 250;

const cols = (
  await Promise.all(
    ROWS.map(async ([name, code, v], i) => {
      const h = Math.round((v / ROWS[0][2]) * MAXH);
      return `<div class="col${i === 0 ? " first" : ""}">
        <div class="val">${v.toLocaleString("en-US")}</div>
        <div class="tube" style="height:${h + 14}px"><div class="oil" style="height:${h}px"></div></div>
        <div class="base"><span class="rk">${i + 1}</span><img src="${await flag(code)}"/></div>
        <div class="nm">${name}</div>
      </div>`;
    })
  )
).join("");

const JACK = `<svg viewBox="0 0 120 80" class="jack"><path d="M8 78h104v2H8zM30 78l18-46 18 46h-5L48 42 35 78zM14 30l70-14 3 6-70 14zM84 16c6-2 12 2 13 8l-3 22-5-1 2-20c-1-3-4-5-7-4zM93 46l2 32h-4l-1-32zM46 30h6v6h-6z" fill="#120B07"/></svg>`;

const body = `
<div class="wrap">
  <div class="sun"></div>
  <div class="ground"></div>
  <div class="jacks"><div style="left:40px;width:150px">${JACK}</div><div style="left:1010px;width:120px">${JACK}</div></div>
  <div class="head">
    <div class="eyebrow"><span class="v">V</span>Ranked · 2025</div>
    <h1>The World's 10 Biggest <em>Oil Producers</em></h1>
    <p class="sub">Thousand barrels per day · the US pumps 20.9% of the world's oil</p>
  </div>
  <div class="cols">${cols}</div>
  <div class="foot"><span>Data: Energy Institute, Statistical Review of World Energy 2026</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:linear-gradient(180deg,#1B1030 0%,#4A1F3A 38%,#C2502A 72%,#F2A541 100%)}
.sun{position:absolute;left:520px;top:400px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,#FFE3A1 0%,#FFB347 55%,rgba(255,179,71,0) 72%)}
.ground{position:absolute;left:0;right:0;bottom:0;height:96px;background:linear-gradient(180deg,#2A160C,#140A05)}
.jacks>div{position:absolute;bottom:90px}
.jack{width:100%;display:block}
.head{position:absolute;left:48px;right:48px;top:30px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#FFC98A;font-weight:800;font-size:22px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:38px;height:38px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:24px;letter-spacing:0}
h1{margin:14px 0 0;font-size:54px;line-height:1.02;font-weight:900;letter-spacing:-1.2px}
h1 em{font-style:normal;color:#FFB347}
.sub{margin:10px 0 0;font-size:23px;font-weight:700;color:#FFE1C2}
.cols{position:absolute;left:150px;right:150px;bottom:40px;display:flex;justify-content:space-between;align-items:flex-end}
.col{width:82px;display:flex;flex-direction:column;align-items:center}
.val{font-size:23px;font-weight:900;margin-bottom:6px;text-shadow:0 2px 6px rgba(0,0,0,.6)}
.col.first .val{color:#FFD27A;font-size:27px}
.tube{position:relative;width:58px;border-radius:12px 12px 4px 4px;background:rgba(255,255,255,.14);
  box-shadow:inset 0 0 0 3px rgba(255,255,255,.45),0 8px 18px rgba(0,0,0,.45);overflow:hidden}
.oil{position:absolute;left:3px;right:3px;bottom:3px;border-radius:9px 9px 2px 2px;
  background:linear-gradient(90deg,#0A0604 0%,#2B1B10 35%,#4A3220 48%,#1A0F08 62%,#050302 100%)}
.oil::before{content:"";position:absolute;left:0;right:0;top:0;height:8px;border-radius:9px 9px 0 0;background:linear-gradient(90deg,#3A2615,#8A6034,#3A2615)}
.col.first .tube{box-shadow:inset 0 0 0 3px #FFB347,0 0 24px rgba(255,179,71,.55)}
.base{display:flex;align-items:center;gap:6px;margin-top:8px}
.rk{font-size:22px;font-weight:900;color:#fff}
.base img{width:34px;height:25px;border-radius:3px;box-shadow:0 0 0 1px rgba(255,255,255,.35)}
.nm{margin-top:4px;font-size:19px;font-weight:800;text-align:center;line-height:1.05;height:40px}
.foot{position:absolute;left:48px;right:48px;bottom:12px;display:flex;justify-content:space-between;font-size:15px;color:rgba(255,255,255,.75)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "biggest-oil-producers-2026", css, body });
