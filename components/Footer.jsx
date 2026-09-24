import { ArrowUpRight } from "lucide-react";

const wordmark = "font-display text-[19vw] leading-[0.8] tracking-[-0.02em] lg:text-[13.5rem]";
const bottomRow = "mt-12 flex flex-col gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between";
const linkClass = "group inline-flex items-center gap-1 transition-colors hover:text-ink";
const arrowClass = "size-4 transition-transform duration-500 ease-soft group-hover:-translate-y-0.5";
const instagram = "https://instagram.com";

export default function Footer() {
  return (
    <footer className="grain bg-cream px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-24">
      <div className="mx-auto max-w-[1440px]">
        <p className={wordmark}>SOFTNESS</p>

        <div className={bottomRow}>
          <p className="font-display text-xl">Food made with softness.</p>

          <div className="flex items-center gap-8 text-sm text-ink-soft">
            <span>Agadir, Morocco</span>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Instagram
              <ArrowUpRight aria-hidden="true" className={arrowClass} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-soft">© 2026 Softness</p>
      </div>
    </footer>
  );
}