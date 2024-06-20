import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,

    },
    {
      path: '/about',
      name: 'AboutusView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutusView.vue')
    },
    {
      path: '/bento',
      name: 'BentoView',
      component: () => import('../views/BentoView.vue')
    },
    {
      path: '/bento/bentopage2',
      name: 'BentoPage2View',
      component: () => import('../views/Bento/BentoPage2/BentoPage2View.vue')
    },
    {
      path: '/bento/bentopage3',
      name: 'BentoPage3View',
      component: () => import('../views/Bento/BentoPage3/BentoPage3View.vue')
    },
    {
      path: '/bento/bentopage4',
      name: 'BentoPage4View',
      component: () => import('../views/Bento/BentoPage4/BentoPage4View.vue')
    },
    {
      path: '/coach',
      name: 'CoachView',
      component: () => import('../views/CoachView.vue')
    },
    {
      path: '/course',
      name: 'CourseView',
      component: () => import('../views/CourseView.vue')
    },
    {
      path: '/diary',
      name: 'DiaryView',
      component: () => import('../views/DiaryView.vue')
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/news',
      name: 'NewsView',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/cart',
      name: 'CartView',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/cart/cartpage4',
      name: 'CartPage4View',
      component: () => import('../views/Cart/CartPage4/CartPage4View.vue')
    },
    {
      path: '/cart/cartpage5',
      name: 'CartPage5View',
      component: () => import('../views/Cart/CartPage5/CartPage5View.vue')
    },
    {
      path: '/asidecart',
      name: 'AsideCartView',
      component: () => import('../views/AsideCartView.vue')
    },
    {
      path: '/member',
      name: 'MemberView',
      component: () => import('../views/Login/MemberView.vue'),
      children: [
        { path: '/AccountMangerView', component: () => import('../views/Login/Member/AccountMangerView.vue') },
        { path: '/DiaryCollect', component: () => import('../views/Login/Member/DiaryCollect.vue') },
        { path: '/DiscountView', component: () => import('../views/Login/Member/DiscountView.vue') },
        { path: '/MemberCourse', component: () => import('../views/Login/Member/MemberCourse.vue') },
        { path: '/OrderView', component: () => import('../views/Login/Member/OrderView.vue') },
      ]
    },
    {
      path: '/Diarypage',
      name: 'Diarypage',
      component: () => import('../views/Diary/Diarypage.vue')
    },
    {
      path: '/course/:id',
      name: 'Coursepage',
      component: () => import('../views/Course/Coursepage.vue')
    },
    {
      path: '/CourseRating',
      name: 'CourseRating',
      component: () => import('../component/Course/CourseRating.vue')
    },
    {
      path: '/AboutMap',
      name: 'AboutMap',
      component: () => import('../views/About/AboutMap.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
