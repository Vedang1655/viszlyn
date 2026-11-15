// Hero (Discover + first image on the page) for /rankings/ontario-fastest-growing-cities-2026.
// A city skyline: ten towers whose heights are proportional to 2024-25 population growth (Statistics Canada),
// with a green "up" growth band on each. Run: node scripts/hero-images/ontario-fastest-growing-cities-2026.mjs
import { renderHero } from "./render.mjs";

const ROWS = [
  ["Ottawa", 2.64], ["Oshawa", 2.33], ["Barrie", 2.14], ["St. Catharines", 2.02], ["Brantford", 1.67],
  ["Belleville", 1.01], ["Hamilton", 0.98], ["London", 0.97], ["Peterborough", 0.88], ["Windsor", 0.83],
];
const MAXH = 285;

const towers = ROWS.map(([name, v], i) => {
  const h = Math.round((v / ROWS[0][1]) * MAXH);
  const wins = Array.from({ length: Math.max(2, Math.floor((h - 20) / 22)) }, () => "<i></i><i></i><i></i>").join("");
  return `<div class="col${i === 0 ? " first" : ""}">
    <div class="val">+${v.toFixed(2)}%</div>
    <div class="tower" style="height:${h}px"><div class="cap"></div><div class="wins">${wins}</div></div>
    <div class="rk">${i + 1}</div>
    <div class="nm">${name}</div>
  </div>`;
}).join("");

const body = `
<div class="wrap">
  <div class="sky"></div>
  <div class="head">
    <div class="eyebrow"><span class="v">V</span>Ranked · Ontario · 2025</div>
    <h1>Ontario's Fastest-<em>Growing</em> Cities</h1>
    <p class="sub">Population growth, July 2024 to July 2025 · Toronto shrank (−992 people)</p>
  </div>
  <div class="cols">${towers}</div>
  <div class="foot"><span>Data: Statistics Canada, Table 17-10-0148-01 · Ottawa = Ontario part of Ottawa–Gatineau</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:linear-gradient(180deg,#0B2A4A 0%,#12406B 45%,#1E6A8F 100%)}
.sky{position:absolute;inset:0;background:radial-gradient(circle at 85% 18%,rgba(255,214,120,.35),rgba(255,214,120,0) 30%)}
.head{position:absolute;left:46px;right:46px;top:26px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#7CF0A8;font-weight:800;font-size:21px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:36px;height:36px;border-radius:8px;background:#2EDB7A;color:#0B2A4A;font-weight:900;font-size:23px;letter-spacing:0}
h1{margin:10px 0 0;font-size:56px;line-height:1.02;font-weight:900;letter-spacing:-1.2px}
h1 em{font-style:normal;color:#4BF08F}
.sub{margin:8px 0 0;font-size:22px;font-weight:700;color:#CFE4F5}
.cols{position:absolute;left:30px;right:30px;bottom:34px;display:flex;justify-content:space-between;align-items:flex-end}
.col{width:110px;display:flex;flex-direction:column;align-items:center}
.val{font-size:24px;font-weight:900;margin-bottom:6px;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,.5)}
.col.first .val{color:#4BF08F;font-size:28px}
.tower{position:relative;width:72px;border-radius:4px 4px 0 0;background:linear-gradient(90deg,#2B4F72,#3D6A93 50%,#2B4F72);box-shadow:0 0 0 2px rgba(255,255,255,.18) inset}
.col.first .tower{background:linear-gradient(90deg,#1E8A52,#2EDB7A 50%,#1E8A52)}
.cap{position:absolute;left:0;right:0;top:0;height:8px;border-radius:4px 4px 0 0;background:#4BF08F}
.wins{position:absolute;left:10px;right:10px;top:18px;bottom:6px;display:grid;grid-template-columns:repeat(3,1fr);gap:9px 8px;overflow:hidden;align-content:start}
.wins i{height:12px;border-radius:2px;background:rgba(255,236,160,.75)}
.col.first .wins i{background:rgba(255,255,255,.8)}
.rk{margin-top:8px;width:32px;height:32px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#0B2A4A;font-weight:900;font-size:19px}
.nm{margin-top:5px;font-size:18px;font-weight:800;text-align:center;line-height:1.05;white-space:nowrap}
.foot{position:absolute;left:46px;right:46px;bottom:8px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.75)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "ontario-fastest-growing-cities-2026", css, body });
