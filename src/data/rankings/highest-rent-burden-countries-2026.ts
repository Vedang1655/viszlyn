import { RankingArticle } from "./types";

export const highestRentBurdenCountries2026: RankingArticle = {
  slug: "highest-rent-burden-countries-2026",

  metaTitle: "Countries Where Rent Takes the Biggest Share of Income | Viszlyn",
  metaDescription:
    "In the OECD's latest comparison, tenants in Finland spend a median 31% of disposable income on rent. See the six highest reported rent burdens and how the measure works.",
  ogTitle: "Where Rent Takes the Biggest Share of Income",
  ogDescription:
    "Finland tops the OECD's latest comparison of median rent costs as a share of tenant household disposable income.",
  twitterTitle: "Where Rent Takes the Biggest Share of Income",
  twitterDescription:
    "Finland leads the OECD's latest rent burden comparison at 31% of disposable income. See the six highest reported figures.",

  eyebrow: "Money",
  title: "The 6 Countries Where Rent Takes the Biggest Share of Income",
  dek: "In the OECD's latest comparable data, tenants in Finland spend a median 31% of disposable income on rent. The figures combine private and subsidised renters and use the latest available year for each country.",
  publishedDate: "October 14, 2026",
  lastUpdated: "October 14, 2026",
  dataPeriod: "OECD Affordable Housing Database, HC1.2; 2024 or latest available year",

  quickAnswer:
    "Finland has the highest median rent burden in the OECD's latest comparison: rent takes 31% of tenant households' disposable income. Norway follows at 29%, while Sweden, Denmark and Iceland each report 28%. Chile is next at 27%, though its underlying survey year is 2022.",
  introParagraph:
    "This ranking uses the OECD's median rent burden for tenant households: rent payments as a share of household income. It includes both private-market and subsidised rents. The OECD generally uses disposable income, including social transfers such as housing allowances, but uses gross income for Chile because disposable-income data are unavailable. The OECD uses each country's latest available survey, so these are not all observations from the same year: most European figures are from 2024, while Chile's is from 2022. This national measure describes the typical renter's reported burden; it is not a comparison of market rents in individual cities or the cost of buying a home.",
  calloutBox: {
    label: "Why the ranking stops at six",
    body: "The OECD's 2025 indicator summary explicitly identifies these six countries as having the highest median rent burdens in its latest comparison. The underlying country observations come from different survey years, so the order is best read as a snapshot of each country's latest available data, not a same-year league table.",
  },

  chartTitle: "Median rent as a share of tenant household income",
  chartSource: "OECD Affordable Housing Database, HC1.2 (2025 update)",
  chartTapNote: "Tap any country to jump to its full breakdown below.",
  entryValueLabel: "Median rent burden:",
  chartItems: [
    { rank: 1, name: "Finland", value: "31%", raw: 31, countries: [{ name: "Finland", flagCode: "fi" }] },
    { rank: 2, name: "Norway", value: "29%", raw: 29, countries: [{ name: "Norway", flagCode: "no" }] },
    { rank: 3, name: "Sweden", value: "28%", raw: 28, rankLabel: "=3", countries: [{ name: "Sweden", flagCode: "se" }] },
    { rank: 3, name: "Denmark", value: "28%", raw: 28, rankLabel: "=3", countries: [{ name: "Denmark", flagCode: "dk" }] },
    { rank: 3, name: "Iceland", value: "28%", raw: 28, rankLabel: "=3", countries: [{ name: "Iceland", flagCode: "is" }] },
    { rank: 6, name: "Chile", value: "27%", raw: 27, countries: [{ name: "Chile", flagCode: "cl" }] },
  ],

  detailedEntries: [
    {
      rank: 6,
      name: "Chile",
      earnings: "27%",
      category: "South America",
      countries: [{ name: "Chile", flagCode: "cl" }],
      revenueSources: "Median rent as a share of gross income",
      origin: "Underlying survey year: 2022",
      blurb:
        "The OECD reports a median rent burden of 27% for tenant households in Chile, putting it just below the three countries tied at 28%. Because disposable-income data are unavailable, the OECD uses gross income for Chile. The figure comes from the 2022 National Socioeconomic Characterization Survey (CASEN), rather than the more recent European survey years.",
      standoutFact:
        "Chile's latest available figure is two years older than Finland's 2024 observation.",
      sourceTag: "OECD Affordable Housing Database, HC1.2 (2025); CASEN 2022",
    },
    {
      rank: 3,
      rankLabel: "=3",
      name: "Iceland",
      earnings: "28%",
      category: "Europe",
      countries: [{ name: "Iceland", flagCode: "is" }],
      revenueSources: "Median rent as a share of disposable income",
      origin: "Latest available survey year in the OECD comparison",
      blurb:
        "Iceland shares third place at 28% of disposable income. The OECD's indicator combines private-market and subsidised rent, so it reflects the median burden across tenant households rather than asking what a new renter would pay at current market rates.",
      standoutFact:
        "The OECD identifies Iceland among the countries with the highest reported median rent burdens.",
      sourceTag: "OECD Affordable Housing Database, HC1.2 (2025 update)",
    },
    {
      rank: 3,
      rankLabel: "=3",
      name: "Denmark",
      earnings: "28%",
      category: "Europe",
      countries: [{ name: "Denmark", flagCode: "dk" }],
      revenueSources: "Median rent as a share of disposable income",
      origin: "Latest available survey year in the OECD comparison",
      blurb:
        "Tenant households in Denmark have a median rent burden of 28%, tied with Sweden and Iceland. The statistic compares rents with disposable household income, including social transfers such as housing allowances.",
      standoutFact:
        "Denmark is tied for third in the OECD's reported figures, two percentage points below Finland.",
      sourceTag: "OECD Affordable Housing Database, HC1.2 (2025 update)",
    },
    {
      rank: 3,
      rankLabel: "=3",
      name: "Sweden",
      earnings: "28%",
      category: "Europe",
      countries: [{ name: "Sweden", flagCode: "se" }],
      revenueSources: "Median rent as a share of disposable income",
      origin: "Latest available survey year in the OECD comparison",
      blurb:
        "Sweden's median rent burden is 28% of tenant household disposable income. That is three points below Norway and three points above Chile in the OECD's latest reported comparison.",
      standoutFact:
        "Sweden is one of three countries tied at 28% in the OECD's summary.",
      sourceTag: "OECD Affordable Housing Database, HC1.2 (2025 update)",
    },
    {
      rank: 2,
      name: "Norway",
      earnings: "29%",
      category: "Europe",
      countries: [{ name: "Norway", flagCode: "no" }],
      revenueSources: "Median rent as a share of disposable income",
      origin: "Latest available survey year in the OECD comparison",
      blurb:
        "Norway's median rent burden is 29% of tenant household disposable income, second only to Finland in the countries highlighted by the OECD. This is a national household measure, so it does not show how burdens differ between Norwegian cities or income groups.",
      standoutFact:
        "Norway is two percentage points below Finland in the OECD's latest reported figures.",
      sourceTag: "OECD Affordable Housing Database, HC1.2 (2025 update)",
    },
    {
      rank: 1,
      name: "Finland",
      earnings: "31%",
      category: "Europe",
      countries: [{ name: "Finland", flagCode: "fi" }],
      revenueSources: "Median rent as a share of disposable income",
      origin: "Latest available survey year in the OECD comparison",
      blurb:
        "Finland leads the OECD's latest comparison, with median rent absorbing 31% of tenant households' disposable income. The figure covers private-market and subsidised rent, and the OECD's latest Finland observation is from 2024.",
      standoutFact:
        "Finland's reported median is 4 percentage points above Chile's 27% figure, the lowest among the six countries shown.",
      sourceTag: "OECD Affordable Housing Database, HC1.2 (2025); EU-SILC 2024",
    },
  ],

  keyTakeaway: {
    stat: "31%",
      label: "Finland's median rent burden among tenant households",
    comparisonStat: "27%",
    comparisonLabel: "Chile's median rent burden in its latest available survey",
    note: "The difference between the highest and lowest figures shown is 4 percentage points. The OECD generally compares rent with disposable income, but uses gross income for Chile; all figures include private and subsidised tenants. Survey years differ by country, and the median does not show the pressure on low-income renters specifically.",
  },

  sourceNote: {
    dataPeriod: "2024 or latest year available; OECD Affordable Housing Database HC1.2, updated October 2025",
    lastUpdated: "October 14, 2026",
    sources:
      "OECD Affordable Housing Database indicator HC1.2, Housing costs over income; national household surveys listed in the OECD source notes",
    methodology:
      "Countries are presented in descending order using the median of rent payments as a share of tenant household income, as summarized by the OECD's 2025 HC1.2 indicator. The measure includes both private-market and subsidised rent. The OECD generally uses disposable income, which includes social transfers such as housing allowances and excludes taxes; for Chile, Colombia, Mexico and the United States it uses gross income because of data limitations. The observations are not from a single common year: most European data are from 2024, while Chile's CASEN observation is from 2022. These national medians are not city-level asking rents, do not include the full cost of utilities and maintenance, and do not describe the burden faced by every renter or by low-income households alone.",
    sourceLinks: [
      { label: "OECD Affordable Housing Database, HC1.2: Housing costs over income (2025 update)", href: "https://webfs.oecd.org/els-com/Affordable_Housing_Database/HC1-2-Housing-costs-over-income.pdf" },
      { label: "OECD Affordable Housing Database", href: "https://www.oecd.org/en/data/datasets/oecd-affordable-housing-database.html" },
    ],
  },

  faqItems: [
    {
      question: "Which country has the highest median rent burden?",
      answer:
        "Finland, where median rent payments equal 31% of tenant household disposable income in the OECD's latest comparison.",
    },
    {
      question: "What does rent burden measure?",
      answer:
        "It is the median rent payment as a share of tenant household income. In this OECD indicator, the calculation includes private-market and subsidised rents. The OECD generally uses disposable income, including social transfers such as housing allowances, but uses gross income for Chile because of data limitations.",
    },
    {
      question: "Are these all 2024 figures?",
      answer:
        "No. The OECD uses each country's latest available survey. Most European observations are from 2024, while Chile's figure is from 2022; some other countries also have older observations.",
    },
    {
      question: "Does this show which cities have the most expensive rent?",
      answer:
        "No. It compares national median rent burdens among tenant households. It does not rank cities, compare advertised market rents, or show how costs vary within a country.",
    },
  ],

  relatedLinks: [
    { title: "The World's Costliest Cities", href: "/rankings/costliest-cities-world-2026" },
    { title: "The Highest Minimum Wages Among Countries Reviewed in 2026", href: "/rankings/highest-minimum-wage-by-country-2026" },
    { title: "The World's Most Expensive Countries by Big Mac Prices", href: "/rankings/big-mac-index-most-expensive-countries-2026" },
  ],
};
