import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Work from "@/components/Work";
import Samples from "@/components/Samples";
import Contact from "@/components/Contact";
import Icon from "@/components/work/Icon";
import Ipp from "@/components/work/Ipp";
import Rizal from "@/components/work/Rizal";
import Xhander from "@/components/work/Xhander";

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
      path: "/work",
      name: "Work",
      component: Work
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
    },
    {
      path: "/icon",
      name: "Icon",
      component: Icon
    },
    {
      path: "/ipp",
      name: "Ipp",
      component: Ipp
    },
    {
      path: "/rizal",
      name: "Rizal",
      component: Rizal
    },
    {
      path: "/xhander",
      name: "Xhander",
      component: Xhander
    }
  ]
});
