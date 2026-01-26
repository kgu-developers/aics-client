import { useNavigate, useSearch } from '@tanstack/react-router';
import { useState, useEffect } from 'react';

import { useToast } from '~/shared/hooks';

import { allManagementColumns } from '../constants/allManagementColumns';
import { TYPE_LABEL, TYPE_UNKNOWN } from '../constants/allManagementTexts';
import { AllManagementRow } from '../types/allManagement';
import { getStatusLabel } from '../utils';

import { useScheduleList } from '~/admin/entities/admin-schedule/model';
import { useFetchGraduationUsers } from '~/admin/entities/graduation-users/model/useFetchGraduationUsers';
import { useRemoveGraduationUsers } from '~/admin/entities/graduation-users/model/useRemoveGraduationUsers';
import {
  DELETE_ALERT,
  DELETE_CONFIRM_TITLE,
} from '~/admin/shared/ui/Toolbar/toolbarTexts';
import {
  useAdminDownload,
  useAdminPagination,
  useAdminSelection,
} from '~/admin/widgets/Table/model';

export const useAllManagement = () => {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: '/all' });
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

  return {
    page,
    pageSize,
    totalItems,
    rows,
    isLoading,
    selectedIds,
    toggleAll,
    toggleOne,
    onNameClick,
    handleDeleteSelected,
    handleDownload,
    query,
    handleQueryChange,
    handlePageSizeChange,
    isModalOpen,
    selectedStudentId,
    handleCloseModal,
    columns,
    schedules,
    setPage,
  };
};
