// Hero / Discover image for /rankings/countries-biggest-space-budgets-2026.
// Illustrated launch scene: one rocket per country, scaled so that each rocket's AREA is
// proportional to its civil space budget (height and width both scale with the square root).
// Data: official budgets (NASA P.L. 119-74, CNES, India Union Budget, MEXT/JAXA, UKSA) and
// OECD civil budgets; US$ converted at ECB rates of Nov 20, 2026 (Viszlyn calculation).
// Run: node scripts/hero-images/countries-biggest-space-budgets-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const ROWS = [
  ["United States", "us", 24438.3, "$24,438.3M", "NASA"],
  ["France", "fr", 2788.6, "$2,788.6M"],
  ["Germany", "de", 2700.0, "$2,700.0M"],
  ["Italy", "it", 2163.1, "$2,163.1M"],
  ["India", "in", 1478.9, "$1,478.9M"],
  ["UK", "gb", 1017.8, "$1,017.8M"],
  ["Japan", "jp", 973.9, "$973.9M", "JAXA"],
  ["Canada", "ca", 951.3, "$951.3M"],
  ["S. Korea", "kr", 763.8, "$763.8M"],
  ["Netherlands", "nl", 296.1, "$296.1M"],
];
const flag = (c) => "data:image/svg+xml;base64," + readFileSync(new URL(`../../node_modules/flag-icons/flags/4x3/${c}.svg`, import.meta.url)).toString("base64");

const GROUND = 548, HMAX = 420;
const H = (v) => HMAX * Math.sqrt(v / 24438.3);

// rocket SVG: height h, width w = 0.24h; body, nose, fins, window, flag band, flame
function rocket(h, cc, gold) {
  const w = h * 0.24, nose = h * 0.24, fin = h * 0.16, bodyTop = nose, bodyH = h - nose;
  const W = w * 1.9; // canvas incl. fins
  const cx = W / 2, x0 = cx - w / 2;
  const id = `g${cc}`;
  return `<svg width="${W}" height="${h + h * 0.28}" viewBox="0 0 ${W} ${h + h * 0.28}" style="overflow:visible">
  <defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="#AEB8CC"/><stop offset=".35" stop-color="#FFFFFF"/><stop offset=".7" stop-color="#E4E9F2"/><stop offset="1" stop-color="#8E99B0"/></linearGradient>
  <radialGradient id="f${id}" cx=".5" cy="0" r="1"><stop offset="0" stop-color="#FFF6C8"/><stop offset=".35" stop-color="#FFB13B"/><stop offset=".75" stop-color="#FF5A1F" stop-opacity=".8"/><stop offset="1" stop-color="#FF3A00" stop-opacity="0"/></radialGradient></defs>
  <ellipse cx="${cx}" cy="${h + h * 0.12}" rx="${w * 0.45}" ry="${h * 0.16}" fill="url(#f${id})"/>
  <path d="M${x0} ${h - fin} L${x0 - w * 0.42} ${h + w * 0.1} L${x0} ${h - w * 0.05}Z" fill="${gold ? "#FFB020" : "#FF5D3A"}"/>
  <path d="M${x0 + w} ${h - fin} L${x0 + w + w * 0.42} ${h + w * 0.1} L${x0 + w} ${h - w * 0.05}Z" fill="${gold ? "#E09000" : "#D9431F"}"/>
  <rect x="${x0}" y="${bodyTop}" width="${w}" height="${bodyH}" fill="url(#${id})"/>
  <path d="M${x0} ${bodyTop + 0.5} Q${cx} ${-nose * 0.15} ${x0 + w} ${bodyTop + 0.5}Z" fill="${gold ? "#FFC94A" : "#FF5D3A"}"/>
  <image href="${flag(cc)}" x="${x0 + w * 0.12}" y="${bodyTop + bodyH * 0.42}" width="${w * 0.76}" height="${w * 0.57}" preserveAspectRatio="xMidYMid slice"/>
  ${h > 90 ? `<circle cx="${cx}" cy="${bodyTop + bodyH * 0.2}" r="${w * 0.17}" fill="#1B3B6B" stroke="#9AA6BF" stroke-width="${Math.max(1, w * 0.04)}"/>` : ""}
  <rect x="${x0 + w * 0.08}" y="${h - w * 0.12}" width="${w * 0.84}" height="${w * 0.12}" fill="#5A6478"/>
</svg>`;
}

