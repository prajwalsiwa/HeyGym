import Dashboard from "@/views/Dashboard";
import { IRoute } from "./types";
import AuthSection from "@/views/AuthSection";
import Registration from "@/views/Registration";
import Members from "@/views/Members";

const appRoutes: IRoute[] = [
  {
    name: "Login",
    path: "/login",
    component: AuthSection,
  },
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
  },
  {
    name: "Register",
    path: "/register",
    component: Registration,
  },
  {
    name: "Members",
    path: "/members",
    component: Members,
  },
];

export default appRoutes;
