import { END_POINT } from '~/shared/constants/api'
import type { ContentsResponse } from '~/shared/types/api'
import { http } from '~/shared/utils/http'

interface Club {
  name: string
  description: string
  site?: string
  image?: string
}

async function getClubs() {
  return http.get<ContentsResponse<Club[]>>(END_POINT.CLUBS)
}

export { type Club, getClubs }
