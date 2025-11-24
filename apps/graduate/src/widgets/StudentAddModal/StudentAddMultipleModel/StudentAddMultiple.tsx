import { Button, Typography, Upload } from 'antd';

import type { MultipleUploadRow } from '../types';
import PreviewTable from './PreviewTable';
import { useStudentAddMultiple } from './useStudentAddMultiple';

type Props = {
  open?: boolean;
  onSubmitMultiple?: (rows: MultipleUploadRow[]) => void | Promise<void>;
};

export default function StudentAddMultiple({
  open = false,
  onSubmitMultiple,
}: Props) {
  const {
    fileName,
    rows,
    invalidRows,
    selectedRowKeys,
    current,
    pageSize,
    setSelectedRowKeys,
    setCurrent,
    handleFileChange,
    handleResultAlert,
  } = useStudentAddMultiple(open);

  const handleSelectSubmit = async () => {
    const selected = rows.filter(r => selectedRowKeys.includes(r.key));
    await onSubmitMultiple?.(selected);
    handleResultAlert(selected.length);
  };

  const handleAllSubmit = async () => {
    if (rows.length > 0) {
      await onSubmitMultiple?.(rows);
    }
    handleResultAlert(rows.length);
  };

  return (
    <div>
      <Typography.Paragraph>
        총 {rows.length}명의 학생이 등록 예정입니다.
        {invalidRows.length > 0 && (
          <Typography.Text type='danger' style={{ marginLeft: 8 }}>
            (제외됨: {invalidRows.length}명)
          </Typography.Text>
        )}
      </Typography.Paragraph>

      <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 8 }}>
        <PreviewTable
          rows={rows}
          pageSize={pageSize}
          current={current}
          onPageChange={setCurrent}
          selectedRowKeys={selectedRowKeys}
          onSelectionChange={setSelectedRowKeys}
        />
      </div>

      <div
        style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}
      >
        <Upload
          beforeUpload={handleFileChange}
          showUploadList={false}
          accept='.csv,.xlsx,.xls'
        >
          <Button>파일 선택</Button>
        </Upload>
        <Typography.Text type='secondary'>
          {fileName || '선택한 파일 없음'}
        </Typography.Text>
        <div style={{ flex: 1 }} />
        <Button
          disabled={!rows.length || !selectedRowKeys.length}
          onClick={handleSelectSubmit}
        >
          선택 등록
        </Button>
        <Button
          type='primary'
          disabled={!rows.length && !invalidRows.length}
          onClick={handleAllSubmit}
        >
          일괄 등록
        </Button>
      </div>
    </div>
  );
}
