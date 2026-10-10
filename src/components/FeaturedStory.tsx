import Link from "next/link";
import { RankList } from "./RankBar";
import { RankEntry } from "./RankEntry";
import { ChartHeader } from "./ChartHeader";
import type { ChartItem, DetailedEntry } from "@/data/rankings/types";

type FeaturedStoryProps = {
  eyebrow: string;
  title: string;
  chartTitle: string;
  chartSource: string;
  entryValueLabel?: string;
  href?: string;
  items: ChartItem[];
  detailedEntries: DetailedEntry[];
};

export function FeaturedStory({
  eyebrow,
  title,
  chartTitle,
  chartSource,
  entryValueLabel,
  href,
  items,
  detailedEntries,
}: FeaturedStoryProps) {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-4">
      <span className="font-body text-xs font-semibold tracking-widest text-signal uppercase">
        {eyebrow}
      </span>
      <h1 className="font-display font-bold text-3xl md:text-5xl text-ink mt-2 mb-8 max-w-3xl leading-[1.1]">
        {title}
      </h1>

      <div className="bg-ink/[0.02] border border-stone-light rounded-lg p-5 md:p-8">
        <ChartHeader title={chartTitle} source={chartSource} />
        <RankList items={items} linkable />
      </div>

      <div className="max-w-3xl mt-2">
        {detailedEntries.map((entry) => (
          <RankEntry
            key={entry.rank}
            {...entry}
            earningsLabel={entryValueLabel}
          />
        ))}
      </div>

      {href && (
        <p className="max-w-3xl mt-4">
          <Link
            href={href}
            className="font-body text-sm font-semibold text-signal underline underline-offset-2"
          >
            Read the full article with methodology and FAQ
          </Link>
        </p>
      )}
    </section>
  );
}
