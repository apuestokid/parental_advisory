import { reactive } from 'vue'
import { toLocal } from 'zFns'

const state = reactive({
  key: 'value',
})

toLocal(state, {
  namespace: 'global',
  attrs: ['key'],
})

const actions = {
  setStoreValue(attr, val) {
    state[attr] = val
  },
  setTheme(theme) {
    state.theme = theme
  },
}

export { state, actions }
