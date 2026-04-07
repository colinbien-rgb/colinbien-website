import type { Metadata } from "next";
import { SpeakerHero } from "@/components/speaker/SpeakerHero";
import { BookableKeynotes } from "@/components/speaker/BookableKeynotes";
import { TopicCards } from "@/components/speaker/TopicCards";
import { SpeakingReferences } from "@/components/speaker/SpeakingReferences";
import { ConsultingTeaser } from "@/components/speaker/ConsultingTeaser";
import { BookingCTA } from "@/components/speaker/BookingCTA";

export const metadata: Metadata = {
  title: "Speaker",
  description:
    "Colin Bien als Keynote Speaker buchen. 50+ Vorträge zu Nachhaltigkeit, ESG, Kreislaufwirtschaft, KI & Transformation.",
};

export default function SpeakerPage() {
  return (
    <>
      <SpeakerHero />
      <BookableKeynotes />
      <TopicCards />
      <SpeakingReferences />
      <ConsultingTeaser />
      <BookingCTA />
    </>
  );
}
