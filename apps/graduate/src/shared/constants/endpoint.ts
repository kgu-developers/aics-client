export const API_URL =
  import.meta.env.VITE_API_URL || 'https://aics-api.ummdev.com';

export const API_AUTH_URL =
  import.meta.env.VITE_AUTH_API_URL || 'https://aics-auth.ummdev.com';

export const API_ADMIN_URL =
  import.meta.env.VITE_ADMIN_API_URL || 'https://aics-admin.ummdev.com';

export type EndpointValue<T> = T extends string
  ? T
  : T extends Record<string, unknown>
    ? {
        [K in keyof T]: EndpointValue<T[K]>;
      }[keyof T]
    : never;

export type EndpointPath = EndpointValue<typeof END_POINT>;

/**
 * AUTH, ADMIN, USER 세 가지 타입의 엔드포인트를 정의합니다.
 * 이떄 타입의 구분은 인스턴스(baseURL)에 따라 결정됩니다.
 * 타입 아래 더한 Depth를 가지는 것은 불가능합니다. (ex. AUTH.LOGIN.DETAIL.USER_ID)
 * 현재 Depth 지켜서 엔드포인트 추가해주세요.
 */
export const END_POINT = {
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    REFRESH: '/api/v1/auth/reissue',
  },
  ADMIN: {},
  USER: {
    SIGNUP: '/api/v1/users/signup',
  },
} as const;
