// Hero / Discover image for /rankings/most-distant-galaxies-ever-observed-2026.
// Each row is a beam of light travelling from the galaxy (right, glowing) back towards Webb (left).
// Beam length is proportional to the spectroscopic redshift z (scale starts at z = 0).
// Data: confirming papers listed in the article (spectroscopic redshifts only).
// Run: node scripts/hero-images/most-distant-galaxies-ever-observed-2026.mjs
import { renderHero } from "./render.mjs";

const ROWS = [
  ["MoM-z14", 14.44, "14.44"],
  ["JADES-GS-z14-0", 14.1793, "14.1793"],
  ["JADES-GS-z14-1", 13.9, "13.90"],
  ["JADES-GS-z13-0", 13.2, "13.20"],
  ["UNCOVER-z13*", 13.079, "13.079"],
  ["JADES-GS-z13-1-LA", 13.05, "13.05"],
  ["JADES-GS-z12-0", 12.482, "12.482"],
  ["UNCOVER-z12", 12.393, "12.393"],
  ["GHZ2", 12.342, "12.342"],
  ["Maisie's Galaxy", 11.416, "11.416"],
];

const MAXW = 290; // px for z = 14.44
const COLORS = ["#FFB86B", "#FF9DCB", "#C9A4FF", "#9DB8FF", "#8FD3FF", "#8FD3FF", "#8FF0D8", "#B6F09A", "#E8F08F", "#FFD98F"];

// deterministic star field
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const stars = Array.from({ length: 170 }, () => {
  const s = rnd() * 2.2 + 0.6;
  return `<i class="st" style="left:${(rnd() * 1200).toFixed(0)}px;top:${(rnd() * 630).toFixed(0)}px;width:${s.toFixed(1)}px;height:${s.toFixed(1)}px;opacity:${(0.25 + rnd() * 0.6).toFixed(2)}"></i>`;
}).join("");

const rows = ROWS.map(([name, z, label], i) => {
  const w = Math.round((z / 14.44) * MAXW);
  const c = COLORS[i];
  return `<div class="row${i === 0 ? " first" : ""}">
    <span class="rk">${i + 1}</span>
    <span class="nm">${name}</span>
    <div class="track"><div class="beam" style="width:${w}px;--c:${c}"><b class="gx" style="--c:${c}"></b></div></div>
    <span class="z">z ${label}</span>
  </div>`;
}).join("");

const body = `
<div class="wrap">
  ${stars}
  <div class="left">
    <div class="eyebrow"><span class="v">V</span>Ranked · 2026</div>
    <h1>The Most<br/>Distant<br/><em>Galaxies</em><br/>Ever Seen</h1>
    <p class="sub">Top 10 by confirmed<br/>redshift (z)</p>
    <p class="note">No. 1 is seen as it was just<br/><strong>280 million years</strong><br/>after the Big Bang</p>
  </div>
  <div class="panel">
    <div class="axis"><span>◀ Light travelling to Webb</span><span>Galaxy</span></div>
    ${rows}
  </div>
  <div class="foot"><span>Spectroscopic redshifts from the confirming papers (Naidu et al. 2026, Schouws et al. 2025 and others) · *tentative</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(700px 420px at 80% 30%,#2A1B4D 0%,transparent 70%),radial-gradient(600px 400px at 20% 90%,#0F2A4A 0%,transparent 70%),#05060F}
.st{position:absolute;border-radius:50%;background:#fff}
.left{position:absolute;left:46px;top:40px;width:330px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#B8A6FF;font-weight:800;font-size:22px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:38px;height:38px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:24px;letter-spacing:0}
h1{margin:22px 0 0;font-size:60px;line-height:1.0;font-weight:900;letter-spacing:-1.5px}
h1 em{font-style:normal;color:#FFB86B}
.sub{margin:18px 0 0;font-size:24px;line-height:1.25;font-weight:700;color:#DCD4FF}
.note{margin:16px 0 0;font-size:19px;line-height:1.3;color:#C9C3E8}
.note strong{color:#FFB86B}
.panel{position:absolute;left:384px;top:30px;right:26px;padding:12px 16px 8px;border-radius:14px;background:rgba(10,10,30,.55);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
.axis{display:flex;justify-content:space-between;margin:0 0 2px 302px;padding-right:145px;width:315px;box-sizing:content-box;font-size:15px;font-weight:700;color:#9C94C8;letter-spacing:.5px}
.row{display:flex;align-items:center;height:49px}
.rk{width:30px;flex:none;text-align:right;font-size:23px;font-weight:900;color:#B8A6FF}
.nm{width:262px;flex:none;overflow:hidden;padding-left:10px;font-size:21px;font-weight:800;white-space:nowrap;letter-spacing:-.4px}
.track{width:315px;flex:none;display:flex;justify-content:flex-start}
.beam{position:relative;height:6px;border-radius:3px;background:linear-gradient(90deg,transparent 0%,var(--c) 100%);box-shadow:0 0 10px var(--c)}
.gx{position:absolute;right:-11px;top:-8px;width:22px;height:22px;border-radius:50%;
  background:radial-gradient(circle,#fff 0%,var(--c) 40%,transparent 72%);box-shadow:0 0 18px 6px var(--c)}
.z{width:145px;flex:none;text-align:left;padding-left:8px;font-size:23px;font-weight:900;white-space:nowrap}
.row.first .nm,.row.first .z{color:#FFB86B}
.foot{position:absolute;left:46px;right:46px;bottom:14px;display:flex;justify-content:space-between;gap:20px;font-size:14px;color:rgba(255,255,255,.72)}
.site{font-weight:800;color:#fff;font-size:16px}
`;

await renderHero({ slug: "most-distant-galaxies-ever-observed-2026", css, body });
