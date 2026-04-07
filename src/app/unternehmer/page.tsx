import type { Metadata } from "next";
import { UnternehmerHero } from "@/components/unternehmer/UnternehmerHero";
import { VentureCard } from "@/components/unternehmer/VentureCard";
import { Lernmomente } from "@/components/unternehmer/Lernmomente";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { VENTURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Unternehmer",
  description:
    "Colin Biens drei Ventures: WeShyft (KI-ESG-Reporting), True Fabrics (ethische Mode) und nRole (Nachhaltigkeitsbildung).",
};

export default function UnternehmerPage() {
  return (
    <>
      <UnternehmerHero />
      {VENTURES.map((venture, i) => (
        <VentureCard
          key={venture.name}
          venture={venture}
          index={i}
          inverted={i % 2 === 1}
        />
      ))}
      <Lernmomente />
      <ContactTeaser />
    </>
  );
}
