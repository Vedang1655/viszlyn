// Hero image for /rankings/ontario-lowest-crime-police-services-2026
// Schematic tile map of 10 Ontario police services, shaded by 2025 Crime Severity Index.
// Data: Statistics Canada, Table 35-10-0188-01 (released July 22, 2026).
// Run: node scripts/hero-images/ontario-lowest-crime-police-services-2026.mjs
import { renderHero } from "./render.mjs";

const slug = "ontario-lowest-crime-police-services-2026";

// [name, CSI 2025, rank, row, col] — positions are schematic, roughly following geography.
const SERVICES = [
  ["Ottawa", 52.23, 4, 0, 5],
  ["Waterloo", 66.82, 9, 1, 1],
  ["Halton", 30.61, 1, 1, 2],
  ["Peel", 59.41, 6, 1, 3],
  ["York", 50.28, 3, 1, 4],
  ["Durham", 43.18, 2, 1, 5],
  ["London", 73.0, 10, 2, 0],
  ["Hamilton", 62.21, 8, 2, 2],
  ["Toronto", 59.98, 7, 2, 4],
  ["Niagara", 53.84, 5, 3, 3],
];

const MIN = 30.61;
const MAX = 73.0;
// Sequential, one hue, light -> dark: lighter = lower Crime Severity Index.
const RAMP = ["#FDEBDD", "#F9C29E", "#F08A5D", "#D0532E", "#9E3519"];

