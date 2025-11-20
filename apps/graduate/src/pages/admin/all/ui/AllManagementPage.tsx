import { useState } from 'react';

import { Toolbar, Header, Pagination, DataTable } from '~/shared/components';
import { useTableState } from '~/shared/hooks';

import { allManagementColumns } from '../constants/allManagementColumns.tsx';
import { MOCK_ROWS } from '../mock/allManagement';
import * as style from '../styles/AllManagementPage.css.ts';
import type { AllManagementRow } from '../types/allManagement';
import UserDetailModal from './UserDetailModal/UserDetailModal';

import { handleDownload } from '~/pages/admin/all/utils';

export default function AllManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [selectedId, setSelectedId] = useState<string>('');
  const onNameClick = () => {
    setIsModalOpen(true);
  };

  const columns = allManagementColumns(onNameClick);

  const st = useTableState<AllManagementRow>(MOCK_ROWS, r => r.id, {
    pageSize: 10,
    keys: ['studentId', 'name', 'type', 'status'],
  });

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title='대상자 전체 관리' />

        <Toolbar
          selectedCount={st.selected.length}
          query={st.query}
          onQueryChange={v => {
            st.setQuery(v);
            st.resetToFirstPage();
          }}
          onApprove={() => {}}
          onDownload={() => handleDownload(st.selected, st.filtered)}
          onAddStudent={() => {}}
          disabledApprove={true}
        />

        <div className={style.card}>
          <DataTable<AllManagementRow>
            rows={st.pageRows}
            getRowId={r => r.id}
            columns={columns}
            allChecked={st.allChecked}
            onToggleAll={st.toggleAll}
            selectedIds={st.selected}
            onToggleOne={id => st.toggleOne(id as number)}
          />
        </div>
        <UserDetailModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
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
