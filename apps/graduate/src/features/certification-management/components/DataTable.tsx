import * as style from '~/features/certification-management/styles/DataTable.css';
import type { Row } from '~/features/certification-management/types/row';

type Props = {
	rows: Row[];
	allChecked: boolean;
	onToggleAll: () => void;
	selectedIds: number[];
	onToggleOne: (id: number) => void;
};

export default function DataTable({ rows, allChecked, onToggleAll, selectedIds, onToggleOne }: Props) {


	return (
		<div className={style.tableWrap}>
			<table className={style.table}>
				<thead>
					<tr>
						<th className={`${style.th} ${style.thCheckbox}`}>
							<input
								type="checkbox"
								aria-label="select all"
								checked={allChecked}
								onChange={onToggleAll}
								className={style.checkbox}
							/>
						</th>
						<th className={`${style.th} ${style.thNo}`}>번호</th>
						<th className={`${style.th} ${style.thStudentId}`}>학번</th>
						<th className={`${style.th} ${style.thName}`}>이름</th>
						<th className={`${style.th} ${style.thStatus}`}>상태</th>
						<th className={`${style.th} ${style.thApproved}`}>승인 여부</th>
					</tr>
				</thead>
				<tbody>
					{rows.length === 0 ? (
						<tr>
							<td className={style.td} colSpan={6}>
								표시할 데이터가 없습니다.
							</td>
						</tr>
					) : (
						rows.map(r => {
							const isSelected = selectedIds.includes(r.id);
							return (
								<tr key={r.id} className={`${style.row} ${isSelected ? style.selectedRow : ''}`}>
									<td className={style.td}>
										<input
											type="checkbox"
											aria-label={`${r.name} 선택`}
											checked={isSelected}
											onChange={() => onToggleOne(r.id)}
											className={style.checkbox}
										/>
									</td>
									<td className={style.td}>{r.no}</td>
									<td className={style.td}>{r.studentId}</td>
									<td className={`${style.td} ${style.tdName}`}>
										<div
                      className={style.nameLink}
                    >
                      {r.name}
                    </div>
									</td>
									<td className={style.td}>{r.status}</td>
									<td className={style.td}>{r.approved}</td>
								</tr>
							);
						})
					)}
				</tbody>
			</table>
		</div>
	);
}
