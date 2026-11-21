// Hero / Discover image for /rankings/highest-mountains-world-2026.
// A Himalayan skyline: each peak's summit height is drawn to scale from sea level (ground line = 0 m).
// Heights: China–Nepal 2020 (Everest), Survey of India (K2), Nepal government and Britannica (others).
// Run: node scripts/hero-images/highest-mountains-world-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const ROWS = [
  ["Everest", 8848.86, "8,848.86 m", ["cn", "np"]],
  ["K2", 8611, "8,611 m", ["cn", "pk"]],
  ["Kangchenjunga", 8586, "8,586 m", ["in", "np"]],
  ["Lhotse", 8516, "8,516 m", ["cn", "np"]],
  ["Makalu", 8485, "8,485 m", ["cn", "np"]],
  ["Cho Oyu", 8188, "8,188 m", ["cn", "np"]],
  ["Dhaulagiri I", 8167, "8,167 m", ["np"]],
  ["Manaslu", 8163, "8,163 m", ["np"]],
  ["Nanga Parbat", 8126, "8,126 m", ["pk"]],
  ["Annapurna I", 8091, "8,091 m", ["np"]],
];
const GROUND = 606, PXM = 395 / 8848.86;
const flag = (c) => "data:image/svg+xml;base64," + readFileSync(new URL(`../../node_modules/flag-icons/flags/4x3/${c}.svg`, import.meta.url)).toString("base64");
const X0 = 118, DX = 111;
let seed = 3;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

const peaks = ROWS.map(([name, m], i) => {
  const cx = X0 + i * DX, top = GROUND - m * PXM, hw = 120 + rnd() * 30;
  const l1 = [cx - hw * 0.45, top + (GROUND - top) * (0.28 + rnd() * 0.12)];
  const r1 = [cx + hw * 0.4, top + (GROUND - top) * (0.22 + rnd() * 0.12)];
  const rock = `M${cx - hw} ${GROUND} L${l1[0]} ${l1[1]} L${cx - 10} ${top + 14} L${cx} ${top} L${cx + 12} ${top + 18} L${r1[0]} ${r1[1]} L${cx + hw} ${GROUND} Z`;
  const lit = `M${cx - hw} ${GROUND} L${l1[0]} ${l1[1]} L${cx - 10} ${top + 14} L${cx} ${top} L${cx + 6} ${top + (GROUND - top) * 0.45} L${cx - hw * 0.15} ${GROUND} Z`;
  const ridge = `M${cx} ${top} L${cx + 6} ${top + (GROUND - top) * 0.45} L${cx - hw * 0.15} ${GROUND}`;
  const sl = 0.42, sy = top + (l1[1] - top) * sl;
  const snow = `M${cx - (cx - l1[0]) * 0.55} ${top + (l1[1] - top) * 0.55} L${cx - 10} ${top + 14} L${cx} ${top} L${cx + 12} ${top + 18} L${cx + (r1[0] - cx) * 0.6} ${top + (r1[1] - top) * 0.6} L${cx + 18} ${top + (r1[1] - top) * 0.42} L${cx + 4} ${top + (r1[1] - top) * 0.5} L${cx - 14} ${sy + 18} Z`;
  return { i, cx, top, rock, snow, lit, ridge };
});
const order = [...peaks].reverse().filter((p) => p.i !== 0).concat(peaks[0]);
const shade = (i) => (i === 0 ? ["#6F7FA0", "#2A3550"] : ["#56658A", "#222B42"]);
const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" style="position:absolute;inset:0">
<defs>${peaks.map((p) => `<linearGradient id="r${p.i}" x1="0" x2="1"><stop offset="0" stop-color="${shade(p.i)[0]}"/><stop offset="1" stop-color="${shade(p.i)[1]}"/></linearGradient>`).join("")}
<linearGradient id="mist" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9D8E8" stop-opacity="0"/><stop offset="1" stop-color="#E9D8E8" stop-opacity=".35"/></linearGradient><linearGradient id="sn" x1="0" x2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#C9D6EA"/></linearGradient></defs>
<line x1="0" x2="1200" y1="${GROUND - 8000 * PXM}" y2="${GROUND - 8000 * PXM}" stroke="#FFFFFF" stroke-opacity=".55" stroke-width="1.5" stroke-dasharray="6 6"/>

