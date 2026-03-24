import '@tanstack/react-query';

declare module '@tanstack/react-query' {
  interface Register {
    queryMeta: {
      suppressErrorToast?: boolean;
    };
    mutationMeta: {
      suppressErrorToast?: boolean;
    };
  }
}
