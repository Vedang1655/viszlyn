import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FeaturedStory } from "@/components/FeaturedStory";
import { TrendingCategories } from "@/components/TrendingCategories";
import { LatestRankings } from "@/components/LatestRankings";
import { ALL_RANKING_ARTICLES } from "@/data/rankings";

// Newest published article by its publishedDate; ties keep the order of
// ALL_RANKING_ARTICLES (first listed wins).
function newestArticle() {
  const time = (value: string) => {
    const t = new Date(value).getTime();
    return Number.isNaN(t) ? 0 : t;
  };
  return ALL_RANKING_ARTICLES.reduce((best, article) =>
    time(article.publishedDate) > time(best.publishedDate) ? article : best
  );
}

export default function Home() {
  const featured = newestArticle();
  const latestRankings = ALL_RANKING_ARTICLES.filter(
    (article) => article.slug !== featured.slug
  ).map((article) => ({
    title: article.title,
    href: `/rankings/${article.slug}`,
  }));

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FeaturedStory
          eyebrow="Featured Data Story"
          title={featured.title}
          chartTitle={featured.chartTitle}
          chartSource={featured.chartSource}
          entryValueLabel={featured.entryValueLabel}
          href={`/rankings/${featured.slug}`}
          items={featured.chartItems}
          detailedEntries={featured.detailedEntries}
        />
        <TrendingCategories />
        <LatestRankings rankings={latestRankings} />
      </main>
      <SiteFooter />
    </>
  );
}
