export const PATH = {
  SIGNIN: '/',
  MAIN: '/main',
  NEWS: '/news',
  NOTICE: '/notice',
  CLUB: '/club',
  EDIT_NEWS: '/news/edit/',
  EDIT_NOTICE: '/notice/edit/',
  USER: '/user',
};

export type PostCategory = '/notice' | '/news';

export const NEW_POST_PATH_MAP: Record<PostCategory, string> = {
  '/notice': `${PATH.NOTICE}/new`,
  '/news': `${PATH.NEWS}/new`,
};

export const POST_DETAIL_PATH_MAP: Record<PostCategory, string> = {
  '/notice': `${PATH.NOTICE}/$postId`,
  '/news': `${PATH.NEWS}/$postId`,
};

export const EDIT_POST_PATH_MAP: Record<PostCategory, string> = {
  '/notice': `${PATH.EDIT_NOTICE}$postId`,
  '/news': `${PATH.EDIT_NEWS}$postId`,
};
