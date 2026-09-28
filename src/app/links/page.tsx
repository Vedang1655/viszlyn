import type { Metadata } from "next";
import Link from "next/link";
import { ALL_RANKING_ARTICLES } from "@/data/rankings";

export const metadata: Metadata = {
  title: "Links | Viszlyn",
  description: "All Viszlyn articles and rankings in one place.",
  robots: { index: false, follow: true },
};

const ARTICLES = ALL_RANKING_ARTICLES.map((article) => ({
  title: article.title,
  href: `/rankings/${article.slug}`,
}));

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
