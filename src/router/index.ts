import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/jennyeverywhere.online/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/StoryView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/character',
      name: 'character',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PersonaView.vue'),
      alias: ['/jenny-everywhere', '/newbie', '/persona'],
    },
    {
      path: '/timeline',
      name: 'timeline',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TimelineView.vue'),
    },
    {
      path: '/nuforge',
      name: 'nuforge',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NuForge.vue'),
    },
    {
      path: '/nuforge',
      name: 'nuforge',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NuForge.vue'),
    },
    {
      path: '/tag/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
