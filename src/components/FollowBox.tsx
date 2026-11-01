import { SOCIAL_LINKS } from "@/lib/site";

/** End-of-article prompt to follow Viszlyn. Inline only: no pop-up, nothing blocks the article. */
export function FollowBox() {
  return (
    <aside
      aria-label="Follow Viszlyn"
      className="bg-ink text-paper rounded-xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      <div>
        <p className="font-display font-semibold text-lg leading-snug">New rankings every week</p>
        <p className="font-body text-sm text-paper/70 mt-1">
          Follow Viszlyn for the next one, as a short video.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-semibold rounded-full border border-paper/30 px-4 py-2 hover:border-signal hover:text-signal transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
