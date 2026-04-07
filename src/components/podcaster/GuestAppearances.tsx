import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const appearances = [
  {
    show: "Meyer&Meyer. Der FindingSustainia Podcast",
    title: "Wie KI uns dabei hilft vom ESG-Reporting zur Steuerung zu kommen",
    url: "https://open.spotify.com/episode/593smc3VWsulk73SgsTgef",
  },
  {
    show: "UNF#CK YOUR DATA",
    title: "ESG Reporting und mit Daten Nachhaltigkeit messbar machen",
    url: "https://open.spotify.com/episode/2FpFwjN8NUQlktHVzB5IFQ",
  },
  {
    show: "Nachhaltigkeit erfolgreich umsetzen – Gewinne Zukunft",
    title: "GenAI für Sustainability Manager: Die besten Tools, Tipps & Tricks",
    url: "https://open.spotify.com/episode/5Sd2SuT6RQGeOKMhYfyDeC",
  },
  {
    show: "Nachhaltigkeit erfolgreich umsetzen – Gewinne Zukunft",
    title: "Omnibusregulierung: ESG-Rollback oder Chance? Darauf kommt es 2025 an",
    url: "https://open.spotify.com/episode/0YSk0EAw55uPx7V7jInyLb",
  },
  {
    show: "Wandel & Wirkung",
    title: "Nachhaltige Transformation in Gesellschaft, Unternehmen und uns",
    url: "https://open.spotify.com/episode/1Gt6AkG5rqudr2PjWuGYQv",
  },
  {
    show: "Energie im Wandel",
    title: "Nachhaltige Hochschulen und Unternehmertum",
    url: "https://open.spotify.com/episode/1GT9fXUfU9ZWL1VWBfyhrd",
  },
  {
    show: "Sinnflut – die Stimme",
    title: "Natur-Sinn",
    url: "https://open.spotify.com/episode/3dDEkywZ0JqHM4IimsYYZb",
  },
  {
    show: "There is a crack in everything",
    title: "Dr. Colin Bien im Gespräch mit Lena",
    url: "https://open.spotify.com/episode/6f5J6zhtS7jrYumeU5EJKU",
  },
];

export function GuestAppearances() {
  return (
    <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <SectionLabel label="Als Gast" />
        </ScrollReveal>

        <div className="border-t border-[var(--color-border)]">
          {appearances.map((ep, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <a
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-2 md:gap-8 py-5 border-b border-[var(--color-border)] group items-center"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-forest-500)] leading-snug">
                  {ep.show}
                </span>
                <span className="font-body text-sm text-[var(--color-ink)] group-hover:text-[var(--color-forest-500)] transition-colors leading-snug">
                  {ep.title}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] group-hover:text-[var(--color-forest-500)] transition-colors whitespace-nowrap">
                  Spotify →
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
