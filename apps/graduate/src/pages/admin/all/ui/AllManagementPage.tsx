
import { useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import { useState } from 'react';

import { DataTable, Header, Pagination, Toolbar } from '~/shared/components';
import { getProfessorById } from '~/shared/constants';

import {
  useFetchGraduationUsers,
  type GraduationUserStatus,
} from '../api/fetchGraduationUsers';
import { useSubmitGraduationUser } from '../api/submitGraduationUser';
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
  const submitGraduationUser = useSubmitGraduationUser();

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

  const columns = allManagementColumns(_row => {
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

  const resetAndRefetch = async () => {
    setSelectedIds([]);
    setPage(1);
    await queryClient.invalidateQueries({ queryKey: ['graduationUsers'] });
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
          onAddStudent={async values => {
            const professor = getProfessorById(values.advisorId);
            if (!professor) {
              message.error('지도교수를 찾을 수 없어요.');
              throw new Error('Professor not found');
            }

            try {
              await submitGraduationUser.mutateAsync({
                studentId: values.studentNo,
                name: values.name,
                advisorProfessor: professor.name,
                capstoneCompletion: values.capstoneStatus === 'PASSED',
                department: values.department,
                graduationDate: `${values.graduationMonth}-01`,
              });
              message.success('학생을 추가했어요.');
              await resetAndRefetch();
            } catch (error) {
              message.error(
                error instanceof Error
                  ? error.message
                  : '학생 추가에 실패했어요.',
              );
              throw error;
            }
          }}
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
