

const navItems=(categories) =>  ([
  { title: "accueil", itemId: "/" },
  { title: "derniers articles", itemId: "/posts/1" },
  {
    title: "catégories",
    itemId: "/category",
    subNav: categories.map((category) => {
      return { title: category.name, itemId: `/${category.slug}/1` };
    }),
  },
  { title: "à propos", itemId: "/about" },
  { title: "portfolio", itemId: "https://github.com/FredBros" },
  { title: "contact", itemId: "/contact" },
])

export default navItems;