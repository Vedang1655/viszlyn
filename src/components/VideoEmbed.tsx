import type { ArticleVideo } from "@/data/rankings/types";

/** Responsive, privacy-enhanced YouTube embed (no cookies until the viewer presses play). */
export function VideoEmbed({ video }: { video: ArticleVideo }) {
  return (
    <figure>
      <div className="relative w-full overflow-hidden rounded-lg border border-stone-light bg-ink aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <figcaption className="font-body text-xs text-stone mt-2">
        Watch on{" "}
        <a
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          className="underline hover:text-signal"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </figcaption>
    </figure>
  );
}
