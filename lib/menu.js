// The full menu, grouped by course.
// Each course has an id used by the sticky navigation.
// Dish photos live in /public/images/menu/

export const courses = [
  {
    id: "starters",
    name: "Starters",
    note: "To share, or not",
    items: [
      { name: "Burrata & Garden Tomatoes", notes: "Heirloom tomatoes, torn basil, olive oil", price: "95", image: "/images/burrata.jpg" },
      { name: "Roasted Beetroot & Labneh", notes: "Strained yoghurt, honey, toasted hazelnuts", price: "75", image: "/images/menu/beetroot.jpg" },
      { name: "Bread & Olive Oil", notes: "Sourdough baked in-house, Souss olive oil", price: "45", image: "/images/menu/bread.jpg" },
      { name: "Autumn Squash Soup", notes: "Roasted squash, sage, crème fraîche", price: "70", image: "/images/menu/soup.jpg" },
      { name: "Market Salad", notes: "Leaves, herbs, seeds, lemon dressing", price: "65", image: "/images/menu/salad.jpg" },
    ],
  },
  {
    id: "mains",
    name: "Mains",
    note: "Cooked slowly",
    items: [
      { name: "Slow Roasted Chicken", notes: "Garden herbs, seasonal vegetables", price: "145", image: "/images/chicken.jpg" },
      { name: "Creamy Mushroom Pasta", notes: "Fresh pasta, wild mushrooms, parmesan", price: "120", image: "/images/pasta.jpg" },
      { name: "Catch of the Day", notes: "From Agadir port, charred lemon, olive oil", price: "165", image: "/images/menu/fish.jpg" },
      { name: "Aubergine & Chickpea Tagine", notes: "Slow-cooked tomato, coriander, preserved lemon", price: "110", image: "/images/menu/tagine.jpg" },
      { name: "Lamb Shoulder", notes: "Six hours in the oven, roasted root vegetables", price: "185", image: "/images/menu/lamb.jpg" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    note: "A little softness",
    items: [
      { name: "Softness Cheesecake", notes: "Vanilla, seasonal fruit", price: "65", image: "/images/cheesecake.jpg" },
      { name: "Orange Blossom Rice Pudding", notes: "Slow-cooked, toasted almonds", price: "55", image: "/images/menu/rice-pudding.jpg" },
      { name: "Dark Chocolate Tart", notes: "Sea salt, olive oil", price: "70", image: "/images/menu/chocolate-tart.jpg" },
      { name: "Fruit of the Season", notes: "Whatever the market offered this morning", price: "45", image: "/images/menu/fruit.jpg" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    note: "Warm or cold",
    items: [
      { name: "Mojito", notes: "Fresh mint, Fresh lemon slides", price: "30", image: "/images/menu/mojito.jpg" },
      { name: "Fresh Orange Juice", notes: "Pressed to order", price: "35", image: "/images/menu/orange-juice.jpg" },
      { name: "Coffee", notes: "Espresso, cortado or filter", price: "30", image: "/images/menu/coffee.jpg" },
      { name: "House Lemonade", notes: "Lemon, orange blossom, sparkling water", price: "40", image: "/images/menu/lemonade.jpg" },
    ],
  },
];

export const currencyNote = "All prices in MAD · Service included";