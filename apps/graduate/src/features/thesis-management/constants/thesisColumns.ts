import type { Column } from '~/shared/components/DataTable/DataTable'
import type { ThesisRow } from '~/features/thesis-management/types/rows'
import * as col from '../styles/thesisColumns.css'

export const thesisColumns: ReadonlyArray<Column<ThesisRow>> = [
  { key: 'no',        header: '번호',     thClassName: col.thNo,        cell: (r) => r.no },
  { key: 'studentId', header: '학번',     thClassName: col.thStudentId, cell: (r) => r.studentId },
  { key: 'name',      header: '이름',     thClassName: col.thName,      cell: (r) => r.name },
  { key: 'advisor',   header: '지도교수', thClassName: col.thAdvisor,   cell: (r) => r.advisor },
  { key: 'gradTerm',  header: '졸업 년도', thClassName: col.thGradTerm, cell: (r) => r.gradTerm },
  { key: 'status',    header: '중간보고서',     thClassName: col.thStatus,     cell: (r) => r.status },
  { key: 'approved',  header: '승인 여부', thClassName: col.thApproved, cell: (r) => r.approved },
] as const
