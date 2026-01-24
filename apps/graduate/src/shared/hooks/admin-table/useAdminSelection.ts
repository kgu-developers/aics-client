import { useState, useCallback } from 'react';

export function useAdminSelection<T extends { id: number }>(rows: T[]) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleAll = useCallback(() => {
    const pageIds = rows.map(r => r.id);
    const allChecked =
      pageIds.length > 0 && pageIds.every(id => selectedIds.includes(id));
    setSelectedIds(prev =>
      allChecked
        ? prev.filter(id => !pageIds.includes(id))
        : Array.from(new Set([...prev, ...pageIds])),
    );
  }, [rows, selectedIds]);

  const toggleOne = useCallback((id: string | number) => {
    const numericId = Number(id);
    setSelectedIds(prev =>
      prev.includes(numericId)
        ? prev.filter(x => x !== numericId)
        : [...prev, numericId],
    );
  }, []);

  const resetSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  return {
    selectedIds,
    setSelectedIds,
    toggleAll,
    toggleOne,
    resetSelection,
  };
}
