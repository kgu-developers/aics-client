import { useState } from 'react';

import { message } from 'antd';

import { getProfessorById } from '~/shared/constants';
import { Toolbar, Header, Pagination, DataTable } from '~/shared/components';
import { useTableState } from '~/shared/hooks';

import { useSubmitGraduationUser } from '../api/submitGraduationUser';
import { allManagementColumns } from '../constants/allManagementColumns.tsx';
import { MOCK_ROWS } from '../mock/allManagement';
import * as style from '../styles/AllManagementPage.css.ts';
import type { AllManagementRow } from '../types/allManagement';
import { handleDownload } from '../utils';
import UserDetailModal from './UserDetailModal/UserDetailModal';

export default function AllManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const submitGraduationUser = useSubmitGraduationUser();

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
          onAddStudent={async values => {
            const professor = getProfessorById(values.advisorId);
            if (!professor) {
              message.error('지도교수를 찾을 수 없어요.');
              throw new Error('Professor not found');
            }

            try {
              await submitGraduationUser.mutateAsync({
                studentId: values.studentNo,
                name: values.name,
                advisorProfessor: professor.name,
                capstoneCompletion: values.capstoneStatus === 'PASSED',
                department: values.department,
                graduationDate: `${values.graduationMonth}-01`,
              });
              message.success('학생을 추가했어요.');
            } catch (error) {
              message.error(
                error instanceof Error
                  ? error.message
                  : '학생 추가에 실패했어요.',
              );
              throw error;
            }
          }}
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
