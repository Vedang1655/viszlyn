// Hero / Discover image for /rankings/biggest-entertainment-launches-2026.
// Artwork: the owner's illustrated version (assets/entertainment-launches-bg.webp, 2000x1040),
// fitted to 1200x630, with a corrected footnote strip and a stray icon covered.
// Content on the artwork: ten bars (first-3-days worldwide earnings, to scale) beside a tall unranked
// tower for GTA VI's day-one retail sales.
// Data: Box Office Mojo (films); Take-Two and Activision (games); Take-Two SEC Form 8-K, Nov 20, 2026 (GTA VI).
// (The earlier coin-stack version is in git history for this file.)
// Run: node scripts/hero-images/biggest-entertainment-launches-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const bg = "data:image/webp;base64," + readFileSync(new URL("./assets/entertainment-launches-bg.webp", import.meta.url)).toString("base64");

const body = `
<div class="wrap">
  <div class="art"></div>
  <div class="patch"></div>
  <div class="strip"></div>
  <div class="foot"><span>Bar height ∝ US$ · "+" = publisher said "more than" · GTA VI: day-one retail sales, company estimate incl. pre-orders (Take-Two, SEC 8-K, Nov 20, 2026) · Box Office Mojo, Take-Two, Activision</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;background:#0B0714}
.art{position:absolute;inset:0;background:url(${bg}) center/cover no-repeat}
/* covers the stray clapperboard icon that floats above the No. 1 bar */
.patch{position:absolute;left:256px;top:288px;width:88px;height:88px;
  background:#150D29;-webkit-mask-image:radial-gradient(circle,#000 0 38%,transparent 68%);mask-image:radial-gradient(circle,#000 0 38%,transparent 68%)}
/* hides the artwork's own footnote, which had typos, and carries the corrected one */
.strip{position:absolute;left:0;right:0;bottom:0;height:46px;background:linear-gradient(180deg,rgba(9,6,20,0),rgba(9,6,20,.94) 38%)}
.foot{position:absolute;left:30px;right:30px;bottom:10px;display:flex;justify-content:space-between;gap:14px;font-size:11.5px;color:rgba(255,255,255,.82)}
.site{font-weight:800;color:#fff;font-size:16px;white-space:nowrap}
`;
await renderHero({ slug: "biggest-entertainment-launches-2026", css, body });
