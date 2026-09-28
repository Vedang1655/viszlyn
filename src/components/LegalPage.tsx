import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function LegalPage({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-5 md:px-8 py-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4 leading-[1.15]">
            {title}
          </h1>
          {intro && (
            <p className="font-body text-lg text-stone leading-relaxed mb-4">
              {intro}
            </p>
          )}
          {updated && (
            <p className="font-data text-xs text-stone border-t border-b border-stone-light py-3 mb-10">
              Last updated {updated}
            </p>
          )}
          <div className="font-body text-base text-ink/85 leading-relaxed flex flex-col gap-4">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-semibold text-xl text-ink mt-4">
      {children}
    </h2>
  );
}
