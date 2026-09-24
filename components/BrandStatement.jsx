"use client";

import { motion } from "framer-motion";
import SoftImage from "@/components/ui/SoftImage";
import ImageReveal from "@/components/ui/ImageReveal";
import { images } from "@/lib/content";
import { fadeUp, stagger, inView } from "@/lib/motion";

const frameHeight = "h-[20rem] sm:h-[26rem] lg:h-[calc(100svh-14rem)] lg:max-h-[34rem]";

export default function BrandStatement() {
  return (
    <section
      id="about"
      className="flex min-h-svh items-center bg-ivory px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* ---------- Statement ---------- */}
        <motion.div variants={stagger(0, 0.15)} {...inView} className="lg:col-span-6 lg:col-start-2">
          <motion.p variants={fadeUp} className="label text-sage">
            Our philosophy
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Good food should <em className="text-olive">feel</em> good.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft"
          >
            At Softness, we believe beautiful food starts with simple ingredients, thoughtful
            preparation and a little care.
          </motion.p>
        </motion.div>

        {/* ---------- Ingredient photograph ---------- */}
        <div className="lg:col-span-4">
          <ImageReveal
            curtain="bg-ivory"
            className={["w-full rounded-[2rem] lg:rounded-[2.5rem]", frameHeight].join(" ")}
          >
            <SoftImage
              src={images.brand}
              alt="Fresh ingredients prepared at Softness"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}