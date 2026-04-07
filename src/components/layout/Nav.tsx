"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--color-canvas)]/95 backdrop-blur-sm border-b border-[var(--color-border)]"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-body font-700 text-xl tracking-tight text-[var(--color-ink)] hover:text-[var(--color-forest-500)] transition-colors"
            aria-label="Dr. Colin Bien — Startseite"
          >
            Dr. Colin Bien
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-body text-sm font-500 tracking-tight transition-colors duration-200 relative py-1",
                      isActive
                        ? "text-[var(--color-forest-500)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-px left-0 right-0 h-px bg-[var(--color-forest-500)]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/kontakt"
            className="hidden md:inline-flex items-center gap-2 font-body text-sm font-600 px-5 py-2 bg-[var(--color-ink)] text-[var(--color-canvas)] hover:bg-[var(--color-forest-500)] transition-colors duration-200"
            aria-label="Kontakt aufnehmen"
          >
            Kontakt
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 cursor-pointer"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[var(--color-ink)]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-[var(--color-ink)]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[var(--color-ink)]"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--color-canvas)] flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex-1 flex flex-col justify-center px-8">
              <nav aria-label="Mobile Navigation">
                <ul className="space-y-2" role="list">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "block font-body text-5xl font-700 tracking-tight py-2 transition-colors",
                          pathname === link.href
                            ? "text-[var(--color-forest-500)]"
                            : "text-[var(--color-ink)] hover:text-[var(--color-forest-500)]"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="px-8 pb-12 border-t border-[var(--color-border)] pt-8">
              <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">
                colin@colinbien.de
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
