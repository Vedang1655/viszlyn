// Hero (Discover + first image on the page) for /rankings/beer-consumption-by-country-2026.
// Ten pint glasses on a bar; each beer level is proportional to 2024 litres per person (Kirin Holdings).
// Run: node scripts/hero-images/beer-consumption-by-country-2026.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderHero } from "./render.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flag = async (code) =>
  "data:image/svg+xml;base64," +
  (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${code}.svg`))).toString("base64");

const ROWS = [
  ["Czechia", "cz", 148.8], ["Lithuania", "lt", 110.6], ["Austria", "at", 104.6], ["Ireland", "ie", 99.0],
  ["Croatia", "hr", 95.1], ["Estonia", "ee", 93.2], ["Spain", "es", 91.8], ["Slovenia", "si", 88.4],
  ["Romania", "ro", 87.4], ["Germany", "de", 86.9],
];
const GLASS = 290; // glass height = 175 litres

const cols = (await Promise.all(ROWS.map(async ([name, code, v], i) => {
  const h = Math.round((v / 175) * GLASS);
  return `<div class="col${i === 0 ? " first" : ""}">
    <div class="glass" style="height:${GLASS}px">
      <div class="shape"><div class="beer" style="height:${h}px"><div class="foam"></div><i></i><i></i><i></i></div></div>
      <div class="val" style="bottom:${h + 50 > GLASS ? GLASS + 6 : h + 14}px">${v.toFixed(1)}</div>
    </div>
    <div class="base"><span class="rk">${i + 1}</span><img src="${await flag(code)}"/></div>
    <div class="nm">${name}</div>
  </div>`;
}))).join("");

const body = `
<div class="wrap">
  <div class="bar"></div>
  <div class="head">
    <div class="eyebrow"><span class="v">V</span>Ranked · 2024</div>
    <h1>Who Drinks the Most <em>Beer</em> Per Person?</h1>
    <p class="sub">Litres per person per year · Czechia has been No. 1 for 32 years</p>
  </div>
  <div class="cols">${cols}</div>
  <div class="foot"><span>Data: Kirin Holdings, Global Beer Consumption by Country in 2024</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(ellipse at 50% 0%,#5A3418 0%,#2A170B 55%,#140A04 100%)}
.bar{position:absolute;left:0;right:0;bottom:0;height:132px;background:linear-gradient(180deg,#7A4A22 0%,#5A3415 18%,#3A2009 100%);box-shadow:0 -4px 0 #9A6430}
.head{position:absolute;left:48px;right:48px;top:22px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#FFCB5C;font-weight:800;font-size:22px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:38px;height:38px;border-radius:8px;background:#FFB81C;color:#140A04;font-weight:900;font-size:24px;letter-spacing:0}
h1{margin:10px 0 0;font-size:54px;line-height:1.02;font-weight:900;letter-spacing:-1.2px}
h1 em{font-style:normal;color:#FFC233}
.sub{margin:10px 0 0;font-size:23px;font-weight:700;color:#FFE2B0}
.cols{position:absolute;left:44px;right:44px;bottom:30px;display:flex;justify-content:space-between;align-items:flex-end}
.col{width:104px;display:flex;flex-direction:column;align-items:center}
.glass{position:relative;width:78px}
.shape{position:absolute;inset:0;border-radius:4px 4px 14px 14px;background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 3px rgba(255,255,255,.55);clip-path:polygon(0 0,100% 0,92% 100%,8% 100%);overflow:hidden}
.beer{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(90deg,#C77A0A 0%,#F5A623 30%,#FFC94A 50%,#E8920F 75%,#B86A05 100%)}
.foam{position:absolute;left:0;right:0;top:0;height:16px;border-radius:10px 10px 4px 4px;background:linear-gradient(180deg,#FFFFFF,#FFF3D6)}
.beer i{position:absolute;width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.55)}
.beer i:nth-child(2){left:22px;top:40%}.beer i:nth-child(3){left:46px;top:62%}.beer i:nth-child(4){left:34px;top:82%}
.val{position:absolute;left:-10px;right:-10px;text-align:center;font-size:26px;font-weight:900;text-shadow:0 2px 6px rgba(0,0,0,.7)}
.col.first .val{color:#FFD24D;font-size:31px}
.col.first .shape{box-shadow:inset 0 0 0 4px #FFC233}
.base{display:flex;align-items:center;gap:6px;margin-top:10px}
.rk{font-size:22px;font-weight:900}
.base img{width:34px;height:25px;border-radius:3px;box-shadow:0 0 0 1px rgba(255,255,255,.4)}
.nm{margin-top:4px;font-size:19px;font-weight:800;text-align:center}
.foot{position:absolute;left:48px;right:48px;bottom:6px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.7)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "beer-consumption-by-country-2026", css, body });
