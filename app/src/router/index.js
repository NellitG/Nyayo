import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView, PostsView, DetailsView, LoginView, ContactView,
} from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
  { path: "/contact", name: "contact", component: ContactView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
