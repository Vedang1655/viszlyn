import { RankList } from "./RankBar";
import { RankEntry } from "./RankEntry";
import { ChartHeader } from "./ChartHeader";

type DetailedEntry = {
  rank: number;
  name: string;
  earnings: string;
  category: string;
  revenueSources: string;
};

type FeaturedStoryProps = {
  eyebrow: string;
  title: string;
  items: { rank: number; name: string; value: string; raw: number }[];
  detailedEntries: DetailedEntry[];
};

export function FeaturedStory({
  eyebrow,
  title,
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
        <ChartHeader
          title="Estimated Creator Earnings — 2026 · USD millions"
          source="Forbes"
        />
        <RankList items={items} linkable />
      </div>

      <div className="max-w-3xl mt-2">
        {detailedEntries.map((entry) => (
          <RankEntry key={entry.rank} {...entry} />
        ))}
      </div>
    </section>
  );
}
