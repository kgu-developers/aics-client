import { Button, Typography, Upload, message } from 'antd';
import { useEffect, useState } from 'react';

import { PROFESSORS } from '~/shared/constants/professors';

import BulkPreviewTable from './BulkPreviewTable';
import { createProfessorMap, parseCsv, parseXlsx } from './parsers';
import type { BulkUploadRow } from '../types';

type Props = {
  open?: boolean;
  onBulkSubmit?: (rows: BulkUploadRow[]) => void | Promise<void>;
};

const PROFESSOR_NAME_TO_ID = createProfessorMap(PROFESSORS);

export default function StudentAddMultiple({ open, onBulkSubmit }: Props) {
  const [fileName, setFileName] = useState('');
  const [rows, setRows] = useState<BulkUploadRow[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const pageSize = 7;
  const [current, setCurrent] = useState(1);

  const onSelectionChange = (keys: React.Key[]) => setSelectedRowKeys(keys);

  useEffect(() => {
    if (!open) return;
    setFileName('');
    setRows([]);
    setSelectedRowKeys([]);
    setCurrent(1);
  }, [open]);

  const onFileChange = async (file: File) => {
    setFileName(file.name);
    const name = file.name.toLowerCase();
    if (name.endsWith('.csv')) {
      const text = await file.text();
      setRows(parseCsv(text, PROFESSOR_NAME_TO_ID));
      setCurrent(1);
      setSelectedRowKeys([]);
    } else if (name.endsWith('.xlsx') || name.endsWith('.xls')) {
      const parsed = await parseXlsx(file, PROFESSOR_NAME_TO_ID);
      setRows(parsed);
      setCurrent(1);
      setSelectedRowKeys([]);
    } else {
      message.warning('CSV 또는 XLSX 파일만 업로드 가능합니다.');
      setRows([]);
    }
    return false;
  };

  return (
    <div>
      <Typography.Paragraph>
        총 {rows.length}명의 학생이 등록 예정입니다.
      </Typography.Paragraph>

      <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 8 }}>
        <BulkPreviewTable
          rows={rows}
          pageSize={pageSize}
          current={current}
          onPageChange={p => setCurrent(p)}
          selectedRowKeys={selectedRowKeys}
          onSelectionChange={onSelectionChange}
        />
      </div>

      <div
        style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}
      >
        <Upload
          beforeUpload={onFileChange}
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
          onClick={async () => {
            const selected = rows.filter(r => selectedRowKeys.includes(r.key));
            await onBulkSubmit?.(selected);
          }}
        >
          선택 등록
        </Button>
        <Button
          type='primary'
          disabled={!rows.length}
          onClick={async () => {
            await onBulkSubmit?.(rows);
          }}
        >
          일괄 등록
        </Button>
      </div>
    </div>
  );
}
