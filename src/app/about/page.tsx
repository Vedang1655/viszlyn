import type { Metadata } from "next";
import { LegalPage, LegalHeading } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "About | Viszlyn",
  description:
    "Viszlyn publishes clear, sourced, easy-to-scan rankings and data stories on money, tech, and the world.",
  alternates: { canonical: "https://www.viszlyn.io/about" },
};

export default function AboutPage() {
  return (
    <LegalPage
      title="About Viszlyn"
      intro="Data. Visualized. Viszlyn turns big numbers into quick, readable rankings."
    >
      <p>
        Viszlyn is an independent publication built around one idea: the most
        interesting facts in the world are hiding inside spreadsheets. We pull
        rankings and statistics from primary and reputable sources, check them,
        and present them in short, scannable articles with a chart, a ranked
        list, and the context that makes each number meaningful.
      </p>
      <LegalHeading>How we work</LegalHeading>
      <p>
        Every ranking lists its sources, the period the data covers, and the
        methodology behind it, including what we chose to include or exclude and
        why. When we find an error, whether our own or in a source we relied on,
        we correct the article and note the change.
      </p>
      <LegalHeading>What we cover</LegalHeading>
      <p>
        Money (earnings, wealth, and business), Tech (companies and markets),
        and World (countries, places, and global comparisons). New rankings are
        published regularly.
      </p>
      <LegalHeading>Get in touch</LegalHeading>
      <p>
        Spotted a mistake or have a topic suggestion? Visit our contact page.
        We read every message.
      </p>
    </LegalPage>
  );
}
