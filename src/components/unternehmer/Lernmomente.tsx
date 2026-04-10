import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const learnings = [
  {
    number: "01",
    title: "Impact",
    description:
      "Bei allen meinen Gründungen ging es darum, ökologische oder soziale Probleme durch unternehmerisches Handeln zu lösen. Nicht Gewinn als Zweck, sondern als Mittel zur Wirkung.",
  },
  {
    number: "02",
    title: "Wissenschaft",
    description:
      "Wissenschaftliche Erkenntnisse sind kein Selbstzweck. Ich glaube daran, dass sie in den gesellschaftlichen Diskurs gehören und durch unternehmerisches Handeln in die Praxis übersetzt werden müssen.",
  },
  {
    number: "03",
    title: "Netzwerk",
    description:
      "Die größten Herausforderungen unserer Zeit lassen sich nicht alleine lösen. Gemeinschaften, die über Disziplinen und Interessen hinweg zusammendenken, sind stärker als jeder Einzelne.",
  },
];

export function Lernmomente() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-canvas-subtle)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <SectionLabel label="Wofür ich stehe" />
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
