// Hero / Discover image for /rankings/countries-longest-coastlines-2026.
// Each country is a wavy "shoreline" band (sea, foam, sand) whose length is proportional to its coastline,
// over the Baffin Island photo used for Canada (Ansgar Walk, CC BY-SA 2.5, Wikimedia Commons).
// Data: CIA World Factbook, final edition (January 2026), Coastline field.
// Run: node scripts/hero-images/countries-longest-coastlines-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const ROWS = [
  ["Canada", "ca", 202080], ["Indonesia", "id", 54716], ["Russia", "ru", 37653], ["Philippines", "ph", 36289],
  ["Japan", "jp", 29751], ["Australia", "au", 25760], ["Norway", "no", 25148], ["United States", "us", 19924],
  ["New Zealand", "nz", 15134], ["China", "cn", 14500],
];
const flag = (c) => "data:image/svg+xml;base64," + readFileSync(new URL(`../../node_modules/flag-icons/flags/4x3/${c}.svg`, import.meta.url)).toString("base64");
const bg = "data:image/webp;base64," + readFileSync(new URL("../../public/rankings/countries-longest-coastlines-2026/canada.webp", import.meta.url)).toString("base64");

const X0 = 262, LMAX = 900, TOP = 186, ROW = 40, BH = 26;
function shore(len, i) {
  const n = Math.max(2, Math.round(len / 18)), step = len / n;
  let top = `M0 9`;
  for (let k = 0; k < n; k++) top += ` Q${k * step + step / 2} ${k % 2 ? 4 : 14} ${(k + 1) * step} 9`;
  const foam = top;
  return `<svg width="${len}" height="${BH}" viewBox="0 0 ${len} ${BH}" style="overflow:visible">
    <defs><linearGradient id="s${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F3DDA6"/><stop offset="1" stop-color="#C99A55"/></linearGradient>
    <linearGradient id="w${i}" x1="0" x2="1"><stop offset="0" stop-color="#0B6FA4"/><stop offset="1" stop-color="#19A7C9"/></linearGradient></defs>
    <rect x="0" y="0" width="${len}" height="${BH}" rx="4" fill="url(#s${i})"/>
    <path d="${top} L${len} 0 L0 0Z" fill="url(#w${i})"/>
    <path d="M0 0 L${len} 0 L${len} 9 ${top.replace(/^M0 9/, "").split(" Q").reverse().length ? "" : ""}" fill="none"/>
    <path d="${foam}" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`;
}
const rows = ROWS.map(([name, cc, km], i) => {
  const len = Math.max(40, LMAX * (km / 202080)), y = TOP + i * ROW;
  const big = i === 0;
  return `<div class="row${big ? " big" : ""}" style="top:${y}px">
    <span class="rk">${big ? "No. 1" : i + 1}</span><img class="fl" src="${flag(cc)}"/><span class="nm">${name}</span>
  </div>
  <div class="bar" style="left:${X0}px;top:${y + 4}px">${shore(len, i)}</div>
  <div class="val${big ? " big" : ""}" style="${big ? `left:${X0 + len - 300}px;width:290px;text-align:right` : `left:${X0 + len + 10}px`};top:${y + 3}px">${km.toLocaleString("en-US")} km</div>`;
}).join("");

const body = `
<div class="wrap">
  <div class="photo"></div><div class="shade"></div>
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · 2026</div>
    <h1>The 10 <em>Longest Coastlines</em></h1>
    <p class="sub">Canada alone has <strong>56.76%</strong> of the world's coastline*</p>
  </div>
  ${rows}
  <div class="foot"><span>*Of the Factbook's 356,000 km world total (Viszlyn calc.) · Bar length ∝ km · CIA World Factbook, final ed. (Jan 2026) · Photo: Ansgar Walk, CC BY-SA 2.5</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;background:#06121F}
.photo{position:absolute;inset:0;background:url(${bg}) center 40%/cover}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,14,28,.94) 0%,rgba(4,14,28,.86) 55%,rgba(4,14,28,.55) 100%)}
.head{position:absolute;left:34px;top:22px;width:1140px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#9FE3F5;font-weight:800;font-size:18px;letter-spacing:2px;text-transform:uppercase}
.v0{display:grid;place-items:center;width:32px;height:32px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:21px;letter-spacing:0}
h1{margin:6px 0 0;font-size:62px;line-height:1;font-weight:900;letter-spacing:-1.8px;text-shadow:0 4px 18px rgba(0,0,0,.5)}
h1 em{font-style:normal;color:#5FD4F0}
.sub{margin:8px 0 0;font-size:24px;font-weight:800;color:#E6F2F8}
.sub strong{color:#FFD27A;font-size:28px}
.row{position:absolute;left:30px;width:226px;height:34px;display:flex;align-items:center;gap:8px;font-weight:800}
.rk{min-width:24px;text-align:center;font-size:15px;font-weight:900;color:#06121F;background:#9FE3F5;border-radius:6px;padding:1px 5px}
.row.big .rk{background:#FFD27A}
.fl{width:30px;height:22px;border-radius:3px;box-shadow:0 0 0 1px rgba(255,255,255,.35)}
.nm{font-size:18px;white-space:nowrap}
.row.big .nm{font-size:20px;color:#FFD27A}
.bar{position:absolute;filter:drop-shadow(0 3px 6px rgba(0,0,0,.45))}
.val{position:absolute;font-size:19px;font-weight:900;white-space:nowrap;text-shadow:0 2px 6px rgba(0,0,0,.85);line-height:28px}
.val.big{font-size:22px;color:#06121F;text-shadow:none}
.foot{position:absolute;left:30px;right:30px;bottom:10px;display:flex;justify-content:space-between;gap:14px;font-size:11.5px;color:rgba(255,255,255,.8)}
.site{font-weight:800;color:#fff;font-size:16px;white-space:nowrap}
`;
await renderHero({ slug: "countries-longest-coastlines-2026", css, body });
