

const navItems=(categories) =>  ([
  { title: "accueil", itemId: "/blog" },
  // { title: "derniers articles", itemId: "/posts/1" },
  {
    title: "catégories",
    itemId: "/blog/category",
    subNav: categories.map((category) => {
      return { title: category.name, itemId: `/blog/${category.slug}/1` };
    }),
  },
  { title: "à propos", itemId: "/blog/about" },
  { title: "portfolio", itemId: "https://github.com/FredBros" },
  { title: "contact", itemId: "/blog/contact" },
])

export default navItems;