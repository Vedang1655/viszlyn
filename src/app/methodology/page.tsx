import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalHeading } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Editorial Standards and Methodology | Viszlyn",
  description:
    "How Viszlyn chooses sources, builds rankings, labels projections, handles corrections and treats advertising.",
  alternates: { canonical: "https://www.viszlyn.io/methodology" },
};

const linkClass = "text-signal underline underline-offset-2";

export default function MethodologyPage() {
  return (
    <LegalPage
      title="Editorial Standards and Methodology"
      intro="How Viszlyn chooses sources, builds rankings and handles corrections."
      updated="October 9, 2026"
    >
      <LegalHeading>Sources</LegalHeading>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>
          We prefer primary sources: official statistics, company filings and
          the original publisher of a ranking.
        </li>
        <li>
          When a secondary source or cross-check is used, the article says so.
        </li>
        <li>
          Each article shows its data period, its source and its last-updated
          date.
        </li>
      </ul>

      <LegalHeading>How rankings are built</LegalHeading>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>
          Each article defines what is measured and the units used, for example
          nominal GDP in current US dollars.
        </li>
        <li>
          Exclusions, ties, territories and country classifications are
          explained where they affect the list.
        </li>
        <li>
          Ratios, gaps and percentage changes are calculated from unrounded
          source figures where available, then rounded for display.
        </li>
        <li>
          Projections and estimates are labelled as such. Where figures can be
          revised, as with the IMF World Economic Outlook, the article names the
          specific edition and data period used (for example, April 2026), and
          later editions may show different values.
        </li>
      </ul>

      <LegalHeading>Editorial independence</LegalHeading>
      <p>
        Viszlyn does not sell ranking positions and does not accept payment to
        include, exclude or move anyone in a ranking.
      </p>

      <LegalHeading>What rankings mean</LegalHeading>
      <p>
        Rankings are general informational content. They are not financial,
        investment or legal advice, and a position on a list says nothing about
        whether a company, asset or person is a good choice for you.
      </p>

      <LegalHeading>Corrections and updates</LegalHeading>
      <p>
        Readers can report errors through our{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        . We review each report, correct confirmed errors, and revise the
        article&apos;s last-updated date. Material corrections are noted in the
        article.
      </p>

      <LegalHeading>Advertising</LegalHeading>
      <p>
        Viszlyn displays advertising through Google AdSense. Advertising does
        not determine what is ranked or how. See our{" "}
        <Link href="/privacy" className={linkClass}>
          Privacy Policy
        </Link>{" "}
        for how advertising cookies work and how to opt out of personalized ads.
      </p>
    </LegalPage>
  );
}
