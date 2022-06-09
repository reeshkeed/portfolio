import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        isLightNav: false
      }
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Work.vue'),
      meta: {
        isLightNav: false
      }
    },
    {
      path: '/experiments',
      name: 'experiments',
      component: () => import('./views/Experiments.vue'),
      meta: {
        isLightNav: true
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
      meta: {
        isLightNav: false
      }
    },
    {
      path: '/iparentportal',
      name: 'iparentportal',
      component: () => import('./views/Ipp.vue'),
      meta: {
        isLightNav: false
      }
    },
    {
      path: '/joserizal',
      name: 'joserizal',
      component: () => import('./views/Rizal.vue'),
      meta: {
        isLightNav: false
      }
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('./views/Icon.vue'),
      meta: {
        isLightNav: false
      }
    },
    {
      path: '*',
      component: () => import('./views/404.vue'),
      meta: {
        isLightNav: true
      }
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
})
