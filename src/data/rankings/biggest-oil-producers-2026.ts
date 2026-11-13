import { RankingArticle } from "./types";

const SRC = "Energy Institute, Statistical Review of World Energy 2026";

export const biggestOilProducers2026: RankingArticle = {
  slug: "biggest-oil-producers-2026",

  metaTitle: "The World's 10 Biggest Oil Producers in 2025, Ranked | Viszlyn",
  metaDescription:
    "The US produced 21,065 thousand barrels of oil a day in 2025, 20.9% of the world total and almost as much as Saudi Arabia and Russia combined. The top 10 oil producers, ranked.",
  ogTitle: "The World's 10 Biggest Oil Producers, Ranked",
  ogDescription:
    "The US pumps 20.9% of the world's oil, almost as much as Saudi Arabia and Russia combined. The top 10 producers of 2025 (Energy Institute).",
  twitterTitle: "The World's 10 Biggest Oil Producers in 2025",
  twitterDescription:
    "US 21,065, Saudi Arabia 11,408, Russia 10,737 thousand barrels a day. The top 10 oil producers of 2025 (Energy Institute).",

  eyebrow: "World",
  title: "The World's 10 Biggest Oil Producers in 2025",
  dek: "The world produced 100,590 thousand barrels of oil a day in 2025, up 3.5%. The United States produced 20.9% of it, almost as much as Saudi Arabia and Russia combined.",
  publishedDate: "November 14, 2026",
  lastUpdated: "November 14, 2026",
  dataPeriod: "2025 annual average, compared with 2024 (Energy Institute Statistical Review of World Energy 2026)",
  heroImage: {
    src: "/heroes/biggest-oil-producers-2026.png",
    onPage: false,
    ogSrc: "/heroes/biggest-oil-producers-2026-og.png",
    alt: "Ten oil-filled columns sized by each country's 2025 oil production in thousand barrels per day: United States 21,065, Saudi Arabia 11,408, Russia 10,737, Canada 6,164, Iran 5,184, Iraq 4,396, China 4,340, UAE 4,207, Brazil 3,881 and Kuwait 2,820. Source: Energy Institute.",
  },

  quickAnswer:
    "The United States was the world's biggest oil producer in 2025, at 21,065 thousand barrels per day, or 20.9% of global output. Saudi Arabia was second with 11,408 thousand barrels per day (11.3%), and Russia third with 10,737 (10.7%). Canada, Iran, Iraq, China, the UAE, Brazil and Kuwait complete the top 10. The order is exactly the same as in 2024.",
  introParagraph:
    "This ranking uses the Energy Institute's Statistical Review of World Energy 2026, the standard annual reference for global energy data. It measures oil production in thousands of barrels per day, averaged over the year. World production grew 3.5% in 2025, from 97,156 to 100,590 thousand barrels per day. Every country in the top 10 kept its 2024 position, but nine of the ten produced more than a year earlier.",
  calloutBox: {
    label: "What counts as oil production here",
    body: "The Energy Institute's figures include crude oil, shale oil, oil sands, condensates and natural gas liquids (NGLs). They exclude biofuels, liquid fuels made from coal and gas, and refinery processing gain. Other sources measure oil differently, so their numbers and even some of their rankings differ. The US Energy Information Administration's (EIA) broader 'petroleum and other liquids' measure includes refinery processing gain, biofuels and liquids from other hydrocarbon sources. Its 2025 ranking places China 5th and Brazil 7th, but Iraq 8th, compared with 7th, 9th and 6th in this ranking.",
  },

  chartTitle: "Oil production, 2025 (thousand barrels per day)",
  chartSource: SRC,
  chartTapNote: "Tap any country to jump to its full breakdown below.",
  entryValueLabel: "Oil production, 2025:",
  chartItems: [
    { rank: 1, name: "United States", value: "21,065", raw: 21065 },
    { rank: 2, name: "Saudi Arabia", value: "11,408", raw: 11408 },
    { rank: 3, name: "Russia", value: "10,737", raw: 10737 },
    { rank: 4, name: "Canada", value: "6,164", raw: 6164 },
    { rank: 5, name: "Iran", value: "5,184", raw: 5184 },
    { rank: 6, name: "Iraq", value: "4,396", raw: 4396 },
    { rank: 7, name: "China", value: "4,340", raw: 4340 },
    { rank: 8, name: "United Arab Emirates", value: "4,207", raw: 4207 },
    { rank: 9, name: "Brazil", value: "3,881", raw: 3881 },
    { rank: 10, name: "Kuwait", value: "2,820", raw: 2820 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Kuwait",
      earnings: "2,820 thousand barrels per day",
      category: "Middle East",
      blurb: "Kuwait's production rose 2.3% from 2,757 thousand barrels per day in 2024, keeping it in 10th place.",
      standoutFact: "Kuwait produced 2.8% of the world's oil in 2025.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Kuwait",
    },
    {
      rank: 9,
      name: "Brazil",
      earnings: "3,881 thousand barrels per day",
      category: "Americas",
      blurb: "Brazil's production rose 12.4% from 3,453 thousand barrels per day in 2024, the fastest growth in the top 10.",
      standoutFact: "Brazil added 428 thousand barrels per day in a year, the third-biggest increase in the top 10 after the United States and Saudi Arabia.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Brazil",
    },
    {
      rank: 8,
      name: "United Arab Emirates",
      earnings: "4,207 thousand barrels per day",
      category: "Middle East",
      blurb: "The UAE's production rose 5.0% from 4,006 thousand barrels per day in 2024.",
      standoutFact: "That was the third-fastest growth in the top 10, behind Brazil (12.4%) and Saudi Arabia (5.1%).",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/United_Arab_Emirates",
    },
    {
      rank: 7,
      name: "China",
      earnings: "4,340 thousand barrels per day",
      category: "Asia-Pacific",
      blurb: "China's production rose 1.8% from 4,264 thousand barrels per day in 2024, the slowest growth among the nine top-10 producers that increased output.",
      standoutFact: "China ranks 7th on the Energy Institute's measure but 5th on the US EIA's broader measure of petroleum and other liquids.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/China",
    },
    {
      rank: 6,
      name: "Iraq",
      earnings: "4,396 thousand barrels per day",
      category: "Middle East",
      blurb: "Iraq's production rose 2.3% from 4,298 thousand barrels per day in 2024.",
      standoutFact: "Iraq is just 56 thousand barrels per day ahead of China in 7th place. On the US EIA's broader measure, Iraq ranks 8th.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Iraq",
    },
    {
      rank: 5,
      name: "Iran",
      earnings: "5,184 thousand barrels per day",
      category: "Middle East",
      blurb: "Iran's production rose 2.4% from 5,063 thousand barrels per day in 2024.",
      standoutFact: "Iran produced 5.2% of the world's oil in 2025.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Iran",
    },
    {
      rank: 4,
      name: "Canada",
      earnings: "6,164 thousand barrels per day",
      category: "Americas",
      blurb: "Canada's production rose 4.6% from 5,895 thousand barrels per day in 2024.",
      standoutFact: "Canada produced 6.1% of the world's oil, and together the United States and Canada produced 27,229 thousand barrels per day, 27.1% of the world total.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Canada",
    },
    {
      rank: 3,
      name: "Russia",
      earnings: "10,737 thousand barrels per day",
      category: "Europe/Asia",
      blurb: "Russia's production fell 0.2% from 10,758 thousand barrels per day in 2024. It is the only top-10 producer whose output fell.",
      standoutFact: "Russia produced 10.7% of the world's oil, 671 thousand barrels per day less than Saudi Arabia.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Russia",
    },
    {
      rank: 2,
      name: "Saudi Arabia",
      earnings: "11,408 thousand barrels per day",
      category: "Middle East",
      blurb: "Saudi Arabia's production rose 5.1% from 10,856 thousand barrels per day in 2024, the second-fastest growth in the top 10.",
      standoutFact: "Saudi Arabia added 552 thousand barrels per day, the second-biggest increase after the United States.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Saudi_Arabia",
    },
    {
      rank: 1,
      name: "United States",
      earnings: "21,065 thousand barrels per day",
      category: "Americas",
      blurb: "US production rose 3.9% from 20,276 thousand barrels per day in 2024, the biggest increase of any country in the top 10 (789 thousand barrels per day).",
      standoutFact: "The US produced 20.9% of the world's oil, almost as much as Saudi Arabia and Russia combined (22,145). On the Energy Institute's figures it first overtook Saudi Arabia in 2014 and has been the world's biggest producer every year since 2017.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/United_States",
    },
  ],

  keyTakeaway: {
    stat: "20.9%",
    label: "US share of world oil production, 2025",
    comparisonStat: "73.8%",
    comparisonLabel: "Share produced by the top 10 (74,202 thousand barrels per day)",
    note: "Five of the top 10 are in the Middle East: Saudi Arabia, Iran, Iraq, the UAE and Kuwait together produced 28,015 thousand barrels per day, 27.9% of the world total. OPEC as a group produced 34,379 thousand barrels per day in 2025, a 34.2% share, up 4.7% from 2024.",
  },

  sourceNote: {
    dataPeriod: "2025 annual average, compared with 2024",
    lastUpdated: "November 14, 2026",
    sources:
      "Energy Institute, Statistical Review of World Energy 2026, table \"Oil Production in thousands of barrels per day\". Cross-checked against the US Energy Information Administration (EIA), International Energy Statistics, petroleum and other liquids production.",
    methodology:
      "Production figures, year-on-year changes, shares of world production and the world and OPEC totals are as published by the Energy Institute, which reports oil production in whole thousand barrels per day. Production includes crude oil, shale oil, oil sands, condensates and natural gas liquids, and excludes biofuels, synthetic liquids derived from coal and gas, and refinery processing gain. The top-10 total and share, the Middle East and US-plus-Canada totals, the gaps between countries and the increases in barrels per day are calculated by Viszlyn from the Energy Institute's figures. The US EIA's broader measure, which includes refinery processing gain, biofuels and liquids from other hydrocarbon sources, gives higher totals and ranks China 5th, Brazil 7th and Iraq 8th.",
    sourceLinks: [
      { label: "Energy Institute: Statistical Review of World Energy, data downloads", href: "https://www.energyinst.org/statistical-review/resources-and-data-downloads" },
      { label: "US EIA: Annual petroleum and other liquids production", href: "https://www.eia.gov/international/data/world/petroleum-and-other-liquids/annual-petroleum-and-other-liquids-production" },
    ],
  },

  faqItems: [
    {
      question: "Which country produces the most oil in the world?",
      answer:
        "The United States, with 21,065 thousand barrels per day in 2025, or 20.9% of world production, according to the Energy Institute's Statistical Review of World Energy 2026. Saudi Arabia was second with 11,408 and Russia third with 10,737.",
    },
    {
      question: "How much oil does the world produce per day?",
      answer:
        "100,590 thousand barrels per day in 2025, up 3.5% from 97,156 in 2024, on the Energy Institute's measure, which includes crude oil, shale oil, oil sands, condensates and natural gas liquids.",
    },
    {
      question: "Does the US produce more oil than Saudi Arabia?",
      answer:
        "Yes. In 2025 the US produced 21,065 thousand barrels per day, 1.85 times Saudi Arabia's 11,408. On the Energy Institute's figures, the US has been the world's biggest producer every year since 2017.",
    },
    {
      question: "Which oil producer grew fastest in 2025?",
      answer:
        "Brazil, whose production rose 12.4% to 3,881 thousand barrels per day. Saudi Arabia (5.1%) and the UAE (5.0%) were next. Russia was the only top-10 producer whose output fell, by 0.2%.",
    },
    {
      question: "Why do other sources rank oil producers differently?",
      answer:
        "They measure different things. The Energy Institute counts crude oil, shale oil, oil sands, condensates and natural gas liquids. The US EIA's broader 'petroleum and other liquids' measure includes refinery processing gain, biofuels and liquids from other hydrocarbon sources. That gives higher totals and changes the middle of the ranking: the EIA puts China 5th and Brazil 7th, but Iraq 8th.",
    },
  ],

  relatedLinks: [
    { title: "The World's 10 Biggest Emitters of CO2 in 2026", href: "/rankings/biggest-emitting-countries-2026" },
    { title: "The Economies With the Biggest Current Account Surpluses in 2026", href: "/rankings/biggest-current-account-surpluses-2026" },
    { title: "Who Owns America's Debt? The 10 Biggest Foreign Holders of US Treasuries", href: "/rankings/foreign-holders-us-treasuries-2026" },
    { title: "The World's 10 Biggest Arms Exporters, 2021–2025", href: "/rankings/biggest-arms-exporters-2026" },
  ],
};
