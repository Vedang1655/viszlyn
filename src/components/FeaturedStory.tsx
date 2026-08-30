import Link from "next/link";
import { RankList } from "./RankBar";

type FeaturedStoryProps = {
  eyebrow: string;
  title: string;
  href: string;
  items: { rank: number; name: string; value: string; raw: number }[];
};

export function FeaturedStory({ eyebrow, title, href, items }: FeaturedStoryProps) {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-4">
      <span className="font-body text-xs font-semibold tracking-widest text-signal uppercase">
        {eyebrow}
      </span>
      <h1 className="font-display font-bold text-3xl md:text-5xl text-ink mt-2 mb-8 max-w-3xl leading-[1.1]">
        {title}
      </h1>

      <div className="bg-ink/[0.02] border border-stone-light rounded-lg p-5 md:p-8">
        <RankList items={items} />
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 mt-5 font-body font-medium text-sm text-ink hover:text-signal transition-colors group"
      >
        Explore the full ranking
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
    </section>
  );
}
