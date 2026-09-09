import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RankList } from "@/components/RankBar";
import { ChartHeader } from "@/components/ChartHeader";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import {
  ArticleLayout,
  ArticleSection,
  SourceNote,
} from "@/components/ArticleLayout";
import { RankEntry } from "@/components/RankEntry";
import { FAQ } from "@/components/FAQ";
import { RelatedRankings } from "@/components/RelatedRankings";

export const metadata: Metadata = {
  title: "The 10 Highest-Paid CEOs in 2026 | Viszlyn",
  description:
    "Wayfair's Niraj Shah leads disclosed executive compensation at $280.8M. See the full ranking, what drives nine-figure CEO pay, and why Elon Musk isn't on this list.",
  alternates: {
    canonical: "https://viszlyn.io/rankings/highest-paid-ceos-2026",
  },
  openGraph: {
    title: "The 10 Highest-Paid CEOs in 2026",
    description:
      "Wayfair's Niraj Shah leads disclosed executive compensation at $280.8M. See the full ranking and what drives nine-figure CEO pay.",
    url: "https://viszlyn.io/rankings/highest-paid-ceos-2026",
    siteName: "Viszlyn",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 10 Highest-Paid CEOs in 2026",
    description:
      "Wayfair's Niraj Shah leads disclosed executive compensation at $280.8M. See the full ranking and what drives nine-figure CEO pay.",
  },
};

const CHART_ITEMS = [
  { rank: 1, name: "Niraj Shah", value: "$280.8M", raw: 280.8 },
  { rank: 2, name: "George Kurtz", value: "$247.6M", raw: 247.6 },
  { rank: 3, name: "Hock E. Tan", value: "$205.3M", raw: 205.3 },
  { rank: 4, name: "Peter Gassner", value: "$172.4M", raw: 172.4 },
  { rank: 5, name: "David Solomon", value: "$118.8M", raw: 118.8 },
  { rank: 6, name: "Jim Anderson", value: "$101.5M", raw: 101.5 },
  { rank: 7, name: "Sridhar Ramaswamy", value: "$101.3M", raw: 101.3 },
  { rank: 8, name: "Nikesh Arora", value: "$99.7M", raw: 99.7 },
  { rank: 9, name: "Satya Nadella", value: "$96.4M", raw: 96.4 },
  { rank: 10, name: "Charles Scharf", value: "$94.5M", raw: 94.5 },
];

