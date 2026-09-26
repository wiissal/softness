"use client";

import { motion } from "framer-motion";
import DishMarquee from "@/components/DishMarquee";
import { fadeUp, stagger, inView } from "@/lib/motion";

export default function BrandStatement() {
  return (
    <section id="story" className="flex min-h-svh flex-col justify-center bg-ivory py-24 lg:py-28">
      <motion.div
        variants={stagger(0, 0.15)}
        {...inView}
        className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12"
      >
        <motion.p variants={fadeUp} className="label text-sage">
          Our philosophy
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Good food should <em className="text-olive">feel</em> good.
        </motion.h2>

        <motion.p variants={fadeUp} className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
          At Softness, we believe beautiful food starts with simple ingredients, thoughtful
          preparation and a little care.
        </motion.p>
      </motion.div>

      <div className="mt-14 lg:mt-20">
        <DishMarquee />
      </div>
    </section>
  );
}