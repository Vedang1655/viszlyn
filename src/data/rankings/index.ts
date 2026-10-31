import { canadaLargestCities2026 } from "./canada-largest-cities-2026";
import { mostPopulousCountries2026 } from "./most-populous-countries-2026";
import { fastestGrowingEconomies2026 } from "./fastest-growing-economies-2026";
import { chinaRichestPeople2026 } from "./china-richest-people-2026";
import { biggestCurrentAccountSurpluses2026 } from "./biggest-current-account-surpluses-2026";
import { usStatesMostBillionaires2026 } from "./us-states-most-billionaires-2026";
import { canadaMinimumWageByProvince2026 } from "./canada-minimum-wage-by-province-2026";
import { leastPeacefulCountries2026 } from "./least-peaceful-countries-2026";
import { averageCreditScoreCanadaCities2026 } from "./average-credit-score-canada-cities-2026";
import { indiaRichestPeople2026 } from "./india-richest-people-2026";
import { mostPeacefulCountries2026 } from "./most-peaceful-countries-2026";
import { largestGoldReserves2026 } from "./largest-gold-reserves-2026";
import { busiestAirportsWorld2026 } from "./busiest-airports-world-2026";
import { nuclearArsenalsRanked2026 } from "./nuclear-arsenals-ranked-2026";
import { emissionsPerPersonMajorEmitters2026 } from "./emissions-per-person-major-emitters-2026";
import { biggestEmittingCountries2026 } from "./biggest-emitting-countries-2026";
import { citiesWithMostBillionaires2026 } from "./cities-with-most-billionaires-2026";
import { biggestMilitarySpenders2026 } from "./biggest-military-spenders-2026";
import { biggestTechIpos2026 } from "./biggest-tech-ipos-2026";
import { highestPayingJobsCanada2026 } from "./highest-paying-jobs-canada-2026";
import { countriesWithMostBillionaires2026 } from "./countries-with-most-billionaires-2026";
import { highestNationalDebtToGdp2026 } from "./highest-national-debt-to-gdp-2026";
import { RankingArticle } from "./types";
import { highestMinimumWageByCountry2026 } from "./highest-minimum-wage-by-country-2026";
import { bigMacIndexMostExpensiveCountries2026 } from "./big-mac-index-most-expensive-countries-2026";
import { iphone18ProPriceByCountry2026 } from "./iphone-18-pro-price-by-country-2026";
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
import { highestRentBurdenCountries2026 } from "./highest-rent-burden-countries-2026";

export const ALL_RANKING_ARTICLES: RankingArticle[] = [
  canadaLargestCities2026,
  mostPopulousCountries2026,
  fastestGrowingEconomies2026,
  chinaRichestPeople2026,
  biggestCurrentAccountSurpluses2026,
  usStatesMostBillionaires2026,
  canadaMinimumWageByProvince2026,
  leastPeacefulCountries2026,
  averageCreditScoreCanadaCities2026,
  indiaRichestPeople2026,
  mostPeacefulCountries2026,
  largestGoldReserves2026,
  busiestAirportsWorld2026,
  nuclearArsenalsRanked2026,
  emissionsPerPersonMajorEmitters2026,
  biggestEmittingCountries2026,
  citiesWithMostBillionaires2026,
  biggestMilitarySpenders2026,
  biggestTechIpos2026,
  highestPayingJobsCanada2026,
  highestRentBurdenCountries2026,
  countriesWithMostBillionaires2026,
  highestNationalDebtToGdp2026,
  highestMinimumWageByCountry2026,
  bigMacIndexMostExpensiveCountries2026,
  iphone18ProPriceByCountry2026,
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
