import Vue from 'vue'
import Router from 'vue-router'
const error_404 = () => import('@/components/error_page/404.vue')
const home = () => import('@/views/home/home')
const login = () => import('@/views/login/login')
const supervision = () => import('@/views/supervision/supervision')
// const HelloWorld=resolve=require(['@/components/HelloWorld'],resolve)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/supervision',
      meta: {
        title: '资源库'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: home,
      children: [
        {
          path: 'supervision',
          name: 'supervision',
          meta: {
            title: '设备库'
          },
          component: supervision
        }
      ]
    },
    {
      path: '/error404',
      name: 'error_404',
      component: error_404
    },
  ]
})
