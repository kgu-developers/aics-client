import type { ThesisRow } from '../types/row';

import { HEADER_NAME } from '~/admin/pages/all/constants/allManagementTexts';
import { NameCellButton } from '~/admin/shared/ui';
import type { Column } from '~/admin/shared/ui/DataTable/DataTable';

export const thesisColumns = (
  onNameClick: (id: number) => void,
): Column<ThesisRow>[] => [
  { key: 'no', header: '번호', width: 30, cell: r => r.no },
  { key: 'studentId', header: '학번', width: 90, cell: r => r.studentId },
  {
    key: 'name',
    header: HEADER_NAME,
    width: 50,
    cell: r => (
      <NameCellButton name={r.name} onClick={() => onNameClick(r.id)} />
    ),
  },
  { key: 'advisor', header: '지도교수', width: 50, cell: r => r.advisor },
  { key: 'gradTerm', header: '졸업 년도', width: 90, cell: r => r.gradTerm },
  { key: 'status', header: '상태', width: 130, cell: r => r.status },
  {
    key: 'submissionStatus',
    header: '제출 상태',
    width: 70,
    cell: r => r.submissionStatus,
  },
  { key: 'approved', header: '승인 여부', width: 70, cell: r => r.approved },
];
