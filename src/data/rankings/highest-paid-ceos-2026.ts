import { RankingArticle } from "./types";

export const highestPaidCeos2026: RankingArticle = {
  slug: "highest-paid-ceos-2026",

  metaTitle: "Top 10 Highest-Paid CEOs at US Companies (2026) | Viszlyn",
  metaDescription:
    "The highest-paid CEOs at US public companies, ranked by disclosed total compensation from SEC proxy filings, and why Elon Musk is excluded.",
  ogTitle: "The 10 Highest-Paid CEOs in 2026",
  ogDescription:
    "The highest-paid CEOs at US public companies, ranked by disclosed total compensation from SEC proxy filings. See the full ranking and what drives nine-figure CEO pay.",
  twitterTitle: "The 10 Highest-Paid CEOs in 2026",
  twitterDescription:
    "The highest-paid CEOs at US public companies, ranked by disclosed total compensation from SEC proxy filings. See the full ranking and what drives nine-figure CEO pay.",

  eyebrow: "Money",
  title: "The 10 Highest-Paid CEOs in 2026",
  dek: "Figma's Dylan Field leads disclosed 2025 CEO pay at $864.4 million, almost none of it cash. What drives nine-figure pay packages, and why one name isn't on this ranked list.",
  publishedDate: "September 8, 2026",
  lastUpdated: "October 24, 2026",
  dataPeriod: "Most recent fiscal years ending in 2025 to January 2026, per SEC proxy filings",

  quickAnswer:
    "Figma CEO Dylan Field has the largest disclosed CEO pay package at a US public company after Elon Musk, at $864.4 million for 2025, ahead of Welltower's Shankh Mitra at $821.1 million and Opendoor's Kaz Nejatian at $741.1 million. Those three account for 61.1% of this top 10's $3.97 billion combined total. Almost all of each package is stock awards valued when granted, not cash paid in 2025. Elon Musk is deliberately excluded from this ranked list; see below for why.",
  introParagraph:
    "CEO pay at US public companies is reported in SEC proxy statements, and the headline totals are dominated by equity awards, which SEC rules value on the day they are granted. A large multi-year award therefore shows up entirely in the year it was granted — which is how a CEO with a salary under $1 million can appear here with a total in the hundreds of millions. This ranking uses each CEO's total from the Summary Compensation Table for the most recent fiscal year ending between early 2025 and January 2026, cross-checked against Equilar and The New York Times, The Wall Street Journal and the AFL-CIO Executive Paywatch database.",
  calloutBox: {
    label: "A note on Elon Musk",
    body: "Elon Musk is not ranked. His 2025 Tesla performance award is valued at $132.3 billion by Equilar and about $158 billion by The Wall Street Journal and the AFL-CIO. It is a 10-year performance award whose grant-date value is far outside the range of every other package here, and the sources value it differently. Including it would make the rest of the ranking unreadable.",
  },

  chartTitle: "Disclosed Total Compensation — 2025 · USD millions",
  chartSource: "SEC proxy filings / Equilar 100 / AFL-CIO Executive PayWatch",
  chartTapNote: "Tap any name to jump to their full breakdown below.",
  chartItems: [
    { rank: 1, name: "Dylan Field", value: "$864.4M", raw: 864.4 },
    { rank: 2, name: "Shankh Mitra", value: "$821.1M", raw: 821.1 },
    { rank: 3, name: "Kaz Nejatian", value: "$741.1M", raw: 741.1 },
    { rank: 4, name: "RJ Scaringe", value: "$402.6M", raw: 402.6 },
    { rank: 5, name: "Niraj Shah", value: "$280.8M", raw: 280.8 },
    { rank: 6, name: "George Kurtz", value: "$247.6M", raw: 247.6 },
    { rank: 7, name: "Hock Tan", value: "$205.3M", raw: 205.3 },
    { rank: 8, name: "David Zaslav", value: "$165.0M", raw: 165.0 },
    { rank: 9, name: "Stephen Schwarzman", value: "$125.6M", raw: 125.6 },
    { rank: 10, name: "David Solomon", value: "$118.9M", raw: 118.9 },
  ],

  detailedEntries: [
    {
      rank: 10,
      name: "David Solomon",
      earnings: "$118.9M",
      category: "Investment Banking",
      revenueSources: "Salary, cash bonus, performance stock units and retention awards",
      blurb:
        "Goldman's proxy table puts Solomon's 2025 total at $118,891,684. His announced annual pay was $47 million — the higher disclosed figure reflects an $80 million retention stock award granted in January 2025 that cliff-vests in January 2030.",
      standoutFact:
        "That retention award was approved by shareholders at Goldman's April 2025 annual meeting, with 66% support.",
      sourceTag: "AFL-CIO Executive PayWatch; Goldman Sachs DEF 14A",
      wikipediaUrl: "https://en.wikipedia.org/wiki/David_M._Solomon",
    },
    {
      rank: 9,
      name: "Stephen Schwarzman",
      earnings: "$125.6M",
      category: "Private Equity & Asset Management",
      revenueSources: "Annual total compensation as disclosed in Blackstone's 10-K pay-ratio filing",
      blurb:
        "Blackstone disclosed Schwarzman's 2025 annual total compensation as $125,641,824 in the CEO pay-ratio section of its annual report.",
      standoutFact:
        "That is roughly 457 times Blackstone's median employee pay of $275,000.",
      sourceTag: "Blackstone Form 10-K; AFL-CIO Executive PayWatch",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Stephen_A._Schwarzman",
    },
    {
      rank: 8,
      name: "David Zaslav",
      earnings: "$165.0M",
      category: "Media & Entertainment",
      revenueSources: "Salary, stock awards, option awards and cash incentives",
      blurb:
        "Zaslav's $165 million total is dominated by a one-time $109.6 million option grant tied to the planned split of Warner Bros. Discovery into two companies, alongside a $3 million salary, $22.6 million in stock awards and $25.7 million in cash incentives.",
      standoutFact:
        "The split those options were granted for never happened — it was dropped when Paramount acquired Warner Bros. Discovery instead.",
      sourceTag: "Warner Bros. Discovery filings; Equilar 100",
      wikipediaUrl: "https://en.wikipedia.org/wiki/David_Zaslav",
    },
    {
      rank: 7,
      name: "Hock Tan",
      earnings: "$205.3M",
      category: "Semiconductors",
      revenueSources: "Salary and performance stock units",
      blurb:
        "Broadcom's proxy puts Tan's fiscal 2025 total at $205,278,006 — $1.2 million of salary and $202.4 million of equity awards, driven by a new performance award tied to Broadcom's AI revenue through 2030.",
      standoutFact:
        "The award pays against a $90 billion AI revenue target for 2028–2030 and triples above $120 billion — but is forfeited entirely if AI revenue falls below $60 billion.",
      sourceTag: "Broadcom DEF 14A; Equilar 100",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Hock_Tan",
    },
    {
      rank: 6,
      name: "George Kurtz",
      earnings: "$247.6M",
      category: "Cybersecurity",
      revenueSources: "Salary, stock awards and non-equity incentive pay",
      blurb:
        "CrowdStrike's proxy puts Kurtz's total for the fiscal year ended January 31, 2026 at $247,579,143 — $242.1 million of it stock awards, including a performance award tied to total shareholder return granted in December 2025.",
      standoutFact:
        "He is absent from Equilar's Top 100 for a mundane reason: it only counted proxies filed by April 30, 2026, and CrowdStrike's was filed in May 2026, ahead of its June annual meeting.",
      sourceTag: "CrowdStrike DEF 14A; The Wall Street Journal",
      wikipediaUrl: "https://en.wikipedia.org/wiki/George_Kurtz",
    },
    {
      rank: 5,
      name: "Niraj Shah",
      earnings: "$280.8M",
      category: "E-Commerce",
      revenueSources: "Performance stock units (2025 CEO Award)",
      blurb:
        "Shah's $280.8 million is not an old award reaching a vesting milestone. It is the grant-date value of a new CEO Award approved in September 2025: 5,000,000 performance stock units that will be his only equity award for the next ten years.",
      standoutFact:
        "The units vest in six tranches only as Wayfair's share price hits hurdles from $176 up to $679 — the final tranche requires a 675% increase — and his base salary is $80,000.",
      sourceTag: "Wayfair Form 8-K (Sep 2025); AFL-CIO Executive PayWatch",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Niraj_Shah",
    },
    {
      rank: 4,
      name: "RJ Scaringe",
      earnings: "$402.6M",
      category: "Electric Vehicles",
      revenueSources: "Salary, bonus, stock awards and option awards",
      blurb:
        "Scaringe's $402.6 million is dominated by a $373.5 million option award granted in November 2025 to replace his 2021 award. The options carry a $15.22 exercise price and vest only if Rivian meets share-price and operating targets over roughly ten years; the rest of his total is $26.6 million in stock awards, a $1.12 million salary and a $1.02 million bonus.",
      standoutFact:
        "Rivian lost $3.6 billion in 2025, the year of this award.",
      sourceTag: "Rivian DEF 14A; Equilar 100",
      wikipediaUrl: "https://en.wikipedia.org/wiki/RJ_Scaringe",
    },
    {
      rank: 3,
      name: "Kaz Nejatian",
      earnings: "$741.1M",
      category: "Real Estate Technology",
      revenueSources: "Performance stock units and make-whole restricted stock units",
      blurb:
        "Nejatian became Opendoor's CEO in September 2025, and his entire $741,137,105 total is stock awards: a make-whole grant of 1,580,611 restricted stock units replacing pay he forfeited when he left Shopify, plus two performance awards of 40,886,344 shares each.",
      standoutFact:
        "The performance awards pay out only if Opendoor's share price reaches set hurdles over five years, and his salary in the proxy table is $0 — his disclosed pay is 7,581 times the company's median employee's.",
      sourceTag: "Opendoor Form 8-K (Sep 2025); AFL-CIO Executive PayWatch; Equilar 100",
    },
    {
      rank: 2,
      name: "Shankh Mitra",
      earnings: "$821.1M",
      category: "Healthcare Real Estate (REIT)",
      revenueSources: "Long-term stock awards (LTIP units) and salary",
      blurb:
        "Mitra's $821,090,355 total is almost entirely one October 2025 stock award — $813.2 million of it — under Welltower's Ten Year Executive Continuity and Alignment Program, a decade-long grant covering 2026 to 2035. About half is performance-based, and the units are not fully transferable until 2035. The Wall Street Journal's S&P 500 pay ranking puts him second, behind only Elon Musk.",
      standoutFact:
        "Shareholders rejected the package: Welltower's advisory say-on-pay vote failed at its May 2026 annual meeting. Mitra's salary under the program is just $110,000.",
      sourceTag: "Welltower DEF 14A; AFL-CIO Executive PayWatch; The Wall Street Journal",
    },
    {
      rank: 1,
      name: "Dylan Field",
      earnings: "$864.4M",
      category: "Design Software",
      revenueSources: "Salary and restricted stock unit awards",
      blurb:
        "Field's $864,358,634 — the largest disclosed 2025 package after Musk's — is 99.7% stock awards: a CEO service award of restricted stock units over 14,480,169 shares granted in June 2025, vesting 10%, 20%, 20%, 20% and 30% across five anniversaries as long as he remains CEO, plus a separate stock price award with share-price hurdles.",
      standoutFact:
        "His cash salary is $500,000 — about 0.06% of his reported total.",
      sourceTag: "Figma DEF 14A; Equilar 100",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Dylan_Field",
    },
  ],

  keyTakeaway: {
    stat: "$3,110.0M",
    label: "Combined pay of the top 5 CEOs",
    comparisonStat: "$862.4M",
    comparisonLabel: "Combined pay of the bottom 5",
    note: "The top three alone — Field, Mitra and Nejatian — account for 61.1% of the $3.97 billion combined total, and none of the top seven received even 1% of their package as salary. These are grant-date accounting values for multi-year equity awards, not cash paid out in 2025.",
  },

  sourceNote: {
    dataPeriod: "Fiscal years ending between February 2025 and January 2026",
    lastUpdated: "October 24, 2026",
    sources:
      "Company SEC Form DEF 14A proxy statements and Form 8-K filings; Equilar / The New York Times Top 100 Highest-Paid CEOs (2026); The Wall Street Journal CEO pay ranking; AFL-CIO Executive PayWatch",
    methodology:
      "Figures are total compensation from the Summary Compensation Table in each company's SEC proxy statement, for the most recent fiscal year ending between early 2025 and January 2026. Stock and option awards are valued at grant date under SEC rules, so the totals are not cash received, and a large multi-year award appears entirely in the year it was granted. Where trackers round differently, the proxy figure governs. One common trap: Peter Gassner's $172.4 million Veeva total belongs to the fiscal year ended January 31, 2025 — his fiscal 2026 total is $470,833 — and some databases mislabel the year, which is why he appears in some other rankings. Elon Musk is excluded for the reasons in the callout above.",
  },

  faqItems: [
    {
      question: "Who is the highest-paid CEO in the US?",
      answer:
        "Excluding Elon Musk, Figma's Dylan Field, at $864.4 million for 2025 per the SEC Summary Compensation Table in Figma's proxy. Including Musk, he ranks first on every major list — but his figure is a 10-year Tesla performance award valued at grant date, put at $132.3 billion by Equilar and about $158 billion by The Wall Street Journal.",
    },
    {
      question: "Is this the money these CEOs actually received?",
      answer:
        "No. Stock and option awards are valued on the day they are granted. Most of these awards pay out only if stock-price or performance targets are met, often over several years — and some may never pay out at all.",
    },
    {
      question: "Why isn't Peter Gassner of Veeva on the list?",
      answer:
        "His $172.4 million total is for Veeva's fiscal year ended January 31, 2025. In the company's most recent proxy, his total for the year ended January 31, 2026 is $470,833. Some databases attach the $172.4 million to 2026, which is why he appears in some other rankings of 2025 pay.",
    },
    {
      question: "Why are some well-known CEOs not on the list?",
      answer:
        "Their 2025 totals were lower. Apple's Tim Cook received $74.3 million and Microsoft's Satya Nadella $96.5 million — both large packages, but below this list's $118.9 million cutoff.",
    },
    {
      question: "How is executive compensation measured?",
      answer:
        "U.S. public companies disclose executive pay annually through SEC Form DEF 14A proxy statements. Figures here reflect total reported compensation from these filings and related tracking by organizations like Equilar and AFL-CIO Executive PayWatch, not necessarily cash actually received in a given year — much of it is unvested equity valued at grant.",
    },
  ],

  relatedLinks: [
    { title: "The 10 Highest-Paid Athletes in 2026", href: "/rankings/highest-paid-athletes-2026" },
    { title: "The 10 Highest-Earning Creators in 2026", href: "/rankings/highest-earning-creators-2026" },
    { title: "The World's Most Valuable Companies", href: "/rankings/worlds-most-valuable-companies-2026" },
    { title: "The Most Valuable AI Companies", href: "/rankings/most-valuable-ai-companies-2026" },
  ],
};
