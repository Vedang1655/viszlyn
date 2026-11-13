// Share / Google Discover image for /rankings/foreign-holders-us-treasuries-2026 (the page keeps its block mosaic).
// Each country's row is a line of $100-bill bundles; one bundle = $100 billion, so row length is proportional
// to holdings (the last bundle is cut to the exact remainder). Data: US Treasury TIC, end of August 2026.
// Run: node scripts/hero-images/foreign-holders-us-treasuries-2026.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderHero } from "./render.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flag = async (code) =>
  "data:image/svg+xml;base64," +
  (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${code}.svg`))).toString("base64");

const ROWS = [
  ["Japan", "jp", 1068.3],
  ["United Kingdom", "gb", 1009.5],
  ["China", "cn", 590.7],
  ["Belgium", "be", 490.5],
  ["Canada", "ca", 464.6],
  ["Cayman Islands", "ky", 463.0],
  ["Luxembourg", "lu", 448.2],
  ["France", "fr", 363.4],
  ["Ireland", "ie", 352.1],
  ["Taiwan", "tw", 298.4],
];

const BUNDLE = 34; // px per $100 billion
const BILL = `<i class="face"><s></s></i>`;

const rows = (
  await Promise.all(
    ROWS.map(async ([name, code, bn], i) => {
      const full = Math.floor(bn / 100);
      const rest = (bn - full * 100) / 100;
      const bundles =
        Array.from({ length: full }, () => `<div class="bdl" style="width:${BUNDLE - 4}px">${BILL}</div>`).join("") +
        (rest > 0.02 ? `<div class="bdl" style="width:${Math.round(BUNDLE * rest) - 4}px">${BILL}</div>` : "");
      return `<div class="row${i === 0 ? " first" : ""}">
        <div class="lab"><span class="rk">${i + 1}</span><img src="${await flag(code)}"/><span class="nm">${name}</span></div>
        <div class="stack">${bundles}<span class="val">$${bn.toLocaleString("en-US", { minimumFractionDigits: 1 })}B</span></div>
      </div>`;
    })
  )
).join("");

const body = `
<div class="wrap">
  <div class="left">
    <div class="eyebrow"><span class="v">V</span>Ranked · Aug 2026</div>
    <h1>Who Owns<br/>America's<br/><em>Debt?</em></h1>
    <p class="sub">Top 10 foreign holders<br/>of US Treasuries</p>
    <div class="key"><div class="bdl k">${BILL}</div><span>= $100 billion</span></div>
  </div>
  <div class="rows">${rows}</div>
  <div class="foot"><span>Data: US Treasury (TIC), holdings at end of August 2026</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(900px 500px at 75% 40%,#123524 0%,#0B1A13 55%,#070D0A 100%)}
.left{position:absolute;left:48px;top:44px;width:330px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#7EE2A8;font-weight:800;font-size:22px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:38px;height:38px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:24px;letter-spacing:0}
h1{margin:26px 0 0;font-size:66px;line-height:1.0;font-weight:900;letter-spacing:-1.5px}
h1 em{font-style:normal;color:#FF8A4C}
.sub{margin:22px 0 0;font-size:25px;line-height:1.25;font-weight:700;color:#D6F5E3}
.key{margin-top:30px;display:flex;align-items:center;gap:12px;font-size:21px;font-weight:700;color:#BFE9D0}
.key .bdl{width:30px;height:34px}
.rows{position:absolute;left:376px;top:30px;right:30px}
.row{display:flex;align-items:center;height:53px}
.lab{display:flex;align-items:center;gap:9px;width:290px;flex:none}
.rk{width:30px;text-align:right;font-size:24px;font-weight:900;color:#7EE2A8}
.lab img{width:36px;height:27px;border-radius:3px;box-shadow:0 0 0 1px rgba(255,255,255,.25)}
.nm{font-size:24px;font-weight:800;white-space:nowrap;letter-spacing:-.3px}
.stack{display:flex;align-items:center;gap:4px}
.bdl{position:relative;height:38px;border-radius:3px;overflow:hidden;
  background:repeating-linear-gradient(180deg,#CFE3C4 0 2px,#9DBE8E 2px 3px);
  box-shadow:0 3px 0 #4E6B45,0 5px 8px rgba(0,0,0,.45)}
.face{position:absolute;inset:3px 2px 6px;border-radius:2px;background:linear-gradient(135deg,#C9E2BC,#9FC490);
  border:1.5px solid #5F8752;display:grid;place-items:center}
.face s{width:12px;height:16px;border-radius:50%;background:#7FA870;border:1.5px solid #5F8752}
.bdl::after{content:"";position:absolute;left:calc(50% - 3px);top:0;bottom:0;width:6px;background:#F2E7C9;box-shadow:0 0 0 1px rgba(0,0,0,.15)}
.val{margin-left:10px;font-size:25px;font-weight:900;white-space:nowrap}
.row.first .val{color:#FF8A4C}
.row.first .nm{color:#FFB37E}
.foot{position:absolute;left:48px;right:48px;bottom:16px;display:flex;justify-content:space-between;font-size:16px;color:rgba(255,255,255,.75)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "foreign-holders-us-treasuries-2026", css, body });
