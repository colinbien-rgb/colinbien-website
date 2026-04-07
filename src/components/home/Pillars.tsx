"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pillars = [
  {
    number: "01",
    title: "Speaker",
    subtitle: "Keynotes, die bleiben.",
    description:
      "Von Nachhaltigkeitsstrategie bis KI-Transformation: Ich spreche auf Konferenzen, bei Unternehmen und auf TEDx über das, was die Wirtschaft von morgen antreibt.",
    href: "/speaker",
    tags: ["Keynote", "Workshop", "Panel"],
  },
  {
    number: "02",
    title: "Podcaster",
    subtitle: "Masters of Change.",
    description:
      "Tiefgehende Gespräche mit Führungskräften, Gründern und Denkern über Transformation, Nachhaltigkeit und die Zukunft der Wirtschaft.",
    href: "/podcaster",
    tags: ["Spotify", "Apple Podcasts", "YouTube"],
  },
  {
    number: "03",
    title: "Unternehmer",
    subtitle: "Drei Ventures. Ein Ziel.",
    description:
      "WeShyft, True Fabrics und nRole: drei Unternehmen, die beweisen, dass Nachhaltigkeit und wirtschaftlicher Erfolg kein Widerspruch sind.",
    href: "/unternehmer",
    tags: ["WeShyft", "True Fabrics", "nRole"],
  },
];

export function Pillars() {
  return (
    <section
      className="py-24 lg:py-32 border-t border-[var(--color-border)]"
      aria-labelledby="pillars-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <SectionLabel number="01" label="Was ich tue" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] items-stretch">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.number} delay={i * 0.12} className="h-full">
              <Link href={pillar.href} className="block group h-full">
                <motion.div
                  className="relative p-8 lg:p-10 bg-[var(--color-canvas)] h-full cursor-pointer transition-colors duration-200 group-hover:bg-[var(--color-ink)]"
                  whileHover={{ scale: 1 }}
                >
                  {/* Number */}
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-border)] group-hover:text-white/20 transition-colors mb-8">
                    {pillar.number}
                  </p>

                  {/* Title */}
                  <h3 className="font-display font-900 text-5xl lg:text-6xl leading-none tracking-[-0.03em] text-[var(--color-ink)] group-hover:text-white transition-colors mb-4">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-body font-600 text-sm text-[var(--color-forest-500)] group-hover:text-[var(--color-forest-200)] transition-colors mb-4 uppercase tracking-wide">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm text-[var(--color-muted)] group-hover:text-white/70 transition-colors leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-[var(--color-border)] text-[var(--color-muted)] group-hover:border-white/20 group-hover:text-white/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow CTA */}
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] group-hover:text-white transition-colors">
                    <span>Mehr erfahren</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      →
                    </motion.span>
                  </div>

                  {/* Green accent corner */}
                  <div
                    className="absolute top-0 left-0 w-0 h-1 bg-[var(--color-forest-500)] group-hover:w-full transition-all duration-300 ease-out"
                    aria-hidden="true"
                  />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
