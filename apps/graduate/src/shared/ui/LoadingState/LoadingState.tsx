import { Spin } from 'antd';

import * as styles from './LoadingState.css';

interface LoadingStateProps {
  /** 로딩 메시지 */
  message?: string;
  /** 크기 */
  size?: 'small' | 'default' | 'large';
  /** 전체 화면 여부 */
  fullscreen?: boolean;
}

/**
 * 로딩 상태를 표시하는 공통 컴포넌트
 * @example
 * <LoadingState message="데이터를 불러오는 중..." />
 */
export default function LoadingState({
  message = '로딩 중...',
  size = 'large',
  fullscreen = false,
}: LoadingStateProps) {
  return (
    <div
      className={
        fullscreen ? styles.loadingContainerFullscreen : styles.loadingContainer
      }
    >
      <Spin size={size} tip={message} />
    </div>
  );
}
