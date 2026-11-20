// Hero / Discover image for /rankings/countries-most-satellites-in-orbit-2026.
// Space scene with Earth's limb; bars are drawn to scale (linear, from zero) and the
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
const MAXW = 470;
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
  ${stars}
  <div class="earth"></div>
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · Nov 2026</div>
    <h1>Countries With the <em>Most Satellites</em> in Orbit</h1>
    <p class="sub">Active satellites by owner country · World total: <strong>17,444</strong></p>
  </div>
  <div class="panel">${rows}</div>
  <div class="foot"><span>Source: CelesTrak SATCAT, snapshot of Nov 19, 2026 · Starlink split: Viszlyn calculation · Bars to scale</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;background:radial-gradient(900px 500px at 20% 10%,#14244A 0%,transparent 70%),#03050C}
.st{position:absolute;border-radius:50%;background:#fff}
.earth{position:absolute;left:-200px;right:-200px;top:540px;height:900px;border-radius:50%;
  background:radial-gradient(ellipse at 50% 8%,#3E8EDB 0%,#1B4F8F 22%,#0B2447 45%,#050C1C 70%);box-shadow:0 -6px 40px 8px rgba(90,170,255,.55)}
.head{position:absolute;left:48px;top:30px;right:48px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#8FC4FF;font-weight:800;font-size:20px;letter-spacing:2px;text-transform:uppercase}
.v0{display:grid;place-items:center;width:36px;height:36px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:23px;letter-spacing:0}
h1{margin:12px 0 0;font-size:52px;line-height:1.02;font-weight:900;letter-spacing:-1.5px}
h1 em{font-style:normal;color:#FFC94A}
.sub{margin:8px 0 0;font-size:22px;font-weight:700;color:#C6D8F5}
.sub strong{color:#fff}
.panel{position:absolute;left:48px;right:48px;top:186px}
.row{display:flex;align-items:center;height:37px}
.rk{width:46px;font-size:22px;font-weight:900;color:#8FC4FF}
.fl{width:38px;height:28px;border-radius:4px;box-shadow:0 2px 6px rgba(0,0,0,.5);margin-right:12px;object-fit:cover}
.nm{width:220px;font-size:23px;font-weight:800;white-space:nowrap;letter-spacing:-.3px}
.bar{height:22px;border-radius:4px;background:linear-gradient(90deg,#4FA3FF,#8FD3FF);box-shadow:0 0 10px rgba(110,190,255,.5)}
.bar.us{display:flex;background:none;box-shadow:none}
.sl{height:24px;display:flex;align-items:center;padding-left:10px;font-size:15px;font-weight:900;color:#2A1A00;background:linear-gradient(90deg,#FFB020,#FFD56B);border-radius:4px 0 0 4px;box-shadow:0 0 12px rgba(255,190,60,.5);white-space:nowrap}
.ot{height:24px;background:linear-gradient(90deg,#4FA3FF,#8FD3FF);border-radius:0 4px 4px 0}
.v{margin-left:12px;font-size:23px;font-weight:900}
.row.first .nm,.row.first .v{color:#FFC94A}
.foot{position:absolute;left:48px;right:48px;bottom:14px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.75)}
.site{font-weight:800;color:#fff;font-size:16px}
`;

await renderHero({ slug: "countries-most-satellites-in-orbit-2026", css, body });
