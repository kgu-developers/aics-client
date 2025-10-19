import type { Column } from '~/shared/components/DataTable/DataTable'
import type { CertRow } from '~/features/certification-management/types/row'
import * as col from '~/features/certification-management/styles/certColumns.css'

export const certColumns: ReadonlyArray<Column<CertRow>> = [
  { key: 'no',        header: '번호',     thClassName: col.thNo,        cell: (r) => r.no },
  { key: 'studentId', header: '학번',     thClassName: col.thStudentId, cell: (r) => r.studentId },
  { key: 'name',      header: '이름',     thClassName: col.thName,      tdClassName: col.tdNameLeft, cell: (r) => r.name },
  { key: 'status',    header: '상태',     thClassName: col.thStatus,    cell: (r) => r.status },
  { key: 'approved',  header: '승인 여부', thClassName: col.thApproved, cell: (r) => r.approved },
] as const
