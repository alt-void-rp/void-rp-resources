import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/Auth/AuthView.vue'
import ProfilesView from '../views/Profile/ProfilesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'authPage',
      component: AuthView,
    },
    {
      path: '/auth/profiles',
      name: 'profilesPage',
      component: ProfilesView,
    }
  ],
})

export default router
