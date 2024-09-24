import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  // 注册
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/Register"),
    meta: {
      title: "注册"
    },
  },
  // 登录
  // {
  //   name: "login",
  //   path: "/login",
  //   component: () => import("@/views/auth/Login"),
  //   meta: {
  //     title: "登录"
  //   },
  // },
  // 错误页面
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
    meta: {
      title: "404-NotFound"
    },
  },
  // 无效路由
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
]

const router = new VueRouter({
  routes
})

export default router