import Link from "next/link";

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type RankBarProps = {
  rank: number;
  name: string;
  value: string;
  /** 0–100, this item's length relative to the #1 item — used as-is, no artificial minimum */
  widthPercent: number;
  meta?: string;
  /** anchor id (without #) of the matching detailed entry to jump to on click */
  linkTo?: string;
};

export function RankBar({ rank, name, value, widthPercent, meta, linkTo }: RankBarProps) {
  const isFirst = rank === 1;

  const content = (
    <div className="flex items-start gap-3 md:gap-4 py-3 border-b border-stone-light/60 last:border-0">
      <span
        className={`font-display font-semibold text-lg w-7 shrink-0 text-right pt-0.5 ${
          isFirst ? "text-signal" : "text-stone"
        }`}
      >
        {rank}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3 mb-1.5">
          <span className="font-body font-medium text-sm md:text-base text-ink truncate">
            {name}
          </span>
          <span className="font-data text-sm md:text-base shrink-0 tabular-nums text-ink">
            {value}
          </span>
        </div>
        <div className="rank-bar-track">
          <div
            className={`rank-bar-fill ${isFirst ? "is-first" : ""}`}
            style={{ width: `${widthPercent}%` }}
          />
        </div>
        {meta && (
          <div className="mt-1 font-body text-xs text-stone truncate">{meta}</div>
        )}
      </div>
    </div>
  );

  if (linkTo) {
    return (
      <Link
        href={`#${linkTo}`}
        className="block hover:bg-ink/[0.02] -mx-2 px-2 rounded transition-colors cursor-pointer"
        aria-label={`Jump to details for ${name}`}
      >
        {content}
      </Link>
    );
  }

  return content;
}

export function RankList({
  items,
  linkable = false,
}: {
  items: { rank: number; name: string; value: string; raw: number; meta?: string }[];
  /** when true, each row links to a #slug anchor matching the creator's name */
  linkable?: boolean;
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
          linkTo={linkable ? slugify(item.name) : undefined}
        />
      ))}
    </div>
  );
}
