import { Toolbar,Header,Pagination } from '~/shared/components';
import { DataTable } from './index';
import { MOCK_ROWS } from '~/features/certification-management/mock/mockRows';
import { useCertificationTableState } from '~/features/certification-management/hooks';
import * as style from '~/features/certification-management/styles/certificationManagement.css';

export default function CertificationManagement() {
	const st = useCertificationTableState(MOCK_ROWS, 10);

	return (
		<div className={style.root}>
			<div className={style.container}>
				
				<Header title="자격증 관리" />

				<Toolbar
					selectedCount={st.selected.length}
					query={st.query}
					onQueryChange={v => {
						st.setQuery(v);
						st.resetToFirstPage();
					}}
					onApprove={() => {}}
					onDownload={() => {}}
					onAdd={() => {}}
				/>

				<div className={style.card}>
					<DataTable
						rows={st.pageRows}
						allChecked={st.allChecked}
						onToggleAll={st.toggleAll}
						selectedIds={st.selected}
						onToggleOne={st.toggleOne}
					/>
					<Pagination page={st.page} totalPages={st.totalPages} onGoto={n => st.setPage(n)} />
				</div>
			</div>
		</div>
	);
}
