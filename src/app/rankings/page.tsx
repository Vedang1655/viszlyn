import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LatestRankings } from "@/components/LatestRankings";

const ALL_RANKINGS = [
  { title: "The 10 Highest-Earning Creators in 2026", href: "/rankings/highest-earning-creators-2026" },
  { title: "World's Most Valuable Companies", href: "/rankings/most-valuable-companies" },
  { title: "Highest-Paid Athletes", href: "/rankings/highest-paid-athletes" },
  { title: "World's Largest Cities", href: "/rankings/largest-cities" },
  { title: "Most Visited Countries", href: "/rankings/most-visited-countries" },
];

export default function RankingsIndex() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-4">
          <span className="font-body text-xs font-semibold tracking-widest text-signal uppercase">
            All Rankings
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-ink mt-2 mb-2 leading-[1.1]">
            Every Ranking on Viszlyn
          </h1>
          <p className="font-body text-stone max-w-2xl">
            Browse all published data stories and rankings. New rankings are
            added regularly.
          </p>
        </section>
        <LatestRankings rankings={ALL_RANKINGS} />
      </main>
      <SiteFooter />
    </>
  );
}
