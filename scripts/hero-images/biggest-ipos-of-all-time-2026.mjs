// Hero / Discover image for /rankings/biggest-ipos-of-all-time-2026.
// Proportional circles: circle AREA is proportional to money raised at IPO pricing (before the greenshoe).
// Data: company prospectuses and pricing announcements (see the article's source note).
// Run: node scripts/hero-images/biggest-ipos-of-all-time-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const flag = (cc) => "data:image/svg+xml;base64," + readFileSync(new URL(`../../node_modules/flag-icons/flags/1x1/${cc}.svg`, import.meta.url)).toString("base64");

// [rank, name, year, US$B, flag, cx, cy, colour class]
const R1 = 150; // radius for Anthropic; others scale by sqrt(value)
const C = [
  [1, "Anthropic", 2026, 81.34, "us", 182, 345, "hot"],
  [2, "SpaceX", 2026, 75.0, "us", 482, 372, "hot2"],
  [3, "Saudi Aramco", 2019, 25.6, "sa", 745, 168, "c"],
  [4, "Alibaba", 2014, 21.77, "cn", 912, 150, "c"],
  [5, "SoftBank Corp.", 2018, 21.3, "jp", 1075, 175, "c"],
  [6, "General Motors", 2010, 20.12, "us", 740, 335, "c"],
  [7, "Agri. Bank of China", 2010, 19.2, "cn", 898, 312, "c"],
  [8, "ICBC", 2006, 19.1, "cn", 1062, 330, "c"],
  [9, "NTT DoCoMo", 1998, 17.95, "jp", 820, 470, "c"],
  [10, "Visa", 2008, 17.86, "us", 980, 478, "c"],
];
const LBL = { 1: "$81.3B", 2: "$75.0B", 3: "$25.6B", 4: "$21.8B", 5: "$21.3B", 6: "$20.1B", 7: "$19.2B", 8: "$19.1B", 9: "$17.95B", 10: "$17.86B" }; // same labels as the article chart
const circles = C.map(([rk, n, yr, v, cc, cx, cy, cls]) => {
  const r = R1 * Math.sqrt(v / 81.34), big = rk <= 2;
  return `<div class="circ ${cls}" style="left:${cx - r}px;top:${cy - r}px;width:${2 * r}px;height:${2 * r}px">
    <div class="in ${big ? "big" : ""}">
      <div class="top"><span class="rk">${rk}</span><img class="fl" src="${flag(cc)}"/></div>
      <div class="nm">${n}</div>
      <div class="v">${LBL[rk]}</div>
      <div class="yr">${yr}</div>
    </div></div>`;
}).join("");

const body = `<div class="wrap">
  <div class="title"><span class="v0">V</span><b>The Biggest IPOs of All Time</b><span class="sub">money raised at pricing, US$</span></div>
  <div class="tag t26">2026 · two new records</div>
  <div class="tag tprev">The biggest before 2026 · 1998–2019</div>
  ${circles}
  <div class="foot"><span>Circle area = money raised at IPO pricing, before the greenshoe · Sources: company prospectuses and pricing announcements; ICBC, DoCoMo as reported; SoftBank converted at ¥112.96/US$</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(ellipse at 25% 60%,#2A1A12 0%,#120F16 45%,#0A0B12 100%)}
.wrap:before{content:"";position:absolute;inset:0;background:
  repeating-linear-gradient(0deg,rgba(255,255,255,.03) 0 1px,transparent 1px 42px),
  repeating-linear-gradient(90deg,rgba(255,255,255,.03) 0 1px,transparent 1px 42px)}
.title{position:absolute;left:26px;top:20px;display:flex;align-items:center;gap:10px;font-size:19px}
.title b{font-weight:900;letter-spacing:-.2px}
.title .sub{font-size:14px;font-weight:600;color:#A9A6BC}
.v0{display:grid;place-items:center;width:26px;height:26px;border-radius:6px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:16px}
.tag{position:absolute;font-size:13px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;padding:4px 10px;border-radius:999px}
.t26{left:220px;top:74px;background:#FF7A45;color:#1A0A00}
.tprev{left:770px;top:560px;color:#8FE3D8;border:1px solid rgba(143,227,216,.5)}
.circ{position:absolute;border-radius:50%;display:grid;place-items:center;box-sizing:border-box}
.circ.hot{background:radial-gradient(circle at 35% 30%,#FFB37A,#FF6A2B 55%,#C2410C);box-shadow:0 0 60px rgba(255,106,43,.45)}
.circ.hot2{background:radial-gradient(circle at 35% 30%,#FFD08A,#F59E0B 55%,#B45309);box-shadow:0 0 50px rgba(245,158,11,.35)}
.circ.c{background:radial-gradient(circle at 35% 30%,#5EEAD4,#14B8A6 55%,#0F766E);box-shadow:0 0 20px rgba(20,184,166,.25)}
.in{text-align:center;line-height:1.05;color:#06201D}
.hot .in,.hot2 .in{color:#1A0A00}
.top{display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:3px}
.rk{font-size:15px;font-weight:900;background:rgba(0,0,0,.75);color:#fff;border-radius:999px;padding:1px 7px}
.fl{width:20px;height:20px;border-radius:50%;border:1.5px solid rgba(255,255,255,.9)}
.nm{font-size:13.5px;font-weight:800;max-width:140px;margin:0 auto}
.v{font-size:24px;font-weight:900;letter-spacing:-.5px}
.yr{font-size:12px;font-weight:700;opacity:.8}
.big .rk{font-size:22px;padding:1px 10px}.big .fl{width:30px;height:30px}
.big .nm{font-size:30px;font-weight:900;max-width:none}
.big .v{font-size:64px;letter-spacing:-2px}
.big .yr{font-size:20px}
.foot{position:absolute;left:26px;right:26px;bottom:12px;display:flex;justify-content:space-between;align-items:flex-end;gap:16px;font-size:10.5px;color:#8D8AA3}
.site{font-size:15px;font-weight:900;color:#fff;white-space:nowrap}`;

await renderHero({ slug: "biggest-ipos-of-all-time-2026", css, body });
