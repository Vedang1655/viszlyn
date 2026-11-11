// Share / Google Discover image for /rankings/longest-flights-world-2026 (the page keeps its block mosaic).
// All 10 routes on an airport departure board (Qantas Perth routes shown in their nonstop direction, towards Perth). Distances: haversine from OurAirports coordinates (R = 6,371 km).
// Run: node scripts/hero-images/longest-flights-world-2026.mjs
import { renderHero } from "./render.mjs";

const ROUTES = [
  ["Singapore", "New York JFK", "15,341"],
  ["Singapore", "Newark", "15,337"],
  ["London", "Perth", "14,508"],
  ["Melbourne", "Dallas", "14,476"],
  ["Paris", "Perth", "14,272"],
  ["Auckland", "New York JFK", "14,216"],
  ["Dubai", "Auckland", "14,199"],
  ["Singapore", "Los Angeles", "14,102"],
  ["Sydney", "Dallas", "13,808"],
  ["Manila", "New York JFK", "13,696"],
];

const rows = ROUTES.map(
  ([a, b, km], i) => `<div class="row${i === 0 ? " first" : ""}">
    <span class="t rk">${String(i + 1).padStart(2, "0")}</span>
    <span class="t rt">${a.toUpperCase()} <i>✈</i> ${b.toUpperCase()}</span>
    <span class="t km">${km} KM</span>
  </div>`
).join("");

const body = `
<div class="wrap">
  <div class="left">
    <div class="eyebrow"><span class="v">V</span>Ranked · 2026</div>
    <h1>The World's<br/>10 Longest<br/>Nonstop<br/>Flights</h1>
    <div class="sub">#1 Singapore → New York<br/><span>15,341 km · up to 18h 55m</span></div>
  </div>
  <div class="board">
    <div class="head"><span>✈ DEPARTURES</span><span>BY DISTANCE</span></div>
    ${rows}
  </div>
  <div class="foot"><span>Great-circle distance between airports · airline schedules, Nov 2026</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden}
.left{position:absolute;left:52px;top:46px;width:390px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#FF5D3A;font-weight:800;font-size:24px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:38px;height:38px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:24px;letter-spacing:0}
h1{margin:18px 0 0;font-weight:900;font-size:60px;line-height:.98;letter-spacing:-2px}
.sub{margin-top:22px;font-weight:800;font-size:26px;line-height:1.25;color:#FF5D3A}.sub span{color:#F7F5F0;font-size:24px}
.board{position:absolute;left:452px;right:30px;top:34px;bottom:62px;background:#111;border-radius:14px;padding:14px 16px;box-shadow:inset 0 0 0 3px #2a2a2a}
.head{display:flex;justify-content:space-between;font-weight:900;font-size:20px;letter-spacing:3px;color:#FFD23F;margin:0 4px 8px}
.row{display:flex;gap:8px;margin-bottom:6px}
.t{background:#1d1d1d;border-radius:5px;color:#FFD23F;font-weight:800;font-size:23px;letter-spacing:1.5px;line-height:40px;height:40px;padding:0 10px;white-space:nowrap;
  background-image:linear-gradient(180deg,rgba(255,255,255,.05) 0 49%,rgba(0,0,0,.6) 49% 51%,rgba(255,255,255,0) 51%)}
.t i{font-style:normal;color:#9a9a9a;margin:0 4px}
.rk{width:52px;text-align:center}
.rt{flex:1;overflow:hidden}
.km{width:150px;text-align:right}
.first .t{color:#0B0E14;background-color:#FF5D3A}.first .t i{color:#0B0E14}
.foot{position:absolute;left:52px;right:52px;bottom:22px;display:flex;justify-content:space-between;font-size:16px;color:rgba(247,245,240,.55)}
.site{color:#F7F5F0;font-weight:800;font-size:22px}
`;

await renderHero({ slug: "longest-flights-world-2026", css, body });
