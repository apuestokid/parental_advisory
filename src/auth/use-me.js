import { useApiRequest } from '@zeus-front/zeus-fns'
import { actions } from '@/auth/state'
import me from 'dummy/me.js'

export function useMe({ onSuccess, onError }) {
  const { data, use, loading } = useApiRequest({
    endpoint: 'me',
    inmediate: false,
    dummy: me,
    afterRequest: response => {
      const status = response.status || response.statusCode.value
      const user = response.data.value || response.data
      if (!status || status === 401 || status === 403) {
        actions.resetAuth()
        if (typeof onError === 'function') onError(response)
        return
      }
      actions.setUser(user)
      if (typeof onSuccess === 'function') onSuccess(response.data)
    },
  })

  return { data, use, loading }
}
