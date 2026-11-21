// Hero / Discover image for /rankings/countries-biggest-space-budgets-2026.
// Each row is a rocket flying right; its length (body + nose) is proportional to the
// civil space budget in US$ millions (linear scale from zero).
// Data: official budgets (NASA P.L. 119-74, CNES, India Union Budget, MEXT/JAXA, UKSA) and
// OECD civil budgets; converted at ECB rates of Nov 20, 2026 (Viszlyn calculation).
// Run: node scripts/hero-images/countries-biggest-space-budgets-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const ROWS = [
  ["United States", "us", 24438.3, "$24,438.3M", "NASA"],
  ["France", "fr", 2788.6, "$2,788.6M", ""],
  ["Germany", "de", 2700.0, "$2,700.0M", ""],
  ["Italy", "it", 2163.1, "$2,163.1M", ""],
  ["India", "in", 1478.9, "$1,478.9M", ""],
  ["United Kingdom", "gb", 1017.8, "$1,017.8M", ""],
  ["Japan", "jp", 973.9, "$973.9M", "JAXA"],
  ["Canada", "ca", 951.3, "$951.3M", ""],
  ["South Korea", "kr", 763.8, "$763.8M", ""],
  ["Netherlands", "nl", 296.1, "$296.1M", ""],
];
const MAXW = 520;
const flag = (c) => "data:image/svg+xml;base64," + readFileSync(new URL(`../../node_modules/flag-icons/flags/4x3/${c}.svg`, import.meta.url)).toString("base64");
let seed = 5;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const stars = Array.from({ length: 140 }, () => {
  const s = rnd() * 2 + 0.6;
  return `<i class="st" style="left:${(rnd() * 1200).toFixed(0)}px;top:${(rnd() * 630).toFixed(0)}px;width:${s.toFixed(1)}px;height:${s.toFixed(1)}px;opacity:${(0.2 + rnd() * 0.6).toFixed(2)}"></i>`;
}).join("");

const rows = ROWS.map(([name, cc, v, label, tag], i) => {
  const w = Math.max(4, Math.round((v / 24438.3) * MAXW));
  const nose = Math.min(22, w);
  const body = w - nose;
  return `<div class="row${i === 0 ? " first" : ""}">
    <span class="rk">${i + 1}</span><img class="fl" src="${flag(cc)}"><span class="nm">${name}${tag ? `<em>${tag}</em>` : ""}</span>
    <div class="rocket"><span class="flame"></span><span class="body" style="width:${body}px"></span><span class="nose" style="border-left-width:${nose}px"></span></div>
    <span class="v">${label}</span></div>`;
}).join("");

const body = `
<div class="wrap">${stars}<div class="glow"></div>
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · 2026</div>
    <h1>The Biggest <em>Space Budgets</em></h1>
    <p class="sub">Civil government space budgets, US$ · NASA alone is nearly <strong>2×</strong> the next nine combined</p>
  </div>
  <div class="panel">${rows}</div>
  <div class="foot"><span>Sources: NASA, CNES, India Union Budget, MEXT/JAXA, UKSA, OECD · US$ at ECB rates, Nov 20, 2026 · To scale · China & Russia publish no budget</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;background:radial-gradient(900px 420px at 85% 110%,#5A2A10 0%,#1A0E1E 45%,transparent 75%),radial-gradient(700px 400px at 10% 0%,#132347 0%,transparent 70%),#05060E}
.st{position:absolute;border-radius:50%;background:#fff}
.glow{position:absolute;right:-120px;bottom:-160px;width:600px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(255,140,60,.35),transparent 70%)}
.head{position:absolute;left:44px;top:26px;right:44px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#FFB36B;font-weight:800;font-size:19px;letter-spacing:2px;text-transform:uppercase}
.v0{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:22px;letter-spacing:0}
h1{margin:8px 0 0;font-size:56px;line-height:1;font-weight:900;letter-spacing:-1.5px}
h1 em{font-style:normal;color:#FFC94A}
.sub{margin:8px 0 0;font-size:20px;font-weight:700;color:#D8D2E8}
.sub strong{color:#FFC94A}
.panel{position:absolute;left:44px;top:170px;right:30px}
.row{display:flex;align-items:center;height:39px}
.rk{width:34px;font-size:21px;font-weight:900;color:#FFB36B}
.fl{width:36px;height:27px;border-radius:4px;box-shadow:0 2px 6px rgba(0,0,0,.5);margin-right:11px;object-fit:cover}
.nm{width:228px;font-size:21px;font-weight:800;white-space:nowrap;letter-spacing:-.3px}
.nm em{font-style:normal;font-size:14px;font-weight:800;margin-left:7px;padding:2px 6px;border-radius:5px;background:rgba(255,255,255,.16);color:#E8E4F5;vertical-align:3px}
.rocket{display:flex;align-items:center;position:relative}
.flame{width:26px;height:12px;margin-right:-2px;border-radius:50% 0 0 50%;background:linear-gradient(90deg,transparent,#FF7A2F 55%,#FFE08A);filter:blur(1px)}
.body{height:18px;border-radius:3px 0 0 3px;background:linear-gradient(180deg,#FFFFFF 0%,#D5DCEB 55%,#9AA6BF 100%)}
.nose{width:0;height:0;border-top:9px solid transparent;border-bottom:9px solid transparent;border-left:22px solid #FF5D3A}
.v{margin-left:12px;font-size:22px;font-weight:900}
.row.first .nm,.row.first .v{color:#FFC94A}
.foot{position:absolute;left:44px;right:30px;bottom:12px;display:flex;justify-content:space-between;gap:16px;font-size:12.5px;color:rgba(255,255,255,.75)}
.site{font-weight:800;color:#fff;font-size:16px;white-space:nowrap}
`;
await renderHero({ slug: "countries-biggest-space-budgets-2026", css, body });
