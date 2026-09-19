// All imagery for the landing page lives here,
// so components stay focused on layout and motion.

// Builds an optimized Unsplash URL from a photo id
const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
];

export const images = {
  hero: unsplash("photo-1512621776951-a57141f2eefd", 1800),
  heroDetail: unsplash("photo-1490645935967-10de6ba17061", 800),
  brand: unsplash("photo-1498837167922-ddd27525d352", 1400),
  atmosphere: unsplash("photo-1517248135467-4c7edcad34c4", 2000),
  reservation: unsplash("photo-1414235077428-338989a2e8c0", 2000),
};

export const dishes = [
  {
    name: "Burrata & Garden Tomatoes",
    notes: "Tomatoes · Basil · Olive oil",
    price: "95 MAD",
    image: unsplash("photo-1592417817098-8fd3d9eb14a5", 1200),
  },
  {
    name: "Slow Roasted Chicken",
    notes: "Herbs · Seasonal vegetables",
    price: "145 MAD",
    image: unsplash("photo-1604908176997-125f25cc6f3d", 1200),
  },
  {
    name: "Creamy Mushroom Pasta",
    notes: "Wild mushrooms · Parmesan",
    price: "120 MAD",
    image: unsplash("photo-1473093295043-cdd812d0e601", 1200),
  },
  {
    name: "Softness Cheesecake",
    notes: "Vanilla · Seasonal fruit",
    price: "65 MAD",
    image: unsplash("photo-1524351199678-941a58a3df50", 1200),
  },
];