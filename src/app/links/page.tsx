import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Links | Viszlyn",
  description: "All Viszlyn articles and rankings in one place.",
};

const ARTICLES = [
  {
    title: "The 10 Highest-Paid CEOs in 2026",
    href: "/rankings/highest-paid-ceos-2026",
  },
  {
    title: "The 10 Highest-Paid Athletes in 2026",
    href: "/rankings/highest-paid-athletes-2026",
  },
  {
    title: "The 10 Highest-Earning Creators in 2026",
    href: "/rankings/highest-earning-creators-2026",
  },
  // Add a new entry here each time you publish a new article —
  // most recent article should go at the top of this list.
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-paper flex flex-col items-center px-5 py-14">
      <div className="w-full max-w-md flex flex-col items-center">
        <span className="font-display font-bold text-2xl tracking-tight text-ink mb-1">
          VISZLYN
        </span>
        <span className="font-body text-sm text-stone mb-10">
          Data. Visualized.
        </span>

        <div className="w-full flex flex-col gap-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="w-full border border-stone-light rounded-lg px-5 py-4 text-center font-body font-medium text-ink hover:border-signal hover:text-signal transition-colors"
            >
              {article.title}
            </Link>
          ))}
        </div>

        <a
          href="https://www.instagram.com/viszlyn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border border-stone-light rounded-lg px-5 py-4 text-center font-body font-medium text-ink hover:border-signal hover:text-signal transition-colors mt-3"
        >
          Follow @viszlyn on Instagram
        </a>

        <Link
          href="/"
          className="mt-10 font-body text-sm text-stone hover:text-ink transition-colors"
        >
          viszlyn.io →
        </Link>
      </div>
    </main>
  );
}
