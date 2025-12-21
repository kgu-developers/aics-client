import { message } from 'antd';
import { useEffect, useState } from 'react';


import { PROFESSORS } from '~/shared/constants/professors';

import { createProfessorMap, parseCsv, parseXlsx } from './parsers';
import type {
  InvalidRow,
  UploadRow,
} from '../types/studentAddModal';

const PROFESSOR_NAME_TO_ID = createProfessorMap(PROFESSORS);

export const useStudentAddMultiple = (open: boolean) => {
  const [fileName, setFileName] = useState('');
  const [rows, setRows] = useState<UploadRow[]>([]);
  const [invalidRows, setInvalidRows] = useState<InvalidRow[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [current, setCurrent] = useState(1);

  const pageSize = 7;

  useEffect(() => {
    if (!open) return;
    setFileName('');
    setRows([]);
    setInvalidRows([]);
    setSelectedRowKeys([]);
    setCurrent(1);
  }, [open]);

  const handleFileChange = async (file: File) => {
    setFileName(file.name);
    const name = file.name.toLowerCase();

    let result: { valid: UploadRow[]; invalid: InvalidRow[] } = {
      valid: [],
      invalid: [],
    };

    if (name.endsWith('.csv')) {
      const text = await file.text();
      result = parseCsv(text, PROFESSOR_NAME_TO_ID);
    } else if (name.endsWith('.xlsx') || name.endsWith('.xls')) {
      result = await parseXlsx(file, PROFESSOR_NAME_TO_ID);
    } else {
      message.warning('CSV 또는 XLSX 파일만 업로드할 수 있습니다.');
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

  const handleResultAlert = (addedCount: number) => {
    const invalidMsg = invalidRows
      .map(r => `${r.name}[${r.studentId}] : ${r.reason}`)
      .join('\n');

    alert(
      `${addedCount}명의 학생을 추가했습니다.\n` +
        (invalidRows.length > 0
          ? `무효 데이터 ${invalidRows.length}건:\n` + invalidMsg
          : ''),
    );
  };

  return {
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
  };
};
