import { RankingArticle } from "./types";

const SRC = "SIPRI Arms Transfers Database, March 2026";

export const biggestArmsExporters2026: RankingArticle = {
  slug: "biggest-arms-exporters-2026",

  metaTitle: "The World's 10 Biggest Arms Exporters, 2021–2025 | Viszlyn",
  metaDescription:
    "The US supplied 42% of the world's arms exports in 2021–25, more than four times France. See the 10 biggest arms exporters, ranked with SIPRI's latest data.",
  ogTitle: "The World's 10 Biggest Arms Exporters, Ranked",
  ogDescription:
    "The US now supplies 42% of global arms exports, while Russia's share fell from 21% to 6.8%. The top 10 exporters of 2021–25, ranked by SIPRI.",
  twitterTitle: "The World's 10 Biggest Arms Exporters",
  twitterDescription:
    "US 42%, France 9.8%, Russia 6.8%. The top 10 arms exporters of 2021–25, ranked by SIPRI.",

  eyebrow: "World",
  title: "The World's 10 Biggest Arms Exporters, 2021–2025",
  dek: "Global arms transfers grew 9.2% in 2021–25, the biggest increase since 2011–15. The United States now supplies 42% of the world's arms exports, while Russia's share fell from 21% to 6.8%.",
  publishedDate: "November 10, 2026",
  lastUpdated: "November 10, 2026",
  dataPeriod: "2021–25 (five-year period), SIPRI Arms Transfers Database (March 2026)",
  heroImage: {
    src: "/heroes/biggest-arms-exporters-2026.png",
    ogSrc: "/heroes/biggest-arms-exporters-2026-og.png",
    alt: "Bar chart of the world's 10 biggest arms exporters by share of global arms exports in 2021–25, led by the United States at 42%, then France at 9.8% and Russia at 6.8%. Source: SIPRI.",
  },

  quickAnswer:
    "The United States was the world's biggest arms exporter in 2021–25, with 42% of global arms exports, more than the next seven suppliers combined. France was second with 9.8%, followed by Russia (6.8%), Germany (5.7%) and China (5.6%). Russia's share fell from 21% in 2016–20, and it is the only top-10 exporter whose export volume fell.",
  introParagraph:
    "This ranking uses the Stockholm International Peace Research Institute (SIPRI), which tracks international transfers of major arms such as aircraft, ships, missiles and armoured vehicles. SIPRI compares five-year periods, because deliveries are uneven from year to year, so this ranking covers 2021–25 and compares it with 2016–20. Shares are based on SIPRI's Trend Indicator Value (TIV), which measures the volume of military hardware transferred, not its price in dollars. According to SIPRI, global arms transfers in 2021–25 were 9.2% higher than in 2016–20, the biggest increase since 2011–15.",
  calloutBox: {
    label: "These figures measure volume, not dollars",
    body: "SIPRI's Trend Indicator Value (TIV) is a standard unit based on the military capability of the weapons transferred, not their sale price, so the shares here show how much military hardware each country supplied rather than how much money it earned. SIPRI notes its figures are often estimates. Two weak spots it flags: US exports to Ukraine in 2025, where increased secrecy makes reliable estimates difficult, and Algeria's imports, which may be underestimated.",
  },

  chartTitle: "Share of global arms exports, 2021–25 (%)",
  chartSource: SRC,
  chartTapNote: "Tap any country to jump to its full breakdown below.",
  entryValueLabel: "Share of global arms exports:",
  chartItems: [
    { rank: 1, name: "United States", value: "42%", raw: 42 },
    { rank: 2, name: "France", value: "9.8%", raw: 9.8 },
    { rank: 3, name: "Russia", value: "6.8%", raw: 6.8 },
    { rank: 4, name: "Germany", value: "5.7%", raw: 5.7 },
    { rank: 5, name: "China", value: "5.6%", raw: 5.6 },
    { rank: 6, name: "Italy", value: "5.1%", raw: 5.1 },
    { rank: 7, name: "Israel", value: "4.4%", raw: 4.4 },
    { rank: 8, name: "United Kingdom", value: "3.4%", raw: 3.4 },
    { rank: 9, name: "South Korea", value: "3.0%", raw: 3.0 },
    { rank: 10, name: "Spain", value: "2.3%", raw: 2.3 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "Spain",
      earnings: "2.3%",
      category: "Europe",
      blurb: "Spain's share was almost unchanged, at 2.4% in 2016–20 and 2.3% in 2021–25, while its export volume rose 6.7%.",
      standoutFact: "Saudi Arabia is Spain's biggest customer, taking 28% of Spanish arms exports, followed by Türkiye (16%) and Belgium (12%).",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Spain",
    },
    {
      rank: 9,
      name: "South Korea",
      earnings: "3.0%",
      category: "Asia-Pacific",
      blurb: "South Korea's arms exports rose 24% compared with 2016–20, lifting its share from 2.6% to 3.0%.",
      standoutFact: "Poland takes 58% of South Korea's arms exports, followed by the Philippines (18%) and the UAE (9.5%).",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/South_Korea",
    },
    {
      rank: 8,
      name: "United Kingdom",
      earnings: "3.4%",
      category: "Europe",
      blurb: "UK arms exports rose 13% compared with 2016–20, for a 3.4% share of the global total.",
      standoutFact: "Qatar is the UK's biggest customer, with 31% of British arms exports, followed by the United States (14%) and Ukraine (13%).",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/United_Kingdom",
    },
    {
      rank: 7,
      name: "Israel",
      earnings: "4.4%",
      category: "Middle East",
      blurb: "Israel's arms exports rose 56% compared with 2016–20, lifting its share from 3.1% to 4.4%.",
      standoutFact: "India is Israel's biggest customer, taking 29% of Israeli arms exports, followed by Germany (21%) and the United States (7.8%).",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Israel",
    },
    {
      rank: 6,
      name: "Italy",
      earnings: "5.1%",
      category: "Europe",
      blurb: "Italy's arms exports rose 157% compared with 2016–20, the biggest increase of any top-10 exporter, more than doubling its share from 2.2% to 5.1%.",
      standoutFact: "Qatar (26%), Kuwait (17%) and Indonesia (12%) are Italy's three biggest customers.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Italy",
    },
    {
      rank: 5,
      name: "China",
      earnings: "5.6%",
      category: "Asia-Pacific",
      blurb: "China's arms exports rose 11% compared with 2016–20, for a 5.6% share of the global total.",
      standoutFact: "Pakistan takes 61% of China's arms exports, the highest share any single customer has with a top-10 exporter.",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/China",
    },
    {
      rank: 4,
      name: "Germany",
      earnings: "5.7%",
      category: "Europe",
      blurb: "Germany's arms exports rose 15% compared with 2016–20, for a 5.7% share of the global total.",
      standoutFact: "Ukraine is Germany's biggest customer, with 24% of German arms exports, followed by Egypt (14%) and Israel (10%).",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Germany",
    },
    {
      rank: 3,
      name: "Russia",
      earnings: "6.8%",
      category: "Europe/Asia",
      blurb: "Russia's arms exports fell 64% compared with 2016–20, and its share of the global total dropped from 21% to 6.8%. It is the only top-10 exporter whose export volume fell.",
      standoutFact: "India is still Russia's biggest customer by far, taking 48% of Russian arms exports, followed by China (13%) and Belarus (13%).",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/Russia",
    },
    {
      rank: 2,
      name: "France",
      earnings: "9.8%",
      category: "Europe",
      blurb: "France's arms exports rose 21% compared with 2016–20, lifting its share from 8.8% to 9.8% and making it the world's second-biggest arms exporter.",
      standoutFact: "India is France's biggest customer, taking 24% of French arms exports, followed by Egypt (11%) and Greece (10%).",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/France",
    },
    {
      rank: 1,
      name: "United States",
      earnings: "42%",
      category: "Americas",
      blurb: "The United States' arms exports rose 27% compared with 2016–20, lifting its share of the global total from 36% to 42%, more than four times France's share.",
      standoutFact: "Its biggest customers are Saudi Arabia (12%), Ukraine (9.4%) and Japan (8.9%). Its 42% share is more than the next seven exporters combined (40.8%).",
      sourceTag: SRC,
      wikipediaUrl: "https://en.wikipedia.org/wiki/United_States",
    },
  ],

  keyTakeaway: {
    stat: "42%",
    label: "US share of global arms exports, 2021–25",
    comparisonStat: "6.8%",
    comparisonLabel: "Russia's share, down from 21% in 2016–20",
    note: "Two other shifts stand out on the importing side. Ukraine went from 0.1% of global arms imports in 2016–20 to 9.7% in 2021–25, making it the world's biggest arms importer, supplied mainly by the United States (41%), Germany (14%) and Poland (9.4%). India, the world's second-biggest importer with 8.2%, now buys less from Russia: Russia's share of India's arms imports dropped from 70% in 2011–15 to 40% in 2021–25, while France (29%) and Israel (15%) together supplied 44%.",
  },

  sourceNote: {
    dataPeriod: "2021–25 (five-year period), compared with 2016–20",
    lastUpdated: "November 10, 2026",
    sources:
      "Stockholm International Peace Research Institute (SIPRI), \"Trends in International Arms Transfers, 2025\", SIPRI Fact Sheet, March 2026 (DOI: 10.55163/OSMS3959), based on the SIPRI Arms Transfers Database.",
    methodology:
      "Shares and changes are based on SIPRI's Trend Indicator Value (TIV), which measures the volume of major arms transferred using a standard unit, not the financial value of the deals. Shares are shown as SIPRI publishes them (one decimal place below 10%, whole numbers above), so they may not add up exactly. Percentage changes compare the volume of exports in 2021–25 with 2016–20. Customer shares are each recipient's share of that exporter's arms exports. The \"next seven combined\" total (40.8%) is calculated by Viszlyn from SIPRI's shares. SIPRI notes that its figures are often estimates, and flags US arms exports to Ukraine in 2025 and Algeria's imports as particularly uncertain.",
    sourceLinks: [
      { label: "SIPRI Fact Sheet: Trends in International Arms Transfers, 2025 (PDF)", href: "https://www.sipri.org/sites/default/files/2026-03/fs_2603_at_2025.pdf" },
      { label: "SIPRI: Trends in International Arms Transfers, 2025", href: "https://www.sipri.org/publications/2026/sipri-fact-sheets/trends-international-arms-transfers-2025" },
      { label: "SIPRI Arms Transfers Database: sources and methods", href: "https://www.sipri.org/databases/armstransfers/sources-and-methods" },
    ],
  },

  faqItems: [
    {
      question: "Which country exports the most weapons?",
      answer:
        "The United States, with 42% of global arms exports in 2021–25 according to SIPRI. That is more than four times the share of France, the second-biggest exporter, at 9.8%.",
    },
    {
      question: "How much have Russia's arms exports fallen?",
      answer:
        "Russia's arms exports in 2021–25 were 64% lower than in 2016–20, and its share of global exports fell from 21% to 6.8%. It dropped from the world's second-biggest exporter to third, behind France.",
    },
    {
      question: "Is India still Russia's biggest arms customer?",
      answer:
        "Yes. India took 48% of Russia's arms exports in 2021–25. But Russia's share of India's own arms imports dropped from 70% in 2011–15 to 40% in 2021–25, as France (29%) and Israel (15%) supplied more.",
    },
    {
      question: "Which country imports the most weapons?",
      answer:
        "Ukraine, with 9.7% of global arms imports in 2021–25, up from 0.1% in 2016–20. India was second with 8.2%.",
    },
    {
      question: "What is SIPRI's Trend Indicator Value (TIV)?",
      answer:
        "A standard unit SIPRI uses to measure the volume of arms transfers based on the military capability of the weapons, not their sale price. It lets SIPRI compare transfers between countries and over time, but it is not a dollar figure.",
    },
  ],

  relatedLinks: [
    { title: "The World's 10 Biggest Military Spenders in 2025", href: "/rankings/biggest-military-spenders-2026" },
    { title: "The World's Nuclear Arsenals, Ranked (2026)", href: "/rankings/nuclear-arsenals-ranked-2026" },
    { title: "The 10 Least Peaceful Countries in the World in 2026", href: "/rankings/least-peaceful-countries-2026" },
    { title: "The World's 20 Largest Economies in 2030: IMF Projections Ranked", href: "/rankings/largest-economies-2030-imf-projections" },
  ],
};
