import { Header, Pagination } from '~/shared/ui/index.ts';

import {
  LOADING_TEXT,
  TITLE_ALL_MANAGEMENT,
} from '../constants/allManagementTexts';
import type { AllManagementRow } from '../types/allManagement';
import { extractPeriodData } from '../utils';
import UserDetailModal from './UserDetailModal.tsx';
import { useAllManagement } from '../model/useAllManagement.ts';

import { DataTable, Toolbar } from '~/admin/shared/ui/index.ts';
import * as style from '~/admin/shared/styles/adminPage.css';

export default function AllManagementPage() {
  const {
    page,
    pageSize,
    totalItems,
    rows,
    isLoading,
    selectedIds,
    toggleAll,
    toggleOne,
    handleDownload,
    query,
    handleQueryChange,
    handlePageSizeChange,
    isModalOpen,
    selectedStudentId,
    handleCloseModal,
    columns,
    handleDeleteSelected,
    schedules,
    setPage,
  } = useAllManagement();

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title={TITLE_ALL_MANAGEMENT} />

        <Toolbar
          selectedCount={selectedIds.length}
          query={query}
          onQueryChange={handleQueryChange}
          onApprove={() => {}}
          onDeleteSelected={handleDeleteSelected}
          onDownload={handleDownload}
          disabledApprove={true}
        />

        <div className={style.card}>
          <DataTable<AllManagementRow>
            rows={rows}
            getRowId={r => r.id}
            columns={columns}
            onToggleAll={toggleAll}
            selectedIds={selectedIds}
            onToggleOne={toggleOne}
            emptyText={isLoading ? LOADING_TEXT : undefined}
          />
        </div>
        {selectedStudentId && (
          <UserDetailModal
            isModalOpen={isModalOpen}
            setIsModalOpen={handleCloseModal}
            graduationUserId={selectedStudentId}
            period={extractPeriodData(schedules)}
          />
        )}
        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onGoto={setPage}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
}
