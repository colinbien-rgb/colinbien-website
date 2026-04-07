"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SOCIAL_LINKS } from "@/lib/constants";

export function ContactTeaser() {
  return (
    <section
      className="py-24 lg:py-32 bg-[var(--color-ink)]"
      aria-labelledby="contact-teaser-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end">
          {/* Text */}
          <div>
            <ScrollReveal direction="none">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-forest-200)] mb-6 block">
                04 / Kontakt
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="font-display font-900 leading-[0.9] tracking-[-0.04em] text-white mb-8"
                style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
              >
                Lass uns
                <br />
                <span className="text-[var(--color-forest-500)]">sprechen.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-base text-white/60 leading-relaxed max-w-lg">
                Ob als Speaker für Ihre Konferenz, als Gast im Podcast oder für
                strategische Projekte. Ich freue mich auf Ihre Anfrage.
              </p>
            </ScrollReveal>
          </div>

          {/* CTAs */}
          <ScrollReveal delay={0.25} direction="left">
            <div className="flex flex-col gap-4 items-start lg:items-end w-full lg:w-auto">
              <Link
                href="/kontakt"
                className="flex justify-between items-center gap-3 font-body font-600 text-lg px-8 py-4 bg-white text-[var(--color-ink)] hover:bg-[var(--color-forest-500)] hover:text-white transition-colors duration-200 group w-full"
              >
                <span>Keynote anfragen</span>
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  →
                </motion.span>
              </Link>

              <Link
                href="/kontakt"
                className="flex justify-between items-center gap-3 font-body font-600 text-lg px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-[var(--color-ink)] transition-colors duration-200 group w-full"
              >
                <span>Beratung anfragen</span>
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  →
                </motion.span>
              </Link>

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="font-mono text-sm text-white/40 hover:text-white transition-colors"
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Decorative bottom line */}
        <ScrollReveal delay={0.4} className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-mono text-xs uppercase tracking-widest text-white/30">
              Gänsemarkt 33, Hamburg
            </p>
            <div className="flex gap-6">
              {[
                { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
                { label: "Spotify", href: SOCIAL_LINKS.spotify },
                { label: "YouTube", href: SOCIAL_LINKS.youtube },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
