import Link from "next/link";

type RelatedLink = {
  title: string;
  href: string;
};

export function RelatedRankings({ links }: { links: RelatedLink[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group border border-stone-light rounded-lg p-4 hover:border-ink transition-colors flex items-center justify-between gap-2"
        >
          <span className="font-body font-medium text-sm text-ink group-hover:text-signal transition-colors">
            {link.title}
          </span>
          <span className="font-display text-ink/40 group-hover:text-signal transition-colors shrink-0">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
