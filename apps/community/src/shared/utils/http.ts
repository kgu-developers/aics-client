import { getAccessToken } from '~/shared/utils/token'

interface RequestParams {
  method: string
  url: string
  options?: RequestInit
  data?: unknown
}

async function request<Response>({
  method,
  url,
  options = {},
  data,
}: RequestParams): Promise<Response> {
  const accessToken = getAccessToken()

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken
        ? {
            Authorization: `Bearer ${accessToken}`,
          }
        : {}),
      ...(options.headers || {}),
    },
    ...options,
  }

  if (data) {
    config.body = JSON.stringify(data)
  }

  const res = await fetch(url, config)

  if (!res.ok) {
    throw new Error(`Status: ${res.status}`)
  }

  if (res.status === 204) {
    return null as Response
  }

  const responseData = await res.json()
  return responseData as Response
}

const http = {
  get: <Response = unknown>(
    url: string,
    options?: RequestInit,
  ): Promise<Response> => {
    return request<Response>({
      method: 'GET',
      url,
      options,
    })
  },
  post: <Request, Response = unknown>(
    url: string,
    data?: Request,
    options?: RequestInit,
  ): Promise<Response> => {
    return request<Response>({
      method: 'POST',
      url,
      options,
      data,
    })
  },
  put: <Request = unknown, Response = unknown>(
    url: string,
    data?: Request,
    options?: RequestInit,
  ): Promise<Response> => {
    return request<Response>({
      method: 'PUT',
      url,
      options,
      data,
    })
  },
  delete: <Response = unknown>(
    url: string,
    options?: RequestInit,
  ): Promise<Response> => {
    return request<Response>({
      method: 'DELETE',
      url,
      options,
    })
  },
  patch: <Request, Response = unknown>(
    url: string,
    data?: Request,
    options?: RequestInit,
  ): Promise<Response> => {
    return request<Response>({
      method: 'PATCH',
      url,
      options,
      data,
    })
  },
}

export { http }
