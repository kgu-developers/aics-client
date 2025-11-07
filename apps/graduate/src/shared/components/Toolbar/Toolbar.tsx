import { Button } from 'antd';
import { useState } from 'react';

import { StudentAddModal } from '~/shared/components/StudentAddModal';

import * as style from './Toolbar.css';

type Props = {
  selectedCount: number;
  query: string;
  onQueryChange: (v: string) => void;
  onApprove: () => void;
  onDownload: () => void;
  onAddStudent?: (values: {
    studentNo: string;
    name: string;
    advisorId: number;
    capstoneStatus: 'PASSED' | 'FAILED';
    graduationMonth: string;
    department: string;
  }) => void | Promise<void>;
  disabledApprove?: boolean;
};

export default function Toolbar({
  selectedCount,
  query,
  onQueryChange,
  onApprove,
  onDownload,
  onAddStudent,
  disabledApprove = false,
}: Props) {
  const hasSelection = selectedCount > 0;
  const [addOpen, setAddOpen] = useState(false);

  return (
    <div className={style.toolbar}>
      <div className={style.toolbarLeft}>
        <span
          className={style.selectedText[hasSelection ? 'active' : 'inactive']}
        >
          선택{' '}
          <span
            className={
              style.selectedStrong[hasSelection ? 'active' : 'inactive']
            }
          >
            {selectedCount}
          </span>
          명
        </span>
      </div>

      <div className={style.toolbarRight}>
        <div className={style.actions}>
          {!disabledApprove && (
            <Button size='small' htmlType='button' onClick={onApprove}>
              승인
            </Button>
          )}
          <Button size='small' htmlType='button' onClick={onDownload}>
            다운로드
          </Button>
          <Button
            size='small'
            htmlType='button'
            onClick={() => {
              setAddOpen(true);
            }}
          >
            학생추가
          </Button>
        </div>

        <div className={style.searchWrap}>
          <input
            className={style.searchInput}
            value={query}
            onChange={e => onQueryChange(e.target.value)}
            placeholder='Value'
          />
          <img className={style.searchIcon} src='/Search.svg' alt='검색' />
        </div>
      </div>

      <StudentAddModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        onSubmit={async values => {
          await onAddStudent?.(values);
          setAddOpen(false);
        }}
      />
    </div>
  );
}