// layout: giant US on the left, the other nine stepping down to the right
const XS = [150, 345, 437, 529, 621, 713, 805, 897, 989, 1081];
const items = ROWS.map(([name, cc, v, label, tag], i) => {
  const h = H(v), first = i === 0;
  const svg = rocket(h, cc, first);
  const labelTop = first ? 18 : GROUND - h - 80;
  return `<div class="rk" style="left:${XS[i]}px;top:${GROUND - h}px">${svg}</div>
  <div class="lab${first ? " big" : ""}" style="left:${XS[i]}px;top:${labelTop}px">
    <div class="no">${first ? "No. 1" : i + 1}</div>
    <div class="val">${label}</div>
    <div class="nm">${name}${tag ? ` <em>${tag}</em>` : ""}</div>
  </div>`;
}).join("");

let seed = 9;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const stars = Array.from({ length: 160 }, () => {
  const s = rnd() * 2 + 0.5;
  return `<i class="st" style="left:${(rnd() * 1200).toFixed(0)}px;top:${(rnd() * 380).toFixed(0)}px;width:${s.toFixed(1)}px;height:${s.toFixed(1)}px;opacity:${(0.2 + rnd() * 0.7).toFixed(2)}"></i>`;
}).join("");
const puffs = Array.from({ length: 26 }, (_, k) => {
  const x = -40 + k * 50 + rnd() * 30, r = 34 + rnd() * 40;
  return `<i class="puff" style="left:${x.toFixed(0)}px;top:${(GROUND - r * 0.35 + rnd() * 20).toFixed(0)}px;width:${(r * 2).toFixed(0)}px;height:${(r * 2).toFixed(0)}px"></i>`;
}).join("");

const body = `
<div class="wrap">${stars}
  <div class="sun"></div>
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · 2026</div>
    <h1>The Biggest<br/><em>Space Budgets</em></h1>
    <p class="sub">Civil government space budgets, US$<br/>NASA alone ≈ <strong>1.86×</strong> the next nine combined</p>
  </div>
  ${items}
  ${puffs}
  <div class="ground"></div>
  <div class="foot"><span>Rocket area ∝ budget · Sources: NASA (P.L. 119-74), CNES, India Union Budget, MEXT/JAXA, UKSA, OECD · US$ at ECB rates of Nov 20, 2026 · China &amp; Russia not comparable</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:linear-gradient(180deg,#040818 0%,#0B1638 38%,#3A2453 60%,#B4523A 82%,#F0A04B 100%)}
.st{position:absolute;border-radius:50%;background:#fff}
.sun{position:absolute;left:640px;top:455px;width:520px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(255,214,120,.75),rgba(255,140,60,.25) 45%,transparent 70%)}
.head{position:absolute;right:44px;top:30px;width:520px;text-align:right}
.eyebrow{display:flex;justify-content:flex-end;align-items:center;gap:12px;color:#FFC98A;font-weight:800;font-size:19px;letter-spacing:2px;text-transform:uppercase}
.v0{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:22px;letter-spacing:0}
h1{margin:10px 0 0;font-size:66px;line-height:.98;font-weight:900;letter-spacing:-2px;text-shadow:0 4px 18px rgba(0,0,0,.5)}
h1 em{font-style:normal;color:#FFC94A}
.sub{margin:12px 0 0;font-size:20px;line-height:1.3;font-weight:700;color:#E6E0F2}
.sub strong{color:#FFC94A;font-size:24px}
.rk{position:absolute;transform:translateX(-50%);filter:drop-shadow(0 8px 16px rgba(0,0,0,.45))}
.lab{position:absolute;transform:translateX(-50%);text-align:center;white-space:nowrap;text-shadow:0 2px 8px rgba(0,0,0,.8)}
.lab .no{display:inline-block;font-size:13px;font-weight:900;color:#0B0E14;background:#FFD27A;border-radius:6px;padding:1px 7px}
.lab .val{font-size:16px;letter-spacing:-.4px;font-weight:900;margin-top:3px}
.lab .nm{font-size:13px;font-weight:800;color:#E8E4F5}
.lab em{font-style:normal;font-size:11px;padding:1px 5px;border-radius:4px;background:rgba(255,255,255,.2)}
.lab.big .no{font-size:18px;background:#FFC94A}
.lab.big .val{font-size:32px;color:#FFC94A}
.lab.big .nm{font-size:21px}
.puff{position:absolute;border-radius:50%;background:radial-gradient(circle at 40% 35%,#FFFFFF,#D9D2DA 55%,#A99BA8 100%);opacity:.92}
.ground{position:absolute;left:0;right:0;top:${GROUND + 26}px;bottom:0;background:linear-gradient(180deg,#2A2230,#120E16)}
.foot{position:absolute;left:30px;right:30px;bottom:10px;display:flex;justify-content:space-between;gap:14px;font-size:12px;color:rgba(255,255,255,.8)}
.site{font-weight:800;color:#fff;font-size:16px;white-space:nowrap}
`;
await renderHero({ slug: "countries-biggest-space-budgets-2026", css, body });
