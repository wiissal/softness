"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Curtain-style reveal: the frame unveils from the bottom
 * while the photo settles from a slight zoom.
 */
export default function ImageReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.4, ease, delay }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.8, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}