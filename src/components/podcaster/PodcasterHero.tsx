import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SOCIAL_LINKS } from "@/lib/constants";

const platforms = [
  { name: "Spotify", href: SOCIAL_LINKS.spotify },
  { name: "Apple Podcasts", href: "#" },
  { name: "YouTube", href: SOCIAL_LINKS.youtube },
];

export function PodcasterHero() {
  return (
    <section className="pt-32 pb-24 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
          {/* Text */}
          <div>
            <ScrollReveal className="mb-8">
              <SectionLabel label="Podcaster" />
            </ScrollReveal>

            <h1
              className="font-display font-900 leading-[0.88] tracking-[-0.04em] text-[var(--color-ink)] mb-8"
              style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
            >
              <AnimatedText text="Masters" delay={0.1} staggerDelay={0.04} />
              <br />
              <AnimatedText text="of Change." delay={0.55} staggerDelay={0.04} />
            </h1>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-lg text-[var(--color-muted)] leading-relaxed max-w-xl mb-10">
                Tiefgehende Gespräche mit Führungskräften, Gründern und Denkern
                über Transformation, Nachhaltigkeit und die Wirtschaft von
                morgen. Keine Buzzwords, keine PR-Phrasen. Echte Einblicke.
              </p>

              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body font-600 text-sm px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white hover:border-[var(--color-ink)] transition-colors"
                  >
                    {platform.name} →
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Podcast cover */}
          <ScrollReveal delay={0.2} direction="left">
            <div className="relative aspect-square overflow-hidden shadow-2xl">
              <Image
                src="/images/podcast/masters-of-change.jpg"
                alt="Masters of Change Podcast Cover"
                fill
                priority
                className="object-cover"
                sizes="320px"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
