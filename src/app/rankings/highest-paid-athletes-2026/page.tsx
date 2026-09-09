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
  title: "The 10 Highest-Paid Athletes in 2026 | Viszlyn",
  description:
    "Cristiano Ronaldo leads with an estimated $300M. See the full ranking of the 10 highest-paid athletes in 2026, their earnings breakdowns, and sources.",
  alternates: {
    canonical: "https://viszlyn.io/rankings/highest-paid-athletes-2026",
  },
  openGraph: {
    title: "The 10 Highest-Paid Athletes in 2026",
    description:
      "Cristiano Ronaldo leads with an estimated $300M. See the full ranking, earnings breakdowns, and what the numbers reveal.",
    url: "https://viszlyn.io/rankings/highest-paid-athletes-2026",
    siteName: "Viszlyn",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 10 Highest-Paid Athletes in 2026",
    description:
      "Cristiano Ronaldo leads with an estimated $300M. See the full ranking and earnings breakdowns.",
  },
};

const CHART_ITEMS = [
  { rank: 1, name: "Cristiano Ronaldo", value: "$300M", raw: 300 },
  { rank: 2, name: "Canelo Álvarez", value: "$170M", raw: 170 },
  { rank: 3, name: "Lionel Messi", value: "$140M", raw: 140 },
  { rank: 4, name: "LeBron James", value: "$137.8M", raw: 137.8 },
  { rank: 5, name: "Shohei Ohtani", value: "$127.6M", raw: 127.6 },
  { rank: 6, name: "Stephen Curry", value: "$124.7M", raw: 124.7 },
  { rank: 7, name: "Jon Rahm", value: "$107M", raw: 107 },
  { rank: 8, name: "Karim Benzema", value: "$104M", raw: 104 },
  { rank: 9, name: "Kevin Durant", value: "$103.8M", raw: 103.8 },
  { rank: 10, name: "Lewis Hamilton", value: "$100M", raw: 100 },
];

