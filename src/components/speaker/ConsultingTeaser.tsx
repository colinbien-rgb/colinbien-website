import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const offerings = [
  {
    title: "KI-Readiness Assessment",
    description:
      "Wo steht Ihre Nachhaltigkeitsabteilung heute, und wo kann KI konkret ansetzen? Strukturierte Bestandsaufnahme mit klarer Handlungsempfehlung.",
  },
  {
    title: "Tool-Auswahl & Implementierung",
    description:
      "Welche KI-Tools passen zu Ihren ESG-Prozessen? Von der Evaluation bis zur Einführung, praxisnah und ohne Vendor-Lock-in.",
  },
  {
    title: "Team-Enablement",
    description:
      "Workshops und Schulungen, die Nachhaltigkeitsteams befähigen, KI-Tools eigenständig zu nutzen: von der Dateneingabe bis zur Berichterstellung.",
  },
];

export function ConsultingTeaser() {
  return (
    <section className="py-24 lg:py-32 border-t border-[var(--color-border)] bg-[var(--color-canvas-subtle)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          {/* Left */}
          <ScrollReveal>
            <SectionLabel label="Beratung" className="mb-8" />
            <h2
              className="font-body font-700 tracking-tight leading-tight text-[var(--color-ink)] mb-6"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              KI in der Nachhaltigkeits&shy;abteilung.
            </h2>
            <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-8">
              Viele Nachhaltigkeitsteams wissen, dass KI ihre Arbeit verändern wird. Aber nicht,
              wo sie anfangen sollen. Ich begleite Unternehmen und Institutionen dabei, KI
              gezielt und sinnvoll in ihre ESG-Prozesse zu integrieren.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 font-body font-600 text-sm px-5 py-2.5 bg-[var(--color-ink)] text-white hover:bg-[var(--color-forest-500)] transition-colors"
            >
              Beratung anfragen →
            </Link>
          </ScrollReveal>

          {/* Right: offerings */}
          <div className="border-t border-[var(--color-border)]">
            {offerings.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="py-7 border-b border-[var(--color-border)] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
                  <div>
                    <p className="font-body font-700 text-sm text-[var(--color-ink)] mb-1">
                      {item.title}
                    </p>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
