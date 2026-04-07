"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "50+", label: "Keynotes" },
  { value: "3", label: "Ventures" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-[var(--color-forest-500)]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-forest-500)]">
                Hamburg, Deutschland
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              className="font-display font-900 leading-[0.88] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(5.5rem, 18vw, 11rem)" }}
            >
              <AnimatedText text="MOIN!" delay={0.2} staggerDelay={0.06} />
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="font-body text-xl md:text-2xl font-300 text-[var(--color-muted)] tracking-tight mb-6 max-w-xl"
            >
              Ich bin Colin. Unternehmer. Speaker. Podcaster.
              <br />
              <span className="text-[var(--color-ink)] font-500">
                Für Nachhaltigkeit, KI & Transformation.
              </span>
            </motion.p>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="font-body text-base text-[var(--color-muted)] leading-relaxed max-w-lg mb-10"
            >
              Ich begleite Unternehmen dabei, Nachhaltigkeit nicht als
              Kostenfaktor, sondern als strategischen Wettbewerbsvorteil zu
              begreifen. Als Keynote Speaker, Podcaster und Gründer von drei
              Purpose-Ventures.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <Button as="a" href="/speaker" size="lg">
                Als Speaker buchen
              </Button>
              <Button as="a" href="/podcaster" variant="outline" size="lg">
                Zum Podcast
              </Button>
            </motion.div>

            {/* Mobile stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="lg:hidden grid grid-cols-3 gap-0 mt-12 border-t border-[var(--color-border)]"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-6 ${i < stats.length - 1 ? "border-r border-[var(--color-border)]" : ""} ${i > 0 ? "pl-4" : ""}`}
                >
                  <p className="font-display font-900 text-3xl leading-none tracking-[-0.04em]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="hidden lg:block relative"
          >
            {/* Photo frame */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/colin-portrait.jpg"
                alt="Colin Bien, Speaker, Podcaster und Unternehmer"
                fill
                priority
                className="object-cover object-top"
                sizes="420px"
              />
              {/* Thin forest green frame accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-forest-500)]"
                aria-hidden="true"
              />
            </div>

            {/* Stats panel overlaid at bottom-right */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-canvas)] border border-[var(--color-border)] p-5 flex flex-col gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={i < stats.length - 1 ? "pb-4 border-b border-[var(--color-border)]" : ""}
                >
                  <p className="font-display font-900 text-2xl leading-none tracking-[-0.04em] text-[var(--color-ink)]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-sm uppercase tracking-widest text-[var(--color-muted)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[var(--color-border)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