const DETAILED_ENTRIES = [
  {
    rank: 10,
    name: "Charles Scharf",
    earnings: "$94.5M",
    category: "Financial Services / Banking",
    revenueSources: "Base salary, performance bonus, and special milestone retention stock awards",
    blurb:
      "Scharf's compensation surged following major regulatory milestones at Wells Fargo, highlighted by the Federal Reserve lifting its long-standing asset cap and resolving several outstanding consent orders.",
    standoutFact:
      "His $94.5 million total package includes his standard annual target pay combined with a one-time, long-term equity retention award following his appointment as Chairman of the Board alongside his CEO role.",
    sourceTag: "Equilar 100; Motley Fool; AFL-CIO PayWatch",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Charles_Scharf",
  },
  {
    rank: 9,
    name: "Satya Nadella",
    earnings: "$96.4M",
    category: "Enterprise Software & AI",
    revenueSources: "Salary, bonus, and multi-year performance stock units",
    blurb:
      "Nadella's package reflects Microsoft's continued push into AI infrastructure and Copilot, with the bulk of his pay tied to long-term performance stock awards rather than cash.",
    standoutFact:
      "As with nearly every CEO on this list, cash salary makes up only a small fraction of Nadella's total reported compensation — the rest comes from vesting equity awards.",
    sourceTag: "Forbes; AFL-CIO PayWatch",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Satya_Nadella",
  },
  {
    rank: 8,
    name: "Nikesh Arora",
    earnings: "$99.7M",
    category: "Cybersecurity",
    revenueSources: "Stock option awards tied to performance milestones",
    blurb:
      "The former Google and SoftBank executive has built one of the largest pay packages in cybersecurity since taking over Palo Alto Networks.",
    standoutFact:
      "Arora has consistently ranked among the highest-paid tech CEOs since 2018, with pay packages heavily weighted toward multi-year stock option grants.",
    sourceTag: "Motley Fool; Equilar 100",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Nikesh_Arora",
  },
  {
    rank: 7,
    name: "Sridhar Ramaswamy",
    earnings: "$101.3M",
    category: "Data Cloud",
    revenueSources: "Sign-on equity grant plus performance-based awards",
    blurb:
      "Ramaswamy, who joined Snowflake as CEO after founding Neeva and leading Google's ads business, received a substantial onboarding equity package typical of externally hired tech CEOs.",
    standoutFact:
      "Large sign-on grants like this are common when a company recruits an outside CEO — they're designed to replace unvested equity the executive left behind at their previous employer.",
    sourceTag: "AFL-CIO PayWatch",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Sridhar_Ramaswamy",
  },
  {
    rank: 6,
    name: "Jim Anderson",
    earnings: "$101.5M",
    category: "Photonics & Semiconductors",
    revenueSources: "Onboarding equity award",
    blurb:
      "Anderson's package at Coherent follows the same onboarding-grant pattern seen across the semiconductor sector, where competition for experienced executives is intense.",
    standoutFact:
      "Coherent's stock-heavy compensation structure mirrors the broader semiconductor industry trend of front-loading pay to attract leadership talent.",
    sourceTag: "Equilar 100",
  },
  {
    rank: 5,
    name: "David Solomon",
    earnings: "$118.8M",
    category: "Investment Banking",
    revenueSources: "Salary, cash bonus, and restricted stock units",
    blurb:
      "Solomon is the only banking executive on this list, reflecting Goldman Sachs' strong recent performance and its board's willingness to compete with tech-sector pay levels.",
    standoutFact:
      "Wall Street compensation is typically more cash-heavy than tech-sector pay, though equity still makes up the majority of Solomon's total package.",
    sourceTag: "Forbes; AFL-CIO PayWatch",
    wikipediaUrl: "https://en.wikipedia.org/wiki/David_M._Solomon",
  },
  {
    rank: 4,
    name: "Peter Gassner",
    earnings: "$172.4M",
    category: "Cloud Software",
    revenueSources: "Long-dated stock option awards",
    blurb:
      "Gassner, Veeva Systems' founder and CEO, has held one of the largest pay packages in enterprise software, reflecting the company's steady growth in life-sciences cloud software.",
    standoutFact:
      "As a founder-CEO, Gassner's compensation is more directly tied to long-term company performance than externally hired executives on this list.",
    sourceTag: "AFL-CIO PayWatch",
  },
  {
    rank: 3,
    name: "Hock E. Tan",
    earnings: "$205.3M",
    category: "Semiconductors",
    revenueSources: "Performance-based stock option awards",
    blurb:
      "Tan has led Broadcom through a string of major acquisitions and its expansion into AI chips and infrastructure software, with his pay package reflecting the company's aggressive growth targets.",
    standoutFact:
      "Broadcom's compensation structure ties the bulk of Tan's pay to specific market-cap and performance milestones rather than fixed annual grants.",
    sourceTag: "Forbes; Motley Fool",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Hock_Tan",
  },
  {
    rank: 2,
    name: "George Kurtz",
    earnings: "$247.6M",
    category: "Cybersecurity",
    revenueSources: "Stock option and performance award vesting",
    blurb:
      "CrowdStrike's co-founder and CEO has one of the largest pay packages in cybersecurity, with the bulk of his compensation vesting from prior stock-heavy grants.",
    standoutFact:
      "Kurtz previously served as CTO of McAfee before founding CrowdStrike, which has become one of the largest pure-play cybersecurity companies by market cap.",
    sourceTag: "Equilar 100",
    wikipediaUrl: "https://en.wikipedia.org/wiki/George_Kurtz",
  },
  {
    rank: 1,
    name: "Niraj Shah",
    earnings: "$280.8M",
    category: "E-Commerce",
    revenueSources: "Multi-year stock award vesting",
    blurb:
      "Wayfair's co-founder and CEO tops this year's disclosed-compensation ranking, largely driven by a long-dated stock award granted in prior years now vesting.",
    standoutFact:
      "Shah's total is nearly 3x the ninth-place figure on this list, driven by a single large multi-year equity grant reaching a vesting milestone this year rather than a one-time award.",
    sourceTag: "Motley Fool",
  },
];

const FAQ_ITEMS = [
  {
    question: "Why isn't Elon Musk on this list?",
    answer:
      "Musk's widely reported Tesla pay package — estimated by some trackers in the hundreds of billions of dollars — combines Tesla equity with unrelated SpaceX holdings, and SpaceX is a private company that doesn't file standard SEC executive compensation disclosures. Because it isn't measured the same way as the other entries here, we've excluded it from the ranked chart to keep the comparison consistent. His situation is genuinely exceptional and worth understanding on its own — see the callout below.",
  },
  {
    question: "Why is cash salary such a small part of CEO pay?",
    answer:
      "For nearly every executive on this list, cash salary makes up a small fraction of total reported compensation — often under 5%. The rest comes from stock options, performance stock units, and other equity awards, which are reported at their grant-date or vesting-date value in company proxy filings.",
  },
  {
    question: "How is executive compensation measured?",
    answer:
      "U.S. public companies disclose executive pay annually through SEC Form DEF 14A proxy statements. Figures here reflect total reported compensation from these filings and related tracking by organizations like Equilar and AFL-CIO PayWatch, not necessarily cash actually received in a given year — much of it is unvested equity valued at grant.",
  },
  {
    question: "Why do tech and semiconductor CEOs dominate this list?",
    answer:
      "Sectors with large stock-price growth and intense competition for executive talent — particularly cloud software, semiconductors, and cybersecurity — tend to offer the largest equity-based packages, both to retain existing leaders and to attract external hires with competitive sign-on grants.",
  },
];

