// Hero / Discover image for /rankings/biggest-entertainment-launches-2026.
// Ten bars (first-3-days worldwide earnings, to scale) beside a tall unranked tower for GTA VI's
// day-one retail sales. Bar height ∝ US$ millions; games show "+" where the publisher gave a threshold.
// Data: Box Office Mojo (films); Take-Two and Activision (games); Take-Two SEC Form 8-K, Nov 20, 2026 (GTA VI).
// Run: node scripts/hero-images/biggest-entertainment-launches-2026.mjs
import { renderHero } from "./render.mjs";

// [short name, kind, value (US$M), label]
const ROWS = [
  ["Avengers: Endgame", "film", 1223.641414, "$1,223.6M"],
  ["GTA V", "game", 1000, "$1,000M+"],
  ["Spider-Man: Brand New Day", "film", 932.091572, "$932.1M"],
  ["Call of Duty: MW II", "game", 800, "$800M+"],
  ["Red Dead Redemption 2", "game", 725, "$725M+"],
  ["Avengers: Infinity War", "film", 640.521291, "$640.5M"],
  ["Spider-Man: No Way Home", "film", 600.506041, "$600.5M"],
  ["Call of Duty: MW (2019)", "game", 600, "$600M+"],
  ["Zootopia 2", "film", 560.333554, "$560.3M"],
  ["Call of Duty: Black Ops III", "game", 550, "$550M+"],
];
const GTA6 = 3790;
const GROUND = 520, HT = 400;                 // tower height for $3,790M
const H = (v) => HT * (v / GTA6);

const ICON = {
  film: `<svg width="30" height="24" viewBox="0 0 30 24"><rect x="1" y="7" width="28" height="16" rx="2" fill="#2B0F05"/><path d="M1 3 L27 0 L29 6 L3 9Z" fill="#fff"/><path d="M7 2.4 L11 5.9 M14 1.6 L18 5.1 M21 0.8 L25 4.3" stroke="#2B0F05" stroke-width="2.4"/></svg>`,
  game: `<svg width="34" height="22" viewBox="0 0 34 22"><path d="M8 2h18c5 0 8 5 8 11 0 4-1.5 7-4 7-3 0-3-4-8-4h-10c-5 0-5 4-8 4-2.500 0-4-3-4-7C0 7 3 2 8 2z" fill="#032B25"/><path d="M9 7v6M6 10h6" stroke="#52EBD0" stroke-width="2.4"/><circle cx="24" cy="8" r="1.8" fill="#52EBD0"/><circle cx="28" cy="11" r="1.8" fill="#52EBD0"/></svg>`,
};
const BX0 = 292, BW = 82, GAP = 8;
const bars = ROWS.map(([name, kind, v, label], i) => {
  const h = H(v), x = BX0 + i * (BW + GAP), top = GROUND - h;
  const rankLabel = i === 6 || i === 7 ? "=7" : String(i + 1);
  return `<div class="bar ${kind}" style="left:${x}px;top:${top}px;width:${BW}px;height:${h}px">
      <span class="rk">${i === 0 ? "No. 1" : rankLabel}</span><span class="ic">${ICON[kind]}</span>
    </div>
    <div class="val" style="left:${x}px;top:${top - 26}px;width:${BW}px">${label}</div>
    <div class="nm" style="left:${x - 3}px;top:${GROUND + 8}px;width:${BW + 6}px">${name}</div>`;
}).join("");

