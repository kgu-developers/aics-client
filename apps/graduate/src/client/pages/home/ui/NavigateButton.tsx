import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';

import * as styles from '../styles/HomePage.css';

interface NavigateButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export const NavigateButton = ({ href, icon, label }: NavigateButtonProps) => {
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
