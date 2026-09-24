// All copy & imagery for the landing page lives here,
// so components stay focused on layout and motion.
// Photos live in /public/images and are served from the site root.
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
];

export const images = {
  hero: "/images/hero.jpg",
  brand: "/images/brand.jpg",
  atmosphere: "/images/atmosphere.jpg",
  reservation: "/images/reservation.jpg",
};

export const dishes = [
  {
    name: "Burrata & Garden Tomatoes",
    notes: "Tomatoes · Basil · Olive oil",
    price: "95 MAD",
    image: "/images/burrata.jpg",
  },
  {
    name: "Slow Roasted Chicken",
    notes: "Herbs · Seasonal vegetables",
    price: "145 MAD",
    image: "/images/chicken.jpg",
  },
  {
    name: "Creamy Mushroom Pasta",
    notes: "Wild mushrooms · Parmesan",
    price: "120 MAD",
    image: "/images/pasta.jpg",
  },
  {
    name: "Softness Cheesecake",
    notes: "Vanilla · Seasonal fruit",
    price: "65 MAD",
    image: "/images/cheesecake.jpg",
  },
];
