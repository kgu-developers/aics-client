import { message } from 'antd';
import { useEffect, useState } from 'react';

import { PROFESSORS } from '~/shared/constants/professors';

import { createProfessorMap, parseCsv, parseXlsx } from './parsers';
import type { MultipleUploadRow, InvalidRow } from '../types';

const PROFESSOR_NAME_TO_ID = createProfessorMap(PROFESSORS);

export const useStudentAddMultiple = (open: boolean) => {
  const [fileName, setFileName] = useState('');
  const [rows, setRows] = useState<MultipleUploadRow[]>([]);
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

    let result: { valid: MultipleUploadRow[]; invalid: InvalidRow[] } = {
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

  const handleResultAlert = (addedCount: number) => {
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
