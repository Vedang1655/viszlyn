import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RankList } from "@/components/RankBar";
import { ChartHeader } from "@/components/ChartHeader";
import { HeroBanner } from "@/components/HeroBanner";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import {
  ArticleLayout,
  ArticleSection,
  SourceNote,
} from "@/components/ArticleLayout";
import { RankEntry } from "@/components/RankEntry";
import { FAQ } from "@/components/FAQ";
import { RelatedRankings } from "@/components/RelatedRankings";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ALL_RANKING_ARTICLES, getAllRankingSlugs, getRankingArticle } from "@/data/rankings";
import { SITE_NAME, SITE_URL, toIsoDate } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllRankingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getRankingArticle(slug);
  if (!article) return {};

  const url = `${SITE_URL}/rankings/${article.slug}`;
  const publishedTime = toIsoDate(article.publishedDate);
  const modifiedTime = toIsoDate(article.lastUpdated);

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.ogTitle,
      description: article.ogDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      publishedTime,
      modifiedTime,
      section: article.eyebrow,
    },
    twitter: {
      card: "summary_large_image",
      title: article.twitterTitle,
      description: article.twitterDescription,
    },
  };
}

export default async function RankingArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getRankingArticle(slug);

  if (!article) {
    notFound();
  }

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const url = `${SITE_URL}/rankings/${article.slug}`;
  const publisher = { "@type": "Organization", name: SITE_NAME, url: SITE_URL };

  const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    mainEntityOfPage: url,
    url,
    datePublished: toIsoDate(article.publishedDate),
    dateModified: toIsoDate(article.lastUpdated),
    articleSection: article.eyebrow,
    inLanguage: "en",
    author: publisher,
    publisher,
  };

  const ITEM_LIST_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: article.chartTitle,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: article.chartItems.length,
    itemListElement: [...article.chartItems]
      .sort((x, y) => x.rank - y.rank)
      .map((item) => ({
        "@type": "ListItem",
        position: item.rank,
        name: item.name,
      })),
  };

  const BREADCRUMB_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Rankings", item: `${SITE_URL}/rankings` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  const VIDEO_JSON_LD = article.video
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: article.video.title,
        description: article.video.description,
        thumbnailUrl: [`https://i.ytimg.com/vi/${article.video.youtubeId}/maxresdefault.jpg`],
        uploadDate: article.video.uploadDate,
        duration: article.video.duration,
        embedUrl: `https://www.youtube.com/embed/${article.video.youtubeId}`,
        contentUrl: `https://www.youtube.com/watch?v=${article.video.youtubeId}`,
      }
    : null;

  // Related links: keep the article's own live links, then top up to four with
  // other articles (same section first, newest first) so there are no dead ends.
  const liveRelated = article.relatedLinks.filter((l) => !l.comingSoon);
  const relatedLinks = [...liveRelated];
  if (relatedLinks.length < 4) {
    const taken = new Set([`/rankings/${article.slug}`, ...relatedLinks.map((l) => l.href)]);
    const candidates = ALL_RANKING_ARTICLES.filter((a) => !taken.has(`/rankings/${a.slug}`)).sort(
      (x, y) =>
        Number(y.eyebrow === article.eyebrow) - Number(x.eyebrow === article.eyebrow) ||
        (toIsoDate(y.publishedDate) ?? "").localeCompare(toIsoDate(x.publishedDate) ?? ""),
    );
    for (const c of candidates) {
      if (relatedLinks.length >= 4) break;
      relatedLinks.push({ title: c.title, href: `/rankings/${c.slug}` });
    }
  }

  return (
    <>
      {[ARTICLE_JSON_LD, ITEM_LIST_JSON_LD, BREADCRUMB_JSON_LD, FAQ_JSON_LD, VIDEO_JSON_LD].filter(Boolean).map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <SiteHeader />
      <main className="flex-1">
        <ArticleLayout
          eyebrow={article.eyebrow}
          title={article.title}
          dek={article.dek}
          publishedDate={article.publishedDate}
          lastUpdated={article.lastUpdated}
          dataPeriod={article.dataPeriod}
        >
          <ArticleSection>
            <HeroBanner
              eyebrow={article.eyebrow}
              title={article.title}
              items={article.chartItems}
              source={article.chartSource}
            />
          </ArticleSection>

          <ArticleSection title="Quick Answer">
            <p>{article.quickAnswer}</p>
          </ArticleSection>

          <ArticleSection>
            <p>{article.introParagraph}</p>
          </ArticleSection>

          {article.calloutBox && (
            <ArticleSection>
              <div className="bg-signal/[0.05] border border-signal/30 rounded-lg p-5 md:p-6">
                <p className="font-body text-xs font-bold text-signal uppercase tracking-wide mb-2">
                  {article.calloutBox.label}
                </p>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  {article.calloutBox.body}
                </p>
              </div>
            </ArticleSection>
          )}

          {article.video && (
            <ArticleSection title="Watch the ranking">
              <VideoEmbed video={article.video} />
            </ArticleSection>
          )}

          <ArticleSection>
            <div className="bg-ink/[0.02] border border-stone-light rounded-lg p-5 md:p-8">
              <ChartHeader title={article.chartTitle} source={article.chartSource} />
              <RankList items={article.chartItems} linkable />
              <p className="font-body text-xs text-stone mt-4">{article.chartTapNote}</p>
            </div>
          </ArticleSection>

          <ArticleSection
            title={`Ranked #${Math.max(...article.detailedEntries.map((entry) => entry.rank))} to #1`}
          >
            <div>
              {article.detailedEntries.map((entry) => (
                <RankEntry key={entry.rank} {...entry} earningsLabel={article.entryValueLabel} />
              ))}
            </div>
          </ArticleSection>

          <ArticleSection title="What the numbers tell us">
            <KeyTakeaway
              stat={article.keyTakeaway.stat}
              label={article.keyTakeaway.label}
              comparisonStat={article.keyTakeaway.comparisonStat}
              comparisonLabel={article.keyTakeaway.comparisonLabel}
              note={article.keyTakeaway.note}
            />
          </ArticleSection>

          <SourceNote
            dataPeriod={article.sourceNote.dataPeriod}
            lastUpdated={article.sourceNote.lastUpdated}
            sources={article.sourceNote.sources}
            methodology={article.sourceNote.methodology}
            sourceLinks={article.sourceNote.sourceLinks}
          />

          <ArticleSection title="Frequently Asked Questions">
            <FAQ items={article.faqItems} />
          </ArticleSection>

          <ArticleSection title="Related Rankings">
            <RelatedRankings links={relatedLinks} />
          </ArticleSection>
        </ArticleLayout>
      </main>
      <SiteFooter />
    </>
  );
}
