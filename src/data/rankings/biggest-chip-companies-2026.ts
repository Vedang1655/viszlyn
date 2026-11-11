import { RankingArticle } from "./types";

const SRC = "Company annual results (latest fiscal year)";

export const biggestChipCompanies2026: RankingArticle = {
  slug: "biggest-chip-companies-2026",

  metaTitle: "The 10 Biggest Chip Companies by Revenue in 2025, Ranked | Viszlyn",
  metaDescription:
    "NVIDIA made $215.9 billion in its latest fiscal year, far ahead of TSMC ($122.4B) and Samsung's chip division. See the 10 biggest semiconductor companies by revenue.",
  ogTitle: "The World's 10 Biggest Chip Companies by Revenue",
  ogDescription:
    "NVIDIA's data center sales alone ($193.7B) are bigger than any other chip company's total revenue. The 10 biggest chipmakers, ranked from their own reports.",
  twitterTitle: "Ranked: The World's 10 Biggest Chip Companies",
  twitterDescription:
    "NVIDIA $215.9B, TSMC $122.4B, Samsung $91.5B. The 10 biggest semiconductor companies by revenue, from their latest annual results.",

  eyebrow: "Business",
  title: "The World's 10 Biggest Chip Companies by Revenue in 2025",
  dek: "Ranked by semiconductor revenue in each company's latest fiscal year, from their own annual results. AI has put NVIDIA far ahead of every other chipmaker.",
  publishedDate: "November 11, 2026",
  lastUpdated: "November 11, 2026",
  dataPeriod: "Latest fiscal year ending in 2025 or January 2026",
  heroImage: {
    src: "/heroes/biggest-chip-companies-2026.png",
    ogSrc: "/heroes/biggest-chip-companies-2026-og.png",
    alt: "Bar chart of the world's 10 biggest chip companies by semiconductor revenue in their latest fiscal year, led by NVIDIA at $215.9 billion, then TSMC at $122.4 billion and Samsung at $91.5 billion.",
  },

  quickAnswer:
    "NVIDIA is the world's biggest chip company by revenue, with $215.9 billion in its fiscal year ended January 2026, up 65%. TSMC, which manufactures chips for other companies, is second with $122.4 billion, and Samsung's chip division is third with about $91.5 billion. NVIDIA's data center business alone, driven by AI, brought in $193.7 billion, more than any other chip company's total revenue.",
  introParagraph:
    "This ranking uses each company's own reported revenue from its chip business in its latest full fiscal year. For companies that also sell other things, only the semiconductor part is counted: Samsung's Device Solutions division, Intel's product segments, Qualcomm's chip business (QCT) and Broadcom's semiconductor segment. Companies end their fiscal years at different times, from August 2025 (Micron) to January 2026 (NVIDIA), so the periods don't line up exactly. TSMC is included even though it is a foundry, a contract manufacturer that makes chips designed by other companies, including NVIDIA, AMD and Apple.",
  calloutBox: {
    label: "AI made NVIDIA the giant of the chip industry",
    body: "NVIDIA's revenue rose from $130.5 billion to $215.9 billion in one fiscal year. Its data center business, which sells the processors and networking used to train and run AI, accounted for $193.7 billion of that, up 68%. AI demand is also lifting memory makers: SK hynix's revenue rose about 47% and Micron's about 49%, helped by high-bandwidth memory (HBM) used in AI chips.",
  },

  chartTitle: "Semiconductor revenue, latest fiscal year (US$ billions)",
  chartSource: SRC,
  chartTapNote: "Tap any company to jump to its full breakdown below.",
  entryValueLabel: "Semiconductor revenue:",
  chartItems: [
    { rank: 1, name: "NVIDIA", value: "$215.9B", raw: 215.9 },
    { rank: 2, name: "TSMC", value: "$122.4B", raw: 122.4 },
    { rank: 3, name: "Samsung", value: "$91.5B", raw: 91.5 },
    { rank: 4, name: "SK hynix", value: "$68.3B", raw: 68.3 },
    { rank: 5, name: "Intel", value: "$49.1B", raw: 49.1 },
    { rank: 6, name: "Qualcomm", value: "$38.4B", raw: 38.4 },
    { rank: 7, name: "Micron", value: "$37.4B", raw: 37.4 },
    { rank: 8, name: "Broadcom", value: "$36.9B", raw: 36.9 },
    { rank: 9, name: "AMD", value: "$34.6B", raw: 34.6 },
    { rank: 10, name: "MediaTek", value: "$19.1B", raw: 19.1 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "MediaTek",
      earnings: "$19.1 billion",
      category: "Taiwan · Chip designer",
      revenueSources: "Smartphone processors, smart TV and Wi-Fi chips",
      blurb: "MediaTek's net sales were NT$596.0 billion in 2025 (US$19.1 billion, as the company states it), up 12.3% from 2024.",
      standoutFact: "It is one of only two Taiwanese companies in the top 10, alongside TSMC, which manufactures many of MediaTek's chips.",
      sourceTag: "MediaTek consolidated financial statements, 2025",
      wikipediaUrl: "https://en.wikipedia.org/wiki/MediaTek",
    },
    {
      rank: 9,
      name: "AMD",
      earnings: "$34.6 billion",
      category: "United States · Chip designer",
      revenueSources: "Data center processors and AI accelerators, PC chips, gaming, embedded",
      blurb: "AMD's revenue was $34,639 million in 2025, up 34.3% from $25,785 million in 2024.",
      standoutFact: "Its data center segment, which includes its AI accelerators, brought in $16.6 billion, up 32%, about half of AMD's total revenue.",
      sourceTag: "AMD 2025 annual results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/AMD",
    },
    {
      rank: 8,
      name: "Broadcom",
      earnings: "$36.9 billion",
      category: "United States · Chip designer",
      revenueSources: "Custom AI chips, networking, broadband and wireless chips",
      blurb: "Broadcom's semiconductor segment brought in $36,858 million in its fiscal year ended November 2, 2025, up 22.5%. This excludes $27,029 million from its infrastructure software business (VMware).",
      standoutFact: "Broadcom says its AI revenue reached $20 billion in fiscal 2025, up 65%, from custom AI chips and networking products.",
      sourceTag: "Broadcom fiscal 2025 results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Broadcom",
    },
    {
      rank: 7,
      name: "Micron",
      earnings: "$37.4 billion",
      category: "United States · Memory",
      revenueSources: "DRAM, high-bandwidth memory (HBM), NAND flash storage",
      blurb: "Micron's revenue was $37,378 million in its fiscal year ended August 28, 2025, up 48.9%, the second-fastest growth in the top 10 after NVIDIA.",
      standoutFact: "Micron says its HBM and other data center memory products together brought in $10 billion in fiscal 2025. Because its fiscal year ended in August, its figures don't include the last four months of 2025.",
      sourceTag: "Micron fiscal 2025 results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Micron_Technology",
    },
    {
      rank: 6,
      name: "Qualcomm",
      earnings: "$38.4 billion",
      category: "United States · Chip designer",
      revenueSources: "Smartphone processors, automotive and IoT chips",
      blurb: "Qualcomm's chip business (QCT) brought in $38,367 million in its fiscal year ended September 28, 2025, up 15.6%. This excludes its patent licensing business (QTL).",
      standoutFact: "Qualcomm's Snapdragon processors are used in many of the world's Android smartphones, its biggest chip market.",
      sourceTag: "Qualcomm fiscal 2025 results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Qualcomm",
    },
    {
      rank: 5,
      name: "Intel",
      earnings: "$49.1 billion",
      category: "United States · Chip designer and manufacturer",
      revenueSources: "PC processors, data center and AI chips",
      blurb: "Intel's product segments (Client Computing and Data Center and AI) brought in $49,147 million in 2025. Including its foundry business, Intel's total revenue was $52,853 million.",
      standoutFact: "Intel is the only company in the top 10 whose chip revenue fell, down 0.7% from $49,471 million in 2024.",
      sourceTag: "Intel 2025 annual results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Intel",
    },
    {
      rank: 4,
      name: "SK hynix",
      earnings: "$68.3 billion",
      category: "South Korea · Memory",
      revenueSources: "DRAM, high-bandwidth memory (HBM), NAND flash storage",
      blurb: "SK hynix's revenue was a record ₩97.1 trillion in 2025 (about $68.3 billion), up 46.8% from ₩66.2 trillion in 2024.",
      standoutFact: "SK hynix says its revenue from high-bandwidth memory, used in AI processors, more than doubled in 2025.",
      sourceTag: "SK hynix FY2025 results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/SK_Hynix",
    },
    {
      rank: 3,
      name: "Samsung",
      earnings: "$91.5 billion",
      category: "South Korea · Memory, chip design and manufacturing",
      revenueSources: "Memory chips, smartphone processors, contract manufacturing (Samsung Foundry)",
      blurb: "Samsung Electronics' chip division (Device Solutions) had sales of ₩130.1 trillion in 2025 (about $91.5 billion), up 17.1% from ₩111.1 trillion in 2024.",
      standoutFact: "Samsung's figure includes Samsung Foundry, its contract manufacturing business, which it does not report separately.",
      sourceTag: "Samsung Electronics FY2025 results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Samsung_Electronics",
    },
    {
      rank: 2,
      name: "TSMC",
      earnings: "$122.4 billion",
      category: "Taiwan · Foundry (contract manufacturer)",
      revenueSources: "Manufacturing chips designed by other companies, including NVIDIA, AMD and Apple",
      blurb: "TSMC's net revenue was NT$3,809.05 billion in 2025 (US$122.42 billion, as the company states it), up 31.6% in New Taiwan dollars.",
      standoutFact: "TSMC doesn't design its own chips; it manufactures them for other companies, which is why some industry rankings, such as Gartner's, leave it out.",
      sourceTag: "TSMC 4Q25 Management Report",
      wikipediaUrl: "https://en.wikipedia.org/wiki/TSMC",
    },
    {
      rank: 1,
      name: "NVIDIA",
      earnings: "$215.9 billion",
      category: "United States · Chip designer",
      revenueSources: "AI data center processors and networking, gaming GPUs, automotive",
      blurb: "NVIDIA's revenue was $215,938 million in its fiscal year ended January 25, 2026, up 65% from $130,497 million the year before.",
      standoutFact: "Its data center business brought in $193.7 billion, about 90% of NVIDIA's total, and more than TSMC's entire revenue. NVIDIA's revenue is about 1.8 times TSMC's.",
      sourceTag: "NVIDIA fiscal 2026 results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Nvidia",
    },
  ],

  keyTakeaway: {
    stat: "$215.9B",
    label: "NVIDIA's revenue in its latest fiscal year, up 65%",
    comparisonStat: "$193.7B",
    comparisonLabel: "NVIDIA's data center revenue alone, more than any other chip company's total",
    note: "AI is reshaping the chip industry's ranking. NVIDIA's revenue is now about 1.8 times TSMC's, and AI memory has pushed SK hynix (+46.8%) and Micron (+48.9%) to the fastest growth in the top 10 after NVIDIA. Intel, long the industry's biggest chipmaker, is the only top-10 company whose chip revenue fell. Gartner, which measures chip sales by calendar year and excludes foundries, also ranks NVIDIA first for 2025, at $125.7 billion, making it the first chip vendor ever to pass $100 billion in Gartner's ranking.",
  },

  sourceNote: {
    dataPeriod: "Each company's latest full fiscal year ending between August 2025 and January 2026",
    lastUpdated: "November 11, 2026",
    sources:
      "Company annual results and filings: NVIDIA (fiscal 2026, ended January 25, 2026), TSMC (4Q25 Management Report), Samsung Electronics (FY2025 results, Device Solutions division), SK hynix (FY2025 results), Intel, Qualcomm, Micron, Broadcom, AMD and Texas Instruments (earnings releases and SEC filings), MediaTek (2025 consolidated financial statements). Comparison: Gartner, \"Gartner Says Worldwide Semiconductor Revenue Grew 21% in 2025\" (January 12, 2026). Exchange rate: Federal Reserve H.10.",
    methodology:
      "Companies are ranked by revenue from semiconductors in their latest full fiscal year, as they report it. Where a company has other businesses, only its chip segment is counted: Samsung's Device Solutions division (which includes Samsung Foundry), Intel's Client Computing and Data Center and AI segments (excluding Intel Foundry), Qualcomm's QCT segment (excluding licensing) and Broadcom's semiconductor solutions segment (excluding software). NVIDIA, AMD, Micron, SK hynix, MediaTek and TSMC are counted by total revenue. Fiscal years differ: NVIDIA's ended January 25, 2026, Broadcom's in November 2025, Qualcomm's in September 2025 and Micron's in August 2025; the rest follow the calendar year. TSMC and MediaTek US dollar figures are as the companies state them. Samsung and SK hynix figures are converted by Viszlyn at the 2025 average rate of ₩1,421.40 per US dollar (Federal Reserve H.10). Percentage changes are calculated from the reported figures in each company's own currency. This ranking includes TSMC, a foundry; without it, Texas Instruments ($17.7 billion) would be 10th. Gartner's calendar-year ranking counts only chip sales and excludes foundries, so its figures differ (for example, NVIDIA $125.7 billion); Gartner also includes Apple ($24.6 billion, its estimate of Apple's in-house chips), which reports no chip revenue of its own.",
    sourceLinks: [
      { label: "NVIDIA: Financial Results for Fourth Quarter and Fiscal 2026", href: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026" },
      { label: "TSMC 4Q25 Management Report (PDF)", href: "https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-01/00fe50f72b38d74e6b9b066398f020f337cd4e9d/4Q25%20Management%20Report.pdf" },
      { label: "Samsung Electronics: Q4 and FY2025 results", href: "https://news.samsungsemiconductor.com/global/samsung-electronics-announces-fourth-quarter-and-fy-2025-results/" },
      { label: "SK hynix: FY25 financial results", href: "https://www.prnewswire.com/news-releases/sk-hynix-announces-fy25-financial-results-posts-record-high-results-and-delivers-highest-shareholder-returns-302672384.html" },
      { label: "MediaTek: 2025 consolidated financial report (PDF)", href: "https://www.mediatek.com/hubfs/MediaTek%20Assets/Pdfs/Financial%20Reports/2025/Q4%20Consolidated%20Report.pdf" },
      { label: "Gartner: Worldwide semiconductor revenue grew 21% in 2025", href: "https://www.gartner.com/en/newsroom/press-releases/2026-01-12-gartner-says-worldwide-semiconductor-revenue-grew-21-percent-in-2025" },
      { label: "Federal Reserve H.10: Korean won exchange rates", href: "https://www.federalreserve.gov/releases/h10/hist/dat00_ko.htm" },
    ],
  },

  faqItems: [
    {
      question: "What is the biggest chip company in the world?",
      answer:
        "NVIDIA, with revenue of $215.9 billion in its fiscal year ended January 2026, up 65%. Its data center business, which makes processors for AI, accounted for $193.7 billion.",
    },
    {
      question: "Is TSMC bigger than NVIDIA?",
      answer:
        "Not by revenue. TSMC's 2025 revenue was $122.4 billion, compared with NVIDIA's $215.9 billion. But TSMC manufactures most of NVIDIA's chips, so the two companies depend on each other.",
    },
    {
      question: "Why isn't Apple on this list?",
      answer:
        "Apple designs its own chips but uses them in its own products and doesn't report chip revenue. Gartner estimates the value of Apple's in-house chips at $24.6 billion for 2025, but there is no company-reported figure to rank.",
    },
    {
      question: "Why are memory companies growing so fast?",
      answer:
        "AI processors need large amounts of fast memory, especially high-bandwidth memory (HBM). SK hynix's revenue rose 46.8% in 2025 and Micron's 48.9% in its fiscal 2025, and SK hynix says its HBM revenue more than doubled.",
    },
    {
      question: "Why do these numbers differ from Gartner's ranking?",
      answer:
        "Gartner measures chip sales by calendar year and counts only the value of chips sold, excluding foundries like TSMC. This ranking uses each company's own reported revenue for its latest fiscal year, which for NVIDIA also includes complete systems and software.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Most Valuable AI Companies in 2026", href: "/rankings/most-valuable-ai-companies-2026" },
    { title: "The 10 Most Valuable Companies in the World in 2026", href: "/rankings/worlds-most-valuable-companies-2026" },
    { title: "6 of the Biggest US Tech IPOs and Listings of 2026 So Far", href: "/rankings/biggest-tech-ipos-2026" },
    { title: "The World's 20 Largest Economies in 2030: IMF Projections Ranked", href: "/rankings/largest-economies-2030-imf-projections" },
  ],
};
