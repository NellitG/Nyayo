import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  PostsView,
  DetailsView,
  LoginView,
  ContactView,
  AboutusView,
  ProgramsView,
  GetInvolvedView,
} from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/aboutus", name: "aboutus", component: AboutusView },
  { path: "/programs", name: "programs", component: ProgramsView },
  { path: "/getinvolved", name: "getinvolved", component: GetInvolvedView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
