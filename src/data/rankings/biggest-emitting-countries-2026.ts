import { RankingArticle } from "./types";

export const biggestEmittingCountries2026: RankingArticle = {
  slug: "biggest-emitting-countries-2026",

  metaTitle: "The 10 Biggest Greenhouse Gas Emitters in 2025 | Viszlyn",
  metaDescription:
    "China emitted 15,981 million tonnes of greenhouse gases in 2025, 2.7x the US. See the 10 countries with the highest emissions, ranked with the EU's EDGAR data.",
  ogTitle: "The 10 Biggest Greenhouse Gas Emitting Countries in 2025",
  ogDescription:
    "China emitted 29.5% of the world's greenhouse gases in 2025, about 2.7 times the United States. See the full top 10.",
  twitterTitle: "The 10 Biggest Greenhouse Gas Emitting Countries in 2025",
  twitterDescription:
    "China emitted about 2.7x the US in 2025. See the 10 countries with the highest greenhouse gas emissions.",

  eyebrow: "Environment",
  title: "The 10 Biggest Greenhouse Gas Emitting Countries in 2025",
  dek: "World greenhouse gas emissions hit a record 54.1 billion tonnes of CO2 equivalent in 2025. China produced nearly 30% of them, and the United States had the largest increase of any major emitter.",
  publishedDate: "October 17, 2026",
  lastUpdated: "October 17, 2026",
  dataPeriod: "Calendar year 2025, EDGAR 2026 report (European Commission Joint Research Centre)",

  quickAnswer:
    "China emitted the most greenhouse gases in 2025 at 15,981 million tonnes of CO2 equivalent, about 29.5% of the world total. The United States was second at 6,018 million tonnes, followed by India (4,508), Russia (2,574) and Indonesia (1,359). The ten countries on this list produced about 66% of global emissions.",
  introParagraph:
    "This ranking uses EDGAR, the Emissions Database for Global Atmospheric Research run by the European Commission's Joint Research Centre. Its 2026 report, published in September 2026, covers 2025 and counts all greenhouse gases, not just carbon dioxide: fossil CO2 made up 73.8% of the total, methane 17.6%, nitrous oxide 5.3% and fluorinated gases 3.3%. Everything is expressed in CO2 equivalent, which converts each gas into the amount of CO2 with the same warming effect. Figures are in million tonnes (Mt) of CO2 equivalent and exclude emissions and removals from land use, land-use change and forestry. They measure emissions released within each country, not those linked to the goods a country imports, and they are totals, not emissions per person.",
  calloutBox: {
    label: "Why the European Union is not on the list",
    body: "The European Union is a group of 27 countries, not a single country. EDGAR counts it as 3,127 Mt of CO2 equivalent in 2025, which would put it fourth, behind India and ahead of Russia. We rank individual countries only, so the EU is mentioned here but not given a rank. International aviation (633 Mt) and international shipping (754 Mt) are reported separately and are not assigned to any country.",
  },

  chartTitle: "Greenhouse gas emissions in 2025, million tonnes of CO2 equivalent",
  chartSource: "EDGAR 2026 report, European Commission Joint Research Centre",
  chartTapNote: "Tap any country to jump to its full breakdown below.",
  entryValueLabel: "2025 emissions:",
  chartItems: [
    { rank: 1, name: "China", value: "15,981 Mt", raw: 15981 },
    { rank: 2, name: "United States", value: "6,018 Mt", raw: 6018 },
    { rank: 3, name: "India", value: "4,508 Mt", raw: 4508 },
    { rank: 4, name: "Russia", value: "2,574 Mt", raw: 2574 },
    { rank: 5, name: "Indonesia", value: "1,359 Mt", raw: 1359 },
    { rank: 6, name: "Brazil", value: "1,307 Mt", raw: 1307 },
    { rank: 7, name: "Iran", value: "1,119 Mt", raw: 1119 },
    { rank: 8, name: "Japan", value: "1,063 Mt", raw: 1063 },
    { rank: 9, name: "Saudi Arabia", value: "845 Mt", raw: 845 },
    { rank: 10, name: "Canada", value: "765 Mt", raw: 765 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Canada",
      earnings: "765 Mt",
      category: "North America",
      origin: "1.41% of world emissions",
      blurb:
        "Canada emitted 765 million tonnes of CO2 equivalent in 2025, about 1.4% of the world total. The next country on the list, Mexico, emitted 717 Mt.",
      standoutFact:
        "Canada's total is less than one-twentieth of China's.",
      sourceTag: "EDGAR 2026 report",
    },
    {
      rank: 9,
      name: "Saudi Arabia",
      earnings: "845 Mt",
      category: "Middle East",
      origin: "1.56% of world emissions",
      blurb:
        "Saudi Arabia emitted 845 million tonnes of CO2 equivalent, about 1.6% of the world total. The European Commission's summary names Saudi Arabia, along with Iran, among the countries with notable increases in 2025.",
      standoutFact:
        "Saudi Arabia emitted about 80 Mt more than Canada, which ranks tenth.",
      sourceTag: "EDGAR 2026 report; Joint Research Centre",
    },
    {
      rank: 8,
      name: "Japan",
      earnings: "1,063 Mt",
      category: "Asia",
      origin: "1.96% of world emissions",
      blurb:
        "Japan emitted 1,063 million tonnes of CO2 equivalent, about 2.0% of the world total. It is one of the major emitters whose emissions fell in 2025, according to the European Commission.",
      standoutFact:
        "Japan was one of six major emitters, each producing more than 1% of the world total, that cut emissions in 2025.",
      sourceTag: "EDGAR 2026 report; Joint Research Centre",
    },
    {
      rank: 7,
      name: "Iran",
      earnings: "1,119 Mt",
      category: "Middle East",
      origin: "2.07% of world emissions",
      blurb:
        "Iran emitted 1,119 million tonnes of CO2 equivalent, about 2.1% of the world total. The European Commission lists Iran among the countries with notable emissions increases in 2025.",
      standoutFact:
        "Iran emitted about 56 Mt more than Japan, which ranks eighth.",
      sourceTag: "EDGAR 2026 report; Joint Research Centre",
    },
    {
      rank: 6,
      name: "Brazil",
      earnings: "1,307 Mt",
      category: "South America",
      origin: "2.41% of world emissions",
      blurb:
        "Brazil emitted 1,307 million tonnes of CO2 equivalent, about 2.4% of the world total. These figures exclude land use, land-use change and forestry, so Brazil's total here does not include emissions linked to deforestation. The European Commission lists Brazil among the major emitters that cut emissions in 2025.",
      standoutFact:
        "Brazil's total is only about 52 Mt below Indonesia's, which ranks fifth at 1,359 Mt.",
      sourceTag: "EDGAR 2026 report; Joint Research Centre",
    },
    {
      rank: 5,
      name: "Indonesia",
      earnings: "1,359 Mt",
      category: "Asia",
      origin: "2.51% of world emissions",
      blurb:
        "Indonesia emitted 1,359 million tonnes of CO2 equivalent, about 2.5% of the world total. Its emissions rose by about 16 Mt, or 1.2%, in 2025.",
      standoutFact:
        "Indonesia is the only country ranked below Russia with more than 2.5% of world emissions.",
      sourceTag: "EDGAR 2026 report",
    },
    {
      rank: 4,
      name: "Russia",
      earnings: "2,574 Mt",
      category: "Europe and Asia",
      origin: "4.75% of world emissions",
      blurb:
        "Russia emitted 2,574 million tonnes of CO2 equivalent, about 4.8% of the world total. EDGAR reports a small decrease from 2024.",
      standoutFact:
        "Russia emits nearly twice as much as Indonesia, which ranks fifth.",
      sourceTag: "EDGAR 2026 report",
    },
    {
      rank: 3,
      name: "India",
      earnings: "4,508 Mt",
      category: "Asia",
      origin: "8.33% of world emissions",
      blurb:
        "India emitted 4,508 million tonnes of CO2 equivalent, about 8.3% of the world total. Its emissions fell 0.2% in 2025, according to the European Commission.",
      standoutFact:
        "India's emissions are about 1.75 times Russia's, which ranks fourth.",
      sourceTag: "EDGAR 2026 report; Joint Research Centre",
    },
    {
      rank: 2,
      name: "United States",
      earnings: "6,018 Mt",
      category: "North America",
      origin: "11.11% of world emissions",
      blurb:
        "The United States emitted 6,018 million tonnes of CO2 equivalent, about 11.1% of the world total. Its emissions rose 2.2% (about 132 Mt) in 2025, the largest absolute increase of any country in the world.",
      standoutFact:
        "The US increase of about 132 Mt was roughly 14 times the increase of about 10 Mt reported for China.",
      sourceTag: "EDGAR 2026 report",
    },
    {
      rank: 1,
      name: "China",
      earnings: "15,981 Mt",
      category: "Asia",
      origin: "29.51% of world emissions",
      blurb:
        "China emitted 15,981 million tonnes of CO2 equivalent, about 29.5% of the world total and roughly 2.7 times the United States. Its emissions were nearly flat in 2025, up about 0.1% (roughly 10 Mt).",
      standoutFact:
        "China, the United States and India together produced about 49% of the world's greenhouse gas emissions.",
      sourceTag: "EDGAR 2026 report",
    },
  ],

  keyTakeaway: {
    stat: "29.5%",
    label: "of world greenhouse gas emissions came from China",
    comparisonStat: "1.41%",
    comparisonLabel: "from Canada, at #10",
    note: "China emitted about 21 times as much as Canada and about 2.7 times as much as the United States. The ten countries on this list emitted about 35,539 Mt of CO2 equivalent, roughly 66% of the world's 54,149 Mt. Including the European Union, the six largest emitters (China, the US, India, the EU, Russia and Indonesia) account for about 62% of the total. Global emissions rose 0.7% in 2025, a slower increase than the previous year.",
  },

  sourceNote: {
    dataPeriod: "Calendar year 2025; EDGAR 2026 report, published September 2026",
    lastUpdated: "October 17, 2026",
    sources:
      "European Commission, Joint Research Centre: EDGAR (Emissions Database for Global Atmospheric Research), GHG emissions of all world countries, 2026 report",
    methodology:
      "Countries are ranked by total greenhouse gas emissions in 2025, in million tonnes of CO2 equivalent, as reported in the EDGAR 2026 report. Totals include fossil CO2, methane, nitrous oxide and fluorinated gases from all human activities and exclude land use, land-use change and forestry. Figures are production-based totals for each country, not emissions per person and not emissions linked to imports. The European Union is an aggregate of 27 countries and is not ranked, and international aviation and shipping are reported separately. EDGAR figures differ from other datasets, such as the Global Carbon Budget, which covers fossil CO2 only. Shares of the world total and the combined top-10 figure are our own calculations from EDGAR's published values.",
    sourceLinks: [
      { label: "EDGAR: GHG emissions of all world countries, 2026 report", href: "https://edgar.jrc.ec.europa.eu/report_2026" },
      { label: "Joint Research Centre: Six of the 16 major emitters reduced their emissions in 2025", href: "https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/six-16-major-emitters-reduced-their-emissions-2025-2026-09-07_en" },
    ],
  },

  faqItems: [
    {
      question: "Which country emits the most greenhouse gases?",
      answer:
        "China, with 15,981 million tonnes of CO2 equivalent in 2025, about 29.5% of the world total according to EDGAR. The United States is second at 6,018 million tonnes.",
    },
    {
      question: "What counts as a greenhouse gas emission in this ranking?",
      answer:
        "Fossil carbon dioxide, methane, nitrous oxide and fluorinated gases from human activities, converted to CO2 equivalent. Land use, land-use change and forestry are excluded.",
    },
    {
      question: "Are these emissions per person?",
      answer:
        "No. They are national totals. A country with a large population can rank high on totals even if emissions per person are modest, and the reverse is true for small countries.",
    },
    {
      question: "Why is the European Union not ranked?",
      answer:
        "The EU is a group of 27 countries, not one country. EDGAR counts it at 3,127 Mt of CO2 equivalent in 2025, which would rank fourth, but this list only ranks individual countries.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Largest Economies in the World in 2026", href: "/rankings/largest-economies-world-2026" },
    { title: "The World's 10 Biggest Military Spenders in 2025", href: "/rankings/biggest-military-spenders-2026" },
    { title: "The 10 Countries with the Highest GDP Per Capita in 2026", href: "/rankings/richest-countries-gdp-per-capita-2026" },
  ],
};
