export interface NavLink {
  href: string;
  label: string;
}

export interface PartnerLogo {
  name: string;
  src?: string;
  large?: boolean;
  xlarge?: boolean;
  small?: boolean;
}

export interface Venture {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  href?: string;
  status: "aktiv" | "exit" | "eingestellt";
  statusLabel?: string;
}

export interface KeynoteTopic {
  title: string;
  description: string;
  tags: string[];
}
