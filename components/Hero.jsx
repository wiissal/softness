"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SoftImage from "@/components/ui/SoftImage";
import Button from "@/components/ui/Button";
import { images } from "@/lib/content";
import { ease } from "@/lib/motion";

const headline = ["Food made", "with softness."];

const container = {
  hidden: {},
  show: { transition: { delayChildren: 0.5, staggerChildren: 0.12 } },
};

const riseIn = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 1.1, ease } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

// Height is driven by the viewport so the hero always fits one screen
const frameHeight = "h-[46svh] sm:h-[54svh] lg:h-[calc(100svh-11rem)] lg:max-h-[44rem]";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="grain relative flex min-h-svh items-center overflow-hidden bg-cream px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-14 lg:pt-28"
    >
      {/* Organic shape behind the photo */}
      <motion.div
        aria-hidden="true"
        style={{ y: blobY }}
        className="pointer-events-none absolute -right-24 top-10 hidden size-[34rem] rounded-blob bg-sage-soft/60 lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-8 lg:grid-cols-12">
        {/* ---------- Text column ---------- */}
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-5">
          <motion.p variants={fadeIn} className="label text-olive">
            Fresh · Local · Seasonal
          </motion.p>

          <h1 className="mt-5 font-display text-[3rem] leading-[0.95] sm:text-6xl lg:text-[4.75rem] xl:text-[5.5rem]">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span variants={riseIn} className="block">
                  {i === 1 ? (
                    <>
                      with <em className="text-olive">softness.</em>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={fadeIn} className="mt-6 max-w-sm leading-relaxed text-ink-soft">
            Fresh ingredients, thoughtful cooking and simple moments made to be shared.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/menu" withArrow>
              Explore Menu
            </Button>
            <Button href="#reserve" variant="outline">
              Reserve a Table
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-10 hidden items-center gap-3 text-ink-soft xl:flex"
          >
            <ArrowDown className="size-4 animate-bounce" strokeWidth={1.5} />
            <span className="label">Scroll</span>
          </motion.div>
        </motion.div>

        {/* ---------- Image column ---------- */}
        <motion.div style={{ y: imageY }} className="lg:col-span-6 lg:col-start-7">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.6, ease, delay: 0.15 }}
            className={"relative w-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] " + frameHeight}
          >
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease, delay: 0.15 }}
              className="absolute inset-0"
            >
              <SoftImage
                src={images.hero}
                alt="A dish served at Softness"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}