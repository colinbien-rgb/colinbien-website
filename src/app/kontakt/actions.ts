"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@colinbien.de",
    pass: process.env.SMTP_PASSWORD,
  },
});

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

  try {
    await transporter.sendMail({
      from: '"colinbien.de" <info@colinbien.de>',
      to: "info@colinbien.de",
      replyTo: email,
      subject: `Kontaktformular: ${subject}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>E-Mail:</strong> ${email}</p><p><strong>Nachricht:</strong><br>${message.replace(/\n/g, "<br>")}</p>`,
    });
  } catch (err) {
    console.error("E-Mail konnte nicht gesendet werden:", err);
    return {
      status: "error",
      message: "Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib direkt an info@colinbien.de.",
    };
  }

  return {
    status: "success",
    message: `Danke, ${name}! Deine Nachricht wurde empfangen. Ich melde mich innerhalb von 24 Stunden.`,
  };
}
