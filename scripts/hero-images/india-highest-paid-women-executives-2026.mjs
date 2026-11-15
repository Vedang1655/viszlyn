// Hero (Discover + first image on the page) for /rankings/india-highest-paid-women-executives-2026.
// Boardroom nameplates on a dark walnut table; each plate carries a gold bar sized by FY26 remuneration
// (company annual reports). No photos of people. Run: node scripts/hero-images/india-highest-paid-women-executives-2026.mjs
import { renderHero } from "./render.mjs";

const ROWS = [
  ["Kavery Kalanithi", "Sun TV Network", 87.5], ["Nilima Prasad Divi", "Divi's Laboratories", 34.78],
  ["Vinita Singhania", "JK Lakshmi Cement", 28.68], ["Vinita Gupta", "Lupin", 26.69],
  ["Vinati Saraf Mutreja", "Vinati Organics", 21.06], ["Aarthi Subramanian", "TCS", 18.342],
  ["Priya Nair", "Hindustan Unilever", 18.19], ["Prabha Narasimhan", "Colgate-Palmolive India", 12.9117],
  ["Bhuvaneswari Nara", "Heritage Foods", 9.603], ["Suneeta Reddy", "Apollo Hospitals", 9.534],
];

const first = ROWS[0];
const plates = ROWS.slice(1).map(([n, c, v], i) => `
  <div class="plate"><span class="rk">${i + 2}</span>
    <div class="who"><b>${n}</b><small>${c}</small></div>
    <div class="bar"><i style="width:${Math.round((v / 34.78) * 100)}%"></i></div>
    <span class="amt">₹${v.toFixed(2)} Cr</span></div>`).join("");

const body = `
<div class="wrap">
  <div class="head">
    <div class="eyebrow"><span class="v">V</span>Ranked · India · FY26</div>
    <h1>India's Highest-Paid <em>Women Executives</em></h1>
    <p class="sub">Total remuneration, FY26 · company annual reports</p>
  </div>
  <div class="hero1">
    <div class="r1">#1</div>
    <div class="n1">${first[0]}</div>
    <div class="c1">${first[1]} · Executive Director</div>
    <div class="v1">₹87.50 Cr</div>
    <div class="x1">2.5× the No. 2</div>
  </div>
  <div class="list">${plates}</div>
  <div class="foot"><span>Data: FY26 annual reports and filings · ₹ crore</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(ellipse at 20% 30%,#4A1838 0%,#24101F 55%,#140913 100%)}
.head{position:absolute;left:44px;right:44px;top:24px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#F2C46D;font-weight:800;font-size:20px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#F2C46D;color:#24101F;font-weight:900;font-size:22px;letter-spacing:0}
h1{margin:8px 0 0;font-size:48px;line-height:1.02;font-weight:900;letter-spacing:-1px}
h1 em{font-style:normal;color:#FF8FC7}
.sub{margin:6px 0 0;font-size:20px;font-weight:700;color:#E9CFE0}
.hero1{position:absolute;left:44px;top:168px;width:390px;height:400px;border-radius:18px;
  background:linear-gradient(160deg,#F7D58A 0%,#D9A441 55%,#B07D26 100%);color:#24101F;padding:28px 26px;box-sizing:border-box;
  box-shadow:0 18px 40px rgba(0,0,0,.5)}
.r1{display:inline-block;background:#24101F;color:#F7D58A;font-weight:900;font-size:26px;padding:4px 14px;border-radius:10px}
.n1{margin-top:22px;font-size:40px;font-weight:900;line-height:1.02;letter-spacing:-.8px}
.c1{margin-top:8px;font-size:20px;font-weight:700;opacity:.85}
.v1{margin-top:44px;font-size:68px;font-weight:900;letter-spacing:-2px;line-height:1}
.x1{margin-top:10px;font-size:22px;font-weight:800}
.list{position:absolute;left:460px;right:44px;top:168px;display:flex;flex-direction:column;gap:6px}
.plate{display:flex;align-items:center;gap:12px;height:39px;padding:0 14px;border-radius:9px;
  background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.04));box-shadow:inset 0 0 0 1px rgba(242,196,109,.25)}
.rk{width:26px;font-size:19px;font-weight:900;color:#F2C46D}
.who{width:300px;display:flex;flex-direction:column;line-height:1.05}
.who b{font-size:18px;font-weight:800;white-space:nowrap}
.who small{font-size:13px;font-weight:600;color:#D9BFD0;white-space:nowrap}
.bar{flex:1;height:10px;border-radius:5px;background:rgba(255,255,255,.08);overflow:hidden}
.bar i{display:block;height:100%;border-radius:5px;background:linear-gradient(90deg,#B07D26,#F7D58A)}
.amt{width:118px;text-align:right;font-size:20px;font-weight:900}
.foot{position:absolute;left:44px;right:44px;bottom:12px;display:flex;justify-content:space-between;font-size:14px;color:rgba(255,255,255,.7)}
.site{font-weight:800;color:#fff}
`;

await renderHero({ slug: "india-highest-paid-women-executives-2026", css, body });
