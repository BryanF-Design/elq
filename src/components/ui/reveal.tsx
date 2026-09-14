"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, useful when several Reveals sit in a row. */
  delay?: number;
  /** Distance the content travels in, in pixels. */
  distance?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  as?: "div" | "span" | "li";
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  direction = "up",
  duration = 0.6,
  once = true,
  as = "div",
}: RevealProps) {
  const reduceMotion = usePrefersReducedMotion();

  const offsets: Record<typeof direction, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : offsets[direction]),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const viewport = { once, margin: "-10% 0px -10% 0px" as const };

  if (as === "span") {
    return (
      <motion.span className={className} initial="hidden" whileInView="visible" viewport={viewport} variants={variants}>
        {children}
      </motion.span>
    );
  }

  if (as === "li") {
    return (
      <motion.li className={className} initial="hidden" whileInView="visible" viewport={viewport} variants={variants}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={viewport} variants={variants}>
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
};

export function StaggerGroup({ children, className, stagger = 0.08, once = true }: StaggerProps) {
  const reduceMotion = usePrefersReducedMotion();

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : stagger,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};
