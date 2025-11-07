import { useState } from 'react';

import {
  Header,
  Toolbar,
  Pagination,
  DataTable,
  StudentAddModal,
} from '~/shared/components';
import { useTableState } from '~/shared/hooks';

import { thesisColumns } from '~/features/thesis-management/constants/thesisColumns';
import { MOCK_ROWS } from '~/features/thesis-management/mock/mockRows';
import * as style from '~/features/thesis-management/styles/thesisManagement.css';
import type { ThesisRow } from '~/features/thesis-management/types/rows';

export default function ThesisManagement() {
  const st = useTableState<ThesisRow>(MOCK_ROWS, r => r.id, {
    pageSize: 10,
    keys: ['studentId', 'name', 'advisor', 'gradTerm', 'status', 'approved'],
  });

  const [addOpen, setAddOpen] = useState(false);

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title='졸업 논문 관리' />

        <Toolbar
          selectedCount={st.selected.length}
          query={st.query}
          onQueryChange={v => {
            st.setQuery(v);
            st.resetToFirstPage();
          }}
          onApprove={() => {}}
          onDownload={() => {}}
          onAddStudent={() => setAddOpen(true)}
        />

        <div className={style.card}>
          <DataTable<ThesisRow>
            rows={st.pageRows}
            getRowId={r => r.id}
            columns={thesisColumns}
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

        <StudentAddModal
          open={addOpen}
          onClose={() => setAddOpen(false)}
          onSubmit={async () => {
            setAddOpen(false);
          }}
        />
      </div>
    </div>
  );
}
