import type { NavLink, PartnerLogo, Venture, KeynoteTopic } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "/speaker", label: "Speaker" },
  { href: "/podcaster", label: "Podcaster" },
  { href: "/unternehmer", label: "Unternehmer" },
  { href: "/kontakt", label: "Kontakt" },
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: "Deutsche Telekom", src: "/images/logos/telekom.svg" },
  { name: "DIHK", src: "/images/logos/dihk.svg" },
  { name: "TEDx", src: "/images/logos/tedx.png", small: true },
  { name: "European Court of Auditors", src: "/images/logos/eca.svg", large: true },
  { name: "ESCP Business School", src: "/images/logos/escp.png" },
  { name: "Körber Stiftung", src: "/images/logos/koerber-stiftung.png" },
  { name: "Leuphana Universität", src: "/images/logos/leuphana.svg" },
  { name: "GLS Bank", src: "/images/logos/gls-bank.svg" },
  { name: "Rat f. Nachh. Entwicklung", src: "/images/logos/rat-nachhaltige-entwicklung.png", large: true },
  { name: "AI.Hamburg", src: "/images/logos/ai-hamburg.png" },
  { name: "HafenCity Hamburg", src: "/images/logos/hafencity.png" },
  { name: "Health Innovation Port", src: "/images/logos/hip.png" },
  { name: "CA controller akademie", src: "/images/logos/ca-controller-akademie.png" },
  { name: "DUP", src: "/images/logos/dup.png", large: true },
  { name: "LWK Niedersachsen", src: "/images/logos/lwk-niedersachsen.svg", small: true },
  { name: "PROLOG Innovation", src: "/images/logos/prolog-innovation.png", small: true },
  { name: "gebana", src: "/images/logos/gebana.png" },
  { name: "12min.me", src: "/images/logos/12min-me.png" },
  { name: "KOMM CSR Kongress", src: "/images/logos/komm-csr.png" },
  { name: "revive", src: "/images/logos/revive.png" },
  { name: "BMZ", src: "/images/logos/bmz.svg", xlarge: true },
  { name: "TU Chemnitz", src: "/images/logos/tu-chemnitz.svg", large: true },
  { name: "DMEA", src: "/images/logos/dmea.svg", small: true },
  { name: "Impact Hub", src: "/images/logos/impact-hub.svg" },
  { name: "HUB31", src: "/images/logos/HUB31.png" },
];

export const VENTURES: Venture[] = [
  {
    name: "WeShyft",
    tagline: "KI-gestütztes ESG- & Klimamanagement",
    description:
      "WeShyft verbindet KI-Technologie mit Expertenberatung: Von ESG-Reporting nach ESRS, GRI und DNK über Klimabilanzierung (Scope 1–3) bis zur doppelten Wesentlichkeitsanalyse. Human-led, tech-powered. 70% schneller als herkömmliche Prozesse.",
    tags: ["KI", "ESG", "Klimabilanzierung", "SaaS", "Beratung"],
    href: "https://weshyft.com",
    status: "aktiv",
    statusLabel: "Aktiv",
  },
  {
    name: "True Fabrics",
    tagline: "Aid & Trade: Textilien mit Wirkung",
    description:
      "True Fabrics schuf einen europäischen Absatzmarkt für fair gehandelte Textilien aus Entwicklungsländern. Das Aid & Trade Prinzip verband wirtschaftliche Prosperität durch fairen Handel mit direkter Wirkung: 10% der Umsätze wurden gespendet. 2020 erfolgreich verkauft.",
    tags: ["E-Commerce", "Textilien", "Aid & Trade", "Impact"],
    href: "https://truefabrics.de",
    status: "exit",
    statusLabel: "Exit 2020",
  },
  {
    name: "nRole",
    tagline: "Nachhaltigkeitsbildung für Organisationen",
    description:
      "nRole war eine Lernplattform, die Unternehmen dabei half, Nachhaltigkeitskompetenz organisationsweit aufzubauen: praxisnah, skalierbar und messbar. Von der Führungsebene bis zur Fachkraft.",
    tags: ["EdTech", "Nachhaltigkeit", "Learning", "B2B"],
    href: "",
    status: "eingestellt",
    statusLabel: "Eingestellt",
  },
];

export const KEYNOTE_TOPICS: KeynoteTopic[] = [
  {
    title: "Nachhaltige Geschäftsmodelle",
    description:
      "Wie Unternehmen Profitabilität und ökologische Verantwortung nicht als Widerspruch, sondern als Synergie begreifen. Mit konkreten Frameworks und Erfolgsbeispielen.",
    tags: ["Business", "Strategie"],
  },
  {
    title: "ESG & Berichterstattung",
    description:
      "Von der regulatorischen Pflicht zur strategischen Chance: Wie ESG-Reporting Unternehmen stärkt und welche Rolle KI dabei spielt.",
    tags: ["ESG", "Regulatorik", "KI"],
  },
  {
    title: "Kreislaufwirtschaft",
    description:
      "Circular Economy als Geschäftschance: Wie Unternehmen durch geschlossene Materialkreisläufe Kosten senken, Ressourcen sichern und neue Märkte erschließen.",
    tags: ["Circular Economy", "Innovation"],
  },
  {
    title: "KI & Transformation",
    description:
      "Künstliche Intelligenz verändert Branchen in einer Geschwindigkeit, die kaum jemand antizipiert hat. Wie Unternehmen die Transformation proaktiv gestalten statt reaktiv erleben.",
    tags: ["KI", "Transformation", "Zukunft"],
  },
  {
    title: "Nachhaltig Gründen",
    description:
      "Drei Ventures, ein Ziel: was es bedeutet, Unternehmen von Grund auf nach den Prinzipien der Nachhaltigkeit aufzubauen und welche Fehler dabei vermieden werden sollten.",
    tags: ["Entrepreneurship", "Startups"],
  },
  {
    title: "Zukunft der Arbeit",
    description:
      "Wie sieht sinnstiftende Arbeit in einer Welt der Automatisierung und des Klimawandels aus? Was Unternehmen heute tun müssen, um morgen noch attraktive Arbeitgeber zu sein.",
    tags: ["Future of Work", "HR"],
  },
];

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/colinbien",
  spotify: "https://open.spotify.com/show/0FPQGoK0wgnTu8VPwDu4oG?si=858ada6358ae4e58",
  youtube: "https://www.youtube.com/@colinbien6520",
  email: "colin_bien@web.de",
};

export const SITE_URL = "https://www.colinbien.de";
