import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LatestRankings } from "@/components/LatestRankings";
import { ALL_RANKING_ARTICLES } from "@/data/rankings";

// Maps the header nav's URL slugs to the "eyebrow" tag used on article data.
// Add an entry here whenever a new category is introduced.
const CATEGORY_LABELS: Record<string, string> = {
  money: "Money",
  tech: "Tech",
  world: "World",
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = CATEGORY_LABELS[slug];
  if (!label) return {};

  return {
    title: `${label} Rankings | Viszlyn`,
    description: `Browse every Viszlyn ranking and data story tagged ${label}.`,
    alternates: {
      canonical: `https://viszlyn.io/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const label = CATEGORY_LABELS[slug];

  if (!label) {
    notFound();
  }

  const matchingArticles = ALL_RANKING_ARTICLES.filter(
    (article) => article.eyebrow.toLowerCase() === label.toLowerCase()
  );

  const rankings = matchingArticles.map((article) => ({
    title: article.title,
    href: `/rankings/${article.slug}`,
  }));

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-4">
          <span className="font-body text-xs font-semibold tracking-widest text-signal uppercase">
            Category
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-ink mt-2 mb-2 leading-[1.1]">
            {label} Rankings
          </h1>
          <p className="font-body text-stone max-w-2xl">
            Every published Viszlyn ranking and data story tagged {label}.
          </p>
        </section>

        {rankings.length > 0 ? (
          <LatestRankings rankings={rankings} />
        ) : (
          <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 border-t border-stone-light">
            <p className="font-body text-stone text-center">
              No {label} rankings published yet — check back soon.
            </p>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
