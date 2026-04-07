import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function UnternehmerHero() {
  return (
    <section className="pt-32 pb-20 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-8">
          <SectionLabel label="Unternehmer" />
        </ScrollReveal>

        <h1
          className="font-display font-900 leading-[0.88] tracking-[-0.04em] text-[var(--color-ink)] mb-10"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7.5rem)" }}
        >
          <AnimatedText text="Drei Ventures." delay={0.1} staggerDelay={0.04} />
          <br />
          <AnimatedText
            text="Ein Ziel."
            delay={0.65}
            staggerDelay={0.04}
          />
        </h1>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
            Nachhaltigkeit nicht nur beschreiben, sondern bauen. Das ist der
            Antrieb hinter meinen drei Unternehmen. Jedes löst ein echtes Problem
            und beweist, dass Purpose und Profitabilität kein Widerspruch sind.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
