import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const keynotes = [
  {
    number: "01",
    title: "Agenten für den Wandel",
    subtitle: "Wie KI die ESG-Arbeit transformiert",
    description:
      "Das Omnibus-Dekret hat die ESG-Anforderungen verändert. Die eigentliche Chance liegt tiefer: KI-Tools und autonome Agenten machen ESG-Manager zu Gestaltern statt zu Datensammlern.",
    tags: ["KI", "ESG", "Transformation"],
  },
  {
    number: "02",
    title: "KI als Gamechanger",
    subtitle: "Für Nachhaltigkeit und ESG-Reporting",
    description:
      "Wie KI ESG-Reporting vereinfacht und gleichzeitig den tatsächlichen Impact verbessert: von der Compliance-Pflicht zur zentralen Säule nachhaltiger Unternehmensstrategien.",
    tags: ["KI", "ESG-Reporting", "Strategie"],
  },
  {
    number: "03",
    title: "The Sustainability ROI",
    subtitle: "Wie Nachhaltigkeit zum Werttreiber wird",
    description:
      "Nachhaltigkeit ist kein regulatorisches Muss, sondern ein Wettbewerbsvorteil. Datenbasierte Beispiele zeigen, wie sie Innovation treibt, Risiken minimiert und neue Märkte öffnet.",
    tags: ["Business Case", "Impact", "Wachstum"],
  },
];

export function BookableKeynotes() {
  return (
    <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <SectionLabel label="Buchbare Keynotes" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {keynotes.map((keynote, i) => (
            <ScrollReveal key={keynote.number} delay={i * 0.1} className="h-full">
              <div className="p-8 lg:p-10 bg-[var(--color-canvas)] h-full flex flex-col group hover:bg-[var(--color-ink)] transition-colors duration-200">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-border)] group-hover:text-white/20 transition-colors mb-8">
                  {keynote.number}
                </p>

                <h3 className="font-body font-700 text-xl tracking-tight text-[var(--color-ink)] group-hover:text-white transition-colors mb-2 leading-snug">
                  {keynote.title}
                </h3>

                <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-forest-500)] group-hover:text-[var(--color-forest-200)] transition-colors mb-4">
                  {keynote.subtitle}
                </p>

                <p className="font-body text-sm text-[var(--color-muted)] group-hover:text-white/70 transition-colors leading-relaxed mb-8 flex-1">
                  {keynote.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {keynote.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-[var(--color-border)] text-[var(--color-muted)] group-hover:border-white/20 group-hover:text-white/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
