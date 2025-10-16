import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/Auth/AuthView.vue'
import ProfilesView from '../views/Profile/ProfilesView.vue'
import CharacterEditorView from '../views/CharacterEditor/CharacterEditorView.vue'

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
    },
    {
      path: '/character/editor',
      name: 'characterEditor',
      component: CharacterEditorView,
    }
  ],
})

export default router
