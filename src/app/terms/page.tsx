import type { Metadata } from "next";
import { LegalPage, LegalHeading } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | Viszlyn",
  description: "The terms that apply when you use viszlyn.io.",
  alternates: { canonical: "https://www.viszlyn.io/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="By using viszlyn.io, you agree to these terms."
      updated="September 28, 2026"
    >
      <LegalHeading>Informational purposes only</LegalHeading>
      <p>
        Viszlyn publishes rankings and statistics for general information and
        entertainment. Nothing on this site is financial, investment, legal, or
        professional advice. Do not make financial decisions based solely on
        our content.
      </p>

      <LegalHeading>Accuracy</LegalHeading>
      <p>
        We work to source and verify our data and to correct errors quickly, but
        rankings and valuations change and we cannot guarantee that every figure
        is complete, current, or error-free. Each article lists its sources and
        the period its data covers.
      </p>

      <LegalHeading>Intellectual property</LegalHeading>
      <p>
        The original writing, charts, and design on Viszlyn belong to Viszlyn.
        You may quote short excerpts with a clear link back to the source
        article. Please do not republish full articles or graphics without
        permission. Underlying facts and figures come from third-party sources
        credited in each article.
      </p>

      <LegalHeading>Third-party links and advertising</LegalHeading>
      <p>
        Our pages may include links to third-party websites and advertisements
        served by third parties. We do not control and are not responsible for
        their content or practices.
      </p>

      <LegalHeading>Limitation of liability</LegalHeading>
      <p>
        Viszlyn is provided &quot;as is&quot; without warranties of any kind. To
        the fullest extent permitted by law, we are not liable for any loss or
        damage arising from your use of, or reliance on, this site.
      </p>

      <LegalHeading>Changes</LegalHeading>
      <p>
        We may update these terms from time to time. Continued use of the site
        after changes means you accept the updated terms.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        Questions about these terms? Reach us through our{" "}
        <a href="/contact" className="text-signal underline underline-offset-2">
          contact page
        </a>
        .
      </p>
    </LegalPage>
  );
}
