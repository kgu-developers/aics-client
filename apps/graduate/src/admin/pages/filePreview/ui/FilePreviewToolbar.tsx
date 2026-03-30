import { Button } from 'antd';

import * as style from '../styles/FilePreviewToolbar.css';

interface FilePreviewToolbarProps {
  studentId: string;
  name: string;
  isApproved: boolean;
  onApprove: () => void;
  onCancelApprove: () => void;
  onChangeFile: () => void;
  canNavigate: boolean;
  isApproving: boolean;
  isCancellingApprove: boolean;
}

export default function FilePreviewToolbar({
  studentId,
  name,
  isApproved,
  onApprove,
  onCancelApprove,
  onChangeFile,
  canNavigate,
  isApproving,
  isCancellingApprove,
}: FilePreviewToolbarProps) {
  return (
    <div className={style.toolbar}>
      <span className={style.infoItem}>학번: {studentId}</span>
      <span className={style.infoItem}>이름: {name}</span>
      {isApproved ? (
        <Button
          type='primary'
          danger
          onClick={onCancelApprove}
          disabled={isCancellingApprove}
          loading={isCancellingApprove}
          className={style.button}
        >
          승인 취소
        </Button>
      ) : (
        <Button
          type='primary'
          onClick={onApprove}
          disabled={isApproving}
          loading={isApproving}
          className={style.button}
        >
          승인
        </Button>
      )}
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
