import ky from 'ky'
import { API_BASE_URL, AUTH_BASE_URL } from '~/constants/api'
import { getAccessToken } from './api'

export const http = ky.create({
  prefixUrl: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  timeout: 10000,
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = getAccessToken()
        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`)
        }
      },
    ],
  },
})

export const authHttp = ky.create({
  prefixUrl: AUTH_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  timeout: 10000,
})
