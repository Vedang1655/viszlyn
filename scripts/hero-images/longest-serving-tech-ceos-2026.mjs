// Hero / Discover image for /rankings/longest-serving-tech-ceos-2026.
// A tenure timeline: one bar per CEO from the month they became CEO to November 2026, with face photos.
// Data: company proxy statements, 8-K/10-K filings and official bios (tenures as of Nov 25, 2026).
// Photos: Wikimedia Commons (credited in the footer and on each article entry). Rick Wallace has no free photo, so he gets an initials badge.
// Run: node scripts/hero-images/longest-serving-tech-ceos-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

// [rank, name, company, start (decimal year), tenure label, face key | null, approx?]
const ROWS = [
  [1, "Jensen Huang", "Nvidia", 1993.25, "33y 7m", "jensen-huang"],
  [2, "Ma Huateng", "Tencent", 1998.83, "28y", "ma-huateng"],
  [3, "Marc Benioff", "Salesforce", 1999.08, "27y 9m", "marc-benioff"],
  [4, "Mark Zuckerberg", "Meta", 2004.08, "22y 9m", "mark-zuckerberg"],
  [5, "Alex Karp", "Palantir", 2005.0, "~21y", "alex-karp", true],
  [6, "Rick Wallace", "KLA", 2006.0, "20y 10m", null],
  [7, "Hock Tan", "Broadcom", 2006.17, "20y 8m", "hock-tan"],
  [8, "Michael Dell", "Dell", 2007.08, "19y 9m", "michael-dell"],
  [9, "Tobias Lütke", "Shopify", 2008.25, "18y 7m", "tobias-lutke"],
  [10, "Brian Chesky", "Airbnb", 2008.0, "~18y", "brian-chesky", true],
];
const NOW = 2026.9;
const X0 = 318, X1 = 1062, Y0 = 1993;
const x = (yr) => X0 + ((yr - Y0) / (NOW - Y0)) * (X1 - X0);
const face = (k) => "data:image/jpeg;base64," + readFileSync(new URL(`./assets/ceos/${k}.jpg`, import.meta.url)).toString("base64");

const TOP = 170, ROW = 41;
const rows = ROWS.map(([r, n, c, s, t, k, approx], i) => {
  const y = TOP + i * ROW;
  const left = x(s), w = x(NOW) - left;
  const pic = k ? `<img class="face" src="${face(k)}"/>` : `<div class="face rw">RW</div>`;
  const gap = r === 1 ? `<div class="gap" style="left:${x(2026.86) - left}px"></div><div class="gapnote">out Nov 11–22, 2026, then reinstated</div>` : "";
  return `<div class="row ${r === 1 ? "top" : ""}" style="top:${y}px">
    <span class="rk">${r}</span>${pic}
    <div class="who"><b>${n}</b><span>${c}</span></div>
    <div class="bar ${approx ? "approx" : ""}" style="left:${left}px;width:${w}px"><span class="since">${Math.floor(s)}</span>${gap}</div>
    <span class="val">${t}</span>
  </div>`;
}).join("");

const ticks = [1993, 2000, 2005, 2010, 2015, 2020, 2026].map((yr) =>
  `<div class="tick" style="left:${x(yr === 2026 ? NOW : yr)}px"><span>${yr === 2026 ? "Nov 2026" : yr}</span></div>`).join("");

const body = `
<div class="wrap">
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · 2026</div>
    <h1>The Longest-Serving <em>Tech CEOs</em></h1>
    <p class="sub">Years as CEO of a <strong>US$100B+</strong> tech company · as of Nov 25, 2026</p>
  </div>
  <div class="badge"><div class="b1">No. 1</div><div class="b2">JENSEN HUANG</div><div class="b3">33 years at Nvidia</div></div>
  ${ticks}
  ${rows}
  <div class="foot"><span>Sources: company proxy statements, SEC 8-K/10-K filings, Tencent bio · "~" = start year only · Photos (Wikimedia Commons, CC BY/BY-SA): A. Eidesvik, China News Service, JD Lasica, J. Sainlar/Meta, UK Gov, G. Bezat, Village Global, Union Eleven, TechCrunch</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(ellipse at 85% 0%,#2A2470 0%,#141236 50%,#0A0920 100%)}
.wrap:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0 1px,transparent 1px 40px)}
.head{position:absolute;left:40px;top:20px;width:820px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#C9C3FF;font-weight:800;font-size:17px;letter-spacing:2px;text-transform:uppercase}
.v0{display:grid;place-items:center;width:30px;height:30px;border-radius:7px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:19px;letter-spacing:0}
h1{margin:8px 0 0;font-size:52px;line-height:1;font-weight:900;letter-spacing:-1.5px}
h1 em{font-style:normal;color:#76E4FF}
.sub{margin:8px 0 0;font-size:19px;font-weight:700;color:#DCD9FF}
.sub strong{color:#FFD24A}
.badge{position:absolute;right:30px;top:24px;width:230px;padding:10px 0 12px;border-radius:16px;text-align:center;
  background:linear-gradient(135deg,#FFD24A,#FF9F1C);color:#1A1200;transform:rotate(3deg);box-shadow:0 10px 30px rgba(0,0,0,.45)}
.b1{font-size:20px;font-weight:900;letter-spacing:3px}.b2{font-size:27px;font-weight:900;letter-spacing:.5px;line-height:1.05}.b3{font-size:16px;font-weight:800}
.tick{position:absolute;top:164px;bottom:50px;border-left:1px dashed rgba(255,255,255,.16)}
.tick span{position:absolute;top:-18px;left:0;transform:translateX(-50%);font-size:12px;font-weight:700;color:#9C97D6;white-space:nowrap}
.row{position:absolute;left:0;width:1200px;height:${ROW}px}
.rk{position:absolute;left:30px;top:9px;width:26px;text-align:right;font-size:20px;font-weight:900;color:#9C97D6}
.face{position:absolute;left:64px;top:2px;width:38px;height:38px;border-radius:50%;object-fit:cover;border:2px solid #76E4FF;box-sizing:border-box}
.face.rw{display:grid;place-items:center;background:#3B3680;color:#fff;font-weight:900;font-size:14px}
.who{position:absolute;left:112px;top:3px;line-height:1.1}
.who b{display:block;font-size:17px;font-weight:800}.who span{font-size:13px;font-weight:600;color:#ADA8E8}
.bar{position:absolute;top:8px;height:26px;border-radius:5px;background:linear-gradient(90deg,#4F46E5,#76E4FF)}
.bar.approx{background:linear-gradient(90deg,rgba(79,70,229,.15),#76E4FF 30%)}
.since{position:absolute;left:8px;top:4px;font-size:13px;font-weight:800;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.6)}
.top .bar{background:linear-gradient(90deg,#FF9F1C,#FFD24A)}
.top .since{color:#1A1200;text-shadow:none}
.top .face{border-color:#FFD24A;border-width:3px}
.top .rk{color:#FFD24A}
.gap{position:absolute;top:-3px;width:4px;height:32px;background:#0A0920}
.gapnote{position:absolute;right:16px;top:5px;font-size:12px;font-weight:800;color:#3A2600}
.val{position:absolute;left:1074px;top:9px;font-size:19px;font-weight:900;color:#fff}
.top .val{color:#FFD24A}
.foot{position:absolute;left:30px;right:30px;bottom:12px;display:flex;justify-content:space-between;gap:16px;align-items:flex-end;font-size:10.5px;color:#8D88C8;line-height:1.3}
.site{font-size:15px;font-weight:900;color:#fff;white-space:nowrap}`;

await renderHero({ slug: "longest-serving-tech-ceos-2026", css, body });
