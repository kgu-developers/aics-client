export const MESSAGES = {
  button: {
    delete: '삭제하기',
    cancel: '취소하기',
    save: '저장하기',
    prev: '이전',
    next: '다음',
    backToList: '목록으로',
    update: '수정하기',
    create: '작성하기',
    continueCreate: '계속 작성하기',
    uploadFile: '파일 업로드',
  },
  checkbox: {
    pinPost: '게시글 고정하기',
  },
  success: {
    createPost: '게시글이 성공적으로 등록되었습니다.',
    deletePost: '게시글이 성공적으로 삭제되었습니다.',
    updatePost: '게시글이 성공적으로 수정되었습니다.',
    uploadFile: '파일 업로드에 성공했습니다.',
  },
  error: {
    createPost: '게시글 등록에 실패했습니다.',
    deletePost: '게시글 삭제에 실패했습니다.',
    updatePost: '게시글 수정에 실패했습니다.',
    uploadFile: '파일 업로드에 실패했습니다.',
  },
  validation: {
    requiredTitle: '제목을 입력하세요.',
    requiredCategory: '카테고리를 선택하세요.',
    requiredContent: '본문을 입력하세요.',
  },
  title: {
    deletePost: '게시글 삭제',
    cancelDeletePost: '게시글 삭제 취소',
  },
  confirm: {
    deletePost: '정말 삭제하시겠습니까?',
    cancelPost:
      '게시글 작성을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
  },
  PREV_POST_EMPTY: '이전 글이 없습니다',
  NEXT_POST_EMPTY: '다음 글이 없습니다',
} as const;

export const UNNAMED_FILE = 'Unnamed File' as const;
export const TRUE = 'TRUE' as const;
export const FALSE = 'FALSE' as const;
export const MESSAGE_DURATION = 0.7;

export const STATUS = {
  DONE: 'done',
};

export const LABELS = {
  title: '제목',
  category: '카테고리',
  content: '내용',
  file: '첨부 파일',
  isPinned: '상단 고정',
} as const;

export const PLACEHOLDERS = {
  title: '제목을 입력하세요',
  userName: '사용자명을 입력하세요',
} as const;

export const FORM = {
  title: {
    name: 'title',
  },
  category: {
    name: 'category',
  },
  content: {
    name: 'content',
  },
  isPinned: {
    name: 'isPinned',
    valuePropName: 'checked',
  },
  file: {
    name: 'file',
    valuePropName: 'fileList',
  },
};

export const RADIO = {
  notification: {
    value: 'NOTIFICATION',
    label: '공지사항',
  },
  news: {
    value: 'NEWS',
    label: '학부소식',
  },
};
