import type { Column } from '~/shared/components/DataTable/DataTable';

import type { CertRow } from '~/features/certification-management/types/row';

export const certColumns: ReadonlyArray<Column<CertRow>> = [
  { key: 'no', header: '번호', width: 56, cell: r => r.no },
  { key: 'studentId', header: '학번', width: 120, cell: r => r.studentId },
  { key: 'name', header: '이름', width: 160, cell: r => r.name },
  { key: 'status', header: '상태', width: 120, cell: r => r.status },
  { key: 'approved', header: '승인 여부', width: 120, cell: r => r.approved },
] as const;
