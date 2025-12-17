import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { DataTable, Header, Pagination, Toolbar } from '~/shared/components';

import { useGraduationUserSubmit } from '~/widgets/StudentAddModal/hooks/useSubmitGraduationUser.ts';

import {
  useFetchGraduationUsers,
  type GraduationUserStatus,
} from '../api/fetchGraduationUsers';
import { allManagementColumns } from '../constants/allManagementColumns.tsx';
import * as style from '../styles/AllManagementPage.css.ts';
import type { AllManagementRow } from '../types/allManagement';
import { handleDownload } from '../utils';
import UserDetailModal from './UserDetailModal/UserDetailModal';

function formatStatus(status: GraduationUserStatus) {
  if (status.type === 'CERTIFICATE') {
    if (!status.submitted) return '미제출';
    return status.approval ? '제출-승인' : '제출';
  }

  if (!status.finalThesis.submitted) return '최종보고서-미제출';
  if (!status.midThesis.submitted) return '중간보고서-미제출';
  if (status.finalThesis.approval && status.midThesis.approval) {
    return '제출-승인';
  }
  return '제출';
}

export default function AllManagementPage() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  });

  const rows: AllManagementRow[] = data
    ? data.contents.map((user, idx) => ({
        id: user.id,
        no: (page - 1) * pageSize + idx + 1,
        studentId: user.studentId,
        name: user.name,
        type: user.graduationType === 'THESIS' ? '졸업 논문' : '자격증',
        status: formatStatus(user.status),
      }))
    : [];

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
        <Header title='졸업 대상자 전체 관리' />

        <Toolbar
          selectedCount={selectedIds.length}
          query={query}
          onQueryChange={v => {
            setQuery(v);
            setPage(1);
          }}
          onApprove={() => {}}
          onDownload={() => handleDownload(selectedIds, rows)}
          onAddStudents={handleAddStudents}
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
            emptyText={isLoading ? '불러오는 중입니다...' : undefined}
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
