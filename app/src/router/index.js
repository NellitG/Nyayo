import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  PostsView,
  DetailsView,
  LoginView,
  ContactView,
  AboutusView,
  ProgramsView,
  NotFoundView,
  DonationsView,
  GalleryView,
  VolunteerView
} from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/donations", name: "donations", component: DonationsView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/aboutus", name: "aboutus", component: AboutusView },
  { path: "/programs", name: "programs", component: ProgramsView },
  { path: "/gallery", name: "gallery", component: GalleryView },
  { path: "/Blog", name: "Blog", component: ProgramsView },
  { path: "/volunteer", name: "volunteer", component: VolunteerView },
  { path: "/:PathMatch(.*)*", name: "Errorpage", component: NotFoundView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
