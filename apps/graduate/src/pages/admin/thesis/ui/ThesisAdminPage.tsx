import { message } from 'antd';
import { useState } from 'react';


import { DataTable, Header, Pagination, Toolbar } from '~/shared/components';
import {
  APPROVE_ALERT,
  APPROVE_EMPTY,
  APPROVE_FAILED,
  APPROVE_SUCCESS,
} from '~/shared/components/Toolbar/toolbarTexts';
import {
  useFetchGraduationUsers,
  useUpdateGraduationUsersBatchApprove,
} from '~/shared/hooks';

import { useSubmitGraduationUser } from '~/widgets/StudentAddModal/hooks/useSubmitGraduationUser';

import { handleDownload } from '../../all/utils';
import { thesisColumns } from '../constants/thesisColumns';
import * as style from '../styles/ThesisAdminPage.css';
import type { ThesisRow } from '../types/rows';

export default function ThesisAdminPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const resetSelection = () => {
    setSelectedIds([]);
    setPage(1);
  };

  const { submitBatch } = useSubmitGraduationUser({
    onSuccess: resetSelection,
  });

  const { approveGraduationUsers } = useUpdateGraduationUsersBatchApprove({
    onSuccess: resetSelection,
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

  const handleApproveSelected = async () => {
    if (selectedIds.length === 0) {
      message.warning(APPROVE_EMPTY);
      return;
    }
    const shouldApprove = window.confirm(APPROVE_ALERT);
    if (!shouldApprove) return;
    try {
      await approveGraduationUsers(selectedIds);
      message.success(APPROVE_SUCCESS);
    } catch (error) {
      message.error(
        error instanceof Error ? error.message : APPROVE_FAILED,
      );
    }
  };

  const handleDownloadExcel = async () => {
    try {
      await handleDownload('THESIS');
    } catch (error) {
      message.error(
        error instanceof Error ? error.message : '다운로드에 실패했습니다.',
      );
    }
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
          onDownload={handleDownloadExcel}
          onApprove={handleApproveSelected}
          onAddStudents={submitBatch}
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
