// NOTE (Nov 15, 2026): the published image is a designed version supplied separately; running this script overwrites it with the older road-bars design.
// Hero (Discover + first image on the page) for /rankings/biggest-car-producing-countries-2026.
// Each row is a road whose length is proportional to vehicles produced in 2025 (OICA), with a car driving at its front.
// Run: node scripts/hero-images/biggest-car-producing-countries-2026.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderHero } from "./render.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flag = async (code) =>
  "data:image/svg+xml;base64," +
  (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${code}.svg`))).toString("base64");

const ROWS = [
  ["China", "cn", 34530738], ["United States", "us", 10243844], ["Japan", "jp", 8410232], ["India", "in", 6490810],
  ["Germany", "de", 4148836], ["South Korea", "kr", 4102200], ["Mexico", "mx", 4092448], ["Brazil", "br", 2644054],
  ["Spain", "es", 2274026], ["France", "fr", 1463991],
];
const MAXW = 690; // road length for China
const CAR = (c, w = 54) => `<svg viewBox="0 0 24 12" width="${w}" height="${w / 2}"><path fill="${c}" d="M2 9V6.5l2.5-.8L7.5 2.5h7l3.5 3.2 3.5.6c.9.2 1.5.9 1.5 1.8V9h-1.6a2.4 2.4 0 0 0-4.8 0H7.4a2.4 2.4 0 0 0-4.8 0z"/><circle cx="5" cy="9.3" r="1.8" fill="#0D1117"/><circle cx="18.8" cy="9.3" r="1.8" fill="#0D1117"/></svg>`;

const rows = (await Promise.all(ROWS.map(async ([name, code, v], i) => {
  const m = v / 1e6;
  const len = Math.max(8, Math.round((v / ROWS[0][2]) * MAXW));
  const color = i === 0 ? "#FF4D3D" : "#FFFFFF";
  return `<div class="row${i === 0 ? " first" : ""}">
    <div class="lab"><span class="rk">${i + 1}</span><img src="${await flag(code)}"/><span class="nm">${name}</span></div>
    <div class="belt"><div class="road" style="width:${len}px"></div><span class="car">${CAR(color)}</span><span class="val">${m.toFixed(2)}M</span></div>
  </div>`;
}))).join("");

const body = `
<div class="wrap">
  <div class="hazard"></div>
  <div class="head">
    <div class="eyebrow"><span class="v">V</span>Ranked · 2025</div>
    <h1>The World's Biggest <em>Car-Producing</em> Countries</h1>
    <p class="sub">Motor vehicles built in 2025 · millions of cars, vans, trucks and buses</p>
  </div>
  <div class="rows">${rows}</div>
  <div class="foot"><span>Data: OICA, world motor vehicle production 2025</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:linear-gradient(180deg,#1A2230 0%,#0F151F 100%)}
.wrap::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0 2px,transparent 2px 80px)}
.hazard{position:absolute;left:0;right:0;top:0;height:12px;background:repeating-linear-gradient(135deg,#FFC21A 0 18px,#111 18px 36px)}
.head{position:absolute;left:44px;right:44px;top:26px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#FFC21A;font-weight:800;font-size:21px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:36px;height:36px;border-radius:8px;background:#FFC21A;color:#0F151F;font-weight:900;font-size:23px;letter-spacing:0}
h1{margin:10px 0 0;font-size:50px;line-height:1.02;font-weight:900;letter-spacing:-1.2px}
h1 em{font-style:normal;color:#FF4D3D}
.sub{margin:8px 0 0;font-size:22px;font-weight:700;color:#C9D4E3;display:flex;align-items:center;gap:8px}
.rows{position:absolute;left:44px;right:44px;top:170px}
.row{display:flex;align-items:center;height:42px}
.lab{width:236px;display:flex;align-items:center;gap:9px;flex:none}
.rk{width:30px;text-align:right;font-size:22px;font-weight:900}
.lab img{width:32px;height:24px;border-radius:3px;box-shadow:0 0 0 1px rgba(255,255,255,.35)}
.nm{font-size:21px;font-weight:800;white-space:nowrap}
.belt{flex:1;display:flex;align-items:center;height:38px}
.road{height:30px;border-radius:4px 0 0 4px;background:#2E3747;box-shadow:inset 0 -3px 0 #45526A;
  background-image:repeating-linear-gradient(90deg,#FFC21A 0 16px,transparent 16px 30px);background-size:100% 3px;background-repeat:repeat-x;background-position:0 50%}
.row.first .road{background-color:#4A2626;box-shadow:inset 0 -3px 0 #8A3A33}
.car{line-height:0;margin-left:-6px;filter:drop-shadow(0 2px 3px rgba(0,0,0,.6))}
.val{margin-left:8px;font-size:24px;font-weight:900}
.row.first .val{color:#FF6A5C;font-size:27px}
.row.first .nm{color:#FF8A7E}
.foot{position:absolute;left:44px;right:44px;bottom:10px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.65)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "biggest-car-producing-countries-2026", css, body });
