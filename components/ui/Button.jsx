import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Full class names per variant — never build Tailwind classes from pieces
const variants = {
  primary: "bg-ink text-ivory hover:bg-olive",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  light: "bg-ivory text-ink hover:bg-sand",
  ghostLight: "border border-ivory/40 text-ivory hover:bg-ivory hover:text-ink",
};

const base = "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-500 ease-soft";

const arrowClass = "size-4 transition-transform duration-500 ease-soft group-hover:translate-x-1";

/**
 * Pill-shaped call to action.
 * Same-page anchors (#reserve) render a plain <a>.
 * Real routes (/menu) render next/link for instant client-side navigation.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
  ...props
}) {
  const classes = [base, variants[variant], className].join(" ");

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight aria-hidden="true" className={arrowClass} />}
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}