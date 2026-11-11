// Share / Google Discover image for /rankings/longest-flights-world-2026 (the page keeps its block mosaic).
// Sunset sky with 10 planes flying; each contrail's length is proportional to the route's great-circle distance.
// Distances: haversine from OurAirports coordinates (R = 6,371 km). Qantas Perth routes shown in their
// current nonstop direction (towards Perth).
// Run: node scripts/hero-images/longest-flights-world-2026.mjs
import { renderHero } from "./render.mjs";

const ROUTES = [
  ["Singapore", "New York", 15341],
  ["Singapore", "Newark", 15337],
  ["London", "Perth", 14508],
  ["Melbourne", "Dallas", 14476],
  ["Paris", "Perth", 14272],
  ["Auckland", "New York", 14216],
  ["Dubai", "Auckland", 14199],
  ["Singapore", "Los Angeles", 14102],
  ["Sydney", "Dallas", 13808],
  ["Manila", "New York", 13696],
];

// Airliner silhouette, nose pointing right, ~60x60 viewBox
const PLANE = `<svg viewBox="0 0 64 64" class="pl"><path d="M62 32c0-2.2-3-3.6-7.5-3.6H42L28.5 6.5h-6l6.8 21.9H15.6L10 20.5H5.5l3.2 11.5-3.2 11.5H10l5.6-7.9h13.7L22.5 57.5h6L42 35.6h12.5C59 35.6 62 34.2 62 32z"/></svg>`;

const MAXLEN = 640; // px for the longest contrail
const lanes = ROUTES.map(([a, b, km], i) => {
  const len = Math.round((km / ROUTES[0][2]) * MAXLEN);
  const first = i === 0;
  return `<div class="lane${first ? " first" : ""}" style="top:${i * 45}px">
    <div class="trail" style="width:${len}px"></div>
    <div class="plane" style="left:${len - 6}px">${PLANE}</div>
    <div class="lab" style="right:${MAXLEN - len + 76}px"><b>${i + 1}</b> ${a} → ${b} <span>${km.toLocaleString("en-US")} km</span></div>
  </div>`;
}).join("");

const body = `
<div class="wrap">
  <div class="sun"></div>
  <div class="cloud c1"></div><div class="cloud c2"></div><div class="cloud c3"></div>
  <div class="left">
    <div class="eyebrow"><span class="v">V</span>Ranked · 2026</div>
    <h1>The World's<br/>10 Longest<br/>Nonstop<br/>Flights</h1>
    <div class="sub">#1 Singapore → New York<br/>15,341 km · up to 18h 55m</div>
  </div>
  <div class="sky">${lanes}</div>
  <div class="foot"><span>Great-circle distance between airports · airline schedules, Nov 2026</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter;color:#fff;
  background:linear-gradient(180deg,#0E1A3A 0%,#2B2F6B 38%,#8A3F6E 68%,#FF7A45 92%,#FFB36B 100%)}
.sun{position:absolute;right:120px;bottom:-120px;width:360px;height:360px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,214,140,.95) 0%,rgba(255,150,80,.55) 45%,rgba(255,120,70,0) 70%)}
.cloud{position:absolute;border-radius:50%;background:rgba(255,255,255,.10);filter:blur(18px)}
.c1{left:520px;top:70px;width:340px;height:60px}.c2{left:860px;top:300px;width:300px;height:50px}.c3{left:420px;top:470px;width:420px;height:70px}
.left{position:absolute;left:52px;top:46px;width:360px;z-index:3}
.eyebrow{display:flex;align-items:center;gap:12px;color:#FFB36B;font-weight:800;font-size:24px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:38px;height:38px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:24px;letter-spacing:0}
h1{margin:18px 0 0;font-weight:900;font-size:60px;line-height:.98;letter-spacing:-2px;text-shadow:0 4px 20px rgba(0,0,0,.35)}
.sub{margin-top:22px;font-weight:800;font-size:24px;line-height:1.3;color:#FFD9B0;text-shadow:0 2px 10px rgba(0,0,0,.4)}
.sky{position:absolute;left:470px;top:96px;width:${MAXLEN + 70}px;height:470px;transform:rotate(-5deg);transform-origin:left bottom;z-index:2}
.lane{position:absolute;left:0;height:40px;width:100%}
.trail{position:absolute;left:0;top:18px;height:5px;border-radius:3px;
  background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.55) 60%,rgba(255,255,255,.95))}
.plane{position:absolute;top:-1px;width:44px;height:44px}
.pl{width:44px;height:44px;fill:#fff;filter:drop-shadow(0 3px 6px rgba(0,0,0,.35))}
.lab{position:absolute;top:-8px;font-weight:800;font-size:17px;white-space:nowrap;text-shadow:0 2px 6px rgba(0,0,0,.55)}
.lab b{color:#FFD9B0}.lab span{font-weight:900;margin-left:6px}
.first .trail{height:7px;top:17px;background:linear-gradient(90deg,rgba(255,93,58,0),rgba(255,93,58,.7) 60%,#FF5D3A)}
.first .pl{fill:#FF5D3A;filter:drop-shadow(0 0 10px rgba(255,93,58,.8))}
.first .lab{font-size:20px;top:-12px}.first .lab b,.first .lab span{color:#FFB36B}
.foot{position:absolute;left:52px;right:52px;bottom:20px;display:flex;justify-content:space-between;font-size:16px;color:rgba(255,255,255,.8);z-index:3;text-shadow:0 1px 4px rgba(0,0,0,.5)}
.site{color:#fff;font-weight:800;font-size:22px}
`;

await renderHero({ slug: "longest-flights-world-2026", css, body });
