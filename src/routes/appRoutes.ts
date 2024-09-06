import Dashboard from "@/views/Dashboard";
import { IRoute } from "./types";
import AuthSection from "@/views/AuthSection";
import Registration from "@/views/Registration";

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
];

export default appRoutes;
