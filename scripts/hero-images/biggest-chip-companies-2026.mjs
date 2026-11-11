// Share / Google Discover image for /rankings/biggest-chip-companies-2026 (not shown on the page;
// the article keeps its block mosaic). Big title + top 3 drawn as chips, area proportional to revenue.
// Data: company-reported revenue, latest fiscal year (NVIDIA: total company revenue).
// Run: node scripts/hero-images/biggest-chip-companies-2026.mjs
import { renderHero } from "./render.mjs";

const slug = "biggest-chip-companies-2026";

const TOP = [
  ["NVIDIA", 215.9, "#FF5D3A"],
  ["TSMC", 122.4, "#E9E5DA"],
  ["Samsung", 91.5, "#C9C4B8"],
];
const BIG = 205; // side of the largest chip in px; others scaled by sqrt so area ~ revenue

const chip = ([name, v, color], i) => {
  const side = Math.round(BIG * Math.sqrt(v / TOP[0][1]));
  const first = i === 0;
  return `
  <div class="chipwrap">
    <div class="chip" style="width:${side}px;height:${side}px;background:${color}">
      <div class="pins top"></div><div class="pins bottom"></div><div class="pins left"></div><div class="pins right"></div>
      <div class="inner">
        <div class="cn" style="font-size:${first ? 34 : Math.max(22, side / 7).toFixed(0)}px">${name}</div>
        <div class="cv" style="font-size:${first ? 44 : Math.max(24, side / 6).toFixed(0)}px">$${v.toFixed(1)}B</div>
      </div>
    </div>
    <div class="rk">#${i + 1}</div>
  </div>`;
};

const body = `
<div class="wrap">
  <div class="left">
    <div class="eyebrow"><span class="v">V</span>Ranked · 2025</div>
    <h1>The World's<br/>Biggest Chip<br/>Companies</h1>
    <div class="sub">NVIDIA's revenue beat<br/>TSMC + Samsung combined</div>
  </div>
  <div class="chips">${TOP.map(chip).join("")}</div>
  <div class="foot"><span>Company-reported revenue, latest fiscal year (NVIDIA: total company revenue)</span><span class="site">viszlyn.io</span></div>
</div>`;

const pins = (dir) => {
  const horiz = dir === "top" || dir === "bottom";
  return `.pins.${dir}{position:absolute;${dir}:-16px;${horiz ? "left:12%;right:12%;height:16px" : "top:12%;bottom:12%;width:16px"};
  background:repeating-linear-gradient(${horiz ? "90deg" : "0deg"},#8A867C 0 8px,transparent 8px 22px)}`;
};

const css = `
.wrap{position:relative;width:1200px;height:630px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden}
.left{position:absolute;left:56px;top:46px;width:470px}
.eyebrow{display:flex;align-items:center;gap:14px;color:#FF5D3A;font-weight:800;font-size:26px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:40px;height:40px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:26px;letter-spacing:0}
h1{margin:22px 0 0;font-weight:900;font-size:68px;line-height:.98;letter-spacing:-2.5px}
.sub{margin-top:26px;font-weight:800;font-size:30px;line-height:1.2;color:#FF5D3A}
.chips{position:absolute;left:560px;right:24px;top:70px;bottom:70px;display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.chipwrap{display:flex;flex-direction:column;align-items:center;padding:18px 10px 0}
.chip{position:relative;border-radius:14px;display:grid;place-items:center;box-shadow:0 0 0 6px #0B0E14 inset}
.inner{text-align:center;color:#0B0E14;padding:8px}
.cn{font-weight:900;line-height:1}
.cv{font-weight:900;line-height:1.05;margin-top:6px;letter-spacing:-1px}
${pins("top")}${pins("bottom")}${pins("left")}${pins("right")}
.rk{margin-top:26px;font-weight:900;font-size:34px;color:rgba(247,245,240,.85)}
.foot{position:absolute;left:56px;right:56px;bottom:24px;display:flex;justify-content:space-between;font-size:17px;color:rgba(247,245,240,.55)}
.site{color:#F7F5F0;font-weight:800;font-size:22px}
`;

await renderHero({ slug, css, body });
