import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';

import * as styles from '../styles/HomePage.css';

import { vars } from '~/vars.css';

interface NavigateButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export const NavigateButton = ({ href, icon, label }: NavigateButtonProps) => {
  return (
    <Link to={href} style={{ textDecoration: 'none' }}>
      <button type='button' className={styles.homeButton}>
        {icon}
        <p
          style={{
            textWrap: 'wrap',
            fontSize: vars.font.size.lg,
            textAlign: 'start',
            lineHeight: '1.5',
            fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
          }}
        >
          {label.split('\n').map(line => (
            <Fragment key={line}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
      </button>
    </Link>
  );
};
