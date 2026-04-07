import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SOCIAL_LINKS } from "@/lib/constants";

export function BookingCTA() {
  return (
    <section className="py-24 bg-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-forest-200)] mb-6 block">
              Buchungsanfrage
            </span>
            <h2
              className="font-body font-700 text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Interesse an einem
              <br />
              <span className="text-[var(--color-forest-500)]">Keynote?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="left">
            <p className="font-body text-white/60 leading-relaxed mb-8">
              Für Verfügbarkeit, Themen und Konditionen nehmen Sie direkt Kontakt
              auf. Ich antworte in der Regel innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 font-body font-600 px-6 py-3 bg-white text-[var(--color-ink)] hover:bg-[var(--color-forest-500)] hover:text-white transition-colors"
              >
                Jetzt anfragen →
              </Link>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="inline-flex items-center gap-2 font-body font-600 px-6 py-3 border border-white/20 text-white hover:border-white transition-colors"
              >
                Per E-Mail →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
