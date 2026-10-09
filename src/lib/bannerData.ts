import type { ChartItem } from "@/data/rankings/types";

export type BannerRow = {
  rank: string;
  name: string;
  value: string;
  /** 0–100, bar length relative to the #1 row (no artificial minimum) */
  pct: number;
};

/** Tied groups list their first two names and "+N" for the rest, so labels stay short. */
function rowName(i: ChartItem): string {
  if (!i.countries || i.countries.length === 0) return i.name;
  const names = i.countries.map((c) => c.name);
  if (names.length <= 2) return names.join(" / ");
  return `${names[0]} / ${names[1]} +${names.length - 2}`;
}

/** Turns an article's chart items into the rows the hero banner draws. Shared by the on-page banner and the social image. */
export function toBannerRows(items: ChartItem[]): BannerRow[] {
  const max = Math.max(...items.map((i) => i.raw));
  return items.map((i) => ({
    rank: i.rankLabel ?? String(i.rank),
    name: rowName(i),
    value: i.value,
    pct: (i.raw / max) * 100,
  }));
}
