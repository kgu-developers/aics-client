import type { Post } from '~/features/main/services/remote'
import { END_POINT } from '~/shared/constants/api'
import type { PaginationResponse } from '~/shared/types/api'
import { http } from '~/shared/utils/http'

interface PostParams {
  page: number
  size: number
  keyword?: string
  category: string
}

interface PostDetail {
  postId: number
  category: string
  title: string
  content: string
  author: string
  views: number
  isPinned: false
  file: {
    id: number
    physicalPath: string
  }
  createdAt: string
  prevPost: {
    postId: number
    title: string
  }
  nextPost: {
    postId: number
    title: string
  }
}

/**
 *
 * @param {Object} params - 게시판 데이터를 가져오기 위한 파라미터입니다.
 * @param {number} params.page - 가져올 페이지 번호입니다.
 * @param {number} params.size - 한 페이지당 항목 수입니다.
 * @param {string} [params.keyword=''] - 게시판을 필터링할 키워드입니다.
 * @param {string} [params.category] - 게시판을 필터링할 카테고리입니다.
 * @returns {Promise<PaginationResponse<Board>>} - 게시판 리스트 포함된 페이지네이션을 반환합니다.
 */
async function getPosts({ page, size, keyword = '', category }: PostParams) {
  const params = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    keyword: keyword,
    category: category,
  })

  const response = await http.get(`${END_POINT.POST}?${params.toString()}`)

  return response as PaginationResponse<Post>
}

/**
 * 게시판 상세글 정보를 가져옵니다.
 *
 * @param {string} id - 가져올 게시글의 ID입니다.
 * @returns {Promise<BoardDetail>} - 게시글의 세부 정보를 반환합니다.
 */
async function getPostDetail(id: string) {
  return await http.get<PostDetail>(`${END_POINT.POST_DETAIL(id)}`)
}

export { getPosts, getPostDetail, type PostDetail }
