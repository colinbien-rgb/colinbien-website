import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const entries = [
  {
    period: "2015 – 2021",
    label: "Wissenschaftler & Dozent",
    title: "Universität Hamburg, Lüneburg, Oldenburg & ESCP Berlin",
    description:
      "Promotion am Lehrstuhl für Ökologische Ökonomie. Lehraufträge zu Transformations-, Gründungs- und Nachhaltigkeitsmanagement an drei Hochschulen.",
  },
  {
    period: "Seit 2015",
    label: "Gründer & Unternehmer",
    title: "WeShyft, True Fabrics & nRole",
    description:
      "Drei Ventures, ein Ziel: Nachhaltigkeit wirtschaftlich machen. Von KI-gestütztem ESG-Reporting bis zu fairem Textilhandel und Nachhaltigkeitsbildung.",
  },
  {
    period: "Seit 2014",
    label: "Speaker & Berater",
    title: "Konferenzen. Unternehmen. Institutionen.",
    description:
      "Keynotes auf internationalen Bühnen, Moderation und Strategieberatung für Konzerne, Ministerien und zivilgesellschaftliche Organisationen.",
  },
  {
    period: "Seit 2015",
    label: "Netzwerk & Engagement",
    title: "Think Tank 30, Bertelsmann Stiftung & VÖW",
    description:
      "Mitglied im Think Tank 30 des Club of Rome Deutschland. Teil des Voices of Transformation Netzwerks der Bertelsmann Stiftung (2023). Mentor und Mitglied der Vereinigung für ökologische Wirtschaftsforschung.",
  },
];

export function Credentials() {
  return (
    <section
      className="py-24 lg:py-32 bg-[var(--color-canvas-subtle)]"
      aria-labelledby="credentials-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          {/* Left: Label + Headline */}
          <ScrollReveal>
            <SectionLabel number="02" label="Hintergrund" className="mb-8" />
            <h2
              id="credentials-heading"
              className="font-body font-700 tracking-tight leading-tight text-[var(--color-ink)]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Akademisch
              <br />
              verankert.
              <br />
              <span className="text-[var(--color-muted)]">Praktisch</span>
              <br />
              <span className="text-[var(--color-muted)]">erprobt.</span>
            </h2>
          </ScrollReveal>

          {/* Right: Timeline entries */}
          <div>
            {entries.map((entry, i) => (
              <ScrollReveal key={entry.label} delay={i * 0.1}>
                <div className="border-t border-[var(--color-border)] py-8 grid grid-cols-[7rem_1fr] gap-8">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] pt-0.5 leading-snug">
                    {entry.period}
                  </p>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-forest-500)] mb-2">
                      {entry.label}
                    </p>
                    <p className="font-body font-700 text-base text-[var(--color-ink)] mb-2">
                      {entry.title}
                    </p>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Footer line */}
            <ScrollReveal delay={0.35}>
              <div className="border-t border-[var(--color-border)] pt-8">
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed max-w-lg">
                  15+ Jahre Erfahrung in Nachhaltigkeitsstrategie, Unternehmertum
                  und Transformation. Von der Theorie bis zur konkreten Umsetzung.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
