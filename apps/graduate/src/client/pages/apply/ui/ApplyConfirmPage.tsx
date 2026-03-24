import { useNavigate } from '@tanstack/react-router';
import { Check } from 'lucide-react';
import { useState } from 'react';

import { ROUTE } from '~/shared/constants';
import { notifyError, notifySuccess, notifyWarning } from '~/shared/utils';

import { useSubmitConfirmEmail } from '../api/submitConfirmEmail';
import * as styles from '../styles/ApplyConfirmPage.css';

export default function ApplyConfirmPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const { mutate: submitConfirmEmail, isPending: isSubmitting } =
    useSubmitConfirmEmail();

  const handleComplete = () => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      notifyWarning('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    if (email) {
      submitConfirmEmail(email, {
        onSuccess: () => {
          notifySuccess(`${email}로 알림 설정을 완료했습니다.`);
          navigate({ to: ROUTE.HOME });
        },
        onError: error => {
          notifyError(
            error,
            '이메일 등록에 실패했습니다. 다시 시도해주세요.',
          );
        },
      });
    } else {
      notifySuccess('신청이 완료되었습니다.');
      navigate({ to: ROUTE.HOME });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <Check size={40} strokeWidth={3} />
        </div>

        <h1 className={styles.title}>신청이 완료되었습니다</h1>
        <p className={styles.description}>
          졸업 요건 취득 방식 신청이 정상적으로 접수되었습니다.
          <br />
          학사 승인까지 영업일 기준 3~5일이 소요될 수 있습니다.
        </p>

        <div className={styles.inputSection}>
          <label htmlFor='email' className={styles.label}>
            알림 받을 이메일 (선택)
          </label>
          <input
            id='email'
            type='email'
            placeholder='example@kgu.ac.kr'
            className={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <button
          className={styles.button}
          onClick={handleComplete}
          disabled={isSubmitting}
        >
          {isSubmitting ? '처리 중...' : '홈으로 돌아가기'}
        </button>
      </div>
    </div>
  );
}
