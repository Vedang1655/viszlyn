import { RankingArticle } from "./types";
import { highestEarningCreators2026 } from "./highest-earning-creators-2026";
import { highestPaidAthletes2026 } from "./highest-paid-athletes-2026";
import { highestPaidCeos2026 } from "./highest-paid-ceos-2026";
import { worldsMostValuableCompanies2026 } from "./worlds-most-valuable-companies-2026";
import { richestPeople2026 } from "./richest-people-2026";
import { mostVisitedCountries2026 } from "./most-visited-countries-2026";
import { mostValuableAiCompanies2026 } from "./most-valuable-ai-companies-2026";

export const ALL_RANKING_ARTICLES: RankingArticle[] = [
  mostValuableAiCompanies2026,
  mostVisitedCountries2026,
  richestPeople2026,
  worldsMostValuableCompanies2026,
  highestEarningCreators2026,
  highestPaidAthletes2026,
  highestPaidCeos2026,
];

export function getAllRankingSlugs(): string[] {
  return ALL_RANKING_ARTICLES.map((article) => article.slug);
}

export function getRankingArticle(slug: string): RankingArticle | undefined {
  return ALL_RANKING_ARTICLES.find((article) => article.slug === slug);
}

export * from "./types";
