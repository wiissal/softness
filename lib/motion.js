// Soft + slow + elegant: one easing curve for the whole page
export const ease = [0.22, 1, 0.36, 1];

// Fade in while rising gently
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
};

// Parent variant: reveals its children one after another
export const stagger = (delayChildren = 0, staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

// Spread onto a motion element to animate once when it scrolls into view
export const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.3 },
};