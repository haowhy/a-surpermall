import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import("../views/home/Home")

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/cart',
    component: () => import("views/cart/Cart"),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/category',
    component: () => import("views/category/Category"),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/profile',
    component: () => import("views/profile/Profile"),
    meta: {
      title: '我的'
    }
  },
  {
    path: '/detail/:iid',
    component: () => import("views/detail/Detail"),
    meta: {
      title: '详情页'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach(((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
}))

export default router
