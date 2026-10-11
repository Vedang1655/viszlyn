import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/site";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Methodology", href: "/methodology" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.4 2.6 2.1 4.2 5 4.4" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-light mt-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="font-display font-bold text-lg text-signal">
            VISZLYN
          </span>
          <p className="font-body text-sm text-stone mt-1">Data. Visualized.</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-stone hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Viszlyn on ${social.label}`}
              title={social.label}
              className="text-stone hover:text-signal transition-colors"
            >
              {social.label === "Instagram" ? (
                <InstagramIcon />
              ) : social.label === "YouTube" ? (
                <YouTubeIcon />
              ) : (
                <TikTokIcon />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
