import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalHeading } from "@/components/LegalPage";
import { SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Viszlyn",
  description:
    "Viszlyn is an independent publication that ranks the world's biggest numbers in money, tech and the world, with the sources and data period shown for every ranking.",
  alternates: { canonical: "https://www.viszlyn.io/about" },
};

const linkClass = "text-signal underline underline-offset-2";

export default function AboutPage() {
  return (
    <LegalPage
      title="About Viszlyn"
      intro="Data. Visualized. Viszlyn turns big numbers into quick, readable rankings."
    >
      <p>
        Viszlyn is an independent publication that ranks the world&apos;s
        biggest numbers, such as the richest people, the largest economies, the
        most valuable companies and the costliest cities, and explains what sits
        behind them. Every ranking identifies its data period, its source and the
        context needed to understand the figures.
      </p>

      <LegalHeading>Who runs it</LegalHeading>
      <p>
        Viszlyn is written, researched and published by Vedang Khamar as an
        independently run, one-person publication.
      </p>

      <LegalHeading>What you will find here</LegalHeading>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>
          Rankings of people, companies, countries and cities across Money, Tech
          and World.
        </li>
        <li>
          Figures, data periods, sources and methodology notes for every
          ranking.
        </li>
        <li>
          Plain-language explanations of what is counted, what is excluded and
          why different rankings of the same topic can disagree.
        </li>
      </ul>

      <LegalHeading>How we work</LegalHeading>
      <p>
        We prioritize primary and widely recognized sources, such as the
        International Monetary Fund for economic data and the original
        publisher for its own rankings. When a secondary source is used we say
        so, and we distinguish projections and estimates from confirmed
        results. Read the full process on our{" "}
        <Link href="/methodology" className={linkClass}>
          editorial standards and methodology
        </Link>{" "}
        page.
      </p>

      <LegalHeading>Corrections</LegalHeading>
      <p>
        If you spot an error, please tell us through the{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        . Confirmed errors are corrected, and the article&apos;s last-updated
        date is revised where appropriate.
      </p>

      <LegalHeading>Follow Viszlyn</LegalHeading>
      <p>
        {SOCIAL_LINKS.map((s, i) => (
          <span key={s.href}>
            {i > 0 && " · "}
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {s.label}
            </a>
          </span>
        ))}
      </p>
    </LegalPage>
  );
}
