import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { Credentials } from "@/components/home/Credentials";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export const metadata: Metadata = {
  title: "Colin Bien | Speaker, Podcaster & Unternehmer",
  description:
    "Colin Bien ist Speaker, Podcaster und Unternehmer mit Fokus auf Nachhaltigkeit, KI und Transformation. 15+ Jahre Erfahrung, 50+ Keynotes, 3 Ventures.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Credentials />
      <PartnerLogos />
      <ContactTeaser />
    </>
  );
}
