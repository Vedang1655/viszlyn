"use client";

import { useState } from "react";
import Link from "next/link";
import { RankList, SlimRow, slugify, type RankListItem } from "./RankBar";

/**
 * The article chart. With a comparison year and prevRank values it adds a
 * "Biggest movers" tab: the same slim rows, filtered to economies that changed
 * rank and sorted by size of move. Both views are in the HTML; the tab only
 * toggles which one is visible.
 */
export function RankChart({
  items,
  comparisonLabel,
  currentLabel = "Ranking",
}: {
  items: RankListItem[];
  comparisonLabel?: string;
  currentLabel?: string;
}) {
  const [tab, setTab] = useState<"ranking" | "movers">("ranking");
  const hasComparison = !!comparisonLabel && items.some((i) => i.prevRank !== undefined);

  if (!hasComparison) return <RankList items={items} linkable />;

  const movers = items
    .filter((i) => i.prevRank !== undefined && i.prevRank !== i.rank)
    .sort(
      (a, b) =>
        Math.abs(b.prevRank! - b.rank) - Math.abs(a.prevRank! - a.rank) || a.rank - b.rank
    );

  const tabClass = (on: boolean) =>
    `font-body text-xs md:text-sm px-3 py-1.5 rounded-full border transition-colors ${
      on ? "bg-ink text-paper border-ink" : "border-stone-light text-ink hover:border-ink"
    }`;

  return (
    <div>
      <div role="tablist" aria-label="Chart view" className="flex gap-2 mb-3">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "ranking"}
          className={tabClass(tab === "ranking")}
          onClick={() => setTab("ranking")}
        >
          {currentLabel}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "movers"}
          className={tabClass(tab === "movers")}
          onClick={() => setTab("movers")}
        >
          Biggest movers since {comparisonLabel}
        </button>
      </div>

      <div role="tabpanel" hidden={tab !== "ranking"}>
        <RankList items={items} linkable comparisonLabel={comparisonLabel} />
      </div>

      <div role="tabpanel" hidden={tab !== "movers"}>
        {movers.length === 0 ? (
          <p className="font-body text-sm text-stone py-2">No changes in rank since {comparisonLabel}.</p>
        ) : (
          movers.map((item) => (
            <Link
              key={item.rank + item.name}
              href={`#${slugify(item.name)}`}
              className="block border-b border-stone-light/60 last:border-0 hover:bg-ink/[0.02] -mx-2 px-2 rounded transition-colors"
              aria-label={`Jump to details for ${item.name}`}
            >
              <SlimRow
                rank={item.rank}
                rankLabel={item.rankLabel}
                name={item.name}
                countries={item.countries}
                value={item.value}
                prevRank={item.prevRank}
                comparisonLabel={comparisonLabel}
                trailing={
                  <span className="font-data text-sm md:text-base shrink-0 tabular-nums text-stone">
                    #{item.prevRank} → <span className="text-ink font-semibold">#{item.rankLabel ?? item.rank}</span>
                  </span>
                }
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
