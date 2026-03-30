import { useState } from 'react';

import { Header, Pagination } from '~/shared/ui';

import {
  LOADING_TEXT,
  TITLE_ALL_MANAGEMENT,
} from '../constants/allManagementTexts';
import { useAllManagement } from '../model/useAllManagement';
import type { AllManagementRow } from '../types/allManagement';

import * as style from '~/admin/shared/styles/adminPage.css';
import { DataTable, Toolbar, UserDetailModal } from '~/admin/shared/ui';
import { extractPeriodData } from '~/admin/shared/utils';
import { StudentAddModal } from '~/admin/widgets/StudentAddModal';

export default function AllManagementPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
          onDeleteSelected={handleDeleteSelected}
          onDownload={handleDownload}
          onAddStudent={() => setIsAddModalOpen(true)}
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
        <StudentAddModal
          open={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
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
