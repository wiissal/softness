"use client";

import { motion } from "framer-motion";
import SoftImage from "@/components/ui/SoftImage";
import { galleryImages } from "@/lib/menu";

const cardClass = "relative h-[14rem] w-[11rem] shrink-0 overflow-hidden rounded-[1.25rem] bg-sand sm:h-[17rem] sm:w-[13rem] lg:h-[20rem] lg:w-[15rem]";
const fadeLeft = "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-ivory to-transparent lg:w-28";
const fadeRight = "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-ivory to-transparent lg:w-28";

// The list is rendered twice; when the first copy has scrolled
// fully out of view (-50%), the animation loops seamlessly.
const strip = [...galleryImages, ...galleryImages];

export default function DishMarquee() {
  return (
    <div className="relative overflow-hidden">
      <motion.ul
        className="flex w-max gap-4 lg:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {strip.map((item, i) => (
          <li key={item.name + i} className={cardClass}>
            <SoftImage src={item.src} alt={item.name} sizes="15rem" />
          </li>
        ))}
      </motion.ul>

      <div aria-hidden="true" className={fadeLeft} />
      <div aria-hidden="true" className={fadeRight} />
    </div>
  );
}