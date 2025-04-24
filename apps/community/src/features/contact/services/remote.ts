import { END_POINT } from '~/shared/constants/api'
import type { ContentResponse } from '~/shared/types/api'
import { http } from '~/shared/utils/http'

function getContacts() {
  const CATEGORY = 'DIRECTIONS'
  const params = new URLSearchParams({
    category: CATEGORY,
  })
  return http.get<ContentResponse<string>>(
    `${END_POINT.ABOUTS}?${params.toString()}`,
  )
}

export { getContacts }
