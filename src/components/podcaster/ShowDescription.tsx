import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const topics = [
  "Nachhaltige Transformation",
  "ESG & Governance",
  "Kreislaufwirtschaft",
  "Klimastrategie",
  "Zukunft der Arbeit",
  "Purpose-Driven Business",
  "KI & Gesellschaft",
  "Impact Investing",
];

export function ShowDescription() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">
          <ScrollReveal>
            <SectionLabel label="Über den Podcast" className="mb-8" />
            <h2
              className="font-body font-700 tracking-tight leading-tight text-[var(--color-ink)] mb-8"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Gespräche, die
              <br />
              <span className="text-[var(--color-muted)]">
                tatsächlich weiterhelfen.
              </span>
            </h2>
            <p className="font-body text-base text-[var(--color-muted)] leading-relaxed mb-6">
              Masters of Change ist kein weiterer Business-Podcast. Hier kommen
              Menschen zu Wort, die Wandel nicht nur predigen, sondern täglich
              gestalten. Mit konkreten Erkenntnissen, Rückschlägen und
              Lösungen.
            </p>
            <p className="font-body text-base text-[var(--color-muted)] leading-relaxed">
              Jede Episode dauert 45–75 Minuten und erscheint zweiwöchentlich.
              Für Führungskräfte, Gründer und alle, die Nachhaltigkeit ernstnehmen.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <SectionLabel label="Themen" className="mb-8" />
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, i) => (
                <span
                  key={topic}
                  className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)] transition-colors cursor-default"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
