// Hero image for /rankings/biggest-chip-companies-2026
// Top 10 chip companies by semiconductor revenue, latest fiscal year (company reports).
// Run: node scripts/hero-images/biggest-chip-companies-2026.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderHero } from "./render.mjs";

const slug = "biggest-chip-companies-2026";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flag = async (c) =>
  "data:image/svg+xml;base64," +
  (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${c}.svg`))).toString("base64");

const DATA = [
  ["NVIDIA", "us", 215.9],
  ["TSMC", "tw", 122.4],
  ["Samsung", "kr", 91.5],
  ["SK hynix", "kr", 68.3],
  ["Intel", "us", 49.1],
  ["Qualcomm", "us", 38.4],
  ["Micron", "us", 37.4],
  ["Broadcom", "us", 36.9],
  ["AMD", "us", 34.6],
  ["MediaTek", "tw", 19.1],
];

const rows = (
  await Promise.all(
    DATA.map(async ([name, code, v], i) => {
      const w = (v / 215.9) * 360;
      const first = i === 0;
      return `<div class="row"><span class="rk${first ? " o" : ""}">${i + 1}</span><img src="${await flag(code)}"/><span class="nm">${name}</span><div class="bar${first ? " o" : ""}" style="width:${w.toFixed(1)}px"></div><span class="val${first ? " o" : ""}">$${v.toFixed(1)}B</span></div>`;
    })
  )
).join("");

const body = `
<div class="wrap">
  <div class="left">
    <div class="brand"><span class="v">V</span><span class="bn">VISZLYN</span></div>
    <div class="eyebrow">Revenue · 2025</div>
    <h1>The World's<br/>Biggest Chip<br/>Companies</h1>
    <div class="card">
      <div class="cardtop"><span class="num">#1</span> NVIDIA</div>
      <div class="big">$215.9B</div>
      <div class="towns">Up 65% in one year</div>
      <div class="cmp">AI data center sales alone: $193.7B</div>
    </div>
  </div>
  <div class="right">${rows}</div>
  <div class="foot">
    <span>Source: company annual results · Semiconductor revenue, latest fiscal year ending 2025 or Jan 2026 · Samsung &amp; SK hynix converted at 2025 avg rate</span>
    <span class="site">viszlyn.io</span>
  </div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden}
.left{position:absolute;left:56px;top:46px;width:380px}
.brand{display:flex;align-items:center;gap:12px}
.v{display:grid;place-items:center;width:34px;height:34px;border-radius:6px;background:#FF5D3A;color:#0B0E14;font-weight:800;font-size:22px}
.bn{font-weight:700;font-size:18px;letter-spacing:4px;color:rgba(247,245,240,.8)}
.eyebrow{margin-top:30px;color:#FF5D3A;font-weight:700;font-size:16px;letter-spacing:2.5px;text-transform:uppercase}
h1{margin:10px 0 0;font-weight:800;font-size:50px;line-height:1.03;letter-spacing:-1.2px}
.card{margin-top:24px;padding:16px 20px;border-radius:12px;background:#171B24;border:1px solid rgba(255,93,58,.55)}
.cardtop{font-weight:700;font-size:18px}.num{color:#FF5D3A}
.big{font-weight:900;font-size:60px;line-height:1;margin-top:4px;letter-spacing:-1px}
.towns{margin-top:6px;font-size:15px;font-weight:600;color:rgba(247,245,240,.85)}
.cmp{margin-top:4px;font-size:14px;color:rgba(247,245,240,.6)}
.right{position:absolute;left:470px;top:58px;width:680px}
.row{display:flex;align-items:center;gap:12px;height:47px}
.rk{width:26px;text-align:right;font-weight:800;font-size:18px;color:rgba(247,245,240,.7)}.rk.o{color:#FF5D3A}
.row img{width:30px;height:22px;border-radius:3px}
.nm{width:120px;font-weight:700;font-size:16px}
.bar{height:20px;border-radius:4px;background:#C9C4B8}.bar.o{background:#FF5D3A}
.val{font-weight:800;font-size:17px;margin-left:4px}.val.o{color:#FF5D3A}
.foot{position:absolute;left:56px;right:56px;bottom:22px;display:flex;justify-content:space-between;font-size:13px;color:rgba(247,245,240,.5)}
.site{color:rgba(247,245,240,.85);font-weight:600}
`;

await renderHero({ slug, css, body });
