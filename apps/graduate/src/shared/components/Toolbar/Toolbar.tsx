import { Button, message } from 'antd';
import { useState } from 'react';


import { StudentAddModal } from '~/widgets/StudentAddModal';
import type { GraduationUserCreateRequest } from '~/widgets/StudentAddModal/types/studentAddModal';

import * as style from './Toolbar.css';

type Props = {
  selectedCount: number;
  query: string;
  onQueryChange: (v: string) => void;
  onApprove: () => void;
  onDownload?: () => void;
  onAddStudents?: (rows: GraduationUserCreateRequest[]) => void | Promise<void>;
  disabledApprove?: boolean;
};

export default function Toolbar({
  selectedCount,
  query,
  onQueryChange,
  onApprove,
  onDownload,
  onAddStudents,
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
            <Button size='middle' htmlType='button' onClick={onApprove}>
              승인
            </Button>
          )}
          {onDownload && (
            <Button
              size='middle'
              htmlType='button'
              onClick={() => {
                onDownload();
              }}
            >
              다운로드
            </Button>
          )}
          <Button
            size='middle'
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
            placeholder='검색어를 입력하세요'
          />
          <img className={style.searchIcon} src='/Search.svg' alt='검색' />
        </div>
      </div>

      <StudentAddModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        onSubmit={async values => {
          try {
            await onAddStudents?.([values]);
            setAddOpen(false);
          } catch (error) {
            message.error(
              error instanceof Error
                ? error.message
                : '학생 추가에 실패했습니다.',
            );
          }
        }}
        onSubmitMultiple={async rows => {
          try {
            await onAddStudents?.(rows);
            setAddOpen(false);
          } catch (error) {
            message.error(
              error instanceof Error
                ? error.message
                : '학생들 추가에 실패했습니다.',
            );
          }
        }}
      />
    </div>
  );
}
