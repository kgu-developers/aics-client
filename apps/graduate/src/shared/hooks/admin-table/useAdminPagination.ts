import { useState, useCallback } from 'react';

const DEFAULT_PAGE_SIZE = 10;

export function useAdminPagination(defaultPageSize = DEFAULT_PAGE_SIZE) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [query, setQuery] = useState('');

  const resetToFirstPage = useCallback(() => {
    setPage(1);
  }, []);

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
    setPage(1);
  }, []);

  const handlePageSizeChange = useCallback((size: number) => {
    setPageSize(size);
    setPage(1);
  }, []);

  return {
    page,
    setPage,
    pageSize,
    setPageSize,
    query,
    setQuery,
    resetToFirstPage,
    handleQueryChange,
    handlePageSizeChange,
  };
}
