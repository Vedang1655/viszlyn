import { RankingArticle } from "./types";

const TF = "Tax Foundation, International Tax Competitiveness Index 2026 (published October 19, 2026), Table 1";
const TFP = (c: string) => `Tax Foundation, International Tax Competitiveness Index 2026: Table 1, and ${c} country profile ("Strengths")`;
const comp = (c: number, i: number, cons: number, p: number, x: number) =>
  `Component ranks (of 38): corporate ${c} · individual ${i} · consumption ${cons} · property ${p} · cross-border ${x}`;

export const countriesBestTaxSystems2026: RankingArticle = {
  slug: "countries-best-tax-systems-2026",

  metaTitle: "Countries With the Best Tax Systems in 2026 (OECD Ranking) | Viszlyn",
  metaDescription:
    "Estonia has the best-designed tax system in the OECD for the 13th year running, ahead of Latvia and New Zealand. See the top 10, the bottom five, and where Canada (15th) and the US (17th) rank.",
  ogTitle: "Which Countries Have the Best Tax Systems?",
  ogDescription:
    "The Tax Foundation's 2026 index ranks 38 OECD tax systems on design, not how much tax they collect. Estonia is No. 1 again; France is last.",
  twitterTitle: "The Best and Worst Tax Systems in the OECD (2026)",
  twitterDescription:
    "Estonia 100.0. Latvia 92.5. New Zealand 88.2. Canada 15th, US 17th, France last. The 2026 tax competitiveness ranking.",

  eyebrow: "Money",
  title: "The 10 Countries With the Best Tax Systems in the OECD in 2026",
  dek: "Estonia tops the Tax Foundation's ranking of 38 OECD tax systems for the 13th year in a row, with the three Baltic states all in the top five. The index grades how well a tax system is designed, not how much tax people pay.",
  publishedDate: "November 22, 2026",
  lastUpdated: "November 22, 2026",
  dataPeriod: "International Tax Competitiveness Index 2026 (data as of July 2026)",
  heroImage: {
    src: "/heroes/countries-best-tax-systems-2026.png",
    ogSrc: "/heroes/countries-best-tax-systems-2026-og.png",
    alt: "A receipt-style ranking of the best tax systems in the OECD in 2026: Estonia 100.0, Latvia 92.5, New Zealand 88.2, Switzerland 86.8, Lithuania 82.6, Luxembourg 81.9, Czech Republic 79.4, Australia 78.9, Turkey 76.0 and Hungary 75.6, with Canada 15th, the United States 17th and France last.",
  },

  quickAnswer:
    "Estonia has the best tax system in the OECD in 2026, scoring 100.0 on the Tax Foundation's International Tax Competitiveness Index, its 13th year in first place. Latvia (92.5) and New Zealand (88.2) follow. Canada ranks 15th (72.2), the United States 17th (71.2) and France last of 38 (45.7). The index rates how competitive and neutral a tax system's design is, not how high taxes are.",
  introParagraph:
    "The Tax Foundation, a US tax policy research group, scores the tax systems of the 38 OECD countries every year. Its International Tax Competitiveness Index looks at more than 40 tax policy variables in five areas: corporate taxes, individual taxes, consumption taxes, property taxes and cross-border tax rules. It rewards two things: competitiveness, meaning low marginal tax rates that don't drive investment away, and neutrality, meaning taxes that raise revenue with as few distortions and special breaks as possible. So a country can collect a lot of tax and still score well if its taxes are simple and broad-based. Scores are relative: the best country is set at 100.",
  calloutBox: {
    label: "Where do Canada and the US rank?",
    body: "Canada ranks 15th of 38 with a score of 72.2, unchanged from 2025. It does well on consumption taxes (8th) but less well on individual taxes and cross-border rules (both 28th). The report notes that in 2025 Canada abolished its digital services tax, cancelled a planned increase in the capital gains inclusion rate and reinstated full expensing for machinery. Its September 2026 full-expensing announcement came after the index's July 2026 data cut-off. The United States ranks 17th (71.2), down one place: it is 3rd on consumption taxes but 37th, second-last, on cross-border rules, which the report links to tighter rules on US multinationals' foreign income from 2026.",
  },

  chartTitle: "Overall score (best = 100)",
  chartSource: "Tax Foundation, International Tax Competitiveness Index 2026 (38 OECD countries). Arrows compare with 2025 ranks as restated in the 2026 edition",
  chartTapNote: "Tap any country to jump to its details below.",
  entryValueLabel: "Index score:",
  comparisonLabel: "2025",
  chartItems: [
    { rank: 1, name: "Estonia", value: "100.0", raw: 100.0, prevRank: 1, countries: [{ name: "Estonia", flagCode: "ee" }] },
    { rank: 2, name: "Latvia", value: "92.5", raw: 92.5, prevRank: 2, countries: [{ name: "Latvia", flagCode: "lv" }] },
    { rank: 3, name: "New Zealand", value: "88.2", raw: 88.2, prevRank: 3, countries: [{ name: "New Zealand", flagCode: "nz" }] },
    { rank: 4, name: "Switzerland", value: "86.8", raw: 86.8, prevRank: 4, countries: [{ name: "Switzerland", flagCode: "ch" }] },
    { rank: 5, name: "Lithuania", value: "82.6", raw: 82.6, prevRank: 5, countries: [{ name: "Lithuania", flagCode: "lt" }] },
    { rank: 6, name: "Luxembourg", value: "81.9", raw: 81.9, prevRank: 6, countries: [{ name: "Luxembourg", flagCode: "lu" }] },
    { rank: 7, name: "Czech Republic", value: "79.4", raw: 79.4, prevRank: 8, countries: [{ name: "Czech Republic", flagCode: "cz" }] },
    { rank: 8, name: "Australia", value: "78.9", raw: 78.9, prevRank: 7, countries: [{ name: "Australia", flagCode: "au" }] },
    { rank: 9, name: "Turkey", value: "76.0", raw: 76.0, prevRank: 11, countries: [{ name: "Turkey", flagCode: "tr" }] },
    { rank: 10, name: "Hungary", value: "75.6", raw: 75.6, prevRank: 10, countries: [{ name: "Hungary", flagCode: "hu" }] },
  ],

  detailedEntries: [
    {
      rank: 10, name: "Hungary", earnings: "75.6", category: "Europe", origin: comp(5, 3, 38, 23, 4),
      blurb: "Hungary has the lowest corporate tax rate in the OECD at 9% and a flat 15% personal income tax. Its territorial system fully exempts dividends and capital gains, with no withholding taxes.",
      standoutFact: "It ranks last of 38 on consumption taxes, yet 3rd on individual taxes.",
      sourceTag: TFP("Hungary"), countries: [{ name: "Hungary", flagCode: "hu" }],
    },
    {
      rank: 9, name: "Turkey", earnings: "76.0", category: "Europe and Asia", origin: comp(21, 6, 15, 22, 8),
      blurb: "Turkey's 20% dividend tax is below the OECD average of 24.7%, and capital gains on listed shares held for more than two years are exempt. It also has an allowance for corporate equity and exempts foreign dividend income, with a 94-country tax treaty network.",
      standoutFact: "The biggest climber in the top 10: up two places from 11th in 2025.",
      sourceTag: TFP("Turkey"), countries: [{ name: "Turkey", flagCode: "tr" }],
    },
    {
      rank: 8, name: "Australia", earnings: "78.9", category: "Oceania", origin: comp(29, 14, 9, 3, 23),
      blurb: "Australia taxes property on the value of land rather than buildings or improvements, integrates corporate and individual taxes on dividends to relieve double taxation, and has a low 10% GST.",
      standoutFact: "Down one place from 7th in 2025, but 3rd of 38 on property taxes.",
      sourceTag: TFP("Australia"), countries: [{ name: "Australia", flagCode: "au" }],
    },
    {
      rank: 7, name: "Czech Republic", earnings: "79.4", category: "Europe", origin: comp(9, 4, 32, 5, 11),
      blurb: "The Czech corporate tax rate of 21% is below the OECD average of 24.2%, with few complex incentives. There are no taxes on net wealth, corporate assets, capital increases, financial transactions or transfers of real property, and it has tax treaties with 99 countries.",
      standoutFact: "Up one place from 8th in 2025, and 4th of 38 on individual taxes.",
      sourceTag: TFP("Czech Republic"), countries: [{ name: "Czech Republic", flagCode: "cz" }],
    },
    {
      rank: 6, name: "Luxembourg", earnings: "81.9", category: "Europe", origin: comp(20, 21, 7, 15, 5),
      blurb: "Luxembourg's VAT applies to 87% of final consumption, a broad base. Long-term capital gains without substantial ownership are tax-exempt, and its cross-border regime has no withholding taxes on interest or royalties.",
      standoutFact: "Unchanged at 6th, and 5th of 38 on cross-border tax rules.",
      sourceTag: TF, countries: [{ name: "Luxembourg", flagCode: "lu" }],
    },
    {
      rank: 5, name: "Lithuania", earnings: "82.6", category: "Europe", origin: comp(3, 10, 23, 6, 16),
      blurb: "Lithuania has a low 17% corporate tax rate, full expensing of investment in machinery, equipment and intangible rights, and a relatively flat, low-rate individual income tax.",
      standoutFact: "The third Baltic state in the top five, and 3rd of 38 on corporate taxes.",
      sourceTag: TF, countries: [{ name: "Lithuania", flagCode: "lt" }],
    },
    {
      rank: 4, name: "Switzerland", earnings: "86.8", category: "Europe", origin: comp(7, 9, 4, 36, 2),
      blurb: "Switzerland combines a relatively low corporate tax rate of 19.5%, a low, broad-based consumption tax and an individual income tax that partially exempts capital gains.",
      standoutFact: "It makes the top four even though it ranks 36th of 38 on property taxes.",
      sourceTag: TF, countries: [{ name: "Switzerland", flagCode: "ch" }],
    },
    {
      rank: 3, name: "New Zealand", earnings: "88.2", category: "Oceania", origin: comp(31, 7, 1, 8, 14),
      blurb: "New Zealand has a relatively flat, low-rate individual income tax that largely exempts capital gains (combined top rate 39%), a broad-based VAT, and no taxes on inheritance, property transfers, assets or financial transactions.",
      standoutFact: "First of 38 on consumption taxes, despite ranking 31st on corporate taxes.",
      sourceTag: TF, countries: [{ name: "New Zealand", flagCode: "nz" }],
    },
    {
      rank: 2, name: "Latvia", earnings: "92.5", category: "Europe", origin: comp(1, 8, 22, 4, 6),
      blurb: "Latvia adopted Estonia's approach of taxing company profits only when they are distributed, and has a relatively efficient system for taxing labour income.",
      standoutFact: "First of 38 on corporate taxes.",
      sourceTag: TF, countries: [{ name: "Latvia", flagCode: "lv" }],
    },
    {
      rank: 1, name: "Estonia", earnings: "100.0", category: "Europe", origin: comp(2, 1, 24, 1, 7),
      blurb: "Estonia's 22% corporate tax applies only to distributed profits, its flat 22% individual income tax does not apply to dividend income, its property tax falls only on the value of land, and its territorial system exempts 100% of qualifying foreign profits, although the Tax Foundation's country profile notes that this system is limited to European countries.",
      standoutFact: "No. 1 for the 13th year in a row, yet only 24th of 38 on consumption taxes (its standard VAT rate is 24%): the index rewards design, not low rates.",
      sourceTag: TFP("Estonia"), countries: [{ name: "Estonia", flagCode: "ee" }],
    },
  ],

  keyTakeaway: {
    stat: "13",
    label: "years in a row Estonia has ranked No. 1",
    comparisonStat: "3 of top 5",
    comparisonLabel: "are Baltic states: Estonia, Latvia and Lithuania",
    note: "Canada ranks 15th and the United States 17th of 38. Scores are relative, with the best country set at 100; they measure tax design, not the tax burden.",
  },

  sourceNote: {
    dataPeriod: "International Tax Competitiveness Index 2026 (data as of July 2026)",
    lastUpdated: "November 22, 2026",
    sources:
      "Tax Foundation, International Tax Competitiveness Index 2026, by Alex Mengden and Luis Zarka, published October 19, 2026: Table 1 (2026 rankings and component ranks) and Table 2 (changes from last year), plus the report's 2026 rankings narrative and notable changes. Country lines for the Czech Republic, Australia, Turkey and Hungary come from the \"Strengths\" sections of the Tax Foundation's country profiles in its interactive index.",
    methodology:
      "The ranking is the Tax Foundation's, reproduced as published. It covers the 38 OECD member countries and scores more than 40 tax policy variables across corporate, individual, consumption, property and cross-border taxes, measuring both rate levels and how taxes are structured. Scores are relative: the best-performing country is set at 100, so a score of 100.0 is not a perfect system, and scores are not tax rates or tax burdens. The 2025 ranks used for the arrows are those restated in the 2026 edition under its current methodology, which can differ from the ranks first published in 2025. The index uses data available as of July 2026, so later reforms are not included. Country names follow the report.",
    sourceLinks: [
      { label: "Tax Foundation: International Tax Competitiveness Index 2026", href: "https://taxfoundation.org/research/all/global/2026-international-tax-competitiveness-index/" },
      { label: "Full report (PDF)", href: "https://taxfoundation.org/wp-content/uploads/2026/10/ITCI_26_book_v1.pdf" },
      { label: "Interactive index and country profiles", href: "https://taxfoundation.org/international-tax-index/" },
    ],
  },

  faqItems: [
    {
      question: "Which country has the best tax system in the world?",
      answer:
        "Among the 38 OECD countries, Estonia, according to the Tax Foundation's International Tax Competitiveness Index 2026. It scores 100.0 and has ranked first for 13 years in a row, mainly because it taxes company profits only when they are distributed and has a flat income tax.",
    },
    {
      question: "Which countries have the worst tax systems?",
      answer:
        "France ranks last of 38 (45.7), followed by Colombia (47.3), Italy (50.8), Spain (57.5) and Iceland (59.0). The report says France has the OECD's highest top corporate tax rate, 36.1% including surtaxes, plus production taxes and several distortionary property taxes, while Colombia has a net wealth tax, a financial transaction tax and a 35% corporate rate.",
    },
    {
      question: "Where does Canada rank?",
      answer:
        "Canada ranks 15th of 38 with a score of 72.2, the same as in 2025. Its best area is consumption taxes (8th); its weakest are individual taxes and cross-border rules (both 28th).",
    },
    {
      question: "Does this mean Estonians pay the lowest taxes?",
      answer:
        "No. The index measures how well a tax system is designed, not how much tax is collected. Estonia ranks only 24th of 38 on consumption taxes, with a standard VAT rate of 24%, and Switzerland ranks 36th on property taxes while placing 4th overall.",
    },
    {
      question: "Who makes this ranking?",
      answer:
        "The Tax Foundation, a US-based tax policy research organisation. The 2026 edition, by Alex Mengden and Luis Zarka, was published on October 19, 2026.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Countries with the Highest Government Debt Relative to GDP in 2026", href: "/rankings/highest-national-debt-to-gdp-2026" },
    { title: "The 10 Highest National Minimum Wages Among Countries Reviewed in 2026", href: "/rankings/highest-minimum-wage-by-country-2026" },
    { title: "The 20 Countries with the Highest GDP Per Capita in 2026", href: "/rankings/richest-countries-gdp-per-capita-2026" },
  ],
};
