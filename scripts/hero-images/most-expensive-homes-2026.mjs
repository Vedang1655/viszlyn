// Share / Google Discover image for /rankings/most-expensive-homes-2026 (the page keeps its block mosaic).
// Ten estate-agent "SOLD" signs on a lawn, one per home, with the sale price in its original currency.
// Order = ranking (prices converted at ECB rates, 6 Nov 2026). Run: node scripts/hero-images/most-expensive-homes-2026.mjs
import { renderHero } from "./render.mjs";

const HOMES = [
  ["1", "Providence House", "London", "US$354,699,395", "£265 million"],
  ["2", "Deep Water Bay", "Hong Kong", "US$318,981,772", "HK$2.5 billion"],
  ["3", "Château Louis XIV", "France", "US$307,037,500", "€275 million"],
  ["4", "Rutland Gate", "London", "US$281,082,539", "£210 million"],
  ["5", "The Peak", "Hong Kong", "US$267,944,689", "HK$2.1 billion"],
  ["6", "The Holme", "London", "US$261,005,215", "£195 million"],
  ["7", "Griffin penthouse", "New York", "US$239,958,219", "sold in US$"],
  ["8", "Hôtel Lambert", "Paris", "US$223,300,000+", "over €200 million"],
  ["9", "Villa Les Cèdres", "French Riviera", "US$223,300,000", "€200 million"],
  ["10", "Jannard estate", "Malibu", "US$210,000,000", "sold in US$"],
];

const sign = ([rk, name, city, price, orig], i) => `<div class="post${i === 0 ? " first" : ""}">
  <div class="board">
    <div class="sold"><span class="rk">#${rk}</span>SOLD</div>
    <div class="nm">${name}</div>
    <div class="city">${city}</div>
    <div class="pr">${price}</div>
    <div class="orig">${orig}</div>
  </div>
  <div class="stake"></div>
</div>`;

const body = `
<div class="wrap">
  <div class="hills"></div><div class="lawn"></div>
  <div class="head">
    <div class="eyebrow"><span class="v">V</span>Ranked · Record sales</div>
    <h1>The 10 Most Expensive <em>Homes</em> Ever Sold</h1>
  </div>
  <div class="row r1">${HOMES.slice(0, 5).map(sign).join("")}</div>
  <div class="row r2">${HOMES.slice(5).map((h, j) => sign(h, j + 5)).join("")}</div>
  <div class="foot"><span>Sale prices converted to US$ at ECB exchange rates (6 Nov 2026); original price below</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:linear-gradient(180deg,#0E2A47 0%,#1F4E79 40%,#5E8FB8 70%,#9CC3E0 100%)}
.hills{position:absolute;left:-60px;right:-60px;bottom:250px;height:120px;border-radius:50% 50% 0 0;background:#2F6B3A;opacity:.55}
.lawn{position:absolute;left:0;right:0;bottom:0;height:300px;background:linear-gradient(180deg,#3D8A45 0%,#2C6E34 55%,#1F5226 100%)}
.head{position:absolute;left:44px;right:44px;top:22px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#BFE3FF;font-weight:800;font-size:20px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:22px;letter-spacing:0}
h1{margin:8px 0 0;font-size:48px;line-height:1.02;font-weight:900;letter-spacing:-1px;text-shadow:0 2px 10px rgba(0,0,0,.35)}
h1 em{font-style:normal;color:#FFC24A}
.row{position:absolute;left:28px;right:28px;display:flex;justify-content:space-between}
.r1{top:124px}.r2{top:370px}
.post{width:218px;display:flex;flex-direction:column;align-items:center}
.board{width:212px;height:204px;background:#fff;color:#14202B;border-radius:6px;overflow:hidden;
  box-shadow:0 10px 22px rgba(0,0,0,.45),inset 0 0 0 3px #C8102E;text-align:center}
.sold{display:flex;align-items:center;justify-content:center;gap:10px;height:46px;background:#C8102E;color:#fff;font-size:30px;font-weight:900;letter-spacing:3px}
.rk{font-size:22px;letter-spacing:0;background:#fff;color:#C8102E;border-radius:6px;padding:1px 7px}
.nm{margin-top:10px;font-size:21px;font-weight:900;line-height:1.05;padding:0 3px;letter-spacing:-.5px;white-space:nowrap}
.city{margin-top:4px;font-size:17px;font-weight:700;color:#5B6B78}
.pr{margin-top:12px;font-size:22px;font-weight:900;letter-spacing:-.8px;color:#0E2A47;padding:0 6px;line-height:1}
.post.first .board{box-shadow:0 0 30px rgba(255,194,74,.7),0 10px 22px rgba(0,0,0,.45),inset 0 0 0 4px #FFB000}
.post.first .sold{background:#FF5D3A}
.post.first .pr{color:#C8102E}
.orig{margin-top:6px;font-size:16px;font-weight:700;color:#5B6B78}
.stake{width:12px;height:34px;background:linear-gradient(90deg,#BFC6CC,#F2F4F6,#9AA3AB);box-shadow:0 4px 6px rgba(0,0,0,.3)}
.foot{position:absolute;left:44px;right:44px;bottom:10px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.8)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "most-expensive-homes-2026", css, body });
