import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const clients = [
  "Deutsche Telekom",
  "Körber Stiftung",
  "DIHK",
  "HafenCity Hamburg",
  "Gebana",
];

export function PodcastCredentials() {
  return (
    <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          {/* Left */}
          <ScrollReveal>
            <SectionLabel label="Reichweite & Wirkung" className="mb-8" />
            <p
              className="font-body font-700 tracking-tight leading-tight text-[var(--color-ink)]"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Einer der beliebtesten Nachhaltigkeitspodcasts Deutschlands.
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mt-4">
              enorm Magazin
            </p>
          </ScrollReveal>

          {/* Right */}
          <div>
            {/* Corporate Podcast Production */}
            <ScrollReveal delay={0.1}>
              <div className="border-t border-[var(--color-border)] py-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-forest-500)] mb-4">
                  Corporate Podcast Produktion
                </p>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6 max-w-lg">
                  Neben dem eigenen Podcast produziert das Masters of Change Team
                  Unternehmens-Podcasts und Podcast-Formate für Organisationen,
                  von der Konzeption bis zur fertigen Episode.
                </p>
                <div className="flex flex-wrap gap-3">
                  {clients.map((client) => (
                    <span
                      key={client}
                      className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-muted)]"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Press mentions */}
            <ScrollReveal delay={0.2}>
              <div className="border-t border-[var(--color-border)] py-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-forest-500)] mb-4">
                  Empfohlen von
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["enorm Magazin", "Utopia", "Fogs Magazin", "Nachhaltige Jobs"].map((pub) => (
                    <span
                      key={pub}
                      className="font-body text-sm text-[var(--color-muted)]"
                    >
                      {pub}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
