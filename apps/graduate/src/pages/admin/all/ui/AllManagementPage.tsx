

import { message } from 'antd';
import { useState } from 'react';

import type { GraduationUserStatus } from '~/shared/api/fetchGraduationUsers';
import { DataTable, Header, Pagination, Toolbar } from '~/shared/components';
import { DELETE_ALERT } from '~/shared/components/Toolbar/toolbarTexts';
import {
  useFetchGraduationUsers,
  useRemoveGraduationUsers,
  useSubmitGraduationUser,
} from '~/shared/hooks';

import { allManagementColumns } from '../constants/allManagementColumns';
import {
  LOADING_TEXT,
  STATUS_FINAL_NOT_SUBMITTED,
  STATUS_MID_NOT_SUBMITTED,
  STATUS_NOT_SUBMITTED,
  STATUS_SUBMITTED,
  STATUS_SUBMITTED_APPROVED,
  STATUS_UNKNOWN,
  TITLE_ALL_MANAGEMENT,
  TYPE_LABEL,
  TYPE_UNKNOWN,
} from '../constants/allManagementTexts';
import * as style from '../styles/AllManagementPage.css.ts';
import type { AllManagementRow } from '../types/allManagement';
import { handleDownload } from '../utils';
import UserDetailModal from './UserDetailModal/UserDetailModal';

function formatStatus(status?: GraduationUserStatus | null) {
  if (!status) return STATUS_UNKNOWN;
  if (status.type === 'CERTIFICATE') {
    if (!status.submitted) return STATUS_NOT_SUBMITTED;
    return status.approval ? STATUS_SUBMITTED_APPROVED : STATUS_SUBMITTED;
  }

  if (!status.finalThesis.submitted) return STATUS_FINAL_NOT_SUBMITTED;
  if (!status.midThesis.submitted) return STATUS_MID_NOT_SUBMITTED;
  if (status.finalThesis.approval && status.midThesis.approval) {
    return STATUS_SUBMITTED_APPROVED;
  }
  return STATUS_SUBMITTED;
}

export default function AllManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const resetSelection = () => {
    setSelectedIds([]);
    setPage(1);
  };

  const { submitSingle, submitBatch } = useSubmitGraduationUser({
    onSuccess: resetSelection,
  });

  const { removeGraduationUsers } = useRemoveGraduationUsers({
    onSuccess: resetSelection,
  });

  const { data, isLoading } = useFetchGraduationUsers({
    page: page - 1,
    size: pageSize,
    name: query || undefined,
  });

  const rows: AllManagementRow[] = data
    ? data.contents.map((user, idx) => {
        const type = TYPE_LABEL[user.graduationType] ?? TYPE_UNKNOWN;

        return {
          id: user.id,
          no: (page - 1) * pageSize + idx + 1,
          studentId: user.studentId,
          name: user.name,
          type,
          status: formatStatus(user.status),
        };
      })
    : [];

  const handleDeleteSelected = async () => {
    if (selectedIds.length === 0) return;
    const shouldDelete = window.confirm(DELETE_ALERT);
    if (!shouldDelete) return;
    try {
      await removeGraduationUsers(selectedIds);
      message.success('선택한 학생을 삭제했습니다.');
    } catch (error) {
      message.error(
        error instanceof Error ? error.message : '삭제에 실패했습니다.',
      );
    }
  };

  const columns = allManagementColumns(() => {
    setIsModalOpen(true);
  });
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
        <Header title={TITLE_ALL_MANAGEMENT} />

        <Toolbar
          selectedCount={selectedIds.length}
          query={query}
          onQueryChange={v => {
            setQuery(v);
            setPage(1);
          }}
          onApprove={() => {}}
          onDeleteSelected={handleDeleteSelected}
          onDownload={() => handleDownload(selectedIds, rows)}
          onAddStudent={submitSingle}
          onAddStudents={submitBatch}
          disabledApprove={true}
        />

        <div className={style.card}>
          <DataTable<AllManagementRow>
            rows={rows}
            getRowId={r => r.id}
            columns={columns}
            onToggleAll={toggleAll}
            selectedIds={selectedIds}
            onToggleOne={toggleOne}
            emptyText={isLoading ? LOADING_TEXT : undefined}
          />
        </div>
        <UserDetailModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
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
