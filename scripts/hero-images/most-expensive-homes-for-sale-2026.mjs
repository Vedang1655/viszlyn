// Share / Google Discover image for /rankings/most-expensive-homes-for-sale-2026 (the page keeps its block mosaic).
// Ten green estate-agent "FOR SALE" signs (tie at =9), asking price in US$ with original currency below.
// Run: node scripts/hero-images/most-expensive-homes-for-sale-2026.mjs
import { renderHero } from "./render.mjs";

const HOMES = [
  ["1", "Chalon estate", "Los Angeles", "US$400 million", ""],
  ["2", "Nassim Road", "Singapore", "US$239.1 million", "S$308 million"],
  ["3", "Scarface estate", "Key Biscayne", "US$237 million", ""],
  ["4", "One Hyde Park", "London", "US$231.5 million", "£175 million"],
  ["5", "Ex-Gucci estate", "Palm Beach", "US$205 million", ""],
  ["6", "Ocean-to-lake", "Palm Beach", "US$195 million", ""],
  ["7", "Villa Serenity", "Coral Gables", "US$172.5 million", ""],
  ["8", "La Gorce Island", "Miami Beach", "US$170 million", ""],
  ["=9", "Ellison estate", "N. Palm Beach", "US$165 million", ""],
  ["=9", "Ex-Calvin Klein", "East Hampton", "US$165 million", ""],
];

const sign = ([rk, name, city, price, orig], i) => `<div class="post${i === 0 ? " first" : ""}">
  <div class="board">
    <div class="sale"><span class="rk">${rk.startsWith("=") ? rk : "#" + rk}</span>FOR SALE</div>
    <div class="nm">${name}</div>
    <div class="city">${city}</div>
    <div class="pr">${price}</div>
    <div class="orig">${orig || "&nbsp;"}</div>
  </div>
  <div class="stake"></div>
</div>`;

const body = `
<div class="wrap">
  <div class="lawn"></div>
  <div class="head">
    <div class="eyebrow"><span class="v">V</span>Ranked · Asking prices · Nov 2026</div>
    <h1>The Most Expensive Homes <em>for Sale</em> Right Now</h1>
  </div>
  <div class="row r1">${HOMES.slice(0, 5).map(sign).join("")}</div>
  <div class="row r2">${HOMES.slice(5).map((h, j) => sign(h, j + 5)).join("")}</div>
  <div class="foot"><span>Live listings checked 14 Nov 2026 · other currencies converted at ECB rates (13 Nov 2026)</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:linear-gradient(180deg,#F59E5B 0%,#F7C77E 30%,#BFE3F0 62%,#9ED0E6 100%)}
.lawn{position:absolute;left:0;right:0;bottom:0;height:330px;background:linear-gradient(180deg,#4A9A4F 0%,#357A3B 55%,#245A29 100%)}
.head{position:absolute;left:40px;right:40px;top:20px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#5A2A08;font-weight:800;font-size:19px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:22px;letter-spacing:0}
h1{margin:8px 0 0;font-size:46px;line-height:1.02;font-weight:900;letter-spacing:-1px;color:#1B1208}
h1 em{font-style:normal;color:#0B6B2E}
.row{position:absolute;display:flex;justify-content:space-between}
.r1{left:40px;right:40px;top:122px}.r2{left:40px;right:40px;top:368px}
.post{width:212px;display:flex;flex-direction:column;align-items:center}
.board{width:206px;height:200px;background:#fff;color:#14202B;border-radius:6px;overflow:hidden;
  box-shadow:0 10px 22px rgba(0,0,0,.4),inset 0 0 0 3px #0B6B2E;text-align:center}
.sale{display:flex;align-items:center;justify-content:center;gap:8px;height:44px;background:#0B6B2E;color:#fff;font-size:22px;font-weight:900;letter-spacing:1.5px}
.rk{font-size:19px;letter-spacing:0;background:#fff;color:#0B6B2E;border-radius:6px;padding:1px 6px}
.nm{margin-top:12px;font-size:20px;font-weight:900;line-height:1.05;padding:0 4px;letter-spacing:-.4px;white-space:nowrap}
.city{margin-top:4px;font-size:16px;font-weight:700;color:#5B6B78}
.pr{margin-top:14px;font-size:21px;font-weight:900;letter-spacing:-.7px;color:#0E2A47;white-space:nowrap}
.orig{margin-top:6px;font-size:15px;font-weight:700;color:#5B6B78}
.post.first .board{box-shadow:0 0 30px rgba(255,190,60,.8),0 10px 22px rgba(0,0,0,.4),inset 0 0 0 4px #FFB000}
.post.first .sale{background:#FF5D3A}
.post.first .rk{color:#FF5D3A}
.post.first .pr{color:#C8102E}
.stake{width:11px;height:30px;background:linear-gradient(90deg,#BFC6CC,#F2F4F6,#9AA3AB)}
.foot{position:absolute;left:40px;right:40px;bottom:10px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.85)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "most-expensive-homes-for-sale-2026", css, body });
