import { useRouter } from '@tanstack/react-router';
import { Button, Drawer, Steps } from 'antd';

import { type GraduationType, ROUTE } from '~/shared/constants';

import { STEP_TITLE } from '../model/step';
import useStep from '../model/useStep';
import * as styles from '../styles/ApplyPage.css';

interface ApplyDrawerProps {
  confirm: boolean;
  selectedOption: GraduationType;
  submitGraduationType: () => void;
  isSubmitting: boolean;
}

export default function ApplyDrawer({
  confirm,
  selectedOption,
  submitGraduationType,
  isSubmitting,
}: ApplyDrawerProps) {
  const router = useRouter();
  const handleCancel = () => {
    router.navigate({ to: ROUTE.APPLY, params: { confirm: false } });
  };

  const { index, step } = useStep({ selectedOption, confirm });

  return (
    <Drawer
      className={styles.drawer}
      placement='bottom'
      onClose={handleCancel}
      height={500}
      open={confirm}
    >
      <p className={styles.drawerTitle}>
        {STEP_TITLE[selectedOption]} 방식을 선택하셨어요.
      </p>
      <p className={styles.drawerDescription}>
        졸업 방식 신청 절차를 다시 한번 확인해주세요.
      </p>
      <Steps
        direction='vertical'
        current={index}
        items={step}
        className={styles.drawerDescription}
      />

      <Button
        onClick={submitGraduationType}
        loading={isSubmitting}
        size='large'
        className={styles.submitButton}
        type='primary'
      >
        제출하기
      </Button>
    </Drawer>
  );
}
