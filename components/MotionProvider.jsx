"use client";

import { MotionConfig } from "framer-motion";

/**
 * Applies one motion policy to the whole app.
 * reducedMotion="user" follows the visitor's OS setting:
 * when "reduce motion" is on, transforms are skipped and only
 * opacity animates, so the page stays calm and still readable.
 */
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}