const DETAILED_ENTRIES = [
  {
    rank: 10,
    name: "Lewis Hamilton",
    earnings: "$100M",
    category: "Formula 1",
    origin: "United Kingdom",
    revenueSources: "$70M on-track, $30M off-track",
    blurb:
      "The seven-time world champion drives for Ferrari, combining his team salary with a wide portfolio of personal endorsement deals.",
    standoutFact:
      "Hamilton became the first F1 driver to earn $100 million in a single year, driven by his Ferrari salary plus endorsement deals.",
    sourceTag: "Forbes",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Lewis_Hamilton",
  },
  {
    rank: 9,
    name: "Kevin Durant",
    earnings: "$103.8M",
    category: "Basketball",
    origin: "United States",
    revenueSources: "$54.8M on-court, $49M off-court",
    blurb:
      "Durant's off-court income is nearly even with his playing salary, split across brand partnerships and his own media and investment ventures.",
    standoutFact:
      "Boosted by partnerships with CeraVe, Dick's Sporting Goods, and FanDuel, alongside his media company Boardroom and his investment firm 35V (Thirty Five Ventures).",
    sourceTag: "Forbes",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Kevin_Durant",
  },
  {
    rank: 8,
    name: "Karim Benzema",
    earnings: "$104M",
    category: "Soccer",
    origin: "France",
    revenueSources: "Saudi Pro League salary",
    blurb:
      "Like Ronaldo, Benzema's move to Saudi Arabia's top league has come with a nine-figure salary far above typical European club pay.",
    standoutFact:
      "Benzema is one of two Saudi Pro League players in this year's top 10, alongside Ronaldo.",
    sourceTag: "Forbes",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Karim_Benzema",
  },
  {
    rank: 7,
    name: "Jon Rahm",
    earnings: "$107M",
    category: "Golf",
    origin: "Spain",
    revenueSources: "LIV Golf guarantee, tournament winnings",
    blurb:
      "Rahm's move to LIV Golf came with one of the largest guaranteed contracts in golf history, on top of his tournament earnings.",
    standoutFact:
      "Rahm's LIV Golf move came with a reportedly $300 million guarantee; he also won LIV's $18 million season-long individual title bonus in 2025.",
    sourceTag: "Forbes",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Jon_Rahm",
  },
  {
    rank: 6,
    name: "Stephen Curry",
    earnings: "$124.7M",
    category: "Basketball",
    origin: "United States",
    revenueSources: "NBA salary, Li-Ning, Chase, Google, Rakuten",
    blurb:
      "Curry Brand split from longtime partner Under Armour in November 2025, with Curry retaining full ownership of the brand.",
    standoutFact:
      "He announced a new 10-year, $400M+ partnership with Chinese sportswear giant Li-Ning in 2026, alongside personal endorsement deals with Chase, Google, and Rakuten.",
    sourceTag: "Forbes",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Stephen_Curry",
  },
  {
    rank: 5,
    name: "Shohei Ohtani",
    earnings: "$127.6M",
    category: "Baseball",
    origin: "Japan",
    revenueSources: "Endorsements, appearances, licensing, memorabilia",
    blurb:
      "Most of Ohtani's historic 10-year, $700 million Dodgers contract is deferred until 2034, leaving him with just $2.6M in on-field earnings during the period.",
    standoutFact:
      "His remaining $125M in earnings comes from a mix of endorsements, appearances, licensing, memorabilia, and other business ventures.",
    sourceTag: "Forbes",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Shohei_Ohtani",
  },
  {
    rank: 4,
    name: "LeBron James",
    earnings: "$137.8M",
    category: "Basketball",
    origin: "United States",
    revenueSources: "$85M off-court income",
    blurb:
      "$85M of James's earnings came from off-court income, making business ventures and endorsements a larger source of income than his playing salary.",
    standoutFact:
      "Forbes previously identified James as the first active NBA player to become a billionaire.",
    sourceTag: "Forbes",
    wikipediaUrl: "https://en.wikipedia.org/wiki/LeBron_James",
  },
  {
    rank: 3,
    name: "Lionel Messi",
    earnings: "$140M",
    category: "Soccer",
    origin: "Argentina",
    revenueSources: "50/50 on-field/off-field split",
    blurb:
      "Now with Inter Miami, Messi's earnings are split evenly between his playing contract and a wide portfolio of endorsement and business ventures.",
    standoutFact:
      "This highlights the continued strength of his commercial earnings alongside his MLS income.",
    sourceTag: "Forbes",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Lionel_Messi",
  },
  {
    rank: 2,
    name: "Canelo Álvarez",
    earnings: "$170M",
    category: "Boxing",
    origin: "Mexico",
    revenueSources: "Riyadh Season fight deal",
    blurb:
      "Álvarez's earnings jumped this year off a massive payday from his fight against Terence Crawford.",
    standoutFact:
      "Part of a four-fight deal with Saudi-backed Riyadh Season reportedly worth as much as $400 million.",
    sourceTag: "Forbes",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Canelo_%C3%81lvarez",
  },
  {
    rank: 1,
    name: "Cristiano Ronaldo",
    earnings: "$300M",
    category: "Soccer",
    origin: "Portugal",
    revenueSources: "$235M on-field, $65M off-field",
    blurb:
      "Playing for Saudi Arabia's Al-Nassr, Ronaldo's on-field income has more than tripled since leaving the English Premier League in 2023.",
    standoutFact:
      "This year's $300M ties Floyd Mayweather Jr.'s 2015 figure for the largest single-year total Forbes has recorded for an active athlete, before inflation adjustment.",
    sourceTag: "Forbes; Robb Report",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
  },
];

