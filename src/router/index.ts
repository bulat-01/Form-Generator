import { createRouter, createWebHistory } from 'vue-router'
import THome from '@/pages/t-home.vue'
import TSecondPage from '@/pages/t-second-page.vue'
import TThirdPage from '@/pages/t-third-page.vue'
import TFourthPage from '@/pages/t-fourth-page.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: THome,
    },
    {
      path: '/second-page',
      component: TSecondPage,
    },
    {
      path: '/third-page',
      component: TThirdPage,
    },
    {
      path: '/fourth-page',
      component: TFourthPage,
    },
  ],
})

export default router
