import type { Metadata } from "next";
import { LegalPage, LegalHeading } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Viszlyn",
  description:
    "Contact Viszlyn to report a correction, suggest a ranking, ask about press or licensing, or send feedback about the site.",
  alternates: { canonical: "https://www.viszlyn.io/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact"
      intro="Corrections, topic ideas, press enquiries and feedback are all welcome."
    >
      <p>
        The best way to reach us is by email:{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-signal underline underline-offset-2"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <LegalHeading>Corrections and factual errors</LegalHeading>
      <p>
        If you believe a figure in one of our rankings is wrong, please include
        the article title, the figure in question, and a link to the source you
        are relying on. We review every report and update the article when a
        correction is warranted.
      </p>

      <LegalHeading>Topic and ranking suggestions</LegalHeading>
      <p>
        Have a topic you would like to see ranked? Send it over. Ideas backed by
        a strong public data source are the easiest for us to publish.
      </p>

      <LegalHeading>Press, licensing and partnerships</LegalHeading>
      <p>
        For press questions, requests to reuse a chart or data, or partnership
        enquiries, email us with a short description of what you need.
      </p>

      <LegalHeading>General feedback</LegalHeading>
      <p>
        Found something confusing, broken or hard to read on the site? Let us
        know and we will look into it.
      </p>
    </LegalPage>
  );
}