const FAQ_ITEMS = [
  {
    question: "Who is the highest-paid athlete in 2026?",
    answer:
      "Cristiano Ronaldo is the highest-paid athlete in the world for 2026, earning an estimated $300 million — his highest total yet and his fourth consecutive year at No. 1.",
  },
  {
    question: "How are these earnings estimated?",
    answer:
      "Forbes' 2026 ranking tracks pretax income from May 1, 2025 through May 1, 2026, covering salaries, prize money, bonuses, and off-field earnings from endorsements, appearances, and business ventures. Figures are estimates based on publicly available information and reporting, not audited or self-reported exact numbers.",
  },
  {
    question: "Why do golf and boxing pay so much now?",
    answer:
      "Saudi Arabia's sports investment, through LIV Golf and Riyadh Season boxing events, has introduced some of the largest guaranteed contracts and single-fight paydays in each sport's history, reshaping pay at the very top.",
  },
  {
    question: "Are there any women in this ranking?",
    answer:
      "No female athlete appears in Forbes' broader top 50 highest-paid athletes for the third consecutive year.",
  },
];

const RELATED_LINKS = [
  { title: "The 10 Highest-Paid CEOs in 2026", href: "/rankings/highest-paid-ceos-2026" },
  { title: "The 10 Highest-Earning Creators in 2026", href: "/rankings/highest-earning-creators-2026" },
  { title: "World's Most Valuable Companies", href: "/rankings/most-valuable-companies" },
  { title: "Richest People in the World", href: "/rankings/richest-people" },
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

export default function HighestPaidAthletes2026() {
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
          title="The 10 Highest-Paid Athletes in 2026"
          dek="Estimated earnings, sponsorships, and the deals shaping pay across sports in 2026."
          publishedDate="September 3, 2026"
          lastUpdated="September 5, 2026"
          dataPeriod="May 1, 2025 – May 1, 2026"
        >
          <ArticleSection title="Quick Answer">
            <p>
              Cristiano Ronaldo is the highest-paid athlete in the world for
              2026, earning an estimated $300 million — his highest total yet
              and his fourth consecutive year at No. 1. The top four alone
              (Ronaldo, Canelo Álvarez, Messi, and LeBron James) earned nearly
              $748 million combined, more than the remaining six spots in the
              top 10 combined.
            </p>
          </ArticleSection>

          <ArticleSection>
            <p>
              Athlete earnings have never been more concentrated at the very
              top, or more shaped by forces outside the field of play. Saudi
              Arabia&apos;s sports investment continues to reshape pay in
              boxing, golf, and soccer, while off-field endorsements now rival
              or exceed playing salaries for many of the world&apos;s top
              earners. Forbes&apos; 2026 ranking tracks pretax income from May
              1, 2025 through May 1, 2026, covering salaries, prize money,
              bonuses, and off-field earnings from endorsements, appearances,
              and business ventures.
            </p>
          </ArticleSection>

          <ArticleSection>
            <div className="bg-ink/[0.02] border border-stone-light rounded-lg p-5 md:p-8">
              <ChartHeader
                title="Estimated Athlete Earnings — 2026 · USD millions"
                source="Forbes"
              />
              <RankList items={CHART_ITEMS} linkable />
              <p className="font-body text-xs text-stone mt-4">
                Tap any athlete to jump to their full breakdown below.
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
              stat="$747.8M"
              label="Combined earnings of the top 4 athletes"
              comparisonStat="$667.1M"
              comparisonLabel="Combined earnings of the remaining 6"
              note="Basketball and soccer are tied for the most top-10 representation with three athletes each. The average age of this year's top 10 is 37 — the oldest in the history of the Forbes ranking, underscoring the growing importance of brand value and off-field earnings alongside athletic performance."
            />
          </ArticleSection>

          <SourceNote
            dataPeriod="May 1, 2025 – May 1, 2026"
            lastUpdated="September 5, 2026"
            sources="Forbes, The World's 10 Highest-Paid Athletes 2026"
            methodology="Primary source: Forbes, The World's 10 Highest-Paid Athletes 2026 (published May 22, 2026), tracking pretax income from May 1, 2025 to May 1, 2026. The ranking and earnings figures were cross-checked against Forbes' 2026 list and additional reporting from major sports and business publications. Figures are Forbes' estimates based on publicly available information, contracts, and reporting — not audited or self-reported exact numbers, and may vary from other published sources."
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
