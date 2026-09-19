import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LatestRankings } from "@/components/LatestRankings";
import { ALL_RANKING_ARTICLES } from "@/data/rankings";

// Topics we plan to write but haven't built yet. Once a topic is generated
// (via the pipeline or manually) and appears in ALL_RANKING_ARTICLES, remove
// it from this list — it'll then show up automatically as a real entry above.
const COMING_SOON = [
  { title: "World's Largest Cities", href: "/rankings/largest-cities", comingSoon: true as const },
  { title: "Most Visited Countries", href: "/rankings/most-visited-countries", comingSoon: true as const },
  { title: "Biggest AI Companies", href: "/rankings/biggest-ai-companies", comingSoon: true as const },
];

export default function RankingsIndex() {
  const realRankings = ALL_RANKING_ARTICLES.map((article) => ({
    title: article.title,
    href: `/rankings/${article.slug}`,
  }));

  const rankings = [...realRankings, ...COMING_SOON];

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-4">
          <span className="font-body text-xs font-semibold tracking-widest text-signal uppercase">
            All Rankings
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-ink mt-2 mb-2 leading-[1.1]">
            Every Ranking on Viszlyn
          </h1>
          <p className="font-body text-stone max-w-2xl">
            Browse all published data stories and rankings. New rankings are
            added regularly.
          </p>
        </section>
        <LatestRankings rankings={rankings} />
      </main>
      <SiteFooter />
    </>
  );
}
