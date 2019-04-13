import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Samples from "@/components/Samples";
import Contact from "@/components/Contact";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/samples",
      name: "Samples",
      component: Samples
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});
