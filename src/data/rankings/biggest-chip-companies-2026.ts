import { RankingArticle } from "./types";

const SRC = "Company annual results (latest fiscal year)";

export const biggestChipCompanies2026: RankingArticle = {
  slug: "biggest-chip-companies-2026",

  metaTitle: "The 10 Biggest Chip Companies by Revenue in 2026, Ranked | Viszlyn",
  metaDescription:
    "NVIDIA reported $215.9 billion in revenue. Micron jumped to No. 2 ($133.2B) on the AI memory boom, ahead of TSMC ($122.4B). See the 10 biggest chip companies by reported revenue.",
  ogTitle: "The World's 10 Biggest Chip Companies by Revenue",
  ogDescription:
    "NVIDIA reported $215.9B in total revenue, and its data center sales alone ($193.7B) beat any other chip company's reported revenue. The 10 biggest chipmakers, from their own reports.",
  twitterTitle: "Ranked: The World's 10 Biggest Chip Companies",
  twitterDescription:
    "NVIDIA $215.9B, Micron $133.2B, TSMC $122.4B. The 10 biggest semiconductor companies by revenue, from their latest annual results.",

  eyebrow: "Business",
  title: "The World's 10 Biggest Chip Companies by Revenue in 2026",
  dek: "Ranked by the revenue each company reports for its chip business in its latest fiscal year. NVIDIA leads this company-reported revenue comparison by a wide margin, and the AI memory boom has sent Micron to No. 2.",
  publishedDate: "November 10, 2026",
  lastUpdated: "November 25, 2026",
  dataPeriod: "Latest full fiscal year reported by November 25, 2026",
  heroImage: {
    src: "/heroes/biggest-chip-companies-2026.png",
    ogSrc: "/heroes/biggest-chip-companies-2026-og.png",
    alt: "Bar chart of the world's 10 biggest chip companies by semiconductor revenue in their latest fiscal year, led by NVIDIA at $215.9 billion, then Micron at $133.2 billion and TSMC at $122.4 billion.",
  },

  quickAnswer:
    "NVIDIA is the world's biggest chip company by reported revenue, with $215.9 billion in its fiscal year ended January 2026, up 65%. That is NVIDIA's total company revenue, which includes complete systems and software as well as chips. Micron is second with $133.2 billion in its fiscal year ended September 2026, more than three and a half times its previous year, as AI drove demand for memory. TSMC, which manufactures chips for other companies, is third with $122.4 billion. NVIDIA's data center business alone brought in $193.7 billion. These are company-reported figures, not a standardized measure of chip sales like Gartner's.",
  introParagraph:
    "This ranking uses the revenue each company reports for its chip business, or for the whole company where chips are its main business, in its latest full fiscal year. It puts different revenue measures side by side, so it is not a like-for-like comparison of chip sales or a market-share ranking: for NVIDIA, for example, the figure is total company revenue, which also includes complete data center systems and software. For companies that also sell other things, only the semiconductor part is counted: Samsung's Device Solutions division, Intel's Client Computing and Data Center and AI segments, Qualcomm's chip business (QCT) and Broadcom's semiconductor segment. Companies end their fiscal years at different times, from November 2025 (Broadcom) to September 2026 (Micron and Qualcomm), so the periods don't line up: this is a table of each company's latest reported year, not one shared 12-month period. TSMC is included even though it is a foundry, a contract manufacturer that makes chips designed by other companies, including NVIDIA, AMD and Apple.",
  calloutBox: {
    label: "AI made NVIDIA the giant, and memory the boom",
    body: "NVIDIA's revenue rose from $130.5 billion to $215.9 billion in one fiscal year. Its data center business, which sells the processors and networking used to train and run AI, accounted for $193.7 billion of that, up 68%. AI demand has also lifted memory makers. SK hynix's revenue rose 46.8% in 2025, and Micron's jumped from $37.4 billion to $133.2 billion in its fiscal year ended September 3, 2026. Micron's year runs nine months later than most companies here, so it captures more of the 2026 memory boom; it was also a 53-week year.",
  },

  comparisonLabel: "the November 10, 2026 edition",
  chartTitle: "Revenue measure used for each company, latest reported fiscal year (US$ billions)",
  chartSource: SRC,
  chartTapNote: "Measures differ: total company revenue for NVIDIA, Micron, TSMC, SK hynix, AMD and MediaTek; chip divisions or segments for Samsung (Device Solutions), Intel (Client Computing + Data Center and AI), Qualcomm (QCT) and Broadcom (semiconductor solutions). Periods differ too: fiscal years ended Sep 3, 2026 (Micron), Sep 27, 2026 (Qualcomm), Jan 25, 2026 (NVIDIA) and Nov 2, 2025 (Broadcom); all others are calendar 2025. Tap any company to jump to its full breakdown below.",
  entryValueLabel: "Reported revenue:",
  chartItems: [
    { rank: 1, name: "NVIDIA", value: "$215.9B", raw: 215.9, prevRank: 1 },
    { rank: 2, name: "Micron", value: "$133.2B", raw: 133.2, prevRank: 7 },
    { rank: 3, name: "TSMC", value: "$122.4B", raw: 122.4, prevRank: 2 },
    { rank: 4, name: "Samsung", value: "$91.5B", raw: 91.5, prevRank: 3 },
    { rank: 5, name: "SK hynix", value: "$68.3B", raw: 68.3, prevRank: 4 },
    { rank: 6, name: "Intel", value: "$49.1B", raw: 49.1, prevRank: 5 },
    { rank: 7, name: "Qualcomm", value: "$37.2B", raw: 37.2, prevRank: 6 },
    { rank: 8, name: "Broadcom", value: "$36.9B", raw: 36.9, prevRank: 8 },
    { rank: 9, name: "AMD", value: "$34.6B", raw: 34.6, prevRank: 9 },
    { rank: 10, name: "MediaTek", value: "$19.1B", raw: 19.1, prevRank: 10 },
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
      image: { src: "/rankings/biggest-chip-companies-2026/mediatek.webp", width: 1200, height: 900, alt: "Glass-fronted MediaTek headquarters building in Hsinchu, Taiwan", author: "CURSKA", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:MEdiaTek%E6%9C%AC%E7%A4%BE.jpg", caption: "MediaTek headquarters, Hsinchu, Taiwan." },
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
      image: { src: "/rankings/biggest-chip-companies-2026/amd.webp", width: 1200, height: 887, alt: "AMD's glass office building at 2485 Augustine Drive, Santa Clara", author: "Coolcaesar", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:2485_Augustine_Drive_headquarters_in_Santa_Clara,_California.jpg", caption: "AMD headquarters, Santa Clara, California." },
    },
    {
      rank: 8,
      name: "Broadcom",
      earnings: "$36.9 billion (semiconductor solutions segment)",
      category: "United States · Chip designer",
      revenueSources: "Custom AI chips, networking, broadband and wireless chips",
      blurb: "Broadcom's semiconductor segment brought in $36,858 million in its fiscal year ended November 2, 2025, up 22.5%. This excludes $27,029 million from its infrastructure software business (VMware).",
      standoutFact: "Broadcom says its AI revenue reached $20 billion in fiscal 2025, up 65%, from custom AI chips and networking products.",
      sourceTag: "Broadcom fiscal 2025 results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Broadcom",
      image: { src: "/rankings/biggest-chip-companies-2026/broadcom.webp", width: 1200, height: 900, alt: "Broadcom sign in front of its headquarters building in Irvine, California", author: "Coolcaesar", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Broadcomheadquarters.jpg", caption: "Broadcom's headquarters building, Irvine, California." },
    },
    {
      rank: 7,
      name: "Qualcomm",
      earnings: "$37.2 billion (QCT segment)",
      category: "United States · Chip designer",
      revenueSources: "Smartphone processors, automotive and IoT chips",
      blurb: "Qualcomm's chip business (QCT) brought in $37,208 million in its fiscal year ended September 27, 2026, down 3.0% from $38,367 million. This excludes its patent licensing business (QTL); total company revenue was $43,120 million.",
      standoutFact: "Handset chips still made up $24,072 million of QCT revenue, but fell 13.4%, while automotive chips grew 51.7% to $6,004 million.",
      sourceTag: "Qualcomm Form 10-K, fiscal 2026",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Qualcomm",
      image: { src: "/rankings/biggest-chip-companies-2026/qualcomm.webp", width: 1200, height: 1028, alt: "Qualcomm headquarters tower in San Diego", author: "Coolcaesar", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Qualcomm_Headquarters_La_Jolla.jpg", caption: "Qualcomm headquarters, San Diego, California." },
    },
    {
      rank: 6,
      name: "Intel",
      earnings: "$49.1 billion (Client Computing + Data Center and AI segments)",
      category: "United States · Chip designer and manufacturer",
      revenueSources: "PC processors, data center and AI chips",
      blurb: "Intel's product segments (Client Computing and Data Center and AI) brought in $49,147 million in 2025. Including its foundry business, Intel's total revenue was $52,853 million.",
      standoutFact: "Intel's chip revenue fell 0.7% from $49,471 million in 2024. Qualcomm's QCT is the only other top-10 figure that fell.",
      sourceTag: "Intel 2025 annual results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Intel",
      image: { src: "/rankings/biggest-chip-companies-2026/intel.webp", width: 1200, height: 802, alt: "Intel's Robert Noyce Building headquarters in Santa Clara", author: "Coolcaesar", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Intel_Headquarters_in_2023.jpg", caption: "Intel headquarters (Robert Noyce Building), Santa Clara, California, 2023." },
    },
    {
      rank: 5,
      name: "SK hynix",
      earnings: "$68.3 billion",
      category: "South Korea · Memory",
      revenueSources: "DRAM, high-bandwidth memory (HBM), NAND flash storage",
      blurb: "SK hynix's revenue was a record ₩97.1 trillion in 2025 (about $68.3 billion), up 46.8% from ₩66.2 trillion in 2024.",
      standoutFact: "SK hynix says its revenue from high-bandwidth memory, used in AI processors, more than doubled in 2025.",
      sourceTag: "SK hynix FY2025 results (company newsroom)",
      wikipediaUrl: "https://en.wikipedia.org/wiki/SK_Hynix",
      image: { src: "/rankings/biggest-chip-companies-2026/sk-hynix.webp", width: 1200, height: 900, alt: "Close-up of an SK hynix memory chip on a blue circuit board", author: "Raimond Spekking", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:SK_Hynix_-_H5TC4G83MFR-8390.jpg", caption: "An SK hynix DDR3L memory chip." },
    },
    {
      rank: 4,
      name: "Samsung",
      earnings: "$91.5 billion (Device Solutions division)",
      category: "South Korea · Memory, chip design and manufacturing",
      revenueSources: "Memory chips, smartphone processors, contract manufacturing (Samsung Foundry)",
      blurb: "Samsung Electronics' chip division (Device Solutions) had sales of ₩130.1 trillion in 2025 (about $91.5 billion), up 17.2% from ₩111.1 trillion in 2024.",
      standoutFact: "Samsung's figure includes Samsung Foundry, its contract manufacturing business, which it does not report separately.",
      sourceTag: "Samsung Electronics FY2025 results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Samsung_Electronics",
      image: { src: "/rankings/biggest-chip-companies-2026/samsung.webp", width: 900, height: 1200, alt: "Samsung Electronics headquarters tower in Suwon, South Korea", author: "hyolee2", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Samsung_Electronics_Suwon.JPG", caption: "Samsung Electronics headquarters, Suwon, South Korea." },
    },
    {
      rank: 3,
      name: "TSMC",
      earnings: "$122.4 billion",
      category: "Taiwan · Foundry (contract manufacturer)",
      revenueSources: "Manufacturing chips designed by other companies, including NVIDIA, AMD and Apple",
      blurb: "TSMC's net revenue was NT$3,809.05 billion in 2025 (US$122.42 billion, as presented in TSMC's 2025 annual report), up 31.6% in New Taiwan dollars.",
      standoutFact: "TSMC doesn't design its own chips; it manufactures them for other companies, which is why some industry rankings, such as Gartner's, leave it out.",
      sourceTag: "TSMC 2025 Annual Report; 4Q25 Management Report",
      wikipediaUrl: "https://en.wikipedia.org/wiki/TSMC",
      image: { src: "/rankings/biggest-chip-companies-2026/tsmc.webp", width: 1200, height: 801, alt: "TSMC headquarters and Fab 12A in Hsinchu at dusk, with light trails from traffic", author: "曾 成訓", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:TSMC_Fab_12A_02.jpg", caption: "TSMC headquarters and Fab 12A, Hsinchu, Taiwan." },
    },
    {
      rank: 2,
      name: "Micron",
      earnings: "$133.2 billion (total; 53-week fiscal year ended Sep 3, 2026)",
      category: "United States · Memory",
      revenueSources: "DRAM, high-bandwidth memory (HBM), NAND flash storage",
      blurb: "Micron's revenue was $133,188 million in its fiscal year ended September 3, 2026, more than three and a half times the $37,378 million of fiscal 2025. That moved it from seventh to second in this ranking.",
      standoutFact: "Its fiscal year ended in September 2026, later than any other top-10 company's except Qualcomm's, so it reflects the 2026 jump in memory demand from AI that calendar-2025 figures for Samsung and SK hynix largely predate. It was also a 53-week year.",
      sourceTag: "Micron fiscal 2026 results (Form 8-K)",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Micron_Technology",
      image: { src: "/rankings/biggest-chip-companies-2026/micron.webp", width: 1200, height: 900, alt: "Micron's wafer fab building in Taichung, Taiwan", author: "Thingreenline4546", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Micron_Fab_in_Taichung,_Taiwan.jpeg", caption: "Micron's wafer fab in Taichung, Taiwan." },
    },
    {
      rank: 1,
      name: "NVIDIA",
      earnings: "$215.9 billion (total company revenue)",
      category: "United States · Chip designer",
      revenueSources: "AI data center processors and networking, gaming GPUs, automotive",
      blurb: "NVIDIA's revenue was $215,938 million in its fiscal year ended January 25, 2026, up 65% from $130,497 million the year before. This is NVIDIA's total reported company revenue, not a standalone chip-sales figure.",
      standoutFact: "Its data center business brought in $193.7 billion, about 90% of NVIDIA's total, and more than TSMC's entire revenue. NVIDIA's total revenue is about 1.8 times TSMC's total revenue, and slightly more than TSMC's revenue plus Samsung's Device Solutions division sales combined ($214.0 billion), although the three figures cover different scopes.",
      sourceTag: "NVIDIA fiscal 2026 results",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Nvidia",
      image: { src: "/rankings/biggest-chip-companies-2026/nvidia.webp", width: 1200, height: 734, alt: "NVIDIA's Endeavor headquarters building and entrance sign in Santa Clara", author: "Coolcaesar", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:NVIDIA_Headquarters.jpg", caption: "NVIDIA headquarters (Endeavor building), Santa Clara, California." },
    },
  ],

  keyTakeaway: {
    stat: "$215.9B",
    label: "NVIDIA's revenue in its latest fiscal year, up 65%",
    comparisonStat: "$193.7B",
    comparisonLabel: "NVIDIA's data center revenue alone, more than any other chip company's total",
    note: "AI is reshaping the chip industry's ranking. NVIDIA's revenue is about 1.8 times TSMC's, and AI memory demand lifted Micron's revenue about 256% in FY2026 and SK hynix's 46.8% in 2025. Intel, long the industry's biggest chipmaker, and Qualcomm are the only top-10 companies whose chip revenue fell. Separately, Gartner, which estimates calendar-year semiconductor sales with its own market methodology and excludes foundries, also puts NVIDIA first for 2025, at $125.7 billion. That is a different measure from the company-reported fiscal-year revenue used here, not a check on these figures.",
  },

  sourceNote: {
    dataPeriod: "Each company's latest full fiscal year reported by November 25, 2026 (ending between November 2025 and September 2026)",
    lastUpdated: "November 25, 2026",
    sources:
      "Company annual results and filings: NVIDIA (fiscal 2026, ended January 25, 2026), Micron (fiscal 2026, ended September 3, 2026, Form 8-K), Qualcomm (fiscal 2026, ended September 27, 2026, Form 10-K), TSMC (4Q25 Management Report), Samsung Electronics (FY2025 results and 2025 4Q Interim Report, Device Solutions division), SK hynix (FY2025 results), Intel, Broadcom, AMD and Texas Instruments (earnings releases and SEC filings), MediaTek (2025 consolidated financial statements). Comparison: Gartner, \"Gartner Says Worldwide Semiconductor Revenue Grew 21% in 2025\" (January 12, 2026). Exchange rate: Federal Reserve H.10.",
    methodology:
      "Companies are ranked by the revenue they report for their chip business in their latest full fiscal year. These are company-reported figures, not a standardized measure of semiconductor sales, so they are not directly comparable to market-share estimates such as Gartner's. NVIDIA's figure is its total company revenue, which includes complete data center systems and software as well as chips. Where a company has other businesses, only its chip segment is counted: Samsung's Device Solutions division (which includes Samsung Foundry), Intel's Client Computing and Data Center and AI segments (excluding Intel Foundry, a separately reported segment whose revenue comes mostly from manufacturing Intel's own products), Qualcomm's QCT segment (excluding licensing) and Broadcom's semiconductor solutions segment (excluding software). NVIDIA, AMD, Micron, SK hynix, MediaTek and TSMC are counted by total revenue. Fiscal years differ: Broadcom's ended November 2, 2025 (its fiscal 2026 results were not yet published on November 25, 2026), NVIDIA's on January 25, 2026, Micron's on September 3, 2026 (a 53-week year) and Qualcomm's on September 27, 2026; the rest follow the calendar year 2025. This is a table of each company's latest reported year, not a same-period comparison, which favours companies whose years ended later in 2026. TSMC is counted by its total revenue because contract chip manufacturing is its core business; its US dollar figure is the one presented in its 2025 annual report. MediaTek's US dollar figure is as the company states it. Samsung and SK hynix figures are converted by Viszlyn at the 2025 average rate of ₩1,421.40 per US dollar (Federal Reserve H.10). Percentage changes are calculated from the reported figures in each company's own currency. This ranking includes TSMC, a foundry; without it, Texas Instruments ($17.7 billion) would be 10th. Infineon (€16.4 billion in its fiscal year ended September 2026) is also just below MediaTek. Gartner's calendar-year ranking counts only chip sales and excludes foundries, so its figures differ (for example, NVIDIA $125.7 billion); Gartner also includes Apple ($24.6 billion, its estimate of Apple's in-house chips), which reports no chip revenue of its own.",
    sourceLinks: [
      { label: "NVIDIA: Financial Results for Fourth Quarter and Fiscal 2026", href: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026" },
      { label: "Micron: fiscal Q4 and full-year 2026 results (Form 8-K exhibit)", href: "https://www.sec.gov/Archives/edgar/data/0000723125/000072312526000018/a2026q4ex991-pressrelease.htm" },
      { label: "Qualcomm Form 10-K, fiscal 2026 (segment information)", href: "https://www.sec.gov/Archives/edgar/data/804328/000080432826000128/qcom-20260927.htm" },
      { label: "TSMC 2025 Annual Report", href: "https://investor.tsmc.com/static/annualReports/2025/english/index.html" },
      { label: "TSMC 4Q25 Management Report (PDF)", href: "https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-01/00fe50f72b38d74e6b9b066398f020f337cd4e9d/4Q25%20Management%20Report.pdf" },
      { label: "Samsung Electronics: Q4 and FY2025 results", href: "https://news.samsungsemiconductor.com/global/samsung-electronics-announces-fourth-quarter-and-fy-2025-results/" },
      { label: "Samsung Electronics: 2025 4Q Interim Report (DS Division full-year revenue) (PDF)", href: "https://images.samsung.com/is/content/samsung/assets/global/ir/docs/2025_4Q_Interim_Report.pdf" },
      { label: "SK hynix newsroom: FY25 financial results", href: "https://news.skhynix.com/en/sk-hynix-announces-fy25-financial-results/" },
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
        "Not by revenue. TSMC's 2025 revenue was $122.4 billion, compared with NVIDIA's $215.9 billion. TSMC manufactures many of the advanced chips NVIDIA designs, making it an important supplier to NVIDIA.",
    },
    {
      question: "Why isn't Apple on this list?",
      answer:
        "Apple designs its own chips but uses them in its own products and doesn't report chip revenue. Gartner estimates the value of Apple's in-house chips at $24.6 billion for 2025, but there is no company-reported figure to rank.",
    },
    {
      question: "Why did Micron jump to No. 2?",
      answer:
        "Micron's latest fiscal year ended on September 3, 2026, so its figure covers the first eight months of 2026, when memory demand from AI surged. Its revenue rose from $37.4 billion to $133.2 billion. Samsung, SK hynix and TSMC are ranked on calendar 2025, so their 2026 growth isn't counted yet.",
    },
    {
      question: "Why are memory companies growing so fast?",
      answer:
        "AI processors need large amounts of fast memory, especially high-bandwidth memory (HBM). SK hynix's revenue rose 46.8% in 2025, and the company says its HBM revenue more than doubled. Micron's revenue rose from $37.4 billion to $133.2 billion in its fiscal year ended September 2026.",
    },
    {
      question: "Why do these numbers differ from Gartner's ranking?",
      answer:
        "Gartner's calendar-year semiconductor-sales ranking uses a different methodology: it estimates the value of chips each vendor sold, excludes foundries such as TSMC, and estimates chip value for companies such as Apple that don't report chip revenue separately. It puts NVIDIA at $125.7 billion for 2025. This ranking instead uses each company's own reported revenue for its latest fiscal year, which for NVIDIA is total company revenue, including complete systems and software.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Most Valuable AI Companies in 2026", href: "/rankings/most-valuable-ai-companies-2026" },
    { title: "The 10 Longest-Serving Tech CEOs in 2026", href: "/rankings/longest-serving-tech-ceos-2026" },
    { title: "The 10 Most Valuable Companies in the World in 2026", href: "/rankings/worlds-most-valuable-companies-2026" },
    { title: "6 of the Biggest US Tech IPOs and Listings of 2026 So Far", href: "/rankings/biggest-tech-ipos-2026" },
    { title: "The World's 20 Largest Economies in 2030: IMF Projections Ranked", href: "/rankings/largest-economies-2030-imf-projections" },
  ],
};
