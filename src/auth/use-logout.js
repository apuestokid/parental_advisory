import { useApiRequest } from '@zeus-front/zeus-fns'

export function useLogout({ form, onEnd }) {
  const { data, use, loading } = useApiRequest({
    method: 'GET',
    endpoint: 'logout',
    data: form,
    inmediate: false,
    afterRequest: response => {
      onEnd(response)
    },
  })

  return { data, use, loading }
}
