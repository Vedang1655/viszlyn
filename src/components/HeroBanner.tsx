import { toBannerRows } from "@/lib/bannerData";
import { squarify, tileTier, TIER_FONT, tileFill, isCompact } from "@/lib/treemap";
import type { ChartItem } from "@/data/rankings/types";

// Reference size the mosaic is laid out at; text scales with the container width.
const REF_W = 520;
const REF_H = 400;
const GAP = 3;

type HeroBannerProps = {
  eyebrow: string;
  title: string;
  items: ChartItem[];
  source: string;
};

/**
 * The whole ranking as one block mosaic: each block's area is proportional to its value.
 * Driven entirely by the article's existing chart data, so every new article gets one for free.
 */
export function HeroBanner({ eyebrow, title, items, source }: HeroBannerProps) {
  const rows = toBannerRows(items);
  const tiles = squarify(
    rows.map((r) => r.pct),
    REF_W,
    REF_H
  );
  const cq = (px: number) => `${((px / REF_W) * 100).toFixed(3)}cqw`;

  return (
    <figure
      className="bg-ink text-paper rounded-xl overflow-hidden p-5 md:p-8 m-0"
      aria-label={`${title}: block chart where each block's area shows its value`}
    >
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-6 h-6 rounded-[4px] bg-signal font-display font-bold text-sm text-ink">
            V
          </span>
          <span className="font-display font-semibold text-xs tracking-[0.2em] text-paper/80">
            VISZLYN
          </span>
        </div>
        <span className="font-body text-[11px] font-semibold tracking-widest uppercase text-signal">
          {eyebrow}
        </span>
      </div>

      <div className="font-display font-bold text-2xl md:text-4xl leading-[1.1] text-paper max-w-[26ch] mb-5 md:mb-6">
        {title}
      </div>

      {/* The mosaic */}
      <div
        className="relative w-full"
        style={{ containerType: "inline-size", aspectRatio: `${REF_W} / ${REF_H}` }}
      >
        {tiles.map((t) => {
          const row = rows[t.index];
          const tier = tileTier(t.w, t.h);
          const font = TIER_FONT[tier];
          const { bg, fg } = tileFill(t.index, rows.length);
          const isFirst = t.index === 0;
          return (
            <div
              key={`${row.rank}-${row.name}`}
              className="absolute"
              style={{
                left: `${(t.x / REF_W) * 100}%`,
                top: `${(t.y / REF_H) * 100}%`,
                width: `${(t.w / REF_W) * 100}%`,
                height: `${(t.h / REF_H) * 100}%`,
                padding: cq(GAP / 2),
              }}
            >
              <div
                className={`w-full h-full overflow-hidden flex flex-col ${
                  isCompact(tier) ? "justify-end" : "justify-between"
                }`}
                style={{
                  background: bg,
                  color: fg,
                  borderRadius: cq(4),
                  padding: cq(isCompact(tier) ? 5 : 9),
                }}
              >
                {!isCompact(tier) && (
                  <span
                    className="font-display font-semibold leading-none"
                    style={{ fontSize: cq(12), opacity: isFirst ? 0.85 : 0.6 }}
                  >
                    {row.rank}
                  </span>
                )}
                <div className="min-w-0">
                  <div
                    className="font-body font-semibold leading-[1.1]"
                    style={{
                      fontSize: cq(font.name),
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {isCompact(tier) && (
                      <span style={{ opacity: 0.6, marginRight: cq(4) }}>{row.rank}</span>
                    )}
                    {row.name}
                  </div>
                  {tier !== "xs" && (
                    <div
                      className="font-data tabular-nums leading-none"
                      style={{
                        fontSize: cq(font.value),
                        marginTop: cq(tier === "xl" ? 8 : 4),
                        opacity: isFirst ? 1 : 0.9,
                      }}
                    >
                      {row.value}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <figcaption className="mt-4 md:mt-5 pt-4 border-t border-paper/15 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-data text-[10px] md:text-[11px] text-paper/55">
        <span>Block size shows each value · Source: {source}</span>
        <span className="text-paper/80">viszlyn.io</span>
      </figcaption>
    </figure>
  );
}
