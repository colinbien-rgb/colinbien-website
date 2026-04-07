import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-canvas)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-body font-700 text-xl tracking-tight mb-3">
              Colin Bien
            </p>
            <p className="font-body text-sm text-[var(--color-muted-light)] leading-relaxed max-w-xs">
              Speaker. Podcaster. Unternehmer.
              <br />
              Nachhaltig in die Zukunft.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted-light)] mb-4">
              Navigation
            </p>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--color-canvas)] hover:text-[var(--color-forest-200)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted-light)] mb-4">
              Kontakt
            </p>
            <ul className="space-y-2" role="list">
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="font-body text-sm text-[var(--color-canvas)] hover:text-[var(--color-forest-200)] transition-colors"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </li>
              <li>
                <p className="font-body text-sm text-[var(--color-muted-light)]">
                  Gänsemarkt 33, Hamburg
                </p>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted-light)] hover:text-[var(--color-canvas)] transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted-light)] hover:text-[var(--color-canvas)] transition-colors"
                aria-label="Spotify Podcast"
              >
                Spotify
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted-light)] hover:text-[var(--color-canvas)] transition-colors"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-xs text-[var(--color-muted-light)]">
            © {year} Colin Bien. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="font-mono text-xs text-[var(--color-muted-light)] hover:text-[var(--color-canvas)] transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="font-mono text-xs text-[var(--color-muted-light)] hover:text-[var(--color-canvas)] transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
