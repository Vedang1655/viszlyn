import Link from "next/link";

type RankingLink = {
  title: string;
  href: string;
  eyebrow?: string;
  dek?: string;
  comingSoon?: boolean;
};

function ComingSoonCard({ item, index }: { item: RankingLink; index: number }) {
  return (
    <div className="flex flex-col gap-2 p-5 rounded-xl border border-stone-light/60 opacity-50 cursor-default">
      <div className="flex items-center justify-between">
        <span className="font-data text-xs text-stone">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-body text-[10px] font-semibold tracking-wide text-stone uppercase border border-stone-light rounded-full px-2 py-0.5">
          Coming Soon
        </span>
      </div>
      <span className="font-display font-semibold text-base text-ink leading-snug">
        {item.title}
      </span>
    </div>
  );
}

export function LatestRankings({ rankings }: { rankings: RankingLink[] }) {
  const [featured, ...rest] = rankings;

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-10 border-t border-stone-light">
      <h2 className="font-display font-semibold text-sm tracking-widest text-stone uppercase mb-5">
        Latest Rankings
      </h2>

      {featured &&
        (featured.comingSoon ? (
          <div className="mb-6">
            <ComingSoonCard item={featured} index={0} />
          </div>
        ) : (
          <Link
            href={featured.href}
            className="group block mb-6 p-6 md:p-8 rounded-2xl bg-ink hover:bg-ink/90 transition-colors"
          >
            <span className="font-body text-[11px] font-semibold tracking-widest text-signal uppercase">
              {featured.eyebrow ?? "Latest"}
            </span>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-paper mt-2 mb-2 leading-[1.15] group-hover:text-signal transition-colors">
              {featured.title}
            </h3>
            {featured.dek && (
              <p className="font-body text-sm md:text-base text-paper/70 max-w-2xl">
                {featured.dek}
              </p>
            )}
          </Link>
        ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rest.map((item, i) =>
          item.comingSoon ? (
            <ComingSoonCard key={item.href} item={item} index={i + 1} />
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-2 p-5 rounded-xl border border-stone-light/60 hover:border-signal/40 hover:bg-ink/[0.02] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-data text-xs text-stone">
                  {String(i + 2).padStart(2, "0")}
                </span>
                {item.eyebrow && (
                  <span className="font-body text-[10px] font-semibold tracking-widest text-signal uppercase">
                    {item.eyebrow}
                  </span>
                )}
              </div>
              <span className="font-display font-semibold text-base text-ink leading-snug group-hover:text-signal transition-colors">
                {item.title}
              </span>
              {item.dek && (
                <p className="font-body text-sm text-stone line-clamp-2">
                  {item.dek}
                </p>
              )}
            </Link>
          )
        )}
      </div>
    </section>
  );
}
