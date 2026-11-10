import Link from "next/link";
import type { RankingArticle } from "@/data/rankings/types";

/** Big "Read next" card with the next article's share image, shown at the end of every article. */
export function ReadNext({ article }: { article: RankingArticle }) {
  const href = `/rankings/${article.slug}`;
  const img = article.heroImage ? article.heroImage.ogSrc : `${href}/opengraph-image`;
  return (
    <Link
      href={href}
      className="group block rounded-xl overflow-hidden border border-stone-light hover:border-ink transition-colors bg-paper"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt=""
        width={1200}
        height={630}
        loading="lazy"
        className="w-full h-auto aspect-[1200/630] object-cover"
      />
      <div className="p-4 md:p-5">
        <div className="font-body text-xs font-semibold tracking-[0.14em] uppercase text-signal">Read next</div>
        <div className="mt-1 font-display font-semibold text-lg md:text-xl text-ink group-hover:text-signal transition-colors leading-snug">
          {article.title} <span aria-hidden="true">→</span>
        </div>
        <p className="mt-1 font-body text-sm text-stone line-clamp-2">{article.dek}</p>
      </div>
    </Link>
  );
}
