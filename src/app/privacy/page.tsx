import type { Metadata } from "next";
import { LegalPage, LegalHeading } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Viszlyn",
  description:
    "How Viszlyn handles visitor data, cookies, and third-party advertising.",
  alternates: { canonical: "https://www.viszlyn.io/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information is collected when you visit viszlyn.io and how it is used."
      updated="September 28, 2026"
    >
      <LegalHeading>Information we collect</LegalHeading>
      <p>
        Viszlyn does not require you to create an account or submit personal
        information to read our content. If you contact us by email, we receive
        your email address and whatever you choose to include in your message,
        and we use it only to respond.
      </p>
      <p>
        Like most websites, our hosting provider and the third-party services
        described below may automatically receive standard technical
        information such as your IP address, browser type, device type, and the
        pages you visit.
      </p>

      <LegalHeading>Cookies and advertising</LegalHeading>
      <p>
        We use Google AdSense to display advertisements. Google and its
        partners, as third-party vendors, use cookies and similar technologies
        to serve ads based on your prior visits to this and other websites.
        Google&apos;s use of advertising cookies enables it and its partners to
        serve ads to you based on your visit to Viszlyn and/or other sites on
        the internet.
      </p>
      <p>
        You can opt out of personalized advertising by visiting{" "}
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-signal underline underline-offset-2"
        >
          Google Ads Settings
        </a>
        . You can also opt out of some third-party vendors&apos; use of cookies
        for personalized advertising at{" "}
        <a
          href="https://www.aboutads.info"
          target="_blank"
          rel="noopener noreferrer"
          className="text-signal underline underline-offset-2"
        >
          aboutads.info
        </a>
        . For more on how Google uses data from sites that use its services,
        see{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
          className="text-signal underline underline-offset-2"
        >
          How Google uses information from sites or apps that use our services
        </a>
        .
      </p>
      <p>
        Most browsers let you block or delete cookies in their settings.
        Blocking cookies may affect how some parts of a website behave.
      </p>

      <LegalHeading>Search and analytics services</LegalHeading>
      <p>
        We use Google Search Console to understand how our pages appear in
        Google Search. This provides aggregated search performance data and does
        not identify individual visitors to us.
      </p>

      <LegalHeading>Links to other sites</LegalHeading>
      <p>
        Our articles link to external sources and to our social media profiles.
        We are not responsible for the privacy practices of other websites, and
        we encourage you to read their policies.
      </p>

      <LegalHeading>Children&apos;s privacy</LegalHeading>
      <p>
        Viszlyn is not directed at children under 13, and we do not knowingly
        collect personal information from children.
      </p>

      <LegalHeading>Changes to this policy</LegalHeading>
      <p>
        We may update this policy from time to time. The date at the top of the
        page shows when it was last revised.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        Questions about this policy? Reach us through our{" "}
        <a href="/contact" className="text-signal underline underline-offset-2">
          contact page
        </a>
        .
      </p>
    </LegalPage>
  );
}
