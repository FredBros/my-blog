

const navItems=(categories) =>  ([
  { title: "accueil", itemId: "/" },
  { title: "populaires", itemId: "/popular" },
  {
    title: "catégories",
    itemId: "/category",
    subNav: categories.map((category) => {
      return { title: category.name, itemId: `/category/${category.slug}` };
    }),
  },
  { title: "à propos", itemId: "/about" },
  { title: "portfolio", itemId: "https://github.com/FredBros" },
  { title: "contact", itemId: "/contact" },
])

export default navItems;