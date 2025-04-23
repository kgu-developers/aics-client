import { END_POINT } from '~/shared/constants/api'
import type { ContentsResponse } from '~/shared/types/api'
import { http } from '~/shared/utils/http'

interface Professor {
  id: number
  name: string
  img?: string
  type: string
  contact: string
  email: string
  officeLoc: string
}

function getProfessors() {
  return http.get<ContentsResponse<Professor[]>>(END_POINT.PROFESSORS)
}

export { type Professor, getProfessors }
