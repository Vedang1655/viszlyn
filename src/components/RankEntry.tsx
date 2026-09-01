import { slugify } from "./RankBar";

type RankEntryProps = {
  rank: number;
  name: string;
  earnings: string;
  category: string;
  revenueSources: string;
  origin?: string;
  blurb?: string;
  standoutFact?: string;
};

export function RankEntry({
  rank,
  name,
  earnings,
  category,
  revenueSources,
  origin,
  blurb,
  standoutFact,
}: RankEntryProps) {
  const isFirst = rank === 1;

  return (
    <div
      id={slugify(name)}
      className="flex gap-4 py-5 border-b border-stone-light/60 last:border-0 scroll-mt-20"
    >
      <span
        className={`font-display font-bold text-2xl w-10 shrink-0 ${
          isFirst ? "text-signal" : "text-stone-light"
        }`}
      >
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="font-display font-semibold text-lg text-ink">{name}</h3>
          {origin && (
            <span className="font-body text-xs text-stone">{origin}</span>
          )}
        </div>
        <dl className="mt-1.5 flex flex-col gap-1">
          <div className="flex gap-2 text-sm">
            <dt className="font-body font-medium text-ink shrink-0">
              Estimated earnings:
            </dt>
            <dd className="font-data text-ink">{earnings}</dd>
          </div>
          <div className="flex gap-2 text-sm">
            <dt className="font-body font-medium text-ink shrink-0">Category:</dt>
            <dd className="font-body text-stone">{category}</dd>
          </div>
          <div className="flex gap-2 text-sm">
            <dt className="font-body font-medium text-ink shrink-0">
              Revenue sources:
            </dt>
            <dd className="font-body text-stone">{revenueSources}</dd>
          </div>
        </dl>

        {blurb && (
          <p className="font-body text-sm text-ink/80 leading-relaxed mt-3">
            {blurb}
          </p>
        )}

        {standoutFact && (
          <div className="mt-3 border-l-2 border-signal pl-3">
            <p className="font-body text-sm text-stone leading-relaxed">
              {standoutFact}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
