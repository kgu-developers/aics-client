import * as style from './Toolbar.css';
import { Button } from '~/shared/components';

type Props = {
	selectedCount: number;
	query: string;
	onQueryChange: (v: string) => void;
	onApprove: () => void;
	onDownload: () => void;
	onAdd: () => void;
};

export default function Toolbar({ selectedCount, query, onQueryChange, onApprove, onDownload, onAdd }: Props) {
	const hasSelection = selectedCount > 0;

	return (
		<div className={style.toolbar}>
			<div className={style.toolbarLeft}>
				<span className={style.selectedText[hasSelection ? 'active' : 'inactive']}>
					선택 <span className={style.selectedStrong[hasSelection ? 'active' : 'inactive']}>{selectedCount}</span>명
				</span>
			</div>

			<div className={style.toolbarRight}>
				<div className={style.actions}>
					<Button size="sm" variant="outline" type="button" onClick={onApprove}>
						승인
					</Button>
					<Button size="sm" variant="outline" type="button" onClick={onDownload}>
						다운로드
					</Button>
					<Button size="sm" variant="outline" type="button" onClick={onAdd}>
						학생추가
					</Button>
				</div>

				<div className={style.searchWrap}>
					<input
						className={style.searchInput}
						value={query}
						onChange={e => onQueryChange(e.target.value)}
						placeholder="Value"
					/>
					<img className={style.searchIcon} src="/Search.svg" alt="검색" />
				</div>
			</div>
		</div>
	);
}
