import { useState } from 'react';

import { useScheduleList } from '~/admin/entities/admin-schedule/model';
import type { GraduationUserSummary } from '~/admin/entities/graduation-users/api';
import { useFetchGraduationUsers } from '~/admin/entities/graduation-users/model';
import {
  useGraduationApproval,
  useGraduationDisapproval,
} from '~/admin/features/graduationApproval';
import { certColumns } from '~/admin/pages/certification/constants/certificationColumns';
import type { CertRow } from '~/admin/pages/certification/types/row';
import { thesisColumns } from '~/admin/pages/thesis/constants/thesisColumns';
import type { ThesisRow } from '~/admin/pages/thesis/types/row';
import * as style from '~/admin/shared/styles/adminPage.css';
import { DataTable, Toolbar, UserDetailModal } from '~/admin/shared/ui';
import type { Column } from '~/admin/shared/ui/DataTable/DataTable';
import {
  extractPeriodData,
  getCurrentThesisStageState,
  getThesisDisapprovalStageState,
} from '~/admin/shared/utils';
import {
  useAdminDownload,
  useAdminSelection,
} from '~/admin/widgets/GraduationManagementTable/model';
import { StudentAddModal } from '~/admin/widgets/StudentAddModal';

type GraduationType = 'THESIS' | 'CERTIFICATE';
type AdminTableRow = CertRow | ThesisRow;

interface GraduationManagementTableProps {
  page: number;
  pageSize: number;
  query: string;
  graduationType: GraduationType;
  onQueryChange: (v: string) => void;
}

export default function GraduationManagementTable({
  page,
  pageSize,
  query,
  graduationType,
  onQueryChange,
}: GraduationManagementTableProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<number>();

  const { data: schedules } = useScheduleList();

  const { data, isLoading } = useFetchGraduationUsers({
    page: page - 1,
    size: pageSize,
    name: query || undefined,
    graduationType,
  });

  const getThesisCurrentStage = (user: GraduationUserSummary) =>
    user.status?.type === 'THESIS'
      ? getCurrentThesisStageState(user.status)
      : null;

  const getThesisDisapprovalStage = (user: GraduationUserSummary) =>
    user.status?.type === 'THESIS'
      ? getThesisDisapprovalStageState(user.status)
      : null;

  const rows: AdminTableRow[] =
    graduationType === 'THESIS' && data
      ? data.contents.map((user: GraduationUserSummary, idx: number) => {
          const currentStage = getThesisCurrentStage(user);
          return {
            id: user.id,
            no: (page - 1) * pageSize + idx + 1,
            studentId: user.studentId,
            name: user.name,
            advisor: user.advisorProfessor,
            gradTerm: user.graduationDate,
            status: currentStage?.stage ?? '중간보고서',
            submissionStatus: currentStage?.submissionStatus ?? '미제출',
            approved: currentStage?.approvalStatus ?? '미승인',
          };
        })
      : graduationType === 'CERTIFICATE' && data
        ? data.contents.map((user: GraduationUserSummary, idx: number) => {
            const cert =
              user.status?.type === 'CERTIFICATE' ? user.status : null;
            return {
              id: user.id,
              no: (page - 1) * pageSize + idx + 1,
              studentId: user.studentId,
              name: user.name,
              status: cert?.submitted ? '제출' : '미제출',
              approved: cert?.approval ? '승인' : '미승인',
            };
          })
        : [];

  const { selectedIds, toggleAll, toggleOne, resetSelection } =
    useAdminSelection(rows);

  const { handleDownload } = useAdminDownload(graduationType);

  const approvalStatus =
    graduationType === 'THESIS'
      ? {
          isSubmitted: (u: GraduationUserSummary) =>
            Boolean(getThesisCurrentStage(u)?.isSubmitted),
          isApproved: (u: GraduationUserSummary) =>
            Boolean(getThesisCurrentStage(u)?.isApproved),
        }
      : {
          isSubmitted: (u: GraduationUserSummary) =>
            u.status?.type === 'CERTIFICATE' && u.status.submitted,
          isApproved: (u: GraduationUserSummary) =>
            u.status?.type === 'CERTIFICATE' && u.status.approval,
        };

  const disapprovalStatus =
    graduationType === 'THESIS'
      ? {
          isSubmitted: (u: GraduationUserSummary) =>
            Boolean(getThesisDisapprovalStage(u)?.isSubmitted),
          isApproved: (u: GraduationUserSummary) =>
            Boolean(getThesisDisapprovalStage(u)?.isApproved),
        }
      : approvalStatus;

  const { handleApproveSelected } = useGraduationApproval({
    items: data?.contents ?? [],
    selectedIds,
    getId: (u: GraduationUserSummary) => u.id,
    getLabel: (u: GraduationUserSummary) => `${u.studentId} ${u.name}`,
    status: approvalStatus,
    onSuccess: resetSelection,
  });

  const { handleDisapproveSelected } = useGraduationDisapproval({
    items: data?.contents ?? [],
    selectedIds,
    getId: (u: GraduationUserSummary) => u.id,
    getLabel: (u: GraduationUserSummary) => `${u.studentId} ${u.name}`,
    status: disapprovalStatus,
    onSuccess: resetSelection,
  });

  const handleOpenModal = (id: number) => {
    setSelectedStudentId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudentId(undefined);
  };

  const columns: Column<AdminTableRow>[] =
    graduationType === 'THESIS'
      ? (thesisColumns(handleOpenModal) as Column<AdminTableRow>[])
      : (certColumns(handleOpenModal) as Column<AdminTableRow>[]);

  return (
    <>
      <Toolbar
        selectedCount={selectedIds.length}
        query={query}
        onQueryChange={onQueryChange}
        onApprove={handleApproveSelected}
        onDisapprove={handleDisapproveSelected}
        onDownload={handleDownload}
        onAddStudent={() => setIsAddModalOpen(true)}
      />
      <div className={style.card}>
        <DataTable<AdminTableRow>
          rows={rows}
          getRowId={r => r.id}
          columns={columns}
          onToggleAll={toggleAll}
          selectedIds={selectedIds}
          onToggleOne={toggleOne}
          emptyText={isLoading ? '불러오는 중...' : undefined}
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
      <StudentAddModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </>
  );
}
