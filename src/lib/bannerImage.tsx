import { ImageResponse } from "next/og";
import { getRankingArticle } from "@/data/rankings";
import { toBannerRows } from "@/lib/bannerData";
import { squarify, tileTier, TIER_FONT, tileFill, isCompact } from "@/lib/treemap";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const BANNER_SIZE = { width: 1200, height: 630 };

const INK = "#0B0E14";
const PAPER = "#F7F5F0";
const SIGNAL = "#FF5D3A";

/** Loads Inter (regular + bold) from @fontsource/inter so the image matches the site. Falls back to the default font if unavailable. */
async function loadFonts() {
  try {
    const dir = path.join(process.cwd(), "node_modules", "@fontsource", "inter", "files");
    const [regular, bold] = await Promise.all([
      readFile(path.join(dir, "inter-latin-400-normal.woff")),
      readFile(path.join(dir, "inter-latin-700-normal.woff")),
    ]);
    return [
      { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
      { name: "Inter", data: bold, weight: 700 as const, style: "normal" as const },
    ];
  } catch {
    return undefined;
  }
}

/** Social-share version of the hero banner (1200x630), used for Open Graph and Twitter cards. */
export async function renderBannerImage(slug: string) {
  const article = getRankingArticle(slug);
  const fonts = await loadFonts();

  if (!article) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: INK,
            color: PAPER,
            fontSize: 64,
            fontWeight: 700,
          }}
        >
          VISZLYN
        </div>
      ),
      BANNER_SIZE
    );
  }

  const rows = toBannerRows(article.chartItems).slice(0, 12);
  const MW = 1088;
  const MH = 392;
  const K = 1.5; // OG canvas is ~1.5x the reference size the tiers were designed for
  const tiles = squarify(
    rows.map((r) => r.pct),
    MW,
    MH
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: INK,
          color: PAPER,
          padding: "40px 56px 30px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: 6,
                background: SIGNAL,
                color: INK,
                fontSize: 22,
                fontWeight: 800,
              }}
            >
              V
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: 12,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 4,
                color: "rgba(247,245,240,0.8)",
              }}
            >
              VISZLYN
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 3,
              color: SIGNAL,
              textTransform: "uppercase",
            }}
          >
            {article.eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            marginBottom: 18,
            fontSize: 44,
            fontWeight: 800,
            lineHeight: 1.08,
          }}
        >
          {article.title}
        </div>

        {/* mosaic */}
        <div style={{ display: "flex", position: "relative", width: MW, height: MH }}>
          {tiles.map((t) => {
            const row = rows[t.index];
            const tier = tileTier(t.w / K, t.h / K);
            const font = TIER_FONT[tier];
            const { bg, fg } = tileFill(t.index, rows.length);
            return (
              <div
                key={row.rank + row.name}
                style={{
                  position: "absolute",
                  display: "flex",
                  left: t.x,
                  top: t.y,
                  width: t.w,
                  height: t.h,
                  padding: 3,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: isCompact(tier) ? "flex-end" : "space-between",
                    width: "100%",
                    height: "100%",
                    background: bg,
                    color: fg,
                    borderRadius: 6,
                    padding: isCompact(tier) ? 8 : 14,
                    overflow: "hidden",
                  }}
                >
                  {!isCompact(tier) && (
                    <div
                      style={{
                        display: "flex",
                        fontSize: 18,
                        fontWeight: 700,
                        opacity: 0.65,
                      }}
                    >
                      {row.rank}
                    </div>
                  )}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "flex",
                        fontSize: font.name * K,
                        fontWeight: 700,
                        lineHeight: 1.1,
                        maxHeight: font.name * K * 2.3,
                        overflow: "hidden",
                      }}
                    >
                      {isCompact(tier) ? `${row.rank}  ${row.name}` : row.name}
                    </div>
                    {tier !== "xs" && (
                      <div
                        style={{
                          display: "flex",
                          marginTop: tier === "xl" ? 10 : 5,
                          fontSize: font.value * K,
                          fontWeight: 700,
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 14,
            fontSize: 16,
            color: "rgba(247,245,240,0.55)",
          }}
        >
          <div style={{ display: "flex" }}>
            Block size shows each value · Source: {article.chartSource}
          </div>
          <div style={{ display: "flex", color: "rgba(247,245,240,0.85)" }}>
            viszlyn.io
          </div>
        </div>
      </div>
    ),
    fonts ? { ...BANNER_SIZE, fonts } : BANNER_SIZE
  );
}