// film-strip perforations + game-controller dots are drawn with CSS only (see .film / .game)
const body = `
<div class="wrap">
  <div class="glow"></div>
  <div class="head">
    <div class="eyebrow"><span class="v0">V</span>Ranked · 2026</div>
    <h1>The Biggest<br/><em>Entertainment Launches</em><br/>Ever</h1>
    <p class="sub">Money earned worldwide in the <strong>first 3 days</strong>, films and games</p>
    <div class="legend"><i class="sw film"></i>Film (opening weekend) <i class="sw game"></i>Video game</div>
  </div>

  <div class="tower" style="top:${GROUND - H(GTA6)}px;height:${H(GTA6)}px">
    <div class="t1">GTA VI</div>
    <div class="t2">$3.79B</div>
    <div class="t3">in ONE day</div>
    <div class="t4">≈ 3.1× the No. 1's 3 days<br/>Unranked: no 3-day total</div>
  </div>

  ${bars}
  <div class="ground"></div>
  <div class="foot"><span>Bar height ∝ US$ · "+" = publisher said "more than" · GTA VI: day-one retail sales, company estimate incl. pre-orders (Take-Two, SEC 8-K, Nov 20, 2026) · Box Office Mojo, Take-Two, Activision</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(ellipse at 20% 0%,#2A1646 0%,#120B26 45%,#080614 100%)}
.glow{position:absolute;left:30px;top:70px;width:260px;height:470px;background:radial-gradient(ellipse,rgba(255,196,60,.28),transparent 70%)}
.head{position:absolute;left:292px;top:22px;width:880px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#FFC98A;font-weight:800;font-size:18px;letter-spacing:2px;text-transform:uppercase}
.v0{display:grid;place-items:center;width:32px;height:32px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:21px;letter-spacing:0}
h1{margin:8px 0 0;font-size:56px;line-height:1;font-weight:900;letter-spacing:-1.6px;text-shadow:0 4px 18px rgba(0,0,0,.5)}
h1 em{font-style:normal;color:#FFC94A}
.sub{margin:10px 0 0;font-size:21px;font-weight:700;color:#E6E0F2}
.sub strong{color:#FFC94A}
.legend{margin-top:10px;font-size:15px;font-weight:700;color:#D9D2EC;display:flex;align-items:center;gap:8px}
.sw{display:inline-block;width:16px;height:16px;border-radius:4px;margin-left:10px}
.sw.film{background:#FF7A3D}.sw.game{background:#2ED3B7}
.tower{position:absolute;left:36px;width:228px;border-radius:0;
  background:repeating-linear-gradient(180deg,#FFC93A 0 14px,#D9900A 14px 17px);box-shadow:0 0 40px rgba(255,190,50,.45);
  color:#1A1030;text-align:center;padding-top:22px;box-sizing:border-box;border-radius:0}
.tower:before{content:'';position:absolute;left:0;right:0;top:-12px;height:24px;border-radius:50%;background:#FFE08A;box-shadow:inset 0 -4px 0 rgba(0,0,0,.15)}
.t1{position:relative;font-size:34px;font-weight:900;letter-spacing:-1px;z-index:1}
.t2{position:relative;font-size:64px;line-height:1;font-weight:900;letter-spacing:-2px;z-index:1}
.t3{position:relative;font-size:26px;font-weight:900;z-index:1;margin-top:2px;text-transform:uppercase;letter-spacing:1px}
.t4{position:relative;margin:18px 10px 0;font-size:14.5px;line-height:1.3;font-weight:800;z-index:1;background:rgba(26,16,48,.82);color:#FFE7A8;border-radius:8px;padding:7px 6px}
.bar{position:absolute;border-radius:0;box-shadow:0 6px 16px rgba(0,0,0,.4)}
.bar:before{content:'';position:absolute;left:0;right:0;top:-9px;height:18px;border-radius:50%;background:var(--cap);box-shadow:inset 0 -3px 0 rgba(0,0,0,.18)}
.bar:after{content:'';position:absolute;left:0;right:0;bottom:-9px;height:18px;border-radius:50%;background:var(--base);z-index:-1}
.bar .ic{position:absolute;left:0;right:0;bottom:4px;text-align:center;line-height:0;transform:scale(.8);transform-origin:50% 100%}
.bar.film{--cap:#FFB98A;--base:#B93C0E;background:repeating-linear-gradient(180deg,#FF7A3D 0 8px,#D9501A 8px 10px)}
.bar.game{--cap:#8FF5E2;--base:#0B7A68;background:repeating-linear-gradient(180deg,#2ED3B7 0 8px,#0F9C85 8px 10px)}
.bar .rk{position:absolute;left:0;right:0;top:7px;text-align:center;font-size:15px;font-weight:900;color:#10081F}
.val{position:absolute;text-align:center;font-size:17px;letter-spacing:-.4px;font-weight:900;text-shadow:0 2px 6px rgba(0,0,0,.8)}
.nm{position:absolute;text-align:center;font-size:12.5px;line-height:1.15;font-weight:800;color:#EDE8FA}
.ground{position:absolute;left:0;right:0;top:${GROUND}px;height:2px;background:rgba(255,255,255,.35)}
.foot{position:absolute;left:30px;right:30px;bottom:10px;display:flex;justify-content:space-between;gap:14px;font-size:11.5px;color:rgba(255,255,255,.78)}
.site{font-weight:800;color:#fff;font-size:16px;white-space:nowrap}
`;
await renderHero({ slug: "biggest-entertainment-launches-2026", css, body });
