import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/views/home/home')
const login = () => import('@/views/login/login')
const supervision = () => import('@/views/supervision/supervision') //运行监控
const runset = () => import('@/views/runset/runset') //运行设置
const taskset = () => import('@/views/taskset/taskset') //任务设置
const warning = () => import('@/views/warning/warning') //系统警告
const dataanaly = () => import('@/views/dataAnalysis/dataanaly') //数据分析
const logfile = () => import('@/views/logFile/logfile') //操作日志

const system = () => import('@/views/system/system')//系统参数

const error_404 = () => import('@/components/error_page/404.vue')
const error_403 = () => import('@/components/error_page/403.vue')
const error_500 = () => import('@/components/error_page/500.vue')
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
      path: '/logfile',
      name: 'logfile',
      component: logfile
    },
    {
      path: '/runset',
      name: 'runset',
      component: runset
    },
    {
      path: '/system',
      name: 'system',
      component: system
    },
    {
      path: '/taskset',
      name: 'taskset',
      component: taskset
    },
    {
      path: '/warning',
      name: 'warning',
      component: warning
    },
    {
      path: '/dataanaly',
      name: 'dataanaly',
      component: dataanaly
    },
    {
      path: '/error404',
      name: 'error_404',
      component: error_404
    },
    {
      path: '/error403',
      name: 'error_403',
      component: error_403
    },
    {
      path: '/error500',
      name: 'error_500',
      component: error_500
    },
  ]
})
