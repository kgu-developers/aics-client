import axios from 'axios';

interface ErrorInfo {
  message: string;
  statusCode?: number;
  errorCode?: string;
  isNetworkError: boolean;
}

export default function parseError(error: unknown): ErrorInfo {
  const defaultError: ErrorInfo = {
    message: '알 수 없는 오류가 발생했습니다',
    isNetworkError: false,
  };

  if (axios.isAxiosError(error)) {
    const response = error.response;
    const status = response?.status;

    if (response) {
      const errorCode = response.data?.code;
      return {
        message:
          response.data?.message ??
          (errorCode ? ERROR_CODE_MESSAGES[errorCode] : undefined) ??
          getDefaultMessage(status),
        statusCode: status,
        errorCode,
        isNetworkError: false,
      };
    }

    if (error.request) {
      return {
        message: '네트워크 연결을 확인해주세요',
        isNetworkError: true,
      };
    }
  }

  if (error instanceof Error) {
    return {
      ...defaultError,
      message: error.message,
    };
  }

  return defaultError;
}

const ERROR_CODE_MESSAGES: Record<string, string> = {
  GRADUATION_USER_ID_DUPLICATED: '이미 등록된 학번입니다.',
  USER_ID_NOT_FOUND: '유저 목록에 없는 학번입니다.',
  USER_NOT_FOUND: '유저 목록에 없는 학번입니다.',
  INVALID_PASSWORD: '비밀번호가 올바르지 않습니다.',
};

function getDefaultMessage(statusCode?: number): string {
  if (!statusCode) return '요청에 실패했습니다';

  const messages: Record<number, string> = {
    400: '잘못된 요청입니다',
    401: '로그인이 필요합니다',
    403: '접근 권한이 없습니다',
    404: '요청한 정보를 찾을 수 없습니다',
    429: '너무 많은 요청을 보냈습니다',
    500: '서버 오류가 발생했습니다',
    503: '서버가 일시적으로 사용 불가능합니다',
  };

  return messages[statusCode] ?? `오류가 발생했습니다 (${statusCode})`;
}
