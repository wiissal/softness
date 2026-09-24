"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SoftImage from "@/components/ui/SoftImage";
import { images } from "@/lib/content";
import { fadeUp, stagger, inView } from "@/lib/motion";

// Cream fades in from the left on desktop, from the bottom on mobile,
// so the type sits on a soft area instead of a dark overlay
const scrimDesktop = "hidden lg:block absolute inset-0 bg-linear-to-r from-cream via-cream/75 to-transparent";
const scrimMobile = "lg:hidden absolute inset-0 bg-linear-to-t from-cream via-cream/70 to-transparent";

export default function Atmosphere() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // The photo drifts slower than the page, so the text floats over it
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="atmosphere"
      ref={sectionRef}
      className="relative flex min-h-svh items-end overflow-hidden bg-cream lg:items-center"
    >
      {/* ---------- Photograph ---------- */}
      <motion.div style={{ y: imageY }} className="absolute inset-x-0 -top-[10%] h-[120%]">
        <SoftImage
          src={images.atmosphere}
          alt="The dining room at Softness"
          sizes="100vw"
        />
      </motion.div>

      <div aria-hidden="true" className={scrimDesktop} />
      <div aria-hidden="true" className={scrimMobile} />

      {/* ---------- Overlay text ---------- */}
      <motion.div
        variants={stagger(0, 0.15)}
        {...inView}
        className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:py-32"
      >
        <motion.p variants={fadeUp} className="label text-olive">
          The room
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mt-6 max-w-xl font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:max-w-2xl lg:text-7xl"
        >
          Come for the food.
          <br />
          Stay for the <em className="text-olive">feeling.</em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft"
        >
          A warm space made for slow afternoons, long conversations and beautiful meals.
        </motion.p>
      </motion.div>
    </section>
  );
}