import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/pages/Index').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/pages/About').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/pages/Login').default
    },
    {
      path: '/preview',
      name: 'preview',
      component: require('@/pages/Preview').default
    },
    {
      path: '/profile',
      name: 'profile',
      component: require('@/pages/Profile').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
