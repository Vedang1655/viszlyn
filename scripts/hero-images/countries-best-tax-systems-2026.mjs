// Hero / Discover image for /rankings/countries-best-tax-systems-2026.
// A tax receipt that itemises the top 10 (plus Canada, the US and last-placed France), with a rubber stamp for No. 1.
// Data: Tax Foundation, International Tax Competitiveness Index 2026 (Oct 19, 2026), Table 1.
// Run: node scripts/hero-images/countries-best-tax-systems-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const ROWS = [
  [1, "Estonia", "ee", "100.0"], [2, "Latvia", "lv", "92.5"], [3, "New Zealand", "nz", "88.2"], [4, "Switzerland", "ch", "86.8"],
  [5, "Lithuania", "lt", "82.6"], [6, "Luxembourg", "lu", "81.9"], [7, "Czech Republic", "cz", "79.4"], [8, "Australia", "au", "78.9"],
  [9, "Turkey", "tr", "76.0"], [10, "Hungary", "hu", "75.6"],
];
const EXTRA = [[15, "Canada", "ca", "72.2"], [17, "United States", "us", "71.2"], [38, "France (last)", "fr", "45.7"]];
const flag = (c) => "data:image/svg+xml;base64," + readFileSync(new URL(`../../node_modules/flag-icons/flags/4x3/${c}.svg`, import.meta.url)).toString("base64");
const line = ([r, n, c, v], cls = "") => `<div class="ln ${cls}"><span class="r">${r}</span><img src="${flag(c)}"/><span class="n">${n}</span><span class="dots"></span><span class="v">${v}</span></div>`;

const body = `
<div class="wrap">
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · 2026</div>
    <h1>The Best<br/><em>Tax Systems</em><br/>in the OECD</h1>
    <p class="sub">Scored on <strong>design</strong>, not how much tax you pay</p>
  </div>
  <div class="stamp"><div class="s1">No. 1</div><div class="s2"><img src="${flag("ee")}"/>ESTONIA</div><div class="s3">13 years in a row</div></div>
  <div class="receipt">
    <div class="rh">TAX SYSTEM RECEIPT · 2026</div>
    <div class="rs">38 OECD countries · score (best = 100)</div>
    <div class="cut"></div>
    ${ROWS.map((r) => line(r, r[0] === 1 ? "top" : "")).join("")}
    <div class="cut"></div>
    ${EXTRA.map((r) => line(r, r[0] === 15 ? "ca" : "")).join("")}
    <div class="zig"></div>
  </div>
  <div class="foot"><span>Source: Tax Foundation, International Tax Competitiveness Index 2026 (Oct 19, 2026) · scores are relative, not tax rates</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(ellipse at 20% 20%,#1F5A46 0%,#0F3528 55%,#081F17 100%)}
.wrap:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 2px,transparent 2px 6px)}
.head{position:absolute;left:44px;top:34px;width:560px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#BDF2D5;font-weight:800;font-size:19px;letter-spacing:2px;text-transform:uppercase}
.v0{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:22px;letter-spacing:0}
h1{margin:10px 0 0;font-size:68px;line-height:.98;font-weight:900;letter-spacing:-2px;text-shadow:0 4px 18px rgba(0,0,0,.4)}
h1 em{font-style:normal;color:#7CF0B4}
.sub{margin:14px 0 0;font-size:22px;font-weight:700;color:#DDF5E8;width:580px}
.sub strong{color:#FFD27A}
.stamp{position:absolute;left:70px;top:372px;width:400px;padding:12px 18px;border:6px solid #FF5D5D;border-radius:16px;color:#FF6B6B;
  transform:rotate(-8deg);text-align:center;background:rgba(255,93,93,.06);box-shadow:inset 0 0 0 3px rgba(255,93,93,.35)}
.s1{font-size:34px;font-weight:900;letter-spacing:3px}
.s2{font-size:58px;line-height:1;font-weight:900;letter-spacing:2px;display:flex;align-items:center;justify-content:center;gap:14px}
.s2 img{width:62px;height:46px;border-radius:5px}
.s3{font-size:22px;font-weight:800;letter-spacing:1px;text-transform:uppercase}
.receipt{position:absolute;left:640px;top:18px;width:500px;padding:20px 26px 34px;background:#FBF8F0;color:#1B2420;transform:rotate(1.6deg);
  box-shadow:0 18px 40px rgba(0,0,0,.5);font-variant-numeric:tabular-nums}
.rh{font-size:21px;font-weight:900;letter-spacing:1.5px;text-align:center}
.rs{font-size:14px;font-weight:600;text-align:center;color:#55605A;margin-top:2px}
.cut{border-top:2px dashed #9AA39E;margin:9px 0}
.ln{display:flex;align-items:center;gap:9px;height:31px;font-size:19px;font-weight:700}
.ln .r{width:30px;text-align:right;font-weight:900;color:#55605A}
.ln img{width:28px;height:21px;border-radius:3px;box-shadow:0 0 0 1px rgba(0,0,0,.15)}
.ln .dots{flex:1;border-bottom:2px dotted #B5BCB8;transform:translateY(5px)}
.ln .v{font-weight:900;min-width:52px;text-align:right}
.ln.top{font-size:22px;color:#0E6B3D}.ln.top .v{font-size:24px}
.ln.ca{background:#FFE9A8;margin:0 -10px;padding:0 10px;border-radius:6px}
.zig{position:absolute;left:0;right:0;bottom:-12px;height:14px;background:linear-gradient(-45deg,transparent 8px,#FBF8F0 0) 0 0/16px 14px,linear-gradient(45deg,transparent 8px,#FBF8F0 0) 0 0/16px 14px}
.foot{position:absolute;left:44px;right:30px;bottom:12px;display:flex;justify-content:space-between;gap:14px;font-size:12px;color:rgba(255,255,255,.8)}
.site{font-weight:800;color:#fff;font-size:16px;white-space:nowrap}
`;
await renderHero({ slug: "countries-best-tax-systems-2026", css, body });
