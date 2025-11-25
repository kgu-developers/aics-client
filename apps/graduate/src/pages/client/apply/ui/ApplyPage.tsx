import { Link, useRouter, useSearch } from '@tanstack/react-router';
import { Button, Drawer, Steps } from 'antd';
import { useEffect, useState } from 'react';

import { Section } from '~/shared/components';
import { ROUTE } from '~/shared/constants';

import { STEP, STEP_TITLE, STEP_TYPE } from '../model/step';
import * as styles from '../styles/ApplyPage.css';

import { vars } from '~/vars.css';

export default function ApplyPage() {
  const { confirm } = useSearch({ from: '/_afterLogin/apply' }) as {
    confirm: boolean;
  };
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const step = STEP[selectedOption];
  const router = useRouter();

  useEffect(() => {
    const timeout = () => {
      if (confirm) return;
      if (step && step.length > 0) {
        if (index < step.length) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }
    };

    const timeoutId = setInterval(timeout, 2000);
    return () => clearInterval(timeoutId);
  }, [index, confirm]);

  const handleCancel = () => {
    router.navigate({ to: ROUTE.APPLY, params: { confirm: false } });
  };

  return (
    <div className={styles.container}>
      <Section.Header
        subtitle={`${STEP_TITLE[selectedOption]} 절차는 다음과 같이 진행돼요.`}
      >
        졸업 요건 취득 방식 신청
      </Section.Header>

      <Steps direction='vertical' current={index} items={step} />

      <div style={{ display: 'flex', gap: vars.spacing.md, width: '100%' }}>
        {Object.values(STEP_TYPE).map(type => (
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

      <Link to='/apply' params={{ confirm: true }} style={{ width: '100%' }}>
        <Button size='large' className={styles.button} type='primary'>
          제출하기
        </Button>
      </Link>
    </div>
  );
}
