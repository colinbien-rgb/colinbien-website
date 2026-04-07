import { KEYNOTE_TOPICS } from "@/lib/constants";
import { Tag } from "@/components/ui/Tag";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TopicCards() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <SectionLabel label="Themenfelder" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {KEYNOTE_TOPICS.map((topic, i) => (
            <ScrollReveal key={topic.title} delay={i * 0.08} className="h-full">
              <div className="p-8 bg-[var(--color-canvas)] h-full group hover:bg-[var(--color-canvas-subtle)] transition-colors">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-body font-700 text-xl text-[var(--color-ink)] mb-3 tracking-tight">
                  {topic.title}
                </h3>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                  {topic.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {topic.tags.map((tag) => (
                    <Tag key={tag} variant="default">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
