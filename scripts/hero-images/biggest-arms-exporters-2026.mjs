// Hero image for /rankings/biggest-arms-exporters-2026
// Top 10 arms exporters by share of global arms exports, 2021–25 (SIPRI, March 2026).
// Run: node scripts/hero-images/biggest-arms-exporters-2026.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderHero } from "./render.mjs";

const slug = "biggest-arms-exporters-2026";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flag = async (c) =>
  "data:image/svg+xml;base64," +
  (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${c}.svg`))).toString("base64");

const DATA = [
  ["United States", "us", 42],
  ["France", "fr", 9.8],
  ["Russia", "ru", 6.8],
  ["Germany", "de", 5.7],
  ["China", "cn", 5.6],
  ["Italy", "it", 5.1],
  ["Israel", "il", 4.4],
  ["United Kingdom", "gb", 3.4],
  ["South Korea", "kr", 3.0],
  ["Spain", "es", 2.3],
];

const rows = (
  await Promise.all(
    DATA.map(async ([name, code, v], i) => {
      const w = (v / 42) * 360;
      const first = i === 0;
      return `<div class="row"><span class="rk${first ? " o" : ""}">${i + 1}</span><img src="${await flag(code)}"/><span class="nm">${name}</span><div class="bar${first ? " o" : ""}" style="width:${w.toFixed(1)}px"></div><span class="val${first ? " o" : ""}">${v === 42 ? "42" : v.toFixed(1)}%</span></div>`;
    })
  )
).join("");

const body = `
<div class="wrap">
  <div class="left">
    <div class="brand"><span class="v">V</span><span class="bn">VISZLYN</span></div>
    <div class="eyebrow">SIPRI · 2021–25</div>
    <h1>The World's<br/>Biggest Arms<br/>Exporters</h1>
    <div class="card">
      <div class="cardtop"><span class="num">#1</span> United States</div>
      <div class="big">42%</div>
      <div class="towns">of global arms exports</div>
      <div class="cmp">Russia: 21% → 6.8%</div>
    </div>
  </div>
  <div class="right">${rows}</div>
  <div class="foot">
    <span>Source: SIPRI Arms Transfers Database, March 2026 · Share of global arms exports (TIV), 2021–25</span>
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
.nm{width:150px;font-weight:700;font-size:16px}
.bar{height:20px;border-radius:4px;background:#C9C4B8}.bar.o{background:#FF5D3A}
.val{font-weight:800;font-size:17px;margin-left:4px}.val.o{color:#FF5D3A}
.foot{position:absolute;left:56px;right:56px;bottom:22px;display:flex;justify-content:space-between;font-size:13px;color:rgba(247,245,240,.5)}
.site{color:rgba(247,245,240,.85);font-weight:600}
`;

await renderHero({ slug, css, body });
