import { useState } from 'react';

import { DataTable, Header, Pagination, Toolbar } from '~/shared/components';
import {
  APPROVE_ALERT,
  APPROVE_CONFIRM_TITLE,
  APPROVE_EMPTY,
  APPROVE_FAILED,
  APPROVE_SUCCESS,
} from '~/shared/components/Toolbar/toolbarTexts';
import {
  useFetchGraduationUsers,
  useUpdateGraduationUsersBatchApprove,
  useToast,
} from '~/shared/hooks';
import { downloadGraduationUsersExcel } from '~/shared/utils';

import { certColumns } from '../constants/certColumns';
import * as style from '../styles/CertificationAdminPage.css';
import type { CertRow } from '../types/row';

export default function CertificationAdminPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { toast, confirm } = useToast();

  const resetSelection = () => {
    setSelectedIds([]);
    setPage(1);
  };

  const { approveGraduationUsers } = useUpdateGraduationUsersBatchApprove({
    onSuccess: resetSelection,
  });

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

  const handleApproveSelected = () => {
    if (selectedIds.length === 0) {
      toast.warning(APPROVE_EMPTY);
      return;
    }
    confirm({
      title: APPROVE_CONFIRM_TITLE,
      content: APPROVE_ALERT,
      okText: '승인',
      cancelText: '취소',
      onOk: async () => {
        try {
          await approveGraduationUsers(selectedIds);
          toast.success(APPROVE_SUCCESS);
        } catch (error) {
          toast.error(error instanceof Error ? error.message : APPROVE_FAILED);
        }
      },
    });
  };

  const handleDownloadExcel = async () => {
    try {
      await downloadGraduationUsersExcel('CERTIFICATE');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : '다운로드에 실패했습니다.',
      );
    }
  };

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title='자격증 관리' />

        <Toolbar
          selectedCount={selectedIds.length}
          query={query}
          onQueryChange={v => {
            setQuery(v);
            setPage(1);
          }}
          onApprove={handleApproveSelected}
          onDownload={handleDownloadExcel}
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
          onPageSizeChange={size => {
            setPageSize(size);
            setPage(1);
          }}
        />
      </div>
    </div>
  );
}
