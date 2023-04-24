// public routes
const publicRoutes = [
  // home
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  }
];

export default publicRoutes;
