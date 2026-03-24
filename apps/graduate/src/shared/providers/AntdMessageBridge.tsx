import { App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import { useEffect } from 'react';

/**
 * antd v5의 정적 message API는 App 컨텍스트 밖에서 렌더링되어
 * CSS-in-JS 스타일이 누락되는 문제가 있습니다.
 * 이 컴포넌트는 App.useApp()으로 얻은 message 인스턴스를 모듈 레벨에 저장해서
 * 컴포넌트 밖(QueryClient, 라우터 가드 등)에서도 사용할 수 있게 합니다.
 */
let _message: MessageInstance | null = null;

export function getMessageInstance(): MessageInstance | null {
  return _message;
}

export function AntdMessageBridge() {
  const { message } = App.useApp();

  useEffect(() => {
    _message = message;
    return () => {
      _message = null;
    };
  }, [message]);

  return null;
}
