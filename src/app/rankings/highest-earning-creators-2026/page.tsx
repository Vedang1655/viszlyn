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

const CHART_ITEMS = [
  { rank: 1, name: "MrBeast", value: "$300M", raw: 300 },
  { rank: 2, name: "Dhar Mann", value: "$65M", raw: 65 },
  { rank: 3, name: "Steven Bartlett", value: "$52M", raw: 52 },
  { rank: 4, name: "Markiplier", value: "$38M", raw: 38 },
  { rank: 5, name: "Rhett & Link", value: "$37M", raw: 37 },
  { rank: 6, name: "Codie Sanchez", value: "$31M", raw: 31 },
  { rank: 7, name: "IShowSpeed", value: "$30M", raw: 30 },
  { rank: 8, name: "Mark Rober", value: "$30M", raw: 30 },
  { rank: 9, name: "Ms. Rachel", value: "$26M", raw: 26 },
  { rank: 10, name: "Jesser", value: "$25M", raw: 25 },
];

const DETAILED_ENTRIES = [
  {
    rank: 10,
    name: "Jesser",
    origin: "Born in Westlake Village, California, USA",
    earnings: "$25M",
    category: "Basketball and sports entertainment",
    revenueSources: "Ad revenue, brand deals, merchandise",
    blurb:
      "Jesse Riedel built a basketball-challenge and NBA-collaboration channel into a formal holding company, JesserCo, launched in April 2026 to unite his content business with his apparel brand.",
    standoutFact:
      "His streetwear label Bucketsquad crossed eight figures in annual revenue and now sells in Dick's Sporting Goods, alongside brand deals with Lowe's, Google, and Adidas.",
  },
  {
    rank: 9,
    name: "Ms. Rachel",
    origin: "Born in Biddeford, Maine, USA",
    earnings: "$26M",
    category: "Early childhood education",
    revenueSources: "Ad revenue, books, licensed products",
    blurb:
      "Rachel Griffin Accurso, a former teacher, turned research-backed \"parentese\" speech techniques into Songs for Littles, one of the biggest children's education brands on the internet.",
    standoutFact:
      "Her Netflix series became the platform's most-watched children's program at launch, and a 2024 toy line with Spin Master had the most successful presale in Walmart's history.",
  },
  {
    rank: 8,
    name: "Mark Rober",
    origin: "Born in Orange County, California, USA",
    earnings: "$30M",
    category: "Science and engineering",
    revenueSources: "Ad revenue, CrunchLabs, brand partnerships",
    blurb:
      "A former NASA JPL engineer, Rober built CrunchLabs, a STEM subscription-box company, rather than relying on ad revenue or brand deals alone.",
    standoutFact:
      "CrunchLabs hit over 100,000 paying subscribers within its first six months and now reports annual revenue in the $25–50 million range, largely independent of his YouTube ad income.",
  },
  {
    rank: 7,
    name: "IShowSpeed",
    origin: "Born in Cincinnati, Ohio, USA; also holds Ghanaian citizenship",
    earnings: "$30M",
    category: "Gaming, livestreams, travel and reaction content",
    revenueSources: "Ad revenue, sponsorships, merchandise and live content",
    blurb:
      "Darren Watkins Jr. turned unfiltered, high-energy livestreams into a global sponsorship magnet, including a first-of-its-kind creator performance at the World Cup 2026 closing ceremony.",
    standoutFact:
      "His year-long Expedia partnership as \"Official Travel Partner\" reportedly lifted destination search demand by up to 70% for the locations he streamed from.",
  },
  {
    rank: 6,
    name: "Codie Sanchez",
    origin: "Raised in Phoenix, Arizona, USA",
    earnings: "$31M",
    category: "Business and investing content",
    revenueSources: "Media, sponsorships and business ventures",
    blurb:
      "A former Wall Street investor, Sanchez built Contrarian Thinking around a contrarian thesis: that buying small, unglamorous \"boring businesses\" builds more real wealth than tech startups.",
    standoutFact:
      "She personally owns a portfolio of more than two dozen small businesses — laundromats, car washes, and service operations — and runs three separate companies including an acquisition marketplace, BizScout, which raised $5M in 2026.",
  },
  {
    rank: 5,
    name: "Rhett & Link",
    origin: "Both born and raised in North Carolina, USA",
    earnings: "$37M",
    category: "Comedy and entertainment",
    revenueSources:
      "Mythical Entertainment, advertising, merchandise and podcasts",
    blurb:
      "Rhett McLaughlin and Link Neal have run their daily talk show Good Mythical Morning for over a decade, building it into Mythical Entertainment, a full production studio with multiple channels and podcasts.",
    standoutFact:
      "In 2026, Good Mythical Morning struck a deal to stream on Netflix the same day episodes go live on YouTube, adding a major distribution channel after their show passed 3,000 episodes.",
  },
  {
    rank: 4,
    name: "Markiplier",
    origin: "Born in Honolulu, Hawaii, USA",
    earnings: "$38M",
    category: "Gaming and entertainment",
    revenueSources: "Ad revenue, merchandise and business ventures",
    blurb:
      "Mark Fischbach, long known for gaming commentary, self-financed and directed a horror film, Iron Lung, that became one of the most profitable movies of 2026 relative to its budget.",
    standoutFact:
      "Iron Lung cost roughly $3 million to make and earned over $50 million worldwide, a 15x-plus return that beat several major studio releases at the box office.",
  },
  {
    rank: 3,
    name: "Steven Bartlett",
    origin: "Born in Gaborone, Botswana; raised in Plymouth, England",
    earnings: "$52M",
    category: "Business, podcasts and entrepreneurship",
    revenueSources: "Podcast/media business, sponsorships and other ventures",
    blurb:
      "Bartlett built The Diary of a CEO into one of the world's most popular podcasts, then used its platform to launch or back multiple companies rather than relying on podcast ad revenue alone.",
    standoutFact:
      "His venture steven.com closed an eight-figure funding round in October 2025 at a $425 million valuation, with Bartlett retaining over 90% ownership.",
  },
  {
    rank: 2,
    name: "Dhar Mann",
    origin: "Born in the United States, to Indian immigrant parents",
    earnings: "$65M",
    category: "Short-form scripted stories",
    revenueSources: "Advertising, production business and brand partnerships",
    blurb:
      "Mann built Dhar Mann Studios around short, moral-lesson scripted videos, then expanded the format into television through deals with Samsung and Fox Entertainment.",
    standoutFact:
      "In January 2026, Fox Entertainment partnered with Dhar Mann Studios to produce 40 vertical drama titles, marking one of the first major traditional-studio deals built around a creator's short-form format.",
  },
  {
    rank: 1,
    name: "MrBeast",
    origin: "Born in Wichita, Kansas; raised in Greenville, North Carolina, USA",
    earnings: "$300M",
    category: "Large-scale challenges and entertainment",
    revenueSources:
      "Advertising, Feastables, Beast Industries, merchandise and licensing",
    blurb:
      "MrBeast's earnings are more than four-and-a-half times Dhar Mann's, the next-highest individual creator, built on a media holding company, Beast Industries, that treats his YouTube channel as a production line feeding multiple businesses.",
    standoutFact:
      "His chocolate brand Feastables generated about $250 million in revenue in 2024, out-earning his entire YouTube and Amazon media operation, which lost money on production costs that same year.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Who is the highest-earning creator in 2026?",
    answer:
      "MrBeast tops the list with an estimated $300 million, driven by advertising, his snack brand Feastables, Beast Industries, merchandise, and licensing deals.",
  },
  {
    question: "Is this ranking YouTube-only?",
    answer:
      "No. Forbes' 2026 Top Creators ranking covers creators across multiple platforms, including YouTube, TikTok, Instagram, podcasts, and other media businesses.",
  },
  {
    question: "How are these earnings estimated?",
    answer:
      "Forbes estimates creator earnings using publicly available information and reporting on revenue from advertising, sponsorships, products, businesses, licensing, and other ventures during the March 2025–March 2026 period.",
  },
  {
    question: "Why isn't subscriber count included?",
    answer:
      "Subscriber counts are not directly comparable across platforms, and audience sizes can change over time. Since this ranking covers multiple platforms, Viszlyn focuses on estimated earnings rather than presenting a misleading YouTube-only subscriber comparison.",
  },
];

