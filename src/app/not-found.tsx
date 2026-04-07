import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[100dvh] pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-6">
          404 / Nicht gefunden
        </p>
        <h1
          className="font-display font-900 leading-none tracking-[-0.04em] text-[var(--color-ink)] mb-8"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
        >
          Oops.
        </h1>
        <p className="font-body text-lg text-[var(--color-muted)] mb-10 max-w-md">
          Diese Seite existiert nicht. Möglicherweise wurde sie verschoben oder
          der Link ist fehlerhaft.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body font-600 text-base px-6 py-3 bg-[var(--color-ink)] text-[var(--color-canvas)] hover:bg-[var(--color-forest-500)] transition-colors"
        >
          Zurück zur Startseite →
        </Link>
      </div>
    </section>
  );
}
