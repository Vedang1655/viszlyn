import { RankingArticle } from "./types";

const P = "/rankings/longest-serving-tech-ceos-2026";
const MC = "Market cap: CompaniesMarketCap snapshot, November 25, 2026";

export const longestServingTechCeos2026: RankingArticle = {
  slug: "longest-serving-tech-ceos-2026",

  metaTitle: "The 10 Longest-Serving Tech CEOs in 2026, Ranked | Viszlyn",
  metaDescription:
    "Nvidia's Jensen Huang (33 years), Tencent's Pony Ma (about 28) and Salesforce's Marc Benioff (about 25) lead the CEOs of US$100 billion+ listed tech companies by time in the job. See the full top 10.",
  ogTitle: "The Longest-Serving Tech CEOs in 2026",
  ogDescription:
    "Jensen Huang (33 years), Pony Ma (about 28) and Marc Benioff (about 25) lead the CEOs of the biggest listed tech companies by time in the job.",
  twitterTitle: "The 10 Longest-Serving Tech CEOs (2026)",
  twitterDescription:
    "Jensen Huang 33 yrs. Pony Ma ~28. Marc Benioff ~25. Mark Zuckerberg ~22. Who has run a US$100B+ tech company the longest?",

  eyebrow: "Tech",
  title: "The 10 Longest-Serving Tech CEOs in 2026",
  dek: "Ranked by time as CEO among listed tech companies worth more than US$100 billion. Nvidia's Jensen Huang leads with 33 years, counted from the company's founding in 1993.",
  publishedDate: "November 25, 2026",
  lastUpdated: "November 25, 2026",
  dataPeriod: "Tenures as of November 25, 2026; listed companies worth over US$100 billion on that date",
  heroImage: {
    src: "/heroes/longest-serving-tech-ceos-2026.png",
    ogSrc: "/heroes/longest-serving-tech-ceos-2026-og.png",
    alt: "Timeline bars showing how long the longest-serving tech CEOs have led their companies: Jensen Huang (Nvidia) since 1993, Ma Huateng (Tencent) since 1998, Marc Benioff (Salesforce) since 2001, Mark Zuckerberg (Meta) since 2004, Alex Karp (Palantir) since 2005, Rick Wallace (KLA) and Hock Tan (Broadcom) since 2006, Michael Dell (Dell) since 2007, and Tobias Lütke (Shopify), Jayshree Ullal (Arista) and Brian Chesky (Airbnb) since 2008.",
  },

  quickAnswer:
    "Jensen Huang of Nvidia is the longest-serving CEO of any listed tech company worth over US$100 billion: 33 years and 7 months as of November 25, 2026, counted from Nvidia's founding in April 1993. Tencent's Ma Huateng (about 28 years) and Salesforce's Marc Benioff (about 25 years, CEO since 2001) follow. Huang's count includes an 11-day interruption: Nvidia's board accepted his resignation effective November 11, 2026 and reinstated him effective November 22, according to the company's SEC filings.",
  introParagraph:
    "Tech moves fast, but a few of its biggest companies have had the same leader for decades. This ranking covers the current CEOs of listed technology, semiconductor, software and internet companies worth more than US$100 billion on November 25, 2026, and ranks them by how long they have been CEO of their current company. Start dates come from company filings and official biographies. Several filings give only a year, so those tenures are shown as approximate (\"~\"). Eight of the 11 CEOs on this list founded or co-founded their company.",
  calloutBox: {
    label: "What about Elon Musk?",
    body: "Tesla and SpaceX both appear on the market-value list we used, and Musk has run SpaceX since founding it in 2002 and Tesla since 2008. They are not included because this ranking covers technology, semiconductor, software and internet companies, and Tesla is a carmaker and SpaceX an aerospace company. Spotify's Daniel Ek, who led the company for about 20 years, also misses out: he became executive chairman on January 1, 2026, handing the CEO job to co-CEOs.",
  },

  chartTitle: "Years as CEO of their current company (as of Nov 25, 2026)",
  chartSource: "Company proxy statements, 8-K and 10-K filings and official biographies. \"~\" = the filing gives only the start year",
  chartTapNote: "Tap any CEO to jump to their details below. No. 10 is shared: Airbnb gives only the year Chesky became CEO.",
  entryValueLabel: "Time as CEO:",
  chartItems: [
    { rank: 1, name: "Jensen Huang", value: "33 yrs 7 mos", raw: 33.58 },
    { rank: 2, name: "Ma Huateng", value: "~28 yrs", raw: 28 },
    { rank: 3, name: "Marc Benioff", value: "~25 yrs", raw: 25 },
    { rank: 4, name: "Mark Zuckerberg", value: "~22 yrs", raw: 22 },
    { rank: 5, name: "Alex Karp", value: "~21 yrs", raw: 21 },
    { rank: 6, name: "Rick Wallace", value: "20 yrs 10 mos", raw: 20.83 },
    { rank: 7, name: "Hock Tan", value: "20 yrs 8 mos", raw: 20.67 },
    { rank: 8, name: "Michael Dell", value: "19 yrs 9 mos", raw: 19.75 },
    { rank: 9, name: "Tobias Lütke", value: "18 yrs 7 mos", raw: 18.58 },
    { rank: 10, rankLabel: "=10", name: "Jayshree Ullal", value: "18 yrs 1 mo", raw: 18.08 },
    { rank: 10, rankLabel: "=10", name: "Brian Chesky", value: "~18 yrs", raw: 18 },
  ],

  detailedEntries: [
    {
      rank: 10, rankLabel: "=10", name: "Brian Chesky", earnings: "About 18 years (since 2008)", category: "Airbnb · co-founder",
      origin: `Market cap US$103.46 billion (${MC})`,
      blurb: "Airbnb's 2026 proxy statement says Chesky co-founded the company in 2008 and serves as its chief executive officer and board chair. It gives no month for when he became CEO.",
      standoutFact: "Because only the year is published, his exact place can't be pinned down: depending on the month, he would rank anywhere from ninth to eleventh. We show him level with Jayshree Ullal.",
      sourceTag: "Airbnb, 2026 proxy statement",
      image: { src: `${P}/brian-chesky.webp`, width: 798, height: 1200, alt: "Brian Chesky speaking on stage at a TechCrunch event", author: "TechCrunch", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Brian_Chesky_TechCrunch.jpg", caption: "Airbnb CEO Brian Chesky at a TechCrunch event." },
    },
    {
      rank: 10, rankLabel: "=10", name: "Jayshree Ullal", earnings: "18 years, 1 month (since October 2008)", category: "Arista Networks",
      origin: `Market cap US$212.95 billion (${MC})`,
      blurb: "Arista's 2026 proxy statement says Ullal has been CEO since October 2008. She has also chaired the board since December 2023.",
      standoutFact: "She is the only woman on this list, and one of three CEOs here who did not found their company.",
      sourceTag: "Arista Networks, 2026 proxy statement",
      image: { src: `${P}/jayshree-ullal.webp`, width: 780, height: 1200, alt: "Portrait of Jayshree Ullal in a green sari in front of a wall of leaves", author: "Theolive123", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Jayshree_Ullal_Arista_CEO.jpg", caption: "Arista Networks CEO Jayshree Ullal." },
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
      standoutFact: "Counting both stints, he has been CEO for nearly 40 years, which would put him first.",
      sourceTag: "Dell Technologies, 2026 proxy statement; Dell Inc. Form 8-K (February 2007)",
      image: { src: `${P}/michael-dell.webp`, width: 1200, height: 800, alt: "Michael Dell talking with guests at an outdoor event", author: "Village Global", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Michael_Dell_(52548152888).jpg", caption: "Michael Dell (centre) at a Village Global event, 2022." },
    },
    {
      rank: 7, name: "Hock Tan", earnings: "20 years, 8 months (since March 2006)", category: "Broadcom",
      origin: `Market cap US$1.437 trillion (${MC})`,
      blurb: "Broadcom's proxy statement says Tan has been President and CEO since March 2006. He became CEO of Avago Technologies, the company that later took the Broadcom name; he did not found it.",
      standoutFact: "Broadcom says its market value grew from US$3.8 billion at its 2009 IPO to over US$1.7 trillion by fiscal 2025 under his leadership.",
      sourceTag: "Broadcom, 2026 proxy statement",
      image: { src: `${P}/hock-tan.webp`, width: 824, height: 1200, alt: "Portrait of Hock Tan in a dark suit", author: "Greg Bezat, d/b/a Bezat Video Group", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Hock_Tan_2022.png", caption: "Broadcom CEO Hock Tan, 2022." },
    },
    {
      rank: 6, name: "Rick Wallace", earnings: "20 years, 10 months (since January 1, 2006)", category: "KLA Corporation",
      origin: `Market cap US$174.14 billion (${MC})`,
      blurb: "Wallace became CEO of KLA-Tencor, now KLA, on January 1, 2006, after serving as president and chief operating officer from July 2005.",
      standoutFact: "He has the longest tenure of any CEO here who did not found their company.",
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
      rank: 4, name: "Mark Zuckerberg", earnings: "About 22 years (since 2004)", category: "Meta Platforms · founder",
      origin: `Market cap US$1.507 trillion (${MC})`,
      blurb: "Meta's 2026 proxy statement lists Zuckerberg as founder and CEO from 2004 to the present, a director since 2004 and chairman since 2012. The filing gives only the year.",
      standoutFact: "He has led the company for its entire life, through the 2012 IPO and the 2021 rename from Facebook to Meta.",
      sourceTag: "Meta Platforms, 2026 proxy statement",
      image: { src: `${P}/mark-zuckerberg.webp`, width: 871, height: 1200, alt: "Studio portrait of Mark Zuckerberg in a black T-shirt", author: "Jeff Sainlar; Social Producer and Editor, Meta", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mark_Zuckerberg_(2025).jpg", caption: "Meta CEO Mark Zuckerberg, 2025." },
    },
    {
      rank: 3, name: "Marc Benioff", earnings: "About 25 years (since 2001)", category: "Salesforce · co-founder",
      origin: `Market cap US$159.05 billion (${MC})`,
      blurb: "Salesforce's 2026 proxy statement lists Benioff as chair, co-founder of Salesforce in 1999 and CEO since 2001. The filing gives only the year he became CEO.",
      standoutFact: "He co-founded Salesforce in 1999 and has been a director since then, but became CEO two years later.",
      sourceTag: "Salesforce, 2026 proxy statement",
      image: { src: `${P}/marc-benioff.webp`, width: 1200, height: 917, alt: "Marc Benioff speaking from an armchair on stage at TechCrunch Disrupt", author: "JD Lasica from Pleasanton, CA, US", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Marc_Benioff_(7983873379).jpg", caption: "Salesforce CEO Marc Benioff at TechCrunch Disrupt." },
    },
    {
      rank: 2, name: "Ma Huateng", earnings: "About 28 years (since 1998)", category: "Tencent · co-founder",
      origin: `Market cap US$394.10 billion (${MC})`,
      blurb: "Tencent's official biography says Ma Huateng, also known as Pony Ma, co-founded the company in 1998 and is its chairman and CEO. Tencent publishes no separate CEO start date, so his tenure is estimated from the company's founding year.",
      standoutFact: "Before Tencent, he led research and development for an internet paging system at China Motion Telecom Development.",
      sourceTag: "Tencent, official management biography",
      image: { src: `${P}/ma-huateng.webp`, width: 811, height: 1080, alt: "Ma Huateng seated behind a Tencent nameplate at a press event", author: "中国新闻网 (China News Service)", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%A9%AC%E5%8C%96%E8%85%BE_Pony_Ma_2019.jpg", caption: "Tencent chairman and CEO Ma Huateng at a Tencent event, 2019." },
    },
    {
      rank: 1, name: "Jensen Huang", earnings: "33 years, 7 months (since Nvidia's founding in April 1993)", category: "Nvidia · co-founder",
      origin: `Market cap US$3.751 trillion (${MC})`,
      blurb: "Nvidia's 2026 proxy statement says Huang founded the company in 1993 and has served since its inception as President, CEO and a board member; Nvidia was founded in April 1993. On November 11, 2026, the board accepted his resignation and named CFO Colette Kress interim CEO. On November 22, it unanimously reinstated him, according to Nvidia's Form 8-K filings. His tenure here includes that 11-day interruption.",
      standoutFact: "Even without the 11 days, he has led Nvidia more than five years longer than anyone else on this list has led their company.",
      sourceTag: "Nvidia, 2026 proxy statement; Form 8-K filings of November 12 and 23, 2026",
      image: { src: `${P}/jensen-huang.webp`, width: 1200, height: 900, alt: "Jensen Huang, in a black leather jacket, speaking on stage at Stanford University", author: "Anders Eidesvik", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Jensen_huang_stanford_2026-04-30_016.jpg", caption: "Nvidia CEO Jensen Huang (right) at Stanford University, April 2026." },
    },
  ],

  keyTakeaway: {
    stat: "33 yrs",
    label: "Jensen Huang's time as Nvidia's CEO",
    comparisonStat: "8 of 11",
    comparisonLabel: "CEOs on this list founded or co-founded their company",
    note: "Tenures as of November 25, 2026. Huang's count includes an 11-day interruption: resignation effective November 11, reinstatement effective November 22, 2026. Rick Wallace, Hock Tan and Jayshree Ullal are the three who did not found their companies.",
  },

  sourceNote: {
    dataPeriod: "Tenures as of November 25, 2026; listed companies worth over US$100 billion on that date",
    lastUpdated: "November 25, 2026",
    sources:
      "Start dates: company proxy statements (Nvidia, Salesforce, Meta, Palantir, Broadcom, Dell Technologies, Airbnb, Arista Networks), Form 8-K filings (Nvidia, November 2026; KLA-Tencor, 2005; Dell Inc., 2007), Shopify's Form 10-K and Tencent's official biography. Market values: CompaniesMarketCap, largest tech companies by market cap, snapshot of November 25, 2026.",
    methodology:
      "Universe: listed companies on CompaniesMarketCap's largest-tech-companies list worth more than US$100 billion on November 25, 2026, limited to technology, semiconductor, software and internet businesses (Tesla, a carmaker, and SpaceX, an aerospace company, are left out). Each current CEO is ranked by time as CEO of their current company up to that date, counted from when they became CEO, not from when they joined or co-founded the company. Only the current, unbroken stint counts, so Michael Dell is counted from January 31, 2007. One exception is made for very short interruptions: Jensen Huang's tenure is counted from Nvidia's founding in April 1993 and includes his 11-day absence (November 11–22, 2026), which is stated openly. Where a filing gives only a start year (Ma, Benioff, Zuckerberg, Karp, Chesky), tenure is approximate and marked \"~\"; those CEOs are ranked by start year, which settles every position except Brian Chesky's: a 2008 start could fall before or after Tobias Lütke's (April 2008) and Jayshree Ullal's (October 2008), so he is shown level with Ullal at No. 10. Interim CEOs are excluded. Market values change daily. On November 25, 2026 the companies closest to the US$100 billion line were Cloudflare (US$102.96 billion; Matthew Prince, CEO since July 2009) and Airbnb (US$103.46 billion) just above it, and Fortinet (US$97.34 billion; Ken Xie, CEO since 2000), ServiceNow (US$95.21 billion), Adobe (US$90.32 billion; Shantanu Narayen, CEO since December 2007) and Xiaomi (US$86.16 billion) just below it.",
    sourceLinks: [
      { label: "Nvidia Form 8-K: resignation (November 2026)", href: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000082/nvda-20261111.htm" },
      { label: "Nvidia Form 8-K: reinstatement (November 2026)", href: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000090/nvda-20261122.htm" },
      { label: "Nvidia 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000036/nvda-20260512.htm" },
      { label: "Tencent: Ma Huateng biography", href: "https://www.tencent.com/team/ma-huateng-pony-ma/" },
      { label: "Salesforce FY26 proxy statement (PDF)", href: "https://s205.q4cdn.com/626266368/files/doc_financials/2026/ar/Salesforce-FY26-Proxy-Statement.pdf" },
      { label: "Meta 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm" },
      { label: "Palantir 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000019/pltr-20260423.htm" },
      { label: "KLA-Tencor Form 8-K (2005)", href: "https://www.sec.gov/Archives/edgar/data/319201/000095013405021834/f14682exv99w1.htm" },
      { label: "Broadcom 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1730168/000119312526085691/d49254ddef14a.htm" },
      { label: "Dell Technologies 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1571996/000119312526226734/d132444ddef14a.htm" },
      { label: "Shopify Form 10-K (fiscal 2025)", href: "https://www.sec.gov/Archives/edgar/data/1594805/000159480526000011/shop-20251231.htm" },
      { label: "Arista Networks 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1596532/000119312526158942/d66465ddef14a.htm" },
      { label: "Airbnb 2026 proxy statement", href: "https://www.sec.gov/Archives/edgar/data/1559720/000119312526175062/d936646ddef14a.htm" },
      { label: "CompaniesMarketCap: largest tech companies", href: "https://companiesmarketcap.com/tech/largest-tech-companies-by-market-cap" },
    ],
  },

  faqItems: [
    {
      question: "Who is the longest-serving tech CEO?",
      answer:
        "Among CEOs of listed tech companies worth over US$100 billion, Jensen Huang of Nvidia: 33 years and 7 months as of November 25, 2026, counted from Nvidia's founding in April 1993 and including an 11-day interruption in November 2026.",
    },
    {
      question: "Did Jensen Huang leave Nvidia?",
      answer:
        "Briefly. Nvidia's board accepted his resignation effective November 11, 2026 and named CFO Colette Kress interim CEO. On November 22, 2026, the board unanimously reinstated him as President and CEO, according to Nvidia's Form 8-K filings. Kress continues as CFO.",
    },
    {
      question: "Why isn't Michael Dell number one?",
      answer:
        "This ranking counts only a CEO's current, unbroken stint. Michael Dell was CEO from 1984 to 2004 and again since January 31, 2007, so he is counted from 2007. Adding both stints would give nearly 40 years.",
    },
    {
      question: "Why isn't Elon Musk on the list?",
      answer:
        "The ranking covers technology, semiconductor, software and internet companies. Tesla is a carmaker and SpaceX an aerospace company, so neither is included, even though both appear on the market-value list we used.",
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
