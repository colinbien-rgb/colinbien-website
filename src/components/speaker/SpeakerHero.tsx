import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function SpeakerHero() {
  return (
    <section className="pt-32 pb-0 border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-0 items-end">
          {/* Text column */}
          <div className="pb-16">
            <ScrollReveal className="mb-8">
              <SectionLabel label="Speaker" />
            </ScrollReveal>

            <h1
              className="font-display font-900 leading-[0.88] tracking-[-0.04em] text-[var(--color-ink)] mb-10"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
            >
              <AnimatedText text="Keynotes," delay={0.1} staggerDelay={0.04} />
              <br />
              <AnimatedText text="die bleiben." delay={0.5} staggerDelay={0.04} />
            </h1>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-lg text-[var(--color-muted)] leading-relaxed max-w-xl mb-8">
                Ich spreche auf Konferenzen, in Unternehmen und auf internationalen
                Bühnen über Nachhaltigkeit, Transformation und die Wirtschaft von
                morgen. Präzise, ehrlich und ohne Buzzword-Bingo.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-display font-900 text-4xl text-[var(--color-ink)] leading-none">
                    50+
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mt-1">
                    Keynotes
                  </p>
                </div>
                <div className="w-px h-10 bg-[var(--color-border)]" aria-hidden="true" />
                <div>
                  <p className="font-display font-900 text-4xl text-[var(--color-ink)] leading-none">
                    15+
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mt-1">
                    Jahre Erfahrung
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Action photo — the KPMG event photo works perfectly here */}
          <ScrollReveal delay={0.2} direction="left" className="hidden lg:block">
            <div className="relative h-[520px] overflow-hidden">
              <Image
                src="/images/colin-speaking.jpg"
                alt="Colin Bien als Keynote Speaker"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              {/* Green accent strip at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-forest-500)]"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
