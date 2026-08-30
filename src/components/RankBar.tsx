type RankBarProps = {
  rank: number;
  name: string;
  value: string;
  /** 0–100, this item's length relative to the #1 item */
  widthPercent: number;
  meta?: string;
};

export function RankBar({ rank, name, value, widthPercent, meta }: RankBarProps) {
  const isFirst = rank === 1;

  return (
    <div className="flex items-center gap-4 py-2.5 border-b border-stone-light/60 last:border-0">
      <span
        className={`font-display font-semibold text-lg w-7 shrink-0 text-right ${
          isFirst ? "text-signal" : "text-stone"
        }`}
      >
        {rank}
      </span>

      <div className="flex-1 min-w-0">
        <div className="rank-bar-track">
          <div
            className={`rank-bar-fill ${isFirst ? "is-first" : ""} flex items-center justify-between px-3`}
            style={{ width: `${Math.max(widthPercent, 14)}%` }}
          >
            <span className="font-body font-medium text-sm text-paper truncate">
              {name}
            </span>
          </div>
        </div>
        {meta && (
          <div className="mt-1 font-body text-xs text-stone truncate">{meta}</div>
        )}
      </div>

      <span className="font-data text-sm md:text-base w-24 shrink-0 text-right tabular-nums">
        {value}
      </span>
    </div>
  );
}

export function RankList({
  items,
}: {
  items: { rank: number; name: string; value: string; raw: number; meta?: string }[];
}) {
  const max = Math.max(...items.map((i) => i.raw));

  return (
    <div>
      {items.map((item) => (
        <RankBar
          key={item.rank}
          rank={item.rank}
          name={item.name}
          value={item.value}
          meta={item.meta}
          widthPercent={(item.raw / max) * 100}
        />
      ))}
    </div>
  );
}
