import { Toolbar, Header, Pagination, DataTable } from '~/shared/components';
import { useTableState } from '~/shared/hooks';

import { useGraduationUserSubmit } from '~/widgets/StudentAddModal/hooks/useSubmitGraduationUser';

import { certColumns } from '../constants/certColumns';
import { MOCK_ROWS } from '../mock/mockRows';
import * as style from '../styles/CertificationAdminPage.css';
import type { CertRow } from '../types/row';

export default function CertificationAdminPage() {
  const { handleAddStudents } = useGraduationUserSubmit();
  const st = useTableState<CertRow>(MOCK_ROWS, r => r.id, {
    pageSize: 10,
    keys: ['studentId', 'name', 'status', 'approved'],
  });

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title='자격증 신청 관리' />

        <Toolbar
          selectedCount={st.selected.length}
          query={st.query}
          onQueryChange={v => {
            st.setQuery(v);
            st.resetToFirstPage();
          }}
          onApprove={() => {}}
          onAddStudents={handleAddStudents}
        />

        <div className={style.card}>
          <DataTable<CertRow>
            rows={st.pageRows}
            getRowId={r => r.id}
            columns={certColumns}
            allChecked={st.allChecked}
            onToggleAll={st.toggleAll}
            selectedIds={st.selected}
            onToggleOne={id => st.toggleOne(id as number)}
          />
        </div>
        <Pagination
          page={st.page}
          pageSize={st.pageSize}
          totalItems={st.filtered.length}
          onGoto={st.setPage}
          onPageSizeChange={size => st.setPageSize(size)}
        />
      </div>
    </div>
  );
}
