"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Curtain-style reveal.
 * The photo is always rendered; a panel in the section's own colour
 * slides up off it while the image settles from a slight zoom.
 *
 * Note: we animate a transform rather than clip-path, because
 * Framer Motion only animates clip-path on mount, not when the
 * target changes on scroll.
 */
export default function ImageReveal({ children, className = "", curtain = "bg-cream", delay = 0 }) {
  const wrapper = ["relative overflow-hidden", className].join(" ");
  const curtainClass = ["pointer-events-none absolute inset-0 z-10", curtain].join(" ");

  return (
    <div className={wrapper}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease, delay }}
      >
        {children}
      </motion.div>

      <motion.div
        aria-hidden="true"
        className={curtainClass}
        initial={{ y: "0%" }}
        whileInView={{ y: "-101%" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.3, ease, delay }}
      />
    </div>
  );
}