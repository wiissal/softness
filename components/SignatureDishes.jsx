"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SoftImage from "@/components/ui/SoftImage";
import { dishes } from "@/lib/content";
import { fadeUp, stagger, inView } from "@/lib/motion";

// Same height for every dish — the rhythm comes from column position and width
const frameHeight = "h-[22rem] sm:h-[26rem] lg:h-[28rem]";

const layouts = [
  {
    image: "lg:col-span-6 lg:col-start-1 lg:row-start-1",
    text: "lg:col-span-4 lg:col-start-8 lg:row-start-1",
  },
  {
    image: "lg:col-span-5 lg:col-start-8 lg:row-start-1",
    text: "lg:col-span-4 lg:col-start-2 lg:row-start-1",
  },
  {
    image: "lg:col-span-5 lg:col-start-2 lg:row-start-1",
    text: "lg:col-span-4 lg:col-start-8 lg:row-start-1",
  },
  {
    image: "lg:col-span-6 lg:col-start-7 lg:row-start-1",
    text: "lg:col-span-4 lg:col-start-2 lg:row-start-1",
  },
];

const frameClass = "relative h-full w-full overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]";
const imageClass = "transition-transform duration-[900ms] ease-soft group-hover:scale-[1.06]";
const nameClass =
  "mt-4 font-display text-3xl transition-transform duration-700 ease-soft group-hover:translate-x-1 lg:text-4xl";
const arrowClass =
  "size-5 -translate-x-2 opacity-0 transition-all duration-700 ease-soft group-hover:translate-x-0 group-hover:opacity-100";

export default function SignatureDishes() {
  return (
    <section id="menu" className="grain bg-cream px-5 pb-24 pt-14 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16">
      <div className="mx-auto max-w-[1440px]">
        {/* ---------- Section heading ---------- */}
        <motion.div variants={stagger(0, 0.15)} {...inView}>
          <motion.p variants={fadeUp} className="label text-sage">
            Signature dishes
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 max-w-xl font-display text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            A little taste of <em className="text-olive">Softness.</em>
          </motion.h2>
        </motion.div>

        {/* ---------- Dishes ---------- */}
                <ul className="mt-10 space-y-16 lg:mt-12 lg:space-y-20">
          {dishes.map((dish, i) => {
            const layout = layouts[i];
            const frameWrapper = [layout.image, frameHeight].join(" ");

            return (
              <li key={dish.name} className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
                <article className="group contents">
                  <div className={frameWrapper}>
                    <div className={frameClass}>
                      <SoftImage
                        src={dish.image}
                        alt={dish.name}
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className={imageClass}
                      />
                    </div>
                  </div>

                  <motion.div variants={stagger(0.1, 0.08)} {...inView} className={layout.text}>
                    <motion.span variants={fadeUp} className="label text-sage">
                      0{i + 1}
                    </motion.span>

                    <motion.h3 variants={fadeUp} className={nameClass}>
                      {dish.name}
                    </motion.h3>

                    <motion.p variants={fadeUp} className="mt-3 text-ink-soft">
                      {dish.notes}
                    </motion.p>

                    <motion.div
                      variants={fadeUp}
                      className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4"
                    >
                      <span className="font-display text-xl">{dish.price}</span>
                      <ArrowUpRight aria-hidden="true" className={arrowClass} />
                    </motion.div>
                  </motion.div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* ---------- Link to the full menu ---------- */}
        <motion.div variants={stagger(0, 0.1)} {...inView} className="mt-20">
          <motion.a
            variants={fadeUp}
            href="#reserve"
            className="group inline-flex items-center gap-3 font-display text-2xl lg:text-3xl"
          >
            Explore the Menu
            <ArrowUpRight
              aria-hidden="true"
              className="size-6 transition-transform duration-700 ease-soft group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
          <motion.span variants={fadeUp} className="mt-3 block max-w-xs text-sm text-ink-soft">
            Four favourites from a menu that changes with the season.
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}