import { ALL_RANKING_ARTICLES } from "@/data/rankings";
import { AUTHOR } from "@/lib/site";

// RSS feed of all rankings, newest first. Linked from <head> so Chrome can
// offer a "Follow" button and feed readers can subscribe.
export const dynamic = "force-static";

const BASE = "https://www.viszlyn.io";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function rfc822(date: string): string | undefined {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? undefined : d.toUTCString();
}

export function GET() {
  const items = [...ALL_RANKING_ARTICLES]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .map((a) => {
      const url = `${BASE}/rankings/${a.slug}`;
      const img = a.heroImage ? `${BASE}${a.heroImage.ogSrc}` : `${url}/opengraph-image`;
      const pub = rfc822(a.publishedDate);
      return [
        "<item>",
        `<title>${esc(a.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<description>${esc(a.metaDescription)}</description>`,
        `<category>${esc(a.eyebrow)}</category>`,
        `<dc:creator>${esc(AUTHOR.name)}</dc:creator>`,
        pub ? `<pubDate>${pub}</pubDate>` : "",
        `<media:content url="${esc(img)}" medium="image" width="1200" height="630"/>`,
        "</item>",
      ].join("");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">
<channel>
<title>Viszlyn — Data. Visualized.</title>
<link>${BASE}</link>
<description>World rankings and data, visualized and sourced.</description>
<language>en</language>
<atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
