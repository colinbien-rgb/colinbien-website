import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: {
    template: "%s | Colin Bien",
    default: "Colin Bien | Speaker, Podcaster & Unternehmer",
  },
  description:
    "Colin Bien ist Speaker, Podcaster und Unternehmer mit Fokus auf Nachhaltigkeit, KI und Transformation. Keynotes, Podcast 'Masters of Change' und drei Purpose-Ventures.",
  metadataBase: new URL("https://www.colinbien.de"),
  openGraph: {
    siteName: "Colin Bien",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Nav />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
