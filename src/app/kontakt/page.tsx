import type { Metadata } from "next";
import { ContactForm } from "@/components/kontakt/ContactForm";
import { ContactInfo } from "@/components/kontakt/ContactInfo";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu Colin Bien aufnehmen: für Speaker-Anfragen, Podcast-Kooperationen und strategische Projekte.",
};

export default function KontaktPage() {
  return (
    <section className="pt-32 pb-24 min-h-[100dvh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <ContactInfo />
          <div className="lg:pt-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
