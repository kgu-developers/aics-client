import { Button } from 'antd';

import * as style from '../styles/FilePreviewToolbar.css';

interface FilePreviewToolbarProps {
  studentId: string;
  name: string;
  isApproved: boolean;
  onApprove: () => void;
  onChangeFile: () => void;
  canNavigate: boolean;
  isApproving: boolean;
}

export default function FilePreviewToolbar({
  studentId,
  name,
  isApproved,
  onApprove,
  onChangeFile,
  canNavigate,
  isApproving,
}: FilePreviewToolbarProps) {
  return (
    <div className={style.toolbar}>
      <span className={style.infoItem}>학번: {studentId}</span>
      <span className={style.infoItem}>이름: {name}</span>
      <Button
        type='primary'
        onClick={onApprove}
        disabled={isApproved || isApproving}
        loading={isApproving}
        className={style.button}
      >
        {isApproved ? '승인됨' : '승인'}
      </Button>
      <Button
        onClick={onChangeFile}
        disabled={!canNavigate}
        className={style.button}
      >
        다음 파일
      </Button>
    </div>
  );
}
