import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FeaturedStory } from "@/components/FeaturedStory";
import { TrendingCategories } from "@/components/TrendingCategories";
import { LatestRankings } from "@/components/LatestRankings";

const FEATURED_ITEMS = [
  { rank: 1, name: "MrBeast", value: "$300M", raw: 300 },
  { rank: 2, name: "Dhar Mann", value: "$65M", raw: 65 },
  { rank: 3, name: "Steven Bartlett", value: "$52M", raw: 52 },
  { rank: 4, name: "Markiplier", value: "$38M", raw: 38 },
  { rank: 5, name: "Rhett & Link", value: "$37M", raw: 37 },
];

const LATEST_RANKINGS = [
  { title: "The 10 Highest-Earning Creators in 2026", href: "/rankings/highest-earning-youtube-creators-2026" },
  { title: "World's Most Valuable Companies", href: "/rankings/most-valuable-companies" },
  { title: "Highest-Paid Athletes", href: "/rankings/highest-paid-athletes" },
  { title: "World's Largest Cities", href: "/rankings/largest-cities" },
  { title: "Most Visited Countries", href: "/rankings/most-visited-countries" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FeaturedStory
          eyebrow="Featured Data Story"
          title="The 10 Highest-Earning Creators in 2026"
          href="/rankings/highest-earning-youtube-creators-2026"
          items={FEATURED_ITEMS}
        />
        <TrendingCategories />
        <LatestRankings rankings={LATEST_RANKINGS} />
      </main>
      <SiteFooter />
    </>
  );
}
