import { Link, useNavigate, useSearch } from '@tanstack/react-router';
import { Button } from 'antd';
import { useState } from 'react';

import {
  GRADUATION_TYPE,
  ROUTE,
  type GraduationType,
} from '~/shared/constants';

import ApplyDrawer from './ApplyDrawer';
import ApplySteps from './ApplySteps';
import { useSubmitGraduationType } from '../api/submitGraduationType';
import { STEP_TITLE } from '../model/step';
import * as styles from '../styles/ApplyPage.css';

import { vars } from '~/vars.css';

export default function ApplyPage() {
  const navigate = useNavigate();
  const { confirm } = useSearch({ from: '/apply' }) as {
    confirm: boolean;
  };
  const [selectedOption, setSelectedOption] = useState<GraduationType>(
    GRADUATION_TYPE.THESIS,
  );
  const { mutate: submitGraduationType, isPending: isSubmitting } =
    useSubmitGraduationType();

  const handleSubmit = () => {
    submitGraduationType(selectedOption, {
      onSuccess: () => {
        navigate({ to: ROUTE.APPLY_CONFIRM });
      },
    });
  };

  return (
    <div className={styles.container}>
      <header style={{ width: '100%', marginBottom: vars.spacing.md }}>
        <h1
          style={{
            fontSize: vars.font.size['xl'],
            fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
            color: vars.colors.black,
            marginBottom: vars.spacing.xs,
            marginTop: 0,
          }}
        >
          졸업 요건 취득 방식 신청
        </h1>
        <p style={{ fontSize: vars.font.size.md, color: vars.colors.subDark }}>
          {STEP_TITLE[selectedOption]} 절차는 다음과 같이 진행돼요.
        </p>
      </header>

      <ApplySteps selectedOption={selectedOption} confirm={confirm} />

      <div
        style={{
          display: 'flex',
          gap: vars.spacing.md,
          width: '100%',
          marginTop: vars.spacing.lg,
        }}
      >
        {Object.values(GRADUATION_TYPE).map(type => (
          <button
            key={type}
            className={
              selectedOption === type
                ? styles.activeOptionButton
                : styles.optionButton
            }
            onClick={() => setSelectedOption(type)}
          >
            {STEP_TITLE[type]}
          </button>
        ))}
      </div>

      <ApplyDrawer
        confirm={confirm}
        selectedOption={selectedOption}
        submitGraduationType={handleSubmit}
        isSubmitting={isSubmitting}
      />

      <Link
        to={ROUTE.APPLY}
        search={{ confirm: true }}
        style={{ width: '100%' }}
      >
        <Button size='large' className={styles.button} type='primary'>
          제출하기
        </Button>
      </Link>
    </div>
  );
}
