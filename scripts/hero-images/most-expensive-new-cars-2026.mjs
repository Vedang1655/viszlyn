// Share / Google Discover image for /rankings/most-expensive-new-cars-2026 (the page keeps its block mosaic).
// Ten luxury price tags, one per car, with the maker-announced price in its original currency.
// Order = ranking (prices converted at ECB rates, 13 Nov 2026). Ferrari F80 is a reported price (*).
// Run: node scripts/hero-images/most-expensive-new-cars-2026.mjs
import { renderHero } from "./render.mjs";

const CARS = [
  ["1", "Pagani Huayra<br/>Codalunga", "US$7.74 million", "from €7 million"],
  ["2", "Red Bull<br/>RB17", "US$6.61 million+", "from £5 million"],
  ["=3", "Bugatti W16<br/>Mistral", "US$5.53 million", "€5 million"],
  ["=3", "Pagani Huayra<br/>Imola", "US$5.53 million", "€5 million"],
  ["5", "Pininfarina<br/>B95", "US$4.86 million", "from €4.4 million"],
  ["6", "Bugatti<br/>Bolide", "US$4.42 million", "€4 million"],
  ["7", "Bugatti<br/>Tourbillon", "US$4.20 million", "€3.8 million"],
  ["8", "GMA T.50s<br/>Niki Lauda", "US$4.10 million", "£3.1 million"],
  ["9", "Ferrari<br/>F80", "US$3.98 million*", "€3.6 million"],
  ["10", "Bugatti Chiron<br/>Super Sport", "US$3.54 million", "€3.2 million"],
];

const CAR = `<svg class="car" viewBox="0 0 160 44" aria-hidden="true">
  <path d="M2 35 L5 29 C18 26 34 24 48 22 C58 14 70 10 86 10 C100 10 110 14 121 21 L150 25.5 C156 26.5 158.5 30 158.5 35 Z" fill="currentColor"/>
  <path d="M58 21 C66 15 75 12.5 86 12.5 C96 12.5 104 15.5 112 21 Z" fill="#FFF6DA" opacity=".8"/>
  <path d="M122 27 L144 29.5" stroke="#FFF6DA" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>
  <path d="M10 30 L44 26" stroke="#FFF6DA" stroke-width="1.6" stroke-linecap="round" opacity=".4"/>
  <circle cx="38" cy="35" r="9" fill="#120C03"/><circle cx="38" cy="35" r="4.5" fill="#C9C9C9"/>
  <circle cx="128" cy="35" r="9" fill="#120C03"/><circle cx="128" cy="35" r="4.5" fill="#C9C9C9"/>
</svg>`;
const tag = ([rk, name, price, orig], i) => {
  const tilt = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.5, -1, 2][i];
  return `<div class="slot"><div class="string"></div>
    <div class="tag${i === 0 ? " first" : ""}" style="transform:rotate(${tilt}deg)">
      <span class="hole"></span>
      <div class="top"><div class="rk">${rk.startsWith("=") ? rk : "#" + rk}</div>${CAR}</div>
      <div class="nm">${name}</div>
      <div class="pr">${price}</div>
      <div class="orig">${orig}</div>
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
  <div class="foot"><span>Maker-announced (starting) prices in US$ at ECB rates (13 Nov 2026); original price below. *Ferrari F80: reported.</span><span class="site">viszlyn.io</span></div>
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
.r1{top:118px}.r2{top:358px}
.slot{position:relative;width:216px;display:flex;flex-direction:column;align-items:center}
.string{width:2px;height:22px;background:linear-gradient(#C9A24A,#8A6A2A)}
.tag{position:relative;width:204px;height:200px;border-radius:10px 10px 14px 14px;padding:16px 10px 0;text-align:center;
  background:linear-gradient(160deg,#FFF6DA 0%,#F1D98F 45%,#D9B45A 100%);color:#2A1D08;
  box-shadow:0 12px 24px rgba(0,0,0,.55),inset 0 0 0 3px rgba(120,85,20,.35);transform-origin:50% 0}
.hole{position:absolute;left:50%;top:-6px;width:16px;height:16px;margin-left:-8px;border-radius:50%;background:#140F0A;box-shadow:0 0 0 3px #B88C2E}
.top{display:flex;align-items:flex-end;justify-content:center;gap:6px;height:42px}
.rk{font-size:24px;font-weight:900;color:#8A5A10;line-height:1;padding-bottom:6px}
.car{width:140px;height:38px;color:#2A1D08}
.tag.first .car{color:#5A1600}
.nm{margin-top:6px;font-size:22px;font-weight:800;line-height:1.08;height:48px;letter-spacing:-.3px}
.pr{margin-top:10px;font-size:24px;font-weight:900;letter-spacing:-.8px;color:#1A1205;white-space:nowrap}
.orig{margin-top:6px;font-size:17px;font-weight:700;color:#6A4E14}
.tag.first{background:linear-gradient(160deg,#FFD7A8 0%,#FF9E55 50%,#E8672A 100%);box-shadow:0 0 34px rgba(255,140,60,.55),0 12px 24px rgba(0,0,0,.55),inset 0 0 0 3px rgba(120,40,0,.35)}
.tag.first .rk{color:#6A1E00}
.foot{position:absolute;left:44px;right:44px;bottom:10px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.72)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "most-expensive-new-cars-2026", css, body });
