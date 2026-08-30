type RankEntryProps = {
  rank: number;
  name: string;
  earnings: string;
  category: string;
  revenueSources: string;
};

export function RankEntry({
  rank,
  name,
  earnings,
  category,
  revenueSources,
}: RankEntryProps) {
  const isFirst = rank === 1;

  return (
    <div className="flex gap-4 py-5 border-b border-stone-light/60 last:border-0">
      <span
        className={`font-display font-bold text-2xl w-10 shrink-0 ${
          isFirst ? "text-signal" : "text-stone-light"
        }`}
      >
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-semibold text-lg text-ink">{name}</h3>
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
      </div>
    </div>
  );
}
