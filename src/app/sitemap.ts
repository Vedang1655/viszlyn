import type { MetadataRoute } from "next";
import { ALL_RANKING_ARTICLES } from "@/data/rankings";

const BASE_URL = "https://viszlyn.io";

function safeDate(value: string): Date {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const rankingEntries: MetadataRoute.Sitemap = ALL_RANKING_ARTICLES.map((article) => ({
    url: `${BASE_URL}/rankings/${article.slug}`,
    lastModified: safeDate(article.lastUpdated),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = ["money", "tech", "world"].map((slug) => ({
    url: `${BASE_URL}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-08-31"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/rankings`,
      lastModified: new Date("2026-08-31"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...rankingEntries,
    ...categoryEntries,
    {
      url: `${BASE_URL}/links`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
