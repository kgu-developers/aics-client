import type { CertRow } from '../types/row';

import { HEADER_NAME } from '~/admin/pages/all/constants/allManagementTexts';
import type { Column } from '~/admin/shared/ui/DataTable/DataTable';
import { vars } from '~/vars.css';

export const certColumns = (
  onNameClick: (id: number) => void,
): Column<CertRow>[] =>
  [
    { key: 'no', header: '번호', width: 56, cell: r => r.no },
    { key: 'studentId', header: '학번', width: 120, cell: r => r.studentId },
    {
      key: 'name',
      header: HEADER_NAME,
      width: 160,
      cell: r => (
        <button
          type='button'
          aria-label={`${r.name} open detail`}
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
    { key: 'status', header: '상태', width: 120, cell: r => r.status },
    { key: 'approved', header: '승인 여부', width: 120, cell: r => r.approved },
  ];
