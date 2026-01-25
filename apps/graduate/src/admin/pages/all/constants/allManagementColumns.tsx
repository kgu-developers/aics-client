import {
  HEADER_NAME,
  HEADER_NO,
  HEADER_STATUS,
  HEADER_STUDENT_ID,
  HEADER_TYPE,
} from './allManagementTexts';
import type { AllManagementRow } from '../types/allManagement';

import type { Column } from '~/admin/shared/components/DataTable/DataTable';
import { vars } from '~/vars.css';

export const allManagementColumns = (
  onNameClick: (id: number) => void,
): ReadonlyArray<Column<AllManagementRow>> =>
  [
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
        <button
          type='button'
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            margin: 0,
            cursor: 'pointer',
            color: vars.colors.main,
            textDecoration: 'underline',
          }}
          onClick={() => onNameClick(r.id)}
        >
          {r.name}
        </button>
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
  ] as const;
