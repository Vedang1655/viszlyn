import { renderBannerImage, BANNER_SIZE } from "@/lib/bannerImage";
import { getAllRankingSlugs } from "@/data/rankings";

export const alt = "Viszlyn ranking graphic";
export const size = BANNER_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllRankingSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return renderBannerImage(slug);
}
