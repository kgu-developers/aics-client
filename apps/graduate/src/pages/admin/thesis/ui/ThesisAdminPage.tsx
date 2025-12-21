import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { DataTable, Header, Pagination, Toolbar } from '~/shared/components';
import { useFetchGraduationUsers } from '~/shared/hooks/useFetchGraduationUsers';

import { useGraduationUserSubmit } from '~/widgets/StudentAddModal/hooks/useSubmitGraduationUser';

import { thesisColumns } from '../constants/thesisColumns';
import * as style from '../styles/ThesisAdminPage.css';
import type { ThesisRow } from '../types/rows';

export default function ThesisAdminPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const resetAndRefetch = async () => {
    setSelectedIds([]);
    setPage(1);
    await queryClient.invalidateQueries({ queryKey: ['graduationUsers'] });
  };

  const { handleAddStudents } = useGraduationUserSubmit({
    onSuccess: resetAndRefetch,
  });

  const { data, isLoading } = useFetchGraduationUsers({
    page: page - 1,
    size: pageSize,
    name: query || undefined,
    graduationType: 'THESIS',
  });

  const rows: ThesisRow[] = data
    ? data.contents.map((user, idx) => {
        const thesis = user.status?.type === 'THESIS' ? user.status : null;
        const status = thesis?.finalThesis.approval
          ? '승인'
          : thesis?.finalThesis.submitted
            ? '검토중'
            : '미제출';
        const submissionStatus =
          thesis?.midThesis.submitted && thesis?.finalThesis.submitted
            ? '제출'
            : '미제출';
        const approved = thesis?.finalThesis.approval ? '승인' : '미승인';

        return {
          id: user.id,
          no: (page - 1) * pageSize + idx + 1,
          studentId: user.studentId,
          name: user.name,
          advisor: '-',
          gradTerm: user.graduationDate,
          status,
          submissionStatus,
          approved,
        };
      })
    : [];

  const totalItems = data?.pageable.totalElements ?? 0;

  const toggleAll = () => {
    const pageIds = rows.map(r => r.id);
    const allChecked =
      pageIds.length > 0 && pageIds.every(id => selectedIds.includes(id));
    setSelectedIds(prev =>
      allChecked
        ? prev.filter(id => !pageIds.includes(id))
        : Array.from(new Set([...prev, ...pageIds])),
    );
  };

  const toggleOne = (id: string | number) => {
    const numericId = Number(id);
    setSelectedIds(prev =>
      prev.includes(numericId)
        ? prev.filter(x => x !== numericId)
        : [...prev, numericId],
    );
  };

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title='졸업 논문 관리' />

        <Toolbar
          selectedCount={selectedIds.length}
          query={query}
          onQueryChange={v => {
            setQuery(v);
            setPage(1);
          }}
          onDownload={() => {}}
          onApprove={() => {}}
          onAddStudents={handleAddStudents}
        />

        <div className={style.card}>
          <DataTable<ThesisRow>
            rows={rows}
            getRowId={r => r.id}
            columns={thesisColumns}
            onToggleAll={toggleAll}
            selectedIds={selectedIds}
            onToggleOne={toggleOne}
            emptyText={isLoading ? '불러오는 중...' : undefined}
          />
        </div>
        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onGoto={setPage}
          onPageSizeChange={size => {
            setPageSize(size);
            setPage(1);
          }}
        />
      </div>
    </div>
  );
}
