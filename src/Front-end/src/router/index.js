import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/product",
    name: "product.list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/products/List.vue"),
  },
  {
    path: "/product/create",
    name: "product.create",
    component: () => import("../views/products/Form.vue"),
  },
  {
    path: "/product/edit/:id",
    name: "product.edit",
    component: () => import("../views/products/Form.vue"),
  },
  {
    path: "/user",
    name: "user.list",
    component: () => import("../views/users/List.vue"),
  },
  ,
  {
    path: "/user/create",
    name: "user.create",
    component: () => import("../views/users/Form.vue"),
  },
  {
    path: "/user/edit/:id",
    name: "user.edit",
    component: () => import("../views/users/Form.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
