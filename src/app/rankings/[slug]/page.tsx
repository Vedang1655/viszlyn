import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RankList } from "@/components/RankBar";
import { ChartHeader } from "@/components/ChartHeader";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import {
  ArticleLayout,
  ArticleSection,
  SourceNote,
} from "@/components/ArticleLayout";
import { RankEntry } from "@/components/RankEntry";
import { FAQ } from "@/components/FAQ";
import { RelatedRankings } from "@/components/RelatedRankings";
import { getAllRankingSlugs, getRankingArticle } from "@/data/rankings";

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

  const url = `https://viszlyn.io/rankings/${article.slug}`;

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
      siteName: "Viszlyn",
      type: "article",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
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
                <p className="font-body text-sm text-ink/80 leading-relaxed">
                  {article.calloutBox.body}
                </p>
              </div>
            </ArticleSection>
          )}

          <ArticleSection>
            <div className="bg-ink/[0.02] border border-stone-light rounded-lg p-5 md:p-8">
              <ChartHeader title={article.chartTitle} source={article.chartSource} />
              <RankList items={article.chartItems} linkable />
              <p className="font-body text-xs text-stone mt-4">{article.chartTapNote}</p>
            </div>
          </ArticleSection>

          <ArticleSection title="Ranked #10 to #1">
            <div>
              {article.detailedEntries.map((entry) => (
                <RankEntry key={entry.rank} {...entry} />
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
          />

          <ArticleSection title="Frequently Asked Questions">
            <FAQ items={article.faqItems} />
          </ArticleSection>

          <ArticleSection title="Related Rankings">
            <RelatedRankings links={article.relatedLinks} />
          </ArticleSection>
        </ArticleLayout>
      </main>
      <SiteFooter />
    </>
  );
}
