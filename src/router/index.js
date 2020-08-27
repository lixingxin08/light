import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/views/home/home')
const login = () => import('@/views/login/login')
const supervision = () => import('@/views/supervision/supervision') //运行监控
const runset = () => import('@/views/runset/runset') //运行设置
const taskset = () => import('@/views/taskset/taskset') //任务设置
const warning = () => import('@/views/warning/warning') //系统警告
const evlist = () => import('@/views/warning/evlist/evlist') //事件列表
const police = () => import('@/views/warning/police/police') //警报关注
const push = () => import('@/views/warning/push/push') //推送设置
const transfer = () => import('@/views/warning/transfer/transfer') //转警设置


const dataanaly = () => import('@/views/dataAnalysis/dataanaly') //数据分析
const equipmentdetails = () => import('@/views/dataAnalysis/equipmentDetails/equipmentdetail') //电表运行数据
const terminaldata = () => import('@/views/dataAnalysis/terminalData/terminaldata') //终端运行数据
const terminaldetails = () => import('@/views/dataAnalysis/terminalDetails/terminaldetails') //终端运行明细
const watthourmeter = () => import('@/views/dataAnalysis/wattHourMeter/watthourmeter') //终端运行明细


const logfile = () => import('@/views/logFile/logfile') //操作日志

const system = () => import('@/views/system/system')//系统参数

const error_404 = () => import('@/components/error_page/404.vue')
const error_403 = () => import('@/components/error_page/403.vue')
const error_500 = () => import('@/components/error_page/500.vue')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '',
      redirect: '/home'
  },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/supervision',
      meta: {
        title: '首页'
      },
      component: home,
      children: [
        {
          path: 'supervision',
          name: 'supervision',
          meta: {
            title: '运行监管'
          },
          component: supervision
        },
        {
          path: '/logfile',
          name: 'logfile',
          component: logfile,
          meta:{
            title:"操作日志"
          }
        },
        {
          path: '/runset',
          name: 'runset',
          component: runset,
          meta:{
            title:"运行设置"
          }
        },
        {
          path: '/system',
          name: 'system',
          component: system,
          meta:{
            title:"系统参数"
          }
        },
        {
          path: '/taskset',
          name: 'taskset',
          component: taskset,
          meta:{
            title:"任务设置"
          }
        },
        {
          path: '/warning',
          name: 'warning',
          component: warning,
          meta:{
            title:"系统警告"
          }
        },
        {
          path: '/warning/evlist',
          name: 'evlist',
          component: evlist,
          meta:{
            title:"警报列表"
          }
        },
        {
          path: '/warning/police',
          name: 'police',
          component: police,
          meta:{
            title:"警报关注"
          }
        },
        {
          path: '/warning/push',
          name: 'push',
          component: push,
          meta:{
            title:"推送设置"
          }
        },
        {
          path: '/warning/transfer',
          name: 'transfer',
          component: transfer,
          meta:{
            title:"转警设置"
          }
        },
        {
          path: '/dataanaly',
          name: 'dataanaly',
          component: dataanaly,
          meta:{
            title:"数据分析"
          }
        },
        {
          path: '/dataanaly/equipmentdetails',
          name: 'equipmentdetails',
          component: equipmentdetails,
          meta:{
            title:"设备运行明细"
          }
        },
        {
          path: '/dataanaly/terminaldata',
          name: 'terminaldata',
          component: terminaldata,
          meta:{
            title:"终端运行数据"
          }
        },
        {
          path: '/dataanaly/terminaldetails',
          name: 'terminaldetails',
          component: terminaldetails,
          meta:{
            title:"终端运行明细"
          }
        },
        ,
        {
          path: '/dataanaly/watthourmeter',
          name: 'watthourmeter',
          component: watthourmeter,
          meta:{
            title:"电表运行数据"
          }
        },
      ]
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