function hexToRgb(h) {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function ramp(t) {
  const x = Math.min(Math.max(t, 0), 1) * (RAMP.length - 1);
  const i = Math.min(Math.floor(x), RAMP.length - 2);
  const f = x - i;
  const a = hexToRgb(RAMP[i]);
  const b = hexToRgb(RAMP[i + 1]);
  const c = a.map((v, k) => Math.round(v + (b[k] - v) * f));
  return `rgb(${c.join(",")})`;
}

const TW = 104; // tile width
const TH = 96; // tile height
const GAP = 8;
const x = (c) => c * (TW + GAP);
const y = (r) => r * (TH + GAP);

const tiles = SERVICES.map(([name, v, rank, r, c]) => {
  const t = (v - MIN) / (MAX - MIN);
  const fill = ramp(t);
  const ink = t < 0.55 ? "#1A1410" : "#FFF6EE";
  const hl = name === "Halton";
  return `
    <div class="tile${hl ? " hl" : ""}" style="left:${x(c)}px;top:${y(r)}px;background:${fill};color:${ink}">
      <div class="rk">#${rank}</div>
      <div class="nm">${name}</div>
      <div class="vl">${v.toFixed(2)}</div>
      ${hl ? '<div class="tag">LOWEST</div>' : ""}
    </div>`;
}).join("");

// Lake Ontario: one rounded shape south of Peel / Toronto / Durham, north of Niagara.
// Drawn as an inset polygon with a thick round-joined stroke so the corners come out rounded.
const R = 12; // corner radius
const L = x(3) - 4 + R, Rt = x(5) + TW + 4 - R, T = y(2) - 4 + R;
const B2 = y(2) + TH + 4 - R, B3 = y(3) + TH + 4 - R, M = x(4) - 4 + R;
const lake = `<svg class="lakesvg" width="700" height="440" viewBox="0 0 700 440">
  <polygon points="${L},${T} ${Rt},${T} ${Rt},${B3} ${M},${B3} ${M},${B2} ${L},${B2}"
    fill="#13283A" stroke="#13283A" stroke-width="${2 * R}" stroke-linejoin="round"/></svg>`;

const rampCss = `linear-gradient(90deg, ${RAMP.join(", ")})`;

const body = `
<div class="wrap">
  <div class="left">
    <div class="brand"><span class="v">V</span><span class="bn">VISZLYN</span></div>
    <div class="eyebrow">Crime Severity Index · 2025</div>
    <h1>Ontario's<br/>Lowest-Crime<br/>Regions</h1>
    <div class="sub">10 large police services, ranked</div>
    <div class="card">
      <div class="cardtop"><span class="num">#1</span> Halton Region</div>
      <div class="big">30.61</div>
      <div class="towns">Burlington · Oakville · Milton · Halton Hills</div>
      <div class="cmp">Less than half Canada's 75.0</div>
    </div>
  </div>
  <div class="right">
    <div class="map">
      ${lake}
      <div class="lakelbl" style="left:${x(4) + 10}px;top:${y(3) + 58}px">Lake Ontario</div>
      <div class="note" style="left:${x(3)}px;top:${y(0) + 34}px">Eastern Ontario ↗<br/>(not to scale)</div>
      ${tiles}
    </div>
    <div class="legend">
      <span>Lower</span><div class="bar" style="background:${rampCss}"></div><span>Higher</span>
    </div>
  </div>
  <div class="foot">
    <span>Source: Statistics Canada, Table 35-10-0188-01 · 2025 data, released July 22, 2026 · Map is schematic</span>
    <span class="site">viszlyn.io</span>
  </div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden}
.left{position:absolute;left:56px;top:46px;width:420px}
.brand{display:flex;align-items:center;gap:12px}
.v{display:grid;place-items:center;width:34px;height:34px;border-radius:6px;background:#FF5D3A;color:#0B0E14;font-weight:800;font-size:22px}
.bn{font-weight:700;font-size:18px;letter-spacing:4px;color:rgba(247,245,240,.8)}
.eyebrow{margin-top:30px;color:#FF5D3A;font-weight:700;font-size:16px;letter-spacing:2.5px;text-transform:uppercase}
h1{margin:10px 0 0;font-weight:800;font-size:54px;line-height:1.02;letter-spacing:-1.2px}
.sub{margin-top:12px;font-size:19px;color:rgba(247,245,240,.7)}
.card{margin-top:24px;padding:16px 20px 16px;border-radius:12px;background:#171B24;border:1px solid rgba(255,93,58,.55)}
.cardtop{font-weight:700;font-size:18px}
.num{color:#FF5D3A}
.big{font-weight:900;font-size:60px;line-height:1;margin-top:4px;letter-spacing:-1px}
.towns{margin-top:8px;font-size:15px;font-weight:600;color:rgba(247,245,240,.85)}
.cmp{margin-top:4px;font-size:14px;color:rgba(247,245,240,.6)}
.right{position:absolute;left:478px;top:66px;width:664px}
.map{position:relative;width:664px;height:408px}
.lakesvg{position:absolute;left:0;top:0;overflow:visible}
.lakelbl{position:absolute;font-style:italic;font-size:15px;color:#7FA7C4;letter-spacing:.5px}
.note{position:absolute;font-size:12px;line-height:1.35;color:rgba(247,245,240,.45);text-align:right;width:${2 * TW + GAP}px;left:auto}
.tile{position:absolute;width:${TW}px;height:${TH}px;border-radius:10px;padding:9px 11px;box-sizing:border-box;display:flex;flex-direction:column}
.tile .rk{font-size:12px;font-weight:700;opacity:.65}
.tile .nm{margin-top:auto;font-size:16px;font-weight:700;line-height:1.1}
.tile .vl{font-size:24px;font-weight:800;letter-spacing:-.4px}
.tile.hl{box-shadow:0 0 0 3px #0B0E14,0 0 0 6px #FF5D3A}
.tag{position:absolute;top:-30px;left:50%;transform:translateX(-50%);background:#FF5D3A;color:#0B0E14;font-size:12px;font-weight:800;letter-spacing:1.5px;padding:4px 8px;border-radius:5px}
.legend{display:flex;align-items:center;gap:10px;margin-top:12px;justify-content:flex-end;font-size:13px;color:rgba(247,245,240,.6)}
.legend .bar{width:180px;height:10px;border-radius:5px}
.foot{position:absolute;left:56px;right:56px;bottom:26px;display:flex;justify-content:space-between;font-size:14px;color:rgba(247,245,240,.5)}
.site{color:rgba(247,245,240,.85);font-weight:600}
`;

await renderHero({ slug, css, body });
