import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/member',
      name: 'MemberView',
      component: () => import('../views/Login/MemberView.vue')
    },
    {
      path: '/Diarypage',
      name: 'Diarypage',
      component: () => import('../views/Diary/Diarypage.vue')
    },
    {
      path: '/Coursepage',
      name: 'Coursepage',
      component: () => import('../views/Course/Coursepage.vue')
    }
  ]
})

export default router
