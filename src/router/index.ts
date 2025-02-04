import { createRouter, createWebHistory } from 'vue-router'
import PersonaView from '@/views/PersonaView.vue'

const router = createRouter({
  history: createWebHistory('/jennyeverywhere.online/'),
  routes: [
    {
      path: '/dexie/friends',
      name: 'friendslist',
      component: () => import('../views/Dexie/FriendList.vue'),
    },
    {
      path: '/dexie',
      name: 'dexie',
      component: () => import('../views/Dexie/DexieView.vue'),
    },
    {
      path: '/adventure',
      name: 'adventure',
      component: () => import('../views/AdventureView.vue'),
    },
    {
      path: '/tag/:tag',
      name: 'tag',
      component: () => import('@/views/TagView.vue'),
    },
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
      path: '/persona',
      name: 'persona',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PersonaView,
      alias: ['/jenny-everywhere', '/newbie', '/persona'],
    },
    {
      path: '/archetypes',
      name: 'archetypes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArchetypeView.vue'),
    },
    {
      path: '/archetype/:archetype',
      name: 'archetype',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArchetypeView.vue'),
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
      path: '/chat',
      name: 'chat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChatView.vue'),
    },
    {
      path: '/theme',
      name: 'theme',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ThemeView.vue'),
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
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: '/playingcards',
      name: 'playingCards',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PlayingCards.vue'),
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
