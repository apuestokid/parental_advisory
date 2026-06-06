import { useApiRequest, setupApiRequest } from '@zeus-front/zeus-fns'
import { actions, state } from '@/auth/state'
import auth from '@/dummy/endpoints/auth.js'

export function useLogin({ form, onSuccess, onError }) {
  const { data, use, loading } = useApiRequest({
    method: 'POST',
    endpoint: 'login',
    dummy: auth,
    data: form,
    inmediate: false,
    afterRequest: response => {
      const token = response?.data?.token ?? response.data?.value?.token
      if (!token) {
        actions.setToken(null)
        onError(response)
        return
      }
      actions.setToken(token)
      setupApiRequest({
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      onSuccess(response)
    },
  })

  return { data, use, loading }
}
