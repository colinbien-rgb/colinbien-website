import type { Metadata } from "next";
import { PodcasterHero } from "@/components/podcaster/PodcasterHero";
import { ShowDescription } from "@/components/podcaster/ShowDescription";
import { PodcastSeries } from "@/components/podcaster/PodcastSeries";
import { PodcastCredentials } from "@/components/podcaster/PodcastCredentials";
import { GuestAppearances } from "@/components/podcaster/GuestAppearances";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export const metadata: Metadata = {
  title: "Podcaster",
  description:
    "Masters of Change, der Podcast von Colin Bien über Nachhaltigkeit, Transformation und die Wirtschaft von morgen.",
};

export default function PodcasterPage() {
  return (
    <>
      <PodcasterHero />
      <ShowDescription />
      <PodcastSeries />
      <PodcastCredentials />
      <GuestAppearances />
      <ContactTeaser />
    </>
  );
}
