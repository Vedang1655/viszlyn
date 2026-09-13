export type ChartItem = {
  rank: number;
  name: string;
  value: string;
  raw: number;
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

  detailedEntries: DetailedEntry[];

  keyTakeaway: KeyTakeawayData;
  sourceNote: SourceNoteData;
  faqItems: FaqItem[];
  relatedLinks: RelatedLink[];
};
