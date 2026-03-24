import { message } from 'antd';

import parseError from './error';

/** 사용자 피드백용 토스트(antd message) 공통 설정 */
const DURATION_SEC = 4;

/**
 * React 컴포넌트 밖(QueryClient, 라우터 beforeLoad 등)에서도 사용 가능한 토스트.
 * Ant Design `App` 루트 하위에서 동작합니다.
 */
export function notifyError(error: unknown, fallbackMessage?: string): void {
  const text = fallbackMessage ?? parseError(error).message;
  message.error({ content: text, duration: DURATION_SEC });
}

export function notifyWarning(text: string): void {
  message.warning({ content: text, duration: DURATION_SEC });
}

export function notifySuccess(text: string): void {
  message.success({ content: text, duration: DURATION_SEC });
}

export function notifyInfo(text: string): void {
  message.info({ content: text, duration: DURATION_SEC });
}
