import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RankList } from "@/components/RankBar";
import {
  ArticleLayout,
  ArticleSection,
  SourceNote,
} from "@/components/ArticleLayout";
import { RankEntry } from "@/components/RankEntry";

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
    earnings: "$25M",
    category: "Basketball and sports entertainment",
    revenueSources: "Ad revenue, brand deals, merchandise",
  },
  {
    rank: 9,
    name: "Ms. Rachel",
    earnings: "$26M",
    category: "Early childhood education",
    revenueSources: "Ad revenue, books, licensed products",
  },
  {
    rank: 8,
    name: "Mark Rober",
    earnings: "$30M",
    category: "Science and engineering",
    revenueSources: "Ad revenue, CrunchLabs, brand partnerships",
  },
  {
    rank: 7,
    name: "IShowSpeed",
    earnings: "$30M",
    category: "Gaming, livestreams, travel and reaction content",
    revenueSources: "Ad revenue, sponsorships, merchandise and live content",
  },
  {
    rank: 6,
    name: "Codie Sanchez",
    earnings: "$31M",
    category: "Business and investing content",
    revenueSources: "Media, sponsorships and business ventures",
  },
  {
    rank: 5,
    name: "Rhett & Link",
    earnings: "$37M",
    category: "Comedy and entertainment",
    revenueSources:
      "Mythical Entertainment, advertising, merchandise and podcasts",
  },
  {
    rank: 4,
    name: "Markiplier",
    earnings: "$38M",
    category: "Gaming and entertainment",
    revenueSources: "Ad revenue, merchandise and business ventures",
  },
  {
    rank: 3,
    name: "Steven Bartlett",
    earnings: "$52M",
    category: "Business, podcasts and entrepreneurship",
    revenueSources: "Podcast/media business, sponsorships and other ventures",
  },
  {
    rank: 2,
    name: "Dhar Mann",
    earnings: "$65M",
    category: "Short-form scripted stories",
    revenueSources: "Advertising, production business and brand partnerships",
  },
  {
    rank: 1,
    name: "MrBeast",
    earnings: "$300M",
    category: "Large-scale challenges and entertainment",
    revenueSources:
      "Advertising, Feastables, Beast Industries, merchandise and licensing",
  },
];

export default function HighestEarningCreators2026() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ArticleLayout
          eyebrow="Money"
          title="The 10 Highest-Earning Creators in 2026"
          dek="Estimated earnings, audience size, and the businesses behind today's biggest creators."
          publishedDate="August 29, 2026"
          dataPeriod="March 2025–March 2026"
        >
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
              <RankList items={CHART_ITEMS} />
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
            <p>
              MrBeast&apos;s estimated $300 million is more than the combined
              $296 million earned by the other nine creators in this top 10.
              The ranking also shows how creator businesses increasingly
              extend beyond a single platform: media companies, products,
              sponsorships, podcasts, and other ventures can all contribute to
              creator income.
            </p>
          </ArticleSection>

          <SourceNote>
            Primary source: Forbes, Top Creators 2026. Visual Capitalist also
            publishes a visualization of the Forbes ranking. Forbes&apos;
            creator ranking covers multiple platforms and uses estimated
            annual earnings rather than publicly reported creator income.
            Audience figures can vary by platform and date, so this article
            avoids presenting cross-platform follower totals as YouTube
            subscriber counts. Prepared for Viszlyn.io.
          </SourceNote>
        </ArticleLayout>
      </main>
      <SiteFooter />
    </>
  );
}
