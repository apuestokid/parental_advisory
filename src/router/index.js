import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'

// import Auth from '/src/api/endpoints/Auth.js'
import { state } from '@/auth/state'

function beforeEnter(routes, callback) {
  return routes.map(route => ({ ...route, beforeEnter: callback }))
}

export function authGuard(routes) {
  return beforeEnter(routes, () => {
    if (!state.token) return { name: 'Login' }
    return true
  })
}

function guestGuard(routes) {
  return beforeEnter(routes, () => {
    if (state.token) return { name: 'Home' }
    return true
  })
}

function publicGuard(routes) {
  return beforeEnter(routes, () => {})
}

const router = createRouter({
  history: createWebHistory(),
  routes: routes(authGuard, guestGuard, publicGuard),
})

export default router
