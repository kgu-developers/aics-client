import { Button, Drawer, Steps } from 'antd';
import { Link, useRouter } from '@tanstack/react-router';
import { type GraduationType, ROUTE } from '~/shared/constants';
import { STEP_TITLE } from '../model/step';
import useStep from '../model/useStep';

export default function ApplyDrawer({
  confirm,
  selectedOption,
  submitGraduationType,
  isSubmitting,
}: {
  confirm: boolean;
  selectedOption: GraduationType;
  submitGraduationType: () => void;
  isSubmitting: boolean;
}) {
  const router = useRouter();
  const handleCancel = () => {
    router.navigate({ to: ROUTE.APPLY, params: { confirm: false } });
  };

  const { index, step } = useStep({ selectedOption, confirm });

  return (
    <Drawer
      style={{
        width: '786px',
        margin: '0 auto',
        boxShadow: 'none',
        borderRadius: '16px 16px 0 0',
        display: 'flex',
      }}
      placement='bottom'
      onClose={handleCancel}
      height={500}
      open={confirm}
    >
      <p
        style={{
          fontSize: 20,
          marginBottom: 4,
          fontVariationSettings: `'wght' 600`,
        }}
      >
        {STEP_TITLE[selectedOption]} 방식을 선택하셨어요.
      </p>
      <p
        style={{
          marginBottom: 20,
        }}
      >
        졸업 방식 신청 절차를 다시 한번 확인해주세요.
      </p>
      <Steps
        direction='vertical'
        current={index}
        items={step}
        style={{ marginBottom: 20 }}
      />

      <Link to={ROUTE.HOME}>
        <Button
          onClick={submitGraduationType}
          loading={isSubmitting}
          size='large'
          style={{
            padding: '20px',
            borderRadius: '12px',
            width: '100%',
          }}
          type='primary'
        >
          제출하기
        </Button>
      </Link>
    </Drawer>
  );
}
