import type { Column } from '~/shared/components/DataTable/DataTable';

import type { AllManagementRow } from '../types/allManagement';

import { vars } from '~/vars.css';

export const allManagementColumns = (
  onNameClick: (row: AllManagementRow) => void,
): ReadonlyArray<Column<AllManagementRow>> =>
  [
    { key: 'no', header: '번호', width: 56, cell: r => r.no },
    { key: 'studentId', header: '학번', width: 100, cell: r => r.studentId },
    {
      key: 'name',
      header: '이름',
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
          onClick={() => onNameClick(r)}
        >
          {r.name}
        </button>
      ),
    },
    { key: 'type', header: '졸업 유형', width: 120, cell: r => r.type },
    { key: 'status', header: '상태', width: 140, cell: r => r.status },
  ] as const;
