"use client";

import { motion } from "framer-motion";
import SoftImage from "@/components/ui/SoftImage";
import ImageReveal from "@/components/ui/ImageReveal";
import Button from "@/components/ui/Button";
import { images } from "@/lib/content";
import { fadeUp, stagger, inView } from "@/lib/motion";

const bandHeight = "h-[38svh] sm:h-[45svh] lg:h-[55svh] lg:max-h-[30rem]";

export default function ReservationCTA() {
  return (
    <section id="reserve" className="bg-ivory pt-24 lg:pt-32">
      {/* ---------- Closing statement ---------- */}
      <motion.div
        variants={stagger(0, 0.15)}
        {...inView}
        className="mx-auto max-w-2xl px-5 text-center sm:px-8"
      >
        <motion.p variants={fadeUp} className="label text-sage">
          Reservations
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mt-6 font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Your table is <em className="text-olive">waiting.</em>
        </motion.h2>

        <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-sm text-lg text-ink-soft">
          Good food, good company and a little softness.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="#reserve">Reserve a Table</Button>
          <Button href="#menu" variant="outline" withArrow>
            Explore Menu
          </Button>
        </motion.div>
      </motion.div>

      {/* ---------- Closing photograph ---------- */}
      <ImageReveal curtain="bg-ivory" className={["mt-20 w-full", bandHeight].join(" ")}>
        <SoftImage
          src={images.reservation}
          alt="A table set for guests at Softness"
          sizes="100vw"
        />
      </ImageReveal>
    </section>
  );
}