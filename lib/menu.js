// The full menu, grouped by course.
// Each course has an id used by the sticky navigation.

export const courses = [
  {
    id: "starters",
    name: "Starters",
    note: "To share, or not",
    items: [
      {
        name: "Burrata & Garden Tomatoes",
        notes: "Heirloom tomatoes, torn basil, olive oil",
        price: "95",
      },
      {
        name: "Roasted Beetroot & Labneh",
        notes: "Strained yoghurt, honey, toasted hazelnuts",
        price: "75",
      },
      {
        name: "Bread & Olive Oil",
        notes: "Sourdough baked in-house, Souss olive oil",
        price: "45",
      },
      {
        name: "Autumn Squash Soup",
        notes: "Roasted squash, sage, crème fraîche",
        price: "70",
      },
      {
        name: "Market Salad",
        notes: "Leaves, herbs, seeds, lemon dressing",
        price: "65",
      },
    ],
  },
  {
    id: "mains",
    name: "Mains",
    note: "Cooked slowly",
    items: [
      {
        name: "Slow Roasted Chicken",
        notes: "Garden herbs, seasonal vegetables",
        price: "145",
      },
      {
        name: "Creamy Mushroom Pasta",
        notes: "Fresh pasta, wild mushrooms, parmesan",
        price: "120",
      },
      {
        name: "Catch of the Day",
        notes: "From Agadir port, charred lemon, olive oil",
        price: "165",
      },
      {
        name: "Aubergine & Chickpea Tagine",
        notes: "Slow-cooked tomato, coriander, preserved lemon",
        price: "110",
      },
      {
        name: "Lamb Shoulder",
        notes: "Six hours in the oven, roasted root vegetables",
        price: "185",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    note: "A little softness",
    items: [
      {
        name: "Softness Cheesecake",
        notes: "Vanilla, seasonal fruit",
        price: "65",
      },
      {
        name: "Orange Blossom Rice Pudding",
        notes: "Slow-cooked, toasted almonds",
        price: "55",
      },
      {
        name: "Dark Chocolate Tart",
        notes: "Sea salt, olive oil",
        price: "70",
      },
      {
        name: "Fruit of the Season",
        notes: "Whatever the market offered this morning",
        price: "45",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    note: "Warm or cold",
    items: [
      {
        name: "Mint Tea",
        notes: "Fresh mint, gunpowder green tea",
        price: "30",
      },
      {
        name: "Fresh Orange Juice",
        notes: "Pressed to order",
        price: "35",
      },
      {
        name: "Coffee",
        notes: "Espresso, cortado or filter",
        price: "30",
      },
      {
        name: "House Lemonade",
        notes: "Lemon, orange blossom, sparkling water",
        price: "40",
      },
    ],
  },
];

// Prices are shown without a currency symbol next to each dish;
// the page states "All prices in MAD" once, as a printed menu would.
export const currencyNote = "All prices in MAD · Service included";