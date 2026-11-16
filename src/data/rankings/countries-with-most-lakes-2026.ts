import { RankingArticle } from "./types";

const SRC = "Messager et al. (2016), Nature Communications, Table 1";

export const countriesWithMostLakes2026: RankingArticle = {
  slug: "countries-with-most-lakes-2026",

  metaTitle: "Which Country Has the Most Lakes? The Top 10 Ranked | Viszlyn",
  metaDescription:
    "Canada has about 879,800 lakes larger than 10 hectares, roughly 62% of the world's total and more than every other country combined. Russia (201,200) and the US (102,500) follow.",
  ogTitle: "The Countries With the Most Lakes",
  ogDescription:
    "Canada has about 879,800 lakes, more than the rest of the world combined. Russia has 201,200 and the US 102,500.",
  twitterTitle: "Which Country Has the Most Lakes?",
  twitterDescription:
    "Canada about 879,800, Russia 201,200, US 102,500. The countries with the most lakes of at least 10 hectares.",

  eyebrow: "World",
  title: "The 10 Countries With the Most Lakes",
  dek: "Canada is home to roughly 62% of the world's lakes larger than 10 hectares, more than every other country combined. Here are the 10 countries with the most lakes, from the global HydroLAKES study.",
  publishedDate: "November 16, 2026",
  lastUpdated: "November 16, 2026",
  dataPeriod: "HydroLAKES global lake inventory (Messager et al., 2016)",
  heroImage: {
    src: "/heroes/countries-with-most-lakes-2026.png",
    ogSrc: "/heroes/countries-with-most-lakes-2026-og.png",
    alt: "Ten lakes drawn to scale by each country's number of lakes larger than 10 hectares: Canada about 879,800, Russia 201,200, United States 102,500, China 23,800, Sweden 22,600, Brazil 20,900, Norway 20,000, Argentina 13,600, Kazakhstan 12,400 and Australia 11,400. Source: Messager et al. 2016.",
  },

  quickAnswer:
    "Canada has the most lakes in the world: about 879,800 lakes of at least 10 hectares (0.1 km²), according to the HydroLAKES study by McGill University researchers. That is about 62% of the world's more than 1.4 million lakes of that size. Russia is second with about 201,200 and the United States third with about 102,500.",
  introParagraph:
    "This ranking comes from HydroLAKES, a global map of every lake of at least 10 hectares (0.1 km², about 14 soccer fields), built by researchers at McGill University and published in Nature Communications in 2016. It counted more than 1.4 million such lakes worldwide. The study's own table of the countries with the most lakes gives counts to the nearest hundred and the total area of each country's lakes. Lakes on a border are assigned to the country where they drain out. Smaller ponds are not counted, so the true number of water bodies in each country is much higher.",
  calloutBox: {
    label: "Why Canada has so many lakes",
    body: "Most of Canada's lakes sit in hollows scraped out by ice sheets during the last ice age, across the Canadian Shield and the north. The same glacial history explains the high counts in Russia, Sweden, Norway and the northern United States. You may see a lower figure, 863,550, quoted for Canada: that is the number of lake outlines taken from Natural Resources Canada's map data while HydroLAKES was being built, not the study's final count.",
  },

  chartTitle: "Number of lakes of at least 10 hectares",
  chartSource: "Messager et al. (2016), Nature Communications 7:13603, Table 1",
  chartTapNote: "Tap any country to jump to its details below.",
  entryValueLabel: "Lakes of 10+ hectares:",
  chartItems: [
    { rank: 1, name: "Canada", value: "879,800", raw: 879800, countries: [{ name: "Canada", flagCode: "ca" }] },
    { rank: 2, name: "Russia", value: "201,200", raw: 201200, countries: [{ name: "Russia", flagCode: "ru" }] },
    { rank: 3, name: "United States", value: "102,500", raw: 102500, countries: [{ name: "United States", flagCode: "us" }] },
    { rank: 4, name: "China", value: "23,800", raw: 23800, countries: [{ name: "China", flagCode: "cn" }] },
    { rank: 5, name: "Sweden", value: "22,600", raw: 22600, countries: [{ name: "Sweden", flagCode: "se" }] },
    { rank: 6, name: "Brazil", value: "20,900", raw: 20900, countries: [{ name: "Brazil", flagCode: "br" }] },
    { rank: 7, name: "Norway", value: "20,000", raw: 20000, countries: [{ name: "Norway", flagCode: "no" }] },
    { rank: 8, name: "Argentina", value: "13,600", raw: 13600, countries: [{ name: "Argentina", flagCode: "ar" }] },
    { rank: 9, name: "Kazakhstan", value: "12,400", raw: 12400, countries: [{ name: "Kazakhstan", flagCode: "kz" }] },
    { rank: 10, name: "Australia", value: "11,400", raw: 11400, countries: [{ name: "Australia", flagCode: "au" }] },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Australia",
      earnings: "11,400 lakes",
      category: "Oceania",
      origin: "Total lake area: 49,500 km²",
      blurb: "Australia has about 11,400 lakes of at least 10 hectares, covering 49,500 km² in total.",
      standoutFact: "Many of Australia's biggest lakes, such as Kati Thanda–Lake Eyre, are salt lakes that are dry most of the time and fill only after heavy rain.",
      sourceTag: SRC,
      countries: [{ name: "Australia", flagCode: "au" }],
    },
    {
      rank: 9,
      name: "Kazakhstan",
      earnings: "12,400 lakes",
      category: "Asia",
      origin: "Total lake area: 61,900 km²",
      blurb: "Kazakhstan has about 12,400 lakes of at least 10 hectares, covering 61,900 km².",
      standoutFact: "Its lakes cover a larger total area than China's 23,800 or Sweden's 22,600, despite there being only about half as many.",
      sourceTag: SRC,
      countries: [{ name: "Kazakhstan", flagCode: "kz" }],
    },
    {
      rank: 8,
      name: "Argentina",
      earnings: "13,600 lakes",
      category: "Americas",
      origin: "Total lake area: 27,900 km²",
      blurb: "Argentina has about 13,600 lakes of at least 10 hectares, covering 27,900 km².",
      standoutFact: "It is one of only two South American countries in the top 10, with Brazil.",
      sourceTag: SRC,
      countries: [{ name: "Argentina", flagCode: "ar" }],
    },
    {
      rank: 7,
      name: "Norway",
      earnings: "20,000 lakes",
      category: "Europe",
      origin: "Total lake area: 13,900 km²",
      blurb: "Norway has about 20,000 lakes of at least 10 hectares, covering 13,900 km².",
      standoutFact: "Together, Sweden and Norway have about 42,600 lakes, more than China and almost twice as many as Brazil.",
      sourceTag: SRC,
      countries: [{ name: "Norway", flagCode: "no" }],
    },
    {
      rank: 6,
      name: "Brazil",
      earnings: "20,900 lakes",
      category: "Americas",
      origin: "Total lake area: 31,400 km²",
      blurb: "Brazil has about 20,900 lakes of at least 10 hectares, covering 31,400 km².",
      standoutFact: "It has more lakes than any other Latin American country.",
      sourceTag: SRC,
      countries: [{ name: "Brazil", flagCode: "br" }],
    },
    {
      rank: 5,
      name: "Sweden",
      earnings: "22,600 lakes",
      category: "Europe",
      origin: "Total lake area: 34,300 km²",
      blurb: "Sweden has about 22,600 lakes of at least 10 hectares, covering 34,300 km², the most of any country in the European Union.",
      standoutFact: "Its largest lake, Vänern, is also the largest lake in the European Union.",
      sourceTag: SRC,
      countries: [{ name: "Sweden", flagCode: "se" }],
    },
    {
      rank: 4,
      name: "China",
      earnings: "23,800 lakes",
      category: "Asia",
      origin: "Total lake area: 81,000 km²",
      blurb: "China has about 23,800 lakes of at least 10 hectares, covering 81,000 km².",
      standoutFact: "Its lakes cover the fourth-largest total area in this ranking, after Canada, Russia and the United States.",
      sourceTag: SRC,
      countries: [{ name: "China", flagCode: "cn" }],
    },
    {
      rank: 3,
      name: "United States",
      earnings: "102,500 lakes",
      category: "Americas",
      origin: "Total lake area: 340,300 km²",
      blurb: "The United States has about 102,500 lakes of at least 10 hectares, covering 340,300 km².",
      standoutFact: "Russia has almost twice as many lakes as the US, and Canada more than eight times as many.",
      sourceTag: SRC,
      countries: [{ name: "United States", flagCode: "us" }],
    },
    {
      rank: 2,
      name: "Russia",
      earnings: "201,200 lakes",
      category: "Europe / Asia",
      origin: "Total lake area: 667,400 km²",
      blurb: "Russia has about 201,200 lakes of at least 10 hectares, covering 667,400 km².",
      standoutFact: "Despite being the world's largest country, Russia has fewer than a quarter as many lakes as Canada.",
      sourceTag: SRC,
      countries: [{ name: "Russia", flagCode: "ru" }],
    },
    {
      rank: 1,
      name: "Canada",
      earnings: "879,800 lakes",
      category: "Americas",
      origin: "Total lake area: 856,500 km²",
      blurb: "Canada has about 879,800 lakes of at least 10 hectares, covering 856,500 km², according to the HydroLAKES study.",
      standoutFact: "That is about 62% of the world's lakes of that size, more than all other countries combined, and about 4.4 times as many as Russia in second place.",
      sourceTag: SRC,
      countries: [{ name: "Canada", flagCode: "ca" }],
    },
  ],

  keyTakeaway: {
    stat: "879,800",
    label: "Lakes of at least 10 hectares in Canada",
    comparisonStat: "62%",
    comparisonLabel: "Canada's share of the world's lakes of that size",
    note: "Canada's count is 451,400 higher than the next nine countries combined (428,400). Worldwide, the study counted more than 1.4 million lakes of at least 10 hectares.",
  },

  sourceNote: {
    dataPeriod: "HydroLAKES v1.0 global lake inventory",
    lastUpdated: "November 16, 2026",
    sources:
      "Messager, M. L., Lehner, B., Grill, G., Nedeva, I. and Schmitt, O. (2016), \"Estimating the volume and age of water stored in global lakes using a geo-statistical approach\", Nature Communications 7:13603, Table 1 (\"Countries with most lakes\"); McGill University news release, \"Taking stock of the world's lakes\" (December 2016).",
    methodology:
      "Counts and total lake areas are as published in Table 1 of the study, which gives them in thousands to one decimal place (Canada 879.8 thousand); we show them as whole numbers (879,800). Only lakes and reservoirs of at least 10 hectares (0.1 km²) are counted. Lakes crossing a border are assigned to the country of their outlet. Canada's 62% share and the world total of more than 1.4 million lakes are from McGill University's release; the other comparisons are calculated by Viszlyn from Table 1. The ice-age explanation and the facts about individual lakes (Kati Thanda–Lake Eyre, Vänern) are general geography, not from the study.",
    sourceLinks: [
      { label: "Messager et al. (2016), Nature Communications", href: "https://www.nature.com/articles/ncomms13603" },
      { label: "HydroLAKES (HydroSHEDS)", href: "https://www.hydrosheds.org/products/hydrolakes" },
      { label: "McGill University: Taking stock of the world's lakes", href: "https://www.eurekalert.org/news-releases/525693" },
    ],
  },

  faqItems: [
    {
      question: "Which country has the most lakes?",
      answer:
        "Canada, with about 879,800 lakes of at least 10 hectares, roughly 62% of the world's total, according to the HydroLAKES study. That is more lakes than every other country combined.",
    },
    {
      question: "How many lakes are there in the world?",
      answer:
        "More than 1.4 million lakes of at least 10 hectares (0.1 km²), according to HydroLAKES. Counting smaller ponds, the number runs into the millions more.",
    },
    {
      question: "How many lakes does Canada have?",
      answer:
        "About 879,800 lakes of at least 10 hectares, covering 856,500 km² in total. A figure of 863,550 is sometimes quoted, but that was a count from one input map used to build HydroLAKES, not its final total.",
    },
    {
      question: "How many lakes does the US have?",
      answer:
        "About 102,500 lakes of at least 10 hectares, covering 340,300 km², the third most of any country after Canada and Russia.",
    },
  ],

  relatedLinks: [
    { title: "Canada's 20 Largest Cities by Population", href: "/rankings/canada-largest-cities-2026" },
    { title: "The 10 Countries With the Most Time Zones", href: "/rankings/countries-with-most-time-zones-2026" },
    { title: "The Most Popular Baby Names in Every Canadian Province", href: "/rankings/most-popular-baby-names-canada-provinces-2026" },
    { title: "The 10 Most Visited Countries in the World", href: "/rankings/most-visited-countries-2026" },
  ],
};
