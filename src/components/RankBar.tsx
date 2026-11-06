import Link from "next/link";
import { CountryFlag } from "@/data/rankings/types";

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function FlagChip({ code }: { code: string }) {
  return (
    <span
      className={`fi fi-${code} rounded-[2px] shrink-0`}
      style={{ width: "20px", height: "14px" }}
      aria-hidden="true"
    />
  );
}

/** ▲2 / ▼5 / – compared with the article's comparison year. Renders nothing without a previous rank. */
export function RankChangeBadge({
  rank,
  prevRank,
  comparisonLabel,
}: {
  rank: number;
  prevRank?: number;
  comparisonLabel?: string;
}) {
  if (prevRank === undefined) return null;
  const change = prevRank - rank;
  const vs = comparisonLabel ? ` from ${comparisonLabel}` : "";
  if (change > 0)
    return (
      <span className="rank-change is-up" title={`Up ${change}${vs} (was #${prevRank})`}>
        <span aria-hidden="true">▲</span>
        {change}
        <span className="sr-only"> places up{vs}</span>
      </span>
    );
  if (change < 0)
    return (
      <span className="rank-change is-down" title={`Down ${-change}${vs} (was #${prevRank})`}>
        <span aria-hidden="true">▼</span>
        {-change}
        <span className="sr-only"> places down{vs}</span>
      </span>
    );
  return (
    <span className="rank-change is-same" title={`No change${vs}`}>
      <span aria-hidden="true">–</span>
      <span className="sr-only">no change{vs}</span>
    </span>
  );
}

/** Name, or flags + names for a tied group. */
export function RankName({
  name,
  countries,
  className = "",
}: {
  name: string;
  countries?: CountryFlag[];
  className?: string;
}) {
  if (countries && countries.length > 0) {
    return (
      <span className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 min-w-0 ${className}`}>
        {countries.map((c) => (
          <span key={c.flagCode} className="inline-flex items-center gap-1">
            <FlagChip code={c.flagCode} />
            <span>{c.name}</span>
          </span>
        ))}
      </span>
    );
  }
  return <span className={`truncate min-w-0 ${className}`}>{name}</span>;
}

type SlimRowProps = {
  rank: number;
  name: string;
  value: string;
  rankLabel?: string;
  countries?: CountryFlag[];
  prevRank?: number;
  comparisonLabel?: string;
  /** 0–100 relative to #1; omit for a row without a bar (e.g. accordion headers) */
  widthPercent?: number;
  meta?: string;
  /** Replaces the value column (e.g. "#8 → #13" in the movers view) */
  trailing?: React.ReactNode;
  /** Extra element at the far right (e.g. the accordion chevron) */
  after?: React.ReactNode;
};

/** The one slim row used by the chart, the movers view and the collapsed entry headers. */
export function SlimRow({
  rank,
  name,
  value,
  rankLabel,
  countries,
  prevRank,
  comparisonLabel,
  widthPercent,
  meta,
  trailing,
  after,
}: SlimRowProps) {
  const isFirst = rank === 1;
  return (
    <div className="flex items-start gap-3 py-2">
      <span
        className={`font-display font-semibold text-base w-8 shrink-0 text-right leading-6 ${
          isFirst ? "text-signal" : "text-ink"
        }`}
      >
        {rankLabel ?? rank}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 min-h-6">
          <RankName
            name={name}
            countries={countries}
            className="flex-1 font-body font-medium text-sm md:text-base text-ink"
          />
          <RankChangeBadge rank={rank} prevRank={prevRank} comparisonLabel={comparisonLabel} />
          {trailing ?? (
            <span className="font-data text-sm md:text-base shrink-0 tabular-nums text-ink">{value}</span>
          )}
          {after}
        </div>
        {widthPercent !== undefined && (
          <div className="rank-bar-track mt-1">
            <div
              className={`rank-bar-fill ${isFirst ? "is-first" : ""}`}
              style={{ width: `${widthPercent}%` }}
            />
          </div>
        )}
        {meta && <div className="mt-1 font-body text-xs text-stone truncate">{meta}</div>}
      </div>
    </div>
  );
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
  rankLabel?: string;
  countries?: CountryFlag[];
  prevRank?: number;
  comparisonLabel?: string;
};

export function RankBar({ linkTo, name, ...rest }: RankBarProps) {
  const content = <SlimRow name={name} {...rest} />;

  if (linkTo) {
    return (
      <Link
        href={`#${linkTo}`}
        className="block border-b border-stone-light/60 last:border-0 hover:bg-ink/[0.02] -mx-2 px-2 rounded transition-colors cursor-pointer"
        aria-label={`Jump to details for ${name}`}
      >
        {content}
      </Link>
    );
  }

  return <div className="border-b border-stone-light/60 last:border-0">{content}</div>;
}

export type RankListItem = {
  rank: number;
  name: string;
  value: string;
  raw: number;
  meta?: string;
  rankLabel?: string;
  countries?: CountryFlag[];
  prevRank?: number;
};

export function RankList({
  items,
  linkable = false,
  comparisonLabel,
}: {
  items: RankListItem[];
  /** when true, each row links to a #slug anchor matching the item's name */
  linkable?: boolean;
  comparisonLabel?: string;
}) {
  const max = Math.max(...items.map((i) => i.raw));

  return (
    <div>
      {items.map((item) => (
        <RankBar
          key={item.rank + item.name}
          rank={item.rank}
          name={item.name}
          value={item.value}
          meta={item.meta}
          widthPercent={(item.raw / max) * 100}
          linkTo={linkable ? slugify(item.name) : undefined}
          rankLabel={item.rankLabel}
          countries={item.countries}
          prevRank={item.prevRank}
          comparisonLabel={comparisonLabel}
        />
      ))}
    </div>
  );
}
