import type { Column } from '~/shared/components/DataTable/DataTable';

import type { ThesisRow } from '~/features/thesis-management/types/rows';

export const thesisColumns: ReadonlyArray<Column<ThesisRow>> = [
  { key: 'no', header: '번호', width: 30, cell: r => r.no },
  { key: 'studentId', header: '학번', width: 90, cell: r => r.studentId },
  { key: 'name', header: '이름', width: 50, cell: r => r.name },
  { key: 'advisor', header: '지도교수', width: 50, cell: r => r.advisor },
  { key: 'gradTerm', header: '졸업 년도', width: 90, cell: r => r.gradTerm },
  { key: 'status', header: '상태', width: 130, cell: r => r.status },
  { key: 'submissionStatus', header: '제출 상태', width: 70, cell: r => r.submissionStatus },
  { key: 'approved', header: '승인 여부', width: 70, cell: r => r.approved },
] as const;
