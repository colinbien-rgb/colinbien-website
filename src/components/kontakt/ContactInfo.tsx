import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SOCIAL_LINKS } from "@/lib/constants";

const infoItems = [
  {
    label: "E-Mail",
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
  },
  {
    label: "Standort",
    value: "Hamburg, Deutschland",
    href: null,
  },
  {
    label: "Antwortzeit",
    value: "In der Regel innerhalb von 24h",
    href: null,
  },
];

const socialItems = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "Spotify", href: SOCIAL_LINKS.spotify },
  { label: "YouTube", href: SOCIAL_LINKS.youtube },
];

export function ContactInfo() {
  return (
    <div>
      <ScrollReveal>
        <SectionLabel label="Kontakt" className="mb-8" />
        <h2
          className="font-body font-700 tracking-tight leading-tight text-[var(--color-ink)] mb-10"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          Gerne von
          <br />
          <span className="text-[var(--color-muted)]">dir hören.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="space-y-0 mb-10">
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="py-5 border-t border-[var(--color-border)] grid grid-cols-[7rem_1fr] gap-4"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] pt-0.5">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-body text-sm text-[var(--color-ink)] hover:text-[var(--color-forest-500)] transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <span className="font-body text-sm text-[var(--color-ink)]">
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
          Social Media
        </p>
        <div className="flex gap-4">
          {socialItems.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-500 text-[var(--color-ink)] hover:text-[var(--color-forest-500)] transition-colors underline underline-offset-4 decoration-[var(--color-border)] hover:decoration-[var(--color-forest-500)]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
