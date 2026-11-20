// Hero / Discover image for /rankings/countries-most-satellites-in-orbit-2026.
// Background image supplied by the site owner (Nov 20, 2026).
// Background: the user's own satellite/Earth image (assets/satellites-bg.png), left side covered by the ranking panel; bars are drawn to scale (linear, from zero) and the
// US bar is split into SpaceX Starlink (11,209) and everything else (1,929).
// Data: CelesTrak SATCAT snapshot of November 19, 2026 (active satellites by owner).
// Run: node scripts/hero-images/countries-most-satellites-in-orbit-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const ROWS = [
  ["1", "United States", "us", 13138],
  ["2", "China", "cn", 1613],
  ["3", "United Kingdom", "gb", 700],
  ["4", "Russia", "ru", 392],
  ["5", "Japan", "jp", 148],
  ["6", "Italy", "it", 89],
  ["=7", "France", "fr", 78],
  ["=7", "Germany", "de", 78],
  ["=7", "India", "in", 78],
  ["10", "South Korea", "kr", 76],
];
const STARLINK = 11209;
const MAXW = 300;
const BG = "data:image/png;base64," + readFileSync(new URL("./assets/satellites-bg.png", import.meta.url)).toString("base64");
const flag = (c) =>
  "data:image/svg+xml;base64," + readFileSync(new URL(`../../node_modules/flag-icons/flags/4x3/${c}.svg`, import.meta.url)).toString("base64");

let seed = 11;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const stars = Array.from({ length: 150 }, () => {
  const s = rnd() * 2 + 0.6;
  return `<i class="st" style="left:${(rnd() * 1200).toFixed(0)}px;top:${(rnd() * 630).toFixed(0)}px;width:${s.toFixed(1)}px;height:${s.toFixed(1)}px;opacity:${(0.2 + rnd() * 0.6).toFixed(2)}"></i>`;
}).join("");

const fmt = (n) => n.toLocaleString("en-US");
const rows = ROWS.map(([rk, name, cc, n], i) => {
  const w = Math.max(3, Math.round((n / 13138) * MAXW));
  let bar;
  if (i === 0) {
    const ws = Math.round((STARLINK / 13138) * MAXW);
    bar = `<div class="bar us"><span class="sl" style="width:${ws}px">Starlink ${fmt(STARLINK)}</span><span class="ot" style="width:${w - ws}px"></span></div>`;
  } else {
    bar = `<div class="bar" style="width:${w}px"></div>`;
  }
  return `<div class="row${i === 0 ? " first" : ""}">
    <span class="rk">${rk}</span><img class="fl" src="${flag(cc)}"><span class="nm">${name}</span>
    ${bar}<span class="v">${fmt(n)}</span></div>`;
}).join("");

const body = `
<div class="wrap">
  <div class="bgimg"></div><div class="shade"></div>
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · Nov 2026</div>
    <h1>The 10 Countries With the<br/><em>Most Satellites</em> in Orbit</h1>
    <p class="sub">Active satellites by owner · World total: <strong>17,444</strong></p>
  </div>
  <div class="panel">${rows}</div>
  <div class="foot"><span>Source: CelesTrak SATCAT, snapshot of Nov 19, 2026 · Starlink split: Viszlyn calculation · Bars to scale</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;background:#03050C}
.bgimg{position:absolute;left:0;top:-22px;width:1200px;height:675px;background:url(${BG}) center/cover no-repeat}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,6,16,1) 0%,rgba(3,6,16,1) 57%,rgba(3,6,16,.5) 64%,rgba(3,6,16,0) 72%)}
.head{position:absolute;left:44px;top:26px;width:680px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#8FC4FF;font-weight:800;font-size:18px;letter-spacing:2px;text-transform:uppercase}
.v0{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:22px;letter-spacing:0}
h1{margin:10px 0 0;font-size:44px;line-height:1.03;font-weight:900;letter-spacing:-1.2px;text-shadow:0 3px 12px rgba(0,0,0,.6)}
h1 em{font-style:normal;color:#FFC94A}
.sub{margin:6px 0 0;font-size:19px;font-weight:700;color:#C6D8F5}
.sub strong{color:#fff}
.panel{position:absolute;left:44px;top:198px;width:690px}
.row{display:flex;align-items:center;height:36px}
.rk{width:42px;font-size:21px;font-weight:900;color:#8FC4FF}
.fl{width:36px;height:27px;border-radius:4px;box-shadow:0 2px 6px rgba(0,0,0,.5);margin-right:11px;object-fit:cover}
.nm{width:196px;font-size:21px;font-weight:800;white-space:nowrap;letter-spacing:-.3px}
.bar{height:20px;border-radius:4px;background:linear-gradient(90deg,#4FA3FF,#8FD3FF);box-shadow:0 0 10px rgba(110,190,255,.5)}
.bar.us{display:flex;background:none;box-shadow:none}
.sl{height:22px;display:flex;align-items:center;padding-left:8px;font-size:13px;font-weight:900;color:#2A1A00;background:linear-gradient(90deg,#FFB020,#FFD56B);border-radius:4px 0 0 4px;box-shadow:0 0 12px rgba(255,190,60,.5);white-space:nowrap}
.ot{height:22px;background:linear-gradient(90deg,#4FA3FF,#8FD3FF);border-radius:0 4px 4px 0}
.v{margin-left:10px;font-size:21px;font-weight:900}
.row.first .nm,.row.first .v{color:#FFC94A}
.foot{position:absolute;left:44px;right:30px;bottom:12px;display:flex;justify-content:space-between;font-size:13px;color:rgba(255,255,255,.8);text-shadow:0 1px 4px rgba(0,0,0,.8)}
.site{font-weight:800;color:#fff;font-size:16px}
`;

await renderHero({ slug: "countries-most-satellites-in-orbit-2026", css, body });
