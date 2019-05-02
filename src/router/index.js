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
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return new Promise((resolve, reject) => {
      let scrollDuration = 500,
          cosParameter = window.scrollY / 2,
          oldTimestamp = performance.now(),
          scrollCount = 0

      function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))

        if (scrollCount >= Math.PI) {
          window.scrollTo(0, 0)
        }

        if (window.scrollY === 0) {
          resolve({ x: 0, y: 0 })

          return
        }

        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))

        oldTimestamp = newTimestamp

        window.requestAnimationFrame(step)
      }

      window.requestAnimationFrame(step);
    })
  }
});
