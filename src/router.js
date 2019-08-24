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
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
      meta: {
        isLightNav: true
      }
    }
  ]
})
