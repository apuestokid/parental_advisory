import { reactive } from 'vue'
import { toLocal } from '@zeus-front/zeus-fns'
const applyTheme = theme => {
  document.documentElement.setAttribute('data-theme', theme)
}

const state = reactive({
  theme: 'light',
  language: 'es',
})

toLocal(state, {
  namespace: 'global',
  attrs: ['theme', 'language'],
})

const actions = {
  setStoreValue(attr, val) {
    state[attr] = val
  },
  setTheme(theme) {
    if (theme) state.theme = theme
    applyTheme(state.theme)
  },
  setLanguage(language) {
    if (language) state.language = language
  },
}

export { state, actions }
