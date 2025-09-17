export const PLACEHOLDERS = {
  upload: {
    description: '사진의 설명이 필요하시다면 입력해주세요.',
    link: '연결할 링크가 있다면 입력해주세요.',
  },
} as const

export const MESSAGES = {
  validation: {
    requiredImage: '사진을 업로드해야합니다.',
  },
  title: {
    createImage: '이미지 추가하기',
    updateImage: '대표 이미지 수정',
    imageList: '이미지 목록',
  },
  paragraph: {
    updateImage: '홈페이지의 대표 이미지를 관리합니다.',
  },
  button: {
    uploadImage: '이미지 업로드',
    submit: '저장하기',
    delete: '삭제',
    update: '수정',
  },
  success: {
    createImage: '이미지가 성공적으로 추가되었습니다.',
    deleteImage: '이미지가 성공적으로 삭제되었습니다.',
    updateImage: '이미지가 성공적으로 수정되었습니다.',
  },
  error: {
    createImage: '이미지 추가에 실패했습니다.',
    deleteImage: '이미지 삭제에 실패했습니다.',
    updateImage: '이미지 수정에 실패했습니다.',
  },
} as const

export const LABELS = {
  image: '이미지',
  description: '설명',
  link: '링크',
} as const
