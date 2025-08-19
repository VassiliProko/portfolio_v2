import { createRouter, createWebHistory } from 'vue-router'

// import all future components to link to
import HomePage from '@/views/HomePage.vue'
import PlayPage from '@/views/PlayPage.vue'
import McssPage from '@/views/McssPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import PrettifyMinervaPage from '@/views/PrettifyMinervaPage.vue'
import TwistedCanvasPage from '@/views/TwistedCanvasPage.vue'

// define navbar structure
export const navBarItems = [
  {
    name: 'work',
    to: '/#work',
  },
  {
    name: 'play',
    to: '/play',
  },
  {
    name: 'about',
    to: '/#about',
  },
]

// define vue router routes
export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/play',
    component: PlayPage,
  },
  {
    path: '/mcss',
    component: McssPage,
  },
  {
    path: '/prettify-minerva',
    component: PrettifyMinervaPage,
  },
  {
    path: '/twisted-canvas',
    component: TwistedCanvasPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  },
]

// set up vue router with history & scroll behavior
const scrollPositions = {}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there is a saved position, return it
    if (savedPosition) {
      return savedPosition
    }

    // If navigating to a hash, scroll to that element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // Otherwise, scroll to top
    return { top: 0, behavior: 'instant' }
  },
})

// Store scroll position on route change
router.afterEach((to, from) => {
  scrollPositions[from.fullPath] = window.scrollY
})

// Restore scroll position when going back
router.beforeEach((to, from) => {
  if (scrollPositions[to.fullPath] !== undefined) {
    window.scrollTo(0, scrollPositions[to.fullPath])
  }
})

export default router
