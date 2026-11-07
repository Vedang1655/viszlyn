// Hero image for /rankings/tallest-buildings-world-2026
// The top 10 completed buildings drawn to scale as simple generic silhouettes,
// with Jeddah Tower (under construction, "1,000+ m") as a dashed outline.
// Data: CTBUH Skyscraper Center, height to architectural top (November 2026).
// Run: node scripts/hero-images/tallest-buildings-world-2026.mjs
import { renderHero } from "./render.mjs";

const slug = "tallest-buildings-world-2026";

// [label line 1, label line 2, height m, rank label]
const TOP10 = [
  ["Burj", "Khalifa", 828, "#1"],
  ["Merdeka", "118", 678.9, "#2"],
  ["Shanghai", "Tower", 632, "#3"],
  ["Makkah", "Clock Tower", 601, "#4"],
  ["Ping An", "Finance", 599.1, "#5"],
  ["Lotte", "World", 554.5, "#6"],
  ["One", "WTC", 541.3, "#7"],
  ["Guangzhou", "CTF", 530, "=8"],
  ["Tianjin", "CTF", 530, "=8"],
  ["CITIC", "Tower", 527.7, "#10"],
];
const JEDDAH = 1000; // CTBUH lists "1,000+ m"; drawn at 1,000 with a "+" marker

const W = 680; // chart width
const H = 470; // chart height (ground at bottom)
const TOP_PAD = 26;
const PX = (H - TOP_PAD) / 1050; // px per metre
const yOf = (m) => H - m * PX;

const COL = 58; // column width
const START = 76; // x of first column (Jeddah)

function tower(cx, h, { w = 30, fill = "#F7F5F0", dashed = false, spire = 0.1 } = {}) {
  // generic tapered silhouette: base w, top 45% of w, then a spire of `spire` share of the height
  const ground = H;
  const bodyTop = yOf(h * (1 - spire));
  const tip = yOf(h);
  const half = w / 2;
  const topHalf = half * 0.42;
  const pts = [
    [cx - half, ground],
    [cx - topHalf, bodyTop],
    [cx - 2, bodyTop],
    [cx, tip],
    [cx + 2, bodyTop],
    [cx + topHalf, bodyTop],
    [cx + half, ground],
  ]
    .map((p) => p.map((v) => v.toFixed(1)).join(","))
    .join(" ");
  return dashed
    ? `<polygon points="${pts}" fill="rgba(255,93,58,.08)" stroke="#FF5D3A" stroke-width="2" stroke-dasharray="6 5"/>`
    : `<polygon points="${pts}" fill="${fill}"/>`;
}

let svg = "";
// grid lines
for (const m of [200, 400, 600, 800]) {
  const y = yOf(m);
  svg += `<line x1="40" x2="${W}" y1="${y}" y2="${y}" stroke="rgba(247,245,240,.09)" stroke-width="1"/>`;
  svg += `<text x="34" y="${y + 4}" text-anchor="end" class="gl">${m.toLocaleString("en-US")} m</text>`;
}
// Jeddah Tower (dashed)
const jx = START;
svg += tower(jx, JEDDAH, { w: 40, dashed: true, spire: 0.14 });
svg += `<text x="${jx}" y="${yOf(JEDDAH) - 10}" text-anchor="middle" class="hj">1,000+ m planned</text>`;
svg += `<text x="${jx}" y="${H + 20}" text-anchor="middle" class="lj">Jeddah</text>`;
svg += `<text x="${jx}" y="${H + 36}" text-anchor="middle" class="lj">Tower</text>`;
// top 10
TOP10.forEach(([a, b, m, rk], i) => {
  const cx = START + (i + 1) * COL + 6;
  const first = i === 0;
  svg += tower(cx, m, { w: first ? 36 : 30, fill: first ? "#FF5D3A" : "#E9E5DA", spire: first ? 0.16 : 0.08 });
  svg += `<text x="${cx}" y="${yOf(m) - 9}" text-anchor="middle" class="${first ? "h1v" : "hv"}">${m}</text>`;
  svg += `<text x="${cx}" y="${H + 20}" text-anchor="middle" class="${first ? "l1" : "l"}">${a}</text>`;
  svg += `<text x="${cx}" y="${H + 36}" text-anchor="middle" class="${first ? "l1" : "l"}">${b}</text>`;
  svg += `<text x="${cx}" y="${H - 10}" text-anchor="middle" class="rk${first ? " rk1" : ""}">${rk}</text>`;
});
svg += `<line x1="40" x2="${W}" y1="${H}" y2="${H}" stroke="rgba(247,245,240,.35)" stroke-width="1.5"/>`;

