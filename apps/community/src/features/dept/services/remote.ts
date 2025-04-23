import { MOCK_END_POINT } from '~/shared/constants/api'
import type { ContentsResponse } from '~/shared/types/api'
import { http } from '~/shared/utils/http'

interface Dept {
  name: string
  description: string
  educationGoals: string[]
}

function getDepts() {
  return http.get<ContentsResponse<Dept[]>>(MOCK_END_POINT.DEPT)
}

export { type Dept, getDepts }
