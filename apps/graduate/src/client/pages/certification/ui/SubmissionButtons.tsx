import { Link } from '@tanstack/react-router';
import { Button } from 'antd';

import { ROUTE } from '~/shared/constants';

import * as styles from '~/client/shared/styles/SubmissionPage.css';

interface SubmissionButtonsProps {
  backRoute?: string;
}

export const SubmissionButtons = ({
  backRoute = ROUTE.HOME,
}: SubmissionButtonsProps) => {
  return (
    <div className={styles.buttonContainer}>
      <Link to={backRoute} className={styles.buttonWrapper}>
        <Button size='large' type='primary' className={styles.button}>
          이전으로
        </Button>
      </Link>
      <Link to={ROUTE.HOME} className={styles.buttonWrapper}>
        <Button size='large' className={styles.button} type='primary'>
          완료
        </Button>
      </Link>
    </div>
  );
};