const RELATED_LINKS = [
  { title: "World's Most Valuable Companies", href: "/rankings/most-valuable-companies" },
  { title: "Highest-Paid Athletes", href: "/rankings/highest-paid-athletes" },
  { title: "Richest People in the World", href: "/rankings/richest-people" },
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

export default function HighestEarningCreators2026() {
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
          title="The 10 Highest-Earning Creators in 2026"
          dek="Estimated earnings, audience size, and the businesses behind today's biggest creators."
          publishedDate="August 29, 2026"
          lastUpdated="August 31, 2026"
          dataPeriod="March 2025–March 2026"
        >
          <ArticleSection title="Quick Answer">
            <p>
              MrBeast is the highest-earning creator in 2026 with an
              estimated $300 million, about 1.6× the combined earnings of
              the next four creators on this list ($192 million: Dhar Mann,
              Steven Bartlett, Markiplier, and Rhett &amp; Link).
            </p>
          </ArticleSection>

          <ArticleSection>
            <p>
              Creator income has grown into a major media business. The
              biggest creators increasingly earn money from a mix of platform
              revenue, sponsorships, products, businesses, and other
              ventures. This ranking uses Forbes&apos; 2026 Top Creators
              estimates for the period March 2025–March 2026. The Forbes list
              covers creators across platforms, so this is a creator ranking
              rather than a YouTube-only ranking.
            </p>
          </ArticleSection>

          <ArticleSection>
            <div className="bg-ink/[0.02] border border-stone-light rounded-lg p-5 md:p-8">
              <ChartHeader
                title="Estimated Creator Earnings — 2026 · USD millions"
                source="Forbes"
              />
              <RankList items={CHART_ITEMS} linkable />
              <p className="font-body text-xs text-stone mt-4">
                Tap any creator to jump to their full breakdown below.
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
              stat="$300M"
              label="MrBeast's estimated earnings alone"
              comparisonStat="$334M"
              comparisonLabel="Combined earnings of the other 9 creators"
              note="Even at $300 million, MrBeast's earnings are slightly less than the combined $334 million made by the other nine creators on this list — a sign of how many separate, high-earning creator businesses now exist beyond any single top figure. Creator income increasingly comes from a mix of media companies, products, sponsorships, and podcasts, not ad revenue alone."
            />
          </ArticleSection>

          <SourceNote
            dataPeriod="March 2025–March 2026"
            lastUpdated="August 31, 2026"
            sources="Forbes, Top Creators 2026; additional reporting from Fortune, Variety, The Hollywood Reporter, Digiday, and company sources"
            methodology="Primary source: Forbes, Top Creators 2026. Visual Capitalist also publishes a visualization of the Forbes ranking. Forbes' creator ranking covers multiple platforms and uses estimated annual earnings rather than publicly reported creator income. Audience figures can vary by platform and date, so this article avoids presenting cross-platform follower totals as YouTube subscriber counts. Prepared for Viszlyn.io."
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
