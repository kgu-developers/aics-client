import { DataTable, Header, Pagination, Toolbar } from '~/shared/components';

import { thesisColumns } from '../constants/thesisColumns';
import type { ThesisRow } from '../types/row';

import { type GraduationUserSummary } from '~/admin/shared/api';
import {
  useAdminDownload,
  useAdminPagination,
  useAdminSelection,
  useApproveGraduationUsers,
  useFetchGraduationUsers,
} from '~/admin/shared/hooks';
import * as style from '~/admin/shared/styles/adminPage.css';

export default function ThesisAdminPage() {
  const {
    page,
    setPage,
    pageSize,
    query,
    handleQueryChange,
    handlePageSizeChange,
    resetToFirstPage,
  } = useAdminPagination();

  const { data, isLoading } = useFetchGraduationUsers({
    page: page - 1,
    size: pageSize,
    name: query || undefined,
    graduationType: 'THESIS',
  });

  const rows: ThesisRow[] = data
    ? data.contents.map((user: GraduationUserSummary, idx: number) => {
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

  const { selectedIds, toggleAll, toggleOne, resetSelection } =
    useAdminSelection(rows);

  const { handleDownload } = useAdminDownload('THESIS');

  const handleResetSelection = () => {
    resetSelection();
    resetToFirstPage();
  };

  const { handleApproveSelected } = useApproveGraduationUsers({
    items: data?.contents ?? [],
    selectedIds,
    getId: (user: GraduationUserSummary) => user.id,
    getLabel: (user: GraduationUserSummary) => `${user.studentId} ${user.name}`,
    status: {
      isSubmitted: (user: GraduationUserSummary) => {
        const status = user.status;
        if (!status || status.type !== 'THESIS') return false;
        return status.midThesis.submitted && status.finalThesis.submitted;
      },
      isApproved: (user: GraduationUserSummary) => {
        const status = user.status;
        if (!status || status.type !== 'THESIS') return false;
        return status.midThesis.approval && status.finalThesis.approval;
      },
    },
    onSuccess: handleResetSelection,
  });

  const totalItems = data?.pageable.totalElements ?? 0;

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title='졸업 논문 관리' />

        <Toolbar
          selectedCount={selectedIds.length}
          query={query}
          onQueryChange={handleQueryChange}
          onDownload={handleDownload}
          onApprove={handleApproveSelected}
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
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
}
