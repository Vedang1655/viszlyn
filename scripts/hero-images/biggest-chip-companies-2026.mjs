// Share / Google Discover image for /rankings/biggest-chip-companies-2026 (the page keeps its block mosaic).
// Full top 10 drawn as chips, area proportional to company-reported revenue (NVIDIA: total company revenue).
// Run: node scripts/hero-images/biggest-chip-companies-2026.mjs
import { renderHero } from "./render.mjs";
import { sizedGrid } from "./sized-grid.mjs";

const r = (rank, name, raw) => ({ rank, name, raw, label: `$${raw.toFixed(1)}B` });

const { css, body } = await sizedGrid({
  shape: "chip",
  eyebrow: "Ranked · 2025",
  title: "The World's<br/>10 Biggest Chip<br/>Companies",
  sub: "NVIDIA's revenue beat<br/>TSMC + Samsung combined",
  foot: "Company-reported revenue, latest fiscal year (NVIDIA: total company revenue)",
  maxSide: 170,
  rows: [
    [r(1, "NVIDIA", 215.9), r(2, "TSMC", 122.4), r(3, "Samsung", 91.5), r(4, "SK hynix", 68.3)],
    [r(5, "Intel", 49.1), r(6, "Qualcomm", 38.4), r(7, "Micron", 37.4), r(8, "Broadcom", 36.9), r(9, "AMD", 34.6), r(10, "MediaTek", 19.1)],
  ],
});

await renderHero({ slug: "biggest-chip-companies-2026", css, body });
