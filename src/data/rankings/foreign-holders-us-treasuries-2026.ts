import { RankingArticle } from "./types";

const SRC = "US Treasury, TIC Major Foreign Holders of Treasury Securities, August 2026";

export const foreignHoldersUsTreasuries2026: RankingArticle = {
  slug: "foreign-holders-us-treasuries-2026",

  metaTitle: "Who Owns US Debt? The 10 Biggest Foreign Holders of Treasuries | Viszlyn",
  metaDescription:
    "Japan holds $1,068.3 billion of US Treasuries, the UK $1,009.5 billion and China $590.7 billion. The 10 biggest foreign holders of US debt, ranked with Treasury data for August 2026.",
  ogTitle: "Who Owns America's Debt? The 10 Biggest Foreign Holders, Ranked",
  ogDescription:
    "Japan is still #1, the UK has passed $1 trillion, and China has fallen to $590.7 billion. The top 10 foreign holders of US Treasuries, August 2026.",
  twitterTitle: "Who Owns America's Debt? Top 10 Foreign Holders",
  twitterDescription:
    "Japan $1,068.3B, UK $1,009.5B, China $590.7B. The 10 biggest foreign holders of US Treasuries (US Treasury, August 2026).",

  eyebrow: "Money",
  title: "Who Owns America's Debt? The 10 Biggest Foreign Holders of US Treasuries",
  dek: "Foreign investors held $9,331.7 billion of US Treasury securities at the end of August 2026. Japan is still the biggest holder, the United Kingdom is close behind, and China's holdings have fallen to $590.7 billion.",
  publishedDate: "November 13, 2026",
  lastUpdated: "November 13, 2026",
  dataPeriod: "End of August 2026, compared with August 2025 (US Treasury TIC data, released October 16, 2026)",
  heroImage: {
    src: "/heroes/foreign-holders-us-treasuries-2026.png",
    onPage: false,
    ogSrc: "/heroes/foreign-holders-us-treasuries-2026-og.png",
    alt: "Stacks of $100 bills sized by each country's holdings of US Treasury securities in August 2026: Japan $1,068.3 billion, United Kingdom $1,009.5 billion, China $590.7 billion, then Belgium, Canada, Cayman Islands, Luxembourg, France, Ireland and Taiwan. Source: US Treasury.",
  },

  quickAnswer:
    "Japan is the biggest foreign holder of US government debt, with $1,068.3 billion of Treasury securities at the end of August 2026. The United Kingdom is second with $1,009.5 billion, and China is third with $590.7 billion. Over the past year, Japan's holdings fell $115.6 billion and China's fell $109.0 billion, while the UK's rose $108.2 billion. Together, foreign investors held $9,331.7 billion of US Treasuries.",
  introParagraph:
    "When the US government borrows, it sells Treasury securities: bills, notes and bonds. Most are owned by Americans, including the Federal Reserve, but a large share is held abroad. This ranking uses the US Treasury's own count of foreign holdings, published monthly as part of its Treasury International Capital (TIC) data. The latest figures, released on October 16, 2026, show holdings at the end of August 2026. We compare each country with August 2025 to show who has been buying and who has been pulling back.",
  calloutBox: {
    label: "Why Belgium, Luxembourg and the Cayman Islands rank so high",
    body: "The TIC data records Treasuries by the country where they are held, which is often where a bank or custodian keeps them, not necessarily where the owner lives. The Treasury cautions that securities held in overseas custody accounts may not be attributed to their actual owners. Financial centres such as the UK, Belgium, Luxembourg, the Cayman Islands and Ireland hold Treasuries on behalf of investors from many other countries, so their totals do not only reflect their own governments or residents.",
  },

  chartTitle: "Holdings of US Treasury securities, end of August 2026 ($ billions)",
  chartSource: SRC,
  chartTapNote: "Tap any country to jump to its full breakdown below.",
  entryValueLabel: "US Treasuries held (Aug 2026):",
  comparisonLabel: "Aug 2025",
  chartItems: [
    { rank: 1, name: "Japan", value: "$1,068.3B", raw: 1068.3, prevRank: 1 },
    { rank: 2, name: "United Kingdom", value: "$1,009.5B", raw: 1009.5, prevRank: 2 },
    { rank: 3, name: "China", value: "$590.7B", raw: 590.7, prevRank: 3 },
    { rank: 4, name: "Belgium", value: "$490.5B", raw: 490.5, prevRank: 4 },
    { rank: 5, name: "Canada", value: "$464.6B", raw: 464.6, prevRank: 5 },
    { rank: 6, name: "Cayman Islands", value: "$463.0B", raw: 463.0, prevRank: 7 },
    { rank: 7, name: "Luxembourg", value: "$448.2B", raw: 448.2, prevRank: 6 },
    { rank: 8, name: "France", value: "$363.4B", raw: 363.4, prevRank: 8 },
    { rank: 9, name: "Ireland", value: "$352.1B", raw: 352.1, prevRank: 9 },
    { rank: 10, name: "Taiwan", value: "$298.4B", raw: 298.4, prevRank: 10 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Taiwan",
      earnings: "$298.4 billion",
      category: "Asia-Pacific",
      blurb: "Taiwan's holdings fell $15.0 billion (4.79%) from $313.4 billion in August 2025, but it kept 10th place.",
      standoutFact: "Taiwan holds 3.2% of all foreign-held Treasuries.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Taiwan",
    },
    {
      rank: 9,
      name: "Ireland",
      earnings: "$352.1 billion",
      category: "Europe",
      blurb: "Ireland's holdings rose $12.1 billion (3.56%) from $340.0 billion in August 2025.",
      standoutFact: "Ireland is a major base for investment funds, which is one reason a country of just over 5 million people ranks in the top 10.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Republic_of_Ireland",
    },
    {
      rank: 8,
      name: "France",
      earnings: "$363.4 billion",
      category: "Europe",
      blurb: "France's holdings fell $25.7 billion (6.60%) from $389.1 billion in August 2025.",
      standoutFact: "France is one of four top-10 holders whose holdings fell over the year, along with Japan, China and Taiwan.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/France",
    },
    {
      rank: 7,
      name: "Luxembourg",
      earnings: "$448.2 billion",
      category: "Europe",
      blurb: "Luxembourg's holdings rose $37.4 billion (9.10%) from $410.8 billion in August 2025, but it slipped from 6th to 7th as the Cayman Islands grew faster.",
      standoutFact: "Luxembourg is a major centre for investment funds and custody banks, so much of what is recorded here belongs to investors elsewhere.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Luxembourg",
    },
    {
      rank: 6,
      name: "Cayman Islands",
      earnings: "$463.0 billion",
      category: "Americas",
      blurb: "The Cayman Islands' holdings rose $52.5 billion (12.79%) from $410.5 billion in August 2025, the fastest growth in the top 10, lifting it from 7th to 6th.",
      standoutFact: "It is now just $1.6 billion behind Canada in 5th place.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Cayman_Islands",
    },
    {
      rank: 5,
      name: "Canada",
      earnings: "$464.6 billion",
      category: "Americas",
      blurb: "Canada's holdings rose $20.6 billion (4.64%) from $444.0 billion in August 2025.",
      standoutFact: "Canada added $38.3 billion in August 2026 alone.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Canada",
    },
    {
      rank: 4,
      name: "Belgium",
      earnings: "$490.5 billion",
      category: "Europe",
      blurb: "Belgium's holdings rose $39.4 billion (8.73%) from $451.1 billion in August 2025.",
      standoutFact: "Belgium is home to Euroclear, one of the world's largest custodians of securities, which helps explain why a country of under 12 million people ranks 4th.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Belgium",
    },
    {
      rank: 3,
      name: "China",
      earnings: "$590.7 billion",
      category: "Asia-Pacific",
      blurb: "Mainland China's holdings fell $109.0 billion (15.58%) from $699.7 billion in August 2025, the biggest percentage drop in the top 10. The Treasury lists Hong Kong separately.",
      standoutFact: "China held $1,316.7 billion at its peak in November 2013. Its August 2026 total is the lowest since August 2008.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/China",
    },
    {
      rank: 2,
      name: "United Kingdom",
      earnings: "$1,009.5 billion",
      category: "Europe",
      blurb: "UK holdings rose $108.2 billion (12.00%) from $901.3 billion in August 2025, the biggest dollar increase in the top 10.",
      standoutFact: "The UK passed $1 trillion for the first time and is now $58.8 billion behind Japan. As a global financial centre, London holds Treasuries for investors from many countries.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/United_Kingdom",
    },
    {
      rank: 1,
      name: "Japan",
      earnings: "$1,068.3 billion",
      category: "Asia-Pacific",
      blurb: "Japan's holdings fell $115.6 billion (9.76%) from $1,183.9 billion in August 2025, the biggest dollar drop in the top 10, but it is still the largest foreign holder.",
      standoutFact: "Japan holds 11.45% of all foreign-held Treasuries. Its holdings peaked at about $1.33 trillion in November 2021.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Japan",
    },
  ],

  keyTakeaway: {
    stat: "$9,331.7B",
    label: "Total foreign holdings of US Treasuries, August 2026",
    comparisonStat: "59.46%",
    comparisonLabel: "Share held by the top 10 ($5,548.7 billion)",
    note: "The big shift is between the top three. Japan and China together held $224.6 billion less than a year earlier, while the UK added $108.2 billion. Three financial centres, Belgium, Luxembourg and the Cayman Islands, now hold $1,401.7 billion between them, more than twice China's total.",
  },

  sourceNote: {
    dataPeriod: "End of August 2026, compared with end of August 2025",
    lastUpdated: "November 13, 2026",
    sources:
      "US Department of the Treasury, Treasury International Capital (TIC) System, \"Major Foreign Holders of Treasury Securities\" (holdings at end of period), released October 16, 2026, with historical series.",
    methodology:
      "Holdings are in billions of US dollars as published by the Treasury, without rounding. August 2025 values and ranks are from the same Treasury table, which can revise earlier months. Changes, percentage changes, shares of the foreign total and combined totals are calculated by Viszlyn from the Treasury figures. Countries are attributed by where the securities are held, which may be a custodial or financial centre rather than the owner's home country; the Treasury cautions that securities held in overseas custody accounts may not be attributed to their actual owners. \"China\" is mainland China; the Treasury lists Hong Kong separately. The next TIC release, with September 2026 data, is scheduled for November 18, 2026.",
    sourceLinks: [
      { label: "US Treasury: Major Foreign Holders of Treasury Securities (Table 5)", href: "https://ticdata.treasury.gov/resource-center/data-chart-center/tic/Documents/slt_table5.html" },
      { label: "US Treasury: Major Foreign Holders, historical series", href: "https://ticdata.treasury.gov/resource-center/data-chart-center/tic/Documents/mfhhis01.html" },
      { label: "US Treasury: Treasury International Capital Data for August 2026 (press release)", href: "https://home.treasury.gov/news/press-releases/sb0662" },
    ],
  },

  faqItems: [
    {
      question: "Which country owns the most US debt?",
      answer:
        "Japan, with $1,068.3 billion of US Treasury securities at the end of August 2026, according to the US Treasury. The United Kingdom was second with $1,009.5 billion and China third with $590.7 billion.",
    },
    {
      question: "How much US debt does China own?",
      answer:
        "Mainland China held $590.7 billion of US Treasuries at the end of August 2026, down $109.0 billion from a year earlier and well below its peak of $1,316.7 billion in November 2013. Hong Kong is counted separately.",
    },
    {
      question: "How much US debt do foreign countries hold in total?",
      answer:
        "Foreign investors held $9,331.7 billion of US Treasury securities at the end of August 2026. The top 10 holders accounted for $5,548.7 billion of that, or 59.46%.",
    },
    {
      question: "Why do small places like the Cayman Islands and Luxembourg hold so much US debt?",
      answer:
        "The Treasury's data records securities by the country where they are held. Financial centres such as the Cayman Islands, Luxembourg, Belgium and Ireland hold Treasuries for funds and investors based elsewhere, so their totals are much larger than their own economies would suggest.",
    },
    {
      question: "How often is this data updated?",
      answer:
        "Monthly. The August 2026 figures were released on October 16, 2026, and the next release, with September 2026 data, is scheduled for November 18, 2026.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Countries with the Highest Government Debt Relative to GDP in 2026", href: "/rankings/highest-national-debt-to-gdp-2026" },
    { title: "The 10 Countries With the Largest Gold Reserves in 2026", href: "/rankings/largest-gold-reserves-2026" },
    { title: "The Economies With the Biggest Current Account Surpluses in 2026", href: "/rankings/biggest-current-account-surpluses-2026" },
    { title: "The 25 Largest Economies in the World in 2026", href: "/rankings/largest-economies-world-2026" },
  ],
};
