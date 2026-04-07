"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PARTNER_LOGOS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PartnerLogos() {
  return (
    <section
      className="py-24 lg:py-32 border-t border-[var(--color-border)]"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-12">
          <SectionLabel number="03" label="Vertrauen von" className="mb-4" />
          <p className="font-body text-sm text-[var(--color-muted)] max-w-md">
            Organisationen, für die ich gesprochen, beraten und gebaut habe.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-[var(--color-border)]">
          {PARTNER_LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              className="bg-[var(--color-canvas)] flex items-center justify-center py-7 px-6 group cursor-default min-h-[96px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={180}
                  height={60}
                  className={`w-auto max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${logo.xlarge ? "max-h-20" : logo.large ? "max-h-16" : logo.small ? "max-h-7" : "max-h-10"}`}
                />
              ) : (
                <span className="font-body font-600 text-sm text-[var(--color-muted)] group-hover:text-[var(--color-ink)] transition-colors duration-200 text-center leading-tight">
                  {logo.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