const body = `
<div class="wrap">
  <div class="left">
    <div class="brand"><span class="v">V</span><span class="bn">VISZLYN</span></div>
    <div class="eyebrow">Official heights · 2026</div>
    <h1>The World's<br/>Tallest<br/>Buildings</h1>
    <div class="sub">Top 20 completed buildings, ranked</div>
    <div class="card">
      <div class="cardtop"><span class="num">#1</span> Burj Khalifa, Dubai</div>
      <div class="big">828 m</div>
      <div class="towns">World's tallest since 2010</div>
      <div class="cmp">Next: Jeddah Tower, 1,000+ m, under construction</div>
    </div>
  </div>
  <div class="right">
    <svg width="${W}" height="${H + 44}" viewBox="0 0 ${W} ${H + 44}" class="chart">${svg}</svg>
  </div>
  <div class="foot">
    <span>Source: CTBUH Skyscraper Center · Height to architectural top · Top 10 drawn to scale, shapes are illustrative</span>
    <span class="site">viszlyn.io</span>
  </div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden}
.left{position:absolute;left:56px;top:46px;width:400px}
.brand{display:flex;align-items:center;gap:12px}
.v{display:grid;place-items:center;width:34px;height:34px;border-radius:6px;background:#FF5D3A;color:#0B0E14;font-weight:800;font-size:22px}
.bn{font-weight:700;font-size:18px;letter-spacing:4px;color:rgba(247,245,240,.8)}
.eyebrow{margin-top:30px;color:#FF5D3A;font-weight:700;font-size:16px;letter-spacing:2.5px;text-transform:uppercase}
h1{margin:10px 0 0;font-weight:800;font-size:56px;line-height:1.02;letter-spacing:-1.2px}
.sub{margin-top:12px;font-size:19px;color:rgba(247,245,240,.7)}
.card{margin-top:24px;padding:16px 20px;border-radius:12px;background:#171B24;border:1px solid rgba(255,93,58,.55)}
.cardtop{font-weight:700;font-size:18px}
.num{color:#FF5D3A}
.big{font-weight:900;font-size:60px;line-height:1;margin-top:4px;letter-spacing:-1px}
.towns{margin-top:8px;font-size:15px;font-weight:600;color:rgba(247,245,240,.85)}
.cmp{margin-top:4px;font-size:14px;color:rgba(247,245,240,.6)}
.right{position:absolute;left:470px;top:28px}
.chart{overflow:visible;font-family:Inter}
.gl{font-size:11px;fill:rgba(247,245,240,.4)}
.hv{font-size:12px;font-weight:700;fill:rgba(247,245,240,.8)}
.h1v{font-size:15px;font-weight:800;fill:#FF5D3A}
.hj{font-size:14px;font-weight:800;fill:#FF5D3A}
.l{font-size:10.5px;font-weight:600;fill:rgba(247,245,240,.62)}
.l1{font-size:11px;font-weight:800;fill:#F7F5F0}
.lj{font-size:10.5px;font-weight:700;fill:#FF5D3A}
.lj2{font-size:10px;font-weight:600;fill:rgba(255,93,58,.75)}
.rk{font-size:10px;font-weight:800;fill:#0B0E14}
.foot{position:absolute;left:56px;right:56px;bottom:22px;display:flex;justify-content:space-between;font-size:13px;color:rgba(247,245,240,.5)}
.site{color:rgba(247,245,240,.85);font-weight:600}
`;

await renderHero({ slug, css, body });
