// Reusable Discover/share image (1200x630): big title on the left, the FULL ranking on the right,
// each item drawn as a picture (chip, flag or plain block) with area proportional to its value.
// Usage:
//   const { css, body } = await sizedGrid({ eyebrow, title, sub, foot, shape: "flag" | "chip" | "box",
//     rows: [[...first row items], [...second row items]] });
//   await renderHero({ slug, css, body });
// Item: { rank, name, label, raw, flag? }  (flag = flag-icons code, used when shape === "flag")
import { readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const flagUri = async (c) =>
  "data:image/svg+xml;base64," +
  (await readFile(path.join(ROOT, `node_modules/flag-icons/flags/4x3/${c}.svg`))).toString("base64");

export async function sizedGrid({ eyebrow, title, sub, foot, shape = "box", rows, maxSide = 180 }) {
  const all = rows.flat();
  const max = Math.max(...all.map((r) => r.raw));
  const side = (v) => Math.max(34, Math.round(maxSide * Math.sqrt(v / max)));

  const item = async (r) => {
    const s = side(r.raw);
    const first = r.raw === max;
    let pic;
    if (shape === "flag" && r.flag) {
      pic = `<img class="flag" src="${await flagUri(r.flag)}" style="width:${s}px;height:${Math.round((s * 3) / 4)}px"/>`;
    } else if (shape === "chip") {
      pic = `<div class="chip${first ? " o" : ""}" style="width:${s}px;height:${s}px"><i class="p t"></i><i class="p b"></i><i class="p l"></i><i class="p r"></i><i class="die"></i></div>`;
    } else {
      pic = `<div class="box${first ? " o" : ""}" style="width:${s}px;height:${s}px"></div>`;
    }
    const big = s >= 100;
    return `<div class="it">
      ${pic}
      <div class="lab${big ? " big" : ""}${first ? " o" : ""}"><b>${r.rank}</b> ${r.name}</div>
      <div class="val${big ? " big" : ""}${first ? " o" : ""}">${r.label}</div>
    </div>`;
  };

  const rowHtml = (
    await Promise.all(rows.map(async (row) => `<div class="row">${(await Promise.all(row.map(item))).join("")}</div>`))
  ).join("");

  const body = `
<div class="wrap">
  <div class="left">
    <div class="eyebrow"><span class="v">V</span>${eyebrow}</div>
    <h1>${title}</h1>
    ${sub ? `<div class="sub">${sub}</div>` : ""}
  </div>
  <div class="grid">${rowHtml}</div>
  <div class="foot"><span>${foot}</span><span class="site">viszlyn.io</span></div>
</div>`;

  const pin = (cls, horiz) =>
    `.chip .p.${cls}{position:absolute;${
      { t: "top", b: "bottom", l: "left", r: "right" }[cls]
    }:-9px;${horiz ? "left:14%;right:14%;height:9px" : "top:14%;bottom:14%;width:9px"};background:repeating-linear-gradient(${
      horiz ? "90deg" : "0deg"
    },#C9B37E 0 5px,transparent 5px 12px)}`;

  const css = `
.wrap{position:relative;width:1200px;height:630px;background:#0B0E14;color:#F7F5F0;font-family:Inter;overflow:hidden}
.left{position:absolute;left:52px;top:46px;width:390px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#FF5D3A;font-weight:800;font-size:24px;letter-spacing:2px;text-transform:uppercase}
.v{display:grid;place-items:center;width:38px;height:38px;border-radius:8px;background:#FF5D3A;color:#0B0E14;font-weight:900;font-size:24px;letter-spacing:0}
h1{margin:20px 0 0;font-weight:900;font-size:62px;line-height:.98;letter-spacing:-2px}
.sub{margin-top:24px;font-weight:800;font-size:27px;line-height:1.2;color:#FF5D3A}
.grid{position:absolute;left:450px;right:24px;top:34px;bottom:62px;display:flex;flex-direction:column;justify-content:space-evenly}
.row{display:flex;align-items:flex-end;justify-content:space-around;gap:10px}
.it{display:flex;flex-direction:column;align-items:center;text-align:center}
.flag{border-radius:6px;box-shadow:0 8px 22px rgba(0,0,0,.5)}
.box{position:relative;border-radius:10px;background:#D8D3C6}.box.o{background:#FF5D3A}
/* Chip: dark package, blue circuit traces, glowing inner die */
.chip{--c:#3FA9FF;--cg:rgba(63,169,255,.55);position:relative;border-radius:10px;
  background:
    repeating-linear-gradient(90deg,transparent 0 13px,rgba(63,169,255,.22) 13px 14px),
    repeating-linear-gradient(0deg,transparent 0 17px,rgba(63,169,255,.16) 17px 18px),
    linear-gradient(145deg,#1B2740,#0F1626);
  border:2px solid var(--c);box-shadow:0 0 18px var(--cg),inset 0 0 14px rgba(63,169,255,.25)}
.chip.o{--c:#FF5D3A;--cg:rgba(255,93,58,.6);
  background:
    repeating-linear-gradient(90deg,transparent 0 13px,rgba(255,93,58,.26) 13px 14px),
    repeating-linear-gradient(0deg,transparent 0 17px,rgba(255,93,58,.18) 17px 18px),
    linear-gradient(145deg,#2A1A18,#160E0D)}
.chip .die{position:absolute;inset:24%;border-radius:6px;border:2px solid var(--c);
  background:
    repeating-linear-gradient(45deg,transparent 0 6px,rgba(255,255,255,.07) 6px 7px),
    linear-gradient(145deg,rgba(255,255,255,.14),rgba(255,255,255,.03));
  box-shadow:0 0 12px var(--cg),inset 0 0 10px var(--cg)}
.chip .die::before,.chip .die::after{content:"";position:absolute;background:var(--c);opacity:.9}
.chip .die::before{left:-24%;right:-24%;top:50%;height:2px;transform:translateY(-1px);opacity:.5}
.chip .die::after{top:-24%;bottom:-24%;left:50%;width:2px;transform:translateX(-1px);opacity:.5}
${pin("t", true)}${pin("b", true)}${pin("l", false)}${pin("r", false)}
.lab{margin-top:12px;font-weight:800;font-size:17px;white-space:nowrap;color:rgba(247,245,240,.9)}
.lab b{color:rgba(247,245,240,.55)}
.val{font-weight:900;font-size:20px;white-space:nowrap}
.lab.big{font-size:22px}.val.big{font-size:30px}
.lab.o,.val.o,.lab.o b{color:#FF5D3A}
.foot{position:absolute;left:52px;right:52px;bottom:22px;display:flex;justify-content:space-between;font-size:16px;color:rgba(247,245,240,.55)}
.site{color:#F7F5F0;font-weight:800;font-size:22px}
`;
  return { css, body };
}
