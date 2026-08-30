import { ReactNode } from "react";

type ArticleLayoutProps = {
  eyebrow: string;
  title: string;
  dek: string;
  publishedDate: string;
  dataPeriod?: string;
  children: ReactNode;
};

export function ArticleLayout({
  eyebrow,
  title,
  dek,
  publishedDate,
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

export function SourceNote({ children }: { children: ReactNode }) {
  return (
    <div className="bg-ink/[0.03] border border-stone-light rounded-lg p-5">
      <span className="font-body text-xs font-semibold tracking-widest text-stone uppercase block mb-2">
        Data Sources &amp; Methodology
      </span>
      <p className="font-body text-sm text-stone leading-relaxed">{children}</p>
    </div>
  );
}
