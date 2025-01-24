import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BuildingsView from '@/entities/building/views/BuildingsView.vue'
import BuildingDetailsView from '@/entities/building/views/BuildingDetailsView.vue'
import AddBuildingView from '@/entities/building/views/AddBuildingView.vue'
import EditBuildingView from '@/entities/building/views/EditBuildingView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/buildings',
      name: 'buildings',
      component: BuildingsView,
    },
    {
      path: '/buildings/:id',
      name: 'building-details',
      component: BuildingDetailsView,
    },
    {
      path: '/buildings/add',
      name: 'add-building',
      component: AddBuildingView,
    },
    {
      path: '/buildings/:id/edit',
      name: 'edit-building',
      component: EditBuildingView,
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },

    // Catch-all route for 404
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router
