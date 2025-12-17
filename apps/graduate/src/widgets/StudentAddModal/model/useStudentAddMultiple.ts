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
      message.warning('CSV \ub610\ub294 XLSX \ud30c\uc77c\ub9cc \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.');
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
      `${addedCount}\uba85\uc758 \ud559\uc0dd\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.\n` +
        (invalidRows.length > 0
          ? `\ubb34\ud6a8 \ub370\uc774\ud130 ${invalidRows.length}\uac74:\n` + invalidMsg
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
