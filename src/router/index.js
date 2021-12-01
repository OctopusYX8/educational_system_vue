import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login"
import Home from "../views/Home"
import Notice from "../components/home/Notice";
import TeachingFile from "../components/home/TeachingFile";
import ManageMessage from "../components/home/ManageMessage";
import Reportcard from "../components/home/Reportcard";
import Timetable from "../components/home/Timetable";
import Relative from "../components/home/Relative";
import Feedback from "../components/home/Feedback";
import Register from "../components/home/Register";
import Home_1 from "../views/Home_1"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    redirect:'/notice',
    children:[
      {
        path:'/notice',
        name:'通知公告',
        component:Notice
      },
      {
        path:'/teachingfile',
        name:'教学文件',
        component:TeachingFile
      },
      {
        path:'/managemsg',
        name:'教务管理信息',
        component:ManageMessage
      },
      {
        path:'/reportcard',
        name:'成绩单打印',
        component:Reportcard
      },
      {
        path:'/relative',
        name:'相关站点',
        component:Relative
      },
      {
        path:'/timetable',
        name:'课程表查询',
        component:Timetable
      },
      {
        path:'/feedback',
        name:'意见反馈',
        component:Feedback
      },
      {
        path: '/register',
        name:'用户登录',
        component: Register
      }
    ]
  },
  {
    path:'/home1',
    component: Home_1,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
