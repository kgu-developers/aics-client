export const MESSAGES = {
  validation: {
    requiredName: '연구실의 이름을 입력하세요.',
    requiredImage: '연구실의 프로필 사진을 업로드하세요.',
    requiredLocation: '연구실의 위치를 입력하세요.',
    requiredSite: '연구실의 홈페이지 주소를 입력하세요.',
    requiredAdvisor: '담당 교수를 입력하세요.',
    requiredTitle: '제목을 입력하세요.',
  },
  title: {
    createLab: '연구실 추가하기',
  },
  confirm: {
    cancel: '정말 취소하시겠습니까?',
    delete: '정말 삭제하시겠습니까?',
  },
  button: {
    createLab: '연구실 추가하기',
    uploadImage: '이미지 업로드',
    submit: '저장하기',
    save: '저장',
    cancel: '취소',
    update: '수정',
    delete: '삭제',
  },
  success: {
    createLab: '연구실이 성공적으로 추가되었습니다.',
    deleteLab: '연구실이 성공적으로 삭제되었습니다.',
    updateLab: '연구실 정보가 성공적으로 수정되었습니다.',
  },
  error: {
    missingFile: '이미지를 선택해주세요.',
    invalidDomain: 'kyonggi.ac.kr 도메인만 입력 가능합니다.',
    createLab: '연구실 추가에 실패했습니다.',
    deleteLab: '연구실 삭제에 실패했습니다.',
    updateLab: '연구실 수정에 실패했습니다.',
    uploadImage: '이미지 업로드에 실패했습니다.',
  },
} as const

export const LABELS = {
  name: '연구실 이름',
  image: '연구실 이미지',
  location: '연구실 위치',
  homepage: '연구실 홈페이지 (kyonggi.ac.kr 도메인만 가능합니다)',
  advisor: '담당 교수',
} as const

export const PATTERN = {
  site: /^https?:\/\/([a-zA-Z0-9-]+\.)*kyonggi\.ac\.kr(\/.*)?$/,
} as const

export const TABLE_COLUMNS = {
  name: {
    key: 'name',
    label: '연구실명',
  },
  location: {
    key: 'name',
    label: '연구실명',
  },
  site: {
    key: 'site',
    label: '웹사이트',
  },
  advisor: {
    key: 'advisor',
    label: '담당교수',
  },
  image: {
    key: 'img',
    label: '연구실 이미지',
  },
  operation: {
    key: 'operation',
    label: '관리',
  },
  width: {
    sm: '10%',
    md: '15%',
    lg: '20%',
  },
}
