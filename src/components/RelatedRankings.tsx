import Link from "next/link";

type RelatedLink = {
  title: string;
  href: string;
  comingSoon?: boolean;
};

export function RelatedRankings({ links }: { links: RelatedLink[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {links.map((link) =>
        link.comingSoon ? (
          <div
            key={link.href}
            className="border border-stone-light rounded-lg p-4 flex items-center justify-between gap-2 opacity-50 cursor-default"
          >
            <span className="font-body font-medium text-sm text-ink">{link.title}</span>
            <span className="font-body text-[10px] font-semibold tracking-wide text-stone uppercase border border-stone-light rounded-full px-2 py-0.5 shrink-0">
              Coming Soon
            </span>
          </div>
        ) : (
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
        )
      )}
    </div>
  );
}
