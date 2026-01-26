import { Inbox } from 'lucide-react';

import * as styles from './EmptyState.css';

interface EmptyStateProps {
  /** 빈 상태 메시지 */
  message?: string;
  /** 설명 텍스트 */
  description?: string;
  /** 아이콘 크기 */
  iconSize?: number;
}

/**
 * 빈 상태를 표시하는 공통 컴포넌트
 * @example
 * <EmptyState 
 *   message="등록된 일정이 없습니다" 
 *   description="새로운 일정을 등록해보세요"
 * />
 */
export default function EmptyState({
  message = '데이터가 없습니다',
  description,
  iconSize = 64,
}: EmptyStateProps) {
  return (
    <div className={styles.emptyContainer}>
      <div className={styles.emptyContent}>
        <Inbox className={styles.emptyIcon} size={iconSize} />
        <p className={styles.emptyMessage}>{message}</p>
        {description && (
          <p className={styles.emptyDescription}>{description}</p>
        )}
      </div>
    </div>
  );
}
