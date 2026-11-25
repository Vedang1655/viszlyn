// Share / Google Discover image for /rankings/biggest-chip-companies-2026 (the page keeps its block mosaic).
// Full top 10 drawn as chips, area proportional to company-reported revenue (NVIDIA: total company revenue).
// Run: node scripts/hero-images/biggest-chip-companies-2026.mjs
import { renderHero } from "./render.mjs";
import { sizedGrid } from "./sized-grid.mjs";

const r = (rank, name, raw) => ({ rank, name, raw, label: `$${raw.toFixed(1)}B` });

const { css, body } = await sizedGrid({
  shape: "chip",
  eyebrow: "Ranked · 2026",
  title: "The World's<br/>10 Biggest Chip<br/>Companies",
  sub: "AI memory boom sends<br/>Micron to No. 2",
  foot: "Company-reported revenue, latest fiscal year (NVIDIA: total company revenue)",
  maxSide: 170,
  rows: [
    [r(1, "NVIDIA", 215.9), r(2, "Micron", 133.2), r(3, "TSMC", 122.4), r(4, "Samsung", 91.5)],
    [r(5, "SK hynix", 68.3), r(6, "Intel", 49.1), r(7, "Qualcomm", 37.2), r(8, "Broadcom", 36.9), r(9, "AMD", 34.6), r(10, "MediaTek", 19.1)],
  ],
});

await renderHero({ slug: "biggest-chip-companies-2026", css, body });
