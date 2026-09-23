"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/content";
import { ease } from "@/lib/motion";

const headerBase = "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-soft";
const headerScrolled = "border-b border-ink/5 bg-cream/75 py-3 backdrop-blur-xl";
const headerTop = "bg-transparent py-5 md:py-7";

const logoBase = "font-display font-medium tracking-[0.18em] transition-all duration-700 ease-soft";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Shrink the header once the visitor has scrolled past the top
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // Lock page scrolling while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerClass = [headerBase, scrolled ? headerScrolled : headerTop].join(" ");
  const logoClass = [logoBase, scrolled ? "text-lg" : "text-xl md:text-2xl"].join(" ");

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease, delay: 0.2 }}
        className={headerClass}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <a href="#home" className={logoClass}>
            SOFTNESS
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group relative text-sm text-ink-soft hover:text-ink">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 ease-soft group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <Button href="#reserve" className="hidden md:inline-flex">
            Reserve a Table
          </Button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="-mr-2 grid size-11 place-items-center md:hidden"
          >
            <Menu className="size-6" strokeWidth={1.5} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }) {
  const links = [...navLinks, { label: "Reserve", href: "#reserve" }];

  const menuVariants = { show: { transition: { delayChildren: 0.3, staggerChildren: 0.08 } } };
  const linkVariants = {
    hidden: { y: "110%" },
    show: { y: 0, transition: { duration: 0.9, ease } },
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="grain fixed inset-0 z-60 flex flex-col bg-cream px-5 pb-10 pt-5 md:hidden"
      initial={{ clipPath: "circle(0% at 92% 4%)" }}
      animate={{ clipPath: "circle(150% at 92% 4%)" }}
      exit={{ clipPath: "circle(0% at 92% 4%)" }}
      transition={{ duration: 0.9, ease }}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-xl font-medium tracking-[0.18em]">SOFTNESS</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="-mr-2 grid size-11 place-items-center"
        >
          <X className="size-6" strokeWidth={1.5} />
        </button>
      </div>

      <motion.ul className="mt-auto space-y-2" initial="hidden" animate="show" variants={menuVariants}>
        {links.map((link, i) => (
          <li key={link.href} className="overflow-hidden">
            <motion.a
              href={link.href}
              onClick={onClose}
              className="flex items-baseline gap-4 py-1 font-display text-6xl"
              variants={linkVariants}
            >
              <span className="label text-ink-soft">0{i + 1}</span>
              {link.label === "Reserve" ? <em className="text-olive">{link.label}</em> : link.label}
            </motion.a>
          </li>
        ))}
      </motion.ul>

      <p className="mt-12 flex justify-between border-t border-ink/10 pt-6 text-sm text-ink-soft">
        <span>Agadir, Morocco</span>
        <span>Food made with softness.</span>
      </p>
    </motion.div>
  );
}