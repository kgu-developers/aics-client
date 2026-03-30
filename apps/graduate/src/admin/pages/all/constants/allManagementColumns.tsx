import {
  HEADER_NAME,
  HEADER_NO,
  HEADER_STATUS,
  HEADER_STUDENT_ID,
  HEADER_TYPE,
} from './allManagementTexts';
import type { AllManagementRow } from '../types/allManagement';

import { NameCellButton } from '~/admin/shared/ui';
import type { Column } from '~/admin/shared/ui/DataTable/DataTable';

export const allManagementColumns = (
  onNameClick: (id: number) => void,
): Column<AllManagementRow>[] => [
  { key: 'no', header: HEADER_NO, width: 56, cell: r => r.no },
  {
    key: 'studentId',
    header: HEADER_STUDENT_ID,
    width: 100,
    cell: r => r.studentId,
  },
  {
    key: 'name',
    header: HEADER_NAME,
    width: 120,
    cell: r => (
      <NameCellButton name={r.name} onClick={() => onNameClick(r.id)} />
    ),
  },
  {
    key: 'type',
    header: HEADER_TYPE,
    width: 120,
    cell: r => r.graduationTypeLabel,
  },
  {
    key: 'status',
    header: HEADER_STATUS,
    width: 140,
    cell: r => r.statusText,
  },
];
