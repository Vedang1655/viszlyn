// Hero (Discover + first image on the page) for /rankings/most-popular-baby-names-canada-provinces-2026.
// Map of Canada with each province's No. 1 girls' and boys' names, coloured by the girls' name.
// Province outlines: data/canada-map-1200x630.json (Natural Earth, public domain, pre-projected).
// Run: node scripts/hero-images/most-popular-baby-names-canada-provinces-2026.mjs
import { readFile } from "node:fs/promises";
import { renderHero } from "./render.mjs";

const MAP = JSON.parse(await readFile(new URL("./data/canada-map-1200x630.json", import.meta.url), "utf8")).provinces;
// year shown under each province; reported = media-reported, not officially published
const DATA = {
  "British Columbia": { girl: "Olivia", boy: "Noah", year: "2025" },
  Alberta: { girl: "Olivia", boy: "Noah", year: "2025" },
  Saskatchewan: { girl: "Olivia", boy: "Noah", year: "2025" },
  Manitoba: { girl: "Olivia", boy: "Noah", year: "2025*" },
  Ontario: { girl: "Olivia", boy: "Noah", year: "2024" },
  "Québec": { girl: "Emma", boy: "Noah", year: "2025" },
  "New Brunswick": { girl: "Charlotte", boy: "Jack", year: "2025" },
  "Nova Scotia": { girl: "Charlotte", boy: "Henry", year: "2025" },
  "Prince Edward Island": { girl: "Violet", boy: "Theodore", year: "2025*" },
  "Newfoundland and Labrador": { girl: "Amelia/Emilia", boy: "Jaxson/Jackson†", year: "2020" },
  Yukon: { girl: "Ava", boy: "Henry", year: "2016–20" },
  "Northwest Territories": { girl: "3-way tie", boy: "Noah/Luca", year: "2024" },
  Nunavut: {},
};
const COLORS = { Olivia: "#FF5C8A", Emma: "#FFB547", Charlotte: "#8C6CFF", "Amelia/Emilia": "#2EC4B6", Ava: "#FF8A5B", Violet: "#C77DFF" };
const SHORT = { "Newfoundland and Labrador": "Nfld. & Labrador", "Northwest Territories": "N.W.T.", "Prince Edward Island": "P.E.I.", "British Columbia": "B.C." };
const CALLOUT = { "Prince Edward Island": [1012, 380], "New Brunswick": [1012, 455], "Nova Scotia": [1012, 530] };

let shapes = "", labels = "", callouts = "";
for (const [n, p] of Object.entries(MAP)) {
  const v = DATA[n] || {};
  shapes += `<path d="${p.d}" fill="${COLORS[v.girl] ?? "#3A3550"}" stroke="#1B1530" stroke-width="1.6" stroke-linejoin="round"/>`;
  const lab = (x, y, a) => `<g transform="translate(${x},${y})"><text text-anchor="${a}" class="pv" y="-24">${SHORT[n] || n}${v.year ? " · " + v.year : ""}</text>
    <text text-anchor="${a}" class="g" y="0">${v.girl ?? "no list"}</text><text text-anchor="${a}" class="b" y="23">${v.boy ?? ""}</text></g>`;
  if (CALLOUT[n]) {
    const [cx, cy] = p.centroid, [tx, ty] = CALLOUT[n];
    callouts += `<path d="M${cx},${cy} L${tx - 8},${ty - 8}" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/><circle cx="${cx}" cy="${cy}" r="3" fill="#fff"/>` + lab(tx, ty, "start");
  } else labels += lab(p.anchor[0], p.anchor[1], "middle");
}
const body = `<div class="wrap"><svg width="1200" height="630" viewBox="0 0 1200 630">${shapes}${callouts}${labels}</svg>
  <div class="head"><div class="eyebrow"><span class="v">V</span>Mapped · Canada · Latest lists</div>
  <h1>The Most Popular <em>Baby Names</em><br/>in Every Province</h1>
  <p class="sub"><span class="gk">Girls' #1</span> · <span class="bk">Boys' #1</span> · colour = girls' #1 name</p></div>
  <div class="note">* Reported to media, partial year &nbsp;† Spellings grouped</div>
  <div class="foot"><span>Data: provincial and territorial vital statistics; CTV News, CBC News</span><span class="site">viszlyn.io</span></div></div>`;
const css = `.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;background:radial-gradient(ellipse at 30% 0%,#3A2A66 0%,#1B1530 60%,#110D1F 100%)}
svg{position:absolute;inset:0}
.head{position:absolute;left:40px;top:20px;width:640px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#FFB547;font-weight:800;font-size:20px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#FFB547;color:#1B1530;font-weight:900;font-size:22px;letter-spacing:0}
h1{margin:6px 0 0;font-size:40px;line-height:1.02;font-weight:900;letter-spacing:-1px}
h1 em{font-style:normal;color:#FF7AA2}
.sub{margin:8px 0 0;font-size:18px;font-weight:800;color:#D8D0EE}.gk{color:#fff}.bk{color:#A9DBFF}
.pv{font:700 14px Inter;fill:#fff;opacity:.9;paint-order:stroke;stroke:#1B1530;stroke-width:4px}
.g{font:900 20px Inter;fill:#fff;paint-order:stroke;stroke:#1B1530;stroke-width:5px}
.b{font:900 20px Inter;fill:#BFE6FF;paint-order:stroke;stroke:#1B1530;stroke-width:5px}
.note{position:absolute;right:30px;bottom:34px;font-size:13px;font-weight:700;color:#D8D0EE}
.foot{position:absolute;left:44px;right:30px;bottom:10px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.7)}
.site{font-weight:800;color:#fff}`;
await renderHero({ slug: "most-popular-baby-names-canada-provinces-2026", css, body });
