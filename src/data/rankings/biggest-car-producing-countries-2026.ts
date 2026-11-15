import { RankingArticle } from "./types";

const SRC = "OICA, world motor vehicle production by country, 2025";

export const biggestCarProducingCountries2026: RankingArticle = {
  slug: "biggest-car-producing-countries-2026",

  metaTitle: "The World's 10 Biggest Car-Producing Countries in 2025, Ranked | Viszlyn",
  metaDescription:
    "China built 34,530,738 vehicles in 2025, 35.8% of the world total and more than the next five countries combined. The top 10 vehicle-producing countries, ranked with OICA data.",
  ogTitle: "The World's 10 Biggest Car-Producing Countries, Ranked",
  ogDescription:
    "China built 35.8% of the world's vehicles in 2025, more than the US, Japan, India, Germany and South Korea combined. The top 10 producers (OICA).",
  twitterTitle: "The World's 10 Biggest Car-Producing Countries in 2025",
  twitterDescription:
    "China 34.53 million, US 10.24 million, Japan 8.41 million vehicles. The top 10 vehicle producers of 2025 (OICA).",

  eyebrow: "World",
  title: "The World's 10 Biggest Car-Producing Countries in 2025",
  dek: "The world built 96.4 million motor vehicles in 2025, up 3.9%. China built 35.8% of them, more than the next five countries combined.",
  publishedDate: "November 15, 2026",
  lastUpdated: "November 15, 2026",
  dataPeriod: "Full year 2025, compared with 2024 (OICA production statistics)",
  heroImage: {
    src: "/heroes/biggest-car-producing-countries-2026.png",
    ogSrc: "/heroes/biggest-car-producing-countries-2026-og.png",
    alt: "Gold car outline with China ranked first at 34.53 million motor vehicles built in 2025, followed by the United States 10.24 million, Japan 8.41 million, India 6.49 million, Germany 4.15 million (passenger cars only), South Korea 4.10 million, Mexico 4.09 million, Brazil 2.64 million, Spain 2.27 million and France 1.46 million. Source: OICA.",
  },

  quickAnswer:
    "China was the world's biggest vehicle producer in 2025, building 34,530,738 motor vehicles, 35.8% of the world total, according to OICA, the international carmakers' association. The United States was second with 10,243,844 and Japan third with 8,410,232. India, Germany, South Korea, Mexico, Brazil, Spain and France complete the top 10. France replaced Thailand in the top 10.",
  introParagraph:
    "This ranking uses production statistics from OICA, the International Organization of Motor Vehicle Manufacturers, which collects figures from national carmakers' associations. It counts all motor vehicles: passenger cars plus commercial vehicles such as vans, pickups, trucks and buses. World production rose 3.9% in 2025, from 92,723,280 to 96,383,650 vehicles. China alone added 3,249,146 vehicles, most of the world's growth.",
  calloutBox: {
    label: "Two countries are counted differently",
    body: "OICA's figure for Germany covers cars only, and its figure for France covers cars and light commercial vehicles only, so both understate total vehicle output. OICA also notes that some manufacturers do not report to it. Rankings from other sources, such as national associations, can differ slightly. China's figure, 34.531 million vehicles, matches the China Association of Automobile Manufacturers (CAAM).",
  },

  chartTitle: "Motor vehicles produced, 2025 (millions)",
  chartSource: SRC,
  chartTapNote: "Tap any country to jump to its details below.",
  entryValueLabel: "Vehicles produced, 2025:",
  comparisonLabel: "2024",
  chartItems: [
    { rank: 1, name: "China", value: "34.53 million", raw: 34530738, prevRank: 1 },
    { rank: 2, name: "United States", value: "10.24 million", raw: 10243844, prevRank: 2 },
    { rank: 3, name: "Japan", value: "8.41 million", raw: 8410232, prevRank: 3 },
    { rank: 4, name: "India", value: "6.49 million", raw: 6490810, prevRank: 4 },
    { rank: 5, name: "Germany", value: "4.15 million", raw: 4148836, prevRank: 7 },
    { rank: 6, name: "South Korea", value: "4.10 million", raw: 4102200, prevRank: 6 },
    { rank: 7, name: "Mexico", value: "4.09 million", raw: 4092448, prevRank: 5 },
    { rank: 8, name: "Brazil", value: "2.64 million", raw: 2644054, prevRank: 8 },
    { rank: 9, name: "Spain", value: "2.27 million", raw: 2274026, prevRank: 9 },
    { rank: 10, name: "France", value: "1.46 million", raw: 1463991, prevRank: 13 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "France",
      earnings: "1,463,991 vehicles",
      category: "Europe",
      blurb: "France's production rose 7.8% from 1,357,701 in 2024, lifting it from 13th to 10th. OICA's French figure covers cars and light commercial vehicles only.",
      standoutFact: "France finished just 8,422 vehicles ahead of Thailand, which dropped out of the top 10 to 11th.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/France",
    },
    {
      rank: 9,
      name: "Spain",
      earnings: "2,274,026 vehicles",
      category: "Europe",
      blurb: "Spain's production fell 4.3% from 2,377,091 in 2024, the biggest percentage fall in the top 10.",
      standoutFact: "Spain is Europe's second-biggest producer in this ranking after Germany.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Spain",
    },
    {
      rank: 8,
      name: "Brazil",
      earnings: "2,644,054 vehicles",
      category: "Americas",
      blurb: "Brazil's production rose 3.5% from 2,553,869 in 2024.",
      standoutFact: "Brazil is the biggest producer in South America and built 2.7% of the world's vehicles.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Brazil",
    },
    {
      rank: 7,
      name: "Mexico",
      earnings: "4,092,448 vehicles",
      category: "Americas",
      blurb: "Mexico's production fell 2.6% from 4,202,724 in 2024, and it slipped from 5th to 7th.",
      standoutFact: "Mexico finished just 9,752 vehicles behind South Korea and 56,388 behind Germany.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Mexico",
    },
    {
      rank: 6,
      name: "South Korea",
      earnings: "4,102,200 vehicles",
      category: "Asia",
      blurb: "South Korea's production fell 0.6% from 4,128,242 in 2024. It stayed 6th.",
      standoutFact: "Places 5 to 7 were separated by just 56,388 vehicles.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/South_Korea",
    },
    {
      rank: 5,
      name: "Germany",
      earnings: "4,148,836 vehicles (cars only)",
      category: "Europe",
      blurb: "Germany's car production rose 2.0% from 4,069,222 in 2024, lifting it from 7th to 5th as Mexico's and South Korea's output fell.",
      standoutFact: "OICA's German figure counts cars only, so Germany's full vehicle output, including commercial vehicles, is higher.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Germany",
    },
    {
      rank: 4,
      name: "India",
      earnings: "6,490,810 vehicles",
      category: "Asia",
      blurb: "India's production rose 7.9% from 6,016,764 in 2024, adding 474,046 vehicles.",
      standoutFact: "That was the second-biggest increase in the top 10 after China, both in vehicles and in percentage terms.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/India",
    },
    {
      rank: 3,
      name: "Japan",
      earnings: "8,410,232 vehicles",
      category: "Asia",
      blurb: "Japan's production rose 2.1% from 8,234,645 in 2024. It stayed 3rd.",
      standoutFact: "Japan built 8.7% of the world's vehicles in 2025.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Japan",
    },
    {
      rank: 2,
      name: "United States",
      earnings: "10,243,844 vehicles",
      category: "Americas",
      blurb: "US production fell 2.6% from 10,522,394 in 2024, a drop of 278,550 vehicles, the biggest fall in the top 10.",
      standoutFact: "Americans bought far more vehicles than the country built: OICA put US sales at 16.7 million in 2025.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/United_States",
    },
    {
      rank: 1,
      name: "China",
      earnings: "34,530,738 vehicles",
      category: "Asia",
      blurb: "China's production rose 10.4% from 31,281,592 in 2024, adding 3,249,146 vehicles, the fastest growth and biggest increase in the top 10.",
      standoutFact: "China built more vehicles than the US, Japan, India, Germany and South Korea combined. According to CAAM, it built 16.626 million new-energy vehicles, up 29%, and exported a record 7.098 million vehicles, up 21.1%.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/China",
    },
  ],

  keyTakeaway: {
    stat: "35.8%",
    label: "China's share of world vehicle production, 2025",
    comparisonStat: "81.3%",
    comparisonLabel: "Share built by the top 10 (78,401,179 vehicles)",
    note: "China's 3,249,146 extra vehicles in 2025 were 89% of the world's growth of 3,660,370. Its share of world production rose from 33.7% in 2024 to 35.8%.",
  },

  sourceNote: {
    dataPeriod: "Full year 2025, compared with 2024",
    lastUpdated: "November 15, 2026",
    sources:
      "OICA (International Organization of Motor Vehicle Manufacturers), correspondents survey, \"World motor vehicle production by country/region and type\", 2025 (released April 2026), and OICA press release of 23 April 2026. China cross-checked against the China Association of Automobile Manufacturers (CAAM), as reported by Gasgoo on 14 January 2026.",
    methodology:
      "Production figures for 2025 and 2024 and the world totals are as published by OICA. OICA's figure for Germany covers cars only and its figure for France covers cars and light commercial vehicles only; OICA notes that some manufacturers do not report. The percentage changes, increases in vehicles, shares of world production, 2024 ranks, the top-10 total and the gaps between countries are calculated by Viszlyn from OICA's figures. The chart shows millions rounded to two decimals; the exact figures are in each entry.",
    sourceLinks: [
      { label: "OICA: Production statistics", href: "https://oica.net/production-statistics/" },
      { label: "OICA: 2025 production by country (PDF, via AFIA)", href: "https://www.afia.pt/wp-content/uploads/2026/04/prod-total-2025.pdf" },
      { label: "OICA: 2025 press release", href: "https://oica.net/?p=17386" },
      { label: "Gasgoo: China's 2025 auto output and sales (CAAM)", href: "https://autonews.gasgoo.com/articles/news/chinas-2025-auto-market-hits-new-highs-in-both-annual-sales-output-2011438280283627520" },
    ],
  },

  faqItems: [
    {
      question: "Which country produces the most cars?",
      answer:
        "China, which built 34,530,738 motor vehicles in 2025, 35.8% of the world total, according to OICA. That is more than the next five countries combined: the United States, Japan, India, Germany and South Korea.",
    },
    {
      question: "How many vehicles were made in the world in 2025?",
      answer:
        "96,383,650, up 3.9% from 92,723,280 in 2024, according to OICA. The figure includes passenger cars and commercial vehicles such as vans, trucks and buses.",
    },
    {
      question: "Where does the US rank in car production?",
      answer:
        "Second, with 10,243,844 vehicles in 2025, down 2.6% on 2024. China built about 3.4 times as many.",
    },
    {
      question: "Which countries moved up or down in 2025?",
      answer:
        "Germany rose from 7th to 5th and France from 13th to 10th. Mexico fell from 5th to 7th, and Thailand dropped out of the top 10 to 11th, 8,422 vehicles behind France.",
    },
    {
      question: "Why is Germany's figure lower than some other sources?",
      answer:
        "OICA's figure for Germany, 4,148,836, counts cars only. Germany also builds commercial vehicles, which are not included in this figure.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Most Expensive New Cars of the 2020s", href: "/rankings/most-expensive-new-cars-2026" },
    { title: "The World's 10 Biggest Oil Producers in 2025", href: "/rankings/biggest-oil-producers-2026" },
    { title: "The 25 Largest Economies in the World in 2026", href: "/rankings/largest-economies-world-2026" },
    { title: "The 10 Biggest Greenhouse Gas Emitting Countries in 2025", href: "/rankings/biggest-emitting-countries-2026" },
  ],
};
