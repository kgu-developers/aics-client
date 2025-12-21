import { message } from 'antd';
import { useEffect, useState } from 'react';


import { fetchAdminUsers } from '~/shared/api';
import { PROFESSORS } from '~/shared/constants/professors';

import { createProfessorMap, parseCsv, parseXlsx } from './parsers';
import type {
  InvalidRow,
  UploadRow,
} from '../types/studentAddModal';

const PROFESSOR_NAME_TO_ID = createProfessorMap(PROFESSORS);
const USER_PAGE_SIZE = 200;
const USER_NOT_FOUND_REASON = '유저 목록에 없는 학번입니다.';

const filterUnknownUsers = async (rows: UploadRow[]) => {
  if (rows.length === 0) return { valid: [], invalid: [] };
  const targetIds = rows.map(row => row.studentId);
  const existingIds = await fetchExistingUserIds(targetIds);

  const valid: UploadRow[] = [];
  const invalid: InvalidRow[] = [];

  rows.forEach(row => {
    if (existingIds.has(row.studentId)) {
      valid.push(row);
      return;
    }
    invalid.push({
      studentId: row.studentId,
      name: row.name,
      reason: USER_NOT_FOUND_REASON,
    });
  });

  return { valid, invalid };
};

const fetchExistingUserIds = async (studentIds: string[]) => {
  const remaining = new Set(studentIds);
  const found = new Set<string>();
  let page = 0;

  while (remaining.size > 0) {
    const data = await fetchAdminUsers({ page, size: USER_PAGE_SIZE });
    data.contents.forEach(user => {
      if (remaining.has(user.id)) {
        found.add(user.id);
        remaining.delete(user.id);
      }
    });

    if (data.pageable.isEnd) {
      break;
    }
    page += 1;
  }

  return found;
};

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

    try {
      const { valid, invalid } = await filterUnknownUsers(result.valid);
      setRows(valid);
      setInvalidRows([...result.invalid, ...invalid]);
    } catch {
      message.warning(
        '유저 목록 확인에 실패했습니다. 등록 시 오류가 발생할 수 있습니다.',
      );
      setRows(result.valid);
      setInvalidRows(result.invalid);
    }
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
