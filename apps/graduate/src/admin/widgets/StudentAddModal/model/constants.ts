export const HEADER_NAMES = {
  studentId: '학번',
  name: '이름',
  advisorProfessor: '지도교수',
  capstoneCompletion: '캡스톤 이수 여부',
  graduationDate: '졸업 예정',
  department: '학과',
  phone: '연락처',
} as const;

export const MODE_OPTIONS = [
  {
    key: 'single',
    title: '단일 추가',
    description: '학생 정보를 수기로 입력해요.',
  },
  {
    key: 'excel',
    title: '엑셀 업로드',
    description: '엑셀 파일로 여러 명 입력해요.',
  },
] as const;

export type StudentAddMode = (typeof MODE_OPTIONS)[number]['key'];

export const SINGLE_FIELD_TEXT = {
  studentNo: {
    label: '학번',
    placeholder: '학번을 입력해주세요',
    required: '학번을 입력하세요',
    pattern: '학번은 숫자 9자리여야 합니다 .',
  },
  name: {
    label: '이름',
    placeholder: '이름을 입력해주세요',
    required: '이름을 입력해주세요',
  },
  advisor: {
    label: '지도교수 배정',
    placeholder: '지도교수를 선택해주세요',
    required: '지도교수를 선택해주세요',
  },
  capstone: {
    label: '캡스톤 이수 여부',
    required: '캡스톤 이수 여부를 선택해주세요',
  },
  graduationMonth: {
    label: '졸업년도',
    placeholder: 'YYYY-MM',
    required: '졸업 예정일을 선택해주세요',
  },
  department: {
    label: '학과',
    placeholder: '학과를 입력해주세요',
    required: '학과를 입력해주세요',
  },
  phone: {
    label: '연락처',
    placeholder: '연락처를 입력해주세요',
    required: '연락처를 입력해주세요',
  },
  submitLabel: '입력',
};

export const MULTIPLE_UPLOAD_TEXT = {
  userNotFound: '유저 목록에 없는 학번입니다.',
  duplicatedUser: '이미 등록된 학번입니다.',
  unsupportedFile: 'CSV 또는 XLSX 파일만 업로드할 수 있습니다.',
  fetchUsersFailed:
    '유저 목록 확인에 실패했습니다. 등록 시 오류가 발생할 수 있습니다.',
  fetchDuplicateFailed:
    '중복 학번 확인에 실패했습니다. 등록 시 오류가 발생할 수 있습니다.',
  resultTitle: '학생 추가 결과',
  resultSuccess: (count: number) => `${count}명의 학생을 추가했습니다.`,
  resultInvalid: (count: number) => `무효 데이터 ${count}건`,
} as const;
