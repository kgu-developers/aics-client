import { Link, useNavigate } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';

import * as styles from '../styles/HomePage.css';

interface NavigateButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  /** 클릭 전 실행. false를 반환하면 이동하지 않습니다. */
  onBeforeNavigate?: () => Promise<boolean>;
}

export const NavigateButton = ({
  href,
  icon,
  label,
  onBeforeNavigate,
}: NavigateButtonProps) => {
  const navigate = useNavigate();

  if (onBeforeNavigate) {
    return (
      <button
        type='button'
        className={styles.homeButton}
        style={{ width: '100%' }}
        onClick={async () => {
          const canNavigate = await onBeforeNavigate();
          if (!canNavigate) return;
          await navigate({ to: href });
        }}
      >
        <div className={styles.homeButtonIcon}>{icon}</div>
        <span className={styles.homeButtonLabel}>
          {label.split('\n').map(line => (
            <Fragment key={line}>
              {line}
              <br />
            </Fragment>
          ))}
        </span>
      </button>
    );
  }

  return (
    <Link to={href} style={{ textDecoration: 'none', width: '100%' }}>
      <button type='button' className={styles.homeButton}>
        <div className={styles.homeButtonIcon}>{icon}</div>
        <span className={styles.homeButtonLabel}>
          {label.split('\n').map(line => (
            <Fragment key={line}>
              {line}
              <br />
            </Fragment>
          ))}
        </span>
      </button>
    </Link>
  );
};
