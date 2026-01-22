import { useSearch, useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';

import { DataTable, Header, Pagination, Toolbar } from '~/shared/components';
import {
  DELETE_ALERT,
  DELETE_CONFIRM_TITLE,
} from '~/shared/components/Toolbar/toolbarTexts';
import {
  useAdminDownload,
  useAdminPagination,
  useAdminSelection,
  useFetchGraduationUsers,
  useRemoveGraduationUsers,
  useToast,
  useScheduleList,
} from '~/shared/hooks';

import * as style from '~/shared/styles/adminPage.css';

import { allManagementColumns } from '../constants/allManagementColumns';
import {
  LOADING_TEXT,
  TITLE_ALL_MANAGEMENT,
  TYPE_LABEL,
  TYPE_UNKNOWN,
} from '../constants/allManagementTexts';
import type { AllManagementRow } from '../types/allManagement';
import { extractPeriodData, getStatusLabel } from '../utils';
import UserDetailModal from './UserDetailModal.tsx';

export default function AllManagementPage() {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: '/_afterLogin/all' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<number>();
  const { toast, confirm } = useToast();

  const {
    page,
    setPage,
    pageSize,
    query,
    handleQueryChange,
    handlePageSizeChange,
    resetToFirstPage,
  } = useAdminPagination();

  useEffect(() => {
    if (searchParams?.graduationUserId) {
      setSelectedStudentId(Number(searchParams.graduationUserId));
      setIsModalOpen(true);
      navigate({
        to: '/all',
        search: {},
        replace: true,
      });
    }
  }, [searchParams, navigate]);

  const { data: schedules, error: scheduleError } = useScheduleList();

  if (scheduleError) {
    toast.error('스케줄 정보를 불러오는데 실패했습니다.');
  }

  const { data, isLoading } = useFetchGraduationUsers({
    page: page - 1,
    size: pageSize,
    name: query || undefined,
  });

  const rows: AllManagementRow[] = data
    ? data.contents.map((user, idx) => {
        const graduationTypeLabel =
          TYPE_LABEL[user.graduationType] ?? TYPE_UNKNOWN;

        return {
          id: user.id,
          no: (page - 1) * pageSize + idx + 1,
          studentId: user.studentId,
          name: user.name,
          graduationTypeLabel,
          graduationDate: user.graduationDate,
          statusText: getStatusLabel(user.status),
        };
      })
    : [];

  const { selectedIds, toggleAll, toggleOne, resetSelection } =
    useAdminSelection(rows);

  const { handleDownload } = useAdminDownload();

  const handleResetSelection = () => {
    resetSelection();
    resetToFirstPage();
  };

  const { removeGraduationUsers } = useRemoveGraduationUsers({
    onSuccess: handleResetSelection,
  });

  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) return;
    confirm({
      title: DELETE_CONFIRM_TITLE,
      content: DELETE_ALERT,
      okText: '삭제',
      cancelText: '취소',
      onOk: async () => {
        try {
          await removeGraduationUsers(selectedIds);
          toast.success('선택한 학생을 삭제했습니다.');
        } catch (error) {
          toast.error(
            error instanceof Error ? error.message : '삭제에 실패했습니다.',
          );
        }
      },
    });
  };

  const onNameClick = (id: number) => {
    setSelectedStudentId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudentId(undefined);
  };

  const columns = allManagementColumns(onNameClick);

  const totalItems = data?.pageable.totalElements ?? 0;

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title={TITLE_ALL_MANAGEMENT} />

        <Toolbar
          selectedCount={selectedIds.length}
          query={query}
          onQueryChange={handleQueryChange}
          onApprove={() => {}}
          onDeleteSelected={handleDeleteSelected}
          onDownload={handleDownload}
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
        {selectedStudentId && (
          <UserDetailModal
            isModalOpen={isModalOpen}
            setIsModalOpen={handleCloseModal}
            graduationUserId={selectedStudentId}
            period={extractPeriodData(schedules)}
          />
        )}
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
