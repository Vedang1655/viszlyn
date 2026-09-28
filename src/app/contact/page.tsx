import type { Metadata } from "next";
import { LegalPage, LegalHeading } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact | Viszlyn",
  description:
    "Contact Viszlyn to report a correction, suggest a ranking, or ask a question.",
  alternates: { canonical: "https://www.viszlyn.io/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact"
      intro="Corrections, topic ideas, and questions are all welcome."
    >
      <p>
        The best way to reach us is by email:{" "}
        <a
          href="mailto:khamarvedang04@gmail.com"
          className="text-signal underline underline-offset-2"
        >
          khamarvedang04@gmail.com
        </a>
        .
      </p>
      <LegalHeading>Reporting a correction</LegalHeading>
      <p>
        If you believe a figure in one of our rankings is wrong, please include
        the article title, the figure in question, and a link to the source you
        are relying on. We review every report and update the article when a
        correction is warranted.
      </p>
      <LegalHeading>Suggesting a ranking</LegalHeading>
      <p>
        Have a topic you would like to see ranked? Send it over. Ideas backed by
        a strong public data source are the easiest for us to publish.
      </p>
    </LegalPage>
  );
}
