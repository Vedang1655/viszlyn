import Link from "next/link";

const CATEGORIES = [
  { label: "Highest-Paid Jobs", href: "/category/money", tag: "MONEY" },
  { label: "Most Expensive Cities", href: "/category/world", tag: "WORLD" },
  { label: "Biggest AI Companies", href: "/category/tech", tag: "TECH" },
];

export function TrendingCategories() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-10">
      <h2 className="font-display font-semibold text-sm tracking-widest text-stone uppercase mb-5">
        Trending Data
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
