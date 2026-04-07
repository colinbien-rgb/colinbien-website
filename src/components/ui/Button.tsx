"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  showArrow?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  showArrow = true,
  children,
  className,
  as: Tag = "button",
  href,
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  const base =
    "inline-flex items-center gap-2 font-body font-600 tracking-tight transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]";

  const variants = {
    primary:
      "bg-[var(--color-ink)] text-[var(--color-canvas)] hover:bg-[var(--color-forest-500)]",
    outline:
      "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-canvas)]",
    ghost:
      "text-[var(--color-ink)] hover:text-[var(--color-forest-500)] underline underline-offset-4",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <motion.span
          animate={{ x: hovered ? 5 : 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          aria-hidden="true"
        >
          →
        </motion.span>
      )}
    </>
  );

  if (Tag === "a" && href) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], sizes[size], className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {content}
    </button>
  );
}
