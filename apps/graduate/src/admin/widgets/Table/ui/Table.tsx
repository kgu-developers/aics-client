import { useGraduationApproval } from '~/admin/entities/graduation-approval/model';
import { GraduationUserSummary } from '~/admin/entities/graduation-users/api';
import { useFetchGraduationUsers } from '~/admin/entities/graduation-users/model';
import { certColumns } from '~/admin/pages/certification/constants/certColumns';
import { thesisColumns } from '~/admin/pages/thesis/constants/thesisColumns';
import { DataTable, Toolbar } from '~/admin/shared/components';
import * as style from '~/admin/shared/styles/adminPage.css';
import {
  useAdminSelection,
  useAdminDownload,
} from '~/admin/widgets/Table/model';

type GraduationType = 'THESIS' | 'CERTIFICATE';

interface TableProps {
  page: number;
  pageSize: number;
  query: string;
  graduationType: GraduationType;
  onQueryChange: (v: string) => void;
}

export default function Table({
  page,
  pageSize,
  query,
  graduationType,
  onQueryChange,
}: TableProps) {
  const { data, isLoading } = useFetchGraduationUsers({
    page: page - 1,
    size: pageSize,
    name: query || undefined,
    graduationType,
  });

  const rows =
    graduationType === 'THESIS' && data
      ? data.contents.map((user: GraduationUserSummary, idx: number) => {
          const thesis = user.status?.type === 'THESIS' ? user.status : null;
          return {
            id: user.id,
            no: (page - 1) * pageSize + idx + 1,
            studentId: user.studentId,
            name: user.name,
            advisor: '-',
            gradTerm: user.graduationDate,
            status: thesis?.finalThesis.approval
              ? '승인'
              : thesis?.finalThesis.submitted
                ? '검토중'
                : '미제출',
            submissionStatus:
              thesis?.midThesis.submitted && thesis?.finalThesis.submitted
                ? '제출'
                : '미제출',
            approved: thesis?.finalThesis.approval ? '승인' : '미승인',
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

  const { handleApproveSelected } = useGraduationApproval({
    items: data?.contents ?? [],
    selectedIds,
    getId: (u: GraduationUserSummary) => u.id,
    getLabel: (u: GraduationUserSummary) => `${u.studentId} ${u.name}`,
    status:
      graduationType === 'THESIS'
        ? {
            isSubmitted: u =>
              u.status?.type === 'THESIS' &&
              u.status.midThesis.submitted &&
              u.status.finalThesis.submitted,
            isApproved: u =>
              u.status?.type === 'THESIS' &&
              u.status.midThesis.approval &&
              u.status.finalThesis.approval,
          }
        : {
            isSubmitted: u =>
              u.status?.type === 'CERTIFICATE' && u.status.submitted,
            isApproved: u =>
              u.status?.type === 'CERTIFICATE' && u.status.approval,
          },
    onSuccess: resetSelection,
  });

  const columns = graduationType === 'THESIS' ? thesisColumns : certColumns;

  return (
    <>
      <Toolbar
        selectedCount={selectedIds.length}
        query={query}
        onQueryChange={onQueryChange}
        onApprove={handleApproveSelected}
        onDownload={handleDownload}
      />
      <div className={style.card}>
        <DataTable
          rows={rows}
          getRowId={(r: any) => r.id}
          columns={columns as any}
          onToggleAll={toggleAll}
          selectedIds={selectedIds}
          onToggleOne={toggleOne}
          emptyText={isLoading ? '불러오는 중...' : undefined}
        />
      </div>
    </>
  );
}
