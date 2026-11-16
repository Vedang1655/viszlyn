// Hero (Discover + first image on the page) for /rankings/countries-with-most-time-zones-2026.
// A wall of world clocks: each clock's coloured arc fills to the country's number of time zones out of 12.
// Run: node scripts/hero-images/countries-with-most-time-zones-2026.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderHero } from "./render.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flag = async (c) => "data:image/svg+xml;base64," + (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${c}.svg`))).toString("base64");
const ROWS = [["France", "fr", 12, "1"], ["Russia", "ru", 11, "=2"], ["United States", "us", 11, "=2"], ["United Kingdom", "gb", 9, "=4"], ["Australia", "au", 9, "=4"],
  ["Canada", "ca", 6, "6"], ["New Zealand", "nz", 5, "7"], ["Brazil", "br", 4, "=8"], ["Mexico", "mx", 4, "=8"], ["Denmark", "dk", 4, "=8"]];

const ticks = Array.from({ length: 12 }, (_, i) => `<i style="transform:rotate(${i * 30}deg)"></i>`).join("");
const clocks = (await Promise.all(ROWS.map(async ([n, c, z, r], i) => {
  const col = i === 0 ? "#FF5A4E" : "#2FD1C5";
  return `<div class="clk${i === 0 ? " first" : ""}">
    <div class="face" style="background:conic-gradient(${col} 0 ${(z / 12) * 360}deg, rgba(255,255,255,.08) ${(z / 12) * 360}deg 360deg)">
      <div class="inner">${ticks}<b>${z}</b><span>zones</span></div></div>
    <div class="lab"><span class="rk">${r}</span><img src="${await flag(c)}"/><span class="nm">${n}</span></div></div>`;
}))).join("");

const body = `<div class="wrap">
  <div class="head"><div class="eyebrow"><span class="v">V</span>Ranked · World · 2026</div>
  <h1>The Countries With the Most <em>Time Zones</em></h1>
  <p class="sub">Each clock fills to the number of time zones, out of 12 · including overseas territories</p></div>
  <div class="grid">${clocks}</div>
  <div class="foot"><span>Data: IANA time zone database; timeanddate.com · standard time only</span><span class="site">viszlyn.io</span></div></div>`;

const css = `.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;background:radial-gradient(ellipse at 50% -10%,#1C3550 0%,#0D1A2A 55%,#070E18 100%)}
.head{position:absolute;left:40px;right:40px;top:20px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#2FD1C5;font-weight:800;font-size:19px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:32px;height:32px;border-radius:8px;background:#2FD1C5;color:#0D1A2A;font-weight:900;font-size:21px;letter-spacing:0}
h1{margin:6px 0 0;font-size:44px;line-height:1.02;font-weight:900;letter-spacing:-1px}
h1 em{font-style:normal;color:#FF7A70}
.sub{margin:6px 0 0;font-size:18px;font-weight:700;color:#BFD3E6}
.grid{position:absolute;left:30px;right:30px;top:144px;display:grid;grid-template-columns:repeat(5,1fr);row-gap:10px}
.clk{display:flex;flex-direction:column;align-items:center}
.face{width:158px;height:158px;border-radius:50%;padding:11px;box-shadow:0 10px 24px rgba(0,0,0,.45)}
.inner{position:relative;width:100%;height:100%;border-radius:50%;background:radial-gradient(circle,#13263B 0%,#0B1726 100%);display:flex;flex-direction:column;align-items:center;justify-content:center}
.inner i{position:absolute;left:50%;top:6px;width:3px;height:10px;margin-left:-1.5px;background:rgba(255,255,255,.45);transform-origin:1.5px 62px}
.inner b{font-size:58px;font-weight:900;line-height:.9}
.inner span{font-size:15px;font-weight:800;color:#BFD3E6;letter-spacing:1px;text-transform:uppercase}
.first .inner b{color:#FF7A70}
.lab{margin-top:6px;display:flex;align-items:center;gap:7px}
.rk{font-size:18px;font-weight:900;color:#2FD1C5}
.first .rk{color:#FF7A70}
.lab img{width:28px;height:21px;border-radius:3px;box-shadow:0 0 0 1px rgba(255,255,255,.35)}
.nm{font-size:19px;font-weight:800;white-space:nowrap}
.foot{position:absolute;left:40px;right:40px;bottom:10px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.7)}
.site{font-weight:800;color:#fff}`;
await renderHero({ slug: "countries-with-most-time-zones-2026", css, body });
