import { END_POINT } from '~/shared/constants/api'
import type { ContentsResponse } from '~/shared/types/api'
import { http } from '~/shared/utils/http'

export interface Carousel {
  id: number
  text: string
  link: string
  file: {
    id: number
    physicalPath: string
  }
}

export interface Post {
  postId: number
  category: string
  title: string
  author: string
  description: string
  views: number
  hasAttachment: boolean
  isPinned: boolean
  createdAt: string
}

const getHero = async () => {
  const { contents } = await http.get<ContentsResponse<Carousel[]>>(
    END_POINT.CAROUSEL,
  )

  return contents
}

const getRecentNews = async (): Promise<Post[]> => {
  const params = new URLSearchParams({
    page: '0',
    size: '10',
    category: 'NEWS',
  })

  const { contents } = await http.get<ContentsResponse<Post[]>>(
    `${END_POINT.POST}?${params.toString()}`,
  )

  return contents
}

const getRecentNotices = async () => {
  const params = new URLSearchParams({
    page: '0',
    size: '3',
    category: 'NOTIFICATION',
  })

  const { contents } = await http.get<ContentsResponse<Post[]>>(
    `${END_POINT.POST}?${params.toString()}`,
  )

  return contents
}

export { getHero, getRecentNews, getRecentNotices }
