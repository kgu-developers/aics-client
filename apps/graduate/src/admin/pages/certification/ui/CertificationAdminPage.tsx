import { Header, Pagination } from '~/shared/ui';

import * as style from '~/admin/shared/styles/adminPage.css';
import { GraduationManagementTable } from '~/admin/widgets/GraduationManagementTable';
import { useAdminPagination } from '~/admin/widgets/GraduationManagementTable/model';

export default function CertificationAdminPage() {
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
        <Header title='자격증 관리' />
        <GraduationManagementTable
          page={page}
          pageSize={pageSize}
          query={query}
          graduationType='CERTIFICATE'
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
