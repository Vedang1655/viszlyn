import type { MetadataRoute } from "next";

const BASE_URL = "https://viszlyn.io";

export default function sitemap(): MetadataRoute.Sitemap {
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
    {
      url: `${BASE_URL}/rankings/highest-earning-creators-2026`,
      lastModified: new Date("2026-08-31"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rankings/highest-paid-athletes-2026`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rankings/highest-paid-ceos-2026`,
      lastModified: new Date("2026-09-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/links`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
