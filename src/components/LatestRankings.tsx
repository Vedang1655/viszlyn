import Link from "next/link";

type RankingLink = {
  title: string;
  href: string;
};

export function LatestRankings({ rankings }: { rankings: RankingLink[] }) {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-10 border-t border-stone-light">
      <h2 className="font-display font-semibold text-sm tracking-widest text-stone uppercase mb-5">
        Latest Rankings
      </h2>
      <ol className="flex flex-col">
        {rankings.map((item, i) => (
          <li key={item.href} className="border-b border-stone-light/60 last:border-0">
            <Link
              href={item.href}
              className="flex items-center gap-4 py-3.5 group"
            >
              <span className="font-data text-sm text-stone w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-body font-medium text-ink group-hover:text-signal transition-colors">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
