"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  const errors: ContactFormState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = "Bitte gib deinen Namen ein (mindestens 2 Zeichen).";
  }
  if (!email || !isValidEmail(email)) {
    errors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
  }
  if (!subject || subject.length < 3) {
    errors.subject = "Bitte gib einen Betreff ein.";
  }
  if (!message || message.length < 10) {
    errors.message =
      "Bitte schreib eine Nachricht (mindestens 10 Zeichen).";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  // TODO: integrate with email service (e.g. Resend, Nodemailer)
  // For now, log to console (replace with actual sending logic)
  console.log("Contact form submission:", { name, email, subject, message });

  // Simulate a small delay
  await new Promise((r) => setTimeout(r, 500));

  return {
    status: "success",
    message: `Danke, ${name}! Deine Nachricht wurde empfangen. Ich melde mich innerhalb von 24 Stunden.`,
  };
}
