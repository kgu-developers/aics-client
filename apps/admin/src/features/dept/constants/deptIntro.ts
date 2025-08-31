import type { AboutCreateRequest } from '~/apis/admin/requests/types.gen'
import type { DeptIntroContent } from '~/features/dept/types'

export const DEPT_INTRO_CATEGORY =
  'DEPT_INTRO' as const satisfies AboutCreateRequest['category']

const EMPTY_HTMLS = ['', '<p></p>'] as const
export type EmptyHtml = (typeof EMPTY_HTMLS)[number]

export const isDeptIntroEmpty = (
  content: DeptIntroContent | undefined,
): boolean => (EMPTY_HTMLS as readonly string[]).includes(content ?? '')

export const DEPT_INTRO_MESSAGES = {
  success: '소개글이 성공적으로 저장되었습니다.',
  error: '소개글을 저장하는 도중 오류가 발생했습니다.',
  nullError: '작성된 학부 소개가 없습니다.',
} as const

export const DEPT_INTRO_LABELS = {
  title: '학부 소개',
  create: '작성하기',
  edit: '수정하기',
} as const
