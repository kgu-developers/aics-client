import type {
  AboutCreateRequest,
  DirectionsContent,
} from '~/features/directions/types'

export const DIRECTIONS_CATEGORY =
  'DIRECTIONS' as const satisfies AboutCreateRequest['category']

export const DIRECTIONS_EMPTY_HTMLS = ['', '<p></p>'] as const
export type DirectionsEmptyHtml = (typeof DIRECTIONS_EMPTY_HTMLS)[number]

export const isDirectionsEmpty = (
  content: DirectionsContent | undefined,
): boolean =>
  (DIRECTIONS_EMPTY_HTMLS as readonly string[]).includes(content ?? '')

export const DIRECTIONS_MESSAGES = {
  success: '안내문이 성공적으로 저장되었습니다.',
  error: '안내문을 저장하는 도중 오류가 발생했습니다.',
} as const

export const DIRECTIONS_LABELS = {
  title: '찾아오시는 길',
  create: '작성하기',
  edit: '수정하기',
} as const
