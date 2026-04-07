import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const references = [
  {
    org: "ESG Summit 2025",
    format: "Panel Discussion",
    title: "AI in ESG Reporting: Opportunity or Risk?",
    videoUrl: "",
  },
  {
    org: "Nachhaltigkeitscongress 2025",
    format: "Keynote",
    title: "Agenten für den Wandel: Wie künstliche Intelligenz die ESG-Arbeit transformiert",
    videoUrl: "",
  },
  {
    org: "AI Summit 2025",
    format: "Masterclass",
    title: "The AI-Powered Sustainability Manager – Tools, Trends & Transformation",
    videoUrl: "",
  },
  {
    org: "AI Summit 2025",
    format: "Pitch Finalist",
    title: "How much money is buried in your sustainability data?",
    videoUrl: "",
  },
  {
    org: "Telekom Deutschland",
    format: "Moderation",
    title: "6 Live Streams im Rahmen der Nachhaltigkeit #Dabei Kampagne",
    videoUrl: "",
  },
  {
    org: "TEDx Lüneburg",
    format: "Impuls",
    title: "Breaking the Loop of Anxiety",
    videoUrl: "https://www.youtube.com/watch?v=DSLTuelMgRw&t=206s",
  },
  {
    org: "DUB Unternehmer Magazin",
    format: "Keynote",
    title: "Wie Unternehmen nachhaltiger werden",
    videoUrl: "",
  },
  {
    org: "Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung",
    format: "Paneldiskussion",
    title: "Tag der offenen Tür: Eine Welt, unsere Verantwortung",
    videoUrl: "",
  },
  {
    org: "Landeswirtschaftskammer Niedersachsen",
    format: "Keynote",
    title: "Nachhaltiges Wirtschaften als Zukunftschance in Krisenzeiten",
    videoUrl: "",
  },
  {
    org: "Tag der Beteiligungsverwaltung 2022",
    format: "Keynote",
    title: "Umdenken in der nachhaltigen Transformation",
    videoUrl: "",
  },
  {
    org: "AI Summit 2024",
    format: "Masterclass",
    title: "From Disclosure To Impact – The AI Advantage in ESG Reporting",
    videoUrl: "",
  },
  {
    org: "DMEA",
    format: "Paneldiskussion",
    title: "Green Health: Mit innovativen Technologien zu mehr Nachhaltigkeit im Gesundheitswesen",
    videoUrl: "",
  },
  {
    org: "Impact Festival",
    format: "Masterclass",
    title: "The Dark Side of ESG",
    videoUrl: "",
  },
  {
    org: "Profi Impuls",
    format: "Keynote",
    title: "Managing Sustainability with Ease",
    videoUrl: "",
  },
  {
    org: "RMA Risk Management & Rating Association e.V.",
    format: "Keynote",
    title: "Nachhaltigkeitsberichterstattung & Risikomanagement in der Praxis",
    videoUrl: "",
  },
  {
    org: "KOMM CSR Kommunikationskongress",
    format: "Paneldiskussion",
    title: "Wie Unternehmen nachhaltiger werden",
    videoUrl: "https://www.youtube.com/watch?v=Aa-HwtRasBc",
  },
  {
    org: "Deep Dive Club",
    format: "Impuls",
    title: "Ist Nachhaltigkeit 90er?",
    videoUrl: "",
  },
  {
    org: "12min.me",
    format: "Impuls",
    title: "Aufgabe: Jede(r) kann aktiv werden",
    videoUrl: "https://www.youtube.com/watch?v=iXYDkvr6Tlk",
  },
  {
    org: "HIP Health Innovation Port",
    format: "Paneldiskussion",
    title: "Innovationspreis 2022: Sustainable Health",
    videoUrl: "https://www.youtube.com/watch?v=e-PZTJG1W44",
  },
];

export function SpeakingReferences() {
  return (
    <section className="py-24 lg:py-32 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <SectionLabel label="Ausgewählte Referenzen" />
        </ScrollReveal>

        <div className="border-t border-[var(--color-border)]">
          {references.map((ref, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 py-5 border-b border-[var(--color-border)] group">
                {/* Format tag */}
                <div className="flex items-start pt-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-forest-500)]">
                    {ref.format}
                  </span>
                </div>

                {/* Content */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-body font-600 text-sm text-[var(--color-ink)] leading-snug mb-0.5">
                      {ref.org}
                    </p>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-snug">
                      {ref.title}
                    </p>
                  </div>

                  {ref.videoUrl && (
                    <a
                      href={ref.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-forest-500)] transition-colors flex items-center gap-1.5 mt-0.5"
                      aria-label={`Video: ${ref.title}`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" />
                      </svg>
                      Video
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
