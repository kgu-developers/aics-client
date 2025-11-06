import { DataTable, Header, Pagination, Toolbar } from '~/shared/components'
import { useTableState } from '~/shared/hooks'

import { certColumns } from '~/features/certification-management/constants/certColumns'
import { MOCK_ROWS } from '~/features/certification-management/mock/mockRows'
import * as style from '~/features/certification-management/styles/certificationManagement.css'

import type { CertRow } from '../types/row'

export default function CertificationManagement() {
  const st = useTableState<CertRow>(MOCK_ROWS, (r) => r.id, {
    pageSize: 10,
    keys: ['studentId', 'name', 'status', 'approved'],
  })

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title="자격증 신청 관리" />

        <Toolbar
          selectedCount={st.selected.length}
          query={st.query}
          onQueryChange={(v) => {
            st.setQuery(v)
            st.resetToFirstPage()
          }}
          onApprove={() => {}}
          onDownload={() => {}}
          onAdd={() => {}}
        />

        <div className={style.card}>
          <DataTable<CertRow>
            rows={st.pageRows}
            getRowId={(r) => r.id}
            columns={certColumns}
            allChecked={st.allChecked}
            onToggleAll={st.toggleAll}
            selectedIds={st.selected}
            onToggleOne={(id) => st.toggleOne(id as number)}
          />
        </div>
        <Pagination
          page={st.page}
          pageSize={st.pageSize}
          totalItems={st.filtered.length}
          onGoto={st.setPage}
          onPageSizeChange={(size) => st.setPageSize(size)}
        />
      </div>
    </div>
  )
}
