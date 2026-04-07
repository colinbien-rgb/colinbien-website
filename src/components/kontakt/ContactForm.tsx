"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/kontakt/actions";

const initialState: ContactFormState = { status: "idle" };

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Max Mustermann", required: true, autoComplete: "name" },
  { name: "email", label: "E-Mail", type: "email", placeholder: "max@beispiel.de", required: true, autoComplete: "email" },
  { name: "subject", label: "Betreff", type: "text", placeholder: "Keynote-Anfrage / Podcast-Gast / ...", required: true, autoComplete: "off" },
];

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="border border-[var(--color-forest-500)] p-8 bg-[var(--color-forest-50)]">
        <div className="w-8 h-1 bg-[var(--color-forest-500)] mb-4" aria-hidden="true" />
        <p className="font-body font-600 text-[var(--color-ink)] mb-2">
          Nachricht gesendet.
        </p>
        <p className="font-body text-sm text-[var(--color-muted)]">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate aria-label="Kontaktformular">
      <div className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2"
            >
              {field.label}
              <span className="text-[var(--color-forest-500)] ml-1" aria-hidden="true">*</span>
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              autoComplete={field.autoComplete}
              aria-describedby={state.errors?.[field.name as keyof typeof state.errors] ? `${field.name}-error` : undefined}
              aria-invalid={!!state.errors?.[field.name as keyof typeof state.errors]}
              className="w-full font-body text-sm bg-transparent border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:border-[var(--color-ink)] transition-colors"
            />
            {state.errors?.[field.name as keyof typeof state.errors] && (
              <p
                id={`${field.name}-error`}
                className="mt-1.5 font-body text-xs text-red-600"
                role="alert"
              >
                {state.errors[field.name as keyof typeof state.errors]}
              </p>
            )}
          </div>
        ))}

        {/* Message textarea */}
        <div>
          <label
            htmlFor="message"
            className="block font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2"
          >
            Nachricht
            <span className="text-[var(--color-forest-500)] ml-1" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Womit kann ich helfen?"
            required
            aria-describedby={state.errors?.message ? "message-error" : undefined}
            aria-invalid={!!state.errors?.message}
            className="w-full font-body text-sm bg-transparent border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:border-[var(--color-ink)] transition-colors resize-y min-h-[140px]"
          />
          {state.errors?.message && (
            <p
              id="message-error"
              className="mt-1.5 font-body text-xs text-red-600"
              role="alert"
            >
              {state.errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-2 font-body font-600 text-base px-6 py-4 bg-[var(--color-ink)] text-[var(--color-canvas)] hover:bg-[var(--color-forest-500)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-live="polite"
        >
          {isPending ? "Wird gesendet…" : "Nachricht senden →"}
        </button>

        <p className="font-mono text-xs text-[var(--color-muted)] text-center">
          * Pflichtfelder
        </p>
      </div>
    </form>
  );
}
