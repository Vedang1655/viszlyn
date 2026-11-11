import { RankEntry, RankEntryBody } from "./RankEntry";
import { SlimRow, slugify } from "./RankBar";
import { OpenEntryOnHash } from "./OpenEntryOnHash";
import type { ChartItem, DetailedEntry } from "@/data/rankings/types";

/**
 * Detailed entries. The top `openCount` render in full; the rest are native
 * <details> rows whose header is the same SlimRow the chart uses.
 *
 * SEO: collapsed entries are server-rendered into the HTML and only visually
 * collapsed by <details>. Never switch this to fetching or rendering the text
 * on tap — Google indexes content that is in the DOM on load, not content that
 * appears only after an interaction.
 */
export function RankEntryList({
  entries,
  chartItems,
  openCount,
  earningsLabel,
  comparisonLabel,
}: {
  entries: DetailedEntry[];
  chartItems: ChartItem[];
  openCount?: number;
  earningsLabel?: string;
  comparisonLabel?: string;
}) {
  const prevRankOf = new Map(chartItems.map((c) => [c.name, c.prevRank]));
  // Short rankings (10 entries or fewer) show everything open; longer ones collapse after the top 3
  // unless the article sets its own openEntries.
  const openUpTo = openCount ?? (entries.length <= 10 ? Infinity : 3);

  return (
    <div>
      <OpenEntryOnHash />
      {entries.map((entry) => {
        if (entry.rank <= openUpTo) {
          return <RankEntry key={entry.rank + entry.name} {...entry} earningsLabel={earningsLabel} />;
        }
        const prevRank = comparisonLabel ? prevRankOf.get(entry.name) : undefined;
        return (
          <details
            key={entry.rank + entry.name}
            id={slugify(entry.name)}
            className="rank-acc border-b border-stone-light/60 scroll-mt-20"
          >
            <summary className="hover:bg-ink/[0.02] -mx-2 px-2 rounded transition-colors">
              <SlimRow
                rank={entry.rank}
                rankLabel={entry.rankLabel}
                name={entry.name}
                countries={entry.countries}
                value={entry.earnings}
                prevRank={prevRank}
                comparisonLabel={comparisonLabel}
                after={
                  <span
                    aria-hidden="true"
                    className="rank-acc-chev text-stone text-xs w-3 shrink-0 transition-transform"
                  >
                    ▶
                  </span>
                }
              />
            </summary>
            <div className="pl-11 pb-4">
              <RankEntryBody {...entry} earningsLabel={earningsLabel} />
              {entry.wikipediaUrl && !entry.countries?.length && (
                <p className="mt-3">
                  <a
                    href={entry.wikipediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs text-stone underline decoration-stone-light underline-offset-2 hover:text-signal"
                  >
                    More about {entry.name} on Wikipedia ↗
                  </a>
                </p>
              )}
            </div>
          </details>
        );
      })}
    </div>
  );
}
