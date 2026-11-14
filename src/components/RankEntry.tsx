import { slugify } from "./RankBar";
import { CountryFlag, EntryImage } from "@/data/rankings/types";

export type RankEntryProps = {
  rank: number;
  name: string;
  earnings: string;
  earningsLabel?: string;
  category: string;
  revenueSources?: string;
  origin?: string;
  blurb?: string;
  standoutFact?: string;
  sourceTag?: string;
  wikipediaUrl?: string;
  rankLabel?: string;
  countries?: CountryFlag[];
  image?: EntryImage;
};

export function RankEntry({
  rank,
  name,
  earnings,
  earningsLabel = "Estimated earnings:",
  category,
  revenueSources,
  origin,
  blurb,
  standoutFact,
  sourceTag,
  wikipediaUrl,
  rankLabel,
  countries,
  image,
}: RankEntryProps) {
  const isFirst = rank === 1;

  return (
    <div
      id={slugify(name)}
      className="flex gap-4 py-5 border-b border-stone-light/60 last:border-0 scroll-mt-20"
    >
      <span
        className={`font-display font-bold text-2xl w-9 md:w-12 shrink-0 ${
          isFirst ? "text-signal" : "text-ink"
        }`}
      >
        {rankLabel ?? rank}
      </span>
      <div className="flex-1 min-w-0">
        {countries && countries.length > 0 ? (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-1">
            {countries.map((c) => (
              <span key={c.flagCode} className="inline-flex items-center gap-1.5">
                <span
                  className={`fi fi-${c.flagCode} rounded-[2px] shrink-0`}
                  style={{ width: "20px", height: "14px" }}
                  aria-hidden="true"
                />
                <span className="font-display font-semibold text-base text-ink">{c.name}</span>
              </span>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-baseline gap-x-2">
            {wikipediaUrl ? (
              <a
                href={wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-lg text-ink hover:text-signal transition-colors underline decoration-stone-light underline-offset-2"
              >
                {name}
              </a>
            ) : (
              <h3 className="font-display font-semibold text-lg text-ink">{name}</h3>
            )}
            {origin && (
              <span className="font-body text-xs text-stone">{origin}</span>
            )}
          </div>
        )}
        <RankEntryBody
          earnings={earnings}
          earningsLabel={earningsLabel}
          category={category}
          revenueSources={revenueSources}
          blurb={blurb}
          standoutFact={standoutFact}
          sourceTag={sourceTag}
          image={image}
        />
      </div>
    </div>
  );
}

/** Value, category, blurb and standout: shared by open entries and collapsed (accordion) entries. */
export function RankEntryBody({
  earnings,
  earningsLabel = "Estimated earnings:",
  category,
  revenueSources,
  blurb,
  standoutFact,
  sourceTag,
  image,
}: Pick<
  RankEntryProps,
  "earnings" | "earningsLabel" | "category" | "revenueSources" | "blurb" | "standoutFact" | "sourceTag" | "image"
>) {
  return (
    <>
        {image && <EntryPhoto image={image} />}
        <dl className="mt-1.5 flex flex-col gap-1">
          <div className="flex flex-wrap items-baseline gap-x-2 text-sm">
            <dt className="font-body font-medium text-ink shrink-0">
              {earningsLabel}
            </dt>
            <dd className="font-data text-ink whitespace-nowrap">{earnings}</dd>
          </div>
          <div className="flex gap-2 text-sm">
            <dt className="font-body font-medium text-ink shrink-0">Category:</dt>
            <dd className="font-body text-stone">{category}</dd>
          </div>
          {revenueSources && (
            <div className="flex gap-2 text-sm">
              <dt className="font-body font-medium text-ink shrink-0">
                Revenue sources:
              </dt>
              <dd className="font-body text-stone">{revenueSources}</dd>
            </div>
          )}
        </dl>

        {blurb && (
          <p className="font-body text-sm text-ink-soft leading-relaxed mt-3">
            {blurb}
          </p>
        )}

        {standoutFact && (
          <div className="mt-3 border-l-2 border-signal pl-3">
            <p className="font-body text-sm text-stone leading-relaxed">
              {standoutFact}
            </p>
            {sourceTag && (
              <p className="font-body text-xs text-stone mt-1 uppercase tracking-wide">
                Source: {sourceTag}
              </p>
            )}
          </div>
        )}
    </>
  );
}

/** Entry photo with its required credit line (author, licence, source). Lazy-loaded so long
 * rankings stay fast; width/height are set so the page doesn't jump while images load. */
export function EntryPhoto({ image }: { image: EntryImage }) {
  return (
    <figure className={`mt-2 mb-3 ${image.height > image.width ? "max-w-xs" : "max-w-xl"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-md bg-stone-light/40"
      />
      <figcaption className="font-body text-[11px] leading-snug text-stone mt-1">
        Photo:{" "}
        <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-stone-light underline-offset-2 hover:text-signal">
          {image.author}
        </a>
        ,{" "}
        {image.licenseUrl ? (
          <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline decoration-stone-light underline-offset-2 hover:text-signal">
            {image.license}
          </a>
        ) : (
          image.license
        )}
        , via Wikimedia Commons
      </figcaption>
    </figure>
  );
}
