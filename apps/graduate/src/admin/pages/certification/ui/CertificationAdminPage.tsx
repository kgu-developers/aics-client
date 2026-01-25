import { DataTable, Header, Pagination, Toolbar } from '~/shared/components';

import { certColumns } from '../constants/certColumns';
import type { CertRow } from '../types/row';

import {
  useAdminDownload,
  useAdminPagination,
  useAdminSelection,
  useApproveGraduationUsers,
  useFetchGraduationUsers,
} from '~/admin/shared/hooks';
import * as style from '~/admin/shared/styles/adminPage.css';

export default function CertificationAdminPage() {
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
    graduationType: 'CERTIFICATE',
  });

  const rows: CertRow[] = data
    ? data.contents.map((user, idx) => {
        const certStatus =
          user.status && user.status.type === 'CERTIFICATE'
            ? user.status
            : null;
        const status = certStatus?.submitted ? '제출' : '미제출';
        const approved = certStatus?.approval ? '승인' : '미승인';
        return {
          id: user.id,
          no: (page - 1) * pageSize + idx + 1,
          studentId: user.studentId,
          name: user.name,
          status,
          approved,
        };
      })
    : [];

  const { selectedIds, toggleAll, toggleOne, resetSelection } =
    useAdminSelection(rows);

  const { handleDownload } = useAdminDownload('CERTIFICATE');

  const handleResetSelection = () => {
    resetSelection();
    resetToFirstPage();
  };

  const { handleApproveSelected } = useApproveGraduationUsers({
    items: data?.contents ?? [],
    selectedIds,
    getId: user => user.id,
    getLabel: user => `${user.studentId} ${user.name}`,
    status: {
      isSubmitted: user => {
        const status = user.status;
        if (!status || status.type !== 'CERTIFICATE') return false;
        return status.submitted;
      },
      isApproved: user => {
        const status = user.status;
        if (!status || status.type !== 'CERTIFICATE') return false;
        return status.approval;
      },
    },
    onSuccess: handleResetSelection,
  });

  const totalItems = data?.pageable.totalElements ?? 0;

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title='자격증 관리' />

        <Toolbar
          selectedCount={selectedIds.length}
          query={query}
          onQueryChange={handleQueryChange}
          onApprove={handleApproveSelected}
          onDownload={handleDownload}
        />

        <div className={style.card}>
          <DataTable<CertRow>
            rows={rows}
            getRowId={r => r.id}
            columns={certColumns}
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
