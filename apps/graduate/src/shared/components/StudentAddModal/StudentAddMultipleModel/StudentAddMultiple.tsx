import { Button, Typography, Upload, message } from 'antd';
import { useEffect, useState } from 'react';

import { PROFESSORS } from '~/shared/constants/professors';

import BulkPreviewTable from './BulkPreviewTable';
import { createProfessorMap, parseCsv, parseXlsx } from './parsers';
import type { BulkUploadRow, InvalidRow } from '../types';

type Props = {
  open?: boolean;
  onBulkSubmit?: (rows: BulkUploadRow[]) => void | Promise<void>;
};

const PROFESSOR_NAME_TO_ID = createProfessorMap(PROFESSORS);

export default function StudentAddMultiple({ open, onBulkSubmit }: Props) {
  const [fileName, setFileName] = useState('');
  const [rows, setRows] = useState<BulkUploadRow[]>([]);
  const [invalidRows, setInvalidRows] = useState<InvalidRow[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const pageSize = 7;
  const [current, setCurrent] = useState(1);

  const onSelectionChange = (keys: React.Key[]) => setSelectedRowKeys(keys);

  useEffect(() => {
    if (!open) return;
    setFileName('');
    setRows([]);
    setInvalidRows([]);
    setSelectedRowKeys([]);
    setCurrent(1);
  }, [open]);

  const onFileChange = async (file: File) => {
    setFileName(file.name);
    const name = file.name.toLowerCase();

    let result: { valid: BulkUploadRow[]; invalid: InvalidRow[] } = {
      valid: [],
      invalid: [],
    };

    if (name.endsWith('.csv')) {
      const text = await file.text();
      result = parseCsv(text, PROFESSOR_NAME_TO_ID);
    } else if (name.endsWith('.xlsx') || name.endsWith('.xls')) {
      result = await parseXlsx(file, PROFESSOR_NAME_TO_ID);
    } else {
      message.warning('CSV 또는 XLSX 파일만 업로드 가능합니다.');
      setRows([]);
      setInvalidRows([]);
      return false;
    }

    setRows(result.valid);
    setInvalidRows(result.invalid);
    setCurrent(1);
    setSelectedRowKeys([]);
    return false;
  };

  const showResultModal = (addedCount: number) => {
    const invalidMsg = invalidRows
      .map(r => `${r.name}[${r.studentNo}] : ${r.reason}`)
      .join('\n');

    alert(
      `${addedCount}명의 인원이 추가되었습니다.\n` +
        `${
          invalidRows.length > 0
            ? `제외된 인원들 ${invalidRows.length}명 :\n` + invalidMsg
            : ''
        }`,
    );
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
            showResultModal(selected.length);
          }}
        >
          선택 등록
        </Button>
        <Button
          type='primary'
          disabled={!rows.length && !invalidRows.length}
          onClick={async () => {
            if (rows.length > 0) {
              await onBulkSubmit?.(rows);
            }
            showResultModal(rows.length);
          }}
        >
          일괄 등록
        </Button>
      </div>
    </div>
  );
}
