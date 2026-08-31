import { ReactNode } from "react";

type ArticleLayoutProps = {
  eyebrow: string;
  title: string;
  dek: string;
  publishedDate: string;
  lastUpdated?: string;
  dataPeriod?: string;
  children: ReactNode;
};

export function ArticleLayout({
  eyebrow,
  title,
  dek,
  publishedDate,
  lastUpdated,
  dataPeriod,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-5 md:px-8 py-12">
      <span className="font-body text-xs font-semibold tracking-widest text-signal uppercase">
        {eyebrow}
      </span>
      <h1 className="font-display font-bold text-3xl md:text-4xl text-ink mt-3 mb-4 leading-[1.15]">
        {title}
      </h1>
      <p className="font-body text-lg text-stone leading-relaxed mb-4">{dek}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 font-data text-xs text-stone border-t border-b border-stone-light py-3 mb-10">
        <span>Published {publishedDate}</span>
        {lastUpdated && <span>Updated {lastUpdated}</span>}
        {dataPeriod && <span>Data period: {dataPeriod}</span>}
      </div>

      <div className="flex flex-col gap-10">{children}</div>
    </article>
  );
}

export function ArticleSection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section>
      {title && (
        <h2 className="font-display font-semibold text-2xl text-ink mb-4">
          {title}
        </h2>
      )}
      <div className="font-body text-base text-ink/85 leading-relaxed flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
}

export function SourceNote({
  dataPeriod,
  lastUpdated,
  sources,
  methodology,
}: {
  dataPeriod: string;
  lastUpdated: string;
  sources: string;
  methodology: string;
}) {
  return (
    <div className="bg-ink/[0.03] border border-stone-light rounded-lg p-5">
      <span className="font-body text-xs font-semibold tracking-widest text-stone uppercase block mb-3">
        Data Sources &amp; Methodology
      </span>
      <dl className="flex flex-col gap-2 mb-3">
        <div className="flex gap-2 text-sm">
          <dt className="font-body font-medium text-ink shrink-0">Data period:</dt>
          <dd className="font-data text-stone">{dataPeriod}</dd>
        </div>
        <div className="flex gap-2 text-sm">
          <dt className="font-body font-medium text-ink shrink-0">Last updated:</dt>
          <dd className="font-data text-stone">{lastUpdated}</dd>
        </div>
        <div className="flex gap-2 text-sm">
          <dt className="font-body font-medium text-ink shrink-0">Sources:</dt>
          <dd className="font-body text-stone">{sources}</dd>
        </div>
      </dl>
      <p className="font-body text-sm text-stone leading-relaxed border-t border-stone-light pt-3">
        {methodology}
      </p>
      <p className="font-body text-xs text-stone/80 leading-relaxed mt-2 italic">
        Figures marked as estimates are based on publicly available
        information and may vary from other published sources.
      </p>
    </div>
  );
}
