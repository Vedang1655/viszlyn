export type Tile = { index: number; x: number; y: number; w: number; h: number };

/**
 * Squarified treemap: lays out `values` (any positive numbers, ideally sorted high to low)
 * as rectangles filling a W x H box, each with area proportional to its value.
 */
export function squarify(values: number[], W: number, H: number): Tile[] {
  const total = values.reduce((a, b) => a + b, 0);
  const areas = values.map((v) => (v / total) * W * H);
  const tiles: Tile[] = [];

  let x = 0;
  let y = 0;
  let w = W;
  let h = H;
  let i = 0;

  const worst = (row: number[], side: number) => {
    const s = row.reduce((a, b) => a + b, 0);
    const max = Math.max(...row);
    const min = Math.min(...row);
    return Math.max((side * side * max) / (s * s), (s * s) / (side * side * min));
  };

  while (i < areas.length) {
    const side = Math.min(w, h);
    const row: number[] = [];
    let j = i;
    while (j < areas.length) {
      const next = [...row, areas[j]];
      if (row.length === 0 || worst(next, side) <= worst(row, side)) {
        row.push(areas[j]);
        j++;
      } else break;
    }
    const rowArea = row.reduce((a, b) => a + b, 0);
    if (w >= h) {
      // lay the row as a column on the left
      const colW = rowArea / h;
      let cy = y;
      row.forEach((a, k) => {
        const th = a / colW;
        tiles.push({ index: i + k, x, y: cy, w: colW, h: th });
        cy += th;
      });
      x += colW;
      w -= colW;
    } else {
      // lay the row along the top
      const rowH = rowArea / w;
      let cx = x;
      row.forEach((a, k) => {
        const tw = a / rowH;
        tiles.push({ index: i + k, x: cx, y, w: tw, h: rowH });
        cx += tw;
      });
      y += rowH;
      h -= rowH;
    }
    i = j;
  }
  return tiles;
}

export type Tier = "xl" | "lg" | "md" | "sm" | "xs";

/** How much text a tile can hold, from its size in reference pixels. */
export function tileTier(w: number, h: number): Tier {
  if (w >= 200 && h >= 130) return "xl";
  if (w >= 120 && h >= 88) return "lg";
  if (w >= 96 && h >= 70) return "md";
  if (w >= 56 && h >= 36) return "sm";
  return "xs";
}

/** Text sizes (reference px) per tier: [name, value]. */
export const TIER_FONT: Record<Tier, { name: number; value: number }> = {
  xl: { name: 26, value: 44 },
  lg: { name: 17, value: 24 },
  md: { name: 12.5, value: 15 },
  sm: { name: 10.5, value: 11 },
  xs: { name: 9.5, value: 0 },
};

/** Compact tiles put the rank inline with the name instead of in its own row. */
export const isCompact = (t: Tier) => t === "sm" || t === "xs";

/** Tile fill: #1 is the signal color, the rest step down in strength. */
export function tileFill(rankIndex: number, total: number): { bg: string; fg: string } {
  if (rankIndex === 0) return { bg: "#FF5D3A", fg: "#0B0E14" };
  const t = rankIndex / Math.max(1, total - 1); // 0..1
  const alpha = 0.26 - t * 0.17; // 0.26 -> 0.09
  return { bg: `rgba(247,245,240,${alpha.toFixed(3)})`, fg: "#F7F5F0" };
}
