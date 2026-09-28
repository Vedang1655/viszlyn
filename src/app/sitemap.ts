import type { MetadataRoute } from "next";
import { ALL_RANKING_ARTICLES } from "@/data/rankings";

const BASE_URL = "https://www.viszlyn.io";

function safeDate(value: string): Date | undefined {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articleDates = ALL_RANKING_ARTICLES.map((a) =>
    safeDate(a.lastUpdated)
  ).filter((d): d is Date => d !== undefined);
  const latestArticleDate = articleDates.length
    ? new Date(Math.max(...articleDates.map((d) => d.getTime())))
    : new Date("2026-09-28");

  const rankingEntries: MetadataRoute.Sitemap = ALL_RANKING_ARTICLES.map(
    (article) => ({
      url: `${BASE_URL}/rankings/${article.slug}`,
      lastModified: safeDate(article.lastUpdated) ?? latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const categoryEntries: MetadataRoute.Sitemap = ["money", "tech", "world"].map(
    (slug) => ({
      url: `${BASE_URL}/category/${slug}`,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.6,
    })
  );

  const legalEntries: MetadataRoute.Sitemap = ["about", "contact", "privacy", "terms"].map(
    (slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "yearly",
      priority: 0.3,
    })
  );

  return [
    {
      url: BASE_URL,
      lastModified: latestArticleDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/rankings`,
      lastModified: latestArticleDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...rankingEntries,
    ...categoryEntries,
    ...legalEntries,
  ];
}
