// Share / Google Discover image for /rankings/most-expensive-new-cars-2026 (the page keeps its block mosaic).
// Ten luxury price tags, one per car, with the maker-announced price in its original currency.
// Order = ranking (prices converted at ECB rates, 13 Nov 2026). Ferrari F80 is a reported price (*).
// Run: node scripts/hero-images/most-expensive-new-cars-2026.mjs
import { renderHero } from "./render.mjs";

const CARS = [
  ["1", "Pagani Huayra<br/>Codalunga", "€7,000,000"],
  ["2", "Red Bull<br/>RB17", "£5,000,000"],
  ["=3", "Bugatti W16<br/>Mistral", "€5,000,000"],
  ["=3", "Pagani Huayra<br/>Imola", "€5,000,000"],
  ["5", "Pininfarina<br/>B95", "€4,400,000"],
  ["6", "Bugatti<br/>Bolide", "€4,000,000"],
  ["7", "Bugatti<br/>Tourbillon", "€3,800,000"],
  ["8", "GMA T.50s<br/>Niki Lauda", "£3,100,000"],
  ["9", "Ferrari<br/>F80", "€3,600,000*"],
  ["10", "Bugatti Chiron<br/>Super Sport", "€3,200,000"],
];

const tag = ([rk, name, price], i) => {
  const tilt = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.5, -1, 2][i];
  return `<div class="slot"><div class="string"></div>
    <div class="tag${i === 0 ? " first" : ""}" style="transform:rotate(${tilt}deg)">
      <span class="hole"></span>
      <div class="rk">${rk.startsWith("=") ? rk : "#" + rk}</div>
      <div class="nm">${name}</div>
      <div class="pr">${price}</div>
    </div></div>`;
};

const body = `
<div class="wrap">
  <div class="head">
    <div class="eyebrow"><span class="v">V</span>Ranked · Official prices</div>
    <h1>The 10 Most Expensive <em>New Cars</em> of the 2020s</h1>
  </div>
  <div class="row r1">${CARS.slice(0, 5).map(tag).join("")}</div>
  <div class="row r2">${CARS.slice(5).map((c, j) => tag(c, j + 5)).join("")}</div>
  <div class="foot"><span>Maker-announced (starting) prices, ranked at ECB exchange rates (13 Nov 2026). *Ferrari F80: reported.</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(900px 520px at 50% 45%,#2A1F14 0%,#140F0A 55%,#080605 100%)}
.wrap::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.015) 0 2px,transparent 2px 6px)}
.head{position:absolute;left:44px;right:44px;top:22px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#E9C46A;font-weight:800;font-size:20px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:22px;letter-spacing:0}
h1{margin:8px 0 0;font-size:46px;line-height:1.02;font-weight:900;letter-spacing:-1px}
h1 em{font-style:normal;color:#F4C95D}
.row{position:absolute;left:30px;right:30px;display:flex;justify-content:space-between}
.r1{top:122px}.r2{top:360px}
.slot{position:relative;width:216px;display:flex;flex-direction:column;align-items:center}
.string{width:2px;height:22px;background:linear-gradient(#C9A24A,#8A6A2A)}
.tag{position:relative;width:204px;height:196px;border-radius:10px 10px 14px 14px;padding:22px 12px 0;text-align:center;
  background:linear-gradient(160deg,#FFF6DA 0%,#F1D98F 45%,#D9B45A 100%);color:#2A1D08;
  box-shadow:0 12px 24px rgba(0,0,0,.55),inset 0 0 0 3px rgba(120,85,20,.35);transform-origin:50% 0}
.hole{position:absolute;left:50%;top:-6px;width:16px;height:16px;margin-left:-8px;border-radius:50%;background:#140F0A;box-shadow:0 0 0 3px #B88C2E}
.rk{font-size:26px;font-weight:900;color:#8A5A10;line-height:1}
.nm{margin-top:8px;font-size:22px;font-weight:800;line-height:1.08;height:48px;letter-spacing:-.3px}
.pr{margin-top:22px;font-size:31px;font-weight:900;letter-spacing:-1px;color:#1A1205}
.tag.first{background:linear-gradient(160deg,#FFD7A8 0%,#FF9E55 50%,#E8672A 100%);box-shadow:0 0 34px rgba(255,140,60,.55),0 12px 24px rgba(0,0,0,.55),inset 0 0 0 3px rgba(120,40,0,.35)}
.tag.first .rk{color:#6A1E00}
.foot{position:absolute;left:44px;right:44px;bottom:10px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.72)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "most-expensive-new-cars-2026", css, body });
