import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const learnings = [
  {
    number: "01",
    title: "Purpose allein reicht nicht.",
    description:
      "Ein nachhaltiges Produkt zu haben ist kein Geschäftsmodell. Die härteste Lektion: Wirkung und Wirtschaftlichkeit müssen von Anfang an zusammen gedacht werden, nicht nacheinander.",
  },
  {
    number: "02",
    title: "Exit ist kein Scheitern.",
    description:
      "True Fabrics zu verkaufen war die richtige Entscheidung. Ein Unternehmen in gute Hände zu geben, das es weitertragen kann, ist manchmal mehr Verantwortung als es festzuhalten.",
  },
  {
    number: "03",
    title: "Technologie ist ein Mittel, kein Ziel.",
    description:
      "KI, SaaS, Plattform: alle Begriffe, die schnell zum Selbstzweck werden. Was zählt, ist ob das Problem gelöst wird. Bei WeShyft fragen wir uns das täglich neu.",
  },
];

export function Lernmomente() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-canvas-subtle)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <SectionLabel label="Was ich gelernt habe" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {learnings.map((item, i) => (
            <ScrollReveal key={item.number} delay={i * 0.1} className="h-full">
              <div className="p-8 lg:p-10 bg-[var(--color-canvas-subtle)] h-full">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-border)] mb-8">
                  {item.number}
                </p>
                <h3 className="font-body font-700 text-lg text-[var(--color-ink)] mb-4 leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
