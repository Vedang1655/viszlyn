import { ALL_RANKING_ARTICLES } from "@/data/rankings";

// Small static JSON index used by the header search box. Built once at build time.
export const dynamic = "force-static";

export function GET() {
  const index = ALL_RANKING_ARTICLES.map((a) => ({
    title: a.title,
    href: `/rankings/${a.slug}`,
    eyebrow: a.eyebrow,
    dek: a.dek,
    // Names in the ranking (people, countries, companies) so searches like "MrBeast" or "India" find the article.
    names: a.chartItems
      .map((i) => [i.name, ...(i.countries?.map((c) => c.name) ?? [])].join(" "))
      .join(" · "),
  }));
  return Response.json(index);
}
