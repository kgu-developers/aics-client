import { Header, Pagination } from '~/shared/components';

import * as style from '~/admin/shared/styles/adminPage.css';
import { Table } from '~/admin/widgets/Table';
import { useAdminPagination } from '~/admin/widgets/Table/model';

export default function ThesisAdminPage() {
  const {
    page,
    setPage,
    pageSize,
    query,
    handleQueryChange,
    handlePageSizeChange,
  } = useAdminPagination();

  return (
    <div className={style.root}>
      <div className={style.container}>
        <Header title='졸업 논문 관리' />
        <Table
          page={page}
          pageSize={pageSize}
          query={query}
          graduationType='THESIS'
          onQueryChange={handleQueryChange}
        />
        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={0}
          onGoto={setPage}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
}
