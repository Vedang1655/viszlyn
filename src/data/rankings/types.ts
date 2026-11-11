export type CountryFlag = {
  name: string;
  /** two-letter ISO 3166-1 alpha-2 code, lowercase, matching flag-icons classes (e.g. "sg" for Singapore) */
  flagCode: string;
};

export type ChartItem = {
  rank: number;
  name: string;
  value: string;
  raw: number;
  /** Display label overriding the numeric rank (e.g. "=2" for a tied rank). Falls back to `rank` when absent. */
  rankLabel?: string;
  /** When set, this item represents a tied group of countries — rendered as flags + names instead of a single name. */
  countries?: CountryFlag[];
  /** Rank in the comparison year (see RankingArticle.comparisonLabel). Drives the ▲▼ badge and the "Biggest movers" tab. */
  prevRank?: number;
};

export type DetailedEntry = {
  rank: number;
  name: string;
  earnings: string;
  category: string;
  revenueSources?: string;
  origin?: string;
  blurb?: string;
  standoutFact?: string;
  sourceTag?: string;
  wikipediaUrl?: string;
  rankLabel?: string;
  countries?: CountryFlag[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type RelatedLink = {
  title: string;
  href: string;
  comingSoon?: boolean;
};

export type CalloutBox = {
  label: string;
  body: string;
};

export type KeyTakeawayData = {
  stat: string;
  label: string;
  comparisonStat: string;
  comparisonLabel: string;
  note: string;
};

export type SourceLink = {
  label: string;
  href: string;
};

export type SourceNoteData = {
  dataPeriod: string;
  lastUpdated: string;
  sources: string;
  methodology: string;
  /** Optional list of direct source links shown under the Sources line. */
  sourceLinks?: SourceLink[];
};

export type RankingArticle = {
  slug: string;

  // Metadata / SEO
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;

  // Header
  eyebrow: string;
  title: string;
  dek: string;
  publishedDate: string;
  lastUpdated: string;
  dataPeriod: string;

  // Body content
  quickAnswer: string;
  introParagraph: string;
  /** Optional highlighted callout box shown after the intro (e.g. an exclusion explanation). */
  calloutBox?: CalloutBox;

  chartTitle: string;
  chartSource: string;
  chartItems: ChartItem[];
  chartTapNote: string;
  /** Optional override for the DetailedEntry value's label (defaults to "Estimated earnings:").
   * Use this when the ranked value isn't earnings/compensation - e.g. "Market capitalization:" for a companies ranking. */
  entryValueLabel?: string;

  /** Optional companion YouTube video, embedded under the intro and added as VideoObject JSON-LD. */
  video?: ArticleVideo;
  /** Custom designed hero graphic. Replaces the auto block mosaic on the page and is used as the share image. */
  heroImage?: ArticleHeroImage;
  /** True when a lower value ranks better (e.g. crime). The auto mosaic then uses equal blocks instead of sizing by value. */
  lowerIsBetter?: boolean;
  /** Comparison year for rank changes (e.g. "2026"). Together with chartItems[].prevRank it shows ▲▼ badges and a "Biggest movers" tab. */
  comparisonLabel?: string;
  /** How many of the top entries render expanded; the rest are collapsed accordion rows (still in the HTML). Default 3. */
  openEntries?: number;

  detailedEntries: DetailedEntry[];

  keyTakeaway: KeyTakeawayData;
  sourceNote: SourceNoteData;
  faqItems: FaqItem[];
  relatedLinks: RelatedLink[];
};

export type ArticleVideo = {
  /** The 11-character YouTube video id (from youtu.be/<id>). */
  youtubeId: string;
  title: string;
  description: string;
  /** ISO 8601 date the video was published, e.g. "2026-10-25". */
  /** "YYYY-MM-DD" or a full ISO 8601 datetime with timezone (date-only is published as midday UTC) */
  uploadDate: string;
  /** ISO 8601 duration, e.g. "PT6M1S". */
  duration: string;
};

export type ArticleHeroImage = {
  /** PNG under /public shown on the article page, e.g. "/heroes/<slug>.png" (2x of width x height) */
  src: string;
  /**
   * Show `src` at the top of the article. Default true. Set false to keep the automatic
   * block mosaic on the page and use the image only for sharing / Google Discover (ogSrc).
   */
  onPage?: boolean;
  /** 1200x630 PNG under /public, used for Open Graph, Twitter and Google Discover */
  ogSrc: string;
  alt: string;
};
