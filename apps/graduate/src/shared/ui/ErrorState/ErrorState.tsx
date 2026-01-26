import { Button } from 'antd';
import { AlertCircle, RefreshCw } from 'lucide-react';

import * as styles from './ErrorState.css';

interface ErrorStateProps {
  /** 에러 메시지 */
  message?: string;
  /** 재시도 버튼 표시 여부 */
  showRetry?: boolean;
  /** 재시도 콜백 */
  onRetry?: () => void;
  /** 전체 화면 여부 */
  fullscreen?: boolean;
}

/**
 * 에러 상태를 표시하는 공통 컴포넌트
 * @example
 * <ErrorState 
 *   message="데이터를 불러올 수 없습니다" 
 *   onRetry={() => refetch()} 
 * />
 */
export default function ErrorState({
  message = '오류가 발생했습니다',
  showRetry = true,
  onRetry,
  fullscreen = false,
}: ErrorStateProps) {
  return (
    <div
      className={
        fullscreen ? styles.errorContainerFullscreen : styles.errorContainer
      }
    >
      <div className={styles.errorContent}>
        <AlertCircle className={styles.errorIcon} size={48} />
        <p className={styles.errorMessage}>{message}</p>
        {showRetry && onRetry && (
          <Button
            type='primary'
            icon={<RefreshCw size={16} />}
            onClick={onRetry}
            className={styles.retryButton}
          >
            다시 시도
          </Button>
        )}
      </div>
    </div>
  );
}
