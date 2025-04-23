import { END_POINT } from '~/shared/constants/api'
import type { ContentsResponse } from '~/shared/types/api'
import { http } from '~/shared/utils/http'

interface Lab {
  id: number
  name: string
  loc: string
  site: string
  advisor: string
  file?: {
    id: number
    physicalPath?: string
  }
}

async function getLabs() {
  return http.get<ContentsResponse<Lab[]>>(END_POINT.LABS)
}

export { type Lab, getLabs }
