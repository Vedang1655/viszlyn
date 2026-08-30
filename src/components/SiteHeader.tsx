import Link from "next/link";

const NAV_LINKS = [
  { label: "Rankings", href: "/rankings" },
  { label: "Money", href: "/category/money" },
  { label: "Tech", href: "/category/tech" },
  { label: "World", href: "/category/world" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-stone-light bg-paper/95 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display font-bold text-xl tracking-tight text-ink">
            VISZLYN
          </span>
          <span className="hidden sm:inline font-body text-xs text-stone">
            Data. Visualized.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-ink/80 hover:text-signal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Search"
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-ink/5 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </header>
  );
}
