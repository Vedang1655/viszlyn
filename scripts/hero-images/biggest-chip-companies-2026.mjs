// Hero / Discover image for /rankings/biggest-chip-companies-2026.
// Artwork supplied by Viszlyn (assets/chips-hero-original.png, 2400x1350). Prepared copy (assets/chips-hero-bg.png):
// cropped to 2400x1260 (rows 40-1300), circuit lines dimmed behind the headline, old footnote removed; footnote redrawn below.
// Figures on the artwork match the article (company-reported revenue measure, latest fiscal year, as of Nov 25, 2026).
// Run: node scripts/hero-images/biggest-chip-companies-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const bg = "data:image/png;base64," + readFileSync(new URL("./assets/chips-hero-bg.png", import.meta.url)).toString("base64");
const body = `<div class="wrap"><img class="bg" src="${bg}"/>
  <div class="site">viszlyn.io</div><div class="foot">Revenue measure varies: total company, or chip segment for Samsung, Intel, Qualcomm and Broadcom · latest reported fiscal year</div></div>`;
const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif}
.bg{position:absolute;inset:0;width:1200px;height:630px}
.foot{position:absolute;left:55px;top:612px;font-size:12px;font-weight:600;color:#AEB7D0;padding:0 6px 1px 0;background:#0C1428}
.site{position:absolute;right:55px;top:607px;font-size:17px;font-weight:900;color:#fff;padding:0 4px;background:#141828}`;
await renderHero({ slug: "biggest-chip-companies-2026", css, body });
