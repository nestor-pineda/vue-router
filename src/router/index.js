import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Blog from "../views/blog/Blog.vue";
import BlogDetails from "../views/blog/BlogDetail.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/blog/:id",
    name: "blogDetails",
    component: BlogDetails,
    props: true, // with this we will be able to accept any parameter as props.
  },
  // Redirections
  {
    path: "/all-blogs",
    redirect: "/blog",
  },
  // Catch 404 Erro
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
