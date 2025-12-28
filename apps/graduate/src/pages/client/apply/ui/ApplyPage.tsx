import { Link, useSearch } from '@tanstack/react-router';
import { Button } from 'antd';
import { useState } from 'react';

import { Section } from '~/shared/components';
import { GRADUATION_TYPE, type GraduationType } from '~/shared/constants';

import ApplyDrawer from './ApplyDrawer';
import ApplySteps from './ApplySteps';
import { useSubmitGraduationType } from '../api/submitGraduationType';
import { STEP_TITLE } from '../model/step';
import * as styles from '../styles/ApplyPage.css';

import { vars } from '~/vars.css';

export default function ApplyPage() {
  const { confirm } = useSearch({ from: '/_afterLogin/apply' }) as {
    confirm: boolean;
  };
  const [selectedOption, setSelectedOption] = useState<GraduationType>(
    GRADUATION_TYPE.THESIS,
  );
  const { mutate: submitGraduationType, isPending: isSubmitting } =
    useSubmitGraduationType();

  return (
    <div className={styles.container}>
      <Section.Header
        subtitle={`${STEP_TITLE[selectedOption]} 절차는 다음과 같이 진행돼요.`}
      >
        졸업 요건 취득 방식 신청
      </Section.Header>

      <ApplySteps selectedOption={selectedOption} confirm={confirm} />

      <div style={{ display: 'flex', gap: vars.spacing.md, width: '100%' }}>
        {Object.values(GRADUATION_TYPE).map(type => (
          <Button
            key={type}
            size='large'
            variant='text'
            className={
              selectedOption === type
                ? styles.activeOptionButton
                : styles.optionButton
            }
            type='primary'
            onClick={() => setSelectedOption(type)}
          >
            {STEP_TITLE[type]}
          </Button>
        ))}
      </div>

      <ApplyDrawer
        confirm={confirm}
        selectedOption={selectedOption}
        submitGraduationType={() => submitGraduationType(selectedOption)}
        isSubmitting={isSubmitting}
      />

      <Link to={'/apply?confirm=true' as any} style={{ width: '100%' }}>
        <Button size='large' className={styles.button} type='primary'>
          제출하기
        </Button>
      </Link>
    </div>
  );
}