<path d="M0 ${GROUND - 150} L80 ${GROUND - 205} L170 ${GROUND - 160} L260 ${GROUND - 230} L360 ${GROUND - 170} L470 ${GROUND - 240} L590 ${GROUND - 175} L700 ${GROUND - 250} L820 ${GROUND - 180} L930 ${GROUND - 235} L1050 ${GROUND - 170} L1140 ${GROUND - 220} L1200 ${GROUND - 190} L1200 ${GROUND} L0 ${GROUND} Z" fill="#8C7AA8" opacity=".45"/>
${order.map((p) => `<path d="${p.rock}" fill="url(#r${p.i})" stroke="#1A2236" stroke-width="1"/><path d="${p.lit}" fill="#FFFFFF" opacity=".08"/><path d="${p.ridge}" stroke="#FFFFFF" stroke-opacity=".12" stroke-width="1.5" fill="none"/><path d="${p.snow}" fill="url(#sn)"/>`).join("")}
<rect x="0" y="${GROUND - 70}" width="1200" height="70" fill="url(#mist)"/>
<rect x="0" y="${GROUND}" width="1200" height="${630 - GROUND}" fill="#141B2C"/>
</svg>`;

const labels = ROWS.map(([name, m, label, ccs], i) => {
  const p = peaks[i];
  const first = i === 0;
  return `<div class="lab${first ? " big" : ""}" style="left:${p.cx}px;top:${p.top - (first ? 98 : 70)}px">
    <div class="fl">${ccs.map((c) => `<img src="${flag(c)}">`).join("")}<span class="no">${first ? "No. 1" : i + 1}</span></div>
    <div class="val">${label}</div><div class="nm">${name}</div></div>`;
}).join("");

let stars = "";
for (let k = 0; k < 70; k++) {
  const s = rnd() * 1.8 + 0.5;
  stars += `<i class="st" style="left:${(rnd() * 1200).toFixed(0)}px;top:${(rnd() * 150).toFixed(0)}px;width:${s.toFixed(1)}px;height:${s.toFixed(1)}px;opacity:${(0.2 + rnd() * 0.6).toFixed(2)}"></i>`;
}

const body = `
<div class="wrap">${stars}
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · 2026</div>
    <h1>The 10 Highest <em>Mountains</em> on Earth</h1>
  </div>
  <div class="sub">All 10 are in Asia, all above 8,000 m (dashed line) · Peaks drawn to height from sea level</div>
  ${svg}
  ${labels}
  <div class="foot"><span>Heights: China–Nepal 2020 (Everest), Survey of India (K2), Nepal government, Britannica</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:linear-gradient(180deg,#0B1530 0%,#23305E 30%,#7A5B8E 55%,#F2A06A 78%,#FFD8A0 100%)}
.st{position:absolute;border-radius:50%;background:#fff}
.head{position:absolute;left:40px;top:22px;right:40px;display:flex;align-items:center;gap:22px}
.eyebrow{display:flex;align-items:center;gap:10px;color:#FFD9A8;font-weight:800;font-size:16px;letter-spacing:2px;text-transform:uppercase;white-space:nowrap}
.v0{display:grid;place-items:center;width:32px;height:32px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:21px;letter-spacing:0}
h1{margin:0;font-size:52px;line-height:1;font-weight:900;letter-spacing:-1.6px;white-space:nowrap;text-shadow:0 4px 18px rgba(0,0,0,.4)}
h1 em{font-style:normal;color:#FFC94A}
.sub{position:absolute;left:40px;top:86px;font-size:19px;font-weight:700;color:#E8E2F4}
.lab{position:absolute;transform:translateX(-50%);text-align:center;white-space:nowrap;text-shadow:0 2px 8px rgba(0,0,0,.75)}
.fl{display:flex;justify-content:center;align-items:center;gap:3px}
.fl img{width:22px;height:16px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.5)}
.no{margin-left:4px;font-size:12px;font-weight:900;color:#0B0E14;background:#FFD27A;border-radius:5px;padding:1px 6px;text-shadow:none}
.val{font-size:16px;font-weight:900;margin-top:2px;letter-spacing:-.3px}
.nm{font-size:13px;font-weight:800;color:#F1ECF8}
.lab.big .fl img{width:30px;height:22px}
.lab.big .no{font-size:15px;background:#FFC94A}
.lab.big .val{font-size:23px;color:#FFE08A}
.lab.big .nm{font-size:18px}
.foot{position:absolute;left:30px;right:30px;bottom:6px;display:flex;justify-content:space-between;font-size:12.5px;color:rgba(255,255,255,.85)}
.site{font-weight:800;color:#fff;font-size:15px}
`;
await renderHero({ slug: "highest-mountains-world-2026", css, body });
