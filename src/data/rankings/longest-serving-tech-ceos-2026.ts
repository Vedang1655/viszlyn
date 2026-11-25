import { RankingArticle } from "./types";

const P = "/rankings/longest-serving-tech-ceos-2026";
const MC = "Market cap: CompaniesMarketCap snapshot, November 25, 2026";

export const longestServingTechCeos2026: RankingArticle = {
  slug: "longest-serving-tech-ceos-2026",

  metaTitle: "The 10 Longest-Serving Tech CEOs in 2026 (Jensen Huang Is No. 1) | Viszlyn",
  metaDescription:
    "Jensen Huang has led Nvidia for 33 years, the longest of any CEO of a US$100 billion+ tech company, even after a brief exit in November 2026. See the top 10, from Pony Ma to Brian Chesky.",
  ogTitle: "The Longest-Serving Tech CEOs in 2026",
  ogDescription:
    "Jensen Huang (33 years), Pony Ma (28) and Marc Benioff (27) lead the CEOs of the world's biggest tech companies by time in the job.",
  twitterTitle: "The 10 Longest-Serving Tech CEOs (2026)",
  twitterDescription:
    "Jensen Huang 33 yrs. Pony Ma 28. Marc Benioff 27. Mark Zuckerberg 22. Who has run a US$100B+ tech company the longest?",

  eyebrow: "Tech",
  title: "The 10 Longest-Serving Tech CEOs in 2026",
  dek: "Nvidia's Jensen Huang has been CEO since he co-founded the company in 1993, a run interrupted only by a brief exit from November 11 to 22, 2026. Here are the 10 CEOs who have led the world's biggest tech companies the longest.",
  publishedDate: "November 25, 2026",
  lastUpdated: "November 25, 2026",
  dataPeriod: "Tenures as of November 25, 2026; companies worth over US$100 billion on that date",
  heroImage: {
    src: "/heroes/longest-serving-tech-ceos-2026.png",
    ogSrc: "/heroes/longest-serving-tech-ceos-2026-og.png",
    alt: "Timeline bars showing how long the 10 longest-serving tech CEOs have led their companies: Jensen Huang (Nvidia) since 1993, Ma Huateng (Tencent) since 1998, Marc Benioff (Salesforce) since 1999, Mark Zuckerberg (Meta) since 2004, Alex Karp (Palantir) since 2005, Rick Wallace (KLA) and Hock Tan (Broadcom) since 2006, Michael Dell (Dell) since 2007, and Tobias Lütke (Shopify) and Brian Chesky (Airbnb) since 2008.",
  },

  quickAnswer:
    "Jensen Huang of Nvidia is the longest-serving CEO of any tech company worth over US$100 billion: 33 years and 7 months as of November 25, 2026, counted from Nvidia's founding in April 1993. Tencent's Ma Huateng (28 years) and Salesforce's Marc Benioff (27 years and 9 months) follow. Huang resigned effective November 11, 2026 and was reinstated effective November 22, according to Nvidia's SEC filings; we count his tenure as continuous and show the 11-day gap.",
  introParagraph:
    "Tech moves fast, but a few of its biggest companies have had the same leader for decades. This ranking covers the current CEOs of listed technology, semiconductor, software and internet companies worth more than US$100 billion on November 25, 2026, and ranks them by how long they have been CEO of their current company. Start dates come from company filings and official biographies. Eight of the ten are founders or co-founders, and most of the leaders on this list have run their companies through several boom-and-bust cycles.",
  calloutBox: {
    label: "What about Elon Musk?",
    body: "Elon Musk has run SpaceX since founding it in 2002 and Tesla since 2008. If those companies counted, he would rank about third. They are not included because this ranking covers technology, semiconductor, software and internet companies, and SpaceX and Tesla are an aerospace company and a carmaker. Spotify's Daniel Ek, who led the company for about 20 years, also misses out: he became executive chairman on January 1, 2026, handing the CEO job to co-CEOs.",
  },

  chartTitle: "Years as CEO of their current company (as of Nov 25, 2026)",
  chartSource: "Company proxy statements, 8-K and 10-K filings and official biographies. \"~\" = only the start year is published",
  chartTapNote: "Tap any CEO to jump to their details below.",
  entryValueLabel: "Time as CEO:",
  chartItems: [
    { rank: 1, name: "Jensen Huang (Nvidia)", value: "33 yrs 7 mos", raw: 33.58 },
    { rank: 2, name: "Ma Huateng (Tencent)", value: "28 yrs", raw: 28.0 },
    { rank: 3, name: "Marc Benioff (Salesforce)", value: "27 yrs 9 mos", raw: 27.75 },
    { rank: 4, name: "Mark Zuckerberg (Meta)", value: "22 yrs 9 mos", raw: 22.75 },
    { rank: 5, name: "Alex Karp (Palantir)", value: "~21 yrs", raw: 21 },
    { rank: 6, name: "Rick Wallace (KLA)", value: "20 yrs 10 mos", raw: 20.83 },
    { rank: 7, name: "Hock Tan (Broadcom)", value: "20 yrs 8 mos", raw: 20.67 },
    { rank: 8, name: "Michael Dell (Dell)", value: "19 yrs 9 mos", raw: 19.75 },
    { rank: 9, name: "Tobias Lütke (Shopify)", value: "18 yrs 7 mos", raw: 18.58 },
    { rank: 10, name: "Brian Chesky (Airbnb)", value: "~18 yrs", raw: 18 },
  ],

  detailedEntries: [
    {
      rank: 10, name: "Brian Chesky", earnings: "About 18 years (since 2008)", category: "Airbnb · co-founder",
      origin: `Market cap US$103.46 billion (${MC})`,
      blurb: "Airbnb's 2026 proxy statement says Chesky co-founded the company in 2008 and serves as its chief executive officer and chair. Only the year is published.",
      standoutFact: "He edges out Arista's Jayshree Ullal (CEO since October 2008) on Airbnb's August 2008 founding; the two are effectively level.",
      sourceTag: "Airbnb, 2026 proxy statement",
      image: { src: `${P}/brian-chesky.webp`, width: 798, height: 1200, alt: "Brian Chesky speaking on stage at a TechCrunch event", author: "TechCrunch", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Brian_Chesky_TechCrunch.jpg", caption: "Airbnb CEO Brian Chesky at a TechCrunch event." },
    },
    {
      rank: 9, name: "Tobias Lütke", earnings: "18 years, 7 months (since April 2008)", category: "Shopify · co-founder",
      origin: `Market cap US$170.21 billion (${MC})`,
      blurb: "Lütke co-founded Shopify in September 2004 and was its chief technology officer until April 2008, when he became CEO, according to Shopify's annual report.",
      standoutFact: "He is counted from when he became CEO, not from the founding: four years as CTO came first.",
      sourceTag: "Shopify, Form 10-K for fiscal 2025",
      image: { src: `${P}/tobias-lutke.webp`, width: 1200, height: 800, alt: "Tobias Lütke smiling in a checked shirt and flat cap", author: "Union Eleven", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Tobias_L%C3%BCtke%2C_Shopify.jpg", caption: "Shopify CEO Tobias Lütke." },
    },
    {
      rank: 8, name: "Michael Dell", earnings: "19 years, 9 months (since January 31, 2007)", category: "Dell Technologies · founder",
      origin: `Market cap US$187.74 billion (${MC})`,
      blurb: "Michael Dell was CEO of Dell from 1984 until July 2004, stepped back, and returned as CEO on January 31, 2007. We count only his current, unbroken stint.",
      standoutFact: "Counting both stints, he has been CEO for about 39 years, which would put him first.",
      sourceTag: "Dell Technologies, 2026 proxy statement; Dell Inc. Form 8-K (February 2007)",
      image: { src: `${P}/michael-dell.webp`, width: 1200, height: 800, alt: "Michael Dell talking with guests at an outdoor event", author: "Village Global", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Michael_Dell_(52548152888).jpg", caption: "Michael Dell (centre) at a Village Global event, 2022." },
    },
    {
      rank: 7, name: "Hock Tan", earnings: "20 years, 8 months (since March 2006)", category: "Broadcom",
      origin: `Market cap US$1.437 trillion (${MC})`,
      blurb: "Broadcom's proxy statement says Tan has been President and CEO since March 2006, when he took over Avago, the company that later became today's Broadcom.",
      standoutFact: "Broadcom says its market value grew from US$3.8 billion at its 2009 IPO to over US$1.7 trillion by fiscal 2025 under his leadership.",
      sourceTag: "Broadcom, 2026 proxy statement",
      image: { src: `${P}/hock-tan.webp`, width: 824, height: 1200, alt: "Portrait of Hock Tan in a dark suit", author: "Greg Bezat, d/b/a Bezat Video Group", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Hock_Tan_2022.png", caption: "Broadcom CEO Hock Tan, 2022." },
    },
    {
      rank: 6, name: "Rick Wallace", earnings: "20 years, 10 months (since January 1, 2006)", category: "KLA Corporation",
      origin: `Market cap US$174.14 billion (${MC})`,
      blurb: "Wallace became CEO of KLA-Tencor, now KLA, on January 1, 2006, after serving as president and chief operating officer from July 2005.",
      standoutFact: "He and Broadcom's Hock Tan are the only two CEOs in the top 10 who did not found their companies.",
      sourceTag: "KLA-Tencor, Form 8-K (2005)",
    },
    {
      rank: 5, name: "Alex Karp", earnings: "About 21 years (since 2005)", category: "Palantir Technologies · co-founder",
      origin: `Market cap US$388.36 billion (${MC})`,
      blurb: "Palantir's 2026 proxy statement says Karp has been CEO since 2005, having joined the board in 2003. Only the year is published.",
      standoutFact: "Some secondary sources date his start to 2004; either way he ranks fifth.",
      sourceTag: "Palantir Technologies, 2026 proxy statement",
      image: { src: `${P}/alex-karp.webp`, width: 802, height: 1200, alt: "Alex Karp wearing a lanyard at the AI Safety Summit", author: "UK Government", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Alex_Karp_attends_AI_Summit_(53302457013)_(cropped).jpg", caption: "Palantir CEO Alex Karp at the UK AI Safety Summit, 2023." },
    },
    {
      rank: 4, name: "Mark Zuckerberg", earnings: "22 years, 9 months (since February 2004)", category: "Meta Platforms · founder",
      origin: `Market cap US$1.507 trillion (${MC})`,
      blurb: "Meta's 2026 proxy statement lists Zuckerberg as founder, chairman and CEO, and a director since 2004. He has led the company since Facebook's founding in February 2004.",
      standoutFact: "He has led the company for its entire life, through the 2012 IPO and the 2021 rename from Facebook to Meta.",
      sourceTag: "Meta Platforms, 2026 proxy statement",
      image: { src: `${P}/mark-zuckerberg.webp`, width: 871, height: 1200, alt: "Studio portrait of Mark Zuckerberg in a black T-shirt", author: "Jeff Sainlar; Social Producer and Editor, Meta", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mark_Zuckerberg_(2025).jpg", caption: "Meta CEO Mark Zuckerberg, 2025." },
    },
    {
      rank: 3, name: "Marc Benioff", earnings: "27 years, 9 months (since February 1999)", category: "Salesforce · co-founder",
      origin: `Market cap US$159.05 billion (${MC})`,
      blurb: "Salesforce's 2026 proxy statement lists Benioff as chair, CEO and co-founder, and a director since 1999. He has led the company since its founding in February 1999.",
      standoutFact: "He has run Salesforce for its entire history as a company.",
      sourceTag: "Salesforce, 2026 proxy statement",
      image: { src: `${P}/marc-benioff.webp`, width: 1200, height: 917, alt: "Marc Benioff speaking from an armchair on stage at TechCrunch Disrupt", author: "JD Lasica from Pleasanton, CA, US", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Marc_Benioff_(7983873379).jpg", caption: "Salesforce CEO Marc Benioff at TechCrunch Disrupt." },
    },
    {
      rank: 2, name: "Ma Huateng (Pony Ma)", earnings: "28 years (since November 1998)", category: "Tencent · co-founder",
      origin: `Market cap US$394.10 billion (${MC})`,
      blurb: "Tencent's official biography says Ma co-founded the company in 1998 and is its chairman and CEO. Tencent publishes no separate CEO start date, so his tenure is counted from the company's founding in November 1998.",
      standoutFact: "Before Tencent, he led research and development for an internet paging system at China Motion Telecom Development.",
      sourceTag: "Tencent, official management biography",
      image: { src: `${P}/ma-huateng.webp`, width: 811, height: 1080, alt: "Ma Huateng seated behind a Tencent nameplate at a press event", author: "中国新闻网 (China News Service)", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%A9%AC%E5%8C%96%E8%85%BE_Pony_Ma_2019.jpg", caption: "Tencent chairman and CEO Ma Huateng at a Tencent event, 2019." },
    },
    {
      rank: 1, name: "Jensen Huang", earnings: "33 years, 7 months (since April 1993)", category: "Nvidia · co-founder",
      origin: `Market cap US$3.751 trillion (${MC})`,
      blurb: "Nvidia's 2026 proxy statement says Huang founded the company in 1993 and has served since its inception as President, CEO and a board member. On November 11, 2026, the board accepted his resignation and named CFO Colette Kress interim CEO; on November 22, it unanimously reinstated him, according to Nvidia's Form 8-K filings. We count his tenure as continuous.",
      standoutFact: "He has led Nvidia for more than five years longer than anyone else on this list has led their company.",
      sourceTag: "Nvidia, 2026 proxy statement; Form 8-K filings of November 12 and 23, 2026",
      image: { src: `${P}/jensen-huang.webp`, width: 1200, height: 900, alt: "Jensen Huang, in a black leather jacket, speaking on stage at Stanford University", author: "Anders Eidesvik", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Jensen_huang_stanford_2026-04-30_016.jpg", caption: "Nvidia CEO Jensen Huang (right) at Stanford University, April 2026." },
    },
  ],

  keyTakeaway: {
    stat: "33 yrs",
    label: "Jensen Huang's time as Nvidia's CEO",
    comparisonStat: "8 of 10",
    comparisonLabel: "of the longest-serving CEOs are founders or co-founders",
    note: "Tenures as of November 25, 2026. Huang's count includes a brief break: resignation effective November 11, reinstatement effective November 22, 2026.",
  },

  sourceNote: {
    dataPeriod: "Tenures as of November 25, 2026; companies worth over US$100 billion on that date",
    lastUpdated: "November 25, 2026",
    sources:
      "Start dates: company proxy statements (Nvidia, Salesforce, Meta, Palantir, Broadcom, Dell Technologies, Airbnb), Form 8-K filings (Nvidia, November 2026; KLA-Tencor, 2005; Dell Inc., 2007), Shopify's Form 10-K and Tencent's official biography. Market values: CompaniesMarketCap, largest tech companies by market cap, snapshot of November 25, 2026.",
    methodology:
      "The ranking covers current CEOs of listed technology, semiconductor, software and internet companies worth more than US$100 billion on November 25, 2026, ranked by time as CEO of their current company up to that date. Tenure is counted from the date a person became CEO, not from when they joined or co-founded the company. Only the current, unbroken stint counts, so Michael Dell is counted from January 31, 2007. Jensen Huang's tenure is counted as continuous since Nvidia's founding, with his November 11–22, 2026 exit stated openly. Where only a start year is published (Karp, Chesky), tenure is approximate. Where a CEO has led a company since its founding and the filing gives only the year (Huang, Benioff, Zuckerberg, Ma), we use the company's founding month. Interim CEOs are excluded. SpaceX and Tesla are excluded as aerospace and automotive companies. Market values change daily: on November 25, 2026, Fortinet (Ken Xie, CEO since 2000) and Adobe (Shantanu Narayen, CEO since December 2007) were just below the US$100 billion line, and Airbnb and Cloudflare just above it.",
    sourceLinks: [
      { label: "Nvidia Form 8-K: resignation (November 2026)", href: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000082/nvda-20261111.htm" },
      { label: "Nvidia Form 8-K: reinstatement (November 2026)", href: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000090/nvda-20261122.htm" },
      { label: "Nvidia 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000036/nvda-20260512.htm" },
      { label: "Tencent: Ma Huateng biography", href: "https://www.tencent.com/team/ma-huateng-pony-ma/" },
      { label: "Salesforce 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000085/crm-20260416.htm" },
      { label: "Meta 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm" },
      { label: "Palantir 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000019/pltr-20260423.htm" },
      { label: "KLA-Tencor Form 8-K (2005)", href: "https://www.sec.gov/Archives/edgar/data/319201/000095013405021834/f14682exv99w1.htm" },
      { label: "Broadcom 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1730168/000119312526085691/d49254ddef14a.htm" },
      { label: "Dell Technologies 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1571996/000119312526226734/d132444ddef14a.htm" },
      { label: "Shopify Form 10-K (fiscal 2025)", href: "https://www.sec.gov/Archives/edgar/data/1594805/000159480526000011/shop-20251231.htm" },
      { label: "Airbnb 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1559720/000119312526175062/d936646ddef14a.htm" },
      { label: "CompaniesMarketCap: largest tech companies", href: "https://companiesmarketcap.com/tech/largest-tech-companies-by-market-cap" },
    ],
  },

  faqItems: [
    {
      question: "Who is the longest-serving tech CEO?",
      answer:
        "Among CEOs of tech companies worth over US$100 billion, Jensen Huang of Nvidia: 33 years and 7 months as of November 25, 2026, since co-founding the company in April 1993.",
    },
    {
      question: "Did Jensen Huang leave Nvidia?",
      answer:
        "Briefly. Nvidia's board accepted his resignation effective November 11, 2026 and named CFO Colette Kress interim CEO. On November 22, 2026, the board unanimously reinstated him as President and CEO, according to Nvidia's Form 8-K filings. Kress returned to her role as CFO.",
    },
    {
      question: "Why isn't Michael Dell number one?",
      answer:
        "This ranking counts only a CEO's current, unbroken stint. Michael Dell was CEO from 1984 to 2004 and again since January 31, 2007, so he is counted from 2007. Adding both stints would give about 39 years.",
    },
    {
      question: "Why isn't Elon Musk on the list?",
      answer:
        "The ranking covers technology, semiconductor, software and internet companies. SpaceX and Tesla are an aerospace company and a carmaker, so they are not included. If they were, Musk, CEO of SpaceX since 2002, would rank about third.",
    },
    {
      question: "How long has Tim Cook been Apple's CEO?",
      answer:
        "Since August 24, 2011, when he succeeded Steve Jobs: 15 years and 3 months as of November 25, 2026. That is long, but not long enough for this top 10.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Highest-Paid CEOs in 2026", href: "/rankings/highest-paid-ceos-2026" },
    { title: "The 10 Most Valuable Companies in the World in 2026", href: "/rankings/worlds-most-valuable-companies-2026" },
    { title: "The World's 10 Biggest Chip Companies", href: "/rankings/biggest-chip-companies-2026" },
  ],
};
