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
};

export type DetailedEntry = {
  rank: number;
  name: string;
  earnings: string;
  category: string;
  revenueSources: string;
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

export type SourceNoteData = {
  dataPeriod: string;
  lastUpdated: string;
  sources: string;
  methodology: string;
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

  detailedEntries: DetailedEntry[];

  keyTakeaway: KeyTakeawayData;
  sourceNote: SourceNoteData;
  faqItems: FaqItem[];
  relatedLinks: RelatedLink[];
};
