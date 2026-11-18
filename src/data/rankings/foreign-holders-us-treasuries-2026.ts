import { RankingArticle } from "./types";

const SRC = "US Treasury, TIC Major Foreign Holders of Treasury Securities, September 2026";

export const foreignHoldersUsTreasuries2026: RankingArticle = {
  slug: "foreign-holders-us-treasuries-2026",

  metaTitle: "Who Owns US Debt? The 10 Biggest Foreign Holders of Treasuries | Viszlyn",
  metaDescription:
    "Japan holds $1,063.1 billion of US Treasuries, the UK $985.8 billion and China $563.9 billion. The 10 biggest foreign holders of US debt, ranked with Treasury data for September 2026.",
  ogTitle: "Who Owns America's Debt? The 10 Biggest Foreign Holders, Ranked",
  ogDescription:
    "Japan is still No. 1, the UK is closing in, and China has fallen to $563.9 billion. The top 10 foreign holders of US Treasuries, September 2026.",
  twitterTitle: "Who Owns America's Debt? Top 10 Foreign Holders",
  twitterDescription:
    "Japan $1,063.1B, UK $985.8B, China $563.9B. The 10 biggest foreign holders of US Treasuries (US Treasury, September 2026).",

  eyebrow: "Money",
  title: "Who Owns America's Debt? The 10 Biggest Foreign Holders of US Treasuries",
  dek: "Foreign investors held $9,241.2 billion of US Treasury securities at the end of September 2026. Japan is still the biggest holder, the United Kingdom is close behind, and China's holdings have fallen to $563.9 billion.",
  publishedDate: "November 13, 2026",
  lastUpdated: "November 18, 2026",
  dataPeriod: "End of September 2026, compared with September 2025 (US Treasury TIC data, released November 18, 2026)",
  heroImage: {
    src: "/heroes/foreign-holders-us-treasuries-2026.png",
    ogSrc: "/heroes/foreign-holders-us-treasuries-2026-og.png",
    alt: "Stacks of $100 bills sized by each country's holdings of US Treasury securities in September 2026: Japan $1,063.1 billion, United Kingdom $985.8 billion, China $563.9 billion, then Belgium, Cayman Islands, Canada, Luxembourg, Ireland, France and Taiwan. Source: US Treasury.",
  },

  quickAnswer:
    "Japan is the biggest foreign holder of US government debt, with $1,063.1 billion of Treasury securities at the end of September 2026. The United Kingdom is second with $985.8 billion, and China is third with $563.9 billion. Over the past year, China's holdings fell $135.3 billion and Japan's fell $126.2 billion, while the UK's rose $123.3 billion. Together, foreign investors held $9,241.2 billion of US Treasuries.",
  introParagraph:
    "When the US government borrows, it sells Treasury securities: bills, notes and bonds. Most are owned by Americans, including the Federal Reserve, but a large share is held abroad. This ranking uses the US Treasury's own count of foreign holdings, published monthly as part of its Treasury International Capital (TIC) data. The latest figures, released on November 18, 2026, show holdings at the end of September 2026. We compare each country with September 2025 to show who has been buying and who has been pulling back.",
  calloutBox: {
    label: "Why Belgium, Luxembourg and the Cayman Islands rank so high",
    body: "The TIC data records Treasuries by the country where they are held, which is often where a bank or custodian keeps them, not necessarily where the owner lives. The Treasury cautions that securities held in overseas custody accounts may not be attributed to their actual owners. Financial centres such as the UK, Belgium, Luxembourg, the Cayman Islands and Ireland hold Treasuries on behalf of investors from many other countries, so their totals do not only reflect their own governments or residents.",
  },

  chartTitle: "Holdings of US Treasury securities, end of September 2026 ($ billions)",
  chartSource: SRC,
  chartTapNote: "Tap any country to jump to its full breakdown below.",
  entryValueLabel: "US Treasuries held (Sep 2026):",
  comparisonLabel: "Sep 2025",
  chartItems: [
    { rank: 1, name: "Japan", value: "$1,063.1B", raw: 1063.1, prevRank: 1 },
    { rank: 2, name: "United Kingdom", value: "$985.8B", raw: 985.8, prevRank: 2 },
    { rank: 3, name: "China", value: "$563.9B", raw: 563.9, prevRank: 3 },
    { rank: 4, name: "Belgium", value: "$507.9B", raw: 507.9, prevRank: 5 },
    { rank: 5, name: "Cayman Islands", value: "$486.8B", raw: 486.8, prevRank: 6 },
    { rank: 6, name: "Canada", value: "$467.7B", raw: 467.7, prevRank: 4 },
    { rank: 7, name: "Luxembourg", value: "$445.0B", raw: 445.0, prevRank: 7 },
    { rank: 8, name: "Ireland", value: "$344.8B", raw: 344.8, prevRank: 9 },
    { rank: 9, name: "France", value: "$332.0B", raw: 332.0, prevRank: 8 },
    { rank: 10, name: "Taiwan", value: "$290.9B", raw: 290.9, prevRank: 10 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Taiwan",
      earnings: "$290.9 billion",
      category: "Asia-Pacific",
      blurb: "Taiwan's holdings fell $21.6 billion (6.91%) from $312.5 billion in September 2025, but it kept 10th place.",
      standoutFact: "Taiwan is just $1.9 billion ahead of Switzerland ($289.0 billion) in 11th place.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Taiwan",
    },
    {
      rank: 9,
      name: "France",
      earnings: "$332.0 billion",
      category: "Europe",
      blurb: "France's holdings fell $43.5 billion (11.58%) from $375.5 billion in September 2025, and it slipped from 8th to 9th.",
      standoutFact: "France's holdings fell $31.4 billion in September 2026 alone, the biggest one-month drop in the top 10.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/France",
    },
    {
      rank: 8,
      name: "Ireland",
      earnings: "$344.8 billion",
      category: "Europe",
      blurb: "Ireland's holdings rose $4.8 billion (1.41%) from $340.0 billion in September 2025, lifting it from 9th to 8th as France fell back.",
      standoutFact: "Ireland is a major base for investment funds, which is one reason a country of just over 5 million people ranks in the top 10.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Republic_of_Ireland",
    },
    {
      rank: 7,
      name: "Luxembourg",
      earnings: "$445.0 billion",
      category: "Europe",
      blurb: "Luxembourg's holdings rose $24.4 billion (5.80%) from $420.6 billion in September 2025, and it held 7th place.",
      standoutFact: "Luxembourg is a major centre for investment funds and custody banks, so much of what is recorded here belongs to investors elsewhere.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Luxembourg",
    },
    {
      rank: 6,
      name: "Canada",
      earnings: "$467.7 billion",
      category: "Americas",
      blurb: "Canada's holdings fell $8.4 billion (1.76%) from $476.1 billion in September 2025, and it dropped from 4th to 6th as Belgium and the Cayman Islands grew.",
      standoutFact: "Canada added $3.1 billion in September 2026, but Belgium and the Cayman Islands grew much faster over the year.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Canada",
    },
    {
      rank: 5,
      name: "Cayman Islands",
      earnings: "$486.8 billion",
      category: "Americas",
      blurb: "The Cayman Islands' holdings rose $60.0 billion (14.06%) from $426.8 billion in September 2025, lifting it from 6th to 5th.",
      standoutFact: "It added $23.8 billion in September 2026 alone, the biggest one-month rise in the top 10.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Cayman_Islands",
    },
    {
      rank: 4,
      name: "Belgium",
      earnings: "$507.9 billion",
      category: "Europe",
      blurb: "Belgium's holdings rose $44.3 billion (9.56%) from $463.6 billion in September 2025, lifting it from 5th to 4th.",
      standoutFact: "Belgium is home to Euroclear, one of the world's largest custodians of securities, which helps explain why a country of under 12 million people ranks 4th.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Belgium",
    },
    {
      rank: 3,
      name: "China",
      earnings: "$563.9 billion",
      category: "Asia-Pacific",
      blurb: "Mainland China's holdings fell $135.3 billion (19.35%) from $699.2 billion in September 2025, the biggest drop in the top 10 in both dollars and percentage. The Treasury lists Hong Kong separately.",
      standoutFact: "China held $1,316.7 billion at its peak in November 2013, more than twice its September 2026 total.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/China",
    },
    {
      rank: 2,
      name: "United Kingdom",
      earnings: "$985.8 billion",
      category: "Europe",
      blurb: "UK holdings rose $123.3 billion (14.30%) from $862.5 billion in September 2025, the biggest increase in the top 10 in both dollars and percentage.",
      standoutFact: "The UK is now $77.3 billion behind Japan. As a global financial centre, London holds Treasuries for investors from many countries.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/United_Kingdom",
    },
    {
      rank: 1,
      name: "Japan",
      earnings: "$1,063.1 billion",
      category: "Asia-Pacific",
      blurb: "Japan's holdings fell $126.2 billion (10.61%) from $1,189.3 billion in September 2025, but it is still the largest foreign holder.",
      standoutFact: "Japan holds 11.50% of all foreign-held Treasuries. Its holdings peaked at about $1.33 trillion in November 2021.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Japan",
    },
  ],

  keyTakeaway: {
    stat: "$9,241.2B",
    label: "Total foreign holdings of US Treasuries, September 2026",
    comparisonStat: "59.39%",
    comparisonLabel: "Share held by the top 10 ($5,487.9 billion)",
    note: "The big shift is between the top three. Japan and China together held $261.5 billion less than a year earlier, while the UK added $123.3 billion. Three financial centres, Belgium, the Cayman Islands and Luxembourg, now hold $1,439.7 billion between them, more than twice China's total. Overall, foreign holdings were almost unchanged from September 2025 (up $3.0 billion).",
  },

  sourceNote: {
    dataPeriod: "End of September 2026, compared with end of September 2025",
    lastUpdated: "November 18, 2026",
    sources:
      "US Department of the Treasury, Treasury International Capital (TIC) System, \"Major Foreign Holders of Treasury Securities\" (Table 5, holdings at end of period), released November 18, 2026, with historical series.",
    methodology:
      "Holdings are in billions of US dollars as published by the Treasury, without rounding. September 2025 values and ranks are from the same Treasury table, which can revise earlier months. Changes, percentage changes, shares of the foreign total and combined totals are calculated by Viszlyn from the Treasury figures. Countries are attributed by where the securities are held, which may be a custodial or financial centre rather than the owner's home country; the Treasury cautions that securities held in overseas custody accounts may not be attributed to their actual owners. \"China\" is mainland China; the Treasury lists Hong Kong separately. The Treasury publishes new figures monthly, and we update this ranking with each release.",
    sourceLinks: [
      { label: "US Treasury: Major Foreign Holders of Treasury Securities (Table 5)", href: "https://ticdata.treasury.gov/resource-center/data-chart-center/tic/Documents/slt_table5.html" },
      { label: "US Treasury: Major Foreign Holders, historical series", href: "https://ticdata.treasury.gov/resource-center/data-chart-center/tic/Documents/mfhhis01.html" },
    ],
  },

  faqItems: [
    {
      question: "Which country owns the most US debt?",
      answer:
        "Japan, with $1,063.1 billion of US Treasury securities at the end of September 2026, according to the US Treasury. The United Kingdom was second with $985.8 billion and China third with $563.9 billion.",
    },
    {
      question: "How much US debt does China own?",
      answer:
        "Mainland China held $563.9 billion of US Treasuries at the end of September 2026, down $135.3 billion from a year earlier and well below its peak of $1,316.7 billion in November 2013. Hong Kong is counted separately.",
    },
    {
      question: "How much US debt do foreign countries hold in total?",
      answer:
        "Foreign investors held $9,241.2 billion of US Treasury securities at the end of September 2026. The top 10 holders accounted for $5,487.9 billion of that, or 59.39%.",
    },
    {
      question: "Why do small places like the Cayman Islands and Luxembourg hold so much US debt?",
      answer:
        "The Treasury's data records securities by the country where they are held. Financial centres such as the Cayman Islands, Luxembourg, Belgium and Ireland hold Treasuries for funds and investors based elsewhere, so their totals are much larger than their own economies would suggest.",
    },
    {
      question: "How often is this data updated?",
      answer:
        "Monthly. The September 2026 figures were released on November 18, 2026. We update this ranking when each new month is published.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Countries with the Highest Government Debt Relative to GDP in 2026", href: "/rankings/highest-national-debt-to-gdp-2026" },
    { title: "The 10 Countries With the Largest Gold Reserves in 2026", href: "/rankings/largest-gold-reserves-2026" },
    { title: "The Economies With the Biggest Current Account Surpluses in 2026", href: "/rankings/biggest-current-account-surpluses-2026" },
    { title: "The 25 Largest Economies in the World in 2026", href: "/rankings/largest-economies-world-2026" },
  ],
};
