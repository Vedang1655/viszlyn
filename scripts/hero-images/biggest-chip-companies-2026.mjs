// Hero image for /rankings/biggest-chip-companies-2026
// Designed to read at feed size (~360px wide): one big number, three thick bars, large labels.
// Data: company-reported chip business revenue in latest fiscal year (NVIDIA: total company revenue)
// (NVIDIA $215,938M; TSMC US$122.42B; Samsung DS ₩130.1T ≈ $91,530M at 2025 avg ₩1,421.40/US$).
// Run: node scripts/hero-images/biggest-chip-companies-2026.mjs
import { renderHero } from "./render.mjs";

const slug = "biggest-chip-companies-2026";

const BARS = [
  ["NVIDIA", 215.9, true],
  ["TSMC", 122.4, false],
  ["Samsung", 91.5, false],
];
const MAX_W = 340;

const bars = BARS.map(
  ([name, v, first]) => `
  <div class="bar-row">
    <div class="lab${first ? " o" : ""}">${name}</div>
    <div class="track"><div class="fill${first ? " o" : ""}" style="width:${((v / 215.9) * MAX_W).toFixed(0)}px"></div><span class="val${first ? " o" : ""}">$${v.toFixed(1)}B</span></div>
  </div>`
).join("");

const body = `
<div class="wrap">
  <div class="top">
    <span class="v">V</span>
    <span class="eyebrow">World's biggest chip companies · 2025</span>
  </div>
  <div class="left">
    <div class="rank">#1 NVIDIA</div>
    <div class="big">$215.9B</div>
    <div class="sub">More than TSMC + Samsung<br/>combined</div>
  </div>
  <div class="right">${bars}</div>
  <div class="foot">
    <span>Company-reported revenue, latest fiscal year · NVIDIA: total company revenue</span>
    <span class="site">viszlyn.io</span>
  </div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden}
.top{position:absolute;left:56px;top:44px;display:flex;align-items:center;gap:16px}
.v{display:grid;place-items:center;width:44px;height:44px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:28px}
.eyebrow{font-weight:800;font-size:30px;letter-spacing:.5px;text-transform:uppercase;color:#FF5D3A}
.left{position:absolute;left:56px;top:150px;width:580px}
.rank{font-weight:800;font-size:48px;line-height:1}
.big{font-weight:900;font-size:124px;line-height:1;letter-spacing:-4px;color:#FF5D3A;margin-top:14px}
.sub{font-weight:800;font-size:40px;line-height:1.15;margin-top:20px}
.right{position:absolute;left:660px;top:160px;width:500px}
.bar-row{margin-bottom:34px}
.lab{font-weight:800;font-size:34px;line-height:1;margin-bottom:10px;color:rgba(247,245,240,.9)}.lab.o{color:#FF5D3A}
.track{display:flex;align-items:center;gap:14px}
.fill{height:56px;border-radius:8px;background:#C9C4B8}.fill.o{background:#FF5D3A}
.val{font-weight:900;font-size:36px}.val.o{color:#FF5D3A}
.foot{position:absolute;left:56px;right:56px;bottom:26px;display:flex;justify-content:space-between;font-size:18px;color:rgba(247,245,240,.55)}
.site{color:#F7F5F0;font-weight:800;font-size:22px}
`;

await renderHero({ slug, css, body });
