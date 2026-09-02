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

const LATEST_RANKINGS = [
  { title: "The 10 Highest-Earning Creators in 2026", href: "/rankings/highest-earning-creators-2026" },
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
          items={FEATURED_ITEMS}
          detailedEntries={DETAILED_ENTRIES}
        />
        <TrendingCategories />
        <LatestRankings rankings={LATEST_RANKINGS} />
      </main>
      <SiteFooter />
    </>
  );
}
