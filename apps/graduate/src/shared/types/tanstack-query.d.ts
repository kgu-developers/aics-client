import '@tanstack/react-query';

declare module '@tanstack/react-query' {
  interface Register {
    queryMeta: {
      /** true이면 QueryCache 전역 onError에서 토스트를 띄우지 않습니다 */
      suppressErrorToast?: boolean;
    };
    mutationMeta: {
      /** true이면 MutationCache 전역 onError에서 토스트를 띄우지 않습니다 */
      suppressErrorToast?: boolean;
    };
  }
}
