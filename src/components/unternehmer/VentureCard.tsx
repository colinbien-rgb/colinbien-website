"use client";

import { Tag } from "@/components/ui/Tag";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Venture } from "@/types";

interface VentureCardProps {
  venture: Venture;
  index: number;
  inverted?: boolean;
}

export function VentureCard({ venture, index, inverted = false }: VentureCardProps) {
  return (
    <ScrollReveal>
      <div
        className={`py-16 lg:py-24 border-t border-[var(--color-border)] ${inverted ? "bg-[var(--color-canvas-subtle)]" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-24 items-start">
            {/* Number */}
            <div className="lg:w-24">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                0{index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                {/* Name + Status */}
                <div className="flex items-start gap-4 mb-4 flex-wrap">
                  <h2
                    className="font-display font-900 leading-none tracking-[-0.03em] text-[var(--color-ink)]"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
                  >
                    {venture.name}
                  </h2>
                  <span className={`mt-2 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 self-start ${
                    venture.status === "aktiv"
                      ? "bg-[var(--color-forest-500)] text-white"
                      : venture.status === "exit"
                      ? "bg-[var(--color-ink)] text-white"
                      : "border border-[var(--color-border)] text-[var(--color-muted)]"
                  }`}>
                    {venture.statusLabel}
                  </span>
                </div>

                {/* Tagline */}
                <p className="font-body font-600 text-base text-[var(--color-forest-500)] uppercase tracking-wide mb-6">
                  {venture.tagline}
                </p>

                {/* Description */}
                <p className="font-body text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mb-8">
                  {venture.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {venture.tags.map((tag) => (
                    <Tag key={tag} variant="default">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {venture.href && (
                <div className="flex-shrink-0">
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body font-600 text-sm px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white hover:border-[var(--color-ink)] transition-colors whitespace-nowrap"
                    aria-label={`${venture.name} besuchen`}
                  >
                    Website besuchen →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
