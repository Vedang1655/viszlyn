// Hero / Discover image for /rankings/best-selling-video-games-2026.
// Retro arcade scene: each game is a pixel-block tower whose height is proportional to its lifetime units
// (publisher figures). Shipped (sold-in) and bundle-heavy figures are marked.
// Run: node scripts/hero-images/best-selling-video-games-2026.mjs
import { renderHero } from "./render.mjs";

const ROWS = [
  ["Minecraft", 425, "425M+", "#5BD16A"],
  ["GTA V", 230, "230M+*", "#FF5DA2"],
  ["Red Dead 2", 85, "85M+*", "#FF7A3D"],
  ["Wii Sports", 82.9, "82.90M†", "#4FC3F7"],
  ["PUBG", 75, "75M+", "#F7C948"],
  ["Mario Kart 8 DX", 72, "72.00M", "#E8473F"],
  ["Terraria", 70, "70M", "#4CAF50"],
  ["Skyrim", 65, "65M+", "#B0BEC5"],
  ["Witcher 3", 65, "65M+", "#C0392B"],
  ["Human: Fall Flat", 55, "55M+", "#FFB74D"],
];
const RANKS = ["No. 1", "2", "3", "4", "5", "6", "7", "=8", "=8", "10"];
const GROUND = 548, HMAX = 400, PX = 12;           // pixel size
const H = (v) => Math.max(PX * 3, Math.round((HMAX * v / 425) / PX) * PX);
const X0 = 300, BW = 72, GAP = 14;

const towers = ROWS.map(([name, v, label, c], i) => {
  const h = H(v), x = X0 + i * (BW + GAP) + (i === 0 ? 0 : 20), w = i === 0 ? BW + 12 : BW;
  return `<div class="tw" style="left:${x}px;top:${GROUND - h}px;width:${w}px;height:${h}px;--c:${c}"></div>
  <div class="cap" style="left:${x}px;top:${GROUND - h - PX}px;width:${w}px;--c:${c}"></div>
  <div class="rk${i === 0 ? " one" : ""}" style="left:${x}px;top:${GROUND - h - 34 - PX}px;width:${w}px">${RANKS[i]}</div>
  <div class="val${i === 0 ? " one" : ""}" style="left:${x - 14}px;top:${GROUND - h - (i === 0 ? 74 : 60) - PX}px;width:${w + 28}px">${label}</div>
  <div class="nm" style="left:${x - 10}px;top:${GROUND + 8}px;width:${w + 20}px">${name}</div>`;
}).join("");

const body = `
<div class="wrap">
  <div class="grid"></div>
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · 2026</div>
    <h1>The Best-Selling<br/><em>Video Games</em><br/>of All Time</h1>
    <p class="sub">Lifetime units, publishers' own figures</p>
    <div class="press">PRESS START ▶</div>
  </div>
  ${towers}
  <div class="ground"></div>
  <div class="foot"><span>Height ∝ units · + = "over" · *shipped (sold-in) · †mostly bundled with the Wii · Sources: Microsoft, Take-Two, Nintendo, KRAFTON, Re-Logic, Bethesda, CD Projekt, Curve</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:linear-gradient(180deg,#0B0628 0%,#1B0F4A 55%,#2C1660 100%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:24px 24px}
.head{position:absolute;left:36px;top:30px;width:270px}
.eyebrow{display:flex;align-items:center;gap:10px;color:#9EF0FF;font-weight:800;font-size:16px;letter-spacing:2px;text-transform:uppercase}
.v0{display:grid;place-items:center;width:30px;height:30px;border-radius:6px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:20px;letter-spacing:0}
h1{margin:10px 0 0;font-size:44px;line-height:1.02;font-weight:900;letter-spacing:-1.2px;text-shadow:4px 4px 0 #000}
h1 em{font-style:normal;color:#5BD16A}
.sub{margin:12px 0 0;font-size:17px;font-weight:700;color:#D9D2F5}
.press{margin-top:22px;display:inline-block;font-size:16px;font-weight:900;letter-spacing:3px;color:#0B0628;background:#F7C948;padding:7px 12px;box-shadow:4px 4px 0 #000}
.tw{position:absolute;background:var(--c);box-shadow:inset -10px 0 0 rgba(0,0,0,.22),inset 0 -6px 0 rgba(0,0,0,.18),5px 5px 0 rgba(0,0,0,.45);
  background-image:linear-gradient(rgba(0,0,0,.18) 2px,transparent 2px),linear-gradient(90deg,rgba(0,0,0,.18) 2px,transparent 2px);background-size:${PX}px ${PX}px}
.cap{position:absolute;height:${PX}px;background:var(--c);filter:brightness(1.35)}
.rk{position:absolute;text-align:center;font-size:15px;font-weight:900;color:#0B0628}
.rk:after{content:"";}
.rk{background:#fff;box-shadow:3px 3px 0 #000;height:22px;line-height:22px}
.rk.one{background:#F7C948;font-size:16px}
.val{position:absolute;text-align:center;font-size:17px;font-weight:900;letter-spacing:-.3px;text-shadow:2px 2px 0 #000}
.val.one{font-size:30px;color:#5BD16A}
.nm{position:absolute;text-align:center;font-size:12.5px;line-height:1.15;font-weight:800;color:#EDE8FA}
.ground{position:absolute;left:0;right:0;top:${GROUND}px;height:4px;background:#9EF0FF}
.foot{position:absolute;left:30px;right:30px;bottom:10px;display:flex;justify-content:space-between;gap:14px;font-size:11.5px;color:rgba(255,255,255,.82)}
.site{font-weight:800;color:#fff;font-size:16px;white-space:nowrap}
`;
await renderHero({ slug: "best-selling-video-games-2026", css, body });