const RELATED_LINKS = [
  { title: "The 10 Highest-Paid Athletes in 2026", href: "/rankings/highest-paid-athletes-2026" },
  { title: "The 10 Highest-Earning Creators in 2026", href: "/rankings/highest-earning-creators-2026" },
  { title: "World's Most Valuable Companies", href: "/rankings/most-valuable-companies" },
  { title: "Biggest AI Companies", href: "/rankings/biggest-ai-companies" },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HighestPaidCEOs2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <ArticleLayout
          eyebrow="Money"
          title="The 10 Highest-Paid CEOs in 2026"
          dek="Disclosed executive compensation, what drives nine-figure pay packages, and why one name isn't on this ranked list."
          publishedDate="September 8, 2026"
          lastUpdated="September 8, 2026"
          dataPeriod="Most recent annual proxy disclosures as of 2026"
        >
          <ArticleSection title="Quick Answer">
            <p>
              Wayfair co-founder and CEO Niraj Shah leads this year&apos;s
              ranking of disclosed executive compensation at $280.8 million,
              driven by a multi-year stock award reaching a vesting milestone.
              The top 5 executives on this list earned a combined $1.02
              billion — 2.08x the bottom 5 combined. Elon Musk is
              deliberately excluded from this ranked list; see below for why.
            </p>
          </ArticleSection>

          <ArticleSection>
            <p>
              CEO compensation at America&apos;s largest public companies —
              reported annually on SEC Form DEF 14A proxy filings — is
              overwhelmingly driven by equity, not salary. Direct cash pay
              rarely exceeds $2 million annually for any executive on this
              list — the rest of their reported compensation comes from stock
              options, performance stock units, and other long-dated equity
              awards, most of it valued at grant rather than cash actually
              received that year. Onboarding packages for externally hired
              CEOs, and major vesting milestones for founder-CEOs, both show
              up as outsized single-year totals in company proxy filings.
            </p>
          </ArticleSection>

          <ArticleSection>
            <div className="bg-signal/[0.05] border border-signal/30 rounded-lg p-5 md:p-6">
              <p className="font-body text-xs font-bold text-signal uppercase tracking-wide mb-2">
                A note on Elon Musk
              </p>
              <p className="font-body text-sm text-ink/80 leading-relaxed">
                Some trackers report Musk&apos;s combined Tesla and SpaceX
                compensation at well over $100 billion — dwarfing every other
                executive package on record. We&apos;ve left him out of the
                ranked chart below because that figure blends Tesla equity
                (publicly disclosed via SEC filings, like every other entry
                here) with SpaceX holdings (a private company with no
                equivalent public disclosure), making it fundamentally
                different from — and not directly comparable to — the
                standard proxy-disclosed compensation the rest of this
                ranking is built on.
              </p>
            </div>
          </ArticleSection>

          <ArticleSection>
            <div className="bg-ink/[0.02] border border-stone-light rounded-lg p-5 md:p-8">
              <ChartHeader
                title="Disclosed Total Compensation — 2026 · USD millions"
                source="Equilar 100 / AFL-CIO PayWatch / Forbes"
              />
              <RankList items={CHART_ITEMS} linkable />
              <p className="font-body text-xs text-stone mt-4">
                Tap any name to jump to their full breakdown below.
              </p>
            </div>
          </ArticleSection>

          <ArticleSection title="Ranked #10 to #1">
            <div>
              {DETAILED_ENTRIES.map((entry) => (
                <RankEntry key={entry.rank} {...entry} />
              ))}
            </div>
          </ArticleSection>

          <ArticleSection title="What the numbers tell us">
            <KeyTakeaway
              stat="$1,024.9M"
              label="Combined pay of the top 5 CEOs"
              comparisonStat="$493.4M"
              comparisonLabel="Combined pay of the bottom 5"
              note="Cybersecurity and semiconductors each place two executives in this year's top 10, underscoring how much competition for leadership talent has driven up pay in both sectors. Every entry on this list is overwhelmingly equity-based — none rely on cash salary for more than a small fraction of total reported compensation."
            />
          </ArticleSection>

          <SourceNote
            dataPeriod="Most recent annual SEC proxy disclosures as of 2026"
            lastUpdated="September 8, 2026"
            sources="Equilar 100, AFL-CIO Executive Paywatch, Forbes executive compensation tracking, The Motley Fool"
            methodology="Figures reflect total reported compensation from company SEC Form DEF 14A proxy filings, as compiled and tracked by Equilar, AFL-CIO Executive Paywatch, Forbes, and The Motley Fool. Totals are dominated by equity awards (stock options and performance stock units) valued at grant or vesting, not cash actually received in a given year, and may vary slightly across tracking organizations depending on valuation methodology and reporting date. Elon Musk's Tesla/SpaceX compensation is excluded from the ranked chart for the methodology reasons explained above."
          />

          <ArticleSection title="Frequently Asked Questions">
            <FAQ items={FAQ_ITEMS} />
          </ArticleSection>

          <ArticleSection title="Related Rankings">
            <RelatedRankings links={RELATED_LINKS} />
          </ArticleSection>
        </ArticleLayout>
      </main>
      <SiteFooter />
    </>
  );
}
