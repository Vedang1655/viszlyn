import Link from "next/link";

// Evergreen rankings that already earn search impressions, linked from the homepage.
const CATEGORIES = [
  { label: "Highest-Earning Creators", href: "/rankings/highest-earning-creators-2026", tag: "MONEY" },
  { label: "Most Valuable AI Companies", href: "/rankings/most-valuable-ai-companies-2026", tag: "TECH" },
  { label: "India's Highest-Paid CEOs", href: "/rankings/india-highest-paid-ceos-2026", tag: "MONEY" },
  { label: "Largest Economies in the World", href: "/rankings/largest-economies-world-2026", tag: "WORLD" },
  { label: "Fastest-Growing Economies", href: "/rankings/fastest-growing-economies-2026", tag: "WORLD" },
  { label: "Most Valuable Companies", href: "/rankings/worlds-most-valuable-companies-2026", tag: "MONEY" },
];

export function TrendingCategories() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-10">
      <h2 className="font-display font-semibold text-sm tracking-widest text-stone uppercase mb-5">
        Popular Rankings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group border border-stone-light rounded-lg p-6 hover:border-ink transition-colors"
          >
            <span className="font-data text-xs text-stone tracking-wide">
              {cat.tag}
            </span>
            <p className="font-display font-semibold text-lg text-ink mt-2 group-hover:text-signal transition-colors">
              {cat.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
