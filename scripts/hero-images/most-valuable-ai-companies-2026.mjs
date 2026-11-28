// Hero / Discover image for /rankings/most-valuable-ai-companies-2026 (Nov 28, 2026 refresh).
// Treemap: each box's AREA is proportional to the company's latest valuation (US$B).
// Data: see the article's source note. "~" = reported, not company-confirmed.
// Run: node scripts/hero-images/most-valuable-ai-companies-2026.mjs
import { readFileSync } from "node:fs";
import { renderHero } from "./render.mjs";

const flag = (cc) => "data:image/svg+xml;base64," + readFileSync(new URL(`../../node_modules/flag-icons/flags/1x1/${cc}.svg`, import.meta.url)).toString("base64");
const D = {
  openai: [1, "OpenAI", "$852B", 852, "us"], databricks: [2, "Databricks", "$190B", 190, "us"],
  deepseek: [3, "DeepSeek", "~$92B", 92.3, "cn"], anduril: [4, "Anduril", "~$90B", 90, "us"],
  moonshot: [5, "Moonshot AI", "~$50B", 50, "cn"], cognition: [6, "Cognition", "$48B", 48, "us"],
  prometheus: [7, "Prometheus", "$41B", 41, "us"], figure: [8, "Figure AI", "$39B", 39, "us"],
  ssi: [9, "SSI", "$32B", 32, "us"], crusoe: [10, "Crusoe", "$30.9B", 30.9, "us"],
};
const sum = (ks) => ks.reduce((a, k) => a + D[k][3], 0);
const X0 = 26, Y0 = 156, W = 1148, H = 440, G = 5;
const boxes = [];
const all = Object.keys(D), rest = all.slice(1);
const wOpen = W * D.openai[3] / sum(all);
boxes.push(["openai", X0, Y0, wOpen, H]);
const rx = X0 + wOpen, rw = W - wOpen;
const hDb = H * D.databricks[3] / sum(rest);
boxes.push(["databricks", rx, Y0, rw, hDb]);
const rows = [["deepseek", "anduril"], ["moonshot", "cognition", "prometheus"], ["figure", "ssi", "crusoe"]];
let y = Y0 + hDb; const remH = H - hDb, remSum = sum(rows.flat());
for (const row of rows) {
  const h = remH * sum(row) / remSum; let x = rx;
  for (const k of row) { const w = rw * D[k][3] / sum(row); boxes.push([k, x, y, w, h]); x += w; }
  y += h;
}
const html = boxes.map(([k, x, y, w, h]) => {
  const [rk, n, v, , cc] = D[k], size = w * h;
  const cls = k === "openai" ? "xl" : size > 40000 ? "l" : size > 18000 ? "m" : "s";
  return `<div class="bx ${cc} ${cls} ${k}" style="left:${x + G / 2}px;top:${y + G / 2}px;width:${w - G}px;height:${h - G}px">
    <div class="hd"><span class="rk">${rk}</span><img class="fl" src="${flag(cc)}"/></div>
    <div class="nm">${n}</div><div class="v">${v}</div></div>`;
}).join("");

const body = `<div class="wrap">
  <div class="title"><div class="eb"><span class="v0">V</span>RANKED · LATEST VALUATION (US$) · NOV 2026</div>
  <h1>THE 10 MOST VALUABLE<br>PRIVATE <em>AI</em> COMPANIES</h1></div>
  <div class="tag">Anthropic is now public, so it's off the list</div>
  ${html}
  <div class="foot"><span>Box area = latest valuation from a closed funding round or confirmed employee share sale · "~" = reported, not confirmed by the company · DeepSeek converted from CNY at ECB rates</span><span class="site">viszlyn.io</span></div>
</div>`;

const css = `
.wrap{position:relative;width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;background:linear-gradient(160deg,#0B1020,#101634 60%,#0A0D1A)}
.title{position:absolute;left:28px;top:16px}
.eb{display:flex;align-items:center;gap:10px;font-size:13.5px;font-weight:800;letter-spacing:2px;color:#B9C0E0}
.v0{display:grid;place-items:center;width:24px;height:24px;border-radius:6px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:15px;letter-spacing:0}
h1{margin:6px 0 0;font-size:50px;line-height:.98;font-weight:900;letter-spacing:-1.5px;text-shadow:0 4px 18px rgba(0,0,0,.6)}
h1 em{font-style:normal;color:#5EEAD4}
.tag{position:absolute;right:28px;top:96px;font-size:14px;font-weight:800;color:#1A0A00;background:#FFB547;padding:6px 12px;border-radius:999px}
.bx{position:absolute;box-sizing:border-box;border-radius:10px;padding:10px 12px;overflow:hidden}
.bx.us{background:linear-gradient(150deg,#1D4ED8,#1E3A8A)}
.bx.cn{background:linear-gradient(150deg,#DC2626,#7F1D1D)}
.bx.openai{background:linear-gradient(150deg,#14B8A6,#0F766E 70%)}
.hd{display:flex;align-items:center;gap:6px}
.rk{font-size:14px;font-weight:900;background:rgba(0,0,0,.45);border-radius:999px;padding:1px 8px}
.fl{width:18px;height:18px;border-radius:50%;border:1.5px solid rgba(255,255,255,.85)}
.nm{font-weight:800;margin-top:4px;line-height:1.05}
.v{font-weight:900;letter-spacing:-1px;line-height:1}
.xl .nm{font-size:44px;margin-top:150px}.xl .v{font-size:120px;letter-spacing:-4px}.xl .rk{font-size:22px;padding:2px 12px}.xl .fl{width:30px;height:30px}
.l .nm{font-size:26px}.l .v{font-size:46px}
.m .nm{font-size:17px}.m .v{font-size:30px}
.s .nm{font-size:13px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.s .v{font-size:21px}.s{padding:7px 9px}.s .rk{font-size:12px;padding:0 6px}.s .fl{width:15px;height:15px}
.foot{position:absolute;left:28px;right:28px;bottom:10px;display:flex;justify-content:space-between;align-items:flex-end;gap:16px;font-size:10.5px;color:#8D93B8}
.site{font-size:15px;font-weight:900;color:#fff;white-space:nowrap}`;

await renderHero({ slug: "most-valuable-ai-companies-2026", css, body });
