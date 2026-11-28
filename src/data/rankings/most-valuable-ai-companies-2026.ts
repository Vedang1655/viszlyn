import { RankingArticle } from "./types";

const P = "/rankings/most-valuable-ai-companies-2026";

export const mostValuableAiCompanies2026: RankingArticle = {
  slug: "most-valuable-ai-companies-2026",

  metaTitle: "Most Valuable Private AI Companies 2026: Top 10 by Valuation | Viszlyn",
  metaDescription:
    "OpenAI ($852B), Databricks ($190B) and DeepSeek (about $92B) lead the most valuable private AI companies, now that Anthropic is public. The full top 10, updated November 2026.",
  ogTitle: "The 10 Most Valuable Private AI Companies in 2026",
  ogDescription:
    "With Anthropic now public, OpenAI leads the private AI companies at $852 billion, ahead of Databricks, DeepSeek and Anduril.",
  twitterTitle: "The 10 Most Valuable Private AI Companies (2026)",
  twitterDescription:
    "OpenAI $852B. Databricks $190B. DeepSeek ~$92B. Anduril ~$90B. The top 10 private AI companies after Anthropic's IPO.",

  eyebrow: "Tech",
  title: "The 10 Most Valuable Private AI Companies in 2026",
  dek: "Anthropic left this list when it went public in November. OpenAI now leads the privately held AI companies by a wide margin, with China's DeepSeek and Moonshot AI among the newcomers.",
  publishedDate: "September 24, 2026",
  lastUpdated: "November 28, 2026",
  dataPeriod: "Latest closed funding round or confirmed share sale as of November 28, 2026",
  heroImage: {
    src: "/heroes/most-valuable-ai-companies-2026.webp",
    ogSrc: "/heroes/most-valuable-ai-companies-2026-og.png",
    alt: "Treemap of the 10 most valuable private AI companies, sized by valuation: OpenAI $852 billion fills more than half the frame, followed by Databricks $190 billion, DeepSeek about $92 billion, Anduril about $90 billion, Moonshot AI about $50 billion, Cognition $48 billion, Prometheus $41 billion, Figure AI $39 billion, Safe Superintelligence $32 billion and Crusoe $30.9 billion.",
  },

  quickAnswer:
    "OpenAI is the most valuable private AI company, at $852 billion after a funding round that closed on March 31, 2026. Databricks is second at $190 billion and China's DeepSeek third at about $92 billion, a figure from news reports that the company has not confirmed. Anthropic, which led this ranking at $965 billion in September, is no longer included because it became a public company with its IPO on November 18, 2026.",
  introParagraph:
    "Private companies don't have a share price, so their value is set when investors buy shares in a funding round. This ranking uses each company's latest closed, priced round, or a confirmed sale of shares by employees (a tender offer), as of November 28, 2026. Rounds that are only being discussed, or only partly reported, are not ranked. Some figures are recent and some are more than a year old, because not every company raises money every year. Two Chinese companies, DeepSeek and Moonshot AI, are included with figures reported by Bloomberg, Reuters and Caixin; neither company has confirmed its valuation.",
  calloutBox: {
    label: "Why Anthropic and Cursor are gone",
    body: "Anthropic was No. 1 on this page in September at $965 billion. It became a public company when its IPO priced on November 18, 2026, so it now appears in our rankings of public companies and IPOs instead. Cursor's maker, Anysphere, is also out: SpaceX completed its all-stock acquisition on August 14, 2026. OpenAI reportedly began raising money in November at a $1.25 trillion valuation, but only part of that round has been reported as closed, its terms are unconfirmed, and OpenAI has not announced it, so we keep its last confirmed figure.",
  },

  chartTitle: "Latest valuation of private AI companies (US$ billions)",
  chartSource: "Company announcements, Bloomberg, Reuters, CNBC, TechCrunch, Caixin. \"~\" = reported, not company-confirmed",
  chartTapNote: "Tap any company to see the round, date and how solid the figure is.",
  entryValueLabel: "Valuation:",
  chartItems: [
    { rank: 1, name: "OpenAI", value: "$852B", raw: 852, prevRank: 2 },
    { rank: 2, name: "Databricks", value: "$190B", raw: 190, prevRank: 3 },
    { rank: 3, name: "DeepSeek", value: "~$92B", raw: 92.3 },
    { rank: 4, name: "Anduril", value: "~$90B", raw: 90, prevRank: 4 },
    { rank: 5, name: "Moonshot AI", value: "~$50B", raw: 50 },
    { rank: 6, name: "Cognition", value: "$48B", raw: 48 },
    { rank: 7, name: "Prometheus", value: "$41B", raw: 41 },
    { rank: 8, name: "Figure AI", value: "$39B", raw: 39, prevRank: 5 },
    { rank: 9, name: "Safe Superintelligence", value: "$32B", raw: 32, prevRank: 6 },
    { rank: 10, name: "Crusoe", value: "$30.9B", raw: 30.9 },
  ],
  comparisonLabel: "the September 24, 2026 edition",

  detailedEntries: [
    {
      rank: 10, name: "Crusoe", earnings: "$30.9B", category: "AI infrastructure",
      revenueSources: "AI data centers and cloud computing",
      origin: "United States · Series F, initial closing September 17, 2026",
      blurb: "Crusoe builds data centers for AI. It announced the initial closing of an expected $3.9 billion Series F at a $30.9 billion valuation; how much had closed at that point was not stated.",
      standoutFact: "Its campus in Abilene, Texas is being built for Oracle and OpenAI. VAST Data and Sierra, both at $30 billion, are just behind.",
      sourceTag: "Crusoe announcement; TechCrunch",
    },
    {
      rank: 9, name: "Safe Superintelligence", earnings: "$32B", category: "AI research lab",
      revenueSources: "Investor funding; no product released",
      origin: "United States · round reported April 2025",
      blurb: "Founded by former OpenAI chief scientist Ilya Sutskever, SSI was valued at $32 billion in a round led by Greenoaks, as reported by Reuters and the Financial Times in April 2025. The company never confirmed the figure, and it is now more than 19 months old.",
      standoutFact: "Nvidia announced a long-term partnership with SSI on July 27, 2026, including an investment of undisclosed size, but no new valuation was published.",
      sourceTag: "Reuters and Financial Times (2025); Nvidia announcement (2026)",
    },
    {
      rank: 8, name: "Figure AI", earnings: "$39B", category: "Humanoid robots",
      revenueSources: "Investor funding; early commercial robot deployments",
      origin: "United States · Series C, September 2025",
      blurb: "Figure develops general-purpose humanoid robots. Its Series C raised more than $1 billion at a $39 billion post-money valuation, led by Parkway Venture Capital.",
      standoutFact: "Its figure is 14 months old, the oldest company-confirmed valuation in the top 10.",
      sourceTag: "Intel Capital / Figure AI announcement (September 2025)",
    },
    {
      rank: 7, name: "Prometheus", earnings: "$41B", category: "AI for engineering",
      revenueSources: "AI for engineering and industrial work",
      origin: "United States · Series B, June 11, 2026",
      blurb: "Prometheus is building what it calls an \"artificial general engineer\" for the physical world. It raised $12 billion in its Series B at a $41 billion valuation.",
      standoutFact: "It is co-led by Amazon founder Jeff Bezos and Vik Bajaj.",
      sourceTag: "TechCrunch",
    },
    {
      rank: 6, name: "Cognition", earnings: "$48B", category: "AI coding agents",
      revenueSources: "Subscriptions and enterprise contracts for its coding agent, Devin",
      origin: "United States · Series E, September 8, 2026",
      blurb: "Cognition, maker of the AI software engineer Devin, raised more than $2 billion in its Series E at a $48 billion valuation, according to the company.",
      standoutFact: "It said its annual revenue run rate grew from $492 million to almost $900 million between its May 2026 round and the Series E.",
      sourceTag: "Cognition announcement; PYMNTS",
    },
    {
      rank: 5, name: "Moonshot AI", earnings: "About $50B (reported)", category: "AI models",
      revenueSources: "Kimi chatbot and models",
      origin: "China · final private round reported October 6, 2026",
      blurb: "Bloomberg reported on October 6, 2026 that Moonshot AI had closed its final private round at about a $50 billion valuation; the amount raised was not reported, and the company did not comment.",
      standoutFact: "Moonshot has confidentially filed for a Hong Kong IPO, according to Reuters, so it may soon leave this list too.",
      sourceTag: "Bloomberg (via Calcalist); Reuters",
    },
    {
      rank: 4, name: "Anduril", earnings: "About $90B (employee share sale)", category: "Defense technology",
      revenueSources: "Government and military contracts, autonomous systems",
      origin: "United States · tender offer closed November 9, 2026",
      blurb: "Anduril builds autonomous defense systems. It confirmed to CNBC an employee share sale that ran from October 13 to November 9, 2026; Bloomberg reported a price of $94.80 a share, valuing the company at roughly $90 billion, with up to about $1.3 billion of shares on offer.",
      standoutFact: "Its last regular funding round, a $5 billion Series H in May 2026, valued it at $61 billion. On that basis it would still rank fourth.",
      sourceTag: "CNBC; Bloomberg (via Seeking Alpha); TechCrunch",
      image: { src: `${P}/anduril.webp`, width: 1200, height: 800, alt: "An Anduril Ghost-X unmanned helicopter flying low over a grassy field", author: "U.S. Army photo by Pfc. Nathan Arellano Tlaczani", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Anduril_Ghost-X_UAS_in_flight_near_Mihail_Kog%C4%83lniceanu_Air_Base,_Romania.jpg", caption: "An Anduril Ghost-X drone near Mihail Kogălniceanu Air Base, Romania." },
    },
    {
      rank: 3, name: "DeepSeek", earnings: "About $92B (reported)", category: "AI models",
      revenueSources: "AI models and apps",
      origin: "China · second funding round, registered November 17, 2026",
      blurb: "Chinese business records show DeepSeek's second funding round was registered on November 17, 2026, adding a new shareholder group with 17.265% of the company, according to Caixin. Reported terms put the round at about CNY 105.5 billion (The Information; Caixin reported a raise of about CNY 100 billion) and the valuation after it at CNY 615.5 billion, about $92 billion (Viszlyn conversion at the November 17 ECB reference rates). DeepSeek has not commented.",
      standoutFact: "Converted at the weaker rates some outlets used, the figure is about $85–86 billion, which would put DeepSeek just behind Anduril.",
      sourceTag: "Caixin; The Information (via Yicai); Reuters; Bloomberg",
    },
    {
      rank: 2, name: "Databricks", earnings: "$190B", category: "Data and AI platform",
      revenueSources: "Enterprise data and AI platform subscriptions",
      origin: "United States · strategic round, August 13, 2026",
      blurb: "Databricks raised $5 billion at a $190 billion valuation, its second round of 2026, up from $134 billion six months earlier.",
      standoutFact: "It said its annual revenue run rate passed $7 billion in its second quarter, up more than 80% year over year.",
      sourceTag: "TechCrunch; TechNode Global",
    },
    {
      rank: 1, name: "OpenAI", earnings: "$852B", category: "AI models",
      revenueSources: "ChatGPT subscriptions, API access, enterprise licensing",
      origin: "United States · round closed March 31, 2026",
      blurb: "OpenAI says it closed a round with $122 billion in committed capital at an $852 billion post-money valuation on March 31, 2026. In November, Bloomberg reported a first close of about $11 billion of a new round at a $1.25 trillion valuation, and CNBC about $15 billion in total; OpenAI has not announced it, and reports differ on whether $1.25 trillion is before or after the new money.",
      standoutFact: "Almost $3 billion of the March round came from individual investors through bank channels, the company said. OpenAI filed confidentially for an IPO in June 2026, TechCrunch reported.",
      sourceTag: "OpenAI announcement; Bloomberg; CNBC; TechCrunch",
      image: { src: `${P}/openai.webp`, width: 1200, height: 800, alt: "Glass office building at 1515 Third Street in San Francisco", author: "Coolcaesar", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:1515_Third_Street.jpg", caption: "1515 Third Street, San Francisco, OpenAI's headquarters when photographed in 2025." },
    },
  ],

  keyTakeaway: {
    stat: "$852B",
    label: "OpenAI's valuation",
    comparisonStat: "$613B",
    comparisonLabel: "the other nine companies combined",
    note: "OpenAI alone is worth more than the other nine companies on this list put together (Viszlyn sum: US$613.2 billion), and about 58% of the top 10's combined value.",
  },

  sourceNote: {
    dataPeriod: "Latest closed funding round or confirmed share sale as of November 28, 2026",
    lastUpdated: "November 28, 2026",
    sources:
      "Company announcements (OpenAI, Cognition, Crusoe, Figure AI via Intel Capital, Nvidia), CNBC, Bloomberg, Reuters, TechCrunch, Financial Times, Caixin and The Information. Exchange rates: European Central Bank reference rates.",
    methodology:
      "Only privately held, AI-focused companies are included. Public companies (such as Anthropic, Nvidia, Zhipu AI and MiniMax), companies owned by another company (such as Waymo, xAI inside SpaceX, and Cursor's maker Anysphere) and diversified companies such as ByteDance are excluded. Each company is ranked by the post-money valuation of its latest closed, priced funding round, or by the price of a confirmed employee share sale (tender offer). Rounds described as talks, expected or only partly reported are not ranked; Crusoe's figure comes from the company's own announcement of an initial closing. DeepSeek and Moonshot AI are ranked on reported figures that the companies have not confirmed, and are marked \"~\". Non-US dollar figures are converted at the European Central Bank reference rates on the round's close date and are Viszlyn calculations. Figure AI's and Safe Superintelligence's figures are more than a year old. Just below the top 10: VAST Data and Sierra ($30 billion each), Scale AI (over $29 billion, 2025), Shield AI ($28.8 billion) and Toronto-based Cohere (about $25.5 billion, calculated from CAD 35.7 billion, initial closing in October 2026).",
    sourceLinks: [
      { label: "OpenAI: Accelerating the next phase of AI (March 2026 round)", href: "https://openai.com/index/accelerating-the-next-phase-ai/" },
      { label: "SiliconANGLE: OpenAI reportedly raises $11B at $1.25T valuation", href: "https://siliconangle.com/2026/11/06/openai-reportedly-raises-11b-in-new-funding-at-1-25t-valuation/" },
      { label: "TechCrunch: OpenAI files confidentially for IPO (June 2026)", href: "https://techcrunch.com/2026/06/08/following-anthropic-openai-files-confidentially-for-ipo/" },
      { label: "TechCrunch: Databricks raises $5B at a $190B valuation", href: "https://techcrunch.com/2026/08/13/databricks-wanted-to-raise-1b-investors-wanted-15b-it-settled-on-5b-at-a-190b-valuation/" },
      { label: "Machine.net: DeepSeek closes round at about $92B valuation", href: "https://www.machine.net/news/deepseek-closes-15-billion-round-92-billion-valuation-tencent-catl-founder-keeps-control/" },
      { label: "Seeking Alpha (via TradingView): Anduril employee share sale", href: "https://www.tradingview.com/news/seekingalpha:cd552775b094b:0-anduril-valuation-may-climb-to-90b-in-employee-share-sale/" },
      { label: "Calcalist: Moonshot AI final private round", href: "https://www.calcalistech.com/ctechnews/article/r1me2gzsze" },
      { label: "Cognition: Series E", href: "https://cognition.com/blog/series-e" },
      { label: "TechCrunch: Prometheus raises $12B", href: "https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/" },
      { label: "Intel Capital: Figure exceeds $1B in Series C", href: "https://www.intelcapital.com/figure-exceeds-1b-in-series-c-funding-at-39b-post-money-valuation/" },
      { label: "Nvidia: partnership with Safe Superintelligence", href: "https://investor.nvidia.com/news/press-release-details/2026/Ilya-Sutskevers-Safe-Superintelligence-Inc--and-NVIDIA-Announce-Long-Term-Strategic-Partnership/" },
      { label: "Crusoe: Series F announcement", href: "https://www.crusoe.ai/resources/newsroom/crusoe-announces-series-f-funding" },
    ],
  },

  faqItems: [
    {
      question: "What is the most valuable private AI company?",
      answer: "OpenAI, at $852 billion after its March 2026 round. Reports in November 2026 put a new round at $1.25 trillion, but OpenAI has not announced it and only part of it has been reported as closed.",
    },
    {
      question: "Why isn't Anthropic on this list anymore?",
      answer: "Anthropic became a public company when its IPO priced on November 18, 2026, raising $81.34 billion at pricing, the biggest IPO ever. This ranking only covers privately held companies.",
    },
    {
      question: "Why are DeepSeek and Moonshot AI marked as reported?",
      answer: "Neither company has confirmed its valuation. DeepSeek's round is backed by Chinese business-registration records and reporting by Caixin and others; Moonshot's comes from Bloomberg. Their figures are shown with \"~\".",
    },
    {
      question: "Is there a Canadian company near this list?",
      answer: "Yes: Toronto-based Cohere. Its Series E, which had an initial closing in October 2026, values it at CAD 35.7 billion, about US$25.5 billion (Viszlyn conversion), just outside the top 10.",
    },
    {
      question: "Why isn't xAI or Cursor on this list?",
      answer: "Both are now owned by SpaceX, which is a public company: xAI was combined with SpaceX in February 2026, and SpaceX completed its acquisition of Cursor's maker, Anysphere, on August 14, 2026.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Biggest IPOs of All Time", href: "/rankings/biggest-ipos-of-all-time-2026" },
    { title: "8 of the Biggest US Tech IPOs and Listings of 2026 So Far", href: "/rankings/biggest-tech-ipos-2026" },
    { title: "The 10 Most Valuable Companies in the World in 2026", href: "/rankings/worlds-most-valuable-companies-2026" },
    { title: "The 10 Longest-Serving Tech CEOs in 2026", href: "/rankings/longest-serving-tech-ceos-2026" },
  ],
};
