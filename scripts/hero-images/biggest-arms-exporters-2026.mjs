// Share / Google Discover image for /rankings/biggest-arms-exporters-2026 (the page keeps its block mosaic).
// Full top 10 drawn as flags, area proportional to share of global arms exports, 2021–25 (SIPRI, March 2026).
// Run: node scripts/hero-images/biggest-arms-exporters-2026.mjs
import { renderHero } from "./render.mjs";
import { sizedGrid } from "./sized-grid.mjs";

const r = (rank, name, flag, raw, label) => ({ rank, name, flag, raw, label: label ?? `${raw.toFixed(1)}%` });

const { css, body } = await sizedGrid({
  shape: "flag",
  eyebrow: "Ranked · 2021–25",
  title: "The World's<br/>10 Biggest Arms<br/>Exporters",
  sub: "One country supplies<br/>42% of all arms exports",
  foot: "Share of global arms exports · SIPRI, March 2026",
  maxSide: 210,
  rows: [
    [r(1, "United States", "us", 42, "42%"), r(2, "France", "fr", 9.8), r(3, "Russia", "ru", 6.8), r(4, "Germany", "de", 5.7)],
    [r(5, "China", "cn", 5.6), r(6, "Italy", "it", 5.1), r(7, "Israel", "il", 4.4), r(8, "UK", "gb", 3.4), r(9, "S. Korea", "kr", 3.0), r(10, "Spain", "es", 2.3)],
  ],
});

await renderHero({ slug: "biggest-arms-exporters-2026", css, body });
