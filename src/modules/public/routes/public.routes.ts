// public routes
const publicRoutes = [
  // home
  {
    path: "/",
    name: "Home",
    component: () => import(/*webpackChunkName:"home"*/ "../views/Home.vue")
  },

  // cart
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/*webpackChunkName:"cart"*/ "../views/Cart.vue")
  }
];

export default publicRoutes;
