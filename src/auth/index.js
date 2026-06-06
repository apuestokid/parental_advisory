import { setupApiRequest } from '@zeus-front/zeus-fns'
import { state } from '@/auth/state'

export * from './use-login'
export * from './use-logout'
export * from './use-me'
export * from './state'

export default () => {
  setupApiRequest({
    baseURL: import.meta.env.VITE_APP_API_URL,
    // withCredentials: true,
    // withXSRFToken: true,
    headers: {
      'Content-Type': 'application/json;',
      'Access-Control-Allow-Origin': '*',
      'x-api-key': 'reqres-free-v1',
      ...(state.token && { Authorization: `Bearer ${state.token}` }),
    },
  })
}
