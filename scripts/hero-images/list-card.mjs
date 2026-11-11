// Full-ranking card for the in-article hero image (1080x1350, rendered at 2x).
// All rows in large type so the whole ranking reads on a phone without zooming.
// Usage: renderHero({ slug, css, body, page: await listCard({...}) })
import { readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");

async function flagUri(code) {
  const svg = await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${code}.svg`));
  return "data:image/svg+xml;base64," + svg.toString("base64");
}

/**
 * @param {object} o
 * @param {string} o.eyebrow  short line above the title, e.g. "Company-reported revenue · 2025"
 * @param {string} o.title    HTML allowed (<br/>)
 * @param {{rank?: string, name: string, flag?: string, value: string, raw: number}[]} o.rows  best first
 * @param {string} o.source   footer source line
 * @param {string} [o.note]   optional small note under the rows
 */
export async function listCard({ eyebrow, title, rows, source, note }) {
  const max = Math.max(...rows.map((r) => r.raw));
  const BAR = 220;
  const rowHtml = (
    await Promise.all(
      rows.map(async (r, i) => {
        const first = i === 0;
        const flag = r.flag ? `<img class="fl" src="${await flagUri(r.flag)}"/>` : "";
        return `<div class="row${first ? " first" : ""}">
          <span class="rk">${r.rank ?? i + 1}</span>${flag}
          <span class="nm">${r.name}</span>
          <span class="bar" style="width:${Math.max(6, (r.raw / max) * BAR).toFixed(0)}px"></span>
          <span class="val">${r.value}</span>
        </div>`;
      })
    )
  ).join("");

  const body = `
<div class="card">
  <div class="top"><span class="v">V</span><span class="brand">VISZLYN</span></div>
  <div class="eyebrow">${eyebrow}</div>
  <h1>${title}</h1>
  <div class="rows">${rowHtml}</div>
  ${note ? `<div class="note">${note}</div>` : ""}
  <div class="foot"><span>${source}</span><span class="site">viszlyn.io</span></div>
</div>`;

  const css = `
.card{position:relative;width:1080px;height:1350px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden;padding:56px 56px 0;box-sizing:border-box}
.top{display:flex;align-items:center;gap:14px}
.v{display:grid;place-items:center;width:48px;height:48px;border-radius:9px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:30px}
.brand{font-weight:800;font-size:24px;letter-spacing:6px;opacity:.85}
.eyebrow{margin-top:34px;color:#FF5D3A;font-weight:800;font-size:30px;letter-spacing:1px;text-transform:uppercase}
h1{margin:10px 0 0;font-weight:900;font-size:72px;line-height:1.02;letter-spacing:-2px}
.rows{margin-top:36px}
.row{display:flex;align-items:center;gap:16px;height:84px;border-bottom:1px solid rgba(247,245,240,.08)}
.rk{width:52px;text-align:right;font-weight:900;font-size:40px;color:rgba(247,245,240,.75)}
.fl{width:56px;height:42px;border-radius:5px;flex:none}
.nm{width:340px;font-weight:800;font-size:38px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bar{height:36px;border-radius:6px;background:#C9C4B8;flex:none}
.val{font-weight:900;font-size:40px;margin-left:4px;white-space:nowrap}
.first .rk,.first .val,.first .nm{color:#FF5D3A}.first .bar{background:#FF5D3A}
.note{margin-top:18px;font-size:22px;font-weight:600;color:rgba(247,245,240,.6);line-height:1.3}
.foot{position:absolute;left:56px;right:56px;bottom:34px;display:flex;justify-content:space-between;align-items:flex-end;gap:24px;font-size:20px;color:rgba(247,245,240,.55)}
.site{color:#F7F5F0;font-weight:800;font-size:28px;white-space:nowrap}
`;
  return { css, body, width: 1080, height: 1350 };
}
