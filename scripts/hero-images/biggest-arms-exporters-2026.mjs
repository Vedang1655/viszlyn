// Hero images for /rankings/biggest-arms-exporters-2026
// Data: SIPRI Arms Transfers Database (March 2026), share of global arms exports, 2021–25.
// Share image (feed size): one big number + three thick bars. In-article image: full top 10.
// Run: node scripts/hero-images/biggest-arms-exporters-2026.mjs
import { renderHero } from "./render.mjs";
import { listCard } from "./list-card.mjs";

const slug = "biggest-arms-exporters-2026";

const BARS = [
  ["United States", 42, true],
  ["France", 9.8, false],
  ["Russia", 6.8, false],
];
const MAX_W = 340;
const fmt = (v) => (v === 42 ? "42%" : `${v.toFixed(1)}%`);

const bars = BARS.map(
  ([name, v, first]) => `
  <div class="bar-row">
    <div class="lab${first ? " o" : ""}">${name}</div>
    <div class="track"><div class="fill${first ? " o" : ""}" style="width:${Math.max(8, (v / 42) * MAX_W).toFixed(0)}px"></div><span class="val${first ? " o" : ""}">${fmt(v)}</span></div>
  </div>`
).join("");

const body = `
<div class="wrap">
  <div class="top">
    <span class="v">V</span>
    <span class="eyebrow">World's biggest arms exporters · 2021–25</span>
  </div>
  <div class="left">
    <div class="rank">#1 United States</div>
    <div class="big">42%</div>
    <div class="sub">of all arms exports.<br/>More than the next 7 combined</div>
  </div>
  <div class="right">${bars}</div>
  <div class="foot">
    <span>Share of global arms exports · SIPRI, March 2026</span>
    <span class="site">viszlyn.io</span>
  </div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden}
.top{position:absolute;left:56px;top:44px;display:flex;align-items:center;gap:16px}
.v{display:grid;place-items:center;width:44px;height:44px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:28px}
.eyebrow{font-weight:800;font-size:30px;letter-spacing:.5px;text-transform:uppercase;color:#FF5D3A}
.left{position:absolute;left:56px;top:150px;width:580px}
.rank{font-weight:800;font-size:44px;line-height:1}
.big{font-weight:900;font-size:170px;line-height:1;letter-spacing:-5px;color:#FF5D3A;margin-top:10px}
.sub{font-weight:800;font-size:36px;line-height:1.2;margin-top:16px}
.right{position:absolute;left:660px;top:160px;width:500px}
.bar-row{margin-bottom:34px}
.lab{font-weight:800;font-size:34px;line-height:1;margin-bottom:10px;color:rgba(247,245,240,.9)}.lab.o{color:#FF5D3A}
.track{display:flex;align-items:center;gap:14px}
.fill{height:56px;border-radius:8px;background:#C9C4B8}.fill.o{background:#FF5D3A}
.val{font-weight:900;font-size:36px}.val.o{color:#FF5D3A}
.foot{position:absolute;left:56px;right:56px;bottom:26px;display:flex;justify-content:space-between;font-size:18px;color:rgba(247,245,240,.55)}
.site{color:#F7F5F0;font-weight:800;font-size:22px}
`;

const page = await listCard({
  eyebrow: "Share of global arms exports · 2021–25",
  title: "The World's 10 Biggest<br/>Arms Exporters",
  rows: [
    { name: "United States", flag: "us", value: "42%", raw: 42 },
    { name: "France", flag: "fr", value: "9.8%", raw: 9.8 },
    { name: "Russia", flag: "ru", value: "6.8%", raw: 6.8 },
    { name: "Germany", flag: "de", value: "5.7%", raw: 5.7 },
    { name: "China", flag: "cn", value: "5.6%", raw: 5.6 },
    { name: "Italy", flag: "it", value: "5.1%", raw: 5.1 },
    { name: "Israel", flag: "il", value: "4.4%", raw: 4.4 },
    { name: "United Kingdom", flag: "gb", value: "3.4%", raw: 3.4 },
    { name: "South Korea", flag: "kr", value: "3.0%", raw: 3.0 },
    { name: "Spain", flag: "es", value: "2.3%", raw: 2.3 },
  ],
  note: "Russia's share fell from 21% in 2016–20. Shares measure volume of weapons transferred (SIPRI TIV), not dollar value.",
  source: "Source: SIPRI Arms Transfers Database, March 2026",
});

await renderHero({ slug, css, body, page });
