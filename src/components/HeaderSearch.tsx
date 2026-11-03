"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Entry = { title: string; href: string; eyebrow: string; dek: string; names: string };

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Search panel under the header. Loads a small static index on first open and filters it as you type. */
export function HeaderSearch({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<Entry[] | null>(null);
  const [failed, setFailed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
    fetch("/search-index.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: Entry[]) => setIndex(d))
      .catch(() => setFailed(true));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    if (!index) return [];
    const terms = norm(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];
    return index
      .map((e) => {
        const title = norm(e.title);
        const hay = `${title} ${norm(e.eyebrow)} ${norm(e.dek)} ${norm(e.names)}`;
        if (!terms.every((t) => hay.includes(t))) return null;
        const score = terms.reduce((s, t) => s + (title.includes(t) ? 2 : 1), 0);
        return { e, score };
      })
      .filter((x): x is { e: Entry; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((x) => x.e);
  }, [index, query]);

  return (
    <div className="border-t border-stone-light bg-paper">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
        <form
          role="search"
          onSubmit={(ev) => {
            ev.preventDefault();
            if (results[0]) {
              router.push(results[0].href);
              onClose();
            }
          }}
        >
          <label htmlFor="site-search" className="sr-only">
            Search rankings
          </label>
          <input
            id="site-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
            placeholder="Search rankings, e.g. billionaires, GDP, AI"
            autoComplete="off"
            className="w-full font-body text-base text-ink bg-transparent border border-stone-light rounded-lg px-4 py-3 focus:outline-none focus:border-signal"
          />
        </form>

        {query.trim() !== "" && (
          <ul className="mt-3 flex flex-col">
            {failed && (
              <li className="font-body text-sm text-stone py-2">
                Search isn&apos;t available right now. Browse all{" "}
                <Link href="/rankings" onClick={onClose} className="text-signal underline">
                  rankings
                </Link>
                .
              </li>
            )}
            {!failed && index && results.length === 0 && (
              <li className="font-body text-sm text-stone py-2">No rankings match &ldquo;{query}&rdquo;.</li>
            )}
            {results.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  onClick={onClose}
                  className="group flex flex-col py-2.5 border-b border-stone-light/60 last:border-0"
                >
                  <span className="font-body text-[10px] font-semibold tracking-widest text-signal uppercase">
                    {r.eyebrow}
                  </span>
                  <span className="font-body text-sm font-medium text-ink group-hover:text-signal">
                    {r.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
