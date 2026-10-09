import { RankingArticle } from "./types";
import { highestEarningCreators2026 } from "./highest-earning-creators-2026";
import { highestPaidAthletes2026 } from "./highest-paid-athletes-2026";
import { highestPaidCeos2026 } from "./highest-paid-ceos-2026";
import { worldsMostValuableCompanies2026 } from "./worlds-most-valuable-companies-2026";
import { richestPeople2026 } from "./richest-people-2026";
import { mostVisitedCountries2026 } from "./most-visited-countries-2026";
import { mostValuableAiCompanies2026 } from "./most-valuable-ai-companies-2026";
import { mostPowerfulPassports2026 } from "./most-powerful-passports-2026";
import { indiaMostPopulousCities2026 } from "./india-populous-cities-2026";
import { indiaHighestPaidCeos2026 } from "./india-highest-paid-ceos-2026";
import { costliestCitiesWorld2026 } from "./costliest-cities-world-2026";
import { largestEconomiesWorld2026 } from "./largest-economies-world-2026";
import { richestCountriesGdpPerCapita2026 } from "./richest-countries-gdp-per-capita-2026";

export const ALL_RANKING_ARTICLES: RankingArticle[] = [
  richestCountriesGdpPerCapita2026,
  largestEconomiesWorld2026,
  costliestCitiesWorld2026,
  indiaHighestPaidCeos2026,
  indiaMostPopulousCities2026,
  mostPowerfulPassports2026,
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
