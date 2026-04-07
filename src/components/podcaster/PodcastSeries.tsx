import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const series = [
  {
    title: "Masters of Change",
    description:
      "Der Originalpodcast: Tiefgehende Gespräche mit Pionieren des Wandels über Nachhaltigkeit, Transformation und die Wirtschaft von morgen.",
    cover: "/images/podcast/masters-of-change.jpg",
    tag: "Flagship Podcast",
  },
  {
    title: "Masters of Change: Sustainability Practice",
    description:
      "Konkrete Einblicke in Nachhaltigkeitspraxis in Organisationen: Was funktioniert, was nicht und warum.",
    cover: "/images/podcast/sustainability-practice.jpg",
    tag: "Spinoff",
  },
  {
    title: "Nachhaltig Erfolgreich Führen",
    description:
      "Der Podcast zum IHK-Management-Training: Nachhaltige Führung als Erfolgsstrategie für Unternehmen.",
    cover: "/images/podcast/ihk-nachhaltig.jpg",
    tag: "Gast & Co-Host",
  },
  {
    title: "Sustainability Made in Europe",
    description:
      "A Policy Podcast on Sustainable Finance, Reporting and Governance. In Kooperation mit EEAC und Rat für Nachhaltige Entwicklung.",
    cover: "/images/podcast/sustainability-europe.jpg",
    tag: "Kooperation",
  },
];

export function PodcastSeries() {
  return (
    <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <SectionLabel label="Alle Serien" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {series.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1} className="h-full">
              <div className="p-8 bg-[var(--color-canvas)] h-full group hover:bg-[var(--color-canvas-subtle)] transition-colors flex gap-6">
                {/* Cover thumbnail */}
                <div className="flex-shrink-0 relative w-20 h-20 overflow-hidden">
                  <Image
                    src={s.cover}
                    alt={`${s.title} Cover`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-forest-500)] mb-2 block">
                    {s.tag}
                  </span>
                  <h3 className="font-body font-700 text-base text-[var(--color-ink)] mb-2 tracking-tight leading-snug">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
