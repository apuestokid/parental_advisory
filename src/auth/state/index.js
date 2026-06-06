import { reactive } from 'vue'
import { toLocal } from '@zeus-front/zeus-fns'

const state = reactive({
  token: null,
  user: null,
})

toLocal(state, {
  namespace: 'auth',
  attrs: ['token', 'user'],
})

const actions = {
  setStoreValue(attr, val) {
    state[attr] = val
  },
  setToken(token) {
    state.token = token
  },
  setUser(user) {
    state.user = user
  },
  resetAuth() {
    state.token = null
    state.user = null
  },
}

export { state, actions }